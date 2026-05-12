#!/usr/bin/env node
// Submit all live URLs to IndexNow (Bing, Yandex, Seznam, Naver, Yep, etc.)
// The general IndexNow endpoint fans the request out to all participating engines.

const HOST = "www.alalipropertypartners.com"
const KEY = "b333cbf642d7e9d822018e87d718d8c9"
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

// Pull live URL list from the deployed sitemap so submissions always match prod.
const sitemapRes = await fetch(`https://${HOST}/sitemap.xml`)
if (!sitemapRes.ok) {
  console.error("Failed to fetch sitemap:", sitemapRes.status)
  process.exit(1)
}
const sitemapXml = await sitemapRes.text()
const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])

if (urls.length === 0) {
  console.error("No URLs found in sitemap")
  process.exit(1)
}
console.log(`Submitting ${urls.length} URLs to IndexNow:`)
urls.forEach((u) => console.log("  -", u))

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }),
})

const body = await res.text()
console.log(`\nIndexNow response: ${res.status} ${res.statusText}`)
if (body) console.log(body)

// Reference for status codes:
//   200 OK              — URL submitted successfully
//   202 Accepted        — Submitted; key validation pending
//   400 Bad Request     — Invalid format
//   403 Forbidden       — Key not valid (e.g. key file 404 or content mismatch)
//   422 Unprocessable   — URLs don't belong to this host or key, or invalid format
//   429 Too Many Reqs   — Rate limited
if (res.status >= 200 && res.status < 300) {
  console.log("✓ Done")
} else {
  process.exit(1)
}
