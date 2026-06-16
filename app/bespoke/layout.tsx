import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bespoke Property Sourcing — Source to Your Brief",
  description:
    "Bespoke HMO, BRR and wider property sourcing across Greater London & the South East — to your brief. £1,000 retainer, then 2.4% (min £3,600 VAT inc.). Residential & commercial.",
  keywords: [
    "bespoke property sourcing",
    "custom property sourcing UK",
    "property sourcing to brief",
    "tailored property deals",
    "investor brief sourcing",
    "commercial property sourcing UK",
    "residential property sourcing UK",
    "property sourcing retainer",
    "HMO bespoke sourcing",
    "BTL bespoke sourcing",
    "BRR bespoke sourcing",
    "England property sourcing",
    "Wales property sourcing",
  ],
  alternates: { canonical: "/bespoke" },
  openGraph: {
    title: "Bespoke Property Sourcing | Alali Property Partners",
    description:
      "Source property deals to your exact brief — strategy, budget, and location. £1,000 retainer, then 2.4% sourcing fee on completion. Residential and commercial.",
    url: "/bespoke",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Property Sourcing | Alali Property Partners",
    description:
      "Source property deals to your exact brief — strategy, budget, and location. £1,000 retainer, then 2.4% sourcing fee on completion.",
    images: ["/opengraph-image"],
  },
}

const bespokeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/bespoke#service",
  name: "Bespoke Property Sourcing",
  description:
    "Bespoke property deal sourcing — we go to market and source deals to your exact brief (strategy, budget, location, target returns). Covers residential strategies (BTL, BRR, BRRR, HMO, R2R, R2SA, SA, flips, lease options, development) and commercial sectors (office, retail, industrial, leisure, healthcare, student, mixed use, land).",
  provider: {
    "@type": "Organization",
    "@id": "https://www.alalipropertypartners.com/#organization",
    name: "Alali Property Partners",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "AdministrativeArea", name: "South East England" },
    { "@type": "AdministrativeArea", name: "Dorset" },
  ],
  serviceType: "Bespoke Property Deal Sourcing",
  offers: {
    "@type": "Offer",
    name: "Bespoke Sourcing Retainer",
    description:
      "£1,000 upfront retainer covers our bespoke 14-day search effort. We find and present a deal matching your brief within that window. If we don't present a suitable deal, the retainer is refundable subject to terms. Once a deal is presented, you have a 48-hour decision SLA — extensions available on fair, justified reasoning where the vendor agrees. £1,000 also refundable on valid reasons not to proceed within the SLA (subject to terms). On a decision to proceed, the 2.4% sourcing fee (min £3,600, VAT inclusive) is charged additionally — the retainer is not credited against the sourcing fee.",
    priceCurrency: "GBP",
    price: "1000",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "GBP",
      price: "1000",
      description: "£1,000 retainer plus 2.4% sourcing fee on completion (min £3,600, VAT inclusive)",
      valueAddedTaxIncluded: true,
    },
    availability: "https://schema.org/InStock",
    areaServed: "GB",
  },
}

const bespokeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is bespoke property sourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bespoke property sourcing is where we actively go to market and source deals tailored to your specific brief — your preferred strategy (e.g. BTL, BRR, HMO, flip, commercial), budget, target locations, condition, finance method, and target returns. Unlike receiving deals from our existing pipeline, bespoke sourcing is hands-off and targeted to your exact criteria.",
      },
    },
    {
      "@type": "Question",
      name: "How much is the bespoke property sourcing retainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The bespoke sourcing retainer is £1,000, payable upfront on brief. The retainer covers our 14-day bespoke search effort. It is refundable if we do not present a suitable deal within the 14-day sourcing window (subject to terms). After a deal is presented, you have a 48-hour decision SLA — if there are valid reasons not to proceed, the £1,000 is also refundable (subject to terms). If you proceed with a deal, the 2.4% sourcing fee (minimum £3,600, VAT inclusive) is charged in addition to the £1,000 retainer — the retainer is not credited against the sourcing fee.",
      },
    },
    {
      "@type": "Question",
      name: "Does bespoke sourcing cover commercial property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Bespoke sourcing covers both residential and commercial property across Greater London and the South of England (the South East and Dorset). Commercial sectors include office, retail (high street, retail park), industrial and warehouse, light industrial, leisure and hospitality, healthcare, care homes and assisted living, student accommodation, mixed use, and land with or without planning.",
      },
    },
    {
      "@type": "Question",
      name: "How long does bespoke property sourcing take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work to a 14-day bespoke sourcing window from receipt of your retainer and brief — within that window we find and present a deal matching your criteria. If we don't present a suitable deal within 14 days, the retainer is refundable subject to terms. Once a deal is presented, you have a 48-hour decision SLA — the same standard window as Sourced Deals — with extensions available on fair, justified reasoning where the vendor agrees.",
      },
    },
    {
      "@type": "Question",
      name: "What investment strategies do you source to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We source to Buy-to-Let (BTL), HMO, Serviced Accommodation, Rent-to-Rent (R2R), Rent-to-SA, BRRR (Buy Refurb Refinance Rent), flips, development and conversion, lease options, and commercial investment briefs. We also source to specific finance methods including cash, BTL mortgage, HMO mortgage, bridging, commercial mortgage, SIPP/SSAS, and JV/private finance.",
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
      name: "Bespoke Sourcing",
      item: "https://www.alalipropertypartners.com/bespoke",
    },
  ],
}

export default function BespokeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bespokeServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bespokeFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
