import { buildMetadata } from "@/lib/metadata";
import { LegalClient } from "./LegalClient";

export const metadata = buildMetadata({
  title: "Legal",
  description:
    "Política de Privacidad y Términos y Condiciones de Phi Performance Marketing.",
  path: "/legal",
});

export default function LegalPage() {
  return <LegalClient />;
}
