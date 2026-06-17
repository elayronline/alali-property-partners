# Alali Property Partners — Brand, UX & Technical SEO Audit

**Date:** 17 June 2026
**Auditor scope:** Brand/positioning, IA, conversion, tone, trust/compliance, offers/pricing, technical SEO, accessibility, leftovers to retire.
**Method:** Codebase audit of the Next.js App Router repo. The repo is in sync with `origin/main` and Vercel deploys production from `main`, so the codebase is authoritative for the live site (`https://www.alalipropertypartners.com`). Every finding cites `file:line` and the affected URL. **No code was changed in this pass.**

**Target state being measured against:** narrowed niche = high-yield HMO + conversion-ready BRR across Greater London & the South East; edge = access (pre-auction, off-market, direct-to-vendor, compliant agents); primary conversion goal = make contact / share what you're after (inclusive of "not sure yet"); mailing list = secondary CTA; serious-operator voice; offers = Bespoke Sourcing (£1,000 + 2.4%), Sourced Deals (2.4%, £500 unlock), Development Management (by application, live & selective).

---

## ⚠️ One decision flag before you read on

The brief instructs me to treat **"Search Fee" (not "retainer")** as the target wording for the £1,000 bespoke fee. A saved note from the previous working session records that **you already considered and *declined* the "Search Fee" rename**, choosing to keep "retainer". This audit flags every "retainer" instance per the brief, but I am **not** treating the rename as settled — see **P1-B**. Confirm which way you want it before any edit; the rest of the audit stands regardless.

---

## ✅ Implementation status (updated 17 Jun 2026, post-audit)

Decisions taken: **(P1-B)** keep "retainer" — rename declined; **(P0)** align the contract to the site now, with solicitor confirmation to follow.

**Applied:**
- **P1 (SEO):** added an `<h1>` to `/how-it-works`, `/why-us`, `/contact` (sr-only, keyword-rich).
- **P2 (SEO):** re-niched `/bespoke` metadata, keywords, OG/Twitter, Service + FAQ schema — removed BTL/SA/R2R/R2SA/flips/commercial; also cleaned `/how-it-works` schema "(BTL, HMO, etc.)" and the home schema "standard buy-to-let" line; HowItWorks deal-pack "flips and developments" → "resale or refinance comparables".
- **P2 (credibility):** case study "Recent Deal" → "Case Study"; badge "Recent Deal, Hampshire" → "Hampshire". *(Still TODO: add the real completion date — not invented.)*
- **P0 (compliance):** reconciled the contract to `/terms` — PDF clause 3.3 (deduction → additional/not-credited) and clause 4 refund policy in **both** the generated PDF (`lib/generateContractPdf.ts`) and the on-page contract (`app/bespoke/page.tsx`). **⚠️ Get a solicitor to confirm the final wording before relying on it.**

- **P1 (positioning + conversion):** re-scoped the `/bespoke` page *body* — narrowed `residentialDealTypes` to HMO / conversion-ready BRR / change-of-use / "Other"; removed the **Commercial** entry point (single "Open my brief" HMO/BRR affordance). Added a **"talk first"** path on Step 1 (→ `/contact`).
- **P1 dead-code cleanup (DONE):** deleted all 9 commercial option arrays and every `propertyType === "commercial"` JSX branch in Step 3, and the commercial-only field blocks (company reg, trading address, preferred towns, VAT, floor/site area, WAULT, covenant, etc.). `app/bespoke/page.tsx` went **2,226 → 1,876 lines**. Internal email labels now read "HMO / BRR". `tsc` clean; `/bespoke` 200. *(Three `propertyType === "residential" ? (…) : (<></>)` ternaries remain as harmless always-true guards — no commercial content.)*
- **P2 (new niche pages, DONE):** built `/hmo-sourcing` (HMO + conversion-ready BRR explainer, Service + FAQ schema), `/development-management` (live selective service, by application, Service + FAQ schema), `/case-studies` (the real Hampshire deal via the `CaseStudy` component). All wired into `sitemap.ts` and the footer; all return 200.
- **P2 (CTA voice, DONE):** Hero primary CTA "Tell Us Your Brief" → "Tell Us What You're After".
- **P2 (CWV check, DONE):** hero video is webm 896K / mp4 1.0M with a 115K poster and `preload="metadata"`; poster is the likely LCP and the video is deferred — acceptable, no change made to avoid regressing a working hero.

