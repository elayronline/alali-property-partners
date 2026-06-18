"use client"

import { motion } from "framer-motion"
import { Clock, BadgePoundSterling, Unlock } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SectionDivider } from "@/components/ui/SectionDivider"
import { useSmartNav } from "@/lib/smartNav"

const snapshot = [
  {
    icon: Clock,
    label: "48-hour assessment",
    detail: "We review every property within 48 hours of you sending it.",
  },
  {
    icon: BadgePoundSterling,
    label: "Referral fees on completion",
    detail: "Paid on every deal that completes. Amount agreed case-by-case.",
  },
  {
    icon: Unlock,
    label: "No exclusivity",
    detail: "Keep your full agency commission. List with us alongside anyone else.",
  },
]

export function GotADeal() {
  const navigate = useSmartNav()
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("preselect-role", { detail: "Property Owner" }))
    navigate("contact")
  }

  return (
    <section id="got-a-deal" className="bg-warm-grey px-4 py-20 sm:px-6 sm:py-28">
      <SectionDivider variant="light" className="mb-16" />

      <div className="mx-auto max-w-5xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Copy column */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-gold"
            >
              For Property Owners &amp; Agents
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display mt-3 text-3xl tracking-tight text-white sm:text-5xl"
            >
              Got a property that needs a buyer?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-md text-base leading-relaxed text-muted-light"
            >
              Whether you&apos;re a landlord with a tricky situation, an agent with a listing
              that won&apos;t shift, or anyone who needs a serious buyer fast — send it our way.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-3 max-w-md text-base leading-relaxed text-muted-light"
            >
              We assess every property within 48 hours and connect it to a funded,
              ready-to-move investor — typically within 14 days. Referral fees paid on
              every completion, full agency commission kept.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-8"
            >
              <Button onClick={handleClick}>Submit a Property →</Button>
            </motion.div>
          </div>

          {/* Snapshot facts card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/20 via-gold/8 to-gold/20 p-[1px] shadow-sm md:hover:shadow-[0_15px_40px_-12px_rgba(201,160,61,0.25)]"
          >
            <div className="rounded-[calc(1rem-1px)] bg-ink-raised p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold/80">
                Owner / Agent snapshot
              </p>

              <ul className="mt-6 space-y-5">
                {snapshot.map((s, i) => (
                  <motion.li
                    key={s.label}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3.5"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <s.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-display text-base tracking-tight text-white">
                        {s.label}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-light">
                        {s.detail}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
