"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { SectionDivider } from "@/components/ui/SectionDivider"

export function CaseStudy() {
  return (
    <section
      id="case-study"
      className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="animated-grid pointer-events-none absolute inset-0" />

      <SectionDivider variant="dark" className="relative mb-16" />

      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">
            ✦
          </span>
          <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
          Case Study
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mt-3 text-center text-3xl text-white sm:text-5xl"
        >
          One deal. Every brief is different.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-xl text-center text-sm text-white/60 sm:text-base"
        >
          A recent example, secured to one client&apos;s numbers — yours will look different.
        </motion.p>

        {/* Deal card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-gold/30 via-gold/10 to-gold/30 p-[1.5px] shadow-[0_20px_60px_-20px_rgba(201,160,61,0.35)]"
        >
          <div className="relative rounded-[calc(1.5rem-1.5px)] bg-dark-bg-light/95 px-6 py-10 backdrop-blur-sm sm:px-12 sm:py-12">
            {/* Soft gold glow inside the card */}
            <div
              className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full opacity-60"
              style={{
                background: "radial-gradient(circle, rgba(201,160,61,0.16), transparent 60%)",
              }}
            />

            <div className="relative">
              {/* Top: brief + property photo side by side */}
              <div className="grid items-stretch gap-7 md:grid-cols-[2.2fr_0.6fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.06] px-3.5 py-1.5">
                    <MapPin className="h-3.5 w-3.5 text-gold" strokeWidth={1.75} />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      Hampshire
                    </span>
                  </div>

                  <p className="mt-5 text-lg leading-relaxed text-white/85 sm:text-xl">
                    Sourced a 4-bed pre-auction property in Hampshire in under 14 days, 10% below our
                    client&apos;s budget. Being converted into a 6-bed HMO under permitted development
                    in a non-Article 4 area, projected{" "}
                    <span className="font-semibold text-gold">£700–900 per room, per month</span>,
                    with capital pulled back out for the next build.
                  </p>
                </div>

                {/* The sourced property */}
                <div className="relative min-h-[200px] overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/40">
                  <Image
                    src="/hampshire-deal.jpg"
                    alt="The four-bed property sourced pre-auction in Hampshire"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Stat strip */}
              <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-3">
                {[
                  { value: "< 14 days", label: "Pre-auction to secured" },
                  { value: "10% under", label: "Below client budget" },
                  { value: "4-bed → 6-bed HMO", label: "Permitted development" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-dark-bg-light/95 px-5 py-4">
                    <p className="font-display text-xl text-white sm:text-2xl">{stat.value}</p>
                    <p className="mt-1 text-xs text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs leading-relaxed text-white/40">
                Client projection, not a guaranteed return. Figures require independent verification.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
