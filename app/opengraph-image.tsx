// Serves the branded Open Graph banner at /opengraph-image (the URL every page's
// metadata references for og:image and twitter:image). We serve the static
// brand asset rather than generating one, reading the co-located file via the
// import.meta.url pattern so it's bundled for the edge runtime.
export const runtime = "edge"
export const alt = "Alali Property Partners — HMO & BRR Sourcing, London & the South East"
export const size = { width: 1200, height: 630 }
export const contentType = "image/jpeg"

export default async function OGImage() {
  const data = await fetch(new URL("./og-banner.jpg", import.meta.url)).then((r) =>
    r.arrayBuffer(),
  )
  return new Response(data, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
