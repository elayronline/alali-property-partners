import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { HowItWorks } from "@/components/HowItWorks"
import { Faq } from "@/components/Faq"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "How HMO & BRR Sourcing Works",
  description:
    "Our 4-step HMO and conversion-ready BRR sourcing process — pick a deal, secure it, get a full deal pack, move with confidence. Greater London & the South East.",
  keywords: [
    "how HMO deal sourcing works",
    "HMO sourcing process",
    "BRR sourcing process",
    "conversion-ready property sourcing",
    "deal pack contents",
    "48 hour decision SLA property sourcing",
    "pre-auction property sourcing",
    "off-market property sourcing process",
    "bespoke HMO property sourcing",
    "property sourcing South East",
  ],
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alali Property Partners — HMO & BRR Sourcing, London & the South East" }],
    title: "How It Works | Alali Property Partners",
    description:
      "Our 4-step process for sourcing and securing verified property deals across London & the South of England.",
    url: "/how-it-works",
    type: "article",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "How It Works | Alali Property Partners",
    description:
      "Our 4-step process for sourcing and securing verified property deals across London & the South of England.",
  },
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
        text: "For sourced deals from our pipeline, you receive the deal pack within days of signing the sourcing agreement and paying the £500 unlock fee. For bespoke sourcing, we work to a 14-day sourcing window from receipt of your £1,000 retainer in which we find and present a deal. Once a deal pack is released (or a bespoke deal is presented), you have a 48-hour decision SLA before any commitment is final — extensions are available on fair, justified reasoning where the vendor allows.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a property deal pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every deal pack includes the full property address and tenure, photos provided by the vendor or agent (where available), asking or agreed purchase price, Land Registry comparable evidence from public records (informational), observed local market rents from public lettings data (informational, not guaranteed), indicative gross yield based on those observed rents (not a return projection), indicative refurbishment scope where applicable to be verified by your contractor or surveyor, indicative resale comparables for flips and developments (not a valuation), a local area summary covering demand drivers, planning context, and transport links, and strategy options to consider (HMO, conversion-ready BRR) presented as information not advice. Vendor and agent contact details are held by us — we facilitate viewings and introductions on your behalf. Deal packs are informational only and do not constitute financial, mortgage, tax, or legal advice.",
      },
    },
    {
      "@type": "Question",
      name: "How does the 48-hour decision SLA work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From the moment the deal pack is released (the Deal List) or the deal is presented (Bespoke), you have 48 hours to review it, get initial input from your solicitor, surveyor, or mortgage broker, and decide whether to proceed. Most off-market deals are time-sensitive, which is why the standard window is short — but extensions can be granted on fair, justified reasoning (for example, awaiting a survey or mortgage decision in principle) where the vendor agrees. If you decide to proceed, the balance of the sourcing fee is settled. If you decide not to proceed and there are valid reasons, the £500 unlock fee (the Deal List) or £1,000 retainer (Bespoke) is refundable subject to our terms of service.",
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
      name: "How do you make sure a deal actually stacks before sending it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before any deal reaches you, we research it and confirm the numbers — purchase price against comparables, observed local rents, and the planning position where relevant — and only send it when it stands up. Off-market opportunities come through our private contacts and direct relationships; wherever a deal comes from, it's packaged the same way so you can move quickly.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-20">
        <h1 className="sr-only">
          How HMO &amp; conversion-ready BRR deal sourcing works — Greater London &amp; the South East
        </h1>
        <HowItWorks />
        <Faq items={faqSchema.mainEntity} heading="How property sourcing works — FAQs" />
      </main>
      <Footer />
    </>
  )
}
