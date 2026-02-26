"use client"

import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { WhatWeSource } from "@/components/WhatWeSource"
import { HowItWorks } from "@/components/HowItWorks"
import { WhyUs } from "@/components/WhyUs"
import { WhatsAppCTA } from "@/components/WhatsAppCTA"
import { GotADeal } from "@/components/GotADeal"
import { Pricing } from "@/components/Pricing"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeSource />
      <HowItWorks />
      <WhyUs />
      <WhatsAppCTA />
      <GotADeal />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  )
}
