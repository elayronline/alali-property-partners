import type { ContactFormData } from "./formSchema"

// Pre-tagged enquiries arrive with role forced to "Investor" but should be filed
// by their enquiry type, not lumped in with general investor briefs.
const ENQUIRY_TAGS: Record<string, string> = {
  "Development Management": "Dev Mgmt",
}

/**
 * Builds a clear, sortable Outlook subject so the sourcer can tell at a glance
 * what kind of query each email is — and build inbox rules on the [Tag] prefix.
 *
 *   [Investor] John Smith — HMO, Croydon, £250–400k
 *   [Property] Jane Doe (Estate Agent) — 12 High St, £300k
 *   [Dev Mgmt] John Smith
 *   [Enquiry]  Sam Other
 */
export function buildEnquirySubject(data: ContactFormData): string {
  const name = data.fullName.trim()

  // Pre-tagged enquiries (e.g. Development Management) take priority.
  if (data.enquiryType) {
    const tag = ENQUIRY_TAGS[data.enquiryType] ?? data.enquiryType
    return `[${tag}] ${name}`
  }

  if (data.role === "Investor") {
    const facts = [data.strategy, data.preferredAreas, data.budget]
      .map((f) => f?.trim())
      .filter(Boolean)
      .join(", ")
    return facts ? `[Investor] ${name} — ${facts}` : `[Investor] ${name}`
  }

  if (data.role === "Property Owner" || data.role === "Estate Agent" || data.role === "Sourcer") {
    const facts = [
      data.propertyAddress?.trim(),
      data.askingPrice?.trim() ? `£${data.askingPrice.trim()}` : undefined,
    ]
      .filter(Boolean)
      .join(", ")
    const who = `[Property] ${name} (${data.role})`
    return facts ? `${who} — ${facts}` : who
  }

  return `[Enquiry] ${name}`
}

/** Outlook subject for a Deal List signup. Leads with the name (consistent with
    the other tags) and keeps the email for quick identification. */
export function buildDealListSubject(email: string, name?: string): string {
  const n = name?.trim()
  return n ? `[Deal List] ${n} — ${email.trim()}` : `[Deal List] ${email.trim()}`
}
