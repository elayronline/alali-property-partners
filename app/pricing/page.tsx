import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Pricing } from "@/components/Pricing"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent property sourcing fees — 2.4% sourcing fee (min £3,600, VAT inc.) for sourced deals, £1,000 retainer for bespoke sourcing. No hidden costs, 14-day due diligence on every deal.",
  keywords: [
    "property sourcing fees",
    "property sourcing cost UK",
    "deal sourcing pricing",
    "sourcing fee 2.4%",
    "bespoke sourcing retainer",
    "property investment fees England Wales",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Alali Property Partners",
    description:
      "2.4% sourcing fee on sourced deals, £1,000 retainer on bespoke sourcing. Transparent fees with no hidden costs.",
    url: "/pricing",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Alali Property Partners",
    description:
      "2.4% sourcing fee on sourced deals, £1,000 retainer on bespoke sourcing. Transparent fees with no hidden costs.",
    images: ["/opengraph-image"],
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
