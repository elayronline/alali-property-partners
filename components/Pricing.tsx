"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { DealListSignup } from "@/components/DealListSignup"
import { ExpandableSection } from "@/components/ui/ExpandableSection"
import { SectionDivider } from "@/components/ui/SectionDivider"
import { useSmartNav } from "@/lib/smartNav"
import { scrollToSection } from "@/lib/smoothScroll"

type PricingCard = {
  title: string
  subtitle: string
  fee?: string
  feeDetail?: string
  payment?: string
  includes?: string
  reassurance?: string
  steps?: string[]
  popular?: boolean
  expandable?: boolean
  byApplication?: boolean
  dealList?: boolean
}

const pricingCards: PricingCard[] = [
  {
    title: "The Deal List",
    subtitle: "Live off-market, pre-auction & direct-to-vendor deals — straight to your inbox.",
    fee: "2.4%",
    feeDetail: "of purchase price · min £3,600",
    dealList: true,
    steps: [
      "Join the deal list — free, takes seconds.",
      "We send live, vetted HMO & BRR deals as they land.",
      "£500 unlocks the deal pack; 2.4% only if you proceed.",
    ],
    popular: false,
  },
  {
    title: "Bespoke Sourcing",
    subtitle: "Sourced to your exact brief — fully hands-off sourcing",
    fee: "£1,000 + 2.4%",
    feeDetail: "retainer + sourcing fee · min £3,600",
    payment: "Start with a quick call to confirm your brief. The £1,000 retainer then secures your dedicated 14-day search; sourcing fee on completion.",
    includes: "Dedicated bespoke search + full deal pack + viewings facilitated",
    reassurance: "Retainer refundable if no suitable deal in 14 days, or on valid reasons not to proceed (subject to terms).",
    popular: true,
    expandable: true,
  },
  {
    title: "Source & Develop",
    subtitle: "From sourcing to finished HMO",
    byApplication: true,
  },
]

