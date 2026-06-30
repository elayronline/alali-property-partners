import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Alali Property Partners — sourcing fees, 48-hour decision SLA, refund policy, and introducer terms. Covering London & the South of England.",
  alternates: { canonical: "/terms" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alali Property Partners — HMO Sourcing, London & the South East" }],
    title: "Terms of Service | Alali Property Partners",
    description:
      "Terms governing our property deal sourcing services, fees, and 48-hour decision SLA policy.",
    url: "/terms",
    type: "article",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Terms of Service | Alali Property Partners",
    description:
      "Terms governing our property deal sourcing services, fees, and 48-hour decision SLA policy.",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.alalipropertypartners.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms of Service",
      item: "https://www.alalipropertypartners.com/terms",
    },
  ],
}

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
        <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">
          §
        </span>
        <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
        Legal
      </p>
      <h1 className="font-display mt-3 text-4xl tracking-tight text-charcoal sm:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-muted-light">Last updated: June 2026</p>

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
            <li>Sharing off-market deals within our private investor network</li>
            <li>Bespoke sourcing to specific investor briefs</li>
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
          {/* DRAFT — fees rewritten 2026-06 to the fixed-fee model. REQUIRES
              SOLICITOR REVIEW before publishing: deposits, a monthly subscription,
              and the feasibility add-on all involve client money. */}
          <h2 className="text-lg font-bold text-charcoal">4. Fees and Payment</h2>
          <p className="mt-2">
            All fees are VAT inclusive and there are no hidden costs. The fee that applies depends on
            how you choose to work with us, as set out below. Our main sourcing fee is payable on
            completion.
          </p>

          <p className="mt-3 font-semibold text-charcoal">Portfolio Builder (membership):</p>
          <p className="mt-1">
            Portfolio Builder is an optional membership charged at £249 per month (VAT inclusive) on a
            12-month minimum term — an annual commitment, billed monthly. Fees already paid are
            non-refundable. Membership includes 48-hour priority access to new deals, an £850 credit
            applied to the sourcing fee on each completed Deal List or Bespoke Sourcing transaction,
            one free feasibility report each month, priority access to limited Source &amp; Develop
            project slots, monthly market intelligence, a quarterly portfolio review call, and priority
            introductions to the independent professionals we work with.
          </p>

          <p className="mt-3 font-semibold text-charcoal">The Deal List:</p>
          <p className="mt-1">
            The sourcing fee for a deal taken from the Deal List is a fixed £5,000 per deal (VAT
            inclusive), covering deals sourced through our private contacts (off-market) and through
            our compliant agent network (on-market). It is paid in two stages:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>
              <span className="font-semibold text-charcoal">£500 refundable deposit</span>, paid
              after the sourcing agreement is signed, to unlock the full deal pack and arrange a
              viewing.
            </li>
            <li>
              <span className="font-semibold text-charcoal">£4,500 balance</span>, payable on
              completion of the purchase.
            </li>
          </ul>
          <p className="mt-2">
            The £500 deposit is refundable where the deal is no longer available, or on a genuine
            decision not to proceed after viewing (subject to the conditions below). Where you do
            proceed, the deposit is credited against the £5,000 fee. Vendor and agent contact details
            are not included in the deal pack; we facilitate viewings and introductions on your
            behalf throughout the decision and transaction process.
          </p>

          <p className="mt-3 font-semibold text-charcoal">Bespoke Sourcing:</p>
          <p className="mt-1">
            Bespoke Sourcing is a fixed fee of £8,000 (VAT inclusive) for a dedicated search to your
            brief, sourced exclusively for you. It is paid in three stages:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>
              <span className="font-semibold text-charcoal">£2,667 on signing</span>, which secures a
              dedicated 14-day search. This is refundable if we do not present a suitable deal
              matching your brief within that window (subject to terms).
            </li>
            <li>
              <span className="font-semibold text-charcoal">£2,667 on presentation</span> of a
              matching deal.
            </li>
            <li>
              <span className="font-semibold text-charcoal">£2,666 on completion</span> of the
              purchase.
            </li>
          </ul>

          <p className="mt-3 font-semibold text-charcoal">Source &amp; Develop:</p>
          <p className="mt-1">
            Source &amp; Develop is offered by application, with a limited number of projects taken on
            each quarter. Fees are quoted per project and paid in stages against project milestones
            (search, secured, planning, build and handover), as set out in the individual project
            agreement.
          </p>

          <p className="mt-3 font-semibold text-charcoal">Feasibility reports:</p>
          <p className="mt-1">
            A feasibility report is available as a paid add-on, priced and agreed on request.
            Portfolio Builder members receive one free feasibility report each month.
          </p>

          <p className="mt-3 font-semibold text-charcoal">48-Hour Decision SLA and Refund Policy:</p>
          <p className="mt-1">
            For both the Deal List and Bespoke Sourcing, you have a 48-hour decision SLA — from the
            time the deal pack is released (Deal List) or the deal is presented (Bespoke Sourcing) —
            to review the pack, take initial input from your solicitor, surveyor, and mortgage
            broker, and decide whether to proceed. Most off-market deals are time-sensitive, so this
            short standard window reflects the urgency typical of these transactions. We may, at our
            discretion, grant extensions where you demonstrate fair and justified reasoning (for
            example, awaiting a survey or a mortgage decision in principle) and the vendor agrees. Any
            extension will be confirmed in writing.
          </p>
          <p className="mt-2">
            If you decide not to proceed and there are valid reasons for that decision (for example,
            material findings on independent due diligence, a change in personal circumstances, or the
            deal materially diverging from the pack or brief), the £500 Deal List deposit, or the
            £2,667 Bespoke Sourcing signing payment, is refundable on written request within the
            decision SLA. Balances are only ever charged once you have decided to proceed, so they are
            never paid in scenarios where a refund would apply. Refunds will not be issued once the
            decision SLA (or any agreed extension) has expired, where you have proceeded with the
            transaction (for example by instructing solicitors or applying for a mortgage on the
            property), or where you cannot evidence valid reasons not to proceed. We reserve the right
            to deduct reasonable administrative costs from any refund where significant work has been
            undertaken on your behalf.
          </p>

          <p className="mt-3 font-semibold text-charcoal">Referral Fees:</p>
          <p className="mt-1">
            We pay referral fees to property owners, agents, and introducers on deals that complete.
            Referral fee amounts are agreed on a case-by-case basis.
          </p>

          <p className="mt-3">All fees are VAT inclusive.</p>
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
          <h2 className="text-lg font-bold text-charcoal">8. Deal Mailing List</h2>
          <p className="mt-2">
            Our deal mailing list is a free service. By joining, you consent to receiving occasional
            property deal notifications by email. You can unsubscribe at any time using the
            unsubscribe option or by contacting us. We will never share your email address or other
            details with third parties.
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
            <li>Phone: 020 4515 8438</li>
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
