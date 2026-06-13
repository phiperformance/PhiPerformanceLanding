"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export function ProyectosClient() {
  const { t } = useLang();

  return (
    <>
      <section className="pt-40 pb-0 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="font-montserrat text-[11px] uppercase tracking-[0.4em] text-gold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t.projects.hero.eyebrow}
          </motion.p>
          <motion.h1
            className="font-cardo text-5xl md:text-7xl text-cream leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.projects.hero.headline}
          </motion.h1>
        </div>
      </section>
      <ProjectsGrid />
    </>
  );
}
