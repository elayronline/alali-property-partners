"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Phone, Wallet, Link, ShieldCheck } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionDivider } from "@/components/ui/SectionDivider"

const cards = [
  {
    icon: CheckCircle,
    title: "Every deal, fully packaged",
    description:
      "Each introduction comes with a complete deal pack — comparables, observed local rents and the key numbers gathered for you — so you can size up a deal in minutes, not weeks.",
  },
  {
    icon: Users,
    title: "Fresh deals from real relationships",
    description:
      "We build direct connections with agents and vendors — not just portals. That's how we source deals direct from our contacts — including off-market and pre-market opportunities.",
  },
  {
    icon: Phone,
    title: "You deal with us directly",
    description:
      "No call centres. No bots. You'll know who we are and we'll know exactly what you're looking for.",
  },
  {
    icon: Wallet,
    title: "Clear fees. No surprises.",
    description:
      "You see our pricing upfront. No hidden costs. Pay-per-deal sourcing with transparent, stage-based fees — refundable where it's not the right deal for you (subject to terms).",
  },
]

const secondaryCards = [
  {
    icon: ShieldCheck,
    title: "Your deals are yours",
    description:
      "We don't buy properties from our own pipeline. Every deal we source goes to our clients first — that's the model.",
  },
  {
    icon: Link,
    title: "Access to our power team",
    description:
      "We have a trusted power team of independent professionals on hand — so every part of the process is in capable hands.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-ink px-4 py-20 sm:px-6 sm:py-28">
      {/* Gold divider */}
      <SectionDivider variant="light" className="mb-16" />

      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          The Advantage
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mt-3 text-center text-3xl text-white sm:text-5xl"
        >
          Why Work With Us
        </motion.h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {secondaryCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
