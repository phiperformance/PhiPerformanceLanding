import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { ProyectoClient } from "./ProyectoClient";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  const tr = project.translations.es;
  const firstService = project.services
    .map((slug) => services.find((s) => s.slug === slug))
    .find(Boolean);
  const serviceTitle = firstService?.translations.es.title;
  return buildMetadata({
    title: `${project.client} — Caso de éxito${serviceTitle ? ` en ${serviceTitle}` : ""}`,
    description: tr.description,
    path: `/proyectos/${project.slug}`,
    keywords: [
      project.client,
      `caso de éxito ${project.industry.toLowerCase()}`,
      serviceTitle ? `${serviceTitle.toLowerCase()} córdoba` : "marketing digital córdoba",
    ],
  });
}

export default function ProyectoPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProyectoClient project={project} />;
}
