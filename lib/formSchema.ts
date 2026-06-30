import { z } from "zod"

export const roleOptions = [
  "Investor",
  "Property Owner",
  "Estate Agent",
  "Sourcer",
  "Other",
] as const

// HMO-only offering: ready-to-let HMOs and conversion-ready properties.
// "Other" keeps the door open without putting non-HMO strategies front
// and centre.
export const strategyOptions = [
  "HMO (ready-to-let)",
  "Conversion-ready HMO",
  "Other",
] as const

export const budgetOptions = [
  "Under £150k",
  "£150–250k",
  "£250–400k",
  "£400–600k",
  "£600k+",
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
  "Mailing list",
  "Google",
  "Referral",
  "Other",
] as const

// Investor brief path — "known" reveals optional brief fields, "unsure" skips
// them in favour of a short call. Never used to gate submission.
export const briefPathOptions = ["known", "unsure"] as const

const baseSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  role: z.enum(roleOptions, { message: "Please select your role" }),
  message: z.string().optional(),
  mailingList: z.boolean(),
  hearAbout: z.string().optional(),
  // Hidden — set when an enquiry arrives pre-tagged (e.g. Development Management).
  enquiryType: z.string().optional(),
})

const investorFields = z.object({
  briefPath: z.enum(briefPathOptions).optional(),
  strategy: z.string().optional(),
  budget: z.string().optional(),
  preferredAreas: z.string().optional(),
  targetReturns: z.string().optional(),
  timeline: z.string().optional(),
})

const sellerFields = z.object({
  propertyAddress: z.string().optional(),
  askingPrice: z.string().optional(),
  propertyType: z.string().optional(),
  briefDetails: z.string().optional(),
})

export const contactFormSchema = baseSchema.merge(investorFields).merge(sellerFields)

export type ContactFormData = z.infer<typeof contactFormSchema>
