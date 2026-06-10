"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/constants";
import { trackEvent } from "@/lib/track";

export function ServicioClient({ service }: { service: Service }) {
  const { t, lang } = useLang();
  const tr = service.translations[lang];
  const waMsg = `Hola Francisco, vi tu web y quiero hablar sobre ${tr.title}.`;
  const waLink = whatsappLink(waMsg);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: tr.title,
    description: tr.description,
    provider: {
      "@type": "Organization",
      name: "Φ Performance Marketing",
      url: "https://phiperformancemarketing.com",
    },
    areaServed: "AR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="pt-24 pb-0 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <nav className="font-montserrat text-[10px] uppercase tracking-widest text-cream/30 flex items-center gap-2">
            <Link href="/" className="hover:text-cream transition-colors">{t.ui.breadcrumb.home}</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-cream transition-colors">{t.nav.services}</Link>
            <span>/</span>
            <span className="text-gold">{tr.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <span className="text-5xl block mb-6">{service.icon}</span>
          <motion.h1
            className="font-cardo text-5xl md:text-7xl text-cream leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {tr.title}
          </motion.h1>
          <motion.p
            className="font-montserrat text-sm text-gold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {tr.tagline}
          </motion.p>
          <motion.p
            className="font-montserrat text-sm text-cream/60 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {tr.description}
          </motion.p>
        </div>
      </section>

      {/* Features + Pain Points */}
      <section className="py-24 px-6 bg-black-deep border-y border-cream/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-8">
              {t.services.includes}
            </p>
            <ul className="flex flex-col gap-4">
              {tr.features.map((f) => (
                <motion.li
                  key={f}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-gold text-sm mt-0.5">✓</span>
                  <span className="font-montserrat text-sm text-cream/70">{f}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-8">
              {t.services.painPoints}
            </p>
            <ul className="flex flex-col gap-4">
              {tr.painPoints.map((p) => (
                <motion.li
                  key={p}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-cream/30 text-sm mt-0.5">→</span>
                  <span className="font-montserrat text-sm text-cream/60">{p}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Price + CTA */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            {service.priceRange && (
              <>
                <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-2">
                  {t.services.price}
                </p>
                <p className="font-cardo text-4xl text-cream">{service.priceRange}</p>
              </>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={waLink} variant="primary" size="lg" external onClick={() => trackEvent("Contact")}>
              {t.services.cta}
            </Button>
            <Link
              href="/servicios"
              className="font-montserrat text-xs uppercase tracking-widest text-cream/40 hover:text-cream transition-colors self-center"
            >
              {t.ui.backToServices}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
