import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Faq } from "@/components/Faq"
import { SectionDivider } from "@/components/ui/SectionDivider"

export const metadata: Metadata = {
  title: "Managed HMO Conversion, End to End",
  description:
    "We source the property to your brief, then manage the full HMO conversion — design, planning, build and handover, end to end. London & the South East. By application.",
  keywords: [
    "HMO development management",
    "managed HMO conversion",
    "HMO conversion project management",
    "HMO refurbishment management",
    "permitted development HMO conversion",
    "HMO build management London",
    "property development management South East",
  ],
  alternates: { canonical: "/development-management" },
  openGraph: {
    title: "Source & Develop | Alali Property Partners",
    description:
      "Sourced to your brief, then converted — design, planning, build and handover, end to end. By application, selective.",
    url: "/development-management",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Source & Develop | Alali Property Partners",
    description:
      "Sourced to your brief, then converted — design, planning, build and handover, end to end. By application, selective.",
    images: ["/opengraph-image"],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/development-management#service",
  name: "HMO Development Management",
  description:
    "We source the property to your brief, then project-manage the full HMO conversion — design, planning, build and handover, end to end — across Greater London and the South of England. A selective service offered by application; we take on a limited number of projects per quarter. Price on application.",
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
  serviceType: "HMO Development Management",
  offers: {
    "@type": "Offer",
    name: "Source & Develop",
    description:
      "Our complete service: we source the property to your brief, then manage the full HMO conversion — design, planning, build and handover, end to end. A selective service offered by application; we take on a limited number of projects per quarter. Price on application.",
    availability: "https://schema.org/LimitedAvailability",
    areaServed: "GB",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is HMO development management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development management is our complete, end-to-end service. We source the property to your brief, then project-manage the full conversion into a high-yield HMO — design, planning, build, and handover — so the investor does not have to find the deal or coordinate architects, contractors, and lettings themselves. It is delivered alongside the FCA-regulated brokers, qualified solicitors, and vetted contractors we introduce.",
      },
    },
    {
      "@type": "Question",
      name: "How much does development management cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development management is priced by application. Every conversion is different — scope, planning route, and build cost vary by property — so we quote on the specifics of your project rather than publishing a fixed price. We take on a limited number of projects per quarter.",
      },
    },
    {
      "@type": "Question",
      name: "Is development management available now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It is a live, selective service offered by application. Because each project is hands-on, we take on a limited number per quarter to keep delivery standards high. Apply or enquire and we will tell you upfront whether we have capacity for your project.",
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
      name: "Source & Develop",
      item: "https://www.alalipropertypartners.com/development-management",
    },
  ],
}

const stages = [
  {
    step: "01",
    title: "Source to your brief",
    detail:
      "We find and verify a property that fits your strategy, budget and target returns — pre-auction, off-market or direct-to-vendor.",
  },
  {
    step: "02",
    title: "Design & feasibility",
    detail:
      "We assess the conversion potential — layout, room count, HMO standards, and the planning route (permitted development or full application, non-Article 4).",
  },
  {
    step: "03",
    title: "Planning & compliance",
    detail:
      "Drawings, applications, building control, and HMO licensing handled by the right professionals, coordinated by us.",
  },
  {
    step: "04",
    title: "Build & project management",
    detail:
      "Vetted contractors deliver the works to programme and budget. We manage the schedule, quality, and reporting so you don't have to.",
  },
  {
    step: "05",
    title: "Handover",
    detail:
      "A finished, compliant, tenant-ready HMO — handed back to you, with introductions to lettings where you want them.",
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
                Premium
              </span>
              <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
              By Application
            </p>
            <h1 className="font-display mt-4 text-4xl tracking-tight text-white sm:text-6xl">
              Source &amp; Develop
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              The complete service: we source the property to your brief, then manage the full HMO
              conversion — design, planning, build and handover, end to end. For investors who want
              the finished asset without sourcing or running the build themselves.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact?enquiry=Source%20%26%20Develop"
                className="rounded-lg bg-gold px-7 py-3.5 text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
              >
                Apply / Enquire &rarr;
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                See how sourcing works &rarr;
              </Link>
            </div>
            <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-white/40">
              Selective — we take on a limited number of projects per quarter. Price on application;
              every conversion is quoted on its specifics.
            </p>
          </div>
        </section>

        {/* Stages */}
        <section className="bg-warm-grey px-4 py-20 sm:px-6 sm:py-28">
          <SectionDivider variant="dark" className="mb-16" />
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-center text-3xl text-white sm:text-4xl">
              From brief to finished HMO
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-light">
              From sourcing the right property to handing back a finished HMO — every stage delivered
              by the right professionals and coordinated by us.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {stages.map((s) => (
                <div key={s.step} className="rounded-2xl border border-gold/15 bg-ink-raised p-6 shadow-sm">
                  <span className="font-display text-3xl text-gold/30">{s.step}</span>
                  <h3 className="font-display mt-2 text-xl tracking-tight text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-light">{s.detail}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-light/85">
              Development management is a sourcing and project-management service. Regulated work (mortgage, legal,
              structural) is delivered by the independent FCA-regulated brokers, qualified solicitors,
              and other appropriately authorised professionals we introduce. Nothing here is financial,
              tax, or legal advice.
            </p>
          </div>
        </section>

        <Faq items={faqSchema.mainEntity} heading="Development management — FAQs" />
      </main>
      <Footer />
    </>
  )
}
