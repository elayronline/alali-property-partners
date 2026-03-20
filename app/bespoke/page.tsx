"use client"

import { useState, useCallback } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import {
  ExternalLink,
  Building2,
  Home,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  FileSignature,
} from "lucide-react"
import Link from "next/link"
import { FormInput, FormTextarea } from "@/components/ui/FormField"
import { SignaturePad } from "@/components/SignaturePad"

// ── Checkbox group helper ──────────────────────────────────────────────
function CheckboxGroup({
  label,
  options,
  name,
  register,
}: {
  label: string
  options: readonly string[]
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium text-white/50">{label}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center gap-2 text-sm text-white/70">
            <input
              type="checkbox"
              value={opt}
              className="h-4 w-4 accent-gold"
              {...register(name)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  )
}

// ── Section wrapper ────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="border-b border-gold/20 pb-2 text-sm font-bold uppercase tracking-wider text-gold">
        {title}
      </h3>
      {children}
    </div>
  )
}

// ── Contract clause component ──────────────────────────────────────────
function ContractClause({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-bold text-white">
        {number}. {title}
      </h4>
      <div className="space-y-2 text-xs leading-relaxed text-white/60">{children}</div>
    </div>
  )
}

function ContractBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gold/30 bg-gold/5 p-4">
      <p className="mb-2 text-xs font-bold text-gold">{title}</p>
      <div className="space-y-2 text-xs leading-relaxed text-white/60">{children}</div>
    </div>
  )
}

// ── Options ────────────────────────────────────────────────────────────
const residentialDealTypes = [
  "Buy-to-Let (Standard Single Let)",
  "HMO (House in Multiple Occupation)",
  "Serviced Accommodation / Holiday Let",
  "Rent-to-Rent (R2R)",
  "Rent-to-SA (Rent to Serviced Accommodation)",
  "BRRR (Buy, Refurbish, Refinance, Rent)",
  "Flip / Refurbishment for Sale",
  "Development / Conversion",
  "Lease Option",
] as const

const residentialFinanceMethods = [
  "Cash Purchase",
  "Buy-to-Let Mortgage",
  "HMO Mortgage",
  "Bridging Finance",
  "Commercial Mortgage",
  "Private/JV Finance",
] as const

const residentialPropertyTypes = [
  "Detached House",
  "Semi-Detached House",
  "Terraced House",
  "End Terrace",
  "Flat / Apartment",
  "Maisonette",
  "Bungalow",
] as const

const residentialTenure = [
  "Freehold only",
  "Leasehold acceptable",
  "Share of Freehold acceptable",
] as const

const residentialCondition = [
  "Ready to let (no work needed)",
  "Light refurbishment (cosmetic)",
  "Medium refurbishment",
  "Heavy refurbishment / Full renovation",
] as const

const residentialEssentialFeatures = [
  "Garden",
  "Parking / Driveway",
  "Garage",
  "Separate entrance(s)",
  "Loft conversion potential",
  "Extension potential",
  "EPC rating C or above",
] as const

const residentialDealBreakers = [
  "Ex-council property",
  "High-rise flat",
  "Cladding issues",
  "Listed building",
  "Conservation area restrictions",
  "Article 4 area (HMO)",
  "Flood risk area",
] as const

const commercialPurpose = [
  "Investment (let to tenants)",
  "Owner-occupation",
  "Development / Conversion",
  "Mixed Use",
] as const

const commercialSectors = [
  "Office",
  "Retail (High Street)",
  "Retail (Out of Town / Retail Park)",
  "Industrial / Warehouse",
  "Light Industrial",
  "Trade Counter",
  "Leisure / Hospitality",
  "Healthcare / Medical",
  "Care Home / Assisted Living",
  "Student Accommodation",
  "Car Park / Parking",
  "Land (with planning)",
  "Land (without planning)",
  "Mixed Use",
] as const

const commercialFinanceMethods = [
  "Cash Purchase",
  "Commercial Mortgage",
  "Bridging Finance",
  "Development Finance",
  "SIPP/SSAS Purchase",
  "JV / Private Finance",
] as const

const commercialTenure = [
  "Freehold only",
  "Long Leasehold (125+ years)",
  "Medium Leasehold (50-125 years)",
  "Virtual Freehold (999 years)",
] as const

const commercialCondition = [
  "Ready to occupy / Let",
  "Refurbishment required",
  "Redevelopment opportunity",
  "Shell / New build",
] as const

const commercialTenancy = [
  "Vacant possession essential",
  "Income producing (tenanted)",
  "Either acceptable",
] as const

const commercialCovenant = [
  "National / Blue Chip only",
  "Regional multiples",
  "Strong local covenants",
  "Any trading tenant",
  "Vacant acceptable",
] as const

const commercialEssentialFeatures = [
  "Dedicated parking",
  "Loading bay / Dock levellers",
  "Yard space",
  "3-phase power",
  "Air conditioning",
  "Lift access",
  "Disabled access / DDA compliant",
  "EPC rating B or above",
  "Sprinkler system",
] as const

const commercialDealBreakers = [
  "Listed building",
  "Conservation area",
  "Flood risk zone",
  "Contaminated land",
  "Asbestos present",
  "Short lease (< 50 years)",
  "Tenant in administration",
  "Break clause in next 3 years",
] as const

