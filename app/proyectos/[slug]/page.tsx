import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProyectoClient } from "./ProyectoClient";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  const tr = project.translations.es;
  return buildMetadata({
    title: project.client,
    description: tr.description,
    path: `/proyectos/${project.slug}`,
  });
}

export default function ProyectoPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProyectoClient project={project} />;
}
