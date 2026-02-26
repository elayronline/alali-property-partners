import Link from "next/link"

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-bold text-charcoal">Terms of Service</h1>
      <p className="mt-4 text-muted-light">
        Our terms of service are being finalised and will be published here shortly. If you have any
        questions, please contact us at{" "}
        <a href="mailto:deals@alaliproperty.co.uk" className="text-gold hover:underline">
          deals@alaliproperty.co.uk
        </a>
        .
      </p>
      <p className="mt-2 text-sm text-muted-light">Last updated: February 2026</p>
      <Link href="/" className="mt-8 inline-block text-sm text-gold hover:text-gold-light">
        ← Back to homepage
      </Link>
    </main>
  )
}
