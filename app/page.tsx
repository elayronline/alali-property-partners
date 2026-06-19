import type { Metadata } from "next"
import { HomePage } from "@/components/HomePage"

export const metadata: Metadata = {
  title: {
    absolute: "Property Sourcing London & South East | Alali Property Partners",
  },
  description:
    "High-yield HMO & conversion-ready BRR deal sourcing across London & the South East — pre-auction, off-market and direct-to-vendor. Join the deal list.",
  keywords: [
    "HMO deal sourcing",
    "HMO property sourcing",
    "high yield HMO deals",
    "HMO conversion property",
    "BRR property sourcing",
    "buy refurbish refinance deals",
    "conversion-ready property",
    "change of use property",
    "permitted development HMO",
    "non Article 4 HMO areas",
    "pre-auction property deals",
    "off-market property deals",
    "direct to vendor property",
    "below market value property",
    "property sourcing London",
    "HMO sourcing London",
    "property sourcing South East",
    "property sourcing Kent",
    "property sourcing Surrey",
    "property sourcing Hampshire",
    "property sourcing Sussex",
    "property sourcing Berkshire",
    "property sourcing Oxfordshire",
    "property sourcing Buckinghamshire",
    "property sourcing Dorset",
    "property sourcing Somerset",
    "HMO sourcing for investors",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alali Property Partners | HMO & Conversion-Ready BRR Deal Sourcing",
    description:
      "Specialist sourcing of high-yield HMOs and conversion-ready BRR deals for investors across Greater London and the South East — pre-auction, off-market and direct-to-vendor, with HMO conversion and change-of-use potential.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alali Property Partners | HMO & Conversion-Ready BRR Deal Sourcing",
    description:
      "High-yield HMOs and conversion-ready BRR deals across Greater London and the South East. Pre-auction, off-market and direct-to-vendor.",
  },
}

// Service schema for deal sourcing packages (home page)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/#sourcing-service",
  name: "HMO & Conversion-Ready BRR Deal Sourcing",
  description:
    "We source high-yield HMOs and conversion-ready BRR deals for investors across Greater London and the South East — properties with HMO conversion and change-of-use potential (under permitted development or full planning). Pre-auction, off-market and direct-to-vendor via a network of compliant agents, and bespoke sourcing to your brief — all with complete deal packs.",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Deal Sourcing Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "The Deal List",
        description:
          "Verified HMO and conversion-ready BRR deals sourced pre-auction, off-market and direct-to-vendor via our network of compliant agents. 2.4% sourcing fee of purchase price (min £3,600, VAT inc.). £500 paid upfront on signed sourcing agreement to release the deal pack; balance settled once the investor decides to proceed. We facilitate viewings and introductions on the investor's behalf. 48-hour decision SLA from deal-pack release, with extensions on fair, justified reasoning. £500 refundable where there are valid reasons not to proceed (subject to terms).",
        priceCurrency: "GBP",
        price: "500",
      },
      {
        "@type": "Offer",
        name: "Bespoke Sourcing",
        description:
          "We go to market and source HMO and conversion-ready BRR deals tailored to the investor's exact criteria. £1,000 upfront retainer covers our 14-day bespoke search effort. 2.4% sourcing fee (min £3,600, VAT inc.) charged additionally on completion — the retainer is not credited against the sourcing fee. 14-day sourcing window.",
        priceCurrency: "GBP",
        price: "1000",
      },
      {
        "@type": "Offer",
        name: "Source & Develop",
        description:
          "Our complete service: we source the property to your brief, then manage the full HMO conversion — design, planning, build and handover, end to end. A selective service offered by application; we take on a limited number of projects per quarter. Price on application.",
        availability: "https://schema.org/LimitedAvailability",
      },
    ],
  },
}

// FAQ schema (home page)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "h3"],
  },
  mainEntity: [
    {
      "@type": "Question",
      name: "What is property deal sourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Property deal sourcing is a service where we find and introduce verified, high-yield property investment opportunities to investors. We handle the research and analysis, delivering complete deal packs with comparables, yield analysis, and exit strategies.",
      },
    },
    {
      "@type": "Question",
      name: "What types of property deals do you source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialise in high-yield HMOs (Houses in Multiple Occupation) and conversion-ready BRR (Buy, Refurbish, Refinance) deals — properties with HMO conversion and change-of-use potential (under permitted development or full planning) — across Greater London and the South East. We source pre-auction, off-market and direct-to-vendor via a network of compliant agents, and take bespoke briefs on request.",
      },
    },
    {
      "@type": "Question",
      name: "How much does property deal sourcing cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sourced investment purchases (off-market or on-market) are 2.4% of purchase price (minimum £3,600, VAT inclusive). You sign a sourcing agreement and pay £500 upfront to release the deal pack; the balance is settled once you decide to proceed. The £500 is refundable where there are valid reasons not to proceed, subject to terms. Bespoke sourcing requires a £1,000 retainer plus 2.4% sourcing fee on completion. All fees are VAT inclusive with no hidden costs.",
      },
    },
    {
      "@type": "Question",
      name: "How does bespoke sourcing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You pay a £1,000 retainer upfront. The retainer covers our 14-day bespoke search effort. We then have 14 days to find and present a deal that matches your brief. If we don't present a suitable deal within that period, your retainer is refundable (subject to terms). Once a deal is presented, you have a 48-hour decision SLA — if you decide not to proceed and there are valid reasons, the £1,000 is also refundable (subject to terms). If you go ahead, the 2.4% sourcing fee (min £3,600, VAT inc.) is charged additionally — the £1,000 retainer is not credited against the sourcing fee.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover for property deal sourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover Greater London and the South of England — Surrey, Kent, East and West Sussex, Hampshire, Berkshire, Oxfordshire, Buckinghamshire, Dorset, and Somerset. We source off-market deals through our private contacts and on-market deals through our compliant agent network — or tell us what you're looking for and we'll source to your brief.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a deal pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every deal pack includes the full property address and tenure, photos provided by the vendor or agent, asking or agreed purchase price, Land Registry comparable evidence (informational, from public records), observed local market rents, indicative gross yield (not a return projection), indicative refurbishment scope where applicable, indicative resale comparables (not a valuation), a local area summary, and strategy options to consider. Vendor and agent contact details are held by us — we facilitate viewings and introductions on your behalf. Deal packs are informational only and do not constitute financial, mortgage, tax, or legal advice. Deal packs are delivered directly to you once the sourcing agreement is signed and the £500 unlock fee is paid.",
      },
    },
  ],
}

export default function Home() {
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
      <HomePage faqItems={faqSchema.mainEntity} />
    </>
  )
}
