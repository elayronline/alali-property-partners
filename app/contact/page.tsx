import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Alali Property Partners. Whether you're looking for your next investment, need to move a property, or want to source to a specific brief — tell us what you need.",
  keywords: [
    "contact property sourcer UK",
    "property sourcing contact",
    "investor contact form",
    "get in touch property deal sourcing",
    "Alali Property Partners contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Alali Property Partners",
    description:
      "Tell us what you're looking for — or what you need to move. We'll come back within one working day.",
    url: "/contact",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Alali Property Partners",
    description:
      "Tell us what you're looking for — or what you need to move. We'll come back within one working day.",
    images: ["/opengraph-image"],
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
