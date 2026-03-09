import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Alali Property Partners",
  description:
    "Terms of service for Alali Property Partners property deal sourcing services.",
  alternates: { canonical: "/terms" },
}

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-bold text-charcoal">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-light">Last updated: February 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-light">
        <section>
          <h2 className="text-lg font-bold text-charcoal">1. About Us</h2>
          <p className="mt-2">
            Alali Property Partners Ltd (Company No. 17057401) is a property deal sourcing and
            introducer company registered in England and Wales. We act as a middle introducer —
            identifying and sourcing property investment opportunities for our clients and
            connecting them with regulated, compliant professionals to facilitate each transaction.
            Our registered address is 86-90 Paul Street, London EC2A 4NE. These terms govern your
            use of our website at www.alalipropertypartners.com and the services we provide.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">2. Our Services</h2>
          <p className="mt-2">
            We act as a middle introducer — we source property deals for investors and connect
            property owners with funded buyers. We do not provide regulated financial services.
            All regulated activities (such as mortgage advice, legal conveyancing, and financial
            planning) are carried out by the independent, appropriately qualified professionals
            we introduce you to. Our services include:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>Sourcing below-market-value, off-market, and high-yield property deals</li>
            <li>Preparing deal packs with comparables, yield analysis, and exit strategies</li>
            <li>Connecting property owners and agents with our investor network</li>
            <li>Bespoke sourcing to specific investor briefs</li>
            <li>Rent-to-rent deal identification and negotiation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">3. Not Financial or Legal Advice</h2>
          <p className="mt-2">
            We are a property deal sourcing and introducer company. As a middle introducer,
            our role is limited to identifying property opportunities and introducing clients to
            deals and to the regulated professionals needed to complete a transaction. Property
            deal sourcing and introduction is not a regulated activity, and we are not regulated
            by the Financial Conduct Authority (FCA). We do not provide financial advice,
            investment advice, mortgage advice, tax advice, or legal advice.
          </p>
          <p className="mt-2">
            The information we provide, including deal packs, yield calculations, and comparable
            data, is for informational purposes only and should not be relied upon as the sole
            basis for any investment decision.
          </p>
          <p className="mt-2">
            Where regulated services are required (such as mortgage advice or legal
            conveyancing), we introduce you to independent, FCA-regulated brokers, qualified
            solicitors, and other appropriately authorised professionals. These professionals
            act independently and are responsible for their own compliance and regulatory
            obligations. We strongly recommend that you take independent professional advice
            before proceeding with any property transaction. All investment carries risk, and
            property values and rental income can go down as well as up.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">4. Fees and Payment</h2>
          <p className="mt-2 font-semibold text-charcoal">All fees are payable upfront.</p>
          <p className="mt-1">
            All sourcing fees are payable in full upfront upon instruction. You are entitled to
            a 14-day client due diligence period from the date the deal is presented to you. If,
            during this period, you determine that the property does not meet your requirements,
            you may request a refund subject to the conditions set out below.
          </p>
          <p className="mt-3 font-semibold text-charcoal">14-Day Due Diligence and Refund Policy:</p>
          <p className="mt-1">
            You have 14 days from the date a deal is presented to carry out your own due diligence.
            If during this period you decide the property is not suitable, you may request a
            refund of the sourcing fee. Refund requests must be made in writing within the 14-day
            period. Refunds will not be issued after the 14-day due diligence period has expired,
            or where you have proceeded with the transaction (for example, by instructing
            solicitors or applying for a mortgage on the property). We reserve the right to deduct
            reasonable administrative costs from any refund where significant work has been
            undertaken on your behalf.
          </p>
          <p className="mt-3 font-semibold text-charcoal">Investment Purchase:</p>
          <p className="mt-1">
            Our sourcing fee is 2% of the purchase price (minimum £3,000), payable upfront on
            instruction. The 14-day due diligence and refund policy applies.
          </p>
          <p className="mt-3 font-semibold text-charcoal">Rent-to-Rent:</p>
          <p className="mt-1">
            Fees start from £2,750, payable upfront on instruction. The 14-day due diligence
            and refund policy applies.
          </p>
          <p className="mt-3 font-semibold text-charcoal">Bespoke Sourcing:</p>
          <p className="mt-1">
            A £1,000 retainer is payable upfront on brief. We then have 14 days to source a deal
            that matches your criteria. If we do not deliver within 14 days, you receive a full
            refund of the retainer. If you proceed, the retainer is deducted from the final
            sourcing fee (typically 2–3% of purchase price), with the balance payable upfront
            on instruction. The 14-day due diligence and refund policy applies to the final
            sourcing fee.
          </p>
          <p className="mt-3 font-semibold text-charcoal">Referral Fees:</p>
          <p className="mt-1">
            We pay referral fees to property owners, agents, and introducers on deals that complete.
            Referral fee amounts are agreed on a case-by-case basis.
          </p>
          <p className="mt-3">
            All fees are plus VAT where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">5. Deal Packs and Information</h2>
          <p className="mt-2">
            We prepare deal packs using data from sources we believe to be reliable, including
            Land Registry records, rental market data, and local comparable evidence. However, we
            do not guarantee the accuracy, completeness, or timeliness of any information provided.
          </p>
          <p className="mt-2">
            You are responsible for conducting your own due diligence before committing to any
            property transaction. This includes instructing your own solicitor, surveyor, and
            mortgage broker. We accept no liability for losses arising from reliance on information
            in our deal packs without independent verification.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">6. No Guaranteed Returns</h2>
          <p className="mt-2">
            We do not guarantee any specific return on investment, rental yield, capital
            appreciation, or occupancy rate. Projections and estimates included in deal packs are
            based on current market conditions and are not guarantees of future performance.
            Property investment involves risk and you may not recover the full amount invested.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">7. Confidentiality</h2>
          <p className="mt-2">
            Deal packs and property information provided to you are confidential and intended
            solely for your use. You agree not to share, distribute, or forward deal information
            to third parties without our prior written consent. We reserve the right to present
            deals to multiple investors simultaneously unless a bespoke exclusivity arrangement has
            been agreed in writing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">8. WhatsApp Broadcast</h2>
          <p className="mt-2">
            Our WhatsApp Deal Broadcast is a free service. By joining, you consent to receiving
            property deal notifications via WhatsApp. You can leave the broadcast at any time by
            exiting the group or contacting us. We will never share your phone number with other
            group members or third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">9. Limitation of Liability</h2>
          <p className="mt-2">
            To the fullest extent permitted by law, Alali Property Partners Ltd shall not be liable
            for any indirect, incidental, special, consequential, or punitive damages, or any loss
            of profits or revenue, whether incurred directly or indirectly, arising from your use
            of our services or reliance on any information we provide.
          </p>
          <p className="mt-2">
            Our total liability for any claim arising from our services shall not exceed the total
            fees paid by you to us in connection with the specific deal or service giving rise to
            the claim.
          </p>
          <p className="mt-2">
            Nothing in these terms excludes or limits our liability for fraud, death, or personal
            injury caused by our negligence, or any other liability that cannot be excluded by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">10. Intellectual Property</h2>
          <p className="mt-2">
            All content on this website, including text, images, logos, and design, is the property
            of Alali Property Partners Ltd and is protected by copyright. You may not reproduce,
            distribute, or use any content without our written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">11. Governing Law</h2>
          <p className="mt-2">
            These terms are governed by and construed in accordance with the laws of England and
            Wales. Any disputes arising from these terms or our services shall be subject to the
            exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">12. Changes to These Terms</h2>
          <p className="mt-2">
            We may update these terms from time to time. Any changes will be posted on this page
            with an updated date. Continued use of our website or services after changes are posted
            constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">13. Contact Us</h2>
          <p className="mt-2">
            If you have any questions about these terms, please contact us:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>Email: contact@alalipropertypartners.com</li>
            <li>Phone: 020 4515 5330</li>
            <li>Address: 86-90 Paul Street, London EC2A 4NE</li>
          </ul>
        </section>
      </div>

      <Link href="/" className="mt-10 inline-block text-sm text-gold hover:text-gold-light">
        &larr; Back to homepage
      </Link>
    </main>
  )
}
