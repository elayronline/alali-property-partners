/**
 * Branded thank-you emails for form submitters, sent from the
 * contact@alalipropertypartners.com Outlook mailbox.
 *
 * Delivery goes through a Make.com scenario (webhook → Microsoft 365 "Send an
 * Email"), which sends via the mailbox's OAuth connection. This sidesteps the
 * SMTP-AUTH block on the GoDaddy-resold M365 tenant and Web3Forms' free tier,
 * which can't deliver a custom email to the prospect. The templates live here
 * (version-controlled, easy to edit); Make is a dumb relay that just maps
 * to / name / subject / html onto the outgoing message.
 *
 * The webhook URL is a capability URL — keep it server-side only. Required env:
 *   MAKE_THANKYOU_WEBHOOK_URL = https://hook.eu1.make.com/...
 */

export type ThankYouType = "contact" | "deal-list"

const FOOTER =
  '<p style="color:#999;font-size:12px;margin-top:24px;">Alali Property Partners — ' +
  "Specialist HMO sourcing across Greater London &amp; the South East</p>"

function shell(inner: string): string {
  return (
    '<div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;">' +
    '<div style="background:#1a1a1a;padding:32px;border-radius:12px;">' +
    inner +
    FOOTER +
    "</div></div>"
  )
}

/** Escapes user-supplied text before it lands in the HTML body. */
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function contactEmail(name: string, onMailingList: boolean): { subject: string; html: string } {
  const greeting = name ? esc(name) : "there"
  const listBlock = onMailingList
    ? '<div style="margin-top:24px;padding:16px;background:#26282c;border:1px solid rgba(201,160,61,0.4);border-radius:8px;">' +
      '<p style="color:#c9a84c;margin:0 0 6px 0;font-weight:bold;">You\'re on the deal mailing list</p>' +
      '<p style="color:#fff;margin:0;font-size:14px;">We\'ll send occasional verified HMO opportunities across London and the South East. No spam — unsubscribe anytime.</p>' +
      "</div>"
    : ""
  const inner =
    `<h2 style="color:#c9a84c;margin-top:0;">Thanks for getting in touch, ${greeting}!</h2>` +
    '<p style="color:#fff;">We\'ve received your enquiry and one of us will be in touch directly.</p>' +
    '<p style="color:#fff;">In the meantime, if you have any urgent questions, feel free to reply to this email.</p>' +
    listBlock
  return { subject: "Thanks for your enquiry — Alali Property Partners", html: shell(inner) }
}

function dealListEmail(name: string): { subject: string; html: string } {
  const inner =
    `<h2 style="color:#c9a84c;margin-top:0;">You're on the Deal List${name ? `, ${esc(name)}` : ""}.</h2>` +
    '<p style="color:#fff;">Thanks for joining — you\'ll now receive verified HMO and conversion-ready opportunities across Greater London &amp; the South East as they land.</p>' +
    '<p style="color:#fff;">No spam, and you can unsubscribe anytime by replying to any deal email.</p>' +
    '<div style="margin-top:24px;padding:16px;background:#26282c;border:1px solid rgba(201,160,61,0.4);border-radius:8px;">' +
    '<p style="color:#c9a84c;margin:0 0 6px 0;font-weight:bold;">How our fees work</p>' +
    '<p style="color:#fff;margin:0;font-size:14px;">Joining is free. If you choose to act on a deal, our fixed sourcing fees apply — The Deal List is £5,000 per deal (a £500 refundable deposit unlocks the full pack and viewing; £4,500 on completion). Bespoke Sourcing is £8,000. Full details: ' +
    '<a href="https://www.alalipropertypartners.com/pricing" style="color:#c9a84c;">pricing</a> and ' +
    '<a href="https://www.alalipropertypartners.com/terms" style="color:#c9a84c;">terms of service</a>.</p>' +
    "</div>"
  return { subject: "You're on the Deal List — Alali Property Partners", html: shell(inner) }
}

/** True when the Make relay is configured — lets the route degrade gracefully. */
export function mailerConfigured(): boolean {
  return Boolean(process.env.MAKE_THANKYOU_WEBHOOK_URL)
}

/** Sends the branded thank-you via the Make webhook. Throws on failure so the
    caller can log; the API route treats sending as best-effort. */
export async function sendThankYou(
  type: ThankYouType,
  to: string,
  name: string,
  onMailingList: boolean,
): Promise<void> {
  const { subject, html } =
    type === "deal-list" ? dealListEmail(name) : contactEmail(name, onMailingList)

  const url = process.env.MAKE_THANKYOU_WEBHOOK_URL
  if (!url) throw new Error("MAKE_THANKYOU_WEBHOOK_URL is not set")

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to, name, subject, html }),
  })
  if (!res.ok) throw new Error(`Make webhook responded ${res.status}`)
}
