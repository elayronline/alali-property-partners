import Image from "next/image"

// Feather the cropped lockup's edges to transparent so it dissolves into the
// dark surface (the source artwork sits on a graded dark background).
const edgeFade =
  "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%), linear-gradient(180deg, transparent 0, #000 11%, #000 89%, transparent 100%)"

/** The original Alali Property Partners lockup (gold "A" + wordmark) on dark.
    Source artwork — unchanged. */
export function Logo({ height = 40, className = "" }: { height?: number; className?: string }) {
  // Source lockup is 652 × 210
  const width = Math.round((height * 652) / 210)
  return (
    <Image
      src="/logo-dark.png"
      alt="Alali Property Partners"
      width={width}
      height={height}
      priority
      className={className}
      style={{
        WebkitMaskImage: edgeFade,
        maskImage: edgeFade,
        WebkitMaskComposite: "source-in",
        maskComposite: "intersect",
      }}
    />
  )
}
