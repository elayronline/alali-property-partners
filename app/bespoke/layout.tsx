import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bespoke Property Sourcing",
  description:
    "Get property deals sourced to your exact brief. £1,000 retainer with 14-day sourcing window. BTL, BRR, HMO, flips — we find exactly what you're looking for across England & Wales.",
  keywords: [
    "bespoke property sourcing",
    "property sourcing to brief",
    "tailored property deals",
    "custom property sourcing UK",
    "investor brief sourcing",
    "property sourcing retainer",
    "BTL bespoke sourcing",
    "HMO bespoke sourcing",
    "BRR bespoke sourcing",
    "England property sourcing",
    "Wales property sourcing",
  ],
  alternates: { canonical: "/bespoke" },
  openGraph: {
    title: "Bespoke Property Sourcing | Alali Property Partners",
    description:
      "Property deals sourced to your exact brief. £1,000 retainer, 14-day sourcing window across England & Wales.",
    url: "/bespoke",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Property Sourcing | Alali Property Partners",
    description:
      "Property deals sourced to your exact brief. £1,000 retainer, 14-day sourcing window across England & Wales.",
    images: ["/opengraph-image"],
  },
}

export default function BespokeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
