import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Faq } from "@/components/Faq"
import { SectionDivider } from "@/components/ui/SectionDivider"

export const metadata: Metadata = {
  title: "Hands-Off HMO Investment for Time-Poor Investors",
  description:
    "Hands-off HMO investment for busy professionals and armchair investors. We find, verify and — through Source & Develop — project-manage the conversion for you.",
  keywords: [
    "hands-off property investment UK",
    "armchair property investment",
    "hands-off HMO investment",
    "property sourcing for busy professionals",
    "time-poor property investor",
    "hands-off property portfolio building",
    "done-for-you property investment UK",
    "HMO investment without the legwork",
  ],
  alternates: { canonical: "/hands-off-hmo-investment" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alali Property Partners — HMO Sourcing, London & the South East" }],
    title: "Hands-Off HMO Investment | Alali Property Partners",
    description:
      "For investors with capital and a strategy but no time to search. We source, verify and can project-manage the full HMO conversion across London and the South East.",
    url: "/hands-off-hmo-investment",
    type: "article",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Hands-Off HMO Investment | Alali Property Partners",
    description:
      "For investors with capital and a strategy but no time to search. We source, verify and can project-manage the full HMO conversion.",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alalipropertypartners.com/hands-off-hmo-investment#service",
  name: "Hands-Off HMO Investment Sourcing",
  description:
    "HMO deal sourcing for investors who do not have time to find deals themselves. We search, verify and present HMO and conversion-ready opportunities across Greater London and the South of England, and through our Source & Develop service can project-manage the full conversion end to end.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.alalipropertypartners.com/#organization",
    name: "Alali Property Partners",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "AdministrativeArea", name: "South East England" },
  ],
  serviceType: "Property Deal Sourcing",
  audience: {
    "@type": "Audience",
    audienceType:
      "Time-poor professionals, business owners, armchair and hands-off investors, and landlords scaling a UK HMO portfolio",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does hands-off HMO investment actually mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It means the search and the legwork sit with us rather than with you. We find the property, verify the numbers against Land Registry comparables and observed local rents, check the planning and licensing position, and present it as a complete deal pack. Through our Source & Develop service we can also project-manage the full HMO conversion — design, planning, build and handover. What stays with you is the decision and the purchase itself: you instruct your own solicitor, mortgage broker and surveyor, and you own the property directly. We are a sourcing and introducer company, not a managing agent, and we do not invest on your behalf.",
      },
    },
    {
      "@type": "Question",
      name: "How much of my time does this actually take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Realistically: a short briefing call to set your strategy, budget and target areas, then reviewing each deal pack we send and deciding whether to proceed. Off-market deals move quickly, so the standard decision window after a deal pack is released is 48 hours — enough time to take initial input from your solicitor, broker or surveyor. Beyond that, viewings, vendor and agent liaison, and coordination between professionals are handled by us. We cannot remove the parts the law requires you to do personally, such as signing contracts and satisfying your lender and solicitor.",
      },
    },
    {
      "@type": "Question",
      name: "Is this suitable if I have never bought an HMO before?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and a good portion of our clients are moving up from single-lets. The parts that catch first-time HMO investors out are usually Article 4 directions, HMO licensing thresholds and whether a conversion can proceed under permitted development or needs full planning. We check that position for every property we present and set it out in the deal pack. It remains information rather than advice, so it must be independently verified by your own solicitor or planning consultant before you commit.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build a portfolio for me over time rather than one deal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Portfolio Builder is an annual membership for investors acquiring on an ongoing basis rather than buying once. It includes a monthly feasibility report and continued access to sourced deals as they come up. Investors buying a single property usually take the Deal List or commission a bespoke search instead. Pricing for each is published on our pricing page.",
      },
    },
    {
      "@type": "Question",
      name: "What do you not do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do not manage or let properties, we do not provide financial, mortgage, tax or legal advice, and we do not guarantee returns. Property deal sourcing is not a regulated activity. Rents, yields and refurbishment costs we provide are indicative reference points drawn from public data and require your own independent verification. Regulated work is carried out by the FCA-regulated brokers, qualified solicitors and other authorised professionals we introduce you to.",
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.alalipropertypartners.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hands-Off HMO Investment",
      item: "https://www.alalipropertypartners.com/hands-off-hmo-investment",
    },
  ],
}

