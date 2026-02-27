"use client"

import { motion } from "framer-motion"
import { ClipboardList, Search, Package } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { scrollToSection } from "@/lib/smoothScroll"

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Tell us what you're looking for",
    description:
      "Strategy, budget, target areas, and preferred yield — we source to your brief. Not sure yet? We'll help you figure it out.",
  },
  {
    icon: Search,
    step: "2",
    title: "We find and verify the deal",
    description:
      "Every opportunity is checked against Land Registry sold prices, rental values, and area demand. If the numbers don't work, you don't see it.",
  },
  {
    icon: Package,
    step: "3",
    title: "Receive a complete deal pack",
    description:
      "Purchase price, comparables, gross and net yields, refurb costs, and recommended exit — everything you need to make a decision.",
  },
]

const dealPackItems = [
  "Purchase price and comparable sold prices",
  "Gross and net yield calculations",
  "Rental income evidence (room-level or nightly rates where applicable)",
  "Refurbishment cost estimate (where applicable)",
  "Target resale value for flip and development deals",
  "Area demand and occupancy summary",
  "Recommended strategy and exit options",
  "R2R: guaranteed rent vs market rent, lease terms, and projected profit",
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-warm-grey px-4 py-20 sm:px-6 sm:py-28">
      {/* Gold divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

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
          className="mt-3 text-center text-3xl font-bold text-charcoal sm:text-4xl"
        >
          How It Works
        </motion.h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
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

        {/* Premium deal pack box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-3xl rounded-xl border border-gold/20 bg-dark-bg p-8"
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
            Deal Pack
          </p>
          <p className="mb-4 text-sm font-bold text-white">
            What&apos;s in your deal pack:
          </p>
          <ul className="grid gap-2 text-sm text-muted-dark sm:grid-cols-2">
            {dealPackItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Button variant="secondary" onClick={() => scrollToSection("contact")}>
            Start a Conversation &rarr;
          </Button>
          <p className="mt-3 text-xs text-muted-light">No commitment. No pressure. Just a chat.</p>
        </motion.div>
      </div>
    </section>
  )
}
