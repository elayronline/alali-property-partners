"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useSmartNav } from "@/lib/smartNav"

/**
 * Mobile-only sticky bottom CTA. Slides up once the visitor scrolls past the
 * hero (so it doesn't duplicate the hero's own button), keeping the primary
 * conversion action one tap away on long pages. Hidden on desktop (the navbar
 * already carries the CTA) and on /contact (the form is already the page).
 */
export function StickyMobileCta() {
  const pathname = usePathname()
  const navigate = useSmartNav()
  const [scrolled, setScrolled] = useState(false)
  const [nearEnd, setNearEnd] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Get out of the way once the visitor reaches the contact form or footer, so
  // the bar never covers them.
  useEffect(() => {
    const targets = [
      document.getElementById("contact"),
      document.querySelector("footer"),
    ].filter(Boolean) as Element[]
    if (!targets.length) return
    const visible = new Set<Element>()
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target)
        else visible.delete(e.target)
      }
      setNearEnd(visible.size > 0)
    })
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [pathname])

  if (pathname === "/contact") return null

  const show = scrolled && !nearEnd

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="safe-bottom border-t border-gold/20 bg-ink/95 px-4 pb-3 pt-3 shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.6)] backdrop-blur-sm">
        <button
          type="button"
          onClick={() => navigate("contact")}
          tabIndex={show ? 0 : -1}
          className="btn-gold block w-full cursor-pointer px-5 py-3.5 text-center text-sm font-bold"
        >
          Tell Us Your Brief →
        </button>
      </div>
    </div>
  )
}
