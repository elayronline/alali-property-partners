"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import {
  contactFormSchema,
  type ContactFormData,
  roleOptions,
  strategyOptions,
  budgetOptions,
  propertyTypeOptions,
  hearAboutOptions,
} from "@/lib/formSchema"
import { FormInput, FormSelect, FormTextarea } from "@/components/ui/FormField"

export function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      whatsappBroadcast: true,
    },
  })

  const selectedRole = watch("role")

  const isInvestor = selectedRole === "Investor"
  const isSeller =
    selectedRole === "Property Owner" ||
    selectedRole === "Estate Agent" ||
    selectedRole === "Sourcer"

  // Listen for pre-selection events from CTAs
  useEffect(() => {
    const handler = (e: Event) => {
      const role = (e as CustomEvent).detail
      setValue("role", role)
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
    window.addEventListener("preselect-role", handler)
    return () => window.removeEventListener("preselect-role", handler)
  }, [setValue])

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submission:", data)
  }

  if (isSubmitSuccessful) {
    return (
      <section id="contact" className="bg-dark-bg px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
              <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">
              Thanks — we&apos;ll be in touch soon.
            </h2>
            <p className="mt-4 text-white/60">
              We typically respond within a few hours during business hours. Check your inbox and WhatsApp.
            </p>
            <button
              onClick={() => reset()}
              className="mt-6 cursor-pointer text-sm text-gold transition-colors hover:text-gold-light"
            >
              Submit another enquiry
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-dark-bg px-4 py-20 sm:px-6 sm:py-28">
      {/* Gold divider */}
      <div className="mx-auto mb-16 h-px max-w-6xl bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Get Started</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Start a Conversation
          </h2>
          <p className="mt-3 text-white/60">
            Whether you&apos;re looking for deals or have a property to move — start here.
          </p>
        </motion.div>

        {/* Reassurance strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-white/40"
        >
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-gold/60" aria-hidden="true">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            No obligation
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-gold/60" aria-hidden="true">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            No upfront fees
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-gold/60" aria-hidden="true">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            We respond fast
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 rounded-2xl border border-white/5 bg-dark-bg-light p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Always visible fields */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-1.5 block text-xs font-medium text-white/50">
                  Full name <span className="text-gold">*</span>
                </label>
                <FormInput
                  id="fullName"
                  placeholder="Your full name"
                  {...register("fullName")}
                  error={errors.fullName?.message}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/50">
                  Email <span className="text-gold">*</span>
                </label>
                <FormInput
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                  error={errors.email?.message}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-white/50">
                  Phone <span className="text-gold">*</span>
                </label>
                <FormInput
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  {...register("phone")}
                  error={errors.phone?.message}
                />
              </div>
              <div>
                <label htmlFor="role" className="mb-1.5 block text-xs font-medium text-white/50">
                  I am a... <span className="text-gold">*</span>
                </label>
                <FormSelect
                  id="role"
                  options={roleOptions}
                  placeholderText="Select your role"
                  {...register("role")}
                  error={errors.role?.message}
                />
              </div>
            </div>

            {/* Investor fields */}
            <AnimatePresence>
              {isInvestor && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-2">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="strategy" className="mb-1.5 block text-xs font-medium text-white/50">
                          Strategy
                        </label>
                        <FormSelect
                          id="strategy"
                          options={strategyOptions}
                          placeholderText="Select strategy"
                          {...register("strategy")}
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="mb-1.5 block text-xs font-medium text-white/50">
                          Budget range
                        </label>
                        <FormSelect
                          id="budget"
                          options={budgetOptions}
                          placeholderText="Select budget"
                          {...register("budget")}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="preferredAreas" className="mb-1.5 block text-xs font-medium text-white/50">
                        Preferred area(s)
                      </label>
                      <FormInput
                        id="preferredAreas"
                        placeholder="e.g. Manchester, Birmingham, Leeds"
                        {...register("preferredAreas")}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Seller/Agent/Sourcer fields */}
            <AnimatePresence>
              {isSeller && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-2">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="propertyAddress" className="mb-1.5 block text-xs font-medium text-white/50">
                          Property address or area
                        </label>
                        <FormInput
                          id="propertyAddress"
                          placeholder="Address or general area"
                          {...register("propertyAddress")}
                        />
                      </div>
                      <div>
                        <label htmlFor="askingPrice" className="mb-1.5 block text-xs font-medium text-white/50">
                          Asking price
                        </label>
                        <FormInput
                          id="askingPrice"
                          placeholder="£"
                          type="text"
                          inputMode="numeric"
                          {...register("askingPrice")}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="propertyType" className="mb-1.5 block text-xs font-medium text-white/50">
                        Property type
                      </label>
                      <FormSelect
                        id="propertyType"
                        options={propertyTypeOptions}
                        placeholderText="Select type"
                        {...register("propertyType")}
                      />
                    </div>
                    <div>
                      <label htmlFor="briefDetails" className="mb-1.5 block text-xs font-medium text-white/50">
                        Brief details
                      </label>
                      <FormTextarea
                        id="briefDetails"
                        placeholder="Tell us a bit about the situation..."
                        {...register("briefDetails")}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Always visible bottom fields */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="whatsapp-broadcast"
                className="mt-1 h-5 w-5 cursor-pointer accent-gold"
                {...register("whatsappBroadcast")}
              />
              <label htmlFor="whatsapp-broadcast" className="text-sm text-white/50">
                Add me to the free WhatsApp Deal Broadcast
              </label>
            </div>

            <div>
              <label htmlFor="hearAbout" className="mb-1.5 block text-xs font-medium text-white/50">
                How did you hear about us?
              </label>
              <FormSelect
                id="hearAbout"
                options={hearAboutOptions}
                placeholderText="Select one"
                {...register("hearAbout")}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold px-8 py-4 text-base font-bold text-dark-bg transition-all hover:from-gold hover:via-gold-light hover:to-gold-light focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-bg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Get in Touch →"
              )}
            </button>

            <p className="text-center text-xs text-white/30">
              Your details are safe. We never share your information with third parties.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
