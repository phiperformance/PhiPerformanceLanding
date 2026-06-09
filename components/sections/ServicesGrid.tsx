"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { services } from "@/data/services";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export function ServicesGrid() {
  const { t, lang } = useLang();

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow={t.home.services.eyebrow}
          title={t.home.services.title}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-20 border border-cream/10">
          {services.map((service, i) => {
            const tr = service.translations[lang];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-black border border-cream/10 transition-all duration-300 hover:bg-gold hover:border-gold"
              >
                <Link
                  href={`/servicios/${service.slug}`}
                  className="flex flex-col gap-4 p-8 h-full"
                >
                  <span className="text-3xl text-gold group-hover:text-black transition-colors duration-300">{service.icon}</span>
                  <h3 className="font-cardo text-2xl text-cream group-hover:text-black transition-colors duration-300">{tr.title}</h3>
                  <p className="font-montserrat text-xs text-cream/50 group-hover:text-black/70 leading-relaxed flex-1 transition-colors duration-300">
                    {tr.tagline}
                  </p>
                  <span className="font-montserrat text-[10px] uppercase tracking-widest text-gold group-hover:text-black/80 transition-colors duration-300 mt-2">
                    {t.ui.learnMore} →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button href="/servicios" variant="outline">
            {t.home.services.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
