import type { Metadata } from "next"
import { HomePage } from "@/components/HomePage"

export const metadata: Metadata = {
  title: {
    absolute: "Alali Property Partners | Property Deal Sourcing — England & Wales",
  },
  description:
    "We find and introduce verified, high-yield property deals for investors across England & Wales — off-market through our private contacts and on-market through our compliant agent network. BTL, BRR, R2R, HMO, flips, and bespoke sourcing to your exact brief. Working alongside regulated professionals. Transparent fees. Complete deal packs.",
  keywords: [
    "property deal sourcing",
    "property sourcing agent",
    "property sourcing company UK",
    "deal sourcing service",
    "below market value property",
    "BTL deals",
    "BRR property",
    "rent to rent deals",
    "HMO investment",
    "property investment UK",
    "deal sourcing London",
    "deal sourcing Manchester",
    "deal sourcing Birmingham",
    "property sourcing for investors",
    "off-market property deals",
    "off-market property UK",
    "on-market property deals",
    "property deal packager",
    "investment property sourcing",
    "buy to let sourcing agent",
    "property deals England",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alali Property Partners | Property Deal Sourcing",
    description:
      "Verified property deals for investors across England & Wales — off-market via private contacts and on-market via our compliant agent network. BTL, BRR, R2R, HMO, flips, and bespoke sourcing to your brief.",
    url: "/",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alali Property Partners | Property Deal Sourcing",
    description:
      "Verified property deals for investors across England & Wales. Off-market through private contacts, on-market through our compliant agent network, and bespoke sourcing.",
    images: ["/opengraph-image"],
  },
}

// Service schema for deal sourcing packages (home page)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Property Deal Sourcing",
  description:
    "We source verified, high-yield property deals for investors across England & Wales. Off-market through private contacts, on-market through our compliant agent network, and bespoke sourcing — all with complete deal packs.",
  provider: {
    "@type": "Organization",
    name: "Alali Property Partners",
    url: "https://www.alalipropertypartners.com",
  },
  areaServed: [
    { "@type": "Country", name: "England" },
    { "@type": "Country", name: "Wales" },
  ],
  serviceType: "Property Deal Sourcing",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Deal Sourcing Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Sourced Deals",
        description:
          "Verified property deals sourced through our private contacts (off-market) and compliant agent network (on-market). Full deal pack and introduction to agent/vendor. 2.4% sourcing fee (min £3,600, VAT inc.) paid upfront. 14-day due diligence period.",
        priceCurrency: "GBP",
        price: "3600",
      },
      {
        "@type": "Offer",
        name: "Bespoke Sourcing",
        description:
          "We go to market and source deals tailored to your exact investment criteria. £1,000 upfront retainer, then 2.4% sourcing fee (min £3,600, VAT inc.) on completion. Retainer deducted from final fee. 14-day sourcing window.",
        priceCurrency: "GBP",
        price: "1000",
      },
    ],
  },
}

// FAQ schema (home page)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is property deal sourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Property deal sourcing is a service where we find and introduce verified, high-yield property investment opportunities to investors. We handle the research, analysis, and negotiation, delivering complete deal packs with comparables, yield analysis, and exit strategies.",
      },
    },
    {
      "@type": "Question",
      name: "What types of property deals do you source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We source Buy-to-Let (BTL), BRR (Buy Refurb Refinance), Rent-to-Rent (R2R), HMO (Houses in Multiple Occupation), flips, commercial conversions, and serviced accommodation deals across England & Wales.",
      },
    },
    {
      "@type": "Question",
      name: "How much does property deal sourcing cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sourced investment purchases (off-market or on-market) are 2.4% of purchase price (min £3,600), payable upfront on instruction. Rent-to-Rent deals start from £3,600. Bespoke sourcing requires a £1,000 retainer plus an agreed fee on completion. All fees are VAT inclusive with no hidden costs.",
      },
    },
    {
      "@type": "Question",
      name: "How does bespoke sourcing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You pay a £1,000 retainer upfront. We then have 14 days to source a deal that matches your brief. If we don't deliver within that period, your retainer is refundable (subject to terms). If you go ahead, the £1,000 comes off the final sourcing fee of 2.4% of purchase price (min £3,600, VAT inc.).",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover for property deal sourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover the whole of England & Wales. We source off-market deals through our private contacts and on-market deals through our compliant agent network — or tell us what you're looking for and we'll source to your brief.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a deal pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every deal pack includes full property details, comparable sales data, yield analysis, projected returns, exit strategy, and all relevant due diligence information. Deal packs are delivered directly to your WhatsApp.",
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
      <HomePage />
    </>
  )
}
