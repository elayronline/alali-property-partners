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
    "We source below-market-value, off-market, and high-yield property deals for investors across England and Wales. BTL, BRR, R2R, HMO, flips, and bespoke sourcing. Transparent fees. Deals delivered to your WhatsApp.",
  keywords:
    "property deal sourcing, below market value, off-market property, BTL, BRR, rent to rent, HMO, property investment, England, Wales",
  openGraph: {
    title: "Alali Property Partners | Property Deal Sourcing Across England & Wales",
    description:
      "We source below-market-value, off-market, and high-yield property deals for investors across England and Wales.",
    type: "website",
    locale: "en_GB",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
