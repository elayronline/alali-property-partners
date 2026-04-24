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
  title: {
    default: "Alali Property Partners | Property Deal Sourcing — England & Wales",
    template: "%s | Alali Property Partners",
  },
  description:
    "Property deal sourcing and introducer service across England & Wales. Off-market via our private contacts, on-market via our compliant agent network, and bespoke sourcing to your brief.",
  applicationName: "Alali Property Partners",
  authors: [{ name: "Alali Property Partners Ltd" }],
  creator: "Alali Property Partners Ltd",
  publisher: "Alali Property Partners Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    siteName: "Alali Property Partners",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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

// LocalBusiness + ProfessionalService schema (site-wide)
const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.alalipropertypartners.com/#organization",
  name: "Alali Property Partners",
  legalName: "Alali Property Partners Ltd",
  description:
    "Property deal sourcing and introducer service covering England & Wales. We find verified, high-yield property deals for investors and connect them with regulated professionals — off-market through private contacts, on-market through our compliant agent network, BTL, BRR, R2R, HMO, flips, and bespoke sourcing.",
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

// WebSite schema (site-wide)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alali Property Partners",
  url: "https://www.alalipropertypartners.com",
  description:
    "Property deal sourcing service for investors across England & Wales. Off-market through private contacts, on-market through our compliant agent network, BTL, BRR, R2R, HMO, flips, and bespoke sourcing.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${raleway.variable} antialiased`}>{children}</body>
    </html>
  )
}
