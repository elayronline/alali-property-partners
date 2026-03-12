export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-gold/40 px-3.5 py-1.5 text-xs text-charcoal transition-colors duration-200 sm:px-4 sm:text-sm md:hover:border-gold md:hover:bg-gold md:hover:text-dark-bg">
      {children}
    </span>
  )
}
