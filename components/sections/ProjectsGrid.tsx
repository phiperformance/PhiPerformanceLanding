"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { projects } from "@/data/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

export function ProjectsGrid({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const { t, lang } = useLang();
  const displayed = featuredOnly ? projects.filter((p) => p.featured) : projects;

  return (
    <section className="py-32 px-6 bg-black-deep">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow={t.home.projects.eyebrow}
          title={t.home.projects.title}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {displayed.map((project, i) => {
            const tr = project.translations[lang];
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <Link href={`/proyectos/${project.slug}`}>
                  {/* Image placeholder */}
                  <div className="relative aspect-video bg-black border border-cream/10 group-hover:border-gold/30 transition-colors overflow-hidden mb-6 flex items-center justify-center">
                    <span className="font-cardo text-6xl text-gold/20 select-none">Φ</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-cardo text-xl text-cream">{project.client}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <Tag label={project.industry} color="default" />
                  </div>
                  <p className="font-montserrat text-xs text-cream/50 leading-relaxed line-clamp-2">
                    {tr.description}
                  </p>
                  <span className="font-montserrat text-[10px] uppercase tracking-widest text-gold mt-4 inline-block group-hover:text-cream transition-colors">
                    {t.ui.learnMore} →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button href="/proyectos" variant="outline">
            {t.home.projects.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
