#!/usr/bin/env node
// Mobile stress-test: load the home page at iPhone & Android viewports
// and report overflow / clipping / readability issues, plus take
// full-page screenshots for visual inspection.

import puppeteer from "puppeteer-core"
import { mkdirSync } from "node:fs"

const SITE = process.argv[2] || "http://localhost:3027/"
const OUT = "/tmp/mobile-audit"
mkdirSync(OUT, { recursive: true })

const devices = [
  { name: "iphone-se-1",       w: 320, h: 568,  ua: "iPhone OS 12_0" },
  { name: "android-min",       w: 360, h: 640,  ua: "Android 10; Mobile" },
  { name: "iphone-se-2",       w: 375, h: 667,  ua: "iPhone OS 13_0" },
  { name: "android-galaxy-s9", w: 360, h: 740,  ua: "Android 10; SM-G960" },
  { name: "android-pixel-5",   w: 393, h: 851,  ua: "Android 12; Pixel 5" },
  { name: "iphone-14",         w: 390, h: 844,  ua: "iPhone OS 17_0" },
  { name: "iphone-15-pro",     w: 393, h: 852,  ua: "iPhone OS 17_5" },
  { name: "android-pixel-7p",  w: 412, h: 915,  ua: "Android 14; Pixel 7 Pro" },
  { name: "iphone-14-pro-max", w: 428, h: 926,  ua: "iPhone OS 17_0" },
]

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu"],
})

const allIssues = []

for (const d of devices) {
  const page = await browser.newPage()
  await page.setViewport({
    width: d.w,
    height: d.h,
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true,
  })
  await page.setUserAgent(
    `Mozilla/5.0 (Mobile; ${d.ua}) AppleWebKit/605.1.15 Mobile Safari/604.1`
  )

  try {
    await page.goto(SITE, { waitUntil: "networkidle0", timeout: 20000 })
  } catch (e) {
    console.log(`✗ ${d.name} (${d.w}x${d.h}): page load failed — ${e.message}`)
    await page.close()
    continue
  }

  // Allow framer-motion intros to settle
  await new Promise((r) => setTimeout(r, 1200))

  // ─────────────────────────────────────────────────────────────────
  // Audit: detect horizontal overflow + find culprits
  // ─────────────────────────────────────────────────────────────────
  const audit = await page.evaluate(() => {
    const docW = document.documentElement.clientWidth
    const overflow = document.body.scrollWidth - docW

    // Find any element that extends past the viewport horizontally
    const culprits = []
    const all = document.querySelectorAll("body *")
    for (const el of all) {
      const r = el.getBoundingClientRect()
      if (r.right > docW + 1 && r.width > 1) {
        culprits.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || "").toString().slice(0, 80),
          right: Math.round(r.right),
          width: Math.round(r.width),
          text: (el.textContent || "").slice(0, 40).replace(/\s+/g, " ").trim(),
        })
        if (culprits.length >= 8) break
      }
    }

    // Check key components are rendered
    const checks = {
      hero_h1: !!document.querySelector("#hero h1, section#hero h1"),
      coverage_svg: !!document.querySelector("section#coverage svg"),
      pricing_cards: document.querySelectorAll("section#pricing .group").length,
      recommended_badge_visible: (() => {
        // Find Recommended badge and check it's not clipped
        const badge = [...document.querySelectorAll("span")].find((s) =>
          s.textContent.trim().startsWith("✦ Recommended")
        )
        if (!badge) return "not-found"
        const r = badge.getBoundingClientRect()
        // Badge should be visible (not hidden by overflow)
        if (r.width === 0 || r.height === 0) return "zero-size"
        if (r.top < 0 - 5) return "above-viewport-clipped"
        // Check if parent clips it
        const parent = badge.closest("[class*=overflow-hidden]")
        if (parent && parent !== badge) {
          const pr = parent.getBoundingClientRect()
          if (r.top < pr.top - 1) return "clipped-by-overflow-hidden"
        }
        return "ok"
      })(),
      contact_form: !!document.querySelector("section#contact form"),
      footer: !!document.querySelector("footer"),
    }

    // Hero H1 visibility & size
    const heroH1 = document.querySelector("section#hero h1")
    const heroH1Info = heroH1 ? (() => {
      const r = heroH1.getBoundingClientRect()
      const cs = window.getComputedStyle(heroH1)
      return {
        text: (heroH1.textContent || "").slice(0, 80),
        width: Math.round(r.width),
        fontSize: cs.fontSize,
        visible: r.width > 0 && r.height > 0 && r.right <= docW + 1,
      }
    })() : null

    return { docW, overflow, culprits, checks, heroH1Info }
  })

  console.log(`\n━━━ ${d.name} (${d.w}×${d.h}) ━━━`)
  console.log(`  docW: ${audit.docW}  overflow: ${audit.overflow}px`)
  console.log(`  checks:`, audit.checks)
  if (audit.heroH1Info) console.log(`  hero H1:`, audit.heroH1Info)
  if (audit.culprits.length) {
    console.log(`  Overflow culprits:`)
    for (const c of audit.culprits) {
      console.log(`    ${c.tag}.${c.cls.slice(0,40)} right=${c.right} (${c.width}px) "${c.text}"`)
    }
  }

  if (audit.overflow > 1) allIssues.push(`${d.name}: ${audit.overflow}px horizontal overflow`)
  if (audit.checks.recommended_badge_visible !== "ok") {
    allIssues.push(`${d.name}: badge ${audit.checks.recommended_badge_visible}`)
  }

  // Full-page screenshot
  await page.screenshot({
    path: `${OUT}/${d.name}.png`,
    fullPage: true,
    type: "png",
  })

  await page.close()
}

await browser.close()

console.log("\n═══════════════════════════════════")
console.log(`Issues across all viewports: ${allIssues.length}`)
for (const i of allIssues) console.log("  -", i)
console.log(`\nScreenshots: ${OUT}/`)
