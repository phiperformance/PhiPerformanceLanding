"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/constants";
import { trackEvent } from "@/lib/track";

export default function ServiciosPage() {
  const { t, lang } = useLang();
  const waLink = whatsappLink(t.contact.whatsappMessage);

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="font-montserrat text-[11px] uppercase tracking-[0.4em] text-gold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t.services.hero.eyebrow}
          </motion.p>
          <motion.h1
            className="font-cardo text-5xl md:text-7xl text-cream leading-tight mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.services.hero.headline}
          </motion.h1>
          <motion.p
            className="font-montserrat text-sm text-cream/60 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.services.hero.body}
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 px-6 bg-black-deep">
        <div className="max-w-7xl mx-auto flex flex-col gap-px border border-cream/10">
          {services.map((service, i) => {
            const tr = service.translations[lang];
            return (
              <motion.div
                key={service.slug}
                className="bg-black-deep border border-cream/10 p-10 grid grid-cols-1 md:grid-cols-3 gap-8 hover:border-gold/20 transition-colors"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="md:col-span-1">
                  <span className="text-3xl text-gold block mb-4">{service.icon}</span>
                  <h2 className="font-cardo text-3xl text-cream mb-2">{tr.title}</h2>
                  <p className="font-montserrat text-xs text-gold/80">{tr.tagline}</p>
                  {service.priceRange && (
                    <p className="font-montserrat text-[10px] uppercase tracking-widest text-cream/30 mt-4">
                      {t.services.price}: {service.priceRange}
                    </p>
                  )}
                </div>
                <div className="md:col-span-1">
                  <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-4">
                    {t.services.includes}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {tr.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-gold mt-0.5 text-xs">✓</span>
                        <span className="font-montserrat text-xs text-cream/60">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-1 flex flex-col justify-between gap-6">
                  <p className="font-montserrat text-xs text-cream/50 leading-relaxed">
                    {tr.description}
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button href={`/servicios/${service.slug}`} variant="outline" size="sm">
                      {t.ui.learnMore}
                    </Button>
                    <Button href={waLink} variant="ghost" size="sm" external onClick={() => trackEvent("Contact")}>
                      {t.services.cta}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
