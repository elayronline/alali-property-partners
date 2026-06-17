import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bespoke Property Sourcing — Source to Your Brief",
  description:
    "Bespoke high-yield HMO and conversion-ready BRR sourcing across Greater London & the South East — to your exact brief. £1,000 retainer, then 2.4% (min £3,600 VAT inc.).",
  keywords: [
    "bespoke property sourcing",
    "bespoke HMO sourcing",
    "bespoke BRR sourcing",
    "custom property sourcing UK",
    "property sourcing to brief",
    "tailored HMO deals",
    "investor brief sourcing",
    "conversion-ready property sourcing",
    "HMO sourcing to brief London",
    "property sourcing South East",
  ],
  alternates: { canonical: "/bespoke" },
  openGraph: {
    title: "Bespoke Property Sourcing | Alali Property Partners",
    description:
      "HMO and conversion-ready BRR deals sourced to your exact brief — strategy, budget, and location. £1,000 retainer, then 2.4% sourcing fee on completion.",
    url: "/bespoke",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Property Sourcing | Alali Property Partners",
    description:
      "HMO and conversion-ready BRR deals sourced to your exact brief — strategy, budget, and location. £1,000 retainer, then 2.4% sourcing fee on completion.",
    images: ["/opengraph-image"],
  },
}

const bespokeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/bespoke#service",
  name: "Bespoke Property Sourcing",
  description:
    "Bespoke property deal sourcing — we go to market and source high-yield HMO and conversion-ready BRR deals to your exact brief (budget, target locations, condition, finance method, target returns), with HMO conversion and change-of-use potential (permitted development, non-Article 4) across Greater London and the South of England.",
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
        text: "Bespoke property sourcing is where we actively go to market and source deals tailored to your specific brief — your target HMO or conversion-ready BRR profile, budget, target locations, condition, finance method, and target returns. Unlike receiving deals from our existing pipeline, bespoke sourcing is targeted to your exact criteria.",
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
      name: "Do you only source HMO and BRR deals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our specialism is high-yield HMOs and conversion-ready BRR (Buy, Refurbish, Refinance) deals across Greater London and the South of England — properties with HMO conversion and change-of-use potential (permitted development, non-Article 4 areas). We focus there because that is where our access — pre-auction, off-market and direct-to-vendor via a network of compliant agents — produces the strongest deals. Other strategies may be considered on request, but HMO and conversion-ready BRR is what we do best.",
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
      name: "What strategies and finance methods do you source to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialise in HMO and conversion-ready BRR (Buy, Refurbish, Refinance) deals — properties with HMO conversion and change-of-use potential (permitted development, non-Article 4 areas). We source to common finance methods including cash, HMO and buy-to-let mortgages, bridging, and JV/private finance.",
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
