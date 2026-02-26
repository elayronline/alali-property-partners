"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { scrollToSection } from "@/lib/smoothScroll"

export function GotADeal() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("preselect-role", { detail: "Motivated Seller" }))
    scrollToSection("contact")
  }

  return (
    <section id="got-a-deal" className="bg-warm-grey px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-charcoal sm:text-4xl"
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
          Whether you&apos;re a motivated seller, an agent with a stuck listing, or a sourcer who
          needs an investor — send it our way. We assess every deal within 48 hours and connect it
          to funded, ready-to-move buyers. We pay referral fees from £500 for every deal that
          completes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Button onClick={handleClick}>Submit a Deal →</Button>
        </motion.div>
      </div>
    </section>
  )
}
