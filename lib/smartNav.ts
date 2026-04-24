"use client"

import { usePathname, useRouter } from "next/navigation"
import { scrollToSection } from "./smoothScroll"

const SECTION_ROUTES: Record<string, string> = {
  hero: "/",
  "how-it-works": "/how-it-works",
  "why-us": "/why-us",
  pricing: "/pricing",
  contact: "/contact",
}

export function useSmartNav() {
  const pathname = usePathname()
  const router = useRouter()

  return (section: string) => {
    const onHome = pathname === "/"
    if (onHome) {
      scrollToSection(section)
      return
    }
    const target = SECTION_ROUTES[section] ?? `/#${section}`
    router.push(target)
  }
}