export function Pricing() {
  const navigate = useSmartNav()
  const pathname = usePathname()
  const router = useRouter()

  // Pre-tags the contact enquiry as Source & Develop. Same-page uses an
  // event + scroll; cross-page carries the tag via a query param.
  const handleDevEnquiry = () => {
    if (pathname === "/") {
      window.dispatchEvent(new CustomEvent("preselect-enquiry", { detail: "Source & Develop" }))
      scrollToSection("contact")
    } else {
      router.push("/contact?enquiry=Source%20%26%20Develop")
    }
  }

  return (
    <section id="pricing" className="overflow-x-hidden bg-ink px-5 py-20 sm:px-6 sm:py-28">
      {/* Divider */}
      <SectionDivider variant="light" className="mb-16" />

      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          Transparent Pricing
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mt-3 text-center text-3xl text-white sm:text-5xl"
        >
          Our Fees
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-light"
        >
          Simple, upfront, no hidden costs. Three ways to work with us — each with transparent fees
          and a clear decision window.
        </motion.p>

        {/* Cards */}
        <div className="relative mt-14 overflow-visible">
          <div className="mx-auto grid max-w-3xl gap-5 overflow-visible sm:grid-cols-2 md:gap-6 lg:max-w-none lg:grid-cols-3">
            {pricingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl p-[1.5px] transition-all duration-300 md:group-hover:-translate-y-1.5 ${
                    card.popular
                      ? "bg-gradient-to-br from-gold via-gold-light to-gold-dark shadow-[0_8px_40px_-12px_rgba(201,160,61,0.45)] md:group-hover:shadow-[0_20px_60px_-15px_rgba(201,160,61,0.6)]"
                      : card.byApplication
                        ? "bg-gradient-to-br from-charcoal via-charcoal/85 to-charcoal shadow-[0_8px_40px_-14px_rgba(38,40,44,0.5)] md:group-hover:shadow-[0_20px_60px_-15px_rgba(38,40,44,0.55)]"
                        : "bg-gradient-to-br from-white/15 via-white/5 to-white/15 shadow-sm md:group-hover:shadow-xl"
                  }`}
                >
                <div className="relative h-full rounded-[calc(1rem-1.5px)] bg-ink-raised p-5 sm:p-6">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -inset-px rounded-[calc(1rem-1.5px)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(201,160,61,0.12), transparent 70%)",
                    }}
                  />

                <div className="pt-2">
                  <h3 className="font-display text-2xl text-white">{card.title}</h3>
                  <p className="mt-1 text-xs text-muted-light">{card.subtitle}</p>

                  {card.byApplication ? (
                    <>
                      {/* By-application headline (no price) */}
                      <div className="mt-5">
                        <p className="font-display text-4xl text-white" style={{ fontWeight: 400 }}>
                          By Application
                        </p>
                        <p className="mt-1 text-xs text-muted-light">
                          Selective — limited projects per quarter
                        </p>
                      </div>

                      {/* Details */}
                      <div className="mt-4 space-y-2.5">
                        <div>
                          <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/40">
                            What it is
                          </p>
                          <p className="mt-0.5 text-sm text-muted-light">
                            We source the property to your brief, then manage the full HMO
                            conversion — design, planning, build and handover. End to end.
                          </p>
                        </div>
                        <div>
                          <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/40">
                            Availability
                          </p>
                          <p className="mt-0.5 text-sm text-muted-light">
                            We take on a limited number of projects per quarter.
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={handleDevEnquiry}
                        className="mt-5 block w-full rounded-lg bg-charcoal px-4 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-charcoal/90"
                      >
                        Apply / Enquire &rarr;
                      </button>
                    </>
                  ) : card.dealList ? (
                    <>
                      {/* Fee */}
                      <div className="mt-5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                        <p className="font-display text-4xl text-white" style={{ fontWeight: 400 }}>
                          {card.fee}
                        </p>
                        <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-gold">
                          VAT inc.
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-light">{card.feeDetail}</p>

                      {/* How it works — 1·2·3 */}
                      <ol className="mt-4 space-y-2.5">
                        {card.steps?.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[0.7rem] font-bold text-gold">
                              {idx + 1}
                            </span>
                            <p className="text-sm leading-snug text-muted-light">{step}</p>
                          </li>
                        ))}
                      </ol>

                      {/* Inline signup — the action for this tier */}
                      <div className="mt-5">
                        <DealListSignup />
                      </div>

                      {/* Secondary path for high-intent visitors */}
                      <button
                        onClick={() => navigate("contact")}
                        className="mt-3 block w-full cursor-pointer text-center text-xs text-muted-light transition-colors hover:text-gold"
                      >
                        Prefer to talk first? Speak to us
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Fee */}
                      <div className="mt-5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                        <p className="font-display text-4xl text-white" style={{ fontWeight: 400 }}>
                          {card.fee}
                        </p>
                        <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-gold">
                          VAT inc.
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-light">{card.feeDetail}</p>

                      {/* Details */}
                      <div className="mt-4 space-y-2.5">
                        <div>
                          <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/40">
                            When you pay
                          </p>
                          <p className="mt-0.5 text-sm text-muted-light">{card.payment}</p>
                        </div>
                        <div>
                          <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/40">
                            What&apos;s included
                          </p>
                          <p className="mt-0.5 text-sm text-muted-light">{card.includes}</p>
                        </div>
                      </div>

                      {/* Reassurance */}
                      <div className="mt-4 rounded-lg bg-white/5 px-3 py-2">
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
                              Get in touch and we&apos;ll arrange a quick call to confirm your brief —
                              location, budget, strategy, and target returns. Once it&apos;s a fit, the
                              £1,000 retainer locks in your dedicated 14-day search. If we don&apos;t
                              present a suitable deal in 14 days, the retainer is refundable
                              (subject to terms). On presentation you have a 48-hour decision SLA,
                              with extensions on fair, justified reasoning. If you decline with
                              valid reasons, the £1,000 is also refundable. On a decision to
                              proceed, the 2.4% sourcing fee (min £3,600, VAT inc.) is charged in
                              addition to the retainer — the retainer covers our bespoke search
                              effort and is not credited against the sourcing fee.
                            </p>
                          </ExpandableSection>
                          <Link
                            href="/contact?enquiry=Bespoke%20Sourcing"
                            className="block w-full rounded-lg bg-gold px-4 py-2.5 text-center text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
                          >
                            Get in Touch &rarr;
                          </Link>
                        </div>
                      )}
                    </>
                  )}
                </div>
                </div>
                </div>

                {card.popular && (
                  <span className="pointer-events-none absolute -top-3 right-5 z-20 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold to-gold-light px-3 py-1 text-[0.7rem] font-bold tracking-wide text-dark-bg shadow-[0_4px_14px_-2px_rgba(201,160,61,0.6)]">
                    Most Popular
                  </span>
                )}

                {card.byApplication && (
                  <span className="pointer-events-none absolute -top-3 right-5 z-20 inline-flex items-center gap-1 rounded-full border border-gold/40 bg-charcoal px-3 py-1 text-[0.7rem] font-bold tracking-wide text-gold shadow-[0_4px_14px_-4px_rgba(38,40,44,0.6)]">
                    By Application
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-light/85"
        >
          All fees VAT inclusive. No hidden costs. Exact figures, minimums, and refund
          conditions discussed on the call and set out in our{" "}
          <a
            href="/terms"
            className="text-gold underline decoration-gold/30 underline-offset-4 transition-colors hover:text-gold-dark hover:decoration-gold"
          >
            terms of service
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
