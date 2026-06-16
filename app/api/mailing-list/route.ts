import { NextResponse } from "next/server"

// Forwards mailing-list signups to a Google Apps Script Web App bound to the
// deal mailing-list spreadsheet. The webhook URL is held in an env var so no
// Google credentials live in the repo. See scripts/mailing-list-apps-script.gs
// for the script to deploy and the setup steps.
//
//   MAILING_LIST_WEBHOOK_URL = https://script.google.com/macros/s/.../exec

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: { email?: unknown; name?: unknown; source?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 })
  }

  const email = typeof body.email === "string" ? body.email.trim() : ""
  const name = typeof body.name === "string" ? body.name.trim() : ""
  const source = typeof body.source === "string" ? body.source.trim() : "website"

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ success: false, error: "A valid email is required" }, { status: 400 })
  }

  const webhookUrl = process.env.MAILING_LIST_WEBHOOK_URL
  if (!webhookUrl) {
    // Misconfiguration shouldn't surface to the visitor as a hard failure, but
    // we log it so it's caught in deployment.
    console.error("MAILING_LIST_WEBHOOK_URL is not set — mailing-list signup not recorded")
    return NextResponse.json(
      { success: false, error: "Mailing list is temporarily unavailable" },
      { status: 503 },
    )
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, source, submittedAt: new Date().toISOString() }),
    })
    if (!res.ok) throw new Error(`Apps Script responded ${res.status}`)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Failed to record mailing-list signup:", err)
    return NextResponse.json(
      { success: false, error: "Could not record signup, please try again" },
      { status: 502 },
    )
  }
}
