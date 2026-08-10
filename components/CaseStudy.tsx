"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { SectionDivider } from "@/components/ui/SectionDivider"

// Two matched pairs from the same property. `before` is photography of the
// house as found; `after` is the conversion spec visualised, NOT a photograph
// of completed work — the caption under the pair says so. When the refurb
// completes and real photos exist, swap the `after` src and drop the
// "visualised" wording in the caption + footnote below.
const ROOM_PAIRS = [
  {
    room: "Reception room",
    before: {
      src: "/case-study/living-room-before.jpg",
      alt: "The reception room as found — patterned carpet, dated fireplace surround and inherited furniture",
    },
    after: {
      src: "/case-study/living-room-after.jpg",
      alt: "Visualisation of the same reception room opened into a shared kitchen and dining space for HMO use",
    },
  },
  {
    room: "Master bedroom",
    before: {
      src: "/case-study/bedroom-before.jpg",
      alt: "The master bedroom as found — blue carpet, floral wallpaper and a textured ceiling",
    },
    after: {
      src: "/case-study/bedroom-after.jpg",
      alt: "Visualisation of the same master bedroom as an en-suite letting room with kitchenette and shower room",
    },
  },
] as const

function Frame({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10 bg-dark-bg">
      <Image src={src} alt={alt} fill sizes="(min-width: 640px) 190px, 42vw" className="object-cover" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/60 to-transparent" />
      <span className="absolute top-2 left-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90">
        {label}
      </span>
    </div>
  )
}

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
              <div className="grid items-start gap-6 md:grid-cols-[1fr_10rem]">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.06] px-3.5 py-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gold" strokeWidth={1.75} />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        Hampshire
                      </span>
                    </div>

                    {/* Live status — makes clear the refurb isn't finished, which
                        is why the "after" images are visualisations */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                        Build underway
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-lg leading-relaxed text-white/85 sm:text-xl">
                    Sourced a 4-bed pre-auction property in Hampshire in under 14 days, 10% below our
                    client&apos;s budget. Being converted into a 6-bed HMO under permitted development
                    in a non-Article 4 area, with observed local rents of{" "}
                    <span className="font-semibold text-gold">£700–900 per room, per month</span>.
                  </p>
                </div>

                {/* The sourced property */}
                <div className="relative mx-auto aspect-square w-40 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/40 md:mx-0 md:w-full">
                  <Image
                    src="/hampshire-deal.jpg"
                    alt="The four-bed property sourced pre-auction in Hampshire"
                    fill
                    sizes="160px"
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

              {/* Before / after — two rooms, as found next to the conversion spec */}
              <div className="mt-8 border-t border-white/10 pt-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  {ROOM_PAIRS.map((pair) => (
                    <div key={pair.room}>
                      <div className="grid grid-cols-2 gap-2">
                        <Frame {...pair.before} label="Before" />
                        <Frame {...pair.after} label="Planned" />
                      </div>
                      <p className="mt-2.5 text-xs text-white/50">
                        {pair.room} — as found, and the planned spec.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-white/40">
                Visualisations of the planned spec, not completed work — build underway. Rents
                observed locally: indicative only, verify independently.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
