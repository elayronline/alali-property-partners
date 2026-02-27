import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Alali Property Partners — Property Deal Sourcing"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0D0D0D",
          padding: "60px",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            display: "flex",
            width: 80,
            height: 3,
            background: "linear-gradient(to right, #B8860B, #D4A843, #C5941A)",
            marginBottom: 40,
          }}
        />

        {/* Company name */}
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Alali Property Partners
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#D4A843",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Real Deals. Real Numbers. No Guesswork.
        </div>

        {/* Description */}
        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          Verified property deals for investors across England & Wales. BTL, BRR,
          R2R, HMO, flips — complete deal packs with transparent fees.
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 40,
            gap: 30,
            fontSize: 16,
            color: "rgba(212,168,67,0.6)",
          }}
        >
          <span>alalipropertypartners.com</span>
          <span>•</span>
          <span>Company No. 17057401</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
