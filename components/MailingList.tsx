"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type Status = "idle" | "loading" | "success" | "error"

export function MailingList() {
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
        body: JSON.stringify({ email: trimmed, source: "mailing-list-band" }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setMessage("You're on the list. We'll be in touch with verified opportunities.")
      setEmail("")
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again or email us directly.")
    }
  }

  return (
    <section
      id="mailing-list"
      className="relative overflow-hidden border-t border-white/5 bg-dark-bg px-4 py-12 sm:px-6 sm:py-14"
    >
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-dark-bg-light/70 px-6 py-7 sm:px-9 sm:py-8"
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
            {/* Copy */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold/80">
                Deal mailing list
              </p>
              <h2 className="font-display mt-2 text-2xl leading-tight text-white sm:text-3xl">
                Not ready to brief us yet?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                Join the deal mailing list for occasional verified HMO and BRR opportunities across
                London and the South East. <span className="text-white/75">2.4% sourcing fee</span>{" "}
                (min £3,600, incl. VAT) on any deal you proceed with.
              </p>
            </div>

            {/* Form */}
            <div>
              {status === "success" ? (
                <div className="flex items-center gap-3 rounded-lg border border-gold/25 bg-gold/[0.06] px-4 py-3.5">
                  <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-white/75">{message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="mailing-list-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="mailing-list-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (status === "error") setStatus("idle")
                    }}
                    className="w-full rounded-lg border border-white/15 bg-dark-bg px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/40"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="shrink-0 cursor-pointer rounded-lg border border-gold/60 px-6 py-3 text-sm font-semibold text-gold transition-all hover:border-gold hover:bg-gold hover:text-dark-bg disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? "Joining..." : "Join the List"}
                  </button>
                </form>
              )}
              {status === "error" && (
                <p className="mt-2 text-xs text-red-400">{message}</p>
              )}
              <p className="mt-2.5 text-xs text-white/40">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
