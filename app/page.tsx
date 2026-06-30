import type { Metadata } from "next"
import { HomePage } from "@/components/HomePage"

export const metadata: Metadata = {
  title: {
    absolute: "Property Sourcing London & South East | Alali Property Partners",
  },
  description:
    "High-yield HMO deal sourcing across London & the South East, sourced through our network — including pre-auction, off-market and direct-to-vendor. Join the deal list.",
  keywords: [
    "HMO deal sourcing",
    "HMO property sourcing",
    "high yield HMO deals",
    "HMO conversion property",
    "HMO investment property",
    "conversion-ready property",
    "change of use property",
    "permitted development HMO",
    "non Article 4 HMO areas",
    "pre-auction property deals",
    "off-market property deals",
    "direct to vendor property",
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
    title: "Alali Property Partners | Specialist HMO Deal Sourcing",
    description:
      "Specialist sourcing of high-yield HMOs and HMO conversion opportunities for investors across Greater London and the South East, sourced through our network — including pre-auction, off-market and direct-to-vendor.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alali Property Partners | Specialist HMO Deal Sourcing",
    description:
      "High-yield HMOs across Greater London and the South East. Sourced through our network — including pre-auction, off-market and direct-to-vendor.",
  },
}

// Service schema for deal sourcing packages (home page)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/#sourcing-service",
  name: "HMO Deal Sourcing",
  description:
    "We source and introduce high-yield HMOs and HMO conversion opportunities for investors across Greater London and the South East — including properties with HMO conversion and change-of-use potential (under permitted development or full planning). Sourced through our network — including pre-auction, off-market and direct-to-vendor — and bespoke sourcing to your brief, all with complete deal packs.",
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
        name: "Portfolio Builder Membership",
        description:
          "Rolling monthly membership for active investors, cancel anytime. 48-hour priority access to every new deal before the general list, £850 credit on the Deal List or Bespoke Sourcing per completed deal, one free feasibility report per deal, priority access to limited Source & Develop slots, monthly market intelligence, a quarterly portfolio review call, and priority warm introductions to our regulated power team.",
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
      },
      {
        "@type": "Offer",
        name: "The Deal List",
        description:
          "Browse our pipeline and pick what fits. Verified HMO deals sourced through our network — pre-auction, off-market and direct-to-vendor — with a full deal pack and indicative refurbishment scope. £5,000 fixed fee (VAT inc.): a £500 refundable deposit (taken after the sourcing agreement is signed) unlocks the full pack and viewing, £4,500 balance on completion. Deposit refunded if the deal is already gone or on a genuine no after viewing, and credited against the fee if you proceed.",
        priceCurrency: "GBP",
        price: "5000",
      },
      {
        "@type": "Offer",
        name: "Bespoke Sourcing",
        description:
          "Commission your own search, sourced exclusively to your exact brief and not shared with the list. £8,000 fixed fee (VAT inc.) in three stages: £2,667 on signing secures a dedicated 14-day search (refundable if no suitable deal is presented in the window), £2,667 on presentation of a matching deal, £2,666 on completion.",
        priceCurrency: "GBP",
        price: "8000",
      },
      {
        "@type": "Offer",
        name: "Source & Develop",
        description:
          "From sourcing to finished HMO: we source the property to your brief, then manage the full HMO conversion — design, planning, build and handover — delivered as a finished, tenanted HMO. By application; a limited number of projects per quarter. Fees quoted per project and staged against milestones.",
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
        text: "Property deal sourcing is a service where we find and introduce verified property investment opportunities to investors. Each introduction comes with a complete deal pack — address and tenure, comparables and observed local rents — gathered and packaged for you, so you can review a deal quickly and decide what's right for you.",
      },
    },
    {
      "@type": "Question",
      name: "What types of property deals do you source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialise exclusively in high-yield HMOs (Houses in Multiple Occupation) — including ready-to-let HMOs and properties with HMO conversion and change-of-use potential (under permitted development or full planning) — across Greater London and the South East. We source through our network — including pre-auction, off-market and direct-to-vendor — and take bespoke HMO briefs on request.",
      },
    },
    {
      "@type": "Question",
      name: "How much does property deal sourcing cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use fixed fees, all VAT inclusive. The Deal List is £5,000 per deal — a £500 refundable deposit unlocks the full pack and viewing, with the £4,500 balance on completion. Bespoke Sourcing is £8,000, paid in three stages (£2,667 on signing, £2,667 on presentation, £2,666 on completion). Source & Develop is by application. An optional Portfolio Builder membership is £249/month (rolling, cancel anytime) and includes a £850 credit per completed deal. No hidden costs.",
      },
    },
    {
      "@type": "Question",
      name: "How does bespoke sourcing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bespoke Sourcing is an £8,000 fixed fee (VAT inc.) for a dedicated search to your exact brief, sourced exclusively for you and not shared with the list. It's paid in three stages: £2,667 on signing secures a dedicated 14-day search; £2,667 on presentation of a matching deal; £2,666 on completion. If we don't present a suitable deal within the 14-day window, the £2,667 signing payment is refundable (subject to terms). Once a deal is presented you have a 48-hour decision SLA, with extensions on fair, justified reasoning.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover for property deal sourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover Greater London and the South of England — Surrey, Kent, East and West Sussex, Hampshire, Berkshire, Oxfordshire, Buckinghamshire, Dorset, and Somerset. We source deals through our network — or tell us what you're looking for and we'll source to your brief.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a deal pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every deal pack includes the full property address and tenure, photos where available (some off-market deals come without them — book a viewing to see it in person), asking or agreed purchase price, Land Registry comparable evidence (informational, from public records), observed local market rents, indicative gross yield (not a return projection), indicative refurbishment scope where applicable, indicative resale comparables (not a valuation), a local area summary, and strategy options to consider. Vendor and agent contact details are held by us — we facilitate viewings and introductions on your behalf. Deal packs are informational only and do not constitute financial, mortgage, tax, or legal advice. Deal packs are delivered directly to you once the sourcing agreement is signed and the £500 refundable deposit is paid.",
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
