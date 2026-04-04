"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExpandableSection } from "@/components/ui/ExpandableSection"
import { scrollToSection } from "@/lib/smoothScroll"

const pricingCards = [
  {
    title: "Bespoke Sourcing",
    subtitle: "We go to market and source deals tailored to your exact criteria — fully hands-off",
    fee: "£1,000",
    feeDetail: "upfront retainer, then 2.4% sourcing fee (min £3,600, VAT inc.)",
    payment: "Retainer refundable if no deal found within 14 days (subject to terms)",
    includes: "Sourced to your exact brief — location, budget, strategy, returns",
    reassurance: "£1,000 deducted from the final sourcing fee. If we don't deliver, you're covered.",
    popular: true,
    expandable: true,
  },
  {
    title: "Website Deals",
    subtitle: "Ready-made investment opportunities listed on our platform",
    fee: "2.4%",
    feeDetail: "sourcing fee (min £3,600, VAT inc.)",
    payment: "£100 reservation fee to secure, then 14-day due diligence period",
    includes: "Full deal pack, comparables, yield analysis, exit strategy",
    reassurance: "14-day due diligence period — if the deal isn't right, you're covered.",
    popular: false,
  },
  {
    title: "Off-Market Deals",
    subtitle: "Exclusive deals shared within our private investor network",
    fee: "2.4%",
    feeDetail: "sourcing fee (min £3,600, VAT inc.) paid upfront",
    payment: "Sourcing fee paid upfront on instruction",
    includes: "Full deal pack + introduction to agent/vendor",
    reassurance: "14-day due diligence period — full refund if you don't proceed (subject to terms).",
    popular: false,
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
          Simple, upfront, no hidden costs. Three ways to invest — each with transparent fees and a due diligence period.
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
                    Recommended
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
                          You pay a £1,000 retainer upfront. We then actively go to market and
                          source deals tailored to your exact investment criteria — location, budget,
                          strategy, and target returns. If we don&apos;t find a suitable deal within
                          14 days, your retainer is refundable (subject to terms). Once you&apos;re
                          happy with a deal, a 2.4% sourcing fee applies (min £3,600), with the
                          £1,000 retainer deducted from the final fee.
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
