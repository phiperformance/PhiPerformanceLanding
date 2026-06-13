import { buildMetadata } from "@/lib/metadata";
import { BlogClient } from "./BlogClient";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Análisis, marcos de trabajo y reflexiones sobre marketing digital, datos y negocios de Phi Performance Marketing.",
  path: "/blog",
  keywords: ["blog marketing digital", "estrategia digital córdoba"],
});

export default function BlogPage() {
  return <BlogClient />;
}