**Still open / needs you:**
- **ICO registration number (P3):** cannot be added without the real number — I won't fabricate compliance data. Provide it and I'll add it to `/privacy`.
- **Founding-year "inconsistency" (P3): non-issue.** `foundingDate: "2025"` (incorporated) and "© 2026" (current year) are both correct — no change needed.
- **IA (optional):** the deeper split into a marketing `/bespoke` + gated `/bespoke/start` pay flow was *not* done (a "talk first" link was added instead). Raise if you want the full split.
- **`/case-studies` is a single deal** — add more real dated deals as they complete; do not invent.

---

## 1. Executive summary (most important first)

1. **The `/bespoke` page is the single biggest brand contradiction on the site.** It still advertises the *old* "any strategy, residential + commercial" sourcer — BTL, Serviced Accommodation, R2R, R2SA, BRRR, flips, lease options, plus a full commercial-property intake (office, retail, industrial, care homes, student, land). This directly undoes the niche narrowing. (`app/bespoke/page.tsx`, `app/bespoke/layout.tsx`)
2. **A legally material contradiction in the signed contract:** the generated PDF says the retainer **"shall be deducted from the final Sourcing Fee"** (`lib/generateContractPdf.ts:231`) and **"NO REFUNDS … under any circumstances"** after 14 days (`:243`) — the exact opposite of the website and the on-page contract, which say the fee is *additional, not credited* and *refundable on valid reasons*. The document the client actually signs disagrees with the site. **P0.**
3. **Three pages ship with no `<h1>`:** `/how-it-works`, `/why-us`, and `/contact` render components whose top heading is an `<h2>`. Each is a standalone indexed URL — missing H1 is a real on-page SEO defect. **P1.**
4. **The `/bespoke` flow is "pay £1,000 first, talk later".** Step 1 is literally **"Pay £1,000 Retainer & Continue"** (`app/bespoke/page.tsx:556,672`) before any conversation. This conflicts with the rebrand's primary goal (make contact, shape the brief on a call) and excludes the "not sure yet" investor. **P1.**
5. **"Retainer" is used site-wide** (~40+ instances) — the brief's target term is "Search Fee". Flagged, but gated on your decision (see warning above). **P1-B.**
6. **WhatsApp is fully gone** — zero `whatsapp` / `wa.me` / `chat.whatsapp` references anywhere. ✅ Nothing to remove. The mailing list correctly replaces it as a *secondary* CTA.
7. **No "coming soon" and no "finder's fee" anywhere.** Development Management is correctly framed **"By Application"** as a live, selective service (`components/Pricing.tsx:46-50`, `app/page.tsx:97-103`). ✅
8. **The case study is framed as a permanent "Recent Deal"** with no date (`components/CaseStudy.tsx:28,72`). The brief says treat it as *one dated example*, never a standing "recent" claim. **P2.**
9. **Compliance core is strong:** company no. 17057401, registered address, "not a regulated activity / not financial advice", "informational only", "no guaranteed returns", "we don't buy from our own pipeline", and per-figure disclaimers are all present and well-placed. Preserve all of it.
10. **Leftover broad-strategy keywords and schema** ("BTL bespoke sourcing", "commercial property sourcing UK", schema strategy lists naming R2R/SA/flips/commercial) dilute the niche's topical signal to search/AI engines. **P2.**

---

## 2. Prioritised recommendations

