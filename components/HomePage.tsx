"use client"

import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { WhatWeSource } from "@/components/WhatWeSource"
import { CoverageMap } from "@/components/CoverageMap"
import { HowItWorks } from "@/components/HowItWorks"
import { WhyUs } from "@/components/WhyUs"
import { CaseStudy } from "@/components/CaseStudy"
import { GotADeal } from "@/components/GotADeal"
import { Pricing } from "@/components/Pricing"
import { ContactForm } from "@/components/ContactForm"
import { MailingList } from "@/components/MailingList"
import { Footer } from "@/components/Footer"

export function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeSource />
      <CaseStudy />
      <HowItWorks />
      <WhyUs />
      <CoverageMap />
      <Pricing />
      <GotADeal />
      <ContactForm />
      <MailingList />
      <Footer />
    </main>
  )
}
