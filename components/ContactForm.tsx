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
import { SectionDivider } from "@/components/ui/SectionDivider"
import { buildEnquirySubject } from "@/lib/enquiryEmail"

export function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      mailingList: true,
    },
  })

  const selectedRole = watch("role")
  const briefPath = watch("briefPath")
  const enquiryType = watch("enquiryType")

  const isInvestor = selectedRole === "Investor"
  const isSeller =
    selectedRole === "Property Owner" ||
    selectedRole === "Estate Agent" ||
    selectedRole === "Sourcer"

  // Listen for pre-selection events from CTAs (role + optional enquiry tag).
  useEffect(() => {
    const roleHandler = (e: Event) => {
      const role = (e as CustomEvent).detail
      setValue("role", role)
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
    const enquiryHandler = (e: Event) => {
      const type = (e as CustomEvent).detail
      setValue("enquiryType", type)
      setValue("role", "Investor")
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
    window.addEventListener("preselect-role", roleHandler)
    window.addEventListener("preselect-enquiry", enquiryHandler)
    return () => {
      window.removeEventListener("preselect-role", roleHandler)
      window.removeEventListener("preselect-enquiry", enquiryHandler)
    }
  }, [setValue])

  // Pick up an enquiry/role tag passed via query param (cross-page CTAs,
  // e.g. /contact?enquiry=Development%20Management).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const enquiry = params.get("enquiry")
    const role = params.get("role")
    if (enquiry) {
      setValue("enquiryType", enquiry)
      setValue("role", "Investor")
    }
    if (role && (roleOptions as readonly string[]).includes(role)) {
      setValue("role", role as ContactFormData["role"])
    }
  }, [setValue])

  const onSubmit = async (data: ContactFormData) => {
    const isInvestorRole = data.role === "Investor"
    const isSellerRole =
      data.role === "Property Owner" ||
      data.role === "Estate Agent" ||
      data.role === "Sourcer"

    const formData = new FormData()
    formData.append("access_key", "4e50844e-651a-4107-9928-0fb0edd47d94")
    formData.append("subject", buildEnquirySubject(data))
    formData.append("from_name", "Alali Property Partners")
    formData.append("replyto", data.email)

    // Use clean field names that Web3Forms displays nicely
    formData.append("Name", data.fullName)
    formData.append("Email", data.email)
    formData.append("Phone", data.phone)
    formData.append("Role", data.role)
    if (data.enquiryType) formData.append("Enquiry Type", data.enquiryType)
    formData.append("Mailing List", data.mailingList ? "Yes" : "No")

    if (data.message) formData.append("Message", data.message)
    if (data.hearAbout) formData.append("Found Via", data.hearAbout)

    // Investor fields
    if (isInvestorRole) {
      if (data.briefPath) {
        formData.append(
          "Brief",
          data.briefPath === "known" ? "Knows what they want" : "Wants help shaping the brief",
        )
      }
      if (data.strategy) formData.append("Strategy", data.strategy)
      if (data.budget) formData.append("Budget", data.budget)
      if (data.preferredAreas) formData.append("Target Areas", data.preferredAreas)
      if (data.targetReturns) formData.append("Target Returns", data.targetReturns)
      if (data.timeline) formData.append("Timeline", data.timeline)
    }

    // Seller fields
    if (isSellerRole) {
      if (data.propertyAddress) formData.append("Property Address", data.propertyAddress)
      if (data.askingPrice) formData.append("Asking Price", `£${data.askingPrice}`)
      if (data.propertyType) formData.append("Property Type", data.propertyType)
      if (data.briefDetails) formData.append("Brief Details", data.briefDetails)
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()
      if (!result.success) {
        setError("root", { message: "Something went wrong. Please try again or email us directly." })
        return
      }

      // Record to the deal mailing list (only if opted in) and send the
      // branded thank-you email. Both run through the Apps Script web app via
      // /api/mailing-list — Web3Forms' free tier can't send a custom reply to
      // the prospect, so the thank-you is generated there with MailApp.
      // Non-blocking: the success screen shouldn't wait on email delivery.
      fetch("/api/mailing-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          name: data.fullName,
          source: "contact-form",
          record: data.mailingList,
          emailType: "contact",
          onMailingList: data.mailingList,
        }),
      }).catch(() => {})
    } catch {
      setError("root", { message: "Something went wrong. Please try again or email us directly." })
    }
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
              We&apos;ve got your enquiry and we&apos;ll be in touch. Keep an eye on your inbox.
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
      <SectionDivider variant="dark" className="mb-16" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Tell Us Your Brief
          </p>
          <h2 className="font-display mt-3 text-3xl text-white sm:text-5xl">
            Let&apos;s start with your brief
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Know exactly what you want, or just know you want HMO cashflow? Either works — start here
            and we&apos;ll shape the brief with you.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-dark-bg-light p-4 sm:rounded-2xl sm:p-8"
          >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Pre-tagged enquiry badge (e.g. Development Management) */}
            {enquiryType && (
              <div className="flex items-center justify-between gap-3 rounded-lg border border-gold/25 bg-gold/[0.06] px-4 py-2.5">
                <p className="text-sm text-white/75">
                  Enquiry: <span className="font-semibold text-gold">{enquiryType}</span>
                </p>
                <button
                  type="button"
                  onClick={() => setValue("enquiryType", undefined)}
                  className="cursor-pointer text-xs text-white/40 transition-colors hover:text-white/70"
                >
                  Clear
                </button>
              </div>
            )}

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

            {/* Investor brief — two-path intake */}
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
                    {/* Path chooser */}
                    <div>
                      <p className="mb-2 text-xs font-medium text-white/50">
                        Where are you up to?
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {[
                          { value: "known" as const, label: "I know what I'm looking for", hint: "Share your brief below" },
                          { value: "unsure" as const, label: "Help me figure it out", hint: "Not sure yet — that's fine" },
                        ].map((opt) => {
                          const active = briefPath === opt.value
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setValue("briefPath", opt.value)}
                              className={`cursor-pointer rounded-xl border p-4 text-left transition-all duration-200 ${
                                active
                                  ? "border-gold bg-gold/10 shadow-[0_8px_24px_-10px_rgba(201,160,61,0.4)]"
                                  : "border-white/10 hover:border-gold/40 hover:bg-white/[0.02]"
                              }`}
                            >
                              <p className={`text-sm font-medium ${active ? "text-white" : "text-white/75"}`}>
                                {opt.label}
                              </p>
                              <p className="mt-0.5 text-xs text-white/45">{opt.hint}</p>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Known path — optional brief fields */}
                    <AnimatePresence>
                      {briefPath === "known" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4 pt-1">
                            <p className="text-xs leading-relaxed text-white/45">
                              All optional — share what you have. Not sure of your numbers? That&apos;s
                              what the call is for.
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label htmlFor="strategy" className="mb-1.5 block text-xs font-medium text-white/50">
                                  Strategy
                                </label>
                                <FormSelect
                                  id="strategy"
                                  options={strategyOptions}
                                  placeholderText="HMO, conversion-ready, other"
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
                                Location / target areas
                              </label>
                              <FormInput
                                id="preferredAreas"
                                placeholder="e.g. Croydon, Reading, Medway, South East London"
                                {...register("preferredAreas")}
                              />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label htmlFor="targetReturns" className="mb-1.5 block text-xs font-medium text-white/50">
                                  Target returns
                                </label>
                                <FormInput
                                  id="targetReturns"
                                  placeholder="e.g. 10%+ gross yield"
                                  {...register("targetReturns")}
                                />
                              </div>
                              <div>
                                <label htmlFor="timeline" className="mb-1.5 block text-xs font-medium text-white/50">
                                  Timeline
                                </label>
                                <FormInput
                                  id="timeline"
                                  placeholder="e.g. ready to buy in 1–3 months"
                                  {...register("timeline")}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Unsure path — reassurance */}
                    <AnimatePresence>
                      {briefPath === "unsure" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="rounded-xl border border-gold/15 bg-gold/[0.04] px-4 py-3.5">
                            <p className="text-sm leading-relaxed text-white/65">
                              No problem — we&apos;ll shape your strategy together on a short call.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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

            {/* Always visible message field */}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-white/50">
                Anything else you&apos;d like us to know?
              </label>
              <FormTextarea
                id="message"
                placeholder="Tell us a bit more about what you're looking for..."
                {...register("message")}
              />
            </div>

            {/* Always visible bottom fields */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="mailing-list"
                className="h-4 w-4 shrink-0 cursor-pointer accent-gold"
                {...register("mailingList")}
              />
              <label htmlFor="mailing-list" className="text-sm leading-snug text-white/50">
                Add me to the deal mailing list
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

            {errors.root && (
              <p className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-400">
                {errors.root.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer rounded-lg bg-gold px-8 py-3.5 text-base font-bold text-dark-bg transition-colors hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-bg disabled:cursor-not-allowed disabled:opacity-60 sm:py-4"
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

            <p className="text-center text-xs text-white/50">
              Your details are safe. We never share your information with third parties.
            </p>
          </form>
          </motion.div>

          {/* What happens next panel */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="self-start lg:sticky lg:top-28"
          >
            <div className="rounded-2xl border border-gold/15 bg-dark-bg-light/60 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold/80">
                What happens next
              </p>

              <ol className="mt-6 space-y-5">
                {[
                  {
                    n: "01",
                    title: "We review your brief",
                    detail:
                      "One of us will be in touch directly to talk it through.",
                  },
                  {
                    n: "02",
                    title: "A short call to understand your brief",
                    detail:
                      "15–20 minutes to talk strategy, budget, target areas, and timeline. Not sure of your numbers? That's what the call is for.",
                  },
                  {
                    n: "03",
                    title: "We start — or tell you upfront we can't help",
                    detail:
                      "If we have live coverage in your area and the brief is workable, we get going. If not, we say so plainly. No time wasted on either side.",
                  },
                ].map((s, i) => (
                  <motion.li
                    key={s.n}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <span className="font-display shrink-0 text-2xl text-gold/50">
                      {s.n}
                    </span>
                    <div className="-mt-0.5">
                      <p className="font-display text-base tracking-tight text-white">
                        {s.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/55">
                        {s.detail}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-white/10 pt-5 text-[0.7rem] text-white/45">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-gold/60" />
                  No obligation
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-gold/60" />
                  No hidden fees
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-gold/60" />
                  UK GDPR-compliant
                </span>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
