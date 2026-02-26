"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { scrollToSection } from "@/lib/smoothScroll"

export function Hero() {
  const handleInvestorClick = () => {
    window.dispatchEvent(new CustomEvent("preselect-role", { detail: "Investor" }))
    scrollToSection("contact")
  }

  const handleSellerClick = () => {
    window.dispatchEvent(new CustomEvent("preselect-role", { detail: "Motivated Seller" }))
    scrollToSection("contact")
  }

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center bg-dark-bg px-4 pt-20 pb-16 sm:px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Decorative gold line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-8 h-px bg-gradient-to-r from-gold-dark via-gold to-gold-light"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          We Find Property Deals You Won&apos;t Find on Your Own.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
        >
          Off-market opportunities, below market value, fully researched — delivered directly to you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mx-auto mt-4 max-w-xl text-sm text-muted-dark"
        >
          Every deal checked against Land Registry data, rental comparables, and area demand before
          it reaches you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button size="large" onClick={handleInvestorClick}>
            I&apos;m Looking for Deals
          </Button>
          <Button variant="secondary" size="large" onClick={handleSellerClick}>
            I Have a Deal to Submit
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-xs text-muted-dark"
        >
          Currently sourcing across England and Wales
        </motion.p>
      </div>
    </section>
  )
}
