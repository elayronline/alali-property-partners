import Image from "next/image"

/** The original Alali Property Partners lockup (gold "A" + wordmark).
    Background keyed transparent so it sits cleanly on the dark surface. */
export function Logo({ height = 40, className = "" }: { height?: number; className?: string }) {
  // Source lockup is 612 × 165
  const width = Math.round((height * 612) / 165)
  return (
    <Image
      src="/logo-dark.png"
      alt="Alali Property Partners"
      width={width}
      height={height}
      priority
      className={className}
    />
  )
}