| Priority | Area | Current state | Recommended change | Why it matters | Effort | File(s) / URL |
|---|---|---|---|---|---|---|
| **P0** | Trust/compliance | Signed PDF says retainer **deducted** from fee (`:231`) and **no refunds** after 14 days (`:243`); site says additional + refundable | Reconcile the PDF contract clauses 3.3 & 4 to match the site (additional, not credited; refundable on valid reasons within SLA). Have a solicitor confirm the final wording | The legally binding document contradicts every public promise — a dispute risk and a credibility risk | M | `lib/generateContractPdf.ts:231,243`; mirror on-page `app/bespoke/page.tsx:911-943` |
| **P1** | Positioning | `/bespoke` sells BTL/SA/R2R/R2SA/BRRR/flips/lease-option + full commercial intake | Re-scope `/bespoke` to HMO + conversion-ready BRR (keep a single "Other / bespoke brief" catch-all). Demote commercial to an on-request line, not a headline service | This page reverses the entire niche narrowing for anyone who reaches it | L | `app/bespoke/page.tsx:95-241,1360`; `app/bespoke/layout.tsx:6,18,46,118` |
| **P1** | SEO | No `<h1>` on `/how-it-works`, `/why-us`, `/contact` | Add a page `<h1>` (or promote the section `<h2>`) on each standalone page | Every indexed page should have exactly one H1 for ranking + a11y | S | `app/how-it-works/page.tsx`, `app/why-us/page.tsx`, `app/contact/page.tsx` (or the rendered components) |
| **P1** | Conversion/IA | `/bespoke` opens with "Pay £1,000 Retainer & Continue" before any contact | Add a "Not sure yet? Talk to us first" path on `/bespoke`; make pay-first the *advanced* route for clients who've already spoken to you | Pay-before-conversation kills the primary goal and excludes brief-less investors | M | `app/bespoke/page.tsx:556,584,627-680` |
| **P1-B** | Offers wording | "Retainer" used ~40+ times | **Decision required:** rename to "Search Fee" per brief, OR keep "retainer" per your earlier call. Do not half-rename | Mixed terminology is worse than either choice; brief and prior decision conflict | M | site-wide (see §6 file list) |
| **P2** | Credibility | Case study is a permanent undated "Recent Deal" | Add a date ("Sourced Q1 2026") and label it "One example — every brief differs" | "Recent" decays; a dated proof point ages honestly | S | `components/CaseStudy.tsx:28,72,97` |
| **P2** | SEO | Obsolete keywords/schema (BTL/commercial/R2R/SA/flips) | Drop obsolete terms from `/bespoke` keywords + service/FAQ schema; keep HMO/BRR/conversion/location terms | Tightens topical relevance for the niche in search + AI answers | S | `app/bespoke/layout.tsx:7-21,46,86,118`; `app/how-it-works/page.tsx:107`; `app/page.tsx:130` |
| **P2** | Messaging | `WhatWeSource` keeps a BTL pill + `HowItWorks` deal-pack line names "flips and developments" | Reframe BTL as "single-let on request"; change deal-pack line to "indicative resale comparables where relevant" | Removes the last on-home-page broad-strategy signals | S | `components/WhatWeSource.tsx:33`; `components/HowItWorks.tsx:47` |
| **P2** | CTA voice | Primary CTA "Tell Us Your Brief" / eyebrow "Tell Us Your Brief" | Test "Tell Us What You're After" to match the inclusive, jargon-free voice | "Brief" reads as a barrier to investors without a defined brief | S | `components/Hero.tsx:97`; `components/ContactForm.tsx:234` |
| **P2** | CWV | Autoplay background video in hero (`hero-bg.webm/.mp4`) | Confirm mobile poster-first / lazy strategy; consider static poster on slow connections | Hero video is the likely LCP/bandwidth cost on mobile | M | `components/Hero.tsx:31-43` |
| **P2** | IA/SEO | No dedicated HMO, BRR, or Development Management page | Add `/hmo-sourcing`, `/brr-conversion` (or a combined niche explainer) and a `/development-management` page | Niche landing pages are the highest-intent SEO assets you're currently missing | L | new routes under `app/` |
| **P3** | Compliance | ICO registration number not shown | Add ICO registration number to `/privacy` if registered | Expected for a data-collecting UK business | S | `app/privacy/page.tsx` |
| **P3** | Consistency | `foundingDate: "2025"` in schema vs "© 2026" footer | Confirm correct founding year | Minor data hygiene for knowledge-graph | S | `app/layout.tsx:89`; `components/Footer.tsx:123` |

