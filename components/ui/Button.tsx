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
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"

  const variants = {
    primary:
      "bg-gradient-to-r from-gold-dark via-gold to-gold text-dark-bg hover:from-gold hover:via-gold-light hover:to-gold-light",
    secondary: "border-2 border-gold text-gold hover:bg-gold hover:text-dark-bg",
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
