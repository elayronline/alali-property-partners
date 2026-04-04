"use client"

import { motion } from "framer-motion"
import { ExternalLink, RefreshCw, BookmarkCheck, ShieldCheck } from "lucide-react"

const highlights = [
  {
    icon: RefreshCw,
    title: "Regularly Updated",
    description: "New deals added and refreshed as our portfolio grows.",
  },
  {
    icon: BookmarkCheck,
    title: "Reserve for £100",
    description: "Secure any deal with a £100 reservation fee. Our 2.4% sourcing fee (min £3,600) is payable upfront on instruction.",
  },
  {
    icon: ShieldCheck,
    title: "14-Day Due Diligence",
    description: "Every deal comes with 14 days to verify everything before you commit.",
  },
]

export function DealMarketplace() {
  return (
    <section
      id="deal-marketplace"
      className="bg-warm-grey px-4 py-20 sm:px-6 sm:py-28"
    >
      {/* Divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-gray-200" />

      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-gold"
        >
          Deal Marketplace
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-center text-2xl font-bold text-charcoal sm:text-4xl"
        >
          Browse Live Deals &amp; Reserve
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-light"
        >
          Our marketplace is regularly refreshed with verified, below-market-value property deals
          across England &amp; Wales. Browse the portfolio, review the numbers, and reserve your next
          investment — all in one place.
        </motion.p>

        {/* Highlight cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-gray-100 bg-white p-5 text-center sm:p-6"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                <item.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-4 text-base font-bold text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-light">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center"
        >
          <a
            href="https://alalipropertypartnersdeals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-base font-bold text-dark-bg transition-colors hover:bg-gold-light sm:px-10"
          >
            Browse Deals
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://alalipropertypartnersdeals.com/Services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gold px-8 py-3.5 text-base font-bold text-gold transition-colors hover:bg-gold/10 sm:px-10"
          >
            Our Services
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
