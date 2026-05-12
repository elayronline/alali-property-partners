import type { LucideIcon } from "lucide-react"

interface CardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function Card({ icon: Icon, title, description, className = "" }: CardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/20 via-gold/8 to-gold/20 p-[1px] shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_15px_40px_-12px_rgba(201,160,61,0.25)] ${className}`}
    >
      <div className="relative h-full rounded-[calc(1rem-1px)] bg-white p-6 sm:p-7">
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[calc(1rem-1px)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(201,160,61,0.1), transparent 70%)",
          }}
        />
        <div className="relative">
          <Icon className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
          <h3 className="font-display mt-5 text-xl tracking-tight text-charcoal">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-light">{description}</p>
        </div>
      </div>
    </div>
  )
}
