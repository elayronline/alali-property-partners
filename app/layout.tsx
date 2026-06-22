import type { Metadata } from "next"
import { Raleway, Montserrat } from "next/font/google"
import { MetaPixelPageView } from "@/components/MetaPixelPageView"
import { StickyMobileCta } from "@/components/StickyMobileCta"
import "./globals.css"

// Meta (Facebook) Pixel.
// Rendered as a literal inline <script> in <head> (NOT next/script) so the base
// code is present in the page source and executes on load — this is what Meta's
// Pixel Helper / verifier looks for. next/script's afterInteractive defers the
// code into Next's client loader, which left it undetectable in the page source.
const META_PIXEL_ID = "871859325471356"
const META_PIXEL_CODE = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
})

// Bold geometric sans for display headings — matches the Alali brand collateral.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alalipropertypartners.com"),
  title: {
    default: "Alali Property Partners | HMO & Conversion-Ready BRR Deal Sourcing — London & the South East",
    template: "%s | Alali Property Partners",
  },
  description:
    "Specialist sourcing of high-yield HMOs and conversion-ready BRR deals across Greater London and the South East. Sourced through our network — including pre-auction, off-market and direct-to-vendor — with HMO conversion and change-of-use potential, delivered with a complete deal pack.",
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
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Alali Property Partners — HMO & BRR Sourcing, London & the South East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
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
    "Specialist property deal sourcing covering Greater London and the South East. We source high-yield HMOs and conversion-ready BRR deals — properties with HMO conversion and change-of-use potential (under permitted development or full planning) — sourced through our network, including pre-auction, off-market and direct-to-vendor, and connect investors with the regulated professionals they need.",
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
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "AdministrativeArea", name: "South East England" },
    { "@type": "AdministrativeArea", name: "Dorset" },
    { "@type": "AdministrativeArea", name: "Somerset" },
  ],
  foundingDate: "2025-01-01",
  sameAs: [
    "https://www.instagram.com/alalipropertypartners",
    "https://www.facebook.com/alalipropertypartners",
    "https://find-and-update.company-information.service.gov.uk/company/17057401",
    "https://www.google.com/maps?cid=4253008671490656259",
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
    "HMO Property Sourcing",
    "Houses in Multiple Occupation",
    "Conversion-Ready BRR Deals",
    "HMO Conversion & Change of Use",
    "Permitted Development",
    "Article 4 Areas",
    "Pre-Auction Property",
    "Off-Market Property Sourcing",
    "Below Market Value Properties",
  ],
}

// WebSite schema (site-wide)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.alalipropertypartners.com/#website",
  name: "Alali Property Partners",
  url: "https://www.alalipropertypartners.com",
  description:
    "Specialist sourcing of high-yield HMOs and conversion-ready BRR deals for investors across Greater London and the South East. Sourced through our network — including pre-auction, off-market and direct-to-vendor — with HMO conversion and change-of-use potential.",
  publisher: {
    "@id": "https://www.alalipropertypartners.com/#organization",
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
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{ __html: META_PIXEL_CODE }} />
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${raleway.variable} ${montserrat.variable} antialiased`}>
        {/* Meta Pixel — noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
        <MetaPixelPageView />
        <StickyMobileCta />
      </body>
    </html>
  )
}
