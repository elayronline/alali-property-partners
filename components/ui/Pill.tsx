export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-gold/40 px-4 py-1.5 text-sm text-charcoal transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-dark-bg">
      {children}
    </span>
  )
}
