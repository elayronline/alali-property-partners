"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Phone, Wallet, Link } from "lucide-react"
import { Card } from "@/components/ui/Card"

const cards = [
  {
    icon: CheckCircle,
    title: "Every deal researched properly",
    description:
      "We check the comparables, run the yields, and verify the numbers before you ever see it.",
  },
  {
    icon: Users,
    title: "Direct relationships, not recycled listings",
    description: "Our deals come from agents, landlords, and sellers we know — not portals.",
  },
  {
    icon: Phone,
    title: "You deal with us directly",
    description:
      "No call centres. No bots. You'll know who we are and we'll know what you're looking for.",
  },
  {
    icon: Wallet,
    title: "Transparent fees, no lock-in",
    description:
      "You see our pricing upfront. If a deal doesn't stack up, we'll say so — not sell it to you.",
  },
]

const fullWidthCard = {
  icon: Link,
  title: "Connected to a trusted power team",
  description:
    "Need a mortgage broker, solicitor, or contractor? We'll connect you with professionals we work with.",
}

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-charcoal sm:text-4xl"
        >
          Why Work With Us
        </motion.h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-5"
        >
          <Card {...fullWidthCard} className="border-gold/20 bg-gold/5" />
        </motion.div>
      </div>
    </section>
  )
}
