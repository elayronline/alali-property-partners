import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { HowItWorks } from "@/components/HowItWorks"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "How It Works — Property Deal Sourcing Process",
  description:
    "How our property deal sourcing works in 4 steps — choose how to invest, secure your deal, receive a full deal pack, then take 14 days to verify everything. Transparent fees, complete deal packs, compliant agent network across England & Wales.",
  keywords: [
    "how property deal sourcing works",
    "property deal sourcing process",
    "property sourcing steps UK",
    "deal pack contents",
    "14 day due diligence property",
    "off-market property sourcing process",
    "on-market property sourcing process",
    "bespoke property sourcing",
    "property sourcing England Wales",
  ],
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Alali Property Partners",
    description:
      "Our 4-step process for sourcing and securing verified property deals across England & Wales.",
    url: "/how-it-works",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works | Alali Property Partners",
    description:
      "Our 4-step process for sourcing and securing verified property deals across England & Wales.",
    images: ["/opengraph-image"],
  },
}

// HowTo schema — describes the 4-step sourcing process for AI answer engines
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How property deal sourcing works with Alali Property Partners",
  description:
    "A 4-step process for investors to commission property deal sourcing in England & Wales, receive a full deal pack, and complete due diligence.",
  totalTime: "P14D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "GBP",
    value: "3600",
  },
  supply: [
    { "@type": "HowToSupply", name: "Investor brief (strategy, budget, target areas)" },
    { "@type": "HowToSupply", name: "Proof of funds (cash, mortgage in principle, or facility)" },
  ],
  tool: [{ "@type": "HowToTool", name: "Deal pack: comparables, yield analysis, exit strategy" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Choose how you want to invest",
      text: "Get sourced deals — off-market from our private contacts and on-market from our compliant agent network — or commission bespoke sourcing to your exact brief.",
      url: "https://www.alalipropertypartners.com/how-it-works#step-1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Secure your deal",
      text: "Sourced deals: 2.4% sourcing fee (min £3,600, VAT inc.) paid upfront on instruction. Bespoke sourcing: £1,000 retainer to start your search.",
      url: "https://www.alalipropertypartners.com/how-it-works#step-2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Receive your full deal pack",
      text: "Every deal pack includes the full property address, photos, comparables, yield analysis, refurb costs, target resale value, area demand, and recommended exit strategy.",
      url: "https://www.alalipropertypartners.com/how-it-works#step-3",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "14 days to verify everything",
      text: "We introduce you to the agent or vendor. You have a full 14 days to run your own due diligence. If the deal is not suitable, the sourcing fee is refundable subject to our terms.",
      url: "https://www.alalipropertypartners.com/how-it-works#step-4",
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does property deal sourcing take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For sourced deals from our pipeline, you receive the deal pack within days of instruction. For bespoke sourcing, we work to a 14-day sourcing window from receipt of your £1,000 retainer. After a deal is presented, you get a further 14-day due diligence period before any decision is final.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a property deal pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every deal pack includes the full property address and location details, interior and exterior photos where available, purchase price and comparable sold prices, yield calculations and rental income evidence, refurbishment cost estimate where applicable, target resale value for flips and developments, area demand and local market summary, and a recommended strategy with exit options.",
      },
    },
    {
      "@type": "Question",
      name: "How does the 14-day due diligence period work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From the date a deal is presented, you have 14 days to instruct your own solicitor, surveyor, and mortgage broker, and to verify every figure independently. If you decide the property is not suitable during the 14-day window, you may request a refund of the sourcing fee in writing, subject to the conditions in our terms of service.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to use your mortgage brokers and solicitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We introduce you to FCA-regulated mortgage brokers, qualified solicitors, and vetted contractors as a service, but you are free to use your own. Property deal sourcing and introduction is not a regulated activity — all regulated services are delivered by independent professionals.",
      },
    },
    {
      "@type": "Question",
      name: "How are off-market deals different from on-market deals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Off-market deals come through our private contacts — landlords, property owners, and direct relationships — and are not advertised publicly. On-market deals come from our compliant agent network and are listed publicly, but we have already verified the numbers and negotiated terms before presenting them to investors.",
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
      name: "How It Works",
      item: "https://www.alalipropertypartners.com/how-it-works",
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}
