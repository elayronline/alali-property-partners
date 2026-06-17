"use client"

import { motion } from "framer-motion"
import { SectionDivider } from "@/components/ui/SectionDivider"

// City positions on the 420x600 SVG viewBox.
// Mapped from real lat/long for a London + South East + Dorset constellation.
// labelAnchor / labelDx / labelDy let us nudge labels for clarity at edges
// and resolve collisions between near-neighbours.
type City = {
  name: string
  x: number
  y: number
  region: string
  hub?: boolean
  labelAnchor?: "start" | "end"
  labelDx?: number
  labelDy?: number
}

const cities: City[] = [
  { name: "Milton Keynes", x: 199, y: 89, region: "Buckinghamshire" },
  { name: "Oxford", x: 159, y: 174, region: "Oxfordshire" },
  { name: "Reading", x: 182, y: 262, region: "Berkshire" },
  { name: "London", x: 250, y: 247, region: "Greater London", hub: true },
  // Maidstone & Canterbury sit on the same latitude — bump Maidstone's label up,
  // Canterbury's label down to avoid collision.
  { name: "Maidstone", x: 302, y: 314, region: "Kent", labelDy: -7 },
  { name: "Canterbury", x: 346, y: 311, region: "Kent", labelDy: 12 },
  { name: "Guildford", x: 214, y: 323, region: "Surrey" },
  { name: "Southampton", x: 148, y: 420, region: "Hampshire" },
  { name: "Portsmouth", x: 173, y: 446, region: "Hampshire" },
  { name: "Brighton", x: 249, y: 462, region: "East Sussex" },
  { name: "Bournemouth", x: 110, y: 478, region: "Dorset" },
]

const hub = cities.find((c) => c.hub)!

const regions = [
  "Greater London",
  "Surrey",
  "Kent",
  "East Sussex",
  "West Sussex",
  "Hampshire",
  "Dorset",
  "Berkshire",
  "Oxfordshire",
  "Buckinghamshire",
]

export function CoverageMap() {
  return (
    <section
      id="coverage"
      className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="animated-grid absolute inset-0" />

      <SectionDivider variant="dark" className="relative mb-16" />

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">
            02
          </span>
          <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
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

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0.6, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <svg
              viewBox="0 0 420 600"
              className="h-auto w-full"
              role="img"
              aria-label="Map of Greater London, South East England, and Dorset with major property investment cities highlighted"
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

              {/* Region anchor — soft elliptical glow, no false geography */}
              <ellipse
                cx="215"
                cy="290"
                rx="190"
                ry="225"
                fill="rgba(201,160,61,0.025)"
              />

              {/* Radiating lines from London to every other city */}
              <g opacity="0.55">
                {cities
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

              {/* City dots */}
              {cities.map((c, i) => (
                <g key={c.name}>
                  {/* Pulse ring */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.hub ? 6 : 4}
                    fill="rgba(201,160,61,0.5)"
                  >
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
                  {/* Solid dot */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.hub ? 5 : 3.5}
                    fill={c.hub ? "#DEBB5C" : "#C9A03D"}
                  />
                </g>
              ))}

              {/* City labels */}
              {cities.map((c) => {
                const anchor = c.labelAnchor ?? "start"
                const baseDx = anchor === "end" ? -(c.hub ? 10 : 8) : c.hub ? 10 : 8
                return (
                  <text
                    key={`label-${c.name}`}
                    x={c.x + baseDx + (c.labelDx ?? 0)}
                    y={c.y + 4 + (c.labelDy ?? 0)}
                    fontSize="11"
                    fill="rgba(255,255,255,0.72)"
                    fontFamily="var(--font-raleway), sans-serif"
                    fontWeight={c.hub ? "500" : "300"}
                    letterSpacing="0.04em"
                    textAnchor={anchor}
                  >
                    {c.name}
                  </text>
                )
              })}
            </svg>
          </motion.div>

          {/* Regional list */}
          <div className="mx-auto max-w-md lg:mx-0">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Active regions
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {regions.map((region) => (
                <div key={region} className="flex items-center gap-2.5 text-white/75">
                  <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {region}
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-white/60">
              If your brief sits outside Greater London or the South, we&apos;ll tell you
              upfront — before you commit anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
