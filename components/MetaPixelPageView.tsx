"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Fires a Meta Pixel PageView on client-side route changes.
 *
 * The base pixel script in the root layout fires PageView once on the initial
 * full load. App Router navigations are client-side, so without this they'd
 * never be tracked. We skip the first render to avoid double-counting that
 * initial PageView, then track each subsequent pathname change.
 */
export function MetaPixelPageView() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    window.fbq?.("track", "PageView")
  }, [pathname])

  return null
}
