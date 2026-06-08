import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServicioClient } from "./ServicioClient";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  const tr = service.translations.es;
  return buildMetadata({
    title: tr.title,
    description: tr.description,
    path: `/servicios/${service.slug}`,
    keywords: [`${tr.title.toLowerCase()} córdoba`, "marketing digital argentina"],
  });
}

export default function ServicioPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  return <ServicioClient service={service} />;
}
