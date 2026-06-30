import type { NextConfig } from "next";

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
