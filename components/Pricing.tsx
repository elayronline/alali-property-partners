"use client"

import { motion } from "framer-motion"
import { ExpandableSection } from "@/components/ui/ExpandableSection"

const pricingCards = [
  {
    title: "Investment Purchase",
    subtitle: "BTL, BRR, Flip",
    fee: "From £3,500",
    terms: "50% on reservation, 50% on completion",
  },
  {
    title: "Rent-to-Rent",
    subtitle: "",
    fee: "From £2,750",
    terms: "On heads of terms agreement",
  },
  {
    title: "Bespoke Sourcing",
    subtitle: "",
    fee: "£1,000 upfront + sourcing fee on completion",
    terms: "Upfront fee due on brief agreement",
    expandable: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-charcoal sm:text-4xl"
        >
          Our Fees
        </motion.h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {pricingCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-gold-dark to-gold" />
              <h3 className="text-lg font-bold text-charcoal">{card.title}</h3>
              {card.subtitle && (
                <p className="mt-0.5 text-xs text-muted-light">{card.subtitle}</p>
              )}
              <p className="mt-4 text-2xl font-bold text-gold">{card.fee}</p>
              <p className="mt-2 text-sm text-muted-light">{card.terms}</p>

              {card.expandable && (
                <div className="mt-4">
                  <ExpandableSection trigger="How does bespoke sourcing work?">
                    <p className="text-sm leading-relaxed text-muted-light">
                      You pay £1,000 upfront and we have 14 days to source a deal that meets your
                      criteria. If we don&apos;t find it, you get your money back — no questions
                      asked. If you proceed with a deal, the £1,000 is deducted from the standard
                      sourcing fee on completion.
                    </p>
                  </ExpandableSection>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-light"
        >
          All fees exclusive of VAT. Reservation fee held until completion — fully refundable if
          the deal falls through for reasons outside your control. No hidden costs.
        </motion.p>
      </div>
    </section>
  )
}
