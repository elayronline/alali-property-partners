"use client"

import { motion } from "framer-motion"
import { ExpandableSection } from "@/components/ui/ExpandableSection"

const pricingCards = [
  {
    title: "Standard Purchase",
    subtitle: "Buy-to-Let, Refurb & Refinance, Flip",
    fee: "From £3,500",
    terms: "50% on reservation, 50% on completion",
    popular: true,
  },
  {
    title: "Rent-to-Rent",
    subtitle: "Ready-to-go rental agreements",
    fee: "From £2,750",
    terms: "Due on heads of terms agreement",
    popular: false,
  },
  {
    title: "Bespoke Sourcing",
    subtitle: "We source to your exact brief",
    fee: "£1,000 upfront + fee on completion",
    terms: "Upfront fee due on brief agreement",
    expandable: true,
    popular: false,
    guarantee: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      {/* Gold divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-gold"
        >
          Transparent Pricing
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-center text-3xl font-bold text-charcoal sm:text-4xl"
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
              className={`relative rounded-xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                card.popular ? "border-gold" : "border-gray-100"
              }`}
            >
              {/* Gold top border */}
              <div className="absolute top-0 right-0 left-0 h-1 rounded-t-xl bg-gradient-to-r from-gold-dark to-gold" />

              {card.popular && (
                <span className="absolute -top-3 right-4 rounded-full bg-gold px-3 py-0.5 text-xs font-bold text-dark-bg">
                  Most Popular
                </span>
              )}

              <div className="pt-2">
                <h3 className="text-lg font-bold text-charcoal">{card.title}</h3>
                {card.subtitle && (
                  <p className="mt-0.5 text-xs text-muted-light">{card.subtitle}</p>
                )}
                <p className="mt-4 text-2xl font-bold text-gold">{card.fee}</p>
                <p className="mt-2 text-sm text-muted-light">{card.terms}</p>

                {card.guarantee && (
                  <div className="mt-4 rounded-lg border border-gold/20 bg-gold/5 px-3 py-2">
                    <p className="text-xs font-semibold text-gold">14-day money-back guarantee</p>
                  </div>
                )}

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
              </div>
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
