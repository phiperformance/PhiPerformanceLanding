import type { Metadata } from "next";
import { Cardo, Montserrat } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/i18n/context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MetaPixel } from "@/components/MetaPixel";
import { SITE_URL } from "@/lib/constants";

const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cardo",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Phi Performance Marketing | Agencia Digital Córdoba",
    template: "%s | Phi Performance Marketing",
  },
  description:
    "Agencia de marketing digital en Córdoba, Argentina. Performance Ads, Desarrollo Web, Ingeniería de Contenido y CRM. Resultados medibles.",
  keywords: [
    "agencia marketing digital córdoba",
    "performance ads córdoba",
    "meta ads google ads argentina",
    "desarrollo web córdoba",
    "marketing digital argentina",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Phi Performance Marketing",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/icon-dark.svg", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.svg" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Phi Performance Marketing",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "AR",
    availableLanguage: "Spanish",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Córdoba",
    addressCountry: "AR",
  },
  sameAs: [
    "https://instagram.com/phiperformance",
    "https://tiktok.com/@phiperformance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cardo.variable} ${montserrat.variable}`}>
      <body>
        <MetaPixel />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LangProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
