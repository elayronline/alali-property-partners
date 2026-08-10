import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Faq } from "@/components/Faq"
import { SectionDivider } from "@/components/ui/SectionDivider"

export const metadata: Metadata = {
  title: "UK HMO Investment for Overseas & Expat Investors",
  description:
    "Buying a UK HMO from abroad. We view, verify and coordinate on the ground across London and the South East, and introduce expat-friendly brokers and solicitors.",
  keywords: [
    "buying UK property from overseas",
    "overseas property investment UK",
    "expat property investment UK",
    "invest in UK HMO from abroad",
    "UK property sourcing for overseas investors",
    "international property investors UK",
    "non-resident UK property investment",
    "expat buy to let UK",
  ],
  alternates: { canonical: "/overseas-hmo-investment" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alali Property Partners — HMO Sourcing, London & the South East" }],
    title: "UK HMO Investment for Overseas Investors | Alali Property Partners",
    description:
      "Buying a UK HMO from abroad — we view, verify and coordinate on the ground across Greater London and the South East, in your time zone.",
    url: "/overseas-hmo-investment",
    type: "article",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "UK HMO Investment for Overseas Investors | Alali Property Partners",
    description:
      "Buying a UK HMO from abroad — we view, verify and coordinate on the ground across Greater London and the South East.",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/overseas-hmo-investment#service",
  name: "UK HMO Sourcing for Overseas Investors",
  description:
    "HMO deal sourcing for overseas, expat and international investors buying UK property from abroad. We view properties in person, verify comparables and rents, check the planning and licensing position, and introduce solicitors and mortgage brokers who work with non-UK-resident buyers.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.alalipropertypartners.com/#organization",
    name: "Alali Property Partners",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "AdministrativeArea", name: "South East England" },
  ],
  serviceType: "Property Deal Sourcing",
  audience: {
    "@type": "Audience",
    audienceType:
      "Overseas, expat and international investors buying UK HMO property from abroad, including non-UK-resident buyers",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I invest in a UK HMO if I live overseas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. There is no restriction on non-UK residents owning property in England and Wales. The practical obstacles are usually finance, identity verification and simply not being here to view. Lending is narrower for non-residents than for UK-resident buyers, and expect enhanced anti-money-laundering and source-of-funds checks from your solicitor and lender. We introduce brokers and solicitors who routinely act for overseas buyers, but your eligibility is a matter for them, not for us.",
      },
    },
    {
      "@type": "Question",
      name: "How do I view a property if I cannot travel to the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We attend in person on your behalf. Every deal pack includes photographs where available, and for off-market properties that arrive without them we arrange and attend a viewing. We can walk a property on a live video call in your time zone and answer questions as we go. What we will not do is tell you a property is sound in a structural or legal sense — that is what an independent surveyor and your solicitor are for, and we would always expect you to instruct both.",
      },
    },
    {
      "@type": "Question",
      name: "Are there extra costs or taxes for overseas buyers of UK property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Non-UK-resident buyers face additional Stamp Duty Land Tax on top of the rates that apply to UK residents, and there are further considerations around rental income tax and reporting for non-resident landlords. Rates and thresholds change, and how they apply depends on your residence status and how you hold the property. We do not provide tax advice and will not quote your position — your solicitor and a qualified tax adviser must confirm what applies to you before you commit.",
      },
    },
    {
      "@type": "Question",
      name: "Why an HMO rather than a single-let if I am investing from abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HMOs typically produce a higher gross yield per property than single-lets because income comes room by room, and a single void affects part of the income rather than all of it. They are also more operationally involved — licensing, compliance and management are heavier — which is why overseas owners almost always appoint a specialist managing agent. We source and introduce; we do not manage properties, and we would expect a non-resident owner to have a managing agent in place before completion.",
      },
    },
    {
      "@type": "Question",
      name: "What time zones do you work across?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are UK-based and work UK hours, but arrange calls and viewings outside them where a client's time zone requires it. The one thing that does not flex is the decision window: off-market deals are time-sensitive and the standard window after a deal pack is released is 48 hours. We flag this at the outset with overseas clients so that solicitors and brokers can be lined up in advance rather than found at short notice.",
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.alalipropertypartners.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Overseas HMO Investment",
      item: "https://www.alalipropertypartners.com/overseas-hmo-investment",
    },
  ],
}

const onTheGround = [
  {
    name: "We view it, you don't fly",
    detail:
      "We attend viewings in person and can walk the property on a live video call in your time zone, asking the questions you would ask.",
  },
  {
    name: "Verified before it reaches you",
    detail:
      "Comparables checked against Land Registry, rents against observed local lettings data, and the Article 4, planning and licensing position set out in writing.",
  },
  {
    name: "Professionals who act for non-residents",
    detail:
      "Introductions to FCA-regulated brokers and qualified solicitors who routinely handle non-UK-resident buyers and enhanced source-of-funds checks.",
  },
  {
    name: "Conversion managed end to end",
    detail:
      "Through Source & Develop we can project-manage the full HMO conversion — design, planning, build and handover — without you being in the country.",
  },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-24">
          <div className="animated-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">
                For
              </span>
              <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
              Overseas &amp; Expat Investors
            </p>
            <h1 className="font-display mt-4 text-4xl tracking-tight text-white sm:text-6xl">
              UK HMO investment from abroad
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              Buying a UK HMO while living overseas comes down to having people on the ground you
              trust. We view, verify and coordinate across Greater London and the South East — and
              introduce the brokers and solicitors who work with non-resident buyers.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-lg bg-gold px-7 py-3.5 text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
              >
                Start a Conversation &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* On the ground */}
        <section className="bg-ink px-4 py-20 sm:px-6 sm:py-28">
          <SectionDivider variant="light" className="mb-16" />
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-center text-3xl text-white sm:text-4xl">
              Your eyes on the ground
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/60">
              The distance problem is not finding listings — it is knowing what a property is really
              like, and whether the numbers hold up, without standing in it.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {onTheGround.map((c) => (
                <div key={c.name} className="rounded-xl border border-white/10 bg-dark-bg-light/60 p-5">
                  <p className="font-display text-lg text-white">{c.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/55">{c.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/case-studies"
                className="inline-block py-2 text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                See a real sourced deal &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* What to line up */}
        <section className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28">
          <div className="animated-grid pointer-events-none absolute inset-0" />
          <SectionDivider variant="dark" className="relative mb-16" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              What to line up before you buy
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Non-resident purchases fail on timing far more often than on price. Lending is narrower
              than for UK-resident buyers, identity and source-of-funds checks take longer, and
              additional Stamp Duty Land Tax applies to non-UK residents. None of that is a problem
              if your solicitor and broker are appointed before a deal appears — and a real problem
              if they are not, because off-market deals carry a 48-hour decision window.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/hands-off-hmo-investment"
                className="inline-block py-2 text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                How hands-off investing works &rarr;
              </Link>
              <Link
                href="/development-management"
                className="inline-block py-2 text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                Managed conversions &rarr;
              </Link>
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-white/40">
              Tax treatment depends on your residence status and how you hold the property, and rates
              and thresholds change. We do not provide tax, financial, mortgage or legal advice and
              will not assess your position — your own solicitor and a qualified tax adviser must
              confirm what applies to you. Property deal sourcing is not a regulated activity. We are
              not a managing agent, and all figures we provide are indicative and require independent
              verification.
            </p>
          </div>
        </section>

        <Faq items={faqSchema.mainEntity} heading="Overseas HMO investment — FAQs" />
      </main>
      <Footer />
    </>
  )
}