---

## 3. Section-by-section findings (the 9 areas)

### 3.1 Positioning & messaging

**Home page — mostly on-brand.** Hero, WhatWeSource (primary strategies), CoverageMap, WhyUs, Pricing, Footer all lead correctly with HMO + conversion-ready BRR across Greater London & the South East. The site-wide metadata and LocalBusiness schema are tightly niched (`app/layout.tsx:15-19,66`, `app/page.tsx:6-9,63-65`).

**Leftover broad-strategy language still live:**

- **`/bespoke` (worst offender).** Visible intake still offers the full old menu:
  - `app/bespoke/page.tsx:95-105` — `residentialDealTypes`: *"Buy-to-Let (Standard Single Let)", "Serviced Accommodation / Holiday Let", "Rent-to-Rent (R2R)", "Rent-to-SA…", "BRRR…", "Flip / Refurbishment for Sale", "Development / Conversion", "Lease Option"*.
  - `app/bespoke/page.tsx:166-181` — full `commercialSectors` list (office, retail, industrial, care home, student, land…).
  - `app/bespoke/page.tsx:1360` — Residential card subtitle literally reads **"BTL, HMO, SA, BRRR, Flips"**.
  - `app/bespoke/layout.tsx:46` (service schema) — *"residential strategies (BTL, BRR, BRRR, HMO, R2R, R2SA, SA, flips, lease options, development) and commercial sectors (office, retail, industrial, leisure, healthcare, student, mixed use, land)"*.
  - `app/bespoke/layout.tsx:118` (FAQ schema) — *"We source to Buy-to-Let (BTL), HMO, Serviced Accommodation, Rent-to-Rent (R2R)…"*.
  - **Before:** "Source property deals to your exact brief … Residential and commercial." (`layout.tsx:26`)
    **After:** "Bespoke HMO & conversion-ready BRR sourcing to your exact brief across Greater London & the South East. Other strategies considered on request."
- **Home, minor:** `components/WhatWeSource.tsx:33` keeps a secondary **"Buy-to-Let (BTL)"** pill ("Single-family let, ~5–8% gross yield"). Defensible as a secondary option, but it's the only broad-strategy chip left on the home page. `components/HowItWorks.tsx:47` deal-pack item names **"flips and developments"**.
- **Schema/FAQ on other pages:** `app/how-it-works/page.tsx:107` — *"strategy options to consider (BTL, HMO, etc.)"*; `app/page.tsx:130` — *"also source standard buy-to-let or bespoke briefs on request."* These are softer (BTL as a secondary/on-request mention) and acceptable if you keep BTL as a genuine catch-all — but drop SA/R2R/flips/commercial entirely.
- **Form options:** `lib/formSchema.ts:14-18` `strategyOptions` is correctly narrowed to **HMO / BRR / Conversion / Other** ✅. `propertyTypeOptions:28-36` still includes **"Commercial"** — fine for sellers, low priority.

### 3.2 Information architecture & structure

**Current IA**
```
/                 Home (Hero → WhatWeSource → CoverageMap → HowItWorks → WhyUs →
                  CaseStudy → Pricing → GotADeal → ContactForm → MailingList → Footer)
/how-it-works     (reuses <HowItWorks/>)            ← no H1
/why-us           (reuses <WhyUs/>)                  ← no H1
/pricing          (intro band H1 + <Pricing/>)
/contact          (reuses <ContactForm/>)            ← no H1
/bespoke          Pay → Sign → Requirements intake (pay-first, off-niche strategy lists)
/terms  /privacy  Legal
```

