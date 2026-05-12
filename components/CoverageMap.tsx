"use client"

import { motion } from "framer-motion"

// City positions on the 400x600 SVG viewBox.
// Roughly mapped from real lat/long so the constellation reads as England & Wales.
const cities = [
  { name: "Newcastle", x: 235, y: 78, region: "North East" },
  { name: "Leeds", x: 238, y: 178, region: "Yorkshire" },
  { name: "Manchester", x: 200, y: 210, region: "North West" },
  { name: "Liverpool", x: 165, y: 218, region: "North West" },
  { name: "Sheffield", x: 240, y: 222, region: "Yorkshire" },
  { name: "Nottingham", x: 257, y: 265, region: "East Midlands" },
  { name: "Birmingham", x: 218, y: 314, region: "West Midlands" },
  { name: "Swansea", x: 128, y: 405, region: "South Wales" },
  { name: "Cardiff", x: 162, y: 420, region: "South Wales" },
  { name: "Bristol", x: 190, y: 422, region: "South West" },
  { name: "London", x: 305, y: 418, region: "Greater London", hub: true },
  { name: "Brighton", x: 305, y: 488, region: "South East" },
  { name: "Plymouth", x: 122, y: 537, region: "South West" },
]

// Roughly hand-traced England & Wales outline at the same scale as the city coords.
// Not GIS-accurate — stylized for the silhouette only.
const ukOutline =
  "M 300 65 C 285 58, 270 52, 250 55 L 230 60 C 220 62, 215 70, 220 82 L 230 105 C 240 130, 250 155, 248 175 L 250 200 C 260 220, 275 235, 290 250 C 305 270, 320 290, 330 310 C 335 330, 340 355, 335 380 C 333 395, 330 410, 325 425 C 330 440, 325 455, 318 470 C 305 480, 290 488, 280 500 C 268 510, 250 515, 235 510 L 200 510 C 180 515, 160 525, 145 535 C 130 543, 115 548, 100 543 C 88 538, 80 528, 78 515 C 75 500, 78 485, 85 472 C 95 455, 88 440, 92 425 C 95 410, 100 395, 110 385 C 100 375, 92 360, 90 345 C 92 325, 100 305, 108 290 C 95 275, 80 265, 70 250 C 65 235, 70 220, 80 210 C 92 195, 105 180, 115 165 C 125 150, 135 135, 145 125 C 155 115, 168 110, 180 105 C 195 95, 210 88, 225 80 C 240 72, 260 65, 280 62 C 290 60, 295 62, 300 65 Z"

const hub = cities.find((c) => c.hub)!

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
          Sourcing across England &amp; Wales
        </motion.h2>

        <motion.p
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-xl text-center text-sm text-white/60 sm:text-base"
        >
          Off-market through our private contacts, on-market through our compliant agent network.
          Active in every major investment market.
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
              aria-label="Map of England and Wales with major property investment cities highlighted"
            >
              <defs>
                <radialGradient id="hubGlow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="rgba(201,160,61,0.35)" />
                  <stop offset="100%" stopColor="rgba(201,160,61,0)" />
                </radialGradient>
                <linearGradient id="lineFade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(201,160,61,0.45)" />
                  <stop offset="100%" stopColor="rgba(201,160,61,0.1)" />
                </linearGradient>
              </defs>

              {/* Country outline — soft glow underneath */}
              <path
                d={ukOutline}
                fill="rgba(201,160,61,0.025)"
                stroke="rgba(201,160,61,0.18)"
                strokeWidth="1"
              />

              {/* Radiating lines from London to every other city */}
              <g opacity="0.5">
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
              <circle cx={hub.x} cy={hub.y} r="38" fill="url(#hubGlow)" />

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
                      values={c.hub ? "6;14;6" : "4;10;4"}
                      dur={`${2 + (i % 4) * 0.3}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur={`${2 + (i % 4) * 0.3}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Solid dot */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.hub ? 4.5 : 3}
                    fill={c.hub ? "#DEBB5C" : "#C9A03D"}
                  />
                </g>
              ))}

              {/* City labels — small Raleway */}
              {cities.map((c) => (
                <text
                  key={`label-${c.name}`}
                  x={c.x + (c.hub ? 9 : 7)}
                  y={c.y + 3}
                  fontSize="9"
                  fill="rgba(255,255,255,0.55)"
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
              {[
                "Greater London",
                "North West",
                "Yorkshire",
                "West Midlands",
                "East Midlands",
                "South East",
                "South West",
                "North East",
                "South Wales",
                "Mid Wales",
              ].map((region) => (
                <div key={region} className="flex items-center gap-2.5 text-white/75">
                  <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {region}
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-white/60">
              Coverage isn&apos;t marketing copy — it&apos;s where our private contacts and
              compliant agent network actively source deals. If you&apos;re investing in a
              specific area, we&apos;ll tell you upfront whether we&apos;ve got live coverage
              there before you commit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
