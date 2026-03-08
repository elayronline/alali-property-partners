"use client"

import { useRef, useEffect, useCallback } from "react"
import SignaturePadLib from "signature_pad"

interface SignaturePadProps {
  onEnd?: (dataUrl: string) => void
  width?: number
  height?: number
}

export function SignaturePad({ onEnd, width = 500, height = 160 }: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const padRef = useRef<SignaturePadLib | null>(null)
  const onEndRef = useRef(onEnd)
  const savedDataRef = useRef<string>("")

  // Keep onEnd ref stable to avoid re-creating the pad
  onEndRef.current = onEnd

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const pad = padRef.current
    if (!canvas || !pad) return
    const container = canvas.parentElement
    if (!container) return

    // Save current signature data before resize
    if (!pad.isEmpty()) {
      savedDataRef.current = pad.toDataURL("image/png")
    }

    const ratio = Math.min(window.devicePixelRatio || 1, 2) // Cap at 2x to reduce PNG size
    const w = Math.min(container.clientWidth, width)
    canvas.width = w * ratio
    canvas.height = height * ratio
    canvas.style.width = `${w}px`
    canvas.style.height = `${height}px`
    const ctx = canvas.getContext("2d")
    if (ctx) ctx.scale(ratio, ratio)
    pad.clear()

    // Restore saved signature after resize
    if (savedDataRef.current) {
      pad.fromDataURL(savedDataRef.current, {
        width: w,
        height,
      })
    }
  }, [width, height])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const pad = new SignaturePadLib(canvas, {
      penColor: "#1a1a1a",
      backgroundColor: "rgba(255,255,255,0)",
    })
    pad.addEventListener("endStroke", () => {
      const data = pad.toDataURL("image/png")
      savedDataRef.current = data
      onEndRef.current?.(data)
    })
    padRef.current = pad

    // Initial sizing
    const container = canvas.parentElement
    if (container) {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.min(container.clientWidth, width)
      canvas.width = w * ratio
      canvas.height = height * ratio
      canvas.style.width = `${w}px`
      canvas.style.height = `${height}px`
      const ctx = canvas.getContext("2d")
      if (ctx) ctx.scale(ratio, ratio)
    }

    window.addEventListener("resize", resizeCanvas)
    return () => {
      pad.clear()
      pad.off()
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [resizeCanvas, width, height])

  const clear = () => {
    padRef.current?.clear()
    savedDataRef.current = ""
    onEndRef.current?.("")
  }

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-white/20 bg-white">
        <canvas
          ref={canvasRef}
          className="touch-none"
          role="img"
          aria-label="Signature pad — draw your signature here"
        />
      </div>
      <button
        type="button"
        onClick={clear}
        className="mt-2 cursor-pointer text-xs text-gold hover:text-gold-light"
      >
        Clear signature
      </button>
    </div>
  )
}
