import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Alali Property Partners | Property Deal Sourcing Across England & Wales",
  description:
    "We source verified, high-yield property deals for investors across England and Wales. BTL, BRR, R2R, HMO, flips, and bespoke sourcing. Transparent fees. Complete deal packs delivered to your WhatsApp.",
  keywords:
    "property deal sourcing, property sourcing agent, below market value property, BTL deals, BRR property, rent to rent, HMO investment, property investment UK, deal sourcing London, property deals England Wales",
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.alalipropertypartners.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alali Property Partners | Property Deal Sourcing",
    description:
      "Verified property deals for investors across England and Wales. BTL, BRR, R2R, HMO, flips — complete deal packs with transparent fees.",
    type: "website",
    locale: "en_GB",
    url: "https://www.alalipropertypartners.com",
    siteName: "Alali Property Partners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alali Property Partners | Property Deal Sourcing",
    description:
      "Verified property deals for investors across England and Wales. Complete deal packs with transparent fees.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Alali Property Partners",
              description:
                "Property deal sourcing across England and Wales. We source verified, high-yield property deals for investors — BTL, BRR, R2R, HMO, flips, and bespoke sourcing.",
              url: "https://www.alalipropertypartners.com",
              telephone: ["+447802816863", "+447392637828"],
              email: "contact@alalipropertypartners.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "86-90 Paul Street",
                addressLocality: "London",
                postalCode: "EC2A 4NE",
                addressCountry: "GB",
              },
              areaServed: {
                "@type": "Country",
                name: "United Kingdom",
              },
              sameAs: [
                "https://www.instagram.com/alalipropertypartners",
              ],
              founder: [
                { "@type": "Person", name: "Alayi MacPepple-Jaja" },
                { "@type": "Person", name: "Ellie Moore" },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
