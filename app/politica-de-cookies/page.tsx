import { buildMetadata } from "@/lib/metadata";
import { CookiesClient } from "./CookiesClient";

export const metadata = buildMetadata({
  title: "Política de Cookies",
  description:
    "Cómo usa cookies Phi Performance Marketing: Meta Pixel, preferencias de idioma y gestión de consentimiento.",
  path: "/politica-de-cookies",
});

export default function PoliticaDeCookiesPage() {
  return <CookiesClient />;
}
