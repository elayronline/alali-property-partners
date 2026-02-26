"use client"

import { motion } from "framer-motion"

export function WhatsAppCTA() {
  return (
    <section
      id="whatsapp-cta"
      className="bg-gradient-to-r from-gold-dark via-gold to-gold-light px-4 py-20 sm:px-6 sm:py-28 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-dark-bg sm:text-4xl lg:text-5xl"
        >
          Fresh deals on your phone before Rightmove sees them.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-lg text-dark-bg/80"
        >
          Join our free WhatsApp Broadcast — new opportunities sent directly to you. No spam. No
          commitment. Unsubscribe anytime.
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
            className="inline-flex items-center gap-2 rounded-lg bg-dark-bg px-10 py-4 text-base font-bold text-white transition-colors hover:bg-charcoal sm:text-lg"
          >
            Join Free &rarr;
          </a>
          <p className="mt-4 text-sm text-dark-bg/60">
            Free forever. Leave anytime with one tap.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
