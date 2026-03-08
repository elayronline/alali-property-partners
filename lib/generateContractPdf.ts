import jsPDF from "jspdf"

export interface ContractData {
  clientName: string
  companyName: string
  address: string
  email: string
  phone: string
  searchPeriod: string
  dealType: string
  targetLocations: string
  budgetRange: string
  retainerDeposit: string
  findersFee: string
  totalFee: string
  date: string
  clientSignatureDataUrl: string
}

function addPageBorder(doc: jsPDF) {
  const w = doc.internal.pageSize.getWidth()
  const h = doc.internal.pageSize.getHeight()
  doc.setDrawColor(180, 150, 70)
  doc.setLineWidth(0.5)
  doc.rect(10, 10, w - 20, h - 20)
}

function addFooter(doc: jsPDF, page: number, total: number) {
  const w = doc.internal.pageSize.getWidth()
  const h = doc.internal.pageSize.getHeight()
  doc.setFontSize(7)
  doc.setTextColor(150)
  doc.setFont("helvetica", "normal")
  doc.text(
    "Alali Property Partners Ltd | Company No. 17057401 | 86-90 Paul Street, London EC2A 4NE",
    w / 2,
    h - 15,
    { align: "center" },
  )
  doc.text(`Page ${page} of ${total}`, w / 2, h - 11, { align: "center" })
}

