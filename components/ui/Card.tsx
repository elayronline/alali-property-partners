import type { LucideIcon } from "lucide-react"

interface CardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function Card({ icon: Icon, title, description, className = "" }: CardProps) {
  return (
    <div className={`rounded-xl border border-gray-100 bg-white p-6 ${className}`}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
        <Icon className="h-6 w-6 text-gold" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-charcoal">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-light">{description}</p>
    </div>
  )
}
