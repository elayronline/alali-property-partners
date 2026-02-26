"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { scrollToSection } from "@/lib/smoothScroll"

const trustStrip = ["48hr Deal Assessment", "Full Deal Pack Included", "England & Wales Coverage"]

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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark-bg px-4 pt-20 pb-16 sm:px-6"
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
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
          Off-Market Deals. Verified Numbers.{" "}
          <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
            Ready to Act.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
        >
          BMV and off-market property deals, fully researched with comparables, yields, and exit
          strategies — delivered to your WhatsApp.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mx-auto mt-4 max-w-xl text-sm text-muted-dark"
        >
          Every deal backed by Land Registry comparables, verified rental yields, and area demand
          analysis.
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

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mx-auto mt-10 flex max-w-lg flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-0"
        >
          {trustStrip.map((item, i) => (
            <div key={item} className="flex items-center">
              {i > 0 && (
                <span className="mx-4 hidden h-3 w-px bg-gold/30 sm:block" />
              )}
              <span className="text-xs font-medium tracking-wide text-gold/70">{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-6 text-xs text-muted-dark/60"
        >
          Currently sourcing across England and Wales
        </motion.p>
      </div>
    </section>
  )
}
