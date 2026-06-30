"use client"

import { motion } from "framer-motion"
import { FileSignature, BadgePoundSterling, FileSearch } from "lucide-react"
import { SectionDivider } from "@/components/ui/SectionDivider"

// Trust / risk-reversal pillars — lifted from the brochure's "Terms & assurances".
// This is the credibility layer a cold investor needs before paying.
const assurances = [
  {
    icon: FileSignature,
    title: "Signed before viewing",
    detail:
      "A sourcing agreement — including a non-circumvention clause — is signed before any address is shared or viewing arranged. It protects both sides and keeps the process clear from the outset.",
  },
  {
    icon: BadgePoundSterling,
    title: "Paid on completion",
    detail:
      "Our main sourcing fee is payable on completion — so we're only paid when a deal is real enough for you to transact on. Deposits are refundable on a genuine no after viewing, or credited if you proceed.",
  },
  {
    icon: FileSearch,
    title: "Evidenced, never advised",
    detail:
      "We share factual market evidence — comparables and observed rents — not advice. Every figure is an indicative reference point you're free to check your own way, and the decision is always yours.",
  },
]

export function Assurances() {
  return (
    <section
      id="assurances"
      className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="animated-grid pointer-events-none absolute inset-0" />

      <SectionDivider variant="dark" className="relative mb-16" />

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          How We Protect You
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-display mt-3 text-center text-3xl text-white sm:text-4xl"
        >
          Built to be safe, clear and on your side
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-white/60"
        >
          A property deal sourcing and introducer service — structured so the risk sits with us, not
          you, until a deal is real.
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {assurances.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-ink-raised/60 p-7 transition-colors duration-300 hover:border-gold/30"
            >
              <a.icon className="h-8 w-8 text-gold" strokeWidth={1.25} />
              <h3 className="font-display mt-5 text-xl text-white">{a.title}</h3>
              <div className="mt-3 h-px w-10 bg-gold/50" />
              <p className="mt-4 text-sm leading-relaxed text-white/65">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
