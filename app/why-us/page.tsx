import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { WhyUs } from "@/components/WhyUs"
import { Faq } from "@/components/Faq"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Why Choose Us — HMO Sourcing",
  description:
    "Why investors choose us — verified high-yield HMO deals, transparent fees, FCA-regulated team, complete deal packs. Greater London & the South East.",
  keywords: [
    "best property sourcer UK",
    "property sourcing company reviews",
    "trusted property deal sourcer",
    "honest property sourcing",
    "FCA-regulated property sourcing",
    "compliant property sourcing England",
    "property sourcing power team",
    "verified property deals UK",
    "no hidden fees property sourcing",
  ],
  alternates: { canonical: "/why-us" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alali Property Partners — HMO Sourcing, London & the South East" }],
    title: "Why Us | Alali Property Partners",
    description:
      "Verified deals, transparent fees, and complete deal packs — what sets us apart as a property sourcing partner.",
    url: "/why-us",
    type: "article",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Why Us | Alali Property Partners",
    description:
      "Verified deals, transparent fees, and complete deal packs — what sets us apart as a property sourcing partner.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a good property sourcer in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good property sourcer verifies every figure before presenting a deal, has direct relationships with agents and vendors (not just portals), works with FCA-regulated mortgage brokers and qualified solicitors, publishes transparent fees with no lock-in, and gives investors a meaningful due diligence window. Property sourcing itself is not FCA-regulated, so the quality of the introducer matters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you buy from your own pipeline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We do not buy properties from our own pipeline. Every deal we source goes to our investor clients first — that is the introducer model we operate.",
      },
    },
    {
      "@type": "Question",
      name: "Are property sourcers regulated by the FCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Property deal sourcing and introduction is not a regulated activity in the UK and is not regulated by the Financial Conduct Authority (FCA). However, we only work with FCA-regulated mortgage brokers, qualified solicitors, and other appropriately authorised professionals who deliver the regulated parts of each transaction.",
      },
    },
    {
      "@type": "Question",
      name: "What protection do investors have if a sourced deal is wrong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The sourcing fee is split into a £500 unlock fee on signed sourcing agreement and a balance settled only once you have decided to proceed. After the deal pack is released, you have a 48-hour decision SLA — extensions are available on fair, justified reasoning where the vendor agrees. If there are valid reasons not to proceed, the £500 is refundable subject to our terms of service. You are also free to instruct your own solicitor, surveyor, and broker for independent verification before deciding.",
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
      name: "Why Us",
      item: "https://www.alalipropertypartners.com/why-us",
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
          Why investors choose Alali Property Partners for HMO sourcing
        </h1>
        <WhyUs />
        <Faq items={faqSchema.mainEntity} heading="Choosing a property sourcer — FAQs" />
      </main>
      <Footer />
    </>
  )
}
