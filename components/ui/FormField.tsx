import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: readonly string[]
  placeholderText?: string
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const inputStyles =
  "w-full rounded-lg border border-white/15 bg-dark-bg/60 px-4 py-3 text-sm text-white placeholder:text-white/35 transition-all duration-200 hover:border-gold/40 focus:border-gold focus:outline-none focus:shadow-[0_0_0_4px_rgba(201,160,61,0.15)]"

export function FormInput({ label, error, ...props }: InputProps) {
  return (
    <div>
      {label && <label className="mb-1.5 block text-sm font-medium text-white">{label}</label>}
      <input className={inputStyles} {...props} />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  )
}

export function FormSelect({ label, error, options, placeholderText, ...props }: SelectProps) {
  return (
    <div>
      {label && <label className="mb-1.5 block text-sm font-medium text-white">{label}</label>}
      <div className="relative">
        <select className={`${inputStyles} appearance-none pr-10`} {...props}>
          <option value="">{placeholderText || "Select..."}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg className="h-4 w-4 text-muted-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  )
}

export function FormTextarea({ label, error, ...props }: TextareaProps) {
  return (
    <div>
      {label && <label className="mb-1.5 block text-sm font-medium text-white">{label}</label>}
      <textarea className={inputStyles} rows={3} {...props} />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  )
}
