"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Tell Us Your Criteria",
    description: "Share your goals, strategy, location and budget.",
  },
  {
    step: "02",
    title: "We Source Opportunities",
    description: "We access our network to find off-market and pre-auction deals.",
  },
  {
    step: "03",
    title: "We Review The Numbers",
    description: "Every opportunity is analysed and stress-tested.",
  },
  {
    step: "04",
    title: "We Make The Introduction",
    description: "You receive the full deal pack and decide next steps.",
  },
]

// Deal pack contents — informational/observed framing (public data), not advice.
const dealPackItems = [
  "Full property address, location details, and tenure",
  "Photos provided by the vendor or agent (where available)",
  "Asking or agreed purchase price",
  "Land Registry comparable evidence (public records, informational)",
  "Observed local market rents from public lettings data (informational, not guaranteed)",
  "Indicative gross yield based on observed rents (not a return projection)",
  "Indicative refurbishment scope where applicable — to be verified by your contractor or surveyor",
  "Indicative resale or refinance comparables where an exit applies (not a valuation)",
  "Local area summary: demand drivers, planning context, transport links",
  "Strategy options to consider (HMO, BRR conversion) — informational, not financial advice",
  "Introductions to FCA-regulated brokers, qualified solicitors, surveyors, and vetted contractors",
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-ink px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-luxe text-gold"
        >
          How It Works
        </motion.p>

        {/* Four steps */}
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative ${i > 0 ? "lg:border-l lg:border-gold/15 lg:pl-8" : ""}`}
            >
              <span className="font-display text-5xl font-medium text-gold sm:text-6xl">
                {s.step}
              </span>
              <div className="mt-4 flex items-start gap-2">
                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gold/70" strokeWidth={2} />
                <div>
                  <h3 className="font-display text-lg tracking-tight text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">{s.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deal pack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 border-t border-white/10 pt-14"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-luxe text-gold">
            What every deal pack includes
          </p>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-x-10 gap-y-3 text-sm leading-relaxed text-white/75 sm:grid-cols-2">
            {dealPackItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-3xl text-center text-[0.7rem] leading-relaxed text-white/40">
            Deal packs are informational only and do not constitute financial, mortgage, tax, or
            legal advice. All figures are based on publicly available data and require your own
            independent verification (solicitor, surveyor, broker) before any commitment.
          </p>
        </motion.div>

        {/* Bespoke alternative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-3 rounded-sm border border-gold/20 bg-white/[0.03] px-6 py-5 text-center sm:flex-row sm:gap-6 sm:text-left"
        >
          <div className="flex-1">
            <p className="font-display text-lg text-white">Looking for something specific?</p>
            <p className="mt-0.5 text-sm leading-relaxed text-white/55">
              Bespoke sourcing — deals matched to your exact brief.
            </p>
          </div>
          <Link
            href="/contact?enquiry=Bespoke%20Sourcing"
            className="btn-gold-outline shrink-0 px-5 py-2.5 text-[0.7rem]"
          >
            Bespoke Sourcing
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
