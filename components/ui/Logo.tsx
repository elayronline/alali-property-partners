type LogoProps = {
  markSize?: number
  showText?: boolean
  /** wordmark colour — defaults to white for dark backgrounds */
  textClassName?: string
  subClassName?: string
  className?: string
}

/** The gold "A" triangle mark — a two-tone folded triangle echoing the brand logo. */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="alali-gold-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F3D580" />
          <stop offset="55%" stopColor="#DEBB5C" />
          <stop offset="100%" stopColor="#C9A03D" />
        </linearGradient>
        <linearGradient id="alali-gold-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A03D" />
          <stop offset="100%" stopColor="#8A6614" />
        </linearGradient>
      </defs>
      {/* left face — lighter */}
      <path d="M50 7 L7 93 L29 93 L50 47 Z" fill="url(#alali-gold-light)" />
      {/* right face — darker fold */}
      <path d="M50 7 L93 93 L71 93 L50 47 Z" fill="url(#alali-gold-dark)" />
      {/* crossbar */}
      <path d="M34 67 L66 67 L61.5 77 L38.5 77 Z" fill="url(#alali-gold-light)" />
    </svg>
  )
}

export function Logo({
  markSize = 38,
  showText = true,
  textClassName = "text-white",
  subClassName = "text-gold/80",
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={markSize} />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-[1.65rem] font-medium leading-none ${textClassName}`}>
            Alali
          </span>
          <span
            className={`mt-1 text-[0.5rem] font-semibold uppercase leading-none tracking-[0.3em] ${subClassName}`}
          >
            Property Partners
          </span>
        </span>
      )}
    </span>
  )
}
