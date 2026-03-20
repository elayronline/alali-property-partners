"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExpandableSection } from "@/components/ui/ExpandableSection"
import { scrollToSection } from "@/lib/smoothScroll"

const pricingCards = [
  {
    title: "Investment Purchase",
    subtitle: "Buy-to-Let, BRR, HMO, SA, Flip — all strategies",
    fee: "2.4%",
    feeDetail: "of purchase price (min £3,600)",
    payment: "£100 reservation fee to secure, balance payable upfront on instruction",
    includes: "Full deal pack, comparables, yield analysis, exit strategy",
    reassurance: "14-day due diligence period — if the deal isn't right, you're covered.",
    popular: true,
  },
  {
    title: "Rent-to-Rent",
    subtitle: "Ready-to-go rental agreements",
    fee: "From £3,600",
    feeDetail: "depending on deal complexity",
    payment: "£100 reservation fee to secure, balance payable upfront on instruction",
    includes: "Deal identification, negotiation, heads of terms",
    reassurance: "14-day due diligence period — if the deal isn't right, you're covered.",
    popular: false,
  },
  {
    title: "Bespoke Sourcing",
    subtitle: "Sourced to your exact brief",
    fee: "£1,000",
    feeDetail: "retainer + agreed fee on completion",
    payment: "Retainer payable upfront on brief",
    includes: "Everything in Investment + sourced to your exact criteria",
    reassurance: "14-day sourcing window — if we don't deliver, you're covered.",
    popular: false,
    expandable: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="overflow-x-hidden bg-white px-5 py-20 sm:px-6 sm:py-28">
      {/* Divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-gray-200" />

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
          className="mt-3 text-center text-2xl font-bold text-charcoal sm:text-4xl"
        >
          Our Fees
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-light"
        >
          Marketplace pricing — simple, upfront, no hidden costs. Every deal includes a 14-day due diligence period.
        </motion.p>

        {/* Cards */}
        <div className="relative mt-14 overflow-visible">
          <div className="grid gap-5 overflow-visible sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {pricingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-xl border bg-white p-5 shadow-sm transition-all duration-200 sm:p-6 md:hover:-translate-y-1 md:hover:shadow-lg ${
                  card.popular ? "border-gold" : "border-gray-100"
                }`}
              >
                {/* Top accent */}
                <div className="absolute top-0 right-0 left-0 h-1 rounded-t-xl bg-gold" />

                {card.popular && (
                  <span className="absolute -top-3 right-4 rounded-full bg-gold px-3 py-0.5 text-xs font-bold text-dark-bg">
                    Most Popular
                  </span>
                )}

                <div className="pt-2">
                  <h3 className="text-lg font-bold text-charcoal">{card.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-light">{card.subtitle}</p>

                  {/* Fee */}
                  <p className="mt-4 text-2xl font-bold text-charcoal">{card.fee}</p>
                  <p className="mt-0.5 text-xs text-muted-light">{card.feeDetail}</p>

                  {/* Details */}
                  <div className="mt-4 space-y-2.5">
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-charcoal/40">
                        When you pay
                      </p>
                      <p className="mt-0.5 text-sm text-muted-light">{card.payment}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-charcoal/40">
                        What&apos;s included
                      </p>
                      <p className="mt-0.5 text-sm text-muted-light">{card.includes}</p>
                    </div>
                  </div>

                  {/* Reassurance */}
                  <div className="mt-4 rounded-lg bg-warm-grey px-3 py-2">
                    <p className="text-xs font-medium text-muted-light">{card.reassurance}</p>
                  </div>

                  {/* CTA */}
                  {!card.expandable && (
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="mt-4 block w-full rounded-lg bg-gold px-4 py-2.5 text-center text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
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
                        className="block w-full rounded-lg bg-gold px-4 py-2.5 text-center text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
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

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-light"
        >
          All fees are VAT inclusive. No hidden costs. See our{" "}
          <a href="/terms" className="text-gold underline hover:text-gold-light">terms of service</a>{" "}
          for full refund details.
        </motion.p>
      </div>
    </section>
  )
}
