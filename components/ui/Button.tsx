"use client"

import { type ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "default" | "large"
}

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-bg"

  const variants = {
    primary:
      "bg-gold text-dark-bg shadow-[0_4px_18px_-6px_rgba(201,160,61,0.5)] hover:bg-gold-light hover:shadow-[0_8px_28px_-6px_rgba(201,160,61,0.65)]",
    secondary:
      "border border-gold/70 text-gold hover:border-gold hover:bg-gold hover:text-dark-bg hover:shadow-[0_6px_22px_-8px_rgba(201,160,61,0.5)]",
  }

  const sizes = {
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
