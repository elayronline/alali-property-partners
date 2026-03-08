import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Alali Property Partners | Property Deal Sourcing — South East England & Greater London",
  description:
    "We find and introduce verified, high-yield property deals for investors across South East England, Greater London, Hampshire, Berkshire and Dorset. BTL, BRR, R2R, HMO, flips, and bespoke sourcing. Working alongside regulated professionals. Transparent fees. Complete deal packs delivered to your WhatsApp.",
  keywords:
    "property deal sourcing, property sourcing agent, below market value property, BTL deals, BRR property, rent to rent, HMO investment, property investment South East England, deal sourcing London, property deals Hampshire Berkshire Dorset, Greater London property deals",
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.alalipropertypartners.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alali Property Partners | Property Deal Sourcing",
    description:
      "Verified property deals for investors across South East England, Greater London, Hampshire, Berkshire & Dorset. BTL, BRR, R2R, HMO, flips — complete deal packs with transparent fees.",
    type: "website",
    locale: "en_GB",
    url: "https://www.alalipropertypartners.com",
    siteName: "Alali Property Partners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alali Property Partners | Property Deal Sourcing",
    description:
      "Verified property deals for investors across South East England, Greater London, Hampshire, Berkshire & Dorset. Complete deal packs with transparent fees.",
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
                "Property deal sourcing and introducer service covering South East England, Greater London, Hampshire, Berkshire and Dorset. We find verified, high-yield property deals for investors and connect them with regulated professionals — BTL, BRR, R2R, HMO, flips, and bespoke sourcing.",
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
              areaServed: [
                { "@type": "AdministrativeArea", name: "South East England" },
                { "@type": "AdministrativeArea", name: "Greater London" },
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
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
