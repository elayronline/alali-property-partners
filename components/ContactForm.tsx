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
    selectedRole === "Motivated Seller" ||
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
            <h2 className="text-3xl font-bold text-white">
              Thanks — we&apos;ll be in touch within 24 hours.
            </h2>
            <p className="mt-4 text-muted-dark">Keep an eye on your inbox and WhatsApp.</p>
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
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Let&apos;s Talk</h2>
          <p className="mt-3 text-muted-dark">
            Whether you&apos;re looking for deals or have one to submit — start here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 rounded-2xl border border-white/5 bg-dark-bg-light p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Always visible fields */}
            <div className="grid gap-4 sm:grid-cols-2">
              <FormInput
                placeholder="Full name"
                {...register("fullName")}
                error={errors.fullName?.message}
              />
              <FormInput
                type="email"
                placeholder="Email"
                {...register("email")}
                error={errors.email?.message}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormInput
                type="tel"
                placeholder="Phone number"
                {...register("phone")}
                error={errors.phone?.message}
              />
              <FormSelect
                options={roleOptions}
                placeholderText="I am a..."
                {...register("role")}
                error={errors.role?.message}
              />
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
                      <FormSelect
                        options={strategyOptions}
                        placeholderText="Strategy"
                        {...register("strategy")}
                      />
                      <FormSelect
                        options={budgetOptions}
                        placeholderText="Budget range"
                        {...register("budget")}
                      />
                    </div>
                    <FormInput
                      placeholder="Preferred area(s)"
                      {...register("preferredAreas")}
                    />
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
                      <FormInput
                        placeholder="Property address or area"
                        {...register("propertyAddress")}
                      />
                      <FormInput
                        placeholder="Asking price (£)"
                        type="text"
                        inputMode="numeric"
                        {...register("askingPrice")}
                      />
                    </div>
                    <FormSelect
                      options={propertyTypeOptions}
                      placeholderText="Property type"
                      {...register("propertyType")}
                    />
                    <FormTextarea placeholder="Brief details" {...register("briefDetails")} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Always visible bottom fields */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="whatsapp-broadcast"
                className="mt-1 h-4 w-4 accent-gold"
                {...register("whatsappBroadcast")}
              />
              <label htmlFor="whatsapp-broadcast" className="text-sm text-muted-dark">
                Add me to the Alali WhatsApp Deal Broadcast for first access to new deals
              </label>
            </div>

            <FormSelect
              options={hearAboutOptions}
              placeholderText="How did you hear about us?"
              {...register("hearAbout")}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold px-8 py-3.5 text-base font-bold text-dark-bg transition-all hover:from-gold hover:via-gold-light hover:to-gold-light focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-bg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send →"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
