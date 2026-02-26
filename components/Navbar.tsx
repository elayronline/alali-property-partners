"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { scrollToSection } from "@/lib/smoothScroll"

const navLinks = [
  { label: "What We Source", href: "what-we-source" },
  { label: "How It Works", href: "how-it-works" },
  { label: "Why Us", href: "why-us" },
  { label: "Pricing", href: "pricing" },
  { label: "Contact", href: "contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-bg/95 backdrop-blur-sm shadow-lg" : "bg-dark-bg"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer"
          aria-label="Back to top"
        >
          <Image src="/logo.png" alt="Alali Property Partners" width={140} height={44} priority />
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="cursor-pointer text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("whatsapp-cta")}
            className="cursor-pointer rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-dark-bg transition-colors hover:bg-gold-light"
          >
            Get Deals First
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-gold lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-dark-bg px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full cursor-pointer py-3 text-left text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("whatsapp-cta")}
            className="mt-2 w-full cursor-pointer rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-dark-bg transition-colors hover:bg-gold-light"
          >
            Get Deals First
          </button>
        </div>
      )}
    </nav>
  )
}