export function generateContractPdf(data: ContractData): jsPDF {
  const doc = new jsPDF("p", "mm", "a4")
  const w = doc.internal.pageSize.getWidth()
  const margin = 20
  const contentWidth = w - margin * 2
  let y = 20

  // ── Helper functions ──────────────────────────────────────────────
  function heading(text: string, size = 16) {
    doc.setFontSize(size)
    doc.setTextColor(26, 26, 26)
    doc.setFont("helvetica", "bold")
    doc.text(text, w / 2, y, { align: "center" })
    y += size * 0.5 + 2
  }

  function subheading(text: string) {
    doc.setFontSize(11)
    doc.setTextColor(180, 134, 11)
    doc.setFont("helvetica", "bold")
    doc.text(text, margin, y)
    y += 7
  }

  function body(text: string, indent = 0) {
    doc.setFontSize(9)
    doc.setTextColor(60, 60, 60)
    doc.setFont("helvetica", "normal")
    const lines = doc.splitTextToSize(text, contentWidth - indent)
    doc.text(lines, margin + indent, y)
    y += lines.length * 4.5
  }

  function boldBody(text: string) {
    doc.setFontSize(9)
    doc.setTextColor(26, 26, 26)
    doc.setFont("helvetica", "bold")
    const lines = doc.splitTextToSize(text, contentWidth)
    doc.text(lines, margin, y)
    y += lines.length * 4.5
  }

  function tableRow(label: string, value: string) {
    doc.setFontSize(9)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(60)
    doc.text(label, margin, y)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(26, 26, 26)
    doc.text(value || "—", margin + 55, y)
    y += 6
  }

  function divider() {
    doc.setDrawColor(220)
    doc.setLineWidth(0.3)
    doc.line(margin, y, w - margin, y)
    y += 4
  }

  function checkPage(needed = 30) {
    if (y + needed > doc.internal.pageSize.getHeight() - 25) {
      doc.addPage()
      addPageBorder(doc)
      y = 20
    }
  }

  function importantBox(title: string, text: string) {
    checkPage(40)
    const lines = doc.splitTextToSize(text, contentWidth - 10)
    const boxH = 12 + lines.length * 4.5
    doc.setFillColor(255, 248, 230)
    doc.setDrawColor(180, 134, 11)
    doc.setLineWidth(0.5)
    doc.roundedRect(margin, y, contentWidth, boxH, 2, 2, "FD")
    y += 6
    doc.setFontSize(9)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(180, 134, 11)
    doc.text(title, margin + 5, y)
    y += 5
    doc.setFont("helvetica", "normal")
    doc.setTextColor(60)
    doc.text(lines, margin + 5, y)
    y += lines.length * 4.5 + 4
  }

  // ── PAGE 1: Header & Details ──────────────────────────────────────
  addPageBorder(doc)

  // Gold accent line
  doc.setFillColor(180, 134, 11)
  doc.rect(w / 2 - 20, y, 40, 1, "F")
  y += 8

  heading("BESPOKE PROPERTY SOURCING AGREEMENT", 16)
  y += 1
  doc.setFontSize(10)
  doc.setTextColor(120)
  doc.setFont("helvetica", "italic")
  doc.text("(Retained Search Service)", w / 2, y, { align: "center" })
  y += 10

  // Date
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(60)
  doc.text(`DATE: ${data.date}`, margin, y)
  y += 10

  // Parties
  subheading("PARTIES")
  body(
    '(1) THE SOURCER: Alali Property Partners Ltd (the "Sourcer").',
  )
  y += 1
  body(
    '(2) THE CLIENT: The individual or company whose details are set out below (the "Client" or "Investor").',
  )
  y += 6

  // Client Details
  subheading("CLIENT DETAILS")
  tableRow("Full Legal Name", data.clientName)
  tableRow("Company Name", data.companyName)
  tableRow("Address", data.address)
  tableRow("Email Address", data.email)
  tableRow("Telephone Number", data.phone)
  y += 4

  importantBox(
    "IMPORTANT: INTRODUCER STATUS",
    "The Client agrees and acknowledges that Alali Property Partners Ltd acts SOLELY AS AN INTRODUCER of property deals. We are NOT an agent acting on behalf of the Client or any vendor. All investment decisions remain solely with the Client.",
  )

  // Service Details
  subheading("SERVICE DETAILS")
  tableRow("Search Period", data.searchPeriod)
  tableRow("Deal Type Required", data.dealType)
  tableRow("Target Location(s)", data.targetLocations)
  tableRow("Budget Range", data.budgetRange)
  y += 4

  // Fees
  subheading("FEES AND PAYMENTS")
  tableRow("Retainer Deposit", data.retainerDeposit)
  tableRow("Finder's Fee (on success)", data.findersFee)
  tableRow("Total Fee Payable", data.totalFee)
  y += 6
  divider()

  // ── PAGE 2: Terms ─────────────────────────────────────────────────
  doc.addPage()
  addPageBorder(doc)
  y = 20

  heading("TERMS AND CONDITIONS", 14)
  y += 4

  subheading("1. BESPOKE SOURCING SERVICE")
  body(
    "1.1 Upon receipt of the Retainer Deposit and a completed Property Requirements Document, the Sourcer shall conduct a bespoke property search tailored to the Client's specific requirements.",
  )
  y += 2
  body(
    "1.2 The Search Period shall commence from the date the Sourcer confirms receipt of both the Retainer Deposit AND a FULLY COMPLETED Property Requirements Document.",
  )
  y += 2
  body(
    "1.3 The Sourcer will use reasonable endeavours to identify properties matching the Client's stated criteria within the Search Period.",
  )
  y += 4

  subheading("2. PROPERTY REQUIREMENTS DOCUMENT")
  importantBox(
    "CRITICAL: REQUIREMENTS DOCUMENT COMPLETION",
    "2.1 The Client MUST complete the Property Requirements Document in FULL DETAIL. All sections must be completed clearly and accurately.\n\n2.2 INCOMPLETE, UNCLEAR, OR AMBIGUOUS REQUIREMENTS: If the Client fails to provide complete and clear requirements, the Sourcer reserves the right to: (a) REFUSE to commence the search until clarity is provided; (b) TERMINATE this Agreement immediately; (c) RETAIN the Retainer Deposit in full as compensation for administrative costs.\n\n2.3 The Client acknowledges that vague or changing requirements significantly impair the Sourcer's ability to deliver an effective service and justify forfeiture of the deposit.",
  )

  subheading("3. RETAINER DEPOSIT")
  body(
    "3.1 The Retainer Deposit is payable in full before the Sourcer commences any search activity.",
  )
  y += 2
  body("3.2 The Retainer Deposit is NON-REFUNDABLE except as provided in Clause 4 below.")
  y += 2
  body(
    "3.3 The Retainer Deposit shall be deducted from the final Finder's Fee upon successful completion.",
  )
  y += 2
  body(
    "3.4 This Agreement shall not become effective, and the Sourcer shall have no obligation to commence any search activity, until the Retainer Deposit has been received in full and confirmed by the Sourcer.",
  )
  y += 4

  checkPage(60)
  subheading("4. CANCELLATION AND REFUNDS")
  importantBox(
    "14-DAY COOLING OFF PERIOD AND REFUND POLICY",
    "4.1 The Client has a 14-day cooling off period from the date of this Agreement during which they may cancel and receive a full refund of the Retainer Deposit.\n\n4.2 AFTER THE 14-DAY COOLING OFF PERIOD: (a) NO REFUNDS shall be given under any circumstances; (b) The Retainer Deposit is fully earned and non-refundable; (c) Cancellation does not entitle the Client to any monies paid.\n\n4.3 EXTENSION OPTION: If no suitable property is found within the Search Period, the Client may: (a) Extend the search for an additional period (terms to be agreed); OR (b) Accept that the deposit is forfeited with no further obligation on either party.\n\n4.4 The Sourcer is NOT obligated to offer any refund if a property is presented but the Client chooses not to proceed.",
  )

  checkPage(50)
  subheading("5. STATUS OF THE SOURCER")
  importantBox(
    "INTRODUCER STATUS",
    "5.1 The Client agrees that Alali Property Partners Ltd is SOLELY AN INTRODUCER and NOT an agent for the Client or any vendor.\n\n5.2 The Sourcer does not provide investment, financial, legal, or tax advice.\n\n5.3 The Client must make all investment decisions independently and seek professional advice.",
  )

  checkPage(50)
  subheading("6. CLIENT DUE DILIGENCE")
  importantBox(
    "DUE DILIGENCE RESPONSIBILITY",
    "6.1 The Client is SOLELY RESPONSIBLE for conducting comprehensive due diligence on ALL properties introduced.\n\n6.2 Due diligence includes but is not limited to: surveys, legal checks, financial analysis, planning verification, and all professional inspections.\n\n6.3 The Sourcer makes NO WARRANTIES regarding property value, condition, legality, or investment returns.\n\n6.4 Information provided is for guidance only and must be independently verified.",
  )

  checkPage(30)
  subheading("7. PROOF OF FUNDS AND ID")
  body(
    "7.1 Before the Sourcer commences work, the Client must provide satisfactory proof of funds sufficient to complete the intended property transaction.",
  )
  y += 2
  body(
    "7.2 The Client must provide valid photo identification and proof of address for Anti-Money Laundering compliance.",
  )
  y += 2
  body(
    "7.3 Failure to provide satisfactory documentation may result in termination of this Agreement with forfeiture of the Retainer Deposit.",
  )
  y += 4

  checkPage(20)
  subheading("8. CONFIDENTIALITY")
  body(
    "8.1 Both parties agree to maintain strict confidentiality regarding all information exchanged during this engagement.",
  )
  y += 2
  body(
    "8.2 Property opportunities introduced are confidential and must not be shared with third parties.",
  )
  y += 4

  checkPage(20)
  subheading("9. LIMITATION OF LIABILITY")
  body(
    "9.1 The Sourcer's maximum liability shall not exceed the fees actually paid by the Client.",
  )
  y += 2
  body("9.2 The Sourcer excludes all liability for indirect, consequential, or economic losses.")
  y += 4

  checkPage(10)
  subheading("10. GOVERNING LAW")
  body(
    "This Agreement shall be governed by the laws of England and Wales, with exclusive jurisdiction in the English courts.",
  )
  y += 8

  // ── Signatures page ───────────────────────────────────────────────
  checkPage(120)
  divider()
  y += 4

  subheading("CLIENT ACKNOWLEDGMENT")
  body("By signing below, the Client confirms:")
  y += 2
  const acks = [
    "I will complete the Property Requirements Document in full as the next step.",
    "I understand Alali Property Partners Ltd is an INTRODUCER only.",
    "I am responsible for my own due diligence.",
    "I understand the 14-day cooling off period.",
    "I understand NO REFUNDS are available after 14 days.",
    "I understand incomplete requirements may result in deposit forfeiture.",
    "I have provided valid ID and proof of funds.",
  ]
  for (const ack of acks) {
    doc.setFillColor(180, 134, 11)
    doc.rect(margin + 2, y - 2.5, 2.5, 2.5, "F")
    body(`  ${ack}`, 4)
    y += 1
  }
  y += 6

  // ── Sourcer signature ─────────────────────────────────────────────
  checkPage(70)
  divider()
  y += 2
  boldBody("FOR AND ON BEHALF OF THE SOURCER — ALALI PROPERTY PARTNERS LTD:")
  y += 4

  // Signature line
  doc.setFontSize(16)
  doc.setFont("times", "italic")
  doc.setTextColor(30, 30, 100)
  doc.text("Alayi MacPepple-Jaja", margin, y)
  y += 4
  doc.setFontSize(7)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(150)
  doc.text("Digitally signed", margin, y)
  y += 6

  tableRow("Print Name", "Alayi MacPepple-Jaja")
  tableRow("Date", data.date)
  tableRow("Position/Title", "Director")
  y += 6

  // ── Client signature ──────────────────────────────────────────────
  divider()
  y += 2
  boldBody("FOR AND ON BEHALF OF THE CLIENT:")
  y += 4

  // Client signature image
  if (data.clientSignatureDataUrl) {
    try {
      doc.addImage(data.clientSignatureDataUrl, "PNG", margin, y, 60, 20)
      y += 22
    } catch {
      doc.setFontSize(10)
      doc.setTextColor(200, 0, 0)
      doc.text("[Signature not captured]", margin, y)
      y += 8
    }
  }

  doc.setFontSize(7)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(150)
  doc.text("Digitally signed", margin, y)
  y += 6

  tableRow("Print Name", data.clientName)
  tableRow("Date", data.date)
  tableRow("Position/Title", data.companyName ? "Director / Authorised Signatory" : "Individual")

  // ── Add footers to all pages ──────────────────────────────────────
  const totalPages = doc.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    addFooter(doc, i, totalPages)
  }

  return doc
}
