import type { MetadataRoute } from "next"

// Crawlers used by AI answer engines (ChatGPT, Claude, Perplexity, Google AI
// Overviews, Apple Intelligence, etc.). We explicitly allow them so our
// content can be cited in AI answers.
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "DuckAssistBot",
  "YouBot",
  "MistralAI-User",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: "https://www.alalipropertypartners.com/sitemap.xml",
    host: "https://www.alalipropertypartners.com",
  }
}
