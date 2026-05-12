"use client"

import { motion } from "framer-motion"

// City positions on the 400x600 SVG viewBox.
// Roughly mapped from real lat/long for a London & South East constellation.
const cities = [
  { name: "Milton Keynes", x: 129, y: 89, region: "Buckinghamshire" },
  { name: "Oxford", x: 82, y: 174, region: "Oxfordshire" },
  { name: "Reading", x: 109, y: 262, region: "Berkshire" },
  { name: "London", x: 188, y: 247, region: "Greater London", hub: true },
  { name: "Maidstone", x: 248, y: 314, region: "Kent" },
  { name: "Canterbury", x: 301, y: 311, region: "Kent" },
  { name: "Guildford", x: 147, y: 323, region: "Surrey" },
  { name: "Southampton", x: 69, y: 420, region: "Hampshire" },
  { name: "Portsmouth", x: 98, y: 446, region: "Hampshire" },
  { name: "Brighton", x: 207, y: 462, region: "East Sussex" },
]

// Stylized outline of Greater London + South East England.
// Hand-traced at the same scale as the city coords — not GIS-accurate,
// just enough silhouette to anchor the constellation.
const seOutline =
  "M 70 100 C 95 75, 130 65, 165 70 C 200 75, 235 78, 270 88 C 295 100, 315 120, 320 150 C 320 175, 315 200, 318 225 C 325 250, 335 275, 330 305 C 340 330, 345 360, 335 385 C 330 410, 320 430, 305 445 C 280 460, 250 475, 225 485 C 200 495, 175 500, 150 495 C 125 488, 100 475, 80 458 C 60 440, 50 415, 52 388 C 55 360, 65 335, 70 308 C 65 280, 58 252, 55 225 C 52 195, 55 165, 60 135 C 62 120, 65 108, 70 100 Z"

const hub = cities.find((c) => c.hub)!

const regions = [
  "Greater London",
  "Surrey",
  "Kent",
  "East Sussex",
  "West Sussex",
  "Hampshire",
  "Berkshire",
  "Oxfordshire",
  "Buckinghamshire",
  "Isle of Wight",
]

export function CoverageMap() {
  return (
    <section
      id="coverage"
      className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="animated-grid absolute inset-0" />

      <div className="relative mx-auto mb-16 h-px max-w-6xl bg-white/10" />

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
          London &amp; the South East
        </motion.h2>

        <motion.p
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-xl text-center text-sm text-white/60 sm:text-base"
        >
          Focused coverage across Greater London and the South East of England. Off-market via
          our private contacts, on-market via our compliant agent network.
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
              viewBox="0 0 400 600"
              className="h-auto w-full"
              role="img"
              aria-label="Map of Greater London and South East England with major property investment cities highlighted"
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

              {/* SE England outline — soft fill underneath */}
              <path
                d={seOutline}
                fill="rgba(201,160,61,0.03)"
                stroke="rgba(201,160,61,0.18)"
                strokeWidth="1"
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
              {cities.map((c) => (
                <text
                  key={`label-${c.name}`}
                  x={c.x + (c.hub ? 10 : 8)}
                  y={c.y + 4}
                  fontSize="11"
                  fill="rgba(255,255,255,0.7)"
                  fontFamily="var(--font-raleway), sans-serif"
                  fontWeight={c.hub ? "500" : "300"}
                  letterSpacing="0.04em"
                >
                  {c.name}
                </text>
              ))}
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
              Focused coverage isn&apos;t a limitation — it&apos;s the reason our private
              contacts and compliant agent network produce real deals. If your brief sits
              outside Greater London or the South East, we&apos;ll tell you upfront before
              you commit anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
