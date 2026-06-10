"use client";

import Link from "next/link";
import { useLang } from "@/i18n/context";
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/constants";

const serviceLinks = [
  { href: "/servicios/arquitectura-digital", label: "Arquitectura Digital" },
  { href: "/servicios/performance-ads", label: "Performance Ads" },
  { href: "/servicios/ingenieria-de-contenido", label: "Ingeniería de Contenido" },
  { href: "/servicios/desarrollo-web", label: "Desarrollo Web" },
  { href: "/servicios/crm-kommo", label: "CRM Kommo" },
];

const siteLinks = [
  { href: "/nosotros", key: "about" as const },
  { href: "/servicios", key: "services" as const },
  { href: "/proyectos", key: "projects" as const },
  { href: "/blog", key: "blog" as const },
  { href: "/contacto", key: "contact" as const },
];

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black-deep border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-cardo text-6xl text-gold/20 leading-none">Φ</span>
            </Link>
            <p className="font-montserrat text-xs text-cream/40 leading-relaxed">
              Boutique de Performance Digital. Córdoba, Argentina.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[10px] uppercase tracking-widest text-cream/30 hover:text-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[10px] uppercase tracking-widest text-cream/30 hover:text-gold transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Site links */}
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-6">
              {t.footer.links}
            </p>
            <ul className="flex flex-col gap-3">
              {siteLinks.map(({ href, key }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-montserrat text-xs text-cream/40 hover:text-cream transition-colors"
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-6">
              {t.footer.services}
            </p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-montserrat text-xs text-cream/40 hover:text-cream transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-6">
              {t.footer.contact}
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-montserrat text-xs text-cream/40">{t.contact.location}</p>
              <Link
                href="/contacto"
                className="font-montserrat text-xs text-cream/40 hover:text-cream transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-montserrat text-[10px] text-cream/20 uppercase tracking-widest">
            {t.footer.madeIn}
          </p>
          <p className="font-montserrat text-[10px] text-cream/20">
            © {year} Phi Performance Marketing. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