**Findings**
- The standalone `/how-it-works`, `/why-us`, `/pricing` pages re-render the home-page components verbatim with unique meta + FAQ/HowTo schema. This is a legitimate SEO pattern — **keep it** — but it means "content depth" is partly duplication, and two of the three lack an H1 (§3.7).
- **`/bespoke` conflates two jobs**: (a) marketing the bespoke service and (b) a transactional pay/sign/requirements intake. New visitors land directly in a £1,000 payment funnel. Recommend splitting: a marketing/explainer `/bespoke` with a "talk to us first" CTA, and a gated `/bespoke/start` (or post-call link) for the pay flow.
- **Development Management has no page** — only a pricing card (`components/Pricing.tsx:46-50`) and a contact pre-tag. For a "live, selective premium service", a dedicated `/development-management` page would carry the credibility and SEO it deserves.
- **No proof/case-studies page.** The single Hampshire deal is strong; a `/case-studies` index (dated entries) would let you keep adding proof without overloading the home page.

**Recommended IA**
```
/                       Home (unchanged order; it funnels well)
/hmo-sourcing           NEW — niche explainer + SEO (high intent)
/brr-conversion         NEW — niche explainer + SEO  (or merge with above)
/development-management  NEW — live selective service, by application
/case-studies           NEW — dated proof index (Hampshire = first entry)
/how-it-works /why-us /pricing /contact   (keep; fix H1s)
/bespoke                Marketing + "talk first" CTA
/bespoke/start          Gated pay/sign/requirements flow (re-niched)
/terms /privacy
```

### 3.3 Conversion & CTA hierarchy

- **Dominant action is correct on the home page.** "Tell Us Your Brief" (gold primary, `Hero.tsx:93-98`), repeated funnels to `#contact` from HowItWorks, Pricing, GotADeal. Navbar CTA "Get in Touch" (`Navbar.tsx:85-91`). ✅
- **Mailing list is correctly secondary** — slim band, outline (not solid) button, framed "Not ready to brief us yet?" (`components/MailingList.tsx:60-103`). ✅ Matches the brief.
- **Inclusive contact path exists and is good:** the investor flow offers **"I know what I'm looking for"** vs **"Help me figure it out"** (`components/ContactForm.tsx:342-365`), with all brief fields optional and an "unsure" reassurance block. ✅ This is exactly the inclusivity the brief asks for.
- **Conflict on `/bespoke`:** the page's first and dominant action is **"Pay £1,000 Retainer & Continue"** (`:672`) — a transaction, not a contact. There is no "talk first" route on that page. For the brand's primary goal this is the highest-value fix after the niche cleanup.
- **CTA wording:** "Tell Us Your Brief" (Hero) and the contact eyebrow "Tell Us Your Brief" (`ContactForm.tsx:234`) lean on "brief", which the brief flags as jargon-ish. The Hero reassurance line softens it well; still worth A/B testing "Tell Us What You're After". "Get in Touch", "Submit a Property", "Speak to Us" are all clear. ✅

### 3.4 Tone & credibility

- **Voice is serious and on-brand** — no hype, no "deal alert", no get-rich-quick. ✅
- **No emojis in deal copy.** The only glyphs are typographic stars: "✦ Recommended" badge (`Pricing.tsx:253`) and a ✦ section eyebrow (`CaseStudy.tsx:25`). These read as design marks, not emoji — acceptable, but if you want zero ornamentation in deal/price context, the ✦ on the Recommended badge is the one to reconsider.
- **Claims are backed.** Hero trust strip is verifiable; the Hampshire case study carries real numbers *and* a disclaimer ("Client projection, not a guaranteed return. Figures require independent verification." `CaseStudy.tsx:97-98`). ✅
- **Yield ranges** ("8–12% gross yield", "£700–900 per room") are presented as indicative/observed, not promised — consistent with the no-guaranteed-returns stance.

