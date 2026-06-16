"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SectionDivider } from "@/components/ui/SectionDivider"
import { useSmartNav } from "@/lib/smartNav"

const steps = [
  {
    step: "01",
    title: "Choose how you want to invest",
    description:
      "Get sourced deals — off-market from our private contacts and on-market from our compliant agent network — or commission bespoke sourcing to your exact brief.",
  },
  {
    step: "02",
    title: "Secure your deal",
    description:
      "Sourced deals: sign the sourcing agreement and pay £500 to unlock the deal pack — balance settled when you decide to proceed. Bespoke sourcing: £1,000 retainer to start your search.",
  },
  {
    step: "03",
    title: "Receive your full deal pack",
    description:
      "Every deal includes the full property address, photos, comparables, indicative yield, indicative refurb scope, and a local area summary — informational only, not advice.",
  },
  {
    step: "04",
    title: "Move with confidence",
    description:
      "We facilitate viewings and introductions on your behalf. Off-market deals move fast — extensions available on fair, justified reasoning. £500 refundable where there are valid reasons (subject to terms).",
  },
]

// Deal pack contents — introducer-compliant framing.
// Every item is positioned as informational/observed (public data), not as
// advice, valuation, or projection. Regulated-services items are signposted
// for onward introduction, not delivered by us.
const dealPackItems = [
  "Full property address, location details, and tenure",
  "Photos provided by the vendor or agent (where available)",
  "Asking or agreed purchase price",
  "Land Registry comparable evidence (public records, informational)",
  "Observed local market rents from public lettings data (informational, not guaranteed)",
  "Indicative gross yield based on observed rents (not a return projection)",
  "Indicative refurbishment scope where applicable — to be verified by your contractor or surveyor",
  "Indicative resale comparables for flips and developments (not a valuation)",
  "Local area summary: demand drivers, planning context, transport links",
  "Strategy options to consider (HMO, BRR conversion, etc.) — informational, not financial advice",
  "Introductions to FCA-regulated brokers, qualified solicitors, surveyors, and vetted contractors",
]

export function HowItWorks() {
  const navigate = useSmartNav()

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-warm-grey px-4 py-20 sm:px-6 sm:py-28"
    >
      <SectionDivider variant="light" className="relative mb-16" />

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">
            03
          </span>
          <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
          The Process
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mt-3 text-center text-3xl text-charcoal sm:text-5xl"
        >
          How It Works
        </motion.h2>

        {/* Desktop horizontal timeline (lg+) */}
        <div className="relative mt-16 hidden lg:block">
          {/* Connecting rail */}
          <div className="absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="relative grid grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group relative text-center"
              >
                {/* Numeral + dot on rail */}
                <div className="relative mx-auto mb-6 flex h-24 items-center justify-center">
                  <span
                    aria-hidden
                    className="absolute top-12 -mt-1 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_4px_var(--warm-grey)] transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:bg-gold-light"
                  />
                  <span className="font-display select-none text-7xl text-gold/[0.13] transition-colors duration-300 group-hover:text-gold/30">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display text-xl tracking-tight text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-light">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet vertical timeline (< lg) */}
        <div className="relative mt-12 lg:hidden">
          {/* Vertical rail */}
          <div className="absolute top-4 bottom-4 left-7 w-px bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0" />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative flex gap-5"
              >
                {/* Numeral marker on rail */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-warm-grey ring-1 ring-gold/20">
                  <span className="font-display text-2xl font-medium text-gold">
                    {s.step}
                  </span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-lg tracking-tight text-charcoal">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-light">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deal pack — inline editorial list */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="border-t border-gray-200 pt-12">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              What every deal pack includes
            </p>
            <ul className="mx-auto mt-8 grid max-w-3xl gap-y-3 gap-x-10 text-sm leading-relaxed text-charcoal/80 sm:grid-cols-2">
              {dealPackItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  className="flex items-start gap-2.5"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-3xl text-center text-[0.7rem] leading-relaxed text-charcoal/45">
              Deal packs are informational only and do not constitute financial, mortgage,
              tax, or legal advice. All figures are based on publicly available data and
              require your own independent verification (solicitor, surveyor, broker)
              before any commitment.
            </p>
          </div>
        </motion.div>

        {/* Bespoke alternative — refined inline CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-3 rounded-xl border border-gold/15 bg-white/60 px-6 py-5 text-center sm:flex-row sm:gap-6 sm:text-left"
        >
          <div className="flex-1">
            <p className="font-display text-base text-charcoal">
              Looking for something specific?
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-muted-light">
              Bespoke sourcing — find deals matched to your exact brief.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/bespoke"
              className="rounded-full bg-gold px-4 py-2 text-xs font-semibold text-dark-bg transition-colors hover:bg-gold-light"
            >
              Bespoke Sourcing
            </Link>
            <button
              onClick={() => navigate("contact")}
              className="text-xs font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-dark hover:underline"
            >
              Talk to us →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