// ── Main page ──────────────────────────────────────────────────────────
export default function BespokeSourcing() {
  const [currentStep, setCurrentStep] = useState(1)
  const [propertyType, setPropertyType] = useState<"residential" | "commercial" | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [clientSignature, setClientSignature] = useState("")
  const [pdfBlobForDownload, setPdfBlobForDownload] = useState<Blob | null>(null)
  const [pdfFileName, setPdfFileName] = useState("")
  const [idFile, setIdFile] = useState<File | null>(null)
  const [fundsFile, setFundsFile] = useState<File | null>(null)
  const [fundsLater, setFundsLater] = useState(false)
  const [idUploadUrl, setIdUploadUrl] = useState("")
  const [fundsUploadUrl, setFundsUploadUrl] = useState("")
  const [uploadingDocs, setUploadingDocs] = useState(false)

  // Contract details form (step 2)
  const contractForm = useForm({
    defaultValues: {
      fullName: "",
      companyName: "",
      address: "",
      email: "",
      phone: "",
      dealType: "",
      targetLocations: "",
      budgetRange: "",
    },
  })

  // Requirements form (step 3)
  const requirementsForm = useForm({ defaultValues: {} as Record<string, unknown> })

  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const handleSignatureEnd = useCallback((dataUrl: string) => {
    setClientSignature(dataUrl)
  }, [])

  // ── Upload a document to Vercel Blob ─────────────────────────────
  const uploadDocument = async (file: File, label: string): Promise<string> => {
    const clientName = contractForm.getValues().fullName.replace(/\s+/g, "_")
    const ext = file.name.split(".").pop() || "file"
    const fileName = `${label}_${clientName}.${ext}`
    const formData = new FormData()
    formData.append("file", file)
    formData.append("fileName", fileName)
    const res = await fetch("/api/upload-document", { method: "POST", body: formData })
    const result = await res.json()
    if (!res.ok) throw new Error(result.error || "Upload failed")
    return result.url
  }

  // ── Step 2 → Step 3 ──────────────────────────────────────────────
  const handleContractSubmit = contractForm.handleSubmit(async () => {
    if (!clientSignature) {
      alert("Please sign the agreement before continuing.")
      return
    }
    if (!idFile) {
      alert("Please upload your photo ID before continuing.")
      return
    }
    if (!fundsFile && !fundsLater) {
      alert("Please upload your proof of funds, or select the option to provide it later.")
      return
    }

    // Upload documents
    setUploadingDocs(true)
    try {
      const uploads: Promise<string>[] = [uploadDocument(idFile, "Photo_ID")]
      if (fundsFile) uploads.push(uploadDocument(fundsFile, "Proof_of_Funds"))

      const results = await Promise.all(uploads)
      setIdUploadUrl(results[0])
      if (results[1]) setFundsUploadUrl(results[1])
    } catch {
      alert("There was a problem uploading your documents. Please try again.")
      setUploadingDocs(false)
      return
    }
    setUploadingDocs(false)

    // Pre-fill requirements form with contract details
    const vals = contractForm.getValues()
    requirementsForm.setValue("fullName", vals.fullName)
    requirementsForm.setValue("email", vals.email)
    requirementsForm.setValue("phone", vals.phone)
    requirementsForm.setValue("companyName", vals.companyName)
    requirementsForm.setValue("address", vals.address)
    setCurrentStep(3)
    window.scrollTo({ top: 0, behavior: "smooth" })
  })

  // ── Final submit ──────────────────────────────────────────────────
  const onFinalSubmit = requirementsForm.handleSubmit(async (reqData) => {
    setSubmitError("")

    try {
      const contractData = contractForm.getValues()

      // Lazy-load jsPDF to keep initial bundle small
      const { generateContractPdf } = await import("@/lib/generateContractPdf")

      // Generate the signed contract PDF
      const pdfData = {
        clientName: contractData.fullName,
        companyName: contractData.companyName,
        address: contractData.address,
        email: contractData.email,
        phone: contractData.phone,
        searchPeriod: "14 days",
        dealType: contractData.dealType,
        targetLocations: contractData.targetLocations,
        budgetRange: contractData.budgetRange,
        retainerDeposit: "£1,000",
        findersFee: "2-3% of purchase price",
        totalFee: "£1,000 retainer + Finder's Fee on completion",
        date: today,
        clientSignatureDataUrl: clientSignature,
      }

      const pdf = generateContractPdf(pdfData)
      const pdfBlob = pdf.output("blob")
      const fileName = `Bespoke_Sourcing_Agreement_${contractData.fullName.replace(/\s+/g, "_")}.pdf`

      // Store PDF for re-download on success page
      setPdfBlobForDownload(pdfBlob)
      setPdfFileName(fileName)

      // ── Upload signed PDF to cloud storage ─────────────────────
      const uploadData = new FormData()
      uploadData.append("file", pdfBlob, fileName)
      uploadData.append("fileName", fileName)
      const uploadRes = await fetch("/api/upload-contract", {
        method: "POST",
        body: uploadData,
      })
      const uploadResult = await uploadRes.json()
      if (!uploadRes.ok) throw new Error("Failed to upload contract")
      const pdfDownloadUrl = uploadResult.url

      // ── Send to Alali (contract PDF link + requirements) ───────
      const formData = new FormData()
      formData.append("access_key", "4e50844e-651a-4107-9928-0fb0edd47d94")
      formData.append(
        "subject",
        `Bespoke Sourcing: ${contractData.fullName} — ${propertyType === "residential" ? "Residential" : "Commercial"} — Signed Agreement + Requirements`,
      )
      formData.append("from_name", "Alali Property Partners")
      formData.append("replyto", contractData.email)

      // Contract details
      formData.append("Client Name", contractData.fullName)
      formData.append("Company", contractData.companyName || "N/A")
      formData.append("Email", contractData.email)
      formData.append("Phone", contractData.phone)
      formData.append("Address", contractData.address || "N/A")
      formData.append("Deal Type", contractData.dealType)
      formData.append("Target Locations", contractData.targetLocations)
      formData.append("Budget Range", contractData.budgetRange)
      formData.append(
        "Property Type",
        propertyType === "residential" ? "Residential" : "Commercial",
      )
      formData.append("Agreement Signed", "Yes")
      formData.append("Agreement Date", today)
      formData.append("Signed Agreement PDF", pdfDownloadUrl)
      if (idUploadUrl) formData.append("Photo ID", idUploadUrl)
      if (fundsUploadUrl) {
        formData.append("Proof of Funds", fundsUploadUrl)
      } else {
        formData.append("Proof of Funds", "To be provided later — budget not yet confirmed")
      }

      // Requirements data
      for (const [key, value] of Object.entries(reqData)) {
        if (
          value === undefined ||
          value === null ||
          value === "" ||
          value === false ||
          key === "fullName" ||
          key === "email" ||
          key === "phone" ||
          key === "companyName" ||
          key === "address"
        )
          continue
        const label = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (s) => s.toUpperCase())
          .trim()
        if (Array.isArray(value)) {
          if (value.length > 0) formData.append(label, value.join(", "))
        } else if (value === true) {
          formData.append(label, "Yes")
        } else {
          formData.append(label, String(value))
        }
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const result = await response.json()
      if (!result.success) throw new Error("Failed to send")

      // ── Send auto-reply to client with confirmation ─────────────
      // Web3Forms sends to the account owner, so we use the auto-reply
      // approach to notify the client. The signed PDF is downloaded directly.
      const clientReply = new FormData()
      clientReply.append("access_key", "4e50844e-651a-4107-9928-0fb0edd47d94")
      clientReply.append("subject", `Copy: Bespoke Sourcing Agreement — ${contractData.fullName}`)
      clientReply.append("from_name", "Alali Property Partners")
      clientReply.append("replyto", contractData.email)
      clientReply.append("Client Name", contractData.fullName)
      clientReply.append("Email", contractData.email)
      clientReply.append("Agreement Date", today)
      clientReply.append(
        "Message",
        `Signed bespoke sourcing agreement and requirements received from ${contractData.fullName} (${contractData.email}). Download the signed agreement: ${pdfDownloadUrl}`,
      )
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: clientReply,
      }).catch(() => {})

      // Trigger PDF download for client with delay to ensure browser processes it
      const url = URL.createObjectURL(pdfBlob)
      const a = document.createElement("a")
      a.href = url
      a.download = fileName
      a.click()
      setTimeout(() => URL.revokeObjectURL(url), 5000)

      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      console.error("Submission failed:", err)
      setSubmitError(
        "Something went wrong submitting your requirements. Please try again or contact us directly at contact@alalipropertypartners.com",
      )
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    }
  })

  // ── Re-download PDF ─────────────────────────────────────────────────
  const handleRedownload = () => {
    if (!pdfBlobForDownload) return
    const url = URL.createObjectURL(pdfBlobForDownload)
    const a = document.createElement("a")
    a.href = url
    a.download = pdfFileName
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 5000)
  }

  // ── Success state ──────────────────────────────────────────────────
  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-dark-bg px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg text-center"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
            <CheckCircle2 className="h-8 w-8 text-gold" />
          </div>
          <h1 className="text-3xl font-bold text-white">You&apos;re All Set</h1>
          <p className="mt-4 text-white/60">
            Your signed agreement and requirements have been received. Your signed contract
            has been downloaded to your device — please keep it for your records.
          </p>
          <p className="mt-3 text-white/60">
            Your 14-day sourcing window has now started. We&apos;ll be in touch shortly to confirm
            your brief and begin the search.
          </p>
          {pdfBlobForDownload && (
            <button
              onClick={handleRedownload}
              className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gold/30 px-5 py-2.5 text-sm font-semibold text-gold transition-all hover:border-gold hover:bg-gold/10"
            >
              Download Signed Agreement Again
            </button>
          )}
          <div className="mt-4">
            <Link href="/" className="text-sm text-gold hover:text-gold-light">
              &larr; Back to homepage
            </Link>
          </div>
        </motion.div>
      </main>
    )
  }

  // ── Step indicators ────────────────────────────────────────────────
  const steps = [
    { num: 1, label: "Pay Retainer" },
    { num: 2, label: "Sign Agreement" },
    { num: 3, label: "Requirements" },
  ]

  return (
    <main className="min-h-screen bg-dark-bg px-4 pt-24 pb-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1 text-sm text-gold hover:text-gold-light"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Link>

        <h1 className="text-3xl font-bold text-white sm:text-4xl">Bespoke Sourcing</h1>
        <p className="mt-3 text-white/60">
          Pay your retainer, sign the agreement, complete your requirements, and we&apos;ll start
          sourcing within 24 hours.
        </p>

        {/* Step indicator */}
        <div className="mt-8 flex items-center gap-2">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  currentStep > step.num
                    ? "bg-gold text-dark-bg"
                    : currentStep === step.num
                      ? "bg-gold/20 text-gold ring-2 ring-gold/40"
                      : "bg-white/5 text-white/30"
                }`}
              >
                {currentStep > step.num ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  step.num
                )}
              </div>
              <span
                className={`text-[0.6rem] font-medium sm:text-xs ${
                  currentStep >= step.num ? "text-white/70" : "text-white/30"
                }`}
              >
                {step.label}
              </span>
              {i < steps.length - 1 && (
                <div
                  className={`mx-1 h-px w-8 sm:w-12 ${
                    currentStep > step.num ? "bg-gold" : "bg-white/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          {/* ════════════════════════════════════════════════════════════
              STEP 1: Pay Retainer
              ════════════════════════════════════════════════════════════ */}
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-xl border border-gold/20 bg-dark-bg-light p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-base font-bold text-dark-bg">
                    1
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white">Pay the £1,000 Retainer</h2>
                    <p className="mt-2 text-sm text-white/50">
                      Secure your bespoke sourcing slot. Your retainer locks in our team for a dedicated
                      14-day search, and it comes off the final sourcing fee when you proceed with a deal.
                      You also have a 14-day cooling-off period — see our{" "}
                      <Link href="/terms" className="text-gold underline hover:text-gold-light">
                        terms
                      </Link>{" "}
                      for full details.
                    </p>

                    <a
                      href="https://pay.tide.co/products/bespoke-sou-a00Y2k1H"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setCurrentStep(2)
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }}
                      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
                    >
                      Pay £1,000 Retainer &amp; Continue
                      <ExternalLink className="h-4 w-4" />
                    </a>

                    <p className="mt-4 text-xs text-white/40">
                      Secure payment opens in a new tab. Your agreement will be
                      ready when you return.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ════════════════════════════════════════════════════════════
                STEP 2: Sign Agreement
                ════════════════════════════════════════════════════════════ */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <form onSubmit={handleContractSubmit} className="space-y-6">
                  {/* Payment confirmation banner */}
                  <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-gold" />
                      <div>
                        <p className="text-sm font-semibold text-gold">
                          Payment initiated — complete your agreement below
                        </p>
                        <p className="mt-1 text-xs text-white/50">
                          Once we confirm your £1,000 retainer, your 14-day bespoke
                          search begins. Fill in your details, review the terms, and
                          sign to get started.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Client details */}
                  <div className="rounded-xl border border-white/5 bg-dark-bg-light p-6 sm:p-8">
                    <div className="mb-6 flex items-start gap-4">
                      <FileSignature className="mt-1 h-6 w-6 shrink-0 text-gold" />
                      <div>
                        <h2 className="text-xl font-bold text-white">
                          Bespoke Property Sourcing Agreement
                        </h2>
                        <p className="mt-1 text-sm text-white/50">
                          Enter your details, review the agreement, and sign digitally below.
                        </p>
                      </div>
                    </div>

                    <Section title="Your Details">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-white/50">
                            Full Legal Name <span className="text-gold">*</span>
                          </label>
                          <FormInput
                            placeholder="Your full name"
                            {...contractForm.register("fullName", { required: true })}
                          />
                          {contractForm.formState.errors.fullName && (
                            <p className="mt-1 text-xs text-red-400">Required</p>
                          )}
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-white/50">
                            Company Name (if applicable)
                          </label>
                          <FormInput
                            placeholder="Company name"
                            {...contractForm.register("companyName")}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-white/50">
                          Address <span className="text-gold">*</span>
                        </label>
                        <FormInput
                          placeholder="Your address"
                          {...contractForm.register("address", { required: true })}
                        />
                        {contractForm.formState.errors.address && (
                          <p className="mt-1 text-xs text-red-400">Required</p>
                        )}
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-white/50">
                            Email Address <span className="text-gold">*</span>
                          </label>
                          <FormInput
                            type="email"
                            placeholder="your@email.com"
                            {...contractForm.register("email", { required: true })}
                          />
                          {contractForm.formState.errors.email && (
                            <p className="mt-1 text-xs text-red-400">Required</p>
                          )}
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-white/50">
                            Telephone Number <span className="text-gold">*</span>
                          </label>
                          <FormInput
                            type="tel"
                            placeholder="Your phone number"
                            {...contractForm.register("phone", { required: true })}
                          />
                          {contractForm.formState.errors.phone && (
                            <p className="mt-1 text-xs text-red-400">Required</p>
                          )}
                        </div>
                      </div>
                    </Section>

                    <div className="mt-6">
                      <Section title="Service Summary">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="mb-1.5 block text-xs font-medium text-white/50">
                              Deal Type Required <span className="text-gold">*</span>
                            </label>
                            <FormInput
                              placeholder="e.g. BTL, HMO, BRRR, Commercial"
                              {...contractForm.register("dealType", { required: true })}
                            />
                            {contractForm.formState.errors.dealType && (
                              <p className="mt-1 text-xs text-red-400">Required</p>
                            )}
                          </div>
                          <div>
                            <label className="mb-1.5 block text-xs font-medium text-white/50">
                              Budget Range <span className="text-gold">*</span>
                            </label>
                            <FormInput
                              placeholder="e.g. £100k-£200k"
                              {...contractForm.register("budgetRange", { required: true })}
                            />
                            {contractForm.formState.errors.budgetRange && (
                              <p className="mt-1 text-xs text-red-400">Required</p>
                            )}
                          </div>
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-white/50">
                            Target Location(s) <span className="text-gold">*</span>
                          </label>
                          <FormInput
                            placeholder="e.g. Manchester, Birmingham, London, Bristol"
                            {...contractForm.register("targetLocations", { required: true })}
                          />
                          {contractForm.formState.errors.targetLocations && (
                            <p className="mt-1 text-xs text-red-400">Required</p>
                          )}
                        </div>

                        <div className="rounded-lg border border-white/10 bg-dark-bg p-4">
                          <div className="grid gap-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-white/50">Search Period</span>
                              <span className="font-medium text-white">14 days</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/50">Retainer Deposit</span>
                              <span className="font-medium text-white">£1,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/50">Finder&apos;s Fee (on success)</span>
                              <span className="font-medium text-white">
                                2-3% of purchase price
                              </span>
                            </div>
                            <div className="flex justify-between border-t border-white/10 pt-2">
                              <span className="text-white/50">Total Fee</span>
                              <span className="font-medium text-gold">
                                £1,000 retainer + fee on completion
                              </span>
                            </div>
                          </div>
                        </div>
                      </Section>
                    </div>
                  </div>

                  {/* Full contract text */}
                  <div className="rounded-xl border border-white/5 bg-dark-bg-light p-6 sm:p-8">
                    <h3 className="mb-6 border-b border-gold/20 pb-2 text-sm font-bold uppercase tracking-wider text-gold">
                      Terms and Conditions
                    </h3>
                    <div className="space-y-6">
                      <ContractClause number="1" title="BESPOKE SOURCING SERVICE">
                        <p>
                          1.1 Upon receipt of the Retainer Deposit and a completed Property
                          Requirements Document, the Sourcer shall conduct a bespoke property search
                          tailored to the Client&apos;s specific requirements.
                        </p>
                        <p>
                          1.2 The Search Period shall commence from the date the Sourcer confirms
                          receipt of both the Retainer Deposit AND a FULLY COMPLETED Property
                          Requirements Document.
                        </p>
                        <p>
                          1.3 The Sourcer will use reasonable endeavours to identify properties
                          matching the Client&apos;s stated criteria within the Search Period.
                        </p>
                      </ContractClause>

                      <ContractClause number="2" title="PROPERTY REQUIREMENTS DOCUMENT">
                        <ContractBox title="CRITICAL: REQUIREMENTS DOCUMENT COMPLETION">
                          <p>
                            2.1 The Client MUST complete the Property Requirements Document in FULL
                            DETAIL. All sections must be completed clearly and accurately.
                          </p>
                          <p>
                            2.2 INCOMPLETE, UNCLEAR, OR AMBIGUOUS REQUIREMENTS: If the Client fails
                            to provide complete and clear requirements, the Sourcer reserves the
                            right to: (a) REFUSE to commence the search until clarity is provided;
                            (b) TERMINATE this Agreement immediately; (c) RETAIN the Retainer
                            Deposit in full as compensation for administrative costs.
                          </p>
                          <p>
                            2.3 The Client acknowledges that vague or changing requirements
                            significantly impair the Sourcer&apos;s ability to deliver an effective
                            service and justify forfeiture of the deposit.
                          </p>
                        </ContractBox>
                      </ContractClause>

                      <ContractClause number="3" title="RETAINER DEPOSIT">
                        <p>
                          3.1 The Retainer Deposit is payable in full before the Sourcer commences
                          any search activity.
                        </p>
                        <p>
                          3.2 The Retainer Deposit is NON-REFUNDABLE except as provided in Clause 4
                          below.
                        </p>
                        <p>
                          3.3 The Retainer Deposit shall be deducted from the final Finder&apos;s
                          Fee upon successful completion.
                        </p>
                        <p>
                          3.4 This Agreement shall not become effective, and the Sourcer shall
                          have no obligation to commence any search activity, until the
                          Retainer Deposit has been received in full and confirmed by the
                          Sourcer.
                        </p>
                      </ContractClause>

                      <ContractClause number="4" title="CANCELLATION AND REFUNDS">
                        <ContractBox title="14-DAY COOLING OFF PERIOD AND REFUND POLICY">
                          <p>
                            4.1 The Client has a 14-day cooling off period from the date of this
                            Agreement during which they may cancel and receive a full refund of the
                            Retainer Deposit.
                          </p>
                          <p>
                            4.2 AFTER THE 14-DAY COOLING OFF PERIOD: (a) NO REFUNDS shall be given
                            under any circumstances; (b) The Retainer Deposit is fully earned and
                            non-refundable; (c) Cancellation does not entitle the Client to any
                            monies paid.
                          </p>
                          <p>
                            4.3 EXTENSION OPTION: If no suitable property is found within the Search
                            Period, the Client may: (a) Extend the search for an additional period
                            (terms to be agreed); OR (b) Accept that the deposit is forfeited with
                            no further obligation on either party.
                          </p>
                          <p>
                            4.4 The Sourcer is NOT obligated to offer any refund if a property is
                            presented but the Client chooses not to proceed.
                          </p>
                        </ContractBox>
                      </ContractClause>

                      <ContractClause number="5" title="STATUS OF THE SOURCER">
                        <ContractBox title="INTRODUCER STATUS">
                          <p>
                            5.1 The Client agrees that Alali Property Partners Ltd is SOLELY AN
                            INTRODUCER and NOT an agent for the Client or any vendor.
                          </p>
                          <p>
                            5.2 The Sourcer does not provide investment, financial, legal, or tax
                            advice.
                          </p>
                          <p>
                            5.3 The Client must make all investment decisions independently and seek
                            professional advice.
                          </p>
                        </ContractBox>
                      </ContractClause>

                      <ContractClause number="6" title="CLIENT DUE DILIGENCE">
                        <ContractBox title="DUE DILIGENCE RESPONSIBILITY">
                          <p>
                            6.1 The Client is SOLELY RESPONSIBLE for conducting comprehensive due
                            diligence on ALL properties introduced.
                          </p>
                          <p>
                            6.2 Due diligence includes but is not limited to: surveys, legal checks,
                            financial analysis, planning verification, and all professional
                            inspections.
                          </p>
                          <p>
                            6.3 The Sourcer makes NO WARRANTIES regarding property value, condition,
                            legality, or investment returns.
                          </p>
                          <p>
                            6.4 Information provided is for guidance only and must be independently
                            verified.
                          </p>
                        </ContractBox>
                      </ContractClause>

                      <ContractClause number="7" title="IDENTIFICATION AND PROOF OF FUNDS">
                        <p>
                          7.1 The Client must provide valid photo identification at the time of
                          signing this Agreement.
                        </p>
                        <p>
                          7.2 The Client must provide satisfactory proof of funds sufficient to
                          complete the intended property transaction before any deal is presented.
                          Proof of funds may be provided at signing or at a later date prior to
                          deal presentation.
                        </p>
                        <p>
                          7.3 The Sourcer reserves the right to pause the search if proof of funds
                          has not been received within a reasonable timeframe.
                        </p>
                      </ContractClause>

                      <ContractClause number="8" title="CONFIDENTIALITY">
                        <p>
                          8.1 Both parties agree to maintain strict confidentiality regarding all
                          information exchanged during this engagement.
                        </p>
                        <p>
                          8.2 Property opportunities introduced are confidential and must not be
                          shared with third parties.
                        </p>
                      </ContractClause>

                      <ContractClause number="9" title="LIMITATION OF LIABILITY">
                        <p>
                          9.1 The Sourcer&apos;s maximum liability shall not exceed the fees actually
                          paid by the Client.
                        </p>
                        <p>
                          9.2 The Sourcer excludes all liability for indirect, consequential, or
                          economic losses.
                        </p>
                      </ContractClause>

                      <ContractClause number="10" title="GOVERNING LAW">
                        <p>
                          This Agreement shall be governed by the laws of England and Wales, with
                          exclusive jurisdiction in the English courts.
                        </p>
                      </ContractClause>
                    </div>
                  </div>

                  {/* ID & Proof of Funds upload */}
                  <div className="rounded-xl border border-white/5 bg-dark-bg-light p-6 sm:p-8">
                    <Section title="ID & Proof of Funds">
                      <p className="text-sm text-white/50">
                        We need a copy of your photo ID to get started. If you have proof of
                        funds available, uploading it now helps us move faster — but you can
                        provide it later if your budget isn&apos;t confirmed yet.
                      </p>

                      <div className="mt-4 space-y-5">
                        {/* Photo ID */}
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-white/50">
                            Photo ID <span className="text-gold">*</span>
                          </label>
                          <p className="mb-3 text-xs text-white/40">
                            Upload a clear photo or scan of your passport or driving licence.
                          </p>
                          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-white/20 bg-dark-bg p-4 transition-colors hover:border-gold/40">
                            <input
                              type="file"
                              accept="image/*,.pdf"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) setIdFile(file)
                              }}
                            />
                            {idFile ? (
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                                <span className="text-sm text-white/70">{idFile.name}</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    setIdFile(null)
                                  }}
                                  className="ml-2 text-xs text-white/40 hover:text-white"
                                >
                                  Remove
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <ArrowRight className="h-4 w-4 text-gold" />
                                <span className="text-sm text-white/50">
                                  Choose file or tap to upload
                                </span>
                              </div>
                            )}
                          </label>
                        </div>

                        {/* Proof of Funds */}
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-white/50">
                            Proof of Funds
                          </label>
                          <p className="mb-3 text-xs text-white/40">
                            Upload a recent bank statement, mortgage agreement in principle, or
                            proof of available funds for your stated budget. This helps us understand
                            your position and source suitable deals faster.
                          </p>
                          {!fundsLater && (
                            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-white/20 bg-dark-bg p-4 transition-colors hover:border-gold/40">
                              <input
                                type="file"
                                accept="image/*,.pdf"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0]
                                  if (file) setFundsFile(file)
                                }}
                              />
                              {fundsFile ? (
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                                  <span className="text-sm text-white/70">{fundsFile.name}</span>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.preventDefault()
                                      setFundsFile(null)
                                    }}
                                    className="ml-2 text-xs text-white/40 hover:text-white"
                                  >
                                    Remove
                                  </button>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <ArrowRight className="h-4 w-4 text-gold" />
                                  <span className="text-sm text-white/50">
                                    Choose file or tap to upload
                                  </span>
                                </div>
                              )}
                            </label>
                          )}
                          <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm text-white/50">
                            <input
                              type="checkbox"
                              className="h-4 w-4 accent-gold"
                              checked={fundsLater}
                              onChange={(e) => {
                                setFundsLater(e.target.checked)
                                if (e.target.checked) setFundsFile(null)
                              }}
                            />
                            I&apos;ll provide proof of funds later — my budget isn&apos;t confirmed yet
                          </label>
                          {fundsLater && (
                            <p className="mt-2 text-xs text-white/30">
                              No problem — we&apos;ll request this before presenting any deals. You can
                              send it to us by email at any point.
                            </p>
                          )}
                        </div>
                      </div>

                      <p className="mt-4 text-xs text-white/30">
                        Accepted formats: JPG, PNG, PDF. Max 10MB per file. Your documents are stored securely and never shared with third parties.
                      </p>
                    </Section>
                  </div>

                  {/* Client acknowledgment */}
                  <div className="rounded-xl border border-white/5 bg-dark-bg-light p-6 sm:p-8">
                    <Section title="Client Acknowledgment">
                      <p className="text-xs text-white/50">
                        By signing below, you confirm the following:
                      </p>
                      <div className="space-y-3">
                        {[
                          "I will complete the Property Requirements Document in full as the next step.",
                          "I understand Alali Property Partners Ltd is an INTRODUCER only.",
                          "I am responsible for my own due diligence.",
                          "I understand the 14-day cooling off period.",
                          "I understand NO REFUNDS are available after 14 days.",
                          "I understand incomplete requirements may result in deposit forfeiture.",
                          "I have uploaded valid photo ID and, where available, proof of funds.",
                        ].map((ack) => (
                          <label
                            key={ack}
                            className="flex cursor-pointer items-start gap-3 text-sm text-white/70"
                          >
                            <input
                              type="checkbox"
                              required
                              className="mt-1 h-4 w-4 accent-gold"
                            />
                            {ack}
                          </label>
                        ))}
                      </div>
                    </Section>
                  </div>

                  {/* Signatures */}
                  <div className="rounded-xl border border-white/5 bg-dark-bg-light p-6 sm:p-8">
                    <Section title="Signatures">
                      {/* Sourcer signature (pre-signed) */}
                      <div className="rounded-lg border border-white/10 bg-dark-bg p-5">
                        <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white/40">
                          For and on behalf of the Sourcer — Alali Property Partners Ltd
                        </p>
                        <div className="mt-3 border-b border-white/10 pb-3">
                          <p
                            className="text-2xl text-blue-300"
                            style={{ fontFamily: "Georgia, Times, serif", fontStyle: "italic" }}
                          >
                            Alayi MacPepple-Jaja
                          </p>
                          <p className="mt-1 text-[0.6rem] text-white/30">Digitally signed</p>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <span className="text-white/40">Print Name: </span>
                            <span className="text-white/70">Alayi MacPepple-Jaja</span>
                          </div>
                          <div>
                            <span className="text-white/40">Date: </span>
                            <span className="text-white/70">{today}</span>
                          </div>
                          <div>
                            <span className="text-white/40">Position: </span>
                            <span className="text-white/70">Director</span>
                          </div>
                        </div>
                      </div>

                      {/* Client signature */}
                      <div className="rounded-lg border border-gold/20 bg-dark-bg p-5">
                        <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white/40">
                          For and on behalf of the Client
                        </p>
                        {clientSignature ? (
                          <>
                            <p className="mb-3 text-xs text-white/50">
                              Your signature:
                            </p>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <div className="overflow-hidden rounded-lg border border-white/20 bg-white p-2">
                              <img
                                src={clientSignature}
                                alt="Your signature"
                                className="h-[160px] w-auto"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => setClientSignature("")}
                              className="mt-2 cursor-pointer text-xs text-gold hover:text-gold-light"
                            >
                              Re-sign
                            </button>
                          </>
                        ) : (
                          <>
                            <p className="mb-3 text-xs text-white/50">
                              Please sign in the box below using your mouse or finger:
                            </p>
                            <SignaturePad onEnd={handleSignatureEnd} />
                            <p className="mt-2 text-xs text-gold/60">
                              Your signature is required to proceed.
                            </p>
                          </>
                        )}
                        <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <span className="text-white/40">Print Name: </span>
                            <span className="text-white/70">
                              {contractForm.watch("fullName") || "—"}
                            </span>
                          </div>
                          <div>
                            <span className="text-white/40">Date: </span>
                            <span className="text-white/70">{today}</span>
                          </div>
                        </div>
                      </div>
                    </Section>

                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={uploadingDocs}
                        className="w-full cursor-pointer rounded-lg bg-gold px-8 py-3 text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {uploadingDocs ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                            </svg>
                            Uploading documents...
                          </span>
                        ) : (
                          <>Sign &amp; Continue to Requirements &rarr;</>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}

            {/* ════════════════════════════════════════════════════════════
                STEP 3: Requirements Form
                ════════════════════════════════════════════════════════════ */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Property type selector */}
                <div className="rounded-xl border border-white/5 bg-dark-bg-light p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-white">
                    What type of property are you looking for?
                  </h2>
                  <p className="mt-1 text-sm text-white/50">
                    Choose your property type so we can tailor the brief.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (propertyType !== "residential") {
                          requirementsForm.reset()
                          const vals = contractForm.getValues()
                          requirementsForm.setValue("fullName", vals.fullName)
                          requirementsForm.setValue("email", vals.email)
                          requirementsForm.setValue("phone", vals.phone)
                          requirementsForm.setValue("companyName", vals.companyName)
                          requirementsForm.setValue("address", vals.address)
                        }
                        setPropertyType("residential")
                      }}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-left transition-all ${
                        propertyType === "residential"
                          ? "border-gold bg-gold/10 text-white"
                          : "border-white/10 text-white/60 hover:border-gold/30 hover:text-white"
                      }`}
                    >
                      <Home className="h-6 w-6 shrink-0 text-gold" />
                      <div>
                        <p className="font-bold">Residential</p>
                        <p className="text-xs text-white/40">BTL, HMO, SA, BRRR, Flips</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (propertyType !== "commercial") {
                          requirementsForm.reset()
                          const vals = contractForm.getValues()
                          requirementsForm.setValue("fullName", vals.fullName)
                          requirementsForm.setValue("email", vals.email)
                          requirementsForm.setValue("phone", vals.phone)
                          requirementsForm.setValue("companyName", vals.companyName)
                          requirementsForm.setValue("address", vals.address)
                        }
                        setPropertyType("commercial")
                      }}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-left transition-all ${
                        propertyType === "commercial"
                          ? "border-gold bg-gold/10 text-white"
                          : "border-white/10 text-white/60 hover:border-gold/30 hover:text-white"
                      }`}
                    >
                      <Building2 className="h-6 w-6 shrink-0 text-gold" />
                      <div>
                        <p className="font-bold">Commercial</p>
                        <p className="text-xs text-white/40">
                          Office, Retail, Industrial, Mixed Use
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Requirements form */}
                <AnimatePresence>
                  {propertyType && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-6 overflow-hidden"
                    >
                      <div className="rounded-xl border border-white/5 bg-dark-bg-light p-6 sm:p-8">
                        <h2 className="text-lg font-bold text-white">
                          {propertyType === "residential" ? "Residential" : "Commercial"}{" "}
                          Requirements
                        </h2>
                        <p className="mt-1 text-sm text-white/50">
                          The more detail you provide, the better we can match deals to your brief.
                          Fields marked with <span className="text-gold">*</span> are required.
                        </p>

                        {/* Warning banner */}
                        <div className="mt-4 rounded-lg border border-white/10 bg-dark-bg p-4">
                          <p className="text-xs font-medium text-white/60">
                            The more detail you provide, the better we can match deals to your brief.
                            Please complete every section as thoroughly as possible — it helps us
                            deliver exactly what you&apos;re looking for.
                          </p>
                        </div>

                        <form onSubmit={onFinalSubmit} className="mt-8 space-y-8">
                          {/* Client Details (pre-filled from contract) */}
                          <Section title="Client Details">
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Full Legal Name <span className="text-gold">*</span>
                                </label>
                                <FormInput
                                  placeholder="Your full name"
                                  {...requirementsForm.register("fullName", { required: true })}
                                />
                              </div>
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Email Address <span className="text-gold">*</span>
                                </label>
                                <FormInput
                                  type="email"
                                  placeholder="your@email.com"
                                  {...requirementsForm.register("email", { required: true })}
                                />
                              </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Telephone Number <span className="text-gold">*</span>
                                </label>
                                <FormInput
                                  type="tel"
                                  placeholder="Your phone number"
                                  {...requirementsForm.register("phone", { required: true })}
                                />
                              </div>
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  {propertyType === "commercial"
                                    ? "Company Name"
                                    : "Company Name (if applicable)"}
                                </label>
                                <FormInput
                                  placeholder="Company name"
                                  {...requirementsForm.register("companyName")}
                                />
                              </div>
                            </div>
                            {propertyType === "commercial" && (
                              <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                  <label className="mb-1.5 block text-xs font-medium text-white/50">
                                    Company Registration Number
                                  </label>
                                  <FormInput
                                    placeholder="e.g. 12345678"
                                    {...requirementsForm.register("companyRegNumber")}
                                  />
                                </div>
                                <div>
                                  <label className="mb-1.5 block text-xs font-medium text-white/50">
                                    Key Contact Name
                                  </label>
                                  <FormInput
                                    placeholder="Key contact"
                                    {...requirementsForm.register("keyContactName")}
                                  />
                                </div>
                              </div>
                            )}
                            <div>
                              <label className="mb-1.5 block text-xs font-medium text-white/50">
                                {propertyType === "commercial"
                                  ? "Registered Address"
                                  : "Address"}
                              </label>
                              <FormInput
                                placeholder="Your address"
                                {...requirementsForm.register("address")}
                              />
                            </div>
                            {propertyType === "commercial" && (
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Trading Address (if different)
                                </label>
                                <FormInput
                                  placeholder="Trading address"
                                  {...requirementsForm.register("tradingAddress")}
                                />
                              </div>
                            )}
                          </Section>

                          {/* Investment Strategy */}
                          <Section
                            title={
                              propertyType === "residential"
                                ? "Investment Strategy"
                                : "Investment / Occupation Strategy"
                            }
                          >
                            {propertyType === "residential" ? (
                              <>
                                <CheckboxGroup
                                  label="Deal Type Required (tick all that apply)"
                                  options={residentialDealTypes}
                                  name="dealTypes"
                                  register={requirementsForm.register}
                                />
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Primary Investment Goal{" "}
                                      <span className="text-gold">*</span>
                                    </label>
                                    <FormInput
                                      placeholder="e.g. Cash flow, capital growth"
                                      {...requirementsForm.register("primaryInvestmentGoal", {
                                        required: true,
                                      })}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Investment Timeframe{" "}
                                      <span className="text-gold">*</span>
                                    </label>
                                    <FormInput
                                      placeholder="e.g. Ready to proceed immediately"
                                      {...requirementsForm.register("investmentTimeframe", {
                                        required: true,
                                      })}
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <CheckboxGroup
                                  label="Purpose (tick all that apply)"
                                  options={commercialPurpose}
                                  name="purpose"
                                  register={requirementsForm.register}
                                />
                                <CheckboxGroup
                                  label="Property Sector (tick all that apply)"
                                  options={commercialSectors}
                                  name="propertySectors"
                                  register={requirementsForm.register}
                                />
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Specific Use Class Required
                                    </label>
                                    <FormInput
                                      placeholder="e.g. E, B2, B8, C1"
                                      {...requirementsForm.register("useClassRequired")}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Investment Timeframe{" "}
                                      <span className="text-gold">*</span>
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 5 years, 10+ years"
                                      {...requirementsForm.register("investmentTimeframe", {
                                        required: true,
                                      })}
                                    />
                                  </div>
                                </div>
                              </>
                            )}
                          </Section>

                          {/* Budget & Finance */}
                          <Section title="Budget & Finance">
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Maximum Purchase Price{" "}
                                  <span className="text-gold">*</span>
                                </label>
                                <FormInput
                                  placeholder="£"
                                  {...requirementsForm.register("maxPurchasePrice", {
                                    required: true,
                                  })}
                                />
                              </div>
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Minimum Purchase Price
                                </label>
                                <FormInput
                                  placeholder="£"
                                  {...requirementsForm.register("minPurchasePrice")}
                                />
                              </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Cash Available for Deposit{" "}
                                  <span className="text-gold">*</span>
                                </label>
                                <FormInput
                                  placeholder="£"
                                  {...requirementsForm.register("cashAvailable", {
                                    required: true,
                                  })}
                                />
                              </div>
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  {propertyType === "residential"
                                    ? "Refurbishment Budget (if applicable)"
                                    : "Works / Fit-out Budget"}
                                </label>
                                <FormInput
                                  placeholder="£"
                                  {...requirementsForm.register("refurbBudget")}
                                />
                              </div>
                            </div>
                            <CheckboxGroup
                              label="Finance Method (tick all that apply)"
                              options={
                                propertyType === "residential"
                                  ? residentialFinanceMethods
                                  : commercialFinanceMethods
                              }
                              name="financeMethods"
                              register={requirementsForm.register}
                            />
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Finance Pre-Approved?
                                </label>
                                <FormInput
                                  placeholder="Yes / No / In progress"
                                  {...requirementsForm.register("financePreApproved")}
                                />
                              </div>
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Broker / Lender Name
                                </label>
                                <FormInput
                                  placeholder="Broker or lender name"
                                  {...requirementsForm.register("brokerName")}
                                />
                              </div>
                            </div>
                          </Section>

                          {/* Location */}
                          <Section title="Location Requirements">
                            <div>
                              <label className="mb-1.5 block text-xs font-medium text-white/50">
                                Preferred Area(s){" "}
                                <span className="text-gold">*</span>
                              </label>
                              <FormInput
                                placeholder="e.g. Manchester, Birmingham, London, Bristol"
                                {...requirementsForm.register("preferredAreas", {
                                  required: true,
                                })}
                              />
                            </div>
                            {propertyType === "commercial" && (
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Preferred Towns / Cities
                                </label>
                                <FormInput
                                  placeholder="Specific towns or cities"
                                  {...requirementsForm.register("preferredTowns")}
                                />
                              </div>
                            )}
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Postcodes of Interest
                                </label>
                                <FormInput
                                  placeholder="e.g. M1, B1, LS1"
                                  {...requirementsForm.register("postcodes")}
                                />
                              </div>
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Areas to AVOID
                                </label>
                                <FormInput
                                  placeholder="Any areas to avoid"
                                  {...requirementsForm.register("areasToAvoid")}
                                />
                              </div>
                            </div>
                            <div>
                              <label className="mb-1.5 block text-xs font-medium text-white/50">
                                Maximum Distance from Location
                              </label>
                              <FormInput
                                placeholder="e.g. 30 miles from Guildford"
                                {...requirementsForm.register("maxDistance")}
                              />
                            </div>
                          </Section>

                          {/* Property Specifications */}
                          <Section title="Property Specifications">
                            {propertyType === "residential" ? (
                              <>
                                <CheckboxGroup
                                  label="Property Type (tick all acceptable)"
                                  options={residentialPropertyTypes}
                                  name="propertyTypes"
                                  register={requirementsForm.register}
                                />
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Min Bedrooms <span className="text-gold">*</span>
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 2"
                                      {...requirementsForm.register("minBedrooms", {
                                        required: true,
                                      })}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Max Bedrooms
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 6"
                                      {...requirementsForm.register("maxBedrooms")}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Min Bathrooms
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 1"
                                      {...requirementsForm.register("minBathrooms")}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Min Reception Rooms
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 1"
                                      {...requirementsForm.register("minReceptionRooms")}
                                    />
                                  </div>
                                </div>
                                <CheckboxGroup
                                  label="Tenure (tick acceptable)"
                                  options={residentialTenure}
                                  name="tenure"
                                  register={requirementsForm.register}
                                />
                                <div>
                                  <label className="mb-1.5 block text-xs font-medium text-white/50">
                                    Min Lease Length (if leasehold)
                                  </label>
                                  <FormInput
                                    placeholder="e.g. 80 years"
                                    {...requirementsForm.register("minLeaseLength")}
                                  />
                                </div>
                                <CheckboxGroup
                                  label="Condition (tick all acceptable)"
                                  options={residentialCondition}
                                  name="condition"
                                  register={requirementsForm.register}
                                />
                              </>
                            ) : (
                              <>
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Min Floor Area (sq ft)
                                    </label>
                                    <FormInput
                                      placeholder="sq ft"
                                      {...requirementsForm.register("minFloorArea")}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Max Floor Area (sq ft)
                                    </label>
                                    <FormInput
                                      placeholder="sq ft"
                                      {...requirementsForm.register("maxFloorArea")}
                                    />
                                  </div>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Min Site Area (acres)
                                    </label>
                                    <FormInput
                                      placeholder="acres"
                                      {...requirementsForm.register("minSiteArea")}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Eaves Height (if industrial)
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 6m"
                                      {...requirementsForm.register("eavesHeight")}
                                    />
                                  </div>
                                </div>
                                <CheckboxGroup
                                  label="Tenure (tick acceptable)"
                                  options={commercialTenure}
                                  name="tenure"
                                  register={requirementsForm.register}
                                />
                                <CheckboxGroup
                                  label="Condition (tick all acceptable)"
                                  options={commercialCondition}
                                  name="condition"
                                  register={requirementsForm.register}
                                />
                                <CheckboxGroup
                                  label="Tenancy Status (tick preference)"
                                  options={commercialTenancy}
                                  name="tenancyStatus"
                                  register={requirementsForm.register}
                                />
                              </>
                            )}
                          </Section>

                          {/* Financial Targets */}
                          <Section title="Financial Targets">
                            {propertyType === "residential" ? (
                              <>
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Min Gross Yield <span className="text-gold">*</span>
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 7%"
                                      {...requirementsForm.register("minGrossYield", {
                                        required: true,
                                      })}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Min Net Yield
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 5%"
                                      {...requirementsForm.register("minNetYield")}
                                    />
                                  </div>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Min Cash Flow (per month)
                                    </label>
                                    <FormInput
                                      placeholder="£"
                                      {...requirementsForm.register("minCashFlow")}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Target ROI (if BRRR)
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 20%"
                                      {...requirementsForm.register("targetROI")}
                                    />
                                  </div>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Target Discount to Market Value
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 20% BMV"
                                      {...requirementsForm.register("targetDiscount")}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Expected Rental Income
                                    </label>
                                    <FormInput
                                      placeholder="£ per month"
                                      {...requirementsForm.register("expectedRentalIncome")}
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Min Net Initial Yield{" "}
                                      <span className="text-gold">*</span>
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 6%"
                                      {...requirementsForm.register("minNetInitialYield", {
                                        required: true,
                                      })}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Target Yield Range
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 6-8%"
                                      {...requirementsForm.register("targetYieldRange")}
                                    />
                                  </div>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Min Rent per sq ft
                                    </label>
                                    <FormInput
                                      placeholder="£ per sq ft"
                                      {...requirementsForm.register("minRentPerSqft")}
                                    />
                                  </div>
                                  <div>
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                      Min WAULT (years)
                                    </label>
                                    <FormInput
                                      placeholder="e.g. 5 years"
                                      {...requirementsForm.register("minWAULT")}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="mb-1.5 block text-xs font-medium text-white/50">
                                    Target Capital Value Growth
                                  </label>
                                  <FormInput
                                    placeholder="e.g. 10% over 5 years"
                                    {...requirementsForm.register("targetCapitalGrowth")}
                                  />
                                </div>
                                <CheckboxGroup
                                  label="Tenant Covenant Strength (tick all acceptable)"
                                  options={commercialCovenant}
                                  name="covenantStrength"
                                  register={requirementsForm.register}
                                />
                              </>
                            )}
                          </Section>

                          {/* Additional Requirements */}
                          <Section title="Additional Requirements">
                            <CheckboxGroup
                              label="Essential Features (tick all required)"
                              options={
                                propertyType === "residential"
                                  ? residentialEssentialFeatures
                                  : commercialEssentialFeatures
                              }
                              name="essentialFeatures"
                              register={requirementsForm.register}
                            />
                            <CheckboxGroup
                              label="Deal Breakers (what would you NOT accept?)"
                              options={
                                propertyType === "residential"
                                  ? residentialDealBreakers
                                  : commercialDealBreakers
                              }
                              name="dealBreakers"
                              register={requirementsForm.register}
                            />
                            {propertyType === "commercial" && (
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  VAT Preference
                                </label>
                                <FormInput
                                  placeholder="e.g. VAT elected, non-VAT preferred"
                                  {...requirementsForm.register("vatPreference")}
                                />
                              </div>
                            )}
                            <div>
                              <label className="mb-1.5 block text-xs font-medium text-white/50">
                                Any Other Requirements
                              </label>
                              <FormTextarea
                                placeholder="Anything else we should know..."
                                {...requirementsForm.register("otherRequirements")}
                              />
                            </div>
                          </Section>

                          {/* Decision Making */}
                          <Section title="Decision Making">
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  {propertyType === "commercial"
                                    ? "Primary Decision Maker"
                                    : "Are you the sole decision maker?"}{" "}
                                  <span className="text-gold">*</span>
                                </label>
                                <FormInput
                                  placeholder={
                                    propertyType === "commercial" ? "Name and role" : "Yes / No"
                                  }
                                  {...requirementsForm.register("soleDecisionMaker", {
                                    required: true,
                                  })}
                                />
                              </div>
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  Other Decision Makers
                                </label>
                                <FormInput
                                  placeholder="Names of other decision makers"
                                  {...requirementsForm.register("otherDecisionMakers")}
                                />
                              </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  How quickly can you decide?{" "}
                                  <span className="text-gold">*</span>
                                </label>
                                <FormInput
                                  placeholder="e.g. Within 24 hours"
                                  {...requirementsForm.register("decisionSpeed", {
                                    required: true,
                                  })}
                                />
                              </div>
                              <div>
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                  How quickly can you exchange?
                                </label>
                                <FormInput
                                  placeholder="e.g. 2-4 weeks"
                                  {...requirementsForm.register("exchangeSpeed")}
                                />
                              </div>
                            </div>
                          </Section>

                          {/* Declaration */}
                          <Section title="Declaration">
                            <div className="space-y-3">
                              {[
                                "All information provided is true, accurate, and complete",
                                "I understand that incomplete or unclear requirements may result in refusal to commence the search or forfeiture of my retainer",
                                "I have proof of funds available to complete a transaction within the stated budget",
                                "I am ready, willing, and able to proceed with a suitable property",
                                "I will respond to property opportunities within 48 hours",
                                "I understand Alali Property Partners Ltd is an introducer only and I am responsible for my own due diligence",
                                ...(propertyType === "commercial"
                                  ? [
                                      "I am authorised to sign on behalf of the company named above",
                                    ]
                                  : []),
                                "I confirm I have paid the £1,000 bespoke sourcing retainer",
                              ].map((ack) => (
                                <label
                                  key={ack}
                                  className="flex cursor-pointer items-start gap-3 text-sm text-white/70"
                                >
                                  <input
                                    type="checkbox"
                                    required
                                    className="mt-1 h-4 w-4 accent-gold"
                                  />
                                  {ack}
                                </label>
                              ))}
                            </div>
                          </Section>

                          {/* Submit */}
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => {
                                setCurrentStep(2)
                                window.scrollTo({ top: 0, behavior: "smooth" })
                              }}
                              className="cursor-pointer rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-white/60 transition-all hover:border-white/20 hover:text-white"
                            >
                              &larr; Back
                            </button>
                            <button
                              type="submit"
                              disabled={requirementsForm.formState.isSubmitting}
                              className="flex-1 cursor-pointer rounded-lg bg-gold px-8 py-4 text-base font-bold text-dark-bg transition-colors hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-bg disabled:cursor-not-allowed disabled:opacity-60"
                            >
                              {requirementsForm.formState.isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                  <svg
                                    className="h-4 w-4 animate-spin"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                  >
                                    <circle
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="3"
                                      className="opacity-25"
                                    />
                                    <path
                                      d="M4 12a8 8 0 018-8"
                                      stroke="currentColor"
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                      className="opacity-75"
                                    />
                                  </svg>
                                  Submitting...
                                </span>
                              ) : (
                                "Submit Requirements →"
                              )}
                            </button>
                          </div>

                          {submitError && (
                            <div className="rounded-lg border border-red-400/30 bg-red-400/10 p-4">
                              <p className="text-sm text-red-400">{submitError}</p>
                            </div>
                          )}

                          <p className="text-center text-xs text-white/30">
                            By submitting, you agree to our{" "}
                            <Link
                              href="/terms"
                              className="text-gold underline hover:text-gold-light"
                            >
                              terms of service
                            </Link>{" "}
                            and{" "}
                            <Link
                              href="/privacy"
                              className="text-gold underline hover:text-gold-light"
                            >
                              privacy policy
                            </Link>
                            .
                          </p>
                        </form>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
