"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useSmartNav } from "@/lib/smartNav"

export function Hero() {
  const navigate = useSmartNav()

  const handleBrief = () => {
    window.dispatchEvent(new CustomEvent("preselect-role", { detail: "Investor" }))
    navigate("contact")
  }

  return (
    <section id="hero" className="relative min-h-[90dvh] overflow-hidden bg-ink">
      {/* Photography — full-bleed on mobile, right ~58% on desktop.
          Swap public/hero-street.jpg with the exact London-street shot. */}
      <div className="absolute inset-0 lg:left-[42%]">
        <Image
          src="/hero-street.jpg"
          alt="Period terraced houses at dusk across London and the South East"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Fade the photo into the ink panel */}
        <div className="absolute inset-0 bg-ink/60 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/75 to-transparent lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90dvh] max-w-6xl items-center px-4 sm:px-6">
        <div className="max-w-xl py-32">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-[2.4rem] leading-[1.08] text-white sm:text-5xl lg:text-[3.6rem]"
          >
            High-Yield HMOs &amp; Conversion-Ready Deals.{" "}
            <span className="text-gold">Sourced for You.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Verified HMO and BRR opportunities across London and the South East.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9"
          >
            <button onClick={handleBrief} className="btn-gold cursor-pointer px-8 py-4 text-sm">
              Tell Us Your Brief
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="mt-10 h-px w-16 bg-gold/60" />
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              Off-market. Direct-to-vendor. Pre-auction.
              <br />
              Every opportunity reviewed before introduction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
