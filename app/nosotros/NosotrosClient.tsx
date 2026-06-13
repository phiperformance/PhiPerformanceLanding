"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function NosotrosClient() {
  const { t } = useLang();
  const { about } = t;

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
            {about.hero.eyebrow}
          </motion.p>
          <motion.h1
            className="font-cardo text-5xl md:text-7xl text-cream leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {about.hero.headline}
          </motion.h1>
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 px-6 bg-black-deep border-y border-cream/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-cardo text-[12rem] text-gold/10 leading-none block mb-8 select-none">
              Φ
            </span>
            <h2 className="font-cardo text-3xl md:text-4xl text-cream mb-6">
              {about.origin.title}
            </h2>
            <p className="font-montserrat text-sm text-cream/60 leading-relaxed max-w-2xl">
              {about.origin.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px border border-cream/10">
          {[about.mission, about.vision].map((block, i) => (
            <motion.div
              key={i}
              className="bg-black p-12 border border-cream/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
                {block.eyebrow}
              </p>
              <h3 className="font-cardo text-3xl md:text-4xl text-cream mb-6 leading-tight">
                {block.title}
              </h3>
              <p className="font-montserrat text-xs text-cream/50 leading-relaxed">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-black-deep">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow={about.values.eyebrow}
            title={about.values.title}
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-16 border border-cream/10">
            {about.values.items.map((value, i) => (
              <motion.div
                key={i}
                className="bg-black-deep p-8 border border-cream/10 hover:border-gold/30 transition-colors"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="font-montserrat text-[10px] text-gold uppercase tracking-widest mb-3">
                  0{i + 1}
                </p>
                <h4 className="font-cardo text-xl text-cream mb-3">{value.title}</h4>
                <p className="font-montserrat text-xs text-cream/50 leading-relaxed">
                  {value.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black text-center">
        <motion.p
          className="font-cardo text-3xl md:text-4xl text-cream"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {about.cta}
        </motion.p>
      </section>
    </>
  );
}
