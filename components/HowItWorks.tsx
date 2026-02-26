"use client"

import { motion } from "framer-motion"
import { ClipboardList, Search, Package } from "lucide-react"
import { scrollToSection } from "@/lib/smoothScroll"

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Tell us what you're looking for",
    description: "Your strategy, budget, preferred areas — we take it from there.",
  },
  {
    icon: Search,
    step: "2",
    title: "We find and research the deal",
    description:
      "Every opportunity is checked against sold prices, rental values, and area data before it reaches you.",
  },
  {
    icon: Package,
    step: "3",
    title: "You receive a ready-to-act deal pack",
    description:
      "Comparables, yield projections, refurb estimates, and all the numbers — straight to your WhatsApp or inbox.",
  },
]

const dealPackItems = [
  "Purchase price and comparable sold prices",
  "Gross and net yield calculations",
  "Rental income evidence",
  "Refurbishment cost estimate (where applicable)",
  "Area demand summary",
  "Recommended strategy and exit options",
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-warm-grey px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-charcoal sm:text-4xl"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-2xl rounded-xl border border-gray-200 bg-white p-6"
        >
          <p className="mb-3 text-sm font-bold text-charcoal">What&apos;s in every deal pack:</p>
          <ul className="grid gap-1.5 text-sm text-muted-light sm:grid-cols-2">
            {dealPackItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
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
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer text-sm font-semibold text-gold transition-colors hover:text-gold-light"
          >
            Not sure where to start? Book a Free Consultation →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
