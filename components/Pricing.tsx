"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { DealListSignup } from "@/components/DealListSignup"
import { ExpandableSection } from "@/components/ui/ExpandableSection"
import { SectionDivider } from "@/components/ui/SectionDivider"
import { scrollToSection } from "@/lib/smoothScroll"

type CtaKind = "member" | "bespoke" | "develop"

type PricingCard = {
  title: string
  subtitle: string
  fee: string
  priceSuffix?: string
  feeDetail: string
  highlights: string[]
  paymentLabel: string
  payment: string
  cta: CtaKind
  popular?: boolean
  subscription?: boolean
  byApplication?: boolean
}

// The three paid ways to work with us. The Deal List is intentionally NOT a card
// — it's free to join, so it lives in its own section below (lead capture, not a
// priced package), which keeps this a clean 3-tier comparison.
const pricingCards: PricingCard[] = [
  {
    title: "Portfolio Builder",
    subtitle: "First access to every deal, every month.",
    fee: "£249",
    priceSuffix: "/month",
    feeDetail: "Rolling · cancel anytime",
    subscription: true,
    cta: "member",
    highlights: [
      "48-hour priority access to every new deal",
      "£850 credit per completed deal",
      "One free feasibility report per deal",
    ],
    paymentLabel: "Everything included",
    payment:
      "Also includes priority access to limited Source & Develop slots, monthly market intelligence for your target areas, a quarterly portfolio review call, and priority warm introductions to our regulated power team. Billed £249/month — rolling, cancel anytime.",
  },
  {
    title: "Bespoke Sourcing",
    subtitle: "Commission your own search — sourced exclusively for you.",
    fee: "£8,000",
    feeDetail: "fixed fee · VAT inc.",
    popular: true,
    cta: "bespoke",
    highlights: [
      "A dedicated search to your exact brief",
      "Sourced for you — not shared with the list",
      "Full deal pack & viewings, fully hands-off",
    ],
    paymentLabel: "How payment works",
    payment:
      "£2,667 on signing secures a dedicated 14-day search (refundable if no suitable deal is presented in the window); £2,667 on presentation of a matching deal; £2,666 on completion.",
  },
  {
    title: "Source & Develop",
    subtitle: "From sourcing to finished HMO.",
    fee: "By Application",
    feeDetail: "Selective — limited projects per quarter",
    byApplication: true,
    cta: "develop",
    highlights: [
      "We source, then manage the full HMO conversion",
      "Delivered as a finished, tenanted HMO",
      "Design, planning, build & handover, end to end",
    ],
    paymentLabel: "How payment works",
    payment:
      "Fees are quoted per project and staged against milestones — search, secured, planning, build, handover.",
  },
]

