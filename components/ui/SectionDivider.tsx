interface SectionDividerProps {
  variant?: "light" | "dark"
  className?: string
}

// Standardised section divider — a thin rule on each side with a small
// gold spark in the centre. Use variant="light" inside light sections
// (warm-grey / white bg) and variant="dark" inside dark-bg sections.
export function SectionDivider({ variant = "light", className = "" }: SectionDividerProps) {
  const rule = variant === "dark" ? "bg-white/10" : "bg-gray-200"
  return (
    <div
      className={`mx-auto flex max-w-6xl items-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span className={`h-px flex-1 ${rule}`} />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
      <span className={`h-px flex-1 ${rule}`} />
    </div>
  )
}
