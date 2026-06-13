import { buildMetadata } from "@/lib/metadata";
import { ContactoClient } from "./ContactoClient";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Hablemos de tu negocio. Escribinos por WhatsApp o completá el formulario y recibí un diagnóstico en 24hs.",
  path: "/contacto",
  keywords: ["contacto agencia marketing córdoba", "consultoría marketing digital"],
});

export default function ContactoPage() {
  return <ContactoClient />;
}
