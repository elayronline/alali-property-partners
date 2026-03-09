"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExpandableSection } from "@/components/ui/ExpandableSection"
import { scrollToSection } from "@/lib/smoothScroll"

const pricingCards = [
  {
    title: "Investment Purchase",
    subtitle: "BTL, BRR, HMO, SA, Flip — all strategies",
    fee: "2%",
    feeDetail: "of purchase price (min £3,000)",
    valueNote: "Most investors spend 40+ hours finding a single deal. We deliver it ready to go.",
    payment: "Payable upfront on instruction",
    includes: "Full deal pack, comparables, yield analysis, exit strategy",
    reassurance: "14-day due diligence period — if the deal isn't right, you're covered. Full details in our terms.",
    popular: true,
  },
  {
    title: "Rent-to-Rent",
    subtitle: "Ready-to-go rental agreements",
    fee: "£2,750",
    feeDetail: "from",
    payment: "Payable upfront on instruction",
    includes: "Deal identification, negotiation, heads of terms",
    reassurance: "14-day due diligence period — if it's not right, you're covered. Full details in our terms.",
    popular: false,
  },
  {
    title: "Bespoke Sourcing",
    subtitle: "Sourced to your exact brief",
    fee: "£1,000",
    feeDetail: "retainer + agreed fee on completion",
    payment: "Retainer payable upfront on brief",
    includes: "Everything in Investment + sourced to your exact criteria",
    reassurance: "14-day sourcing window — if we don't deliver, you're covered. Full details in our terms.",
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

        <div className="relative">
          {/* Scroll affordance fade — mobile only */}
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
        <div className="hide-scrollbar -mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:gap-6 sm:snap-none sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
          {pricingCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative min-w-[280px] shrink-0 snap-center rounded-xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:min-w-0 sm:shrink ${
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
                {"valueNote" in card && card.valueNote && (
                  <p className="mt-2 text-xs italic text-muted-light">{card.valueNote}</p>
                )}

                {/* When you pay */}
                <div className="mt-4 space-y-2.5">
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-charcoal/40">
                      When you pay
                    </p>
                    <p className="mt-0.5 text-sm text-muted-light">{card.payment}</p>
                  </div>

                  {/* What's included */}
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-charcoal/40">
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

                {/* CTA button for non-expandable cards */}
                {!card.expandable && (
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="mt-4 block w-full rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold px-4 py-2.5 text-center text-sm font-bold text-dark-bg transition-all hover:from-gold hover:via-gold-light hover:to-gold-light"
                  >
                    Speak to Us &rarr;
                  </button>
                )}

                {/* Expandable for bespoke */}
                {card.expandable && (
                  <div className="mt-4 space-y-3">
                    <ExpandableSection trigger="How does bespoke sourcing work?">
                      <p className="text-sm leading-relaxed text-muted-light">
                        You pay a £1,000 retainer upfront. We then have 14 days to source a deal
                        that matches your brief. If we don&apos;t deliver within that period,
                        you&apos;re covered — full details in our terms. If you go ahead, the
                        £1,000 comes off the final sourcing fee (typically 2–3% of purchase
                        price), with the balance payable upfront on instruction.
                      </p>
                    </ExpandableSection>
                    <Link
                      href="/bespoke"
                      className="block w-full rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold px-4 py-2.5 text-center text-sm font-bold text-dark-bg transition-all hover:from-gold hover:via-gold-light hover:to-gold-light"
                    >
                      Get Started &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-light"
        >
          All fees are plus VAT where applicable. No hidden costs. All fees are payable upfront.
          Every deal comes with a 14-day due diligence period — if the deal isn&apos;t right for
          you, you&apos;re protected. See our{" "}
          <a href="/terms" className="text-gold underline hover:text-gold-light">terms of service</a>{" "}
          for full refund details.
        </motion.p>
      </div>
    </section>
  )
}
