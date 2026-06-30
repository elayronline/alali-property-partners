"use client"

import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { WhatWeSource } from "@/components/WhatWeSource"
import { CoverageMap } from "@/components/CoverageMap"
import { HowItWorks } from "@/components/HowItWorks"
import { WhyUs } from "@/components/WhyUs"
import { Assurances } from "@/components/Assurances"
import { CaseStudy } from "@/components/CaseStudy"
import { GotADeal } from "@/components/GotADeal"
import { Pricing } from "@/components/Pricing"
import { Faq } from "@/components/Faq"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"

interface FaqItem {
  name: string
  acceptedAnswer: { text: string }
}

export function HomePage({ faqItems }: { faqItems?: FaqItem[] }) {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeSource />
      <CoverageMap />
      <HowItWorks />
      <CaseStudy />
      <WhyUs />
      <Assurances />
      <Pricing />
      {faqItems && faqItems.length > 0 && (
        <Faq items={faqItems} heading="Property deal sourcing — FAQs" />
      )}
      <ContactForm />
      <GotADeal />
      <Footer />
    </main>
  )
}
