import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServicioClient } from "./ServicioClient";
import { buildMetadata } from "@/lib/metadata";

// Services with a dedicated page (`href`) are not rendered by this template —
// their old /servicios/<slug> URL is redirected in next.config.mjs.
const templatedServices = services.filter((s) => !s.href);

export function generateStaticParams() {
  return templatedServices.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = templatedServices.find((s) => s.slug === params.slug);
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
  const service = templatedServices.find((s) => s.slug === params.slug);
  if (!service) notFound();
  return <ServicioClient service={service} />;
}