### 3.5 Trust & compliance (preserve all of this)

Present and correctly placed:
- Company no. **17057401** + registered address **86-90 Paul Street, London EC2A 4NE** — Footer (`:111-117`), Terms (`:68`), OG image (`opengraph-image.tsx:89`), schema (`layout.tsx:77-83`). ✅
- **"Not a regulated activity / not financial advice"** — Footer (`:110-117`), Terms §3 (`:96-104`), deal-pack disclaimers (`HowItWorks.tsx:183-188`). ✅
- **"Informational only"**, **"subject to terms"**, **"no guaranteed returns"** (Terms §6, `:219-225`). ✅
- **"We don't buy from our own pipeline"** — `WhyUs.tsx:39` ("We don't buy properties from our own pipeline. Every deal we source goes to our clients first"). ✅
- UK GDPR privacy policy present and indexed (`app/privacy/page.tsx`). ✅

Risks / gaps:
- **P0 contract contradiction** (see §1.2 and the table) — the signed PDF undercuts the public refund/fee promises.
- **ICO registration number** not displayed on `/privacy` (P3) — expected for a UK data controller.
- Nothing on the site reads as a guaranteed return; the disclaimers are doing their job.

### 3.6 Offers & pricing accuracy

| Offer | Brief target | Live state | Verdict |
|---|---|---|---|
| Sourced Deals | 2.4%, £500 unlock, balance on proceed, VAT inc. | `Pricing.tsx:37-44` matches exactly | ✅ |
| Bespoke Sourcing | £1,000 **Search Fee** + 2.4% on completion, VAT inc. | `Pricing.tsx:25-35` says £1,000 **retainer** + 2.4% | ⚠️ "retainer" vs "Search Fee" (P1-B, your decision) |
| Development Management | "by application", live & selective, no public price | `Pricing.tsx:46-50` "By Application", "limited projects per quarter" | ✅ exactly right |
| VAT | "incl. VAT" | "VAT inc." consistently, incl. schema `valueAddedTaxIncluded:true` | ✅ |

- **No "coming soon"** anywhere. ✅
- **No "finder's fee"** anywhere; "Referral Fees" (to owners/agents/introducers) is a separate, correct concept (`Terms.tsx:193-197`, `GotADeal.tsx:18`). ✅
- **"Retainer"** appears ~40+ times: `components/Pricing.tsx:29-32,226-233`; `components/HowItWorks.tsx:19`; `app/page.tsx:93,138,146`; `app/pricing/page.tsx` (multiple); `app/how-it-works/page.tsx:70,99,115`; `app/bespoke/layout.tsx` (multiple); `app/bespoke/page.tsx:363-365,556,627,645-672,846-943`; `app/terms/page.tsx:169-191`; `lib/generateContractPdf.ts` (multiple). If you proceed with the rename, this is the complete surface area.

### 3.7 Technical SEO

