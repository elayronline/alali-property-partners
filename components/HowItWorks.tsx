"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, BookmarkCheck, Package, ShieldCheck, ChevronDown } from "lucide-react"
import Link from "next/link"
import { scrollToSection } from "@/lib/smoothScroll"

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Browse the marketplace",
    description:
      "Explore our live deal portfolio — every listing includes key numbers, strategy, and location so you can quickly see if it fits.",
  },
  {
    icon: BookmarkCheck,
    step: "2",
    title: "Reserve for £100",
    description:
      "Found a deal that works? Secure it with a £100 reservation fee. The deal is locked in for you while we prepare your full pack.",
  },
  {
    icon: Package,
    step: "3",
    title: "Receive your full deal pack",
    description:
      "Within 24 hours we release everything: property address, photos, comparables, yield analysis, refurb costs, and recommended exit strategy.",
  },
  {
    icon: ShieldCheck,
    step: "4",
    title: "14 days to verify everything",
    description:
      "We introduce you to the agent or vendor. You have a full 14 days to run your own due diligence. Not satisfied? You're covered — full details in our terms.",
  },
]

const dealPackItems = [
  "Full property address and location details",
  "Property photos (interior and exterior where available)",
  "Purchase price and comparable sold prices",
  "Yield calculations and rental income evidence",
  "Refurbishment cost estimate (where applicable)",
  "Target resale value (for flip and development deals)",
  "Area demand and local market summary",
  "Recommended strategy and exit options",
]

export function HowItWorks() {
  const [packOpen, setPackOpen] = useState(false)

  return (
    <section id="how-it-works" className="bg-warm-grey px-4 py-20 sm:px-6 sm:py-28">
      {/* Divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-gray-200" />

      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-gold"
        >
          The Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-center text-2xl font-bold text-charcoal sm:text-4xl"
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
                <ul className="grid gap-2 px-4 pb-4 text-sm text-muted-dark sm:grid-cols-2 sm:px-8 sm:pb-8">
                  {dealPackItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                onClick={() => scrollToSection("contact")}
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
