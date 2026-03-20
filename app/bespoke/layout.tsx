import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bespoke Property Sourcing | Alali Property Partners",
  description:
    "Get property deals sourced to your exact brief. £1,000 retainer with 14-day sourcing window. BTL, BRR, HMO, flips — we find exactly what you're looking for across England & Wales.",
  alternates: { canonical: "/bespoke" },
  openGraph: {
    title: "Bespoke Property Sourcing | Alali Property Partners",
    description:
      "Property deals sourced to your exact brief. 14-day sourcing window across England & Wales.",
    type: "website",
  },
}

export default function BespokeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
