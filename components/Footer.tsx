import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="safe-bottom relative overflow-hidden bg-dark-bg px-4 pt-20 pb-10 sm:px-6 sm:pt-24">
      <div className="animated-grid pointer-events-none absolute inset-0 opacity-60" />

      {/* Top gold spark divider */}
      <div className="relative mx-auto mb-16 flex max-w-6xl items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand + intro */}
          <div>
            <Image src="/logo.png" alt="Alali Property Partners" width={150} height={48} />
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/55">
              Specialist sourcing of high-yield HMO and conversion-ready BRR deals across Greater
              London and the South East. We connect investors with verified deals and the regulated
              professionals they need.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.instagram.com/alalipropertypartners"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-200 hover:border-gold hover:text-gold hover:shadow-[0_0_18px_-4px_rgba(201,160,61,0.5)]"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Get in touch
            </p>
            <ul className="mt-6 space-y-3.5 text-sm text-white/65">
              <li>
                <a
                  href="mailto:contact@alalipropertypartners.com"
                  className="group inline-flex items-start gap-2.5 transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold/60 transition-colors group-hover:text-gold" strokeWidth={1.5} />
                  <span className="break-all">contact@alalipropertypartners.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+442045158438"
                  className="group inline-flex items-start gap-2.5 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold/60 transition-colors group-hover:text-gold" strokeWidth={1.5} />
                  020 4515 8438
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/60" strokeWidth={1.5} />
                <span>
                  86-90 Paul Street
                  <br />
                  London EC2A 4NE
                </span>
              </li>
            </ul>
          </div>

          {/* Sitemap */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Site</p>
            <ul className="mt-6 space-y-3 text-sm text-white/65">
              <li>
                <Link href="/hmo-sourcing" className="transition-colors hover:text-gold">
                  HMO &amp; BRR Sourcing
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="transition-colors hover:text-gold">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="transition-colors hover:text-gold">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-gold">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="transition-colors hover:text-gold">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/development-management" className="transition-colors hover:text-gold">
                  Development Management
                </Link>
              </li>
              <li>
                <Link href="/bespoke" className="transition-colors hover:text-gold">
                  Bespoke Sourcing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory blurb */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/40">
            Alali Property Partners Ltd is a property deal sourcing and introducer company
            registered in England and Wales (Company No. 17057401). Property deal sourcing and
            introduction is not a regulated activity. We do not provide financial, mortgage,
            tax, or legal advice — regulated services are delivered by the independent
            FCA-regulated brokers, qualified solicitors, and other appropriately authorised
            professionals we introduce.
          </p>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-center text-[0.65rem] leading-relaxed text-white/40 sm:text-left sm:text-xs">
            &copy; 2026 Alali Property Partners Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/55">
            <Link href="/privacy" className="transition-colors hover:text-gold">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-gold">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
