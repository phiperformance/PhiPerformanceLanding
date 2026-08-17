const isDev = process.env.NODE_ENV === "development";

// Dev-only CSP relaxations. Next's dev server evaluates modules through eval()
// (Fast Refresh / react-refresh runtime) and talks to HMR over a websocket, so
// without these the client bundle throws before hydrating and the page is left
// as inert server HTML. Production keeps the strict policy unchanged.
const devScriptSrc = isDev ? " 'unsafe-eval'" : "";
const devConnectSrc = isDev ? " ws://localhost:* http://localhost:*" : "";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${devScriptSrc} https://connect.facebook.net`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://res.cloudinary.com https://www.facebook.com",
  "font-src 'self' data:",
  `connect-src 'self' blob: https://formspree.io https://www.facebook.com${devConnectSrc}`,
  "frame-src 'none'",
  "form-action 'self' https://formspree.io",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Inline critical CSS and defer the rest (reduces render-blocking requests)
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        // Folded into the dedicated /arquitectura-digital offer page.
        source: "/servicios/desarrollo-web",
        destination: "/arquitectura-digital",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
