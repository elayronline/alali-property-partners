"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { useSmartNav } from "@/lib/smartNav"

const trustStrip = [
  "Every deal verified before you see it",
  "Complete deal pack included",
  "Covering the whole of England & Wales",
]

export function Hero() {
  const navigate = useSmartNav()
  const handleSellerClick = () => {
    window.dispatchEvent(new CustomEvent("preselect-role", { detail: "Property Owner" }))
    navigate("contact")
  }

  const handleInvestorClick = () => {
    window.dispatchEvent(new CustomEvent("preselect-role", { detail: "Investor" }))
    navigate("contact")
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[80dvh] items-center justify-center overflow-hidden bg-dark-bg px-4 pt-24 pb-16 sm:min-h-[85dvh] sm:px-6 sm:pt-20"
    >
      {/* Background video — UK aerial. Muted, looped, no controls. */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero-bg.webm" type="video/webm" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlay: dark gradient + vignette + subtle gold gridlines for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark-bg/85 via-dark-bg/70 to-dark-bg" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,168,67,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(13,13,13,0.6) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ y: 8 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-[1.75rem] leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          Real Deals. Real Numbers.{" "}
          <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            No Guesswork.
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 8 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg"
        >
          We source verified property deals across England &amp; Wales — off-market and on-market —
          delivered ready to go with a complete deal pack.
        </motion.p>

        <motion.div
          initial={{ y: 8 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-center"
        >
          <button
            onClick={handleInvestorClick}
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-gold px-8 py-4 text-base font-semibold text-dark-bg transition-colors hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-bg"
          >
            Find Me a Deal
          </button>
          <Button variant="secondary" size="large" onClick={handleSellerClick}>
            I Have a Property to Move
          </Button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-0"
        >
          {trustStrip.map((item, i) => (
            <div key={item} className="flex items-center">
              {i > 0 && (
                <span className="mx-3 hidden h-3 w-px bg-white/20 sm:block" />
              )}
              <span className="flex items-center gap-2 text-xs font-medium tracking-wide text-white/75">
                <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-gold sm:hidden" />
                {item}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