const audiences = [
  {
    name: "Time-poor professionals",
    detail:
      "Consultants, clinicians, City professionals and business owners with capital to deploy and no spare evenings to spend on portals and viewings.",
  },
  {
    name: "Armchair investors",
    detail:
      "Investors who want the search, the analysis and the conversion handled, and would rather review a considered shortlist than build one.",
  },
  {
    name: "Landlords scaling up",
    detail:
      "Existing landlords moving from single-lets into HMOs who want repeatable deal flow instead of waiting for something to appear on Rightmove.",
  },
  {
    name: "First-time HMO buyers",
    detail:
      "Investors who understand property but not yet Article 4, licensing thresholds or permitted development — the parts that decide whether a conversion works.",
  },
]

const weDo = [
  "Search on- and off-market, including pre-auction and direct-to-vendor",
  "Verify comparables against Land Registry and observed local lettings data",
  "Check the Article 4, planning and HMO licensing position",
  "Estimate refurbishment and conversion scope with our build team",
  "Attend and arrange viewings, and liaise with vendors and agents",
  "Introduce FCA-regulated brokers, solicitors and vetted contractors",
]

const youDo = [
  "Set the strategy, budget and target areas",
  "Decide whether to proceed on each deal presented",
  "Instruct your own solicitor, mortgage broker and surveyor",
  "Satisfy your lender and sign the contracts personally",
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-24">
          <div className="animated-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="font-display text-base italic font-medium tracking-normal text-gold/70 normal-case">
                For
              </span>
              <span className="mx-3 inline-block h-px w-6 align-middle bg-gold/40" />
              Time-Poor Investors
            </p>
            <h1 className="font-display mt-4 text-4xl tracking-tight text-white sm:text-6xl">
              Hands-off HMO investment
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              For investors with the capital and the strategy, but not the hours. We do the
              searching, the verifying and the coordinating across Greater London and the South East
              — and through Source &amp; Develop, the conversion itself.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-lg bg-gold px-7 py-3.5 text-sm font-bold text-dark-bg transition-colors hover:bg-gold-light"
              >
                Tell Us What You&apos;re After &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="bg-ink px-4 py-20 sm:px-6 sm:py-28">
          <SectionDivider variant="light" className="mb-16" />
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-center text-3xl text-white sm:text-4xl">
              Who this is for
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/60">
              The common thread is not inexperience — it is time. Most of our clients know what they
              want to own and simply cannot spend their week hunting for it.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {audiences.map((a) => (
                <div key={a.name} className="rounded-xl border border-white/10 bg-dark-bg-light/60 p-5">
                  <p className="font-display text-lg text-white">{a.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/55">{a.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Split of responsibilities */}
        <section className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28">
          <div className="animated-grid pointer-events-none absolute inset-0" />
          <SectionDivider variant="dark" className="relative mb-16" />
          <div className="relative mx-auto max-w-4xl">
            <h2 className="font-display text-center text-3xl text-white sm:text-4xl">
              What we take on, and what stays with you
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/60">
              &ldquo;Hands-off&rdquo; should mean something specific. Here is the honest split.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gold/20 bg-dark-bg-light/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">We handle</p>
                <ul className="mt-5 space-y-3">
                  {weDo.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-dark-bg-light/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Stays with you
                </p>
                <ul className="mt-5 space-y-3">
                  {youDo.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/development-management"
                className="inline-block py-2 text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                See the fully managed conversion service &rarr;
              </Link>
              <Link
                href="/how-it-works"
                className="inline-block py-2 text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
              >
                How sourcing works &rarr;
              </Link>
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-white/40">
              Alali Property Partners sources and introduces. We are not a managing agent or letting
              agent, we do not invest on your behalf, and we do not guarantee returns. Property deal
              sourcing is not a regulated activity and nothing here is financial, mortgage, tax or
              legal advice. Rents, yields and refurbishment figures are indicative and require your
              own independent verification.
            </p>
          </div>
        </section>

        <Faq items={faqSchema.mainEntity} heading="Hands-off HMO investment — FAQs" />
      </main>
      <Footer />
    </>
  )
}
