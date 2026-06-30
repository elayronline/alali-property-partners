"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionDivider } from "@/components/ui/SectionDivider"

// County label positions as a % of the rendered map image (computed from the
// real Ordnance Survey county geometry in public/coverage-map.png).
const labels: { name: string; x: number; y: number }[] = [
  { name: "Oxfordshire", x: 47, y: 27 },
  { name: "Buckinghamshire", x: 58, y: 16 },
  { name: "Berkshire", x: 52.3, y: 44.8 },
  { name: "London", x: 69.6, y: 42.1 },
  { name: "Surrey", x: 63.8, y: 56 },
  { name: "Kent", x: 84.8, y: 56.6 },
  { name: "Hampshire", x: 47.9, y: 66.9 },
  { name: "West Sussex", x: 62.7, y: 71.8 },
  { name: "East Sussex", x: 76.2, y: 73.5 },
  { name: "Somerset", x: 19.3, y: 61.3 },
  { name: "Dorset", x: 29.9, y: 80.8 },
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
          London &amp; the South of England
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
            alt="Map of the counties we cover — Greater London, Surrey, Kent, East and West Sussex, Hampshire, Dorset, Somerset, Berkshire, Oxfordshire and Buckinghamshire"
            width={1400}
            height={785}
            className="h-auto w-full [filter:drop-shadow(0_0_6px_rgba(201,160,61,0.45))]"
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
          If your brief sits outside Greater London or the South of England, we&apos;ll tell you
          upfront — before you commit anything.
        </motion.p>
      </div>
    </section>
  )
}
