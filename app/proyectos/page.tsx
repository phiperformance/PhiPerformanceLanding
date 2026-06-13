import { buildMetadata } from "@/lib/metadata";
import { ProyectosClient } from "./ProyectosClient";

export const metadata = buildMetadata({
  title: "Proyectos",
  description:
    "Casos reales y resultados medibles de clientes que trabajaron con Phi Performance Marketing en Córdoba, Argentina.",
  path: "/proyectos",
  keywords: ["casos de éxito marketing digital", "proyectos agencia córdoba"],
});

export default function ProyectosPage() {
  return <ProyectosClient />;
}
