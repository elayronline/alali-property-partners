"use client"

import { motion } from "framer-motion"
import { SectionDivider } from "@/components/ui/SectionDivider"

// County positions on the 420x600 SVG viewBox — a London + South East + Dorset
// constellation. anchor / dx / dy nudge labels to avoid collisions and edges.
type County = {
  name: string
  x: number
  y: number
  hub?: boolean
  anchor?: "start" | "end"
  dx?: number
  dy?: number
}

const counties: County[] = [
  { name: "Buckinghamshire", x: 208, y: 80, anchor: "start" },
  { name: "Oxfordshire", x: 150, y: 168, anchor: "end" },
  { name: "Berkshire", x: 176, y: 258, anchor: "end" },
  { name: "Greater London", x: 256, y: 248, hub: true, anchor: "start" },
  { name: "Kent", x: 330, y: 300, anchor: "start" },
  { name: "Surrey", x: 222, y: 342, anchor: "start", dy: 3 },
  { name: "Hampshire", x: 146, y: 412, anchor: "end" },
  { name: "West Sussex", x: 214, y: 470, anchor: "end", dy: 4 },
  { name: "East Sussex", x: 286, y: 452, anchor: "start" },
  { name: "Dorset", x: 108, y: 492, anchor: "end" },
]

const hub = counties.find((c) => c.hub)!

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

        {/* County map */}
        <motion.div
          initial={{ opacity: 0.6, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-14 w-full max-w-lg"
        >
          <svg
            viewBox="0 0 420 600"
            className="h-auto w-full"
            role="img"
            aria-label="Map of the counties we cover across Greater London and the South of England"
          >
            <defs>
              <radialGradient id="hubGlow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="rgba(201,160,61,0.4)" />
                <stop offset="100%" stopColor="rgba(201,160,61,0)" />
              </radialGradient>
              <linearGradient id="lineFade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(201,160,61,0.5)" />
                <stop offset="100%" stopColor="rgba(201,160,61,0.12)" />
              </linearGradient>
            </defs>

            {/* Soft elliptical glow anchoring the region — no false geography */}
            <ellipse cx="215" cy="290" rx="190" ry="225" fill="rgba(201,160,61,0.025)" />

            {/* Radiating lines from the London hub */}
            <g opacity="0.55">
              {counties
                .filter((c) => !c.hub)
                .map((c) => (
                  <line
                    key={`line-${c.name}`}
                    x1={hub.x}
                    y1={hub.y}
                    x2={c.x}
                    y2={c.y}
                    stroke="url(#lineFade)"
                    strokeWidth="0.6"
                  />
                ))}
            </g>

            {/* London hub glow */}
            <circle cx={hub.x} cy={hub.y} r="42" fill="url(#hubGlow)" />

            {/* County dots */}
            {counties.map((c, i) => (
              <g key={c.name}>
                <circle cx={c.x} cy={c.y} r={c.hub ? 6 : 4} fill="rgba(201,160,61,0.5)">
                  <animate
                    attributeName="r"
                    values={c.hub ? "6;16;6" : "4;10;4"}
                    dur={`${2.2 + (i % 4) * 0.3}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0;0.6"
                    dur={`${2.2 + (i % 4) * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={c.hub ? 5 : 3.5}
                  fill={c.hub ? "#DEBB5C" : "#C9A03D"}
                />
              </g>
            ))}

            {/* County labels */}
            {counties.map((c) => {
              const anchor = c.anchor ?? "start"
              const baseDx = anchor === "end" ? -(c.hub ? 10 : 8) : c.hub ? 10 : 8
              return (
                <text
                  key={`label-${c.name}`}
                  x={c.x + baseDx + (c.dx ?? 0)}
                  y={c.y + 4 + (c.dy ?? 0)}
                  fontSize="12"
                  fill="rgba(255,255,255,0.78)"
                  fontFamily="var(--font-raleway), sans-serif"
                  fontWeight={c.hub ? "600" : "400"}
                  letterSpacing="0.03em"
                  textAnchor={anchor}
                >
                  {c.name}
                </text>
              )
            })}
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-xl text-center text-sm leading-relaxed text-white/55"
        >
          If your brief sits outside Greater London or the South, we&apos;ll tell you upfront —
          before you commit anything.
        </motion.p>
      </div>
    </section>
  )
}
