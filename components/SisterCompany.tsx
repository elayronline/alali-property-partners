import { ArrowUpRight } from "lucide-react"

/**
 * Cross-link to the sister company, Alali Homes (guaranteed rent / corporate lets).
 * Placed where a buyer's next question is "who will let and run it?": after the
 * sourcing steps and on the hands-off page. Copy describes Alali Homes' own published
 * offer and says plainly it is a separate company; APP itself still guarantees nothing.
 */
export const ALALI_HOMES_URL = "https://www.alalihomes.com/hmo-guaranteed-rent"

export function SisterCompany({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto flex max-w-2xl flex-col gap-4 rounded-sm border border-gold/20 bg-white/[0.03] px-6 py-6 sm:flex-row sm:items-center sm:gap-8 ${className}`}
    >
      <div className="flex-1 text-center sm:text-left">
        <p className="text-[0.65rem] font-semibold uppercase tracking-luxe text-gold">
          After completion
        </p>
        <p className="mt-2 font-display text-lg text-white">
          Want your HMO let on guaranteed rent, with hands-off management?
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-white/55">
          Our sister company, Alali Homes, leases HMOs and other residential property from
          landlords on 3 to 5 year corporate leases, paying a fixed rent every month and managing
          the property for the whole term. Alali Homes is a separate company and any lease is
          agreed directly with them.
        </p>
      </div>
      <a
        href={ALALI_HOMES_URL}
        target="_blank"
        rel="noopener"
        className="btn-gold-outline inline-flex shrink-0 items-center justify-center gap-1.5 self-center px-5 py-2.5 text-[0.7rem]"
      >
        Visit Alali Homes
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
      </a>
    </div>
  )
}
