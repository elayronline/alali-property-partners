import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { CaseStudy } from "@/components/CaseStudy"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Case Studies — HMO & BRR Deals We've Sourced",
  description:
    "Real HMO and conversion-ready BRR deals sourced across Greater London & the South East. One example: a 4-bed Hampshire property sourced pre-auction in under 14 days, 10% under budget, converting to a 6-bed HMO under permitted development.",
  keywords: [
    "HMO sourcing case study",
    "BRR deal example",
    "pre-auction HMO conversion",
    "permitted development HMO case study",
    "property sourcing results UK",
    "HMO deal under market value",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | Alali Property Partners",
    description:
      "Real HMO and conversion-ready BRR deals we've sourced across Greater London & the South East. Every brief is different — here's one example.",
    url: "/case-studies",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Alali Property Partners",
    description:
      "Real HMO and conversion-ready BRR deals we've sourced across Greater London & the South East.",
    images: ["/opengraph-image"],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.alalipropertypartners.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Case Studies",
      item: "https://www.alalipropertypartners.com/case-studies",
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-glow relative overflow-hidden bg-dark-bg px-4 pt-16 pb-4 sm:px-6 sm:pt-20">
          <div className="animated-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">
                Proof
              </span>
              <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
              Real Deals
            </p>
            <h1 className="font-display mt-4 text-4xl tracking-tight text-white sm:text-6xl">
              Case studies
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              Every brief is different and sourced to your numbers. Here is one example of the kind
              of HMO and conversion-ready BRR deal we source — verified, off-market, and built to a
              client&apos;s strategy.
            </p>
          </div>
        </section>

        {/* The Hampshire deal — reuses the homepage case study */}
        <CaseStudy />

        {/* CTA */}
        <section className="bg-dark-bg px-4 pb-24 sm:px-6">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold/15 bg-dark-bg-light/60 px-6 py-8 text-center">
            <p className="font-display text-2xl text-white">Want a deal sourced to your numbers?</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/60">
              Tell us what you&apos;re after — or that you&apos;re not sure yet — and we&apos;ll shape
              the brief with you.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-gold px-7 py-3.5 text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
            >
              Tell Us What You&apos;re After &rarr;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
