import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Faq } from "@/components/Faq"
import { SectionDivider } from "@/components/ui/SectionDivider"

export const metadata: Metadata = {
  title: "Property Sourcing Agent — South East England",
  description:
    "Property sourcing across the South East — Surrey, Kent, Sussex, Hampshire, Berkshire, Oxfordshire, Buckinghamshire, Dorset & Somerset. High-yield HMO & BRR deals sourced through our network — including off-market and direct-to-vendor.",
  keywords: [
    "property sourcing agent South East",
    "property sourcing South East England",
    "HMO sourcing South East",
    "property sourcing Surrey",
    "property sourcing Kent",
    "property sourcing Sussex",
    "property sourcing Hampshire",
    "property sourcing Berkshire",
    "property sourcing Oxfordshire",
    "property sourcing Buckinghamshire",
  ],
  alternates: { canonical: "/property-sourcing-south-east" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alali Property Partners — HMO & BRR Sourcing, London & the South East" }],
    title: "Property Sourcing — South East England | Alali Property Partners",
    description:
      "High-yield HMO & BRR deal sourcing across the South East — Surrey, Kent, Sussex, Hampshire, Berkshire and beyond. Sourced through our network — including off-market and direct-to-vendor.",
    url: "/property-sourcing-south-east",
    type: "article",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Property Sourcing — South East England | Alali Property Partners",
    description:
      "High-yield HMO & BRR deal sourcing across the South East, sourced through our network — including off-market and direct-to-vendor.",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/property-sourcing-south-east#service",
  name: "Property Sourcing — South East England",
  description:
    "Property deal sourcing across the South East of England — Surrey, Kent, East and West Sussex, Hampshire, Berkshire, Oxfordshire, Buckinghamshire, Dorset and Somerset — specialising in high-yield HMOs and conversion-ready BRR deals, sourced through our network — including pre-auction, off-market and direct-to-vendor.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.alalipropertypartners.com/#organization",
    name: "Alali Property Partners",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "South East England" },
    { "@type": "AdministrativeArea", name: "Surrey" },
    { "@type": "AdministrativeArea", name: "Kent" },
    { "@type": "AdministrativeArea", name: "East Sussex" },
    { "@type": "AdministrativeArea", name: "West Sussex" },
    { "@type": "AdministrativeArea", name: "Hampshire" },
    { "@type": "AdministrativeArea", name: "Berkshire" },
    { "@type": "AdministrativeArea", name: "Oxfordshire" },
    { "@type": "AdministrativeArea", name: "Buckinghamshire" },
    { "@type": "AdministrativeArea", name: "Dorset" },
    { "@type": "AdministrativeArea", name: "Somerset" },
  ],
  serviceType: "Property Deal Sourcing",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which areas of the South East do you cover for property sourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We source across Greater London and the South of England — Surrey, Kent, East and West Sussex, Hampshire, Berkshire, Oxfordshire, Buckinghamshire, and out to Dorset and Somerset. Rather than chase every postcode, we focus on towns and commuter belts where HMO demand and conversion-ready stock genuinely stack up. Tell us your target areas and we'll be straight about where we have live coverage.",
      },
    },
    {
      "@type": "Question",
      name: "Why source property in the South East rather than only London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many South East commuter towns offer stronger gross yields and more conversion-ready stock than central London, while keeping the tenant demand that comes with good transport links and employment. For HMO and BRR strategies in particular, the numbers often work better just outside London — which is why our coverage spans the whole region, not just the capital.",
      },
    },
    {
      "@type": "Question",
      name: "Can you source to a specific town, postcode, or commuter line?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With bespoke sourcing we go to market against your exact brief — specific towns, postcodes, commuter lines, budget, strategy and target returns. If we don't already have a deal that fits, we source one. If we don't have realistic coverage in an area you want, we'll tell you upfront rather than waste your time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle Article 4 and planning differences across South East councils?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we source HMO stock across both. In non-Article 4 areas a small HMO conversion can often proceed under permitted development; in Article 4 areas a full planning application is required, and we source those too. Article 4 directions and HMO licensing rules vary council by council across the South East, so the planning position for any specific property must always be verified independently before you commit.",
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
      name: "Property Sourcing — South East",
      item: "https://www.alalipropertypartners.com/property-sourcing-south-east",
    },
  ],
}

const counties = [
  { name: "Surrey", detail: "Commuter-belt demand with strong tenant pools near fast links into London." },
  { name: "Kent", detail: "The Medway towns and beyond — value stock with realistic HMO conversion potential." },
  { name: "Sussex", detail: "East and West Sussex — coastal and town-centre lettings demand." },
  { name: "Hampshire", detail: "Employment and university towns that underpin room-by-room demand." },
  { name: "Berkshire", detail: "High-earning commuter corridors along the western approaches." },
  { name: "Oxfordshire", detail: "University and tech employment supporting professional sharers." },
  { name: "Buckinghamshire", detail: "Fast rail links and strong commuter-town fundamentals." },
  { name: "Dorset & Somerset", detail: "Selective coverage out to the South West where the numbers justify it." },
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
                Coverage
              </span>
              <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
              London &amp; the South East
            </p>
            <h1 className="font-display mt-4 text-4xl tracking-tight text-white sm:text-6xl">
              Property sourcing across the South East
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              A specialist property sourcing agent for the South East of England — high-yield HMOs and
              conversion-ready BRR deals from Surrey and Kent to Hampshire, Berkshire and beyond.
              Sourced through our network — including pre-auction, off-market and direct-to-vendor.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-lg bg-gold px-7 py-3.5 text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
              >
                Tell Us Your Target Area &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Counties */}
        <section className="bg-ink px-4 py-20 sm:px-6 sm:py-28">
          <SectionDivider variant="light" className="mb-16" />
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-center text-3xl text-white sm:text-4xl">
              Counties we cover
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/60">
              We focus on the towns and commuter belts where HMO demand and conversion-ready stock
              genuinely stack up — not every postcode for the sake of it.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {counties.map((c) => (
                <div key={c.name} className="rounded-xl border border-white/10 bg-dark-bg-light/60 p-5">
                  <p className="font-display text-lg text-white">{c.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/55">{c.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                See a real sourced deal in the region &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* What we source here */}
        <section className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28">
          <div className="animated-grid pointer-events-none absolute inset-0" />
          <SectionDivider variant="dark" className="relative mb-16" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              What we source in the South East
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Two things, sourced well: high-yield HMOs, and the conversion-ready BRR properties that
              become them. The South East&apos;s commuter towns often deliver stronger yields and more
              conversion-ready stock than central London, with the tenant demand that comes from good
              transport and employment.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/hmo-sourcing"
                className="text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                HMO sourcing &rarr;
              </Link>
              <Link
                href="/brr-sourcing"
                className="text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                BRR &amp; below-market-value sourcing &rarr;
              </Link>
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-[0.7rem] leading-relaxed text-white/40">
              Yields and conversion potential are indicative and based on publicly available data;
              Article 4, HMO licensing and the numbers for any specific property require your own
              independent verification. Property deal sourcing is not a regulated activity and nothing
              here is financial, mortgage, tax, or legal advice.
            </p>
          </div>
        </section>

        <Faq items={faqSchema.mainEntity} heading="Sourcing in the South East — FAQs" />
      </main>
      <Footer />
    </>
  )
}
