"use client"

import { motion } from "framer-motion"
import { ClipboardList, FileCheck, Package, ShieldCheck } from "lucide-react"
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
    icon: FileCheck,
    step: "2",
    title: "Sign up and secure the deal",
    description:
      "Once we've found a deal that fits, you sign our agreement and pay the sourcing fee to lock it in. This confirms your serious intent and secures the opportunity for you.",
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

        {/* Premium deal pack box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-3xl rounded-xl border border-gold/20 bg-dark-bg p-4 sm:p-8"
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
