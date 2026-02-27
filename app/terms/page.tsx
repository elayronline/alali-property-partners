import Link from "next/link"

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-bold text-charcoal">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-light">Last updated: February 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-light">
        <section>
          <h2 className="text-lg font-bold text-charcoal">1. About Us</h2>
          <p className="mt-2">
            Alali Property Partners Ltd (Company No. 17057401) is a property deal sourcing company
            registered in England and Wales. Our registered address is 86-90 Paul Street, London
            EC2A 4NE. These terms govern your use of our website at www.alalipropertypartners.com
            and the services we provide.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">2. Our Services</h2>
          <p className="mt-2">
            We source property deals for investors and connect property owners with funded buyers.
            Our services include:
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
            We are a property deal sourcing company. We are not regulated by the Financial Conduct
            Authority (FCA) and do not provide financial advice, investment advice, tax advice, or
            legal advice. The information we provide, including deal packs, yield calculations, and
            comparable data, is for informational purposes only and should not be relied upon as
            the sole basis for any investment decision.
          </p>
          <p className="mt-2">
            We strongly recommend that you seek independent professional advice from a qualified
            solicitor, mortgage broker, accountant, or financial adviser before proceeding with any
            property transaction. All investment carries risk, and property values and rental income
            can go down as well as up.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">4. Fees and Payment</h2>
          <p className="mt-2 font-semibold text-charcoal">Investment Purchase:</p>
          <p className="mt-1">
            Our sourcing fee is 2% of the purchase price (minimum £3,000). Payment is split: 50%
            on reservation and 50% on completion. If the deal does not complete, the completion
            balance is not payable.
          </p>
          <p className="mt-3 font-semibold text-charcoal">Rent-to-Rent:</p>
          <p className="mt-1">
            Fees start from £2,750, payable on heads of terms agreement.
          </p>
          <p className="mt-3 font-semibold text-charcoal">Bespoke Sourcing:</p>
          <p className="mt-1">
            A £1,000 retainer is payable on brief. We then have 14 days to source a deal that
            matches your criteria. If we do not deliver within 14 days, you receive a full refund.
            If you proceed, the retainer is deducted from the final sourcing fee (typically 2–3%
            of purchase price), with the balance payable on completion.
          </p>
          <p className="mt-3 font-semibold text-charcoal">Referral Fees:</p>
          <p className="mt-1">
            We pay referral fees to property owners, agents, and introducers on deals that complete.
            Referral fee amounts are agreed on a case-by-case basis.
          </p>
          <p className="mt-3">
            All fees are plus VAT where applicable. Fees are non-refundable once a deal completes
            unless otherwise agreed in writing.
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
          <h2 className="text-lg font-bold text-charcoal">10. Professional Indemnity Insurance</h2>
          <p className="mt-2">
            We hold professional indemnity insurance to protect our clients in the event of
            professional negligence or errors in our services. Details of our cover are available
            on request.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">11. Intellectual Property</h2>
          <p className="mt-2">
            All content on this website, including text, images, logos, and design, is the property
            of Alali Property Partners Ltd and is protected by copyright. You may not reproduce,
            distribute, or use any content without our written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">12. Governing Law</h2>
          <p className="mt-2">
            These terms are governed by and construed in accordance with the laws of England and
            Wales. Any disputes arising from these terms or our services shall be subject to the
            exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">13. Changes to These Terms</h2>
          <p className="mt-2">
            We may update these terms from time to time. Any changes will be posted on this page
            with an updated date. Continued use of our website or services after changes are posted
            constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">14. Contact Us</h2>
          <p className="mt-2">
            If you have any questions about these terms, please contact us:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>Email: contact@alalipropertypartners.com</li>
            <li>Phone: +44 7802 816863</li>
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
