import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Faq } from "@/components/Faq"
import { SectionDivider } from "@/components/ui/SectionDivider"

export const metadata: Metadata = {
  title: "BRR & Below-Market-Value Sourcing",
  description:
    "BRR (buy, refurbish, refinance) and below-market-value property sourcing across London & the South East — pre-auction, off-market and direct-to-vendor, with realistic add-value potential. Tell us your brief.",
  keywords: [
    "BRR property sourcing",
    "buy refurbish refinance deals",
    "below market value property sourcing",
    "BMV property deals",
    "below market value property UK",
    "BRR deal sourcing London",
    "BRR sourcing South East",
    "refurbishment property deals",
    "add value property sourcing",
  ],
  alternates: { canonical: "/brr-sourcing" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alali Property Partners — HMO & BRR Sourcing, London & the South East" }],
    title: "BRR & Below-Market-Value Sourcing | Alali Property Partners",
    description:
      "Buy, refurbish, refinance and below-market-value deals across London & the South East — pre-auction, off-market and direct-to-vendor.",
    url: "/brr-sourcing",
    type: "article",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "BRR & Below-Market-Value Sourcing | Alali Property Partners",
    description:
      "Buy, refurbish, refinance and below-market-value deals across London & the South East.",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/brr-sourcing#service",
  name: "BRR & Below-Market-Value Property Sourcing",
  description:
    "Sourcing of BRR (buy, refurbish, refinance) and below-market-value property deals across Greater London and the South of England — pre-auction, off-market and direct-to-vendor via a network of compliant agents — with realistic potential to add value and recycle capital.",
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
  serviceType: "BRR Property Sourcing",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is BRR (buy, refurbish, refinance) property sourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BRR stands for Buy, Refurbish, Refinance. You buy a property below its post-works value, refurbish it to add value (and often add rooms or change its use), then refinance against the higher value to recycle most of your capital back out — leaving a cash-flowing asset behind. BRR sourcing is the service of finding properties where that uplift is realistic rather than speculative: we run the comparables, observed local rents, and indicative refurb scope before a deal reaches you.",
      },
    },
    {
      "@type": "Question",
      name: "What does below market value (BMV) actually mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Below market value means an agreed purchase price beneath the property's realistic open-market value — usually because the seller is motivated (speed, probate, portfolio exit, a chain break) or because the deal is sourced off-market rather than through open competition. We evidence value with Land Registry comparables from public records; any BMV margin is indicative and must be confirmed by your own valuation and survey. We do not promise a fixed discount.",
      },
    },
    {
      "@type": "Question",
      name: "How do you find below-market-value and BRR deals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through access, not portals. We work pre-auction (lots reached before they go under the hammer), off-market (sourced direct from our private contacts), and direct-to-vendor (no agent in the chain, motivated sellers), alongside a compliant agent network for on-market deals where the numbers already stack up. The deals that make BRR work are usually the ones sourced before they reach the open market.",
      },
    },
    {
      "@type": "Question",
      name: "Can a BRR deal also be converted into an HMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, yes — and that is our core niche. Many of the conversion-ready BRR properties we source can be refurbished and converted into a high-yield HMO, whether under permitted development or via a full planning application. That combines the capital recycling of BRR with the stronger gross yield of an HMO. The planning route always needs to be verified independently for your specific property. See our HMO sourcing page for the conversion side.",
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
      name: "BRR & BMV Sourcing",
      item: "https://www.alalipropertypartners.com/brr-sourcing",
    },
  ],
}

const stages = [
  { label: "Buy", detail: "We source below market value — pre-auction, off-market and direct-to-vendor — with the comparables run before a deal reaches you." },
  { label: "Refurbish", detail: "Add value and, where it stacks, add rooms or change use. We can manage the full conversion end to end if you'd rather not." },
  { label: "Refinance", detail: "Refinance against the higher post-works value to recycle most of your capital back out for the next deal." },
  { label: "Rent", detail: "A cash-flowing asset left behind — strongest when the property works as a high-yield HMO." },
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
                Strategy
              </span>
              <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
              Buy · Refurbish · Refinance
            </p>
            <h1 className="font-display mt-4 text-4xl tracking-tight text-white sm:text-6xl">
              BRR &amp; below-market-value property sourcing
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              Buy below market value, refurbish to add value, refinance to recycle your capital. We
              source BRR and BMV deals across Greater London and the South East — pre-auction,
              off-market and direct-to-vendor — where the uplift is realistic, not wishful.
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

        {/* The BRR cycle */}
        <section className="bg-ink px-4 py-20 sm:px-6 sm:py-28">
          <SectionDivider variant="light" className="mb-16" />
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-center text-3xl text-white sm:text-4xl">
              How the BRR cycle works
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/60">
              The whole point of buy, refurbish, refinance is to get your money back out and do it
              again. It only works if you buy right — which is the part we handle.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stages.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.06] to-transparent p-6"
                >
                  <h3 className="font-display text-2xl tracking-tight text-white">{s.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-light">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why buying right matters */}
        <section className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28">
          <div className="animated-grid pointer-events-none absolute inset-0" />
          <SectionDivider variant="dark" className="relative mb-16" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Below market value is found through access, not portals
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              A genuine BMV deal usually comes from a motivated seller or an off-market introduction —
              not a portal listing with ten other buyers on it. We evidence value with Land Registry
              comparables and observed local rents, and only send a deal when the numbers stand up.
              If the refurb and refinance don&apos;t leave you in a strong position, we don&apos;t send it.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/hmo-sourcing"
                className="text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                See HMO conversion sourcing &rarr;
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                See our sourcing fees &rarr;
              </Link>
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-[0.7rem] leading-relaxed text-white/40">
              Values, below-market-value margins, refurbishment scopes and yields are indicative and
              based on publicly available data; the numbers and planning position for any specific
              property require your own independent valuation, survey and verification. Property deal
              sourcing is not a regulated activity and nothing here is financial, mortgage, tax, or
              legal advice.
            </p>
          </div>
        </section>

        <Faq items={faqSchema.mainEntity} heading="BRR &amp; below-market-value sourcing — FAQs" />
      </main>
      <Footer />
    </>
  )
}
