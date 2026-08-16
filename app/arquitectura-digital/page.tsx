import { buildMetadata } from "@/lib/metadata";
import { ArquitecturaDigitalClient } from "./ArquitecturaDigitalClient";

export const metadata = buildMetadata({
  title: "Arquitectura Digital | Desarrollo Web",
  description:
    "Landings y sitios web con tracking, SEO técnico y velocidad reales. Desde USD 250 + mantenimiento desde USD 35/mes. Dominio y hosting a tu nombre. Córdoba, Argentina.",
  path: "/arquitectura-digital",
  keywords: [
    "desarrollo web córdoba",
    "precio página web argentina",
    "landing page para meta ads",
    "diseño web a medida córdoba",
    "arquitectura digital",
  ],
});

export default function ArquitecturaDigitalPage() {
  return <ArquitecturaDigitalClient />;
}
