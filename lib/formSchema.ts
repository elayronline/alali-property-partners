import { z } from "zod"

export const roleOptions = [
  "Investor",
  "Property Owner",
  "Estate Agent",
  "Sourcer",
  "Other",
] as const

export const strategyOptions = [
  "Buy-to-Let",
  "Refurb & Refinance",
  "Rent-to-Rent",
  "Serviced Accommodation",
  "HMO",
  "Flip",
  "Bespoke Brief",
  "Open to All",
] as const

export const budgetOptions = [
  "Under £50k",
  "£50–100k",
  "£100–200k",
  "£200–500k",
  "£500k+",
] as const

export const propertyTypeOptions = [
  "Terraced",
  "Semi-Detached",
  "Detached",
  "Flat",
  "HMO",
  "Commercial",
  "Other",
] as const

export const hearAboutOptions = [
  "Instagram",
  "LinkedIn",
  "WhatsApp",
  "Google",
  "Referral",
  "Other",
] as const

const baseSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  role: z.enum(roleOptions, { message: "Please select your role" }),
  message: z.string().optional(),
  whatsappBroadcast: z.boolean(),
  hearAbout: z.string().optional(),
})

const investorFields = z.object({
  strategy: z.string().optional(),
  budget: z.string().optional(),
  preferredAreas: z.string().optional(),
})

const sellerFields = z.object({
  propertyAddress: z.string().optional(),
  askingPrice: z.string().optional(),
  propertyType: z.string().optional(),
  briefDetails: z.string().optional(),
})

export const contactFormSchema = baseSchema.merge(investorFields).merge(sellerFields)

export type ContactFormData = z.infer<typeof contactFormSchema>
