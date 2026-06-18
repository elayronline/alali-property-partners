"use client"

import { useState } from "react"
import { buildDealListSubject } from "@/lib/enquiryEmail"

type Status = "idle" | "loading" | "success" | "error"

const WEB3FORMS_KEY = "4e50844e-651a-4107-9928-0fb0edd47d94"

/** Notifies the Outlook inbox of a Deal List signup and sends the subscriber a
    thank-you. Both are best-effort — the sheet write is the source of truth. */
function notifyAndThank(email: string, name: string) {
  // Inbox notification — clearly tagged so it sorts alongside other queries.
  const notify = new FormData()
  notify.append("access_key", WEB3FORMS_KEY)
  notify.append("subject", buildDealListSubject(email, name))
  notify.append("from_name", "Alali Property Partners")
  notify.append("replyto", email)
  notify.append("Name", name)
  notify.append("Email", email)
  notify.append("Source", "Deal List card")
  fetch("https://api.web3forms.com/submit", { method: "POST", body: notify }).catch(() => {})

  // Thank-you to the subscriber.
  const thanks = new FormData()
  thanks.append("access_key", WEB3FORMS_KEY)
  thanks.append("email_to", email)
  thanks.append("from_name", "Alali Property Partners")
  thanks.append("subject", "You're on the Deal List — Alali Property Partners")
  thanks.append(
    "message",
    `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;">
      <div style="background:#1a1a1a;padding:32px;border-radius:12px;">
        <h2 style="color:#c9a84c;margin-top:0;">You're on the Deal List${name ? `, ${name}` : ""}.</h2>
        <p style="color:#fff;">Thanks for joining — you'll now receive verified HMO and conversion-ready BRR opportunities across Greater London &amp; the South East as they land.</p>
        <p style="color:#fff;">No spam, and you can unsubscribe anytime by replying to any deal email.</p>
        <p style="color:#999;font-size:12px;margin-top:24px;">Alali Property Partners — Specialist HMO &amp; conversion-ready BRR sourcing across Greater London &amp; the South East</p>
      </div>
    </div>
    `,
  )
  fetch("https://api.web3forms.com/submit", { method: "POST", body: thanks }).catch(() => {})
}

/** Compact deal-list email capture, embedded in the Deal List pricing card.
    Posts to the same /api/mailing-list endpoint (source tagged for provenance). */
export function DealListSignup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "loading") return

    const trimmedName = name.trim()
    const trimmed = email.trim()
    if (!trimmedName) {
      setStatus("error")
      setMessage("Please enter your name.")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error")
      setMessage("Please enter a valid email address.")
      return
    }

    setStatus("loading")
    setMessage("")
    try {
      const res = await fetch("/api/mailing-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, name: trimmedName, source: "deal-list-card" }),
      })
      if (!res.ok) throw new Error("Request failed")
      notifyAndThank(trimmed, trimmedName)
      setStatus("success")
      setMessage("You're on the deal list — we'll send live deals as they land.")
      setName("")
      setEmail("")
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2.5 rounded-lg border border-gold/30 bg-gold/[0.08] px-3 py-3">
        <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-xs leading-snug text-white/80">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <label htmlFor="deal-list-name" className="sr-only">
        Full name
      </label>
      <input
        id="deal-list-name"
        type="text"
        autoComplete="name"
        placeholder="Your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
          if (status === "error") setStatus("idle")
        }}
        className="w-full rounded-lg border border-white/15 bg-ink px-3 py-2.5 text-sm text-white placeholder:text-white/35 transition-colors focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/40"
      />
      <label htmlFor="deal-list-email" className="sr-only">
        Email address
      </label>
      <input
        id="deal-list-email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          if (status === "error") setStatus("idle")
        }}
        className="w-full rounded-lg border border-white/15 bg-ink px-3 py-2.5 text-sm text-white placeholder:text-white/35 transition-colors focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/40"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="block w-full cursor-pointer rounded-lg bg-gold px-4 py-2.5 text-center text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Joining..." : "Join the Deal List →"}
      </button>
      {status === "error" && <p className="text-xs text-red-400">{message}</p>}
    </form>
  )
}
