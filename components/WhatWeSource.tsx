"use client"

import { motion } from "framer-motion"

const methods = ["Below Market Value", "Off-Market", "Auction", "Pre-Market", "Direct to Seller", "Probate"]

const strategies = [
  "Buy-to-Let (BTL)",
  "Refurb & Refinance (BRR)",
  "Rent-to-Rent (R2R)",
  "Serviced Accommodation (SA)",
  "HMO (Houses in Multiple Occupation)",
  "Flips",
  "Commercial Conversion",
  "Bespoke Briefs",
]

const sellerSituations = [
  "Stuck Properties",
  "Quick Sales",
  "Inherited Properties",
  "Tenant Issues",
  "Portfolio Disposals",
  "Distressed Sales",
]

function DarkPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-white/15 px-3.5 py-2 text-xs text-white/70 transition-colors duration-200 sm:px-4 sm:text-sm md:hover:border-gold md:hover:bg-gold md:hover:text-dark-bg">
      {children}
    </span>
  )
}

export function WhatWeSource() {
  return (
    <section id="what-we-source" className="bg-dark-bg px-4 py-20 sm:px-6 sm:py-28">
      {/* Gold divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-white/10" />

      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-gold"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-2xl font-bold text-white sm:text-4xl"
        >
          We Source to Your Numbers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-xl text-sm text-white/60 sm:text-base"
        >
          Tell us what you&apos;re looking for — or what you need to move. We do the rest.
        </motion.p>

        {/* For investors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold/80">
            How we find deals
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {methods.map((item) => (
              <DarkPill key={item}>{item}</DarkPill>
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
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold/80">
            Investment strategies we cover
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {strategies.map((item) => (
              <DarkPill key={item}>{item}</DarkPill>
            ))}
          </div>
        </motion.div>

        {/* For sellers — NEW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold/80">
            Got a property to move?
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {sellerSituations.map((item) => (
              <DarkPill key={item}>{item}</DarkPill>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