export function Pricing() {
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

  const renderCta = (card: PricingCard) => {
    const gold =
      "mt-5 block w-full rounded-lg bg-gold px-4 py-2.5 text-center text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
    const dark =
      "mt-5 block w-full rounded-lg bg-charcoal px-4 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-charcoal/90"

    switch (card.cta) {
      case "member":
        return (
          <Link href="/contact?enquiry=Portfolio%20Builder" className={gold}>
            Become a Member &rarr;
          </Link>
        )
      case "bespoke":
        return (
          <Link href="/contact?enquiry=Bespoke%20Sourcing" className={gold}>
            Get in Touch &rarr;
          </Link>
        )
      case "develop":
        return (
          <button onClick={handleDevEnquiry} className={`${dark} cursor-pointer`}>
            Apply / Enquire &rarr;
          </button>
        )
    }
  }

  return (
    <section id="pricing" className="overflow-x-hidden bg-ink px-5 py-20 sm:px-6 sm:py-28">
      <SectionDivider variant="light" className="mb-16" />

      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          Membership &amp; Fixed Fees
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
          Simple, upfront, no hidden costs — VAT inclusive. Three ways to work with us directly, or
          join the deal list free below.
        </motion.p>

        {/* Three paid tiers */}
        <div className="relative mt-14 overflow-visible">
          <div className="mx-auto grid max-w-sm gap-5 overflow-visible sm:max-w-3xl sm:grid-cols-2 md:gap-6 lg:max-w-5xl lg:grid-cols-3">
            {pricingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative"
              >
                <div
                  className={`relative h-full overflow-hidden rounded-2xl p-[1.5px] transition-all duration-300 md:group-hover:-translate-y-1.5 ${
                    card.popular
                      ? "bg-gradient-to-br from-gold via-gold-light to-gold-dark shadow-[0_8px_40px_-12px_rgba(201,160,61,0.45)] md:group-hover:shadow-[0_20px_60px_-15px_rgba(201,160,61,0.6)]"
                      : card.subscription
                        ? "bg-gradient-to-br from-gold/60 via-gold/30 to-gold/60 shadow-[0_8px_40px_-14px_rgba(201,160,61,0.35)] md:group-hover:shadow-[0_18px_55px_-15px_rgba(201,160,61,0.45)]"
                        : card.byApplication
                          ? "bg-gradient-to-br from-charcoal via-charcoal/85 to-charcoal shadow-[0_8px_40px_-14px_rgba(38,40,44,0.5)] md:group-hover:shadow-[0_20px_60px_-15px_rgba(38,40,44,0.55)]"
                          : "bg-gradient-to-br from-white/15 via-white/5 to-white/15 shadow-sm md:group-hover:shadow-xl"
                  }`}
                >
                  <div className="relative flex h-full flex-col rounded-[calc(1rem-1.5px)] bg-ink-raised p-5 sm:p-6">
                    <div
                      className="pointer-events-none absolute -inset-px rounded-[calc(1rem-1.5px)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 0%, rgba(201,160,61,0.12), transparent 70%)",
                      }}
                    />

                    <div className="relative flex h-full flex-col pt-2">
                      <h3 className="font-display text-2xl text-white">{card.title}</h3>
                      <p className="mt-1 min-h-[2.5rem] text-xs text-muted-light">{card.subtitle}</p>

                      {/* Price */}
                      <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <p
                          className={`font-display text-white ${card.byApplication ? "text-2xl" : "text-4xl"}`}
                          style={{ fontWeight: 400 }}
                        >
                          {card.fee}
                        </p>
                        {card.priceSuffix && (
                          <span className="text-sm text-muted-light">{card.priceSuffix}</span>
                        )}
                        {!card.byApplication && (
                          <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-gold">
                            VAT inc.
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-muted-light">{card.feeDetail}</p>

                      {/* Up-to-3 highlights */}
                      <ul className="mt-4 space-y-2">
                        {card.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                            <span className="text-sm leading-snug text-muted-light">{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Progressive disclosure — detail only on demand */}
                      <div className="mt-4">
                        <ExpandableSection trigger={card.paymentLabel}>
                          <p className="text-sm leading-relaxed text-muted-light">{card.payment}</p>
                        </ExpandableSection>
                      </div>

                      {/* CTA pinned to the bottom for even alignment */}
                      <div className="mt-auto">{renderCta(card)}</div>
                    </div>
                  </div>
                </div>

                {card.popular && (
                  <span className="pointer-events-none absolute -top-3 right-5 z-20 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold to-gold-light px-3 py-1 text-[0.7rem] font-bold tracking-wide text-dark-bg shadow-[0_4px_14px_-2px_rgba(201,160,61,0.6)]">
                    Most Popular
                  </span>
                )}
                {card.subscription && (
                  <span className="pointer-events-none absolute -top-3 right-5 z-20 inline-flex items-center gap-1 rounded-full border border-gold/40 bg-ink px-3 py-1 text-[0.7rem] font-bold tracking-wide text-gold shadow-[0_4px_14px_-4px_rgba(201,160,61,0.5)]">
                    Membership
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

        {/* The Deal List — free to join, its own thing; fees in a dropdown */}
        <motion.div
          id="deal-list"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-2xl scroll-mt-24 rounded-2xl border border-gold/25 bg-white/[0.03] p-6 text-center sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">The Deal List</p>
          <h3 className="font-display mt-2 text-2xl text-white sm:text-3xl">
            Browse our pipeline — pick what fits
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-light">
            The off-market, pre-auction and direct-to-vendor HMO deals already in our pipeline —
            pick what fits your numbers. Join the list and we&apos;ll send new deals as they land;
            unsubscribe anytime.
          </p>

          <div className="mx-auto mt-6 max-w-md text-left">
            <DealListSignup />
          </div>

          <div className="mx-auto mt-4 max-w-md text-left">
            <ExpandableSection trigger="Fees & terms">
              <p className="text-sm leading-relaxed text-muted-light">
                Joining is free. You only pay if you choose to take a deal — a £5,000 fixed fee per
                deal (VAT inc.): a £500 refundable deposit unlocks the full pack and viewing, with the
                £4,500 balance on completion. The deposit is refunded if the deal is already gone or on
                a genuine decision not to proceed after viewing, and credited against the fee if you
                proceed. Full detail in our{" "}
                <a
                  href="/terms"
                  className="text-gold underline decoration-gold/30 underline-offset-2 hover:text-gold-dark"
                >
                  terms of service
                </a>
                .
              </p>
            </ExpandableSection>
          </div>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-light/85"
        >
          All fees VAT inclusive. No hidden costs. Stage payments and refund conditions are confirmed
          on the call and set out in our{" "}
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
