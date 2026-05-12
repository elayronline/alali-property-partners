"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExpandableSection } from "@/components/ui/ExpandableSection"
import { useSmartNav } from "@/lib/smartNav"

const pricingCards = [
  {
    title: "Bespoke Sourcing",
    subtitle: "We go to market and source deals tailored to your exact criteria — fully hands-off",
    fee: "£1,000",
    feeDetail: "upfront retainer, then 2.4% sourcing fee (min £3,600, VAT inc.)",
    payment: "Retainer refundable if no deal found within 14 days (subject to terms)",
    includes: "Sourced to your exact brief — location, budget, strategy, returns",
    reassurance: "£1,000 deducted from the final sourcing fee. £1,000 refundable where we don't deliver a suitable deal in 14 days, or where there are valid reasons not to proceed after presentation (subject to terms).",
    popular: true,
    expandable: true,
  },
  {
    title: "Sourced Deals",
    subtitle: "Off-market deals from our private contacts and on-market deals from our compliant agent network",
    fee: "2.4%",
    feeDetail: "of purchase price (min £3,600, VAT inc.)",
    payment: "£500 to unlock the deal pack. Balance only on a decision to proceed.",
    includes: "Full deal pack + viewings and introductions facilitated by us",
    reassurance: "£500 refundable where there are valid reasons not to proceed (subject to terms).",
    popular: false,
  },
]

export function Pricing() {
  const navigate = useSmartNav()
  return (
    <section id="pricing" className="overflow-x-hidden bg-white px-5 py-20 sm:px-6 sm:py-28">
      {/* Divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-gray-200" />

      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">04</span>
          <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
          Transparent Pricing
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mt-3 text-center text-3xl font-semibold tracking-tight text-charcoal sm:text-5xl"
        >
          Our Fees
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-light"
        >
          Simple, upfront, no hidden costs. Two ways to invest — each with transparent fees and a clear decision window.
        </motion.p>

        {/* Cards */}
        <div className="relative mt-14 overflow-visible">
          <div className="mx-auto grid max-w-3xl gap-5 overflow-visible sm:grid-cols-2 md:gap-6">
            {pricingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl p-[1.5px] transition-all duration-300 md:hover:-translate-y-1.5 ${
                  card.popular
                    ? "bg-gradient-to-br from-gold via-gold-light to-gold-dark shadow-[0_8px_40px_-12px_rgba(201,160,61,0.45)] md:hover:shadow-[0_20px_60px_-15px_rgba(201,160,61,0.6)]"
                    : "bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 shadow-sm md:hover:shadow-xl"
                }`}
              >
                <div className="relative h-full rounded-[calc(1rem-1.5px)] bg-white p-5 sm:p-6">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -inset-px rounded-[calc(1rem-1.5px)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(201,160,61,0.12), transparent 70%)",
                    }}
                  />

                {card.popular && (
                  <span className="absolute -top-3 right-4 z-10 rounded-full bg-gradient-to-r from-gold to-gold-light px-3 py-1 text-xs font-bold tracking-wide text-dark-bg shadow-md shadow-gold/20">
                    ✦ Recommended
                  </span>
                )}

                <div className="pt-2">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-charcoal">{card.title}</h3>
                  <p className="mt-1 text-xs text-muted-light">{card.subtitle}</p>

                  {/* Fee */}
                  <p className="mt-5 font-display text-5xl font-semibold tracking-tight text-charcoal">{card.fee}</p>
                  <p className="mt-1 text-xs text-muted-light">{card.feeDetail}</p>

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
                      onClick={() => navigate("contact")}
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
                          14 days, your retainer is refundable (subject to terms). Once a deal is
                          presented, you have a 48-hour decision SLA — extensions available on fair,
                          justified reasoning. If you decide not to proceed and there are valid
                          reasons, the £1,000 is also refundable (subject to terms). On a decision
                          to proceed, the 2.4% sourcing fee applies (min £3,600), with the £1,000
                          retainer deducted from the final fee.
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
