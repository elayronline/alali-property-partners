import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Pricing } from "@/components/Pricing"
import { Faq } from "@/components/Faq"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "HMO Sourcing Fees & Pricing",
  description:
    "HMO sourcing fees: Portfolio Builder membership £249/mo; The Deal List £5,000 fixed; Bespoke Sourcing £8,000 fixed; Source & Develop by application. VAT inc., no hidden costs.",
  keywords: [
    "property sourcing fees",
    "property sourcing cost UK",
    "deal sourcing pricing",
    "fixed fee property sourcing",
    "property sourcing membership",
    "property investment fees England Wales",
    "property sourcer cost UK",
    "how much does property sourcing cost",
    "property sourcing refund policy",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alali Property Partners — HMO Sourcing, London & the South East" }],
    title: "Pricing | Alali Property Partners",
    description:
      "Portfolio Builder membership £249/mo, The Deal List £5,000, Bespoke Sourcing £8,000, Source & Develop by application. Transparent fixed fees, VAT inc.",
    url: "/pricing",
    type: "article",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Pricing | Alali Property Partners",
    description:
      "Portfolio Builder membership £249/mo, The Deal List £5,000, Bespoke Sourcing £8,000, Source & Develop by application. Transparent fixed fees, VAT inc.",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/pricing#service",
  name: "Property Deal Sourcing Service",
  description:
    "Property deal sourcing for investors across Greater London and the South of England (the South East, Dorset and Somerset). Deals sourced through our network, and bespoke sourcing to investor brief. Every deal includes a full deal pack and a 48-hour decision SLA after release/presentation, with extensions on fair, justified reasoning.",
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
  serviceType: "Property Deal Sourcing",
  offers: [
    {
      "@type": "Offer",
      name: "Portfolio Builder Membership",
      description:
        "Annual membership for active investors — a 12-month commitment, billed £249/month. Includes 48-hour priority access to every new deal before the general list, £850 credit on The Deal List or Bespoke Sourcing per completed deal, one free feasibility report every month, priority access to limited Source & Develop project slots, monthly market intelligence for your target areas, a quarterly portfolio review call, and priority warm introductions to our regulated power team.",
      priceCurrency: "GBP",
      price: "249",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "GBP",
        price: "249",
        unitText: "MON",
        billingDuration: "P1M",
        valueAddedTaxIncluded: true,
      },
      availability: "https://schema.org/InStock",
      areaServed: "GB",
    },
    {
      "@type": "Offer",
      name: "The Deal List",
      description:
        "Browse our pipeline and pick what fits. Live off-market, pre-auction and direct-to-vendor deals with a full deal pack (tenure, comparables, rents) and indicative refurbishment scope. £5,000 fixed fee (VAT inclusive): a £500 refundable deposit (taken after the sourcing agreement is signed) unlocks the full pack and viewing, with the £4,500 balance on completion. Deposit refunded if the deal is already gone or on a genuine no after viewing, and credited against the fee if you proceed.",
      priceCurrency: "GBP",
      price: "5000",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "GBP",
        price: "5000",
        description: "£5,000 fixed fee per deal (VAT inclusive): £500 refundable deposit unlocks the pack and viewing, £4,500 balance on completion.",
        valueAddedTaxIncluded: true,
      },
      availability: "https://schema.org/InStock",
      areaServed: "GB",
    },
    {
      "@type": "Offer",
      name: "Bespoke Sourcing",
      description:
        "Commission your own search, sourced exclusively for you to your exact brief — area, strategy and budget — and not shared with the list. £8,000 fixed fee (VAT inclusive) paid in three stages: £2,667 on signing secures a dedicated 14-day search (refundable if no suitable deal is presented in the window), £2,667 on presentation of a matching deal, and £2,666 on completion.",
      priceCurrency: "GBP",
      price: "8000",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "GBP",
        price: "8000",
        description: "£8,000 fixed fee (VAT inclusive) in three stages: £2,667 on signing, £2,667 on presentation, £2,666 on completion.",
        valueAddedTaxIncluded: true,
      },
      availability: "https://schema.org/InStock",
      areaServed: "GB",
    },
    {
      "@type": "Offer",
      name: "Source & Develop",
      description:
        "From sourcing to finished HMO. We source the property to your brief, then manage the full HMO conversion — design, planning, build and handover — delivered as a finished, tenanted HMO. By application; a limited number of projects per quarter. Fees are quoted per project and staged against project milestones (search, secured, planning, build, handover).",
      availability: "https://schema.org/LimitedAvailability",
      areaServed: "GB",
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does property deal sourcing cost in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alali Property Partners uses fixed fees, all VAT inclusive. The Deal List is a £5,000 fixed fee per deal. Bespoke Sourcing is an £8,000 fixed fee. Source & Develop (full HMO conversion managed end to end) is by application, with fees quoted per project. There is also an optional Portfolio Builder membership at £249 per month on a 12-month commitment, which gives priority access and a £850 credit on the Deal List or Bespoke Sourcing per completed deal. There are no hidden costs.",
      },
    },
    {
      "@type": "Question",
      name: "When do I pay — and how are the fees staged?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Deal List £5,000 fee is staged as a £500 refundable deposit (taken after the sourcing agreement is signed) to unlock the full deal pack and viewing, with the £4,500 balance on completion. Bespoke Sourcing's £8,000 fee is paid in three stages: £2,667 on signing to secure a dedicated 14-day search, £2,667 on presentation of a matching deal, and £2,666 on completion. Source & Develop fees are staged against project milestones — search, secured, planning, build and handover.",
      },
    },
    {
      "@type": "Question",
      name: "Is the deposit or any fee refundable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, subject to terms. On the Deal List, the £500 deposit is refunded if the deal is already gone, or on a genuine decision not to proceed after viewing; if you proceed it is credited against the £5,000 fee. On Bespoke Sourcing, the £2,667 signing payment is refundable if we do not present a suitable deal within the dedicated 14-day search window. Balances are only ever charged once a deal proceeds.",
      },
    },
    {
      "@type": "Question",
      name: "What is Portfolio Builder membership?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Portfolio Builder is an optional annual membership for active investors at £249 per month, on a 12-month commitment (billed monthly). It includes 48-hour priority access to every new deal before the general list, a £850 credit on the Deal List or Bespoke Sourcing per completed deal, one free feasibility report every month, priority access to limited Source & Develop project slots, monthly market intelligence for your target areas, a quarterly portfolio review call, and priority warm introductions to our regulated power team.",
      },
    },
    {
      "@type": "Question",
      name: "Are there ongoing contracts or lock-ins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fixed per-deal fees (the Deal List, Bespoke Sourcing, Source & Develop) involve no ongoing contract or lock-in — you pay per deal. The Portfolio Builder membership is the one exception: it's an annual commitment (a 12-month term, billed monthly). The deal mailing list is free.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge VAT on top of the fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All fees quoted are VAT inclusive — the £5,000 Deal List fee, the £8,000 Bespoke Sourcing fee, the by-application Source & Develop fees, and the £249/month Portfolio Builder membership all already include VAT.",
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.alalipropertypartners.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: "https://www.alalipropertypartners.com/pricing",
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-20">
        {/* Intro band — gives the standalone /pricing page some breathing room */}
        <section className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-24">
          <div className="animated-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">
                Fees
              </span>
              <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
              Transparent &amp; Stage-Based
            </p>
            <h1 className="font-display mt-4 text-4xl tracking-tight text-white sm:text-6xl">
              Property sourcing pricing
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              No hidden costs. Three ways to work with us directly — Portfolio Builder membership,
              bespoke sourcing, and Source &amp; Develop by application — or join the deal list free to
              see deals as they land.
            </p>
          </div>
        </section>
        <Pricing />
        <Faq items={faqSchema.mainEntity} heading="Property sourcing fees — FAQs" />
      </main>
      <Footer />
    </>
  )
}
