"use client"

import { motion } from "framer-motion"

export function WhatsAppCTA() {
  return (
    <section
      id="whatsapp-cta"
      className="bg-gold px-4 py-20 sm:px-6 sm:py-28 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-dark-bg sm:text-4xl lg:text-5xl"
        >
          Exclusive off-market deals, straight to your phone.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-lg text-dark-bg/80"
        >
          Our WhatsApp community gets first access to exclusive off-market opportunities — at{" "}
          <span className="font-bold text-dark-bg">2.4% sourcing fee</span> (min £3,600, VAT inc.).
          Sent straight to your phone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="https://chat.whatsapp.com/JHY65Dz00z44iH175xUcwS?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-dark-bg px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-charcoal sm:px-10 sm:py-4 sm:text-lg"
          >
            Join Free &rarr;
          </a>
          <p className="mt-4 text-sm text-dark-bg/60">
            Free forever. No spam. Leave anytime with one tap.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
