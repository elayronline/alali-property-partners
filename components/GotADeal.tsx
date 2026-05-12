"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { useSmartNav } from "@/lib/smartNav"

export function GotADeal() {
  const navigate = useSmartNav()
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("preselect-role", { detail: "Property Owner" }))
    navigate("contact")
  }

  return (
    <section id="got-a-deal" className="bg-warm-grey px-4 py-20 sm:px-6 sm:py-28">
      {/* Gold divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-gray-200" />

      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">05</span>
          <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
          For Property Owners &amp; Agents
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mt-3 text-3xl text-charcoal sm:text-5xl"
        >
          Got a Property That Needs a Buyer?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-base leading-relaxed text-muted-light"
        >
          Whether you&apos;re a landlord with a tricky situation, an agent with a listing that
          won&apos;t shift, or anyone who needs a serious buyer fast — send it our way.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-3 text-base leading-relaxed text-muted-light"
        >
          We assess every property within 48 hours and connect it to a funded, ready-to-move investor —
          typically within 14 days. We pay a referral fee on every deal that completes, and you keep your
          full agency commission.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-charcoal">
            Referral fees paid on completion
          </span>
          <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-charcoal">
            No exclusive arrangements
          </span>
          <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-charcoal">
            48-hour assessment
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Button onClick={handleClick}>Submit a Property &rarr;</Button>
        </motion.div>
      </div>
    </section>
  )
}
