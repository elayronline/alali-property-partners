import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { WhyUs } from "@/components/WhyUs"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Why investors choose Alali Property Partners — verified deals, transparent fees, compliant agent network, 14-day due diligence, and complete deal packs across England & Wales.",
  alternates: { canonical: "/why-us" },
  openGraph: {
    title: "Why Us | Alali Property Partners",
    description:
      "Verified deals, transparent fees, and complete deal packs — what sets us apart as a property sourcing partner.",
    url: "/why-us",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Us | Alali Property Partners",
    description:
      "Verified deals, transparent fees, and complete deal packs — what sets us apart as a property sourcing partner.",
    images: ["/opengraph-image"],
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <WhyUs />
      </main>
      <Footer />
    </>
  )
}
