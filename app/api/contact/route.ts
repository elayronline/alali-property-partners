import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const {
      fullName,
      email,
      phone,
      role,
      whatsappBroadcast,
      hearAbout,
      strategy,
      budget,
      preferredAreas,
      propertyAddress,
      askingPrice,
      propertyType,
      briefDetails,
    } = data

    const isInvestor = role === "Investor"
    const isSeller =
      role === "Property Owner" ||
      role === "Estate Agent" ||
      role === "Sourcer"

    let roleSpecificHtml = ""

    if (isInvestor) {
      roleSpecificHtml = `
        <h3 style="color:#c9a84c;margin-top:24px;margin-bottom:8px;">Investment Preferences</h3>
        <table style="width:100%;border-collapse:collapse;">
          ${strategy ? `<tr><td style="padding:6px 12px;color:#999;width:140px;">Strategy</td><td style="padding:6px 12px;color:#fff;">${strategy}</td></tr>` : ""}
          ${budget ? `<tr><td style="padding:6px 12px;color:#999;width:140px;">Budget</td><td style="padding:6px 12px;color:#fff;">${budget}</td></tr>` : ""}
          ${preferredAreas ? `<tr><td style="padding:6px 12px;color:#999;width:140px;">Preferred Areas</td><td style="padding:6px 12px;color:#fff;">${preferredAreas}</td></tr>` : ""}
        </table>
      `
    }

    if (isSeller) {
      roleSpecificHtml = `
        <h3 style="color:#c9a84c;margin-top:24px;margin-bottom:8px;">Property Details</h3>
        <table style="width:100%;border-collapse:collapse;">
          ${propertyAddress ? `<tr><td style="padding:6px 12px;color:#999;width:140px;">Address</td><td style="padding:6px 12px;color:#fff;">${propertyAddress}</td></tr>` : ""}
          ${askingPrice ? `<tr><td style="padding:6px 12px;color:#999;width:140px;">Asking Price</td><td style="padding:6px 12px;color:#fff;">£${askingPrice}</td></tr>` : ""}
          ${propertyType ? `<tr><td style="padding:6px 12px;color:#999;width:140px;">Property Type</td><td style="padding:6px 12px;color:#fff;">${propertyType}</td></tr>` : ""}
          ${briefDetails ? `<tr><td style="padding:6px 12px;color:#999;width:140px;">Details</td><td style="padding:6px 12px;color:#fff;">${briefDetails}</td></tr>` : ""}
        </table>
      `
    }

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#1a1a1a;padding:32px;border-radius:12px;">
        <h2 style="color:#c9a84c;margin-top:0;">New Enquiry from ${fullName}</h2>

        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:6px 12px;color:#999;width:140px;">Name</td><td style="padding:6px 12px;color:#fff;">${fullName}</td></tr>
          <tr><td style="padding:6px 12px;color:#999;">Email</td><td style="padding:6px 12px;color:#fff;"><a href="mailto:${email}" style="color:#c9a84c;">${email}</a></td></tr>
          <tr><td style="padding:6px 12px;color:#999;">Phone</td><td style="padding:6px 12px;color:#fff;"><a href="tel:${phone}" style="color:#c9a84c;">${phone}</a></td></tr>
          <tr><td style="padding:6px 12px;color:#999;">Role</td><td style="padding:6px 12px;color:#fff;">${role}</td></tr>
          <tr><td style="padding:6px 12px;color:#999;">WhatsApp Broadcast</td><td style="padding:6px 12px;color:#fff;">${whatsappBroadcast ? "Yes" : "No"}</td></tr>
          ${hearAbout ? `<tr><td style="padding:6px 12px;color:#999;">Heard About Us</td><td style="padding:6px 12px;color:#fff;">${hearAbout}</td></tr>` : ""}
        </table>

        ${roleSpecificHtml}
      </div>
    `

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Alali Property Partners" <${process.env.SMTP_USER}>`,
      to: "contact@alalipropertypartners.com",
      replyTo: email,
      subject: `New Enquiry: ${fullName} (${role})`,
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error"
    console.error("Contact form error:", message)
    return NextResponse.json(
      { error: "Failed to send email", detail: message },
      { status: 500 }
    )
  }
}
