"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, BookmarkCheck, Package, ShieldCheck, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useSmartNav } from "@/lib/smartNav"

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Choose how you want to invest",
    description:
      "Get sourced deals — off-market from our private contacts and on-market from our compliant agent network — or let us source to your exact brief.",
  },
  {
    icon: BookmarkCheck,
    step: "2",
    title: "Secure your deal",
    description:
      "Sourced deals: sign the sourcing agreement and pay £500 to unlock the deal pack — balance settled when you decide to proceed. Bespoke sourcing: £1,000 retainer to start your search.",
  },
  {
    icon: Package,
    step: "3",
    title: "Receive your full deal pack",
    description:
      "Every deal includes the full property address, photos, comparables, yield analysis, refurb costs, and recommended exit strategy.",
  },
  {
    icon: ShieldCheck,
    step: "4",
    title: "Move with confidence",
    description:
      "Off-market deals move fast — we make sure you have everything you need to make a confident call quickly, with us on hand throughout. Viewings and introductions are facilitated by us, and the £500 is refundable where the deal isn't right for you (subject to terms).",
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
  "Strategy options to consider (BTL, HMO, etc.) — informational, not financial advice",
  "Introductions to FCA-regulated brokers, qualified solicitors, surveyors, and vetted contractors",
]

export function HowItWorks() {
  const [packOpen, setPackOpen] = useState(false)
  const navigate = useSmartNav()

  return (
    <section id="how-it-works" className="bg-warm-grey px-4 py-20 sm:px-6 sm:py-28">
      {/* Divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-gray-200" />

      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">03</span>
          <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
          The Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mt-3 text-center text-3xl text-charcoal sm:text-5xl"
        >
          How It Works
        </motion.h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <s.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-charcoal">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-light">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Deal pack box — collapsible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-3xl rounded-xl border border-white/10 bg-dark-bg"
        >
          <button
            onClick={() => setPackOpen((prev) => !prev)}
            className="flex w-full cursor-pointer items-center justify-between p-4 sm:p-8"
            aria-expanded={packOpen}
            aria-controls="deal-pack-content"
          >
            <div className="text-left">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
                Deal Pack
              </p>
              <p className="text-sm font-bold text-white">
                Every deal includes:
              </p>
            </div>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${packOpen ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {packOpen && (
              <motion.div
                id="deal-pack-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="grid gap-2 px-4 pb-4 text-sm text-muted-dark sm:grid-cols-2 sm:px-8 sm:pb-4">
                  {dealPackItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="px-4 pb-4 text-[0.7rem] leading-relaxed text-white/40 sm:px-8 sm:pb-8">
                  Deal packs are informational only. They are not financial,
                  mortgage, tax, or legal advice. All figures are based on
                  publicly available data and require your own independent
                  verification (solicitor, surveyor, broker) before any
                  commitment.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bespoke alternative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl rounded-xl border border-gray-100 bg-white p-5 sm:p-6"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-bold text-charcoal">
                Looking for something specific?
              </p>
              <p className="mt-1 text-sm text-muted-light">
                Our bespoke sourcing service finds deals matched to your exact brief — strategy, budget, and location.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Link
                href="/bespoke"
                className="rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
              >
                Bespoke Sourcing
              </Link>
              <button
                onClick={() => navigate("contact")}
                className="rounded-lg border-2 border-gold px-5 py-2.5 text-sm font-bold text-gold transition-colors hover:bg-gold/10"
              >
                Talk to Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
