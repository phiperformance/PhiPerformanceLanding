"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export function ArchitectureSection() {
  const { t } = useLang();
  const { architecture } = t.home;

  return (
    <section className="py-32 px-6 bg-black-deep border-y border-cream/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">
        {/* Pitch */}
        <div className="lg:col-span-2">
          <SectionTitle
            eyebrow={architecture.eyebrow}
            title={architecture.title}
            subtitle={architecture.body}
            align="left"
          />
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button href="/arquitectura-digital" variant="primary">
              {architecture.cta}
            </Button>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-px border border-cream/10">
          {architecture.items.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-black-deep border border-cream/10 p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-cardo text-4xl text-gold/40 leading-none mb-5 select-none">
                0{i + 1}
              </p>
              <h3 className="font-cardo text-xl text-cream mb-3">{item.title}</h3>
              <p className="font-montserrat text-xs text-cream/50 leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
