"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionDivider } from "@/components/ui/SectionDivider"

// County label positions as a % of the rendered map image (computed from the
// real Ordnance Survey county geometry in public/coverage-map.png).
const labels: { name: string; x: number; y: number; small?: boolean }[] = [
  { name: "Oxfordshire", x: 20.2, y: 24.8 },
  { name: "Buckinghamshire", x: 34.1, y: 23.2 },
  { name: "Berkshire", x: 27.4, y: 45.4 },
  { name: "London", x: 54.6, y: 43.5 },
  { name: "Surrey", x: 45.9, y: 55.7 },
  { name: "Kent", x: 78.9, y: 60 },
  { name: "Hampshire", x: 18.8, y: 68.7 },
  { name: "West Sussex", x: 44.1, y: 76.9 },
  { name: "East Sussex", x: 66.1, y: 75.1 },
]

export function CoverageMap() {
  return (
    <section
      id="coverage"
      className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="animated-grid absolute inset-0" />

      <SectionDivider variant="dark" className="relative mb-16" />

      <div className="relative mx-auto max-w-3xl">
        <motion.p
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-luxe text-gold"
        >
          Where We Operate
        </motion.p>

        <motion.h2
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="font-display mt-3 text-center text-3xl text-white sm:text-5xl"
        >
          London &amp; the South East
        </motion.h2>

        <motion.p
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-xl text-center text-sm text-white/60 sm:text-base"
        >
          We go deep in the areas we know, rather than spread thin across the country.
        </motion.p>

        {/* Real counties map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-12 w-full max-w-2xl"
        >
          <Image
            src="/coverage-map.png"
            alt="Map of the counties we cover — Greater London, Surrey, Kent, East and West Sussex, Hampshire, Berkshire, Oxfordshire and Buckinghamshire"
            width={1200}
            height={961}
            className="h-auto w-full"
            priority={false}
          />
          {labels.map((l) => (
            <span
              key={l.name}
              style={{
                left: `${l.x}%`,
                top: `${l.y}%`,
                textShadow: "0 1px 4px rgba(0,0,0,0.85)",
              }}
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[0.6rem] font-semibold tracking-wide text-white sm:text-xs"
            >
              {l.name}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-xl text-center text-sm leading-relaxed text-white/55"
        >
          If your brief sits outside Greater London or the South East, we&apos;ll tell you upfront —
          before you commit anything.
        </motion.p>
      </div>
    </section>
  )
}