- **H1 per page — DEFECT:** Home ✅ (`Hero.tsx:64` h1), `/pricing` ✅ (`pricing/page.tsx:198` h1), `/bespoke` ✅ (`page.tsx:580` h1), `/terms` ✅, `/privacy` ✅. **Missing:** `/how-it-works` (renders `HowItWorks` whose top tag is `<h2>`), `/why-us` (`WhyUs` h2), `/contact` (`ContactForm` h2). Add an H1 to each. **P1.**
- **Titles/descriptions:** strong and niched across the site (`layout.tsx`, `page.tsx`, each route's metadata). Exception: `/bespoke` description/OG still say "Residential & commercial" (`layout.tsx:6,26,35`) — narrow to the niche.
- **Keywords:** Home/pricing/why-us keyword sets are clean and niche-aligned. **Obsolete terms to drop:** `app/bespoke/layout.tsx:13,17` ("commercial property sourcing UK", "BTL bespoke sourcing"); the R2R/SA/flips/commercial strings in `:46,118`.
- **Structured data:** rich and mostly excellent — `LocalBusiness`+`ProfessionalService`, `WebSite`, `Service`/`OfferCatalog` (with Development Management = `LimitedAvailability` ✅), per-page `FAQPage`, `HowTo`, `BreadcrumbList`, `ContactPage`. Only issue: the bespoke `Service`/`FAQPage` schema enumerates the obsolete strategy list (`bespoke/layout.tsx:46,86,118`) — re-niche it so the structured signal matches the brand.
- **OG/Twitter:** site-wide defaults + per-page overrides, dynamic OG image on-brand with niche tagline + company no. (`opengraph-image.tsx`). ✅
- **Sitemap & robots:** all 8 routes in `sitemap.ts` with sensible priorities; `robots.ts` allows the major AI answer-engine crawlers and disallows `/api/`. ✅ (Add any new niche pages to the sitemap when built.)
- **Image alt / a11y of media:** logo has alt (`Footer.tsx:21`, `Navbar.tsx:69`), coverage map has a descriptive `aria-label` (`CoverageMap.tsx:108`), hero video is `aria-hidden` with poster, social/menu icons have `aria-label`. ✅ Strong.
- **Internal linking:** Navbar (4 links) + Footer (5 links) + in-section CTAs. Reasonable. Once niche pages exist, cross-link them from WhatWeSource and the relevant FAQ answers.
- **Core Web Vitals risk:** the autoplay hero video (`Hero.tsx:31-43`) is the most likely LCP/bandwidth cost, especially mobile; `framer-motion` `whileInView` animation is used on nearly every section (low risk, but lots of JS). Worth a Lighthouse mobile pass; confirm the poster renders as LCP and the video is genuinely deferred on slow connections.

### 3.8 Accessibility & mobile

- **Semantic headings:** good within components, but the three missing page-level H1s (§3.7) also weaken the heading outline for screen readers. Fixing H1s addresses both SEO and a11y.
- **Focus states:** primary buttons use `focus:ring` (`Hero.tsx:95`, `ContactForm.tsx:574`). Many text links rely on color/underline hover only — verify visible focus rings on keyboard nav across nav + footer links.
- **Contrast:** gold (`#C9A03D`/`#D4A843`) on dark bg is fine; watch the many `text-white/40`–`/55` muted strings (e.g. Footer regulatory blurb `:110`, disclaimers) — at small sizes these can fail WCAG AA. Spot-check the `/40` opacity text.
- **Mobile UX:** layouts are responsive with dedicated mobile timelines (`HowItWorks.tsx:122`) and a mobile nav. The `/bespoke` multi-step intake is long on mobile — another reason to front it with a lighter "talk first" path.
- **Tap targets / forms:** form inputs and checkboxes look adequately sized; the mailing-list and contact forms have proper `<label>`s and `sr-only` labels where needed (`MailingList.tsx:81`). ✅

### 3.9 Leftovers to remove / retire

- **WhatsApp:** ✅ **None found.** No `chat.whatsapp.com`, `wa.me`, broadcast section, or "WhatsApp" string anywhere in `app/`, `components/`, `lib/`, or `scripts/`. Already fully retired.
- **"Coming soon":** ✅ none.
- **"Finder's fee":** ✅ none.
- **Broad-strategy menus to retire/re-niche** (not "remove the feature", but bring in line with the niche):
  - `app/bespoke/page.tsx:95-105` residential deal types, `:159-181` commercial purpose/sectors, `:183-241` commercial finance/tenure/condition/covenant/dealbreakers, `:1360` "BTL, HMO, SA, BRRR, Flips".
  - `app/bespoke/layout.tsx:6,18,26,35,46,118` residential+commercial copy & schema.
  - `components/WhatWeSource.tsx:33` BTL pill; `components/HowItWorks.tsx:47` "flips and developments".
- **"Recent Deal" permanence:** `components/CaseStudy.tsx:28,72` — convert to a dated example.

---

## 4. Proposed sitemap / IA (current vs recommended)

**Current (8 routes):** `/`, `/how-it-works`, `/why-us`, `/pricing`, `/contact`, `/bespoke`, `/terms`, `/privacy`.

**Recommended:**
- **Keep:** `/`, `/how-it-works`, `/why-us`, `/pricing`, `/contact`, `/terms`, `/privacy` (fix the 3 missing H1s).
- **Add:** `/hmo-sourcing`, `/brr-conversion` (or one combined `/what-we-source` explainer), `/development-management`, `/case-studies`.
- **Split:** `/bespoke` → marketing page ("talk first") + gated `/bespoke/start` pay flow; re-niche both.

---

## 5. Quick wins (highest impact ÷ lowest effort)

1. **Add `<h1>` to `/how-it-works`, `/why-us`, `/contact`.** (S, P1) — clean SEO + a11y win.
2. **Fix the contract PDF contradiction** clauses 3.3 & 4 to match the site. (S–M, P0) — removes a real legal/credibility risk. *(Get legal sign-off on final wording.)*
3. **Re-niche `/bespoke` metadata + schema** — drop "Residential & commercial", BTL/R2R/SA/flips/commercial keywords. (S, P2) — sharpens topical relevance immediately.
4. **Date the case study** and label it "one example". (S, P2)
5. **Trim the home-page broad-strategy remnants** — BTL pill framing + "flips and developments" deal-pack line. (S, P2)
6. **Decide "Search Fee" vs "retainer"** and apply consistently. (decision first, then M) — resolves P1-B.

---

## 6. Files that would need editing to implement recommendations

**Re-niche `/bespoke` (P1) + drop obsolete keywords/schema (P2):**
- `app/bespoke/page.tsx` (strategy/finance/sector arrays `95-241`; card subtitle `1360`; copy)
- `app/bespoke/layout.tsx` (description/OG/keywords `6-37`; service schema `46`; FAQ schema `86,118`)

**Missing H1s (P1):**
- `app/how-it-works/page.tsx` (or `components/HowItWorks.tsx`)
- `app/why-us/page.tsx` (or `components/WhyUs.tsx`)
- `app/contact/page.tsx` (or `components/ContactForm.tsx`)

**Pay-first → add "talk first" path on bespoke (P1):**
- `app/bespoke/page.tsx:554-680`

**Contract contradiction (P0):**
- `lib/generateContractPdf.ts:231,243` (and keep on-page `app/bespoke/page.tsx:911-943` consistent)

**"Retainer" → "Search Fee" (P1-B, only if approved):**
- `components/Pricing.tsx`, `components/HowItWorks.tsx`
- `app/page.tsx`, `app/pricing/page.tsx`, `app/how-it-works/page.tsx`
- `app/bespoke/layout.tsx`, `app/bespoke/page.tsx`
- `app/terms/page.tsx`
- `lib/generateContractPdf.ts`

**Home-page broad-strategy remnants (P2):**
- `components/WhatWeSource.tsx:33`
- `components/HowItWorks.tsx:47`

**Case study dating (P2):**
- `components/CaseStudy.tsx:28,72,97`

**CTA voice test (P2):**
- `components/Hero.tsx:97`, `components/ContactForm.tsx:234`

**Compliance/SEO housekeeping (P3):**
- `app/privacy/page.tsx` (ICO number)
- `app/layout.tsx:89` / `components/Footer.tsx:123` (founding year consistency)

**New pages (P2, IA):**
- `app/hmo-sourcing/page.tsx`, `app/brr-conversion/page.tsx`, `app/development-management/page.tsx`, `app/case-studies/page.tsx` — plus add each to `app/sitemap.ts` and link from `components/Navbar.tsx` / `components/Footer.tsx`.

---

*End of audit. No code was modified in this pass — this report is the only file written.*
