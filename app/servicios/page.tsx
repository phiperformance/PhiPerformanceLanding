import { buildMetadata } from "@/lib/metadata";
import { ServiciosClient } from "./ServiciosClient";

export const metadata = buildMetadata({
  title: "Servicios",
  description:
    "Arquitectura Digital, Performance Ads, Ingeniería de Contenido, Desarrollo Web y CRM Kommo. Un ecosistema end-to-end de marketing digital en Córdoba.",
  path: "/servicios",
  keywords: ["servicios marketing digital córdoba", "performance ads", "desarrollo web córdoba", "crm kommo"],
});

export default function ServiciosPage() {
  return <ServiciosClient />;
}
