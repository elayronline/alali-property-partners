import type { NextConfig } from "next";

// Only two third parties run in the browser: the Meta pixel and Web3Forms.
// The Make.com and Apps Script webhooks are called server-side, so they need
// no allowance here. Scripts and styles keep 'unsafe-inline' because the
// pages are statically prerendered (nonces would force dynamic rendering) and
// rely on inline JSON-LD, the inline pixel bootstrap and framer-motion styles.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.facebook.com",
  "font-src 'self' data:",
  "connect-src 'self' https://api.web3forms.com https://www.facebook.com https://connect.facebook.net",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://api.web3forms.com",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  trailingSlash: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        // Consolidate the apex domain onto www (the canonical host in
        // metadataBase) so there is only one indexable copy of the site.
        source: "/:path*",
        has: [{ type: "host", value: "alalipropertypartners.com" }],
        destination: "https://www.alalipropertypartners.com/:path*",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        // The dedicated BRR/BMV page was retired — the offering is now
        // exclusively HMO sourcing. Redirect the indexed URL to the HMO page
        // so its link equity consolidates there instead of 404ing.
        source: "/brr-sourcing",
        destination: "/hmo-sourcing",
        permanent: true,
      },
      {
        // Bespoke sourcing no longer takes payment through the website —
        // route the old pay/sign flow to the contact form instead.
        source: "/bespoke",
        destination: "/contact?enquiry=Bespoke%20Sourcing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
