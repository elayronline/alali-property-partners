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
  "w-full rounded-lg border border-muted-dark/30 bg-dark-bg px-4 py-3 text-sm text-white placeholder:text-muted-dark focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"

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
      <select className={`${inputStyles} appearance-none`} {...props}>
        <option value="">{placeholderText || "Select..."}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
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
