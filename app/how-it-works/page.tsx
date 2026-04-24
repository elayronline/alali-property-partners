import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { HowItWorks } from "@/components/HowItWorks"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How our property deal sourcing works — choose how to invest, secure your deal, receive a full deal pack, and take 14 days to verify everything. Transparent fees, complete deal packs, compliant agent network.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Alali Property Partners",
    description:
      "Our 4-step process for sourcing and securing verified property deals across England & Wales.",
    url: "/how-it-works",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works | Alali Property Partners",
    description:
      "Our 4-step process for sourcing and securing verified property deals across England & Wales.",
    images: ["/opengraph-image"],
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}
