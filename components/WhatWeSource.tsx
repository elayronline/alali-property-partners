"use client"

import { motion } from "framer-motion"
import { Pill } from "@/components/ui/Pill"

const methods = ["BMV", "Off-Market", "Auction", "Pre-Market", "Motivated Sellers", "Probate"]

const strategies = [
  "Buy-to-Let",
  "BRR",
  "Rent-to-Rent",
  "Serviced Accommodation",
  "HMO",
  "Flips",
  "Commercial Conversion",
  "Bespoke Briefs",
]

export function WhatWeSource() {
  return (
    <section id="what-we-source" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-charcoal sm:text-4xl"
        >
          What We Source
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
            How we find them
          </p>
          <div className="flex flex-wrap gap-2.5">
            {methods.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
            Strategies we source for
          </p>
          <div className="flex flex-wrap gap-2.5">
            {strategies.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
