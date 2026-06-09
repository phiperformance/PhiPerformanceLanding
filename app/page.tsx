"use client";

import { motion } from "framer-motion";
import { HeroHome } from "@/components/sections/HeroHome";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLang } from "@/i18n/context";

function ValueSection() {
  const { t } = useLang();
  return (
    <section className="py-32 px-6 bg-black-deep border-y border-cream/10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow={t.home.value.eyebrow}
          title={t.home.value.title}
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-20 border border-cream/10">
          {t.home.value.items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-black-deep p-10 border border-cream/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <p className="font-cardo text-8xl font-bold text-gold/50 leading-none mb-6 select-none">
                0{i + 1}
              </p>
              <h3 className="font-cardo text-2xl text-cream mb-4">{item.title}</h3>
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

function SocialProof() {
  const { t } = useLang();
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow={t.home.social.eyebrow}
          title={t.home.social.title}
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-20 border border-cream/10">
          {t.home.social.items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-black p-10 border border-cream/10 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-cardo text-4xl text-gold mb-4">{item.stat}</p>
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

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <ValueSection />
      <ServicesGrid />
      <ProjectsGrid featuredOnly />
      <CtaBanner />
      <SocialProof />
    </>
  );
}
