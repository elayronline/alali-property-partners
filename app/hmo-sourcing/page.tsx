import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { SectionDivider } from "@/components/ui/SectionDivider"

export const metadata: Metadata = {
  title: "HMO & Conversion-Ready BRR Sourcing — London & the South East",
  description:
    "Specialist sourcing of high-yield HMOs and conversion-ready BRR deals across Greater London & the South East. Pre-auction, off-market and direct-to-vendor, with HMO conversion and change-of-use potential (permitted development, non-Article 4).",
  keywords: [
    "HMO sourcing",
    "high yield HMO deals",
    "HMO conversion property",
    "conversion-ready BRR",
    "buy refurbish refinance HMO",
    "permitted development HMO",
    "non Article 4 HMO areas",
    "change of use HMO",
    "HMO sourcing London",
    "HMO sourcing South East",
  ],
  alternates: { canonical: "/hmo-sourcing" },
  openGraph: {
    title: "HMO & Conversion-Ready BRR Sourcing | Alali Property Partners",
    description:
      "High-yield HMOs and conversion-ready BRR deals across Greater London & the South East — pre-auction, off-market and direct-to-vendor.",
    url: "/hmo-sourcing",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "HMO & Conversion-Ready BRR Sourcing | Alali Property Partners",
    description:
      "High-yield HMOs and conversion-ready BRR deals across Greater London & the South East.",
    images: ["/opengraph-image"],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/hmo-sourcing#service",
  name: "HMO & Conversion-Ready BRR Sourcing",
  description:
    "Specialist sourcing of high-yield HMOs and conversion-ready BRR deals across Greater London and the South of England — properties with HMO conversion and change-of-use potential (permitted development, non-Article 4). Pre-auction, off-market and direct-to-vendor via a network of compliant agents.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.alalipropertypartners.com/#organization",
    name: "Alali Property Partners",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "AdministrativeArea", name: "South East England" },
    { "@type": "AdministrativeArea", name: "Dorset" },
    { "@type": "AdministrativeArea", name: "Somerset" },
  ],
  serviceType: "HMO Property Sourcing",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an HMO and why source one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An HMO (House in Multiple Occupation) is a property let by the room to multiple unrelated tenants. Because rent is collected per room rather than per property, a well-located HMO typically produces a materially higher gross yield than a standard single let — which is why it is the core strategy we source.",
      },
    },
    {
      "@type": "Question",
      name: "What does conversion-ready BRR mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conversion-ready BRR (Buy, Refurbish, Refinance) describes a property with the potential to be converted into an HMO or to have its use changed — ideally under permitted development in a non-Article 4 area. You buy, refurbish to add value and rooms, refinance to recycle your capital, and rent. We source properties where that conversion potential is realistic, not speculative.",
      },
    },
    {
      "@type": "Question",
      name: "Why does non-Article 4 matter for HMO conversion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In non-Article 4 areas, converting a family home to a small HMO can often be done under permitted development rights without a full planning application. In Article 4 areas that permitted development right is removed, so planning permission is required. We prioritise stock where the planning route is cleaner — but the planning position must always be verified independently for your specific property.",
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
      name: "HMO & BRR Sourcing",
      item: "https://www.alalipropertypartners.com/hmo-sourcing",
    },
  ],
}

const pillars = [
  {
    title: "High-yield HMOs",
    detail:
      "Let by the room for stronger cashflow than a single let. We run the comparables and observed local room rents before a deal ever reaches you — if the numbers don't stack up, we don't send it.",
  },
  {
    title: "Conversion-ready BRR",
    detail:
      "Properties with realistic HMO conversion and change-of-use potential — permitted development, non-Article 4 — so you can refurbish, add rooms, and refinance to recycle your capital into the next deal.",
  },
]

const access = [
  { label: "Pre-auction", detail: "Lots reached before they go under the hammer." },
  { label: "Off-market", detail: "Direct from our private contacts — never advertised." },
  { label: "Direct-to-vendor", detail: "No agent in the chain, motivated sellers." },
  { label: "Compliant agent network", detail: "On-market deals, numbers already verified." },
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
                Our Niche
              </span>
              <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
              HMO &amp; Conversion-Ready BRR
            </p>
            <h1 className="font-display mt-4 text-4xl tracking-tight text-white sm:text-6xl">
              HMO &amp; conversion-ready BRR sourcing
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              We source two things, and we source them well: high-yield HMOs, and the conversion-ready
              properties that become them. Across Greater London and the South East — pre-auction,
              off-market and direct-to-vendor.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-lg bg-gold px-7 py-3.5 text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
              >
                Tell Us What You&apos;re After &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Two pillars */}
        <section className="bg-ink px-4 py-20 sm:px-6 sm:py-28">
          <SectionDivider variant="light" className="mb-16" />
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-center text-3xl text-white sm:text-4xl">
              What we specialise in
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.06] to-transparent p-7"
                >
                  <h3 className="font-display text-2xl tracking-tight text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-light">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Access edge */}
        <section className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28">
          <div className="animated-grid pointer-events-none absolute inset-0" />
          <SectionDivider variant="dark" className="relative mb-16" />
          <div className="relative mx-auto max-w-5xl">
            <h2 className="font-display text-center text-3xl text-white sm:text-4xl">
              The edge is access
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/60">
              Anyone can refresh a portal. The deals that make the numbers work are the ones you never
              see advertised — that&apos;s where we operate.
            </p>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {access.map((a) => (
                <div key={a.label} className="rounded-xl border border-white/10 bg-dark-bg-light/60 p-5">
                  <p className="font-display text-lg text-white">{a.label}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/55">{a.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                See a real sourced deal &rarr;
              </Link>
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-center text-[0.7rem] leading-relaxed text-white/40">
              Yields and conversion potential are indicative and based on publicly available data;
              the planning position and numbers for any specific property require your own independent
              verification. Property deal sourcing is not a regulated activity and nothing here is
              financial, mortgage, tax, or legal advice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
