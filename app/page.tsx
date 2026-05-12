import type { Metadata } from "next"
import { HomePage } from "@/components/HomePage"

export const metadata: Metadata = {
  title: {
    absolute: "Alali Property Partners | Property Deal Sourcing — London & South East",
  },
  description:
    "Verified property deals across London & the South East — off-market via private contacts and on-market via our compliant agent network. Transparent fees.",
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
    "property sourcing London",
    "property sourcing South East",
    "property sourcing Kent",
    "property sourcing Surrey",
    "property sourcing Hampshire",
    "property sourcing Sussex",
    "property sourcing Berkshire",
    "property sourcing Oxford",
    "property sourcing for investors",
    "off-market property deals",
    "off-market property London",
    "on-market property deals",
    "property deal packager",
    "investment property sourcing",
    "buy to let sourcing agent London",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alali Property Partners | Property Deal Sourcing",
    description:
      "Verified property deals for investors across Greater London & the South East — off-market via private contacts and on-market via our compliant agent network. BTL, BRR, R2R, HMO, flips, and bespoke sourcing to your brief.",
    url: "/",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alali Property Partners | Property Deal Sourcing",
    description:
      "Verified property deals for investors across Greater London & the South East. Off-market through private contacts, on-market through our compliant agent network, and bespoke sourcing.",
    images: ["/opengraph-image"],
  },
}

// Service schema for deal sourcing packages (home page)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/#sourcing-service",
  name: "Property Deal Sourcing",
  description:
    "We source verified, high-yield property deals for investors across Greater London and the South East of England. Off-market through private contacts, on-market through our compliant agent network, and bespoke sourcing — all with complete deal packs.",
  provider: {
    "@type": "Organization",
    name: "Alali Property Partners",
    url: "https://www.alalipropertypartners.com",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "AdministrativeArea", name: "South East England" },
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
          "Verified property deals sourced through our private contacts (off-market) and our compliant agent network (on-market). 2.4% sourcing fee of purchase price (min £3,600, VAT inc.). £500 paid upfront on signed sourcing agreement to release the deal pack; balance settled once the investor decides to proceed. We facilitate viewings and introductions on the investor's behalf. 48-hour decision SLA from deal-pack release, with extensions on fair, justified reasoning. £500 refundable where there are valid reasons not to proceed (subject to terms).",
        priceCurrency: "GBP",
        price: "500",
      },
      {
        "@type": "Offer",
        name: "Bespoke Sourcing",
        description:
          "We go to market and source deals tailored to the investor's exact criteria. £1,000 upfront retainer, then 2.4% sourcing fee (min £3,600, VAT inc.) on completion. Retainer deducted from final fee. 14-day sourcing window.",
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
        text: "Property deal sourcing is a service where we find and introduce verified, high-yield property investment opportunities to investors. We handle the research, analysis, and negotiation, delivering complete deal packs with comparables, yield analysis, and exit strategies.",
      },
    },
    {
      "@type": "Question",
      name: "What types of property deals do you source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We source Buy-to-Let (BTL), BRR (Buy Refurb Refinance), Rent-to-Rent (R2R), HMO (Houses in Multiple Occupation), flips, commercial conversions, and serviced accommodation deals across Greater London and the South East of England.",
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
        text: "You pay a £1,000 retainer upfront. We then have 14 days to find and present a deal that matches your brief. If we don't present a suitable deal within that period, your retainer is refundable (subject to terms). Once a deal is presented, you have a 48-hour decision SLA — if you decide not to proceed and there are valid reasons, the £1,000 is also refundable (subject to terms). If you go ahead, the £1,000 comes off the final sourcing fee of 2.4% of purchase price (min £3,600, VAT inc.).",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover for property deal sourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover Greater London and the South East of England (Surrey, Kent, East and West Sussex, Hampshire, Berkshire, Oxfordshire, Buckinghamshire, and the Isle of Wight). We source off-market deals through our private contacts and on-market deals through our compliant agent network — or tell us what you're looking for and we'll source to your brief.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a deal pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every deal pack includes the full property address and tenure, photos provided by the vendor or agent, asking or agreed purchase price, Land Registry comparable evidence (informational, from public records), observed local market rents, indicative gross yield (not a return projection), indicative refurbishment scope where applicable, indicative resale comparables (not a valuation), a local area summary, and strategy options to consider. Vendor and agent contact details are held by us — we facilitate viewings and introductions on your behalf. Deal packs are informational only and do not constitute financial, mortgage, tax, or legal advice. Deal packs are delivered directly to your WhatsApp once the sourcing agreement is signed and the £500 unlock fee is paid.",
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
