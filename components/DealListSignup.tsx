"use client"

import { useState } from "react"

type Status = "idle" | "loading" | "success" | "error"

/** Compact deal-list email capture, embedded in the Sourced Deals pricing card.
    Posts to the same /api/mailing-list endpoint (source tagged for provenance). */
export function DealListSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "loading") return

    const trimmed = email.trim()
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
        body: JSON.stringify({ email: trimmed, source: "deal-list-card" }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setMessage("You're on the deal list — we'll send live deals as they land.")
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
