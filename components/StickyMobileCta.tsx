"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useSmartNav } from "@/lib/smartNav"

/**
 * Mobile-only sticky bottom CTA. Slides up once the visitor scrolls past the
 * hero (so it doesn't duplicate the hero's own button), keeping the primary
 * conversion action one tap away on long pages. Hidden on desktop (the navbar
 * already carries the CTA) and on /contact (the form is already the page).
 */
export function StickyMobileCta() {
  const pathname = usePathname()
  const navigate = useSmartNav()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (pathname === "/contact") return null

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="safe-bottom border-t border-gold/20 bg-ink/95 px-4 pb-3 pt-3 shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.6)] backdrop-blur-sm">
        <button
          type="button"
          onClick={() => navigate("contact")}
          tabIndex={show ? 0 : -1}
          className="btn-gold block w-full cursor-pointer px-5 py-3.5 text-center text-sm font-bold"
        >
          Tell Us Your Brief →
        </button>
      </div>
    </div>
  )
}
