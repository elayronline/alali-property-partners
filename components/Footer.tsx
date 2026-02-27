import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-dark-bg px-4 pt-16 pb-8 sm:px-6">
      {/* Gold divider */}
      <div className="mx-auto mb-12 h-px max-w-6xl bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-5xl">
        {/* Logo */}
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Alali Property Partners" width={160} height={50} />
        </div>

        {/* Contact info */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href="mailto:contact@alalipropertypartners.com"
            className="flex items-center gap-2 text-sm text-muted-dark transition-colors hover:text-gold"
          >
            <Mail className="h-4 w-4" />
            contact@alalipropertypartners.com
          </a>
          <a
            href="tel:+447802816863"
            className="flex items-center gap-2 text-sm text-muted-dark transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" />
            +44 7802 816863
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://www.instagram.com/alalipropertypartners"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted-dark transition-colors hover:border-gold/40 hover:text-gold"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/447802816863"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted-dark transition-colors hover:border-gold/40 hover:text-gold"
            aria-label="Message us on WhatsApp"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

        {/* Honest trust signals */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-muted-dark">
            Company No. 17057401
          </span>
          <span className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-muted-dark">
            Professional Indemnity Insured
          </span>
          <span className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-muted-dark">
            Transparent Pricing
          </span>
        </div>

        {/* Gold divider */}
        <div className="mx-auto mt-10 h-px max-w-md bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

        {/* Links and copyright */}
        <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
          <div className="flex gap-4 text-xs text-muted-dark/60">
            <Link href="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold">
              Terms of Service
            </Link>
          </div>
          <p className="text-xs text-muted-dark/60">
            &copy; 2026 Alali Property Partners Ltd. 86-90 Paul Street, London EC2A 4NE.
          </p>
        </div>
      </div>
    </footer>
  )
}
