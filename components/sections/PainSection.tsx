"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function PainSection() {
  const { t } = useLang();
  const { pain } = t.home;

  return (
    <section className="py-24 md:py-32 px-6 bg-black border-t border-cream/10">
      <div className="max-w-3xl mx-auto">
        <SectionTitle eyebrow={pain.eyebrow} title={pain.title} align="center" />

        <div className="mt-16 flex flex-col">
          {pain.items.map((item, i) => (
            <motion.div
              key={item}
              className="flex items-start gap-6 py-6 border-b border-cream/10 last:border-b-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="font-cardo text-2xl text-gold/40 leading-none select-none">
                0{i + 1}
              </span>
              <p className="font-cardo text-xl md:text-2xl text-cream leading-snug">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 text-center font-montserrat text-sm md:text-base text-gold/90 leading-relaxed border-t border-cream/10 pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {pain.transition}
        </motion.p>
      </div>
    </section>
  );
}
