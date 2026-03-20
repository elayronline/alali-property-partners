"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { scrollToSection } from "@/lib/smoothScroll"

const trustStrip = [
  "Every deal verified before you see it",
  "Complete deal pack included",
  "Covering the whole of England & Wales",
]

export function Hero() {
  const handleSellerClick = () => {
    window.dispatchEvent(new CustomEvent("preselect-role", { detail: "Property Owner" }))
    scrollToSection("contact")
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark-bg px-4 pt-24 pb-16 sm:px-6 sm:pt-28"
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
          className="mx-auto mb-8 h-px bg-gold/40"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[1.75rem] font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Real Deals. Real Numbers.{" "}
          <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
            No Guesswork.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          We find below-market-value and off-market property deals across England &amp; Wales,
          verify every number, and deliver them ready to go — complete with a full deal pack,
          comparables, and exit strategy. Browse our live marketplace or tell us what you&apos;re
          looking for.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mx-auto mt-4 max-w-xl text-sm text-white/60"
        >
          Whether you&apos;re looking for your next investment or need to move a property — start
          here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center"
        >
          <a
            href="https://alalipropertypartnersdeals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-base font-semibold text-dark-bg transition-colors hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-bg"
          >
            Browse Deals
          </a>
          <Button variant="secondary" size="large" onClick={handleSellerClick}>
            I Have a Property to Move
          </Button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-0"
        >
          {trustStrip.map((item, i) => (
            <div key={item} className="flex items-center">
              {i > 0 && (
                <span className="mx-3 hidden h-3 w-px bg-gold/30 sm:block" />
              )}
              <span className="flex items-center gap-2 text-[0.7rem] font-medium tracking-wide text-gold/80 sm:text-xs">
                <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-gold/40 sm:hidden" />
                {item}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
