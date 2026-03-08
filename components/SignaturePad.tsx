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
  const pointDataRef = useRef<ReturnType<SignaturePadLib["toData"]> | undefined>(undefined)

  // Keep onEnd ref stable to avoid re-creating the pad
  onEndRef.current = onEnd

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const container = canvas.parentElement
    if (!container) return

    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    const w = Math.min(container.clientWidth, width)
    canvas.width = w * ratio
    canvas.height = height * ratio
    canvas.style.width = `${w}px`
    canvas.style.height = `${height}px`
    const ctx = canvas.getContext("2d")
    if (ctx) ctx.scale(ratio, ratio)
  }, [width, height])

  const resizeCanvas = useCallback(() => {
    const pad = padRef.current
    if (!pad) return

    // Save stroke point data (resolution-independent) before resize
    if (!pad.isEmpty()) {
      pointDataRef.current = pad.toData()
    }

    setupCanvas()
    pad.clear()

    // Restore from point data — no async image loading, no dimension issues
    if (pointDataRef.current && pointDataRef.current.length > 0) {
      pad.fromData(pointDataRef.current)
    }
  }, [setupCanvas])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const pad = new SignaturePadLib(canvas, {
      penColor: "#1a1a1a",
      backgroundColor: "rgba(255,255,255,0)",
    })
    pad.addEventListener("endStroke", () => {
      pointDataRef.current = pad.toData()
      onEndRef.current?.(pad.toDataURL("image/png"))
    })
    padRef.current = pad

    setupCanvas()

    window.addEventListener("resize", resizeCanvas)
    return () => {
      pad.clear()
      pad.off()
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [resizeCanvas, setupCanvas, width, height])

  const clear = () => {
    padRef.current?.clear()
    pointDataRef.current = undefined
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
