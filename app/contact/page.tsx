import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Tell Us Your Brief — HMO Sourcing Enquiries",
  description:
    "Tell us your brief — specialist HMO sourcing across Greater London & the South East. Know what you want or not sure yet, either works. We'll review your brief and be in touch.",
  keywords: [
    "contact property sourcer UK",
    "property sourcing contact",
    "investor contact form",
    "get in touch property deal sourcing",
    "Alali Property Partners contact",
    "property sourcing London contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alali Property Partners — HMO Sourcing, London & the South East" }],
    title: "Contact Us | Alali Property Partners",
    description:
      "Tell us what you're looking for — or what you need to move. We'll be in touch.",
    url: "/contact",
    type: "article",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Contact Us | Alali Property Partners",
    description:
      "Tell us what you're looking for — or what you need to move. We'll be in touch.",
  },
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Alali Property Partners",
  url: "https://www.alalipropertypartners.com/contact",
  description:
    "Contact form for investors, property owners, estate agents, and sourcers to reach Alali Property Partners.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://www.alalipropertypartners.com/#organization",
    name: "Alali Property Partners",
    telephone: "+442045158438",
    email: "contact@alalipropertypartners.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "86-90 Paul Street",
      addressLocality: "London",
      postalCode: "EC2A 4NE",
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+442045158438",
      contactType: "customer service",
      email: "contact@alalipropertypartners.com",
      areaServed: "GB",
      availableLanguage: "English",
    },
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.alalipropertypartners.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://www.alalipropertypartners.com/contact",
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-20">
        <h1 className="sr-only">
          Contact Alali Property Partners — HMO sourcing enquiries
        </h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
