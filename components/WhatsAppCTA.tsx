"use client"

import { motion } from "framer-motion"

export function WhatsAppCTA() {
  return (
    <section
      id="whatsapp-cta"
      className="bg-gradient-to-r from-gold-dark via-gold to-gold-light px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-dark-bg sm:text-4xl lg:text-5xl"
        >
          Get deals first. Join our free WhatsApp Broadcast.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-lg text-dark-bg/80"
        >
          New opportunities sent directly to your phone before they go anywhere else. No spam, just
          deals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="https://wa.me/44XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-dark-bg px-8 py-4 text-base font-bold text-white transition-colors hover:bg-charcoal"
          >
            Join the Deal Broadcast →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
