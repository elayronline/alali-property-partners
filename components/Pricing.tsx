"use client"

import { motion } from "framer-motion"
import { ExpandableSection } from "@/components/ui/ExpandableSection"

const pricingCards = [
  {
    title: "Investment Purchase",
    subtitle: "BTL, BRR, HMO, SA, Flip — all strategies",
    fee: "2%",
    feeDetail: "of purchase price (min £3,000)",
    payment: "50% on reservation, 50% on completion",
    includes: "Full deal pack, comparables, yield analysis, exit strategy",
    reassurance: "No completion, no fee",
    popular: true,
  },
  {
    title: "Rent-to-Rent",
    subtitle: "Ready-to-go rental agreements",
    fee: "£2,750",
    feeDetail: "from",
    payment: "Due on heads of terms agreement",
    includes: "Deal identification, negotiation, heads of terms",
    reassurance: null,
    popular: false,
  },
  {
    title: "Bespoke Sourcing",
    subtitle: "Sourced to your exact brief",
    fee: "£1,000",
    feeDetail: "retainer + agreed fee on completion",
    payment: "Retainer on brief, balance on completion",
    includes: "Everything in Investment + sourced to your exact criteria",
    reassurance: "14-day money-back guarantee on retainer",
    popular: false,
    expandable: true,
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
                <p className="mt-0.5 text-xs text-muted-light">{card.subtitle}</p>

                {/* Fee */}
                <p className="mt-4 text-2xl font-bold text-gold">{card.fee}</p>
                <p className="mt-0.5 text-xs text-muted-light">{card.feeDetail}</p>

                {/* When you pay */}
                <div className="mt-4 space-y-2.5">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-charcoal/40">
                      When you pay
                    </p>
                    <p className="mt-0.5 text-sm text-muted-light">{card.payment}</p>
                  </div>

                  {/* What's included */}
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-charcoal/40">
                      What&apos;s included
                    </p>
                    <p className="mt-0.5 text-sm text-muted-light">{card.includes}</p>
                  </div>
                </div>

                {/* Reassurance badge */}
                {card.reassurance && (
                  <div className="mt-4 rounded-lg border border-gold/20 bg-gold/5 px-3 py-2">
                    <p className="text-xs font-semibold text-gold">{card.reassurance}</p>
                  </div>
                )}

                {/* Expandable for bespoke */}
                {card.expandable && (
                  <div className="mt-4">
                    <ExpandableSection trigger="How does bespoke sourcing work?">
                      <p className="text-sm leading-relaxed text-muted-light">
                        You pay a £1,000 retainer and we have 14 days to source a deal that meets
                        your criteria. If we don&apos;t find it, you get your money back — no
                        questions asked. If you proceed, the retainer is deducted from the agreed
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
          All fees exclusive of VAT. No hidden costs. If a deal falls through, you don&apos;t pay the
          completion balance.
        </motion.p>
      </div>
    </section>
  )
}
