"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import type { Project } from "@/data/projects";
import { services } from "@/data/services";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/constants";
import { trackEvent } from "@/lib/track";

export function ProyectoClient({ project }: { project: Project }) {
  const { t, lang } = useLang();
  const tr = project.translations[lang];
  const waLink = whatsappLink(t.projects.similarCta);

  const appliedServices = project.services
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.client,
    description: tr.description,
    creator: {
      "@type": "Organization",
      name: "Φ Performance Marketing",
    },
    about: project.industry,
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
            <Link href="/proyectos" className="hover:text-cream transition-colors">{t.nav.projects}</Link>
            <span>/</span>
            <span className="text-gold">{project.client}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="pt-12 pb-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            <Tag label={project.industry} color="gold" />
            {appliedServices.map((s) => s && (
              <Tag key={s.slug} label={s.translations[lang].title} />
            ))}
          </div>
          <motion.h1
            className="font-cardo text-5xl md:text-7xl text-cream leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {project.client}
          </motion.h1>
          <motion.p
            className="font-montserrat text-sm text-cream/60 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {tr.description}
          </motion.p>
        </div>
      </section>

      {/* Cover */}
      <div className="px-6 bg-black">
        <div className="max-w-5xl mx-auto relative aspect-video bg-black-deep border border-cream/10 overflow-hidden">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.client}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center font-cardo text-9xl text-gold/10 select-none">Φ</span>
          )}
        </div>
      </div>

      {(project.instagramUrl || project.websiteUrl) && (
        <div className="px-6 bg-black mt-6">
          <div className="max-w-5xl mx-auto flex flex-wrap gap-6">
            {project.instagramUrl && (
              <Link
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[11px] uppercase tracking-widest text-gold hover:text-cream transition-colors"
              >
                Ver en Instagram →
              </Link>
            )}
            {project.websiteUrl && (
              <Link
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[11px] uppercase tracking-widest text-gold hover:text-cream transition-colors"
              >
                Ver sitio web →
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Challenge / Solution / Results */}
      <section className="py-24 px-6 bg-black-deep">
        <div className="max-w-5xl mx-auto flex flex-col gap-20">
          {[
            { label: t.projects.challenge, content: tr.challenge },
            { label: t.projects.solution, content: tr.solution },
          ].map(({ label, content }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
                {label}
              </p>
              <p className="font-montserrat text-sm text-cream/60 leading-relaxed max-w-3xl">
                {content}
              </p>
            </motion.div>
          ))}

          {tr.results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
                {t.projects.results}
              </p>
              <ul className="flex flex-col gap-4">
                {tr.results.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="text-gold text-xl leading-none">—</span>
                    <span className="font-cardo text-2xl text-cream">{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black text-center">
        <p className="font-cardo text-3xl md:text-4xl text-cream mb-8">
          {t.projects.cta}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={waLink} variant="primary" size="lg" external onClick={() => trackEvent("Contact")}>
            {t.projects.similarCta}
          </Button>
          <Link
            href="/proyectos"
            className="font-montserrat text-xs uppercase tracking-widest text-cream/40 hover:text-cream transition-colors self-center"
          >
            {t.ui.backToProjects}
          </Link>
        </div>
      </section>
    </>
  );
}
