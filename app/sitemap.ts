import type { MetadataRoute } from "next"

// Real per-page content-modified dates. Bump a page's date here when you
// meaningfully change its content — do NOT use `new Date()`, which would set
// lastmod to every build time and train crawlers to ignore the signal.
const lastModified = "2026-06-18"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.alalipropertypartners.com"

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/hmo-sourcing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/brr-sourcing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/property-sourcing-south-east`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/why-us`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/development-management`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]
}
