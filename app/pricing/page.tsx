import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Pricing } from "@/components/Pricing"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Property Sourcing Fees & Pricing",
  description:
    "Property sourcing fees: 2.4% (min £3,600, VAT inc.) on sourced deals; £1,000 retainer on bespoke. No hidden costs. Refundable where the deal isn't right.",
  keywords: [
    "property sourcing fees",
    "property sourcing cost UK",
    "deal sourcing pricing",
    "sourcing fee 2.4%",
    "bespoke sourcing retainer",
    "property investment fees England Wales",
    "property sourcer cost UK",
    "how much does property sourcing cost",
    "property sourcing refund policy",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Alali Property Partners",
    description:
      "2.4% sourcing fee on sourced deals, £1,000 retainer on bespoke sourcing. Transparent fees with no hidden costs.",
    url: "/pricing",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Alali Property Partners",
    description:
      "2.4% sourcing fee on sourced deals, £1,000 retainer on bespoke sourcing. Transparent fees with no hidden costs.",
    images: ["/opengraph-image"],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/pricing#service",
  name: "Property Deal Sourcing Service",
  description:
    "Property deal sourcing for investors across Greater London and the South East of England. Off-market deals via private contacts, on-market deals via compliant agent network, and bespoke sourcing to investor brief. Every deal includes a full deal pack and a 48-hour decision SLA after release/presentation, with extensions on fair, justified reasoning.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.alalipropertypartners.com/#organization",
    name: "Alali Property Partners",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "AdministrativeArea", name: "South East England" },
  ],
  serviceType: "Property Deal Sourcing",
  offers: [
    {
      "@type": "Offer",
      name: "Sourced Deals",
      description:
        "Off-market deals from our private contacts and on-market deals from our compliant agent network. 2.4% sourcing fee of purchase price (minimum £3,600, VAT inclusive). £500 paid upfront on signed sourcing agreement to release the deal pack; balance settled once the investor decides to proceed. Viewings and introductions facilitated by us — vendor and agent contact details remain with us. 48-hour decision SLA from deal-pack release, with extensions available on fair, justified reasoning. £500 refundable where there are valid reasons not to proceed (subject to terms).",
      priceCurrency: "GBP",
      price: "500",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "GBP",
        price: "500",
        minPrice: "3600",
        description: "£500 unlock fee upfront, balance to total 2.4% of purchase price (minimum £3,600 total, VAT inclusive)",
        valueAddedTaxIncluded: true,
      },
      availability: "https://schema.org/InStock",
      areaServed: "GB",
    },
    {
      "@type": "Offer",
      name: "Bespoke Sourcing",
      description:
        "We go to market and source deals tailored to your exact brief — location, budget, strategy, target returns. £1,000 upfront retainer (refundable if no deal sourced within 14 days, subject to terms), then 2.4% sourcing fee (minimum £3,600, VAT inclusive) on completion. Retainer is deducted from the final sourcing fee.",
      priceCurrency: "GBP",
      price: "1000",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "GBP",
        price: "1000",
        description: "£1,000 retainer plus 2.4% sourcing fee (minimum £3,600, VAT inclusive)",
        valueAddedTaxIncluded: true,
      },
      availability: "https://schema.org/InStock",
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
        text: "Alali Property Partners charges 2.4% of the purchase price (minimum £3,600, VAT inclusive) for sourced deals. You sign a sourcing agreement and pay £500 upfront to release the deal pack; the balance is settled once you decide to proceed. Bespoke sourcing requires a £1,000 upfront retainer plus the same 2.4% sourcing fee on completion. All fees include VAT and there are no hidden costs.",
      },
    },
    {
      "@type": "Question",
      name: "When do I pay the sourcing fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For sourced deals, £500 is paid upfront on the signed sourcing agreement to release the deal pack. The remaining balance of the 2.4% sourcing fee (to a total minimum of £3,600, VAT inclusive) is settled once you decide to proceed. For bespoke sourcing, the £1,000 retainer is paid upfront on brief, then the balance is settled on instruction once a deal is presented and accepted.",
      },
    },
    {
      "@type": "Question",
      name: "Is the property sourcing fee refundable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, subject to terms. The £500 unlock fee (Sourced Deals) or £1,000 retainer (Bespoke Sourcing) is refundable where there are valid reasons not to proceed within the 48-hour decision SLA after the deal pack is released or the bespoke deal is presented. The balance of the sourcing fee is only ever charged once you have decided to proceed, so it is never paid in scenarios where a refund would apply. Extensions to the 48-hour SLA may be granted on fair, justified reasoning where the vendor agrees. Refunds are not issued once the window has expired or where significant work has been undertaken on your behalf.",
      },
    },
    {
      "@type": "Question",
      name: "What does the bespoke sourcing retainer cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The £1,000 upfront retainer commits us to actively go to market and source deals tailored to your exact criteria (location, budget, strategy, target returns) within a 14-day window in which we find and present a deal. If we do not present a suitable deal within those 14 days, the retainer is refundable subject to terms. Once a deal is presented, the standard 48-hour decision SLA applies — if you decide not to proceed and there are valid reasons, the £1,000 is also refundable subject to terms. If you proceed, the £1,000 is deducted from the final 2.4% sourcing fee.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any ongoing fees or contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. There are no ongoing contracts, retainers, or lock-ins. You pay per deal. The WhatsApp deal broadcast is free.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge VAT on top of the sourcing fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All fees quoted are VAT inclusive. The 2.4% sourcing fee, the £3,600 minimum, and the £1,000 bespoke retainer all already include VAT.",
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
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
