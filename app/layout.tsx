import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alalipropertypartners.com"),
  title: "Alali Property Partners | Property Deal Sourcing — England & Wales",
  description:
    "We find and introduce verified, high-yield property deals for investors across England & Wales. BTL, BRR, R2R, HMO, flips, and bespoke sourcing. Browse our online deal marketplace or tell us what you're looking for. Working alongside regulated professionals. Transparent fees. Complete deal packs.",
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
    "property deal marketplace",
    "deal sourcing London",
    "deal sourcing Manchester",
    "deal sourcing Birmingham",
    "property sourcing for investors",
    "off-market property deals",
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
      "Verified property deals for investors across England & Wales. BTL, BRR, R2R, HMO, flips — browse our marketplace or tell us what you're looking for.",
    type: "website",
    locale: "en_GB",
    url: "https://www.alalipropertypartners.com",
    siteName: "Alali Property Partners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alali Property Partners | Property Deal Sourcing",
    description:
      "Verified property deals for investors across England & Wales. Browse our marketplace or tell us what you're looking for. Complete deal packs with transparent fees.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
  manifest: "/site.webmanifest",
}

// LocalBusiness + ProfessionalService schema
const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.alalipropertypartners.com/#organization",
  name: "Alali Property Partners",
  legalName: "Alali Property Partners Ltd",
  description:
    "Property deal sourcing and introducer service covering England & Wales. We find verified, high-yield property deals for investors and connect them with regulated professionals — BTL, BRR, R2R, HMO, flips, and bespoke sourcing. Browse our online deal marketplace.",
  url: "https://www.alalipropertypartners.com",
  telephone: "+442045158438",
  email: "contact@alalipropertypartners.com",
  image: "https://www.alalipropertypartners.com/icon-512.png",
  logo: {
    "@type": "ImageObject",
    url: "https://www.alalipropertypartners.com/icon-512.png",
    width: 512,
    height: 512,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "86-90 Paul Street",
    addressLocality: "London",
    postalCode: "EC2A 4NE",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "Country", name: "England" },
    { "@type": "Country", name: "Wales" },
  ],
  foundingDate: "2025",
  sameAs: [
    "https://www.instagram.com/alalipropertypartners",
    "https://www.facebook.com/alalipropertypartners",
    "https://find-and-update.company-information.service.gov.uk/company/17057401",
  ],
  founder: [
    { "@type": "Person", name: "Alayi MacPepple-Jaja" },
    { "@type": "Person", name: "Ellie Moore" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+442045158438",
    contactType: "customer service",
    email: "contact@alalipropertypartners.com",
    areaServed: "GB",
    availableLanguage: "English",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "2-10",
  },
  knowsAbout: [
    "Property Deal Sourcing",
    "Below Market Value Properties",
    "Buy to Let Investment",
    "BRR Strategy",
    "Rent to Rent",
    "HMO Investment",
    "Property Flipping",
  ],
}

// Service schema for deal sourcing packages
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Property Deal Sourcing",
  description:
    "We source verified, high-yield property deals for investors across England & Wales. Website deals, off-market opportunities, and bespoke sourcing with complete deal packs. Browse our online deal marketplace.",
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
        name: "Website Deals",
        description: "Ready-made investment opportunities on our marketplace. BTL, BRR, HMO, SA, Flip — full deal pack with comparables, yield analysis and exit strategy. £100 reservation fee, then 2.4% sourcing fee (min £3,600, VAT inc.).",
        priceCurrency: "GBP",
      },
      {
        "@type": "Offer",
        name: "Off-Market Deals",
        description: "Exclusive off-market property deals shared within our private investor network. Full deal pack and introduction to agent/vendor. 2.4% sourcing fee (min £3,600, VAT inc.) paid upfront. 14-day due diligence period.",
        priceCurrency: "GBP",
        price: "3600",
      },
      {
        "@type": "Offer",
        name: "Bespoke Sourcing",
        description: "We go to market and source deals tailored to your exact investment criteria. £1,000 upfront retainer, then 2.4% sourcing fee (min £3,600, VAT inc.) on completion. Retainer deducted from final fee. 14-day sourcing window.",
        priceCurrency: "GBP",
        price: "1000",
      },
    ],
  },
}

// FAQ schema
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
        text: "Marketplace investment purchases are 2.4% of purchase price (min £3,600) plus a £100 reservation fee. Rent-to-Rent deals start from £3,600. Bespoke sourcing requires a £1,000 retainer plus an agreed fee on completion. All fees are VAT inclusive with no hidden costs.",
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
        text: "We cover the whole of England & Wales. Browse our online deal marketplace for live deals or tell us what you're looking for and we'll source to your brief.",
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

// WebSite schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alali Property Partners",
  url: "https://www.alalipropertypartners.com",
  description:
    "Property deal sourcing service for investors across England & Wales. BTL, BRR, R2R, HMO, flips, and bespoke sourcing. Browse our online deal marketplace.",
  publisher: {
    "@type": "Organization",
    name: "Alali Property Partners",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${raleway.variable} antialiased`}>{children}</body>
    </html>
  )
}
