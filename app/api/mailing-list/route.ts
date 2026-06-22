import { NextResponse } from "next/server"
import { mailerConfigured, sendThankYou, type ThankYouType } from "@/lib/thankYou"

// Two responsibilities, kept independent:
//   1. Record a mailing-list signup to the deal spreadsheet, via a Google Apps
//      Script Web App. URL held in an env var so no Google creds live in the
//      repo. See scripts/mailing-list-apps-script.gs.
//        MAILING_LIST_WEBHOOK_URL = https://script.google.com/macros/s/.../exec
//   2. Send the prospect a branded thank-you from the domain mailbox, relayed
//      through a Make.com scenario (see lib/thankYou.ts —
//      MAKE_THANKYOU_WEBHOOK_URL).
//
// Recording is the critical path for deal-list signups (the sheet is the source
// of truth) — a recording failure returns an error so the card can retry. The
// thank-you email is always best-effort: it must never fail the request, since
// the visitor has already been shown the success state.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: {
    email?: unknown
    name?: unknown
    source?: unknown
    record?: unknown
    emailType?: unknown
    onMailingList?: unknown
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 })
  }

  const email = typeof body.email === "string" ? body.email.trim() : ""
  const name = typeof body.name === "string" ? body.name.trim() : ""
  const source = typeof body.source === "string" ? body.source.trim() : "website"

  // Whether to write a sheet row (default true) and which thank-you to send.
  // The contact form sends a "contact" thank-you whether or not it opts the
  // prospect into the list, so recording and emailing are independent.
  const record = body.record !== false
  const emailType: ThankYouType | "none" =
    body.emailType === "contact" || body.emailType === "deal-list" ? body.emailType : "none"
  const onMailingList = body.onMailingList === true

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ success: false, error: "A valid email is required" }, { status: 400 })
  }

  // 1. Record to the sheet (critical path when requested).
  if (record) {
    const webhookUrl = process.env.MAILING_LIST_WEBHOOK_URL
    if (!webhookUrl) {
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
    } catch (err) {
      console.error("Failed to record mailing-list signup:", err)
      return NextResponse.json(
        { success: false, error: "Could not record signup, please try again" },
        { status: 502 },
      )
    }
  }

  // 2. Send the branded thank-you (best-effort — never fails the request).
  if (emailType !== "none") {
    if (!mailerConfigured()) {
      console.error("SMTP env not configured — thank-you email not sent")
    } else {
      try {
        await sendThankYou(emailType, email, name, onMailingList)
      } catch (err) {
        console.error("Failed to send thank-you email:", err)
      }
    }
  }

  return NextResponse.json({ success: true })
}
