#!/usr/bin/env node
// Submit sitemap to Google Search Console via the Search Console API.
// Requires GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY env vars.
// The service account must be:
//   1. In a GCP project with Search Console API enabled
//   2. Added as a user on the GSC property for alalipropertypartners.com

import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"

const ENV_FILE = process.env.GSC_ENV_FILE || "/Users/alayi/HMOWList/.env.local"
const SITE_URL = "https://www.alalipropertypartners.com/"
const SITEMAP_PATH = "https://www.alalipropertypartners.com/sitemap.xml"
const SCOPE = "https://www.googleapis.com/auth/webmasters"

// Load env from file
const envText = fs.readFileSync(ENV_FILE, "utf8")
const env = {}
for (const line of envText.split("\n")) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^"(.*)"$/, "$1")
}

const SA_EMAIL = env.GOOGLE_SERVICE_ACCOUNT_EMAIL
const SA_KEY = env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
if (!SA_EMAIL || !SA_KEY) {
  console.error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY")
  process.exit(1)
}

// Build and sign JWT
const now = Math.floor(Date.now() / 1000)
const header = { alg: "RS256", typ: "JWT" }
const claims = {
  iss: SA_EMAIL,
  scope: SCOPE,
  aud: "https://oauth2.googleapis.com/token",
  exp: now + 3600,
  iat: now,
}
const b64url = (obj) =>
  Buffer.from(JSON.stringify(obj))
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
const unsigned = `${b64url(header)}.${b64url(claims)}`
const signer = crypto.createSign("RSA-SHA256")
signer.update(unsigned)
const signature = signer
  .sign(SA_KEY)
  .toString("base64")
  .replace(/=/g, "")
  .replace(/\+/g, "-")
  .replace(/\//g, "_")
const jwt = `${unsigned}.${signature}`

// Exchange JWT for access token
const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  }),
})
const tokenBody = await tokenRes.json()
if (!tokenRes.ok) {
  console.error("Token exchange failed:", tokenBody)
  process.exit(1)
}
const accessToken = tokenBody.access_token
console.log("✓ Got access token")

// Submit sitemap (PUT to Search Console)
const submitUrl = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/sitemaps/${encodeURIComponent(SITEMAP_PATH)}`
const submitRes = await fetch(submitUrl, {
  method: "PUT",
  headers: { Authorization: `Bearer ${accessToken}` },
})
if (submitRes.ok) {
  console.log(`✓ Sitemap submitted: ${SITEMAP_PATH}`)
} else {
  const errBody = await submitRes.text()
  console.error(`✗ Submit failed (${submitRes.status}):`, errBody)
  process.exit(1)
}

// Read back sitemap status
const getUrl = submitUrl
const getRes = await fetch(getUrl, {
  headers: { Authorization: `Bearer ${accessToken}` },
})
if (getRes.ok) {
  const info = await getRes.json()
  console.log("✓ Sitemap status:")
  console.log(JSON.stringify(info, null, 2))
}
