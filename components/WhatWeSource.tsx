"use client"

import { motion } from "framer-motion"

const methods: Array<{ label: string; detail: string }> = [
  { label: "Off-Market", detail: "Direct from our private contacts" },
  { label: "On-Market (Agent Network)", detail: "Compliant agents we work with" },
  { label: "Below Market Value", detail: "Below typical area pricing" },
  { label: "Pre-Market", detail: "Before listings go public" },
  { label: "Auction", detail: "Pre- and post-auction lots" },
  { label: "Direct to Seller", detail: "No agent in the chain" },
  { label: "Probate", detail: "Motivated executors, quick sale" },
]

const strategies: Array<{ label: string; detail: string }> = [
  { label: "Buy-to-Let (BTL)", detail: "Single-family let, ~5–8% gross yield" },
  { label: "Refurb & Refinance (BRR)", detail: "Recycle capital, accelerate portfolio" },
  { label: "Rent-to-Rent (R2R)", detail: "Lease, sub-let, low capital required" },
  { label: "Serviced Accommodation (SA)", detail: "Short-let, higher margin / occupancy risk" },
  { label: "HMO (Houses in Multiple Occupation)", detail: "Per-room let, 8–12% gross yield" },
  { label: "Flips", detail: "Buy, refurb, sell within 6–12 months" },
  { label: "Commercial Conversion", detail: "Office / retail to residential" },
  { label: "Bespoke Briefs", detail: "We source to your exact criteria" },
]

const sellerSituations: Array<{ label: string; detail: string }> = [
  { label: "Stuck Properties", detail: "Won't shift on portals — we have buyers" },
  { label: "Quick Sales", detail: "Funded, ready-to-move investors" },
  { label: "Inherited Properties", detail: "Probate, no chain, fast turnaround" },
  { label: "Tenant Issues", detail: "Vacant or problem tenancies welcomed" },
  { label: "Portfolio Disposals", detail: "Multi-property briefs handled" },
  { label: "Distressed Sales", detail: "Confidential, discreet, fast" },
]

function DarkPill({ label, detail }: { label: string; detail: string }) {
  return (
    <span
      className="group/pill relative inline-flex cursor-default items-center rounded-full border border-white/15 px-3.5 py-2 text-xs text-white/70 transition-all duration-300 sm:px-4 sm:text-sm md:hover:border-gold md:hover:bg-gold md:hover:text-dark-bg md:hover:shadow-[0_8px_24px_-12px_rgba(201,160,61,0.4)]"
      tabIndex={0}
    >
      {label}
      {/* Tooltip — desktop only */}
      <span className="pointer-events-none absolute top-full left-1/2 z-20 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-dark-bg-light/95 px-3 py-1.5 text-[0.7rem] font-medium text-white/85 opacity-0 shadow-lg shadow-black/40 backdrop-blur-sm transition-all duration-200 group-hover/pill:opacity-100 group-focus/pill:opacity-100 md:block">
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-dark-bg-light/95" />
        {detail}
      </span>
    </span>
  )
}

export function WhatWeSource() {
  return (
    <section
      id="what-we-source"
      className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28"
    >
      {/* Animated drifting grid */}
      <div className="animated-grid absolute inset-0" />

      {/* Gold divider */}
      <div className="relative mx-auto mb-16 h-px max-w-6xl bg-white/10" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">
            01
          </span>
          <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
          What We Source
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mt-3 text-3xl text-white sm:text-5xl"
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
          Tell us what you&apos;re looking for — or what you need to move. We do the rest.{" "}
          <span className="hidden text-white/40 md:inline">Hover any pill for detail.</span>
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
              <DarkPill key={item.label} label={item.label} detail={item.detail} />
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
              <DarkPill key={item.label} label={item.label} detail={item.detail} />
            ))}
          </div>
        </motion.div>

        {/* For sellers */}
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
              <DarkPill key={item.label} label={item.label} detail={item.detail} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
