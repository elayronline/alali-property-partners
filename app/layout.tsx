import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alalipropertypartners.com"),
  title: "Alali Property Partners | Property Deal Sourcing — South East England & Greater London",
  description:
    "We find and introduce verified, high-yield property deals for investors across South East England, Greater London, Surrey, Hampshire, Berkshire and Dorset. BTL, BRR, R2R, HMO, flips, and bespoke sourcing. Working alongside regulated professionals. Transparent fees. Complete deal packs delivered to your WhatsApp.",
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
    "property investment South East England",
    "deal sourcing London",
    "property deals Surrey",
    "property deals Hampshire",
    "property deals Berkshire",
    "property deals Dorset",
    "property sourcing for investors",
    "off-market property deals",
    "property deal packager",
    "investment property sourcing",
    "buy to let sourcing agent",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alali Property Partners | Property Deal Sourcing",
    description:
      "Verified property deals for investors across South East England, Greater London, Surrey, Hampshire, Berkshire & Dorset. BTL, BRR, R2R, HMO, flips — complete deal packs with transparent fees.",
    type: "website",
    locale: "en_GB",
    url: "https://www.alalipropertypartners.com",
    siteName: "Alali Property Partners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alali Property Partners | Property Deal Sourcing",
    description:
      "Verified property deals for investors across South East England, Greater London, Surrey, Hampshire, Berkshire & Dorset. Complete deal packs with transparent fees.",
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
    "Property deal sourcing and introducer service covering South East England, Greater London, Surrey, Hampshire, Berkshire and Dorset. We find verified, high-yield property deals for investors and connect them with regulated professionals — BTL, BRR, R2R, HMO, flips, and bespoke sourcing.",
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
    { "@type": "AdministrativeArea", name: "South East England" },
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "AdministrativeArea", name: "Surrey" },
    { "@type": "AdministrativeArea", name: "Hampshire" },
    { "@type": "AdministrativeArea", name: "Berkshire" },
    { "@type": "AdministrativeArea", name: "Dorset" },
  ],
  sameAs: [
    "https://www.instagram.com/alalipropertypartners",
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
    "We source verified, high-yield property deals for investors across South East England and Greater London. Investment purchases, rent-to-rent, and bespoke sourcing with complete deal packs.",
  provider: {
    "@type": "Organization",
    name: "Alali Property Partners",
    url: "https://www.alalipropertypartners.com",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "South East England" },
    { "@type": "AdministrativeArea", name: "Greater London" },
  ],
  serviceType: "Property Deal Sourcing",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Deal Sourcing Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Investment Purchase Sourcing",
        description: "BTL, BRR, HMO, SA, Flip — full deal pack with comparables, yield analysis and exit strategy. 2% of purchase price (min £3,000).",
        priceCurrency: "GBP",
      },
      {
        "@type": "Offer",
        name: "Rent-to-Rent Sourcing",
        description: "Ready-to-go rental agreement sourcing. Deal identification, negotiation, heads of terms. From £2,750.",
        priceCurrency: "GBP",
        price: "2750",
      },
      {
        "@type": "Offer",
        name: "Bespoke Sourcing",
        description: "Sourced to your exact brief with a £1,000 retainer plus agreed fee on completion. 14-day sourcing window.",
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
        text: "We source Buy-to-Let (BTL), BRR (Buy Refurb Refinance), Rent-to-Rent (R2R), HMO (Houses in Multiple Occupation), flips, commercial conversions, and serviced accommodation deals across South East England and Greater London.",
      },
    },
    {
      "@type": "Question",
      name: "How much does property deal sourcing cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investment purchases are 2% of purchase price (min £3,000). Rent-to-Rent deals start from £2,750. Bespoke sourcing requires a £1,000 retainer plus an agreed fee on completion. All fees are VAT inclusive with no hidden costs.",
      },
    },
    {
      "@type": "Question",
      name: "How does bespoke sourcing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You pay a £1,000 retainer upfront. We then have 14 days to source a deal that matches your brief. If we don't deliver within that period, you're covered. If you go ahead, the £1,000 comes off the final sourcing fee (typically 2–3% of purchase price).",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover for property deal sourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover South East England, Greater London, Surrey, Hampshire, Berkshire, and Dorset. We source deals across these regions for all investment strategies.",
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
    "Property deal sourcing service for investors across South East England and Greater London. BTL, BRR, R2R, HMO, flips, and bespoke sourcing.",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
