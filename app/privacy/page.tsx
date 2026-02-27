import Link from "next/link"

export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-bold text-charcoal">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-light">Last updated: February 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-light">
        <section>
          <h2 className="text-lg font-bold text-charcoal">1. Who We Are</h2>
          <p className="mt-2">
            Alali Property Partners Ltd (Company No. 17057401) is a property deal sourcing company
            registered in England and Wales. Our registered address is 86-90 Paul Street, London
            EC2A 4NE. When we refer to &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;,
            we mean Alali Property Partners Ltd.
          </p>
          <p className="mt-2">
            For any data protection queries, contact us at{" "}
            <a href="mailto:contact@alalipropertypartners.com" className="text-gold hover:underline">
              contact@alalipropertypartners.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">2. What Data We Collect</h2>
          <p className="mt-2">We collect the following personal data when you use our website:</p>
          <p className="mt-2 font-semibold text-charcoal">Contact form submissions:</p>
          <ul className="mt-1 list-inside list-disc space-y-1 pl-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Your role (e.g. Investor, Property Owner, Estate Agent, Sourcer)</li>
            <li>Investment preferences (strategy, budget, preferred areas) — if provided</li>
            <li>Property details (address, asking price, property type, brief details) — if provided</li>
            <li>Whether you opted into our WhatsApp broadcast</li>
            <li>How you heard about us</li>
          </ul>
          <p className="mt-3 font-semibold text-charcoal">Automatically collected:</p>
          <ul className="mt-1 list-inside list-disc space-y-1 pl-2">
            <li>Basic analytics data (page views, device type, browser) via Vercel Analytics</li>
            <li>IP address (processed by our form delivery service)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">3. How We Use Your Data</h2>
          <p className="mt-2">We use your personal data for the following purposes:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>To respond to your enquiry and discuss potential property deals</li>
            <li>To send you property opportunities that match your criteria</li>
            <li>To add you to our WhatsApp Deal Broadcast (only if you opt in)</li>
            <li>To contact you by phone, email, or WhatsApp regarding your enquiry</li>
            <li>To improve our website and services</li>
          </ul>
          <p className="mt-2">
            We will never sell your personal data to third parties or use it for purposes unrelated
            to our property sourcing services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">4. Legal Basis for Processing</h2>
          <p className="mt-2">
            Under the UK General Data Protection Regulation (UK GDPR), we process your data on the
            following bases:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>
              <span className="font-semibold text-charcoal">Consent</span> — when you submit our
              contact form or opt into our WhatsApp broadcast, you consent to us processing your data
              for the stated purposes. You can withdraw consent at any time.
            </li>
            <li>
              <span className="font-semibold text-charcoal">Legitimate interest</span> — to respond
              to enquiries, provide our sourcing services, and improve our website.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">5. Third Parties</h2>
          <p className="mt-2">
            We use the following third-party services to operate our website and process your data:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>
              <span className="font-semibold text-charcoal">Web3Forms</span> — processes and
              delivers form submissions to our email inbox. Their privacy policy is available at
              web3forms.com.
            </li>
            <li>
              <span className="font-semibold text-charcoal">Vercel</span> — hosts our website and
              may collect basic analytics data.
            </li>
            <li>
              <span className="font-semibold text-charcoal">WhatsApp (Meta)</span> — used for our
              deal broadcast group if you opt in.
            </li>
          </ul>
          <p className="mt-2">
            We do not share your personal data with any other third parties unless required by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">6. Data Retention</h2>
          <p className="mt-2">
            We retain your personal data for as long as necessary to provide our services and
            fulfil the purposes described in this policy. If you become a client, we retain your
            data for the duration of our business relationship and for up to 6 years afterwards
            for legal and regulatory purposes. If you enquire but do not become a client, we
            retain your data for up to 2 years unless you request deletion sooner.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">7. Your Rights</h2>
          <p className="mt-2">Under UK GDPR, you have the right to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time (including opting out of our WhatsApp broadcast)</li>
            <li>Object to processing based on legitimate interest</li>
            <li>Request a copy of your data in a portable format</li>
            <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO)</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, email us at{" "}
            <a href="mailto:contact@alalipropertypartners.com" className="text-gold hover:underline">
              contact@alalipropertypartners.com
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">8. Cookies</h2>
          <p className="mt-2">
            Our website uses essential cookies required for the site to function. We do not use
            advertising or tracking cookies. Third-party services (such as Vercel) may set their
            own cookies for performance and analytics purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">9. Changes to This Policy</h2>
          <p className="mt-2">
            We may update this privacy policy from time to time. Any changes will be posted on this
            page with an updated date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-charcoal">10. Contact Us</h2>
          <p className="mt-2">
            If you have any questions about this privacy policy or how we handle your data, please
            contact us:
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
