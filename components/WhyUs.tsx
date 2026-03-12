"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Phone, Wallet, Link, ShieldCheck } from "lucide-react"
import { Card } from "@/components/ui/Card"

const cards = [
  {
    icon: CheckCircle,
    title: "We do the maths, so you don't have to",
    description:
      "We run the comparables, yields, and numbers. If a deal doesn't genuinely stack up, we don't send it. Simple.",
  },
  {
    icon: Users,
    title: "Fresh deals from real relationships",
    description:
      "We build direct connections with agents, landlords, and vendors — not just portals. That's how we find off-market and pre-market deals before they go public.",
  },
  {
    icon: Phone,
    title: "You deal with us directly",
    description:
      "No call centres. No bots. You'll know who we are and we'll know exactly what you're looking for.",
  },
  {
    icon: Wallet,
    title: "Clear fees. No surprises. No lock-in.",
    description:
      "You see our pricing upfront. No hidden costs, no ongoing contracts. Plus a 14-day due diligence period on every deal — if it's not right, you're covered.",
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
    title: "Backed by a compliant power team",
    description:
      "We work alongside FCA-regulated mortgage brokers, qualified solicitors, vetted contractors, and lettings agents — so every part of your transaction is handled by the right professionals.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      {/* Gold divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-gold"
        >
          The Advantage
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-center text-2xl font-bold text-charcoal sm:text-4xl"
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
              transition={{ delay: i * 0.1 }}
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
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <Card {...card} className="border-gold/20 bg-gold/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
