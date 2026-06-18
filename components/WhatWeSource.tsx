"use client"

import { motion } from "framer-motion"
import { Building2, Home } from "lucide-react"

const cards = [
  {
    icon: Building2,
    title: "HMO Investments",
    detail:
      "Houses in multiple occupation (HMOs) — let by the room — with strong cashflow potential and long-term tenant demand.",
  },
  {
    icon: Home,
    title: "BRR Investments",
    detail:
      "Buy, Refurbish, Refinance (BRR) — refurbish to add value and rooms, then refinance to recycle your capital and scale the portfolio.",
  },
]

export function WhatWeSource() {
  return (
    <section id="what-we-source" className="bg-ink px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-luxe text-gold">What We Source</p>
          <h2 className="font-display mt-5 text-3xl leading-[1.12] text-white sm:text-4xl">
            We source the right opportunities. You build the portfolio.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-sm border border-white/10 bg-ink-raised p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_50px_-24px_rgba(201,160,61,0.4)] sm:p-8"
            >
              <card.icon className="h-9 w-9 text-gold" strokeWidth={1.25} />
              <h3 className="font-display mt-6 text-xl text-white">{card.title}</h3>
              <div className="mt-3 h-px w-10 bg-gold/60" />
              <p className="mt-4 text-sm leading-relaxed text-white/60">{card.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
