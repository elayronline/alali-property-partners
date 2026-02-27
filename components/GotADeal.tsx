"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { scrollToSection } from "@/lib/smoothScroll"

export function GotADeal() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("preselect-role", { detail: "Property Owner" }))
    scrollToSection("contact")
  }

  return (
    <section id="got-a-deal" className="bg-warm-grey px-4 py-20 sm:px-6 sm:py-28">
      {/* Gold divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-gold"
        >
          For Property Owners &amp; Agents
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl"
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
          won&apos;t shift, or anyone who needs a serious buyer fast — send it our way. We assess
          every property within 48 hours and connect it to funded, ready-to-move investors.
          We pay a referral fee on every deal that completes — and you keep your full agency commission.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <span className="rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold">
            Referral fees paid on completion
          </span>
          <span className="rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold">
            No exclusive arrangements
          </span>
          <span className="rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold">
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
