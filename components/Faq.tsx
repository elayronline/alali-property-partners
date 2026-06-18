"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionDivider } from "@/components/ui/SectionDivider"

// Matches the shape of a schema.org FAQPage `mainEntity` entry, so a page can
// pass the SAME array it uses to build its FAQPage JSON-LD. That guarantees the
// visible Q&A mirrors the structured data — which Google requires, and which
// gives answer engines citable on-page text.
interface FaqItem {
  name: string
  acceptedAnswer: { text: string }
}

interface FaqProps {
  items: FaqItem[]
  heading?: string
  intro?: string
}

/**
 * Visible, accessible FAQ accordion. The answer text is ALWAYS rendered in the
 * DOM (collapsed with a CSS grid-rows transition, not conditionally mounted) so
 * it is present in the server-rendered HTML for crawlers and AI answer engines.
 */
export function Faq({ items, heading = "Frequently asked questions", intro }: FaqProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28">
      <div className="animated-grid pointer-events-none absolute inset-0" />
      <SectionDivider variant="dark" className="relative mb-16" />
      <div className="relative mx-auto max-w-3xl">
        <h2 className="font-display text-center text-3xl text-white sm:text-4xl">{heading}</h2>
        {intro && <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/60">{intro}</p>}
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.name}>
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`font-display text-base tracking-tight transition-colors sm:text-lg ${
                        isOpen ? "text-gold" : "text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                {/* grid-rows trick keeps the answer in the DOM (SEO/AEO) while animating height */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-white/70">
                      {item.acceptedAnswer.text}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
