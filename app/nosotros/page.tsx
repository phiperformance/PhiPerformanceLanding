import { buildMetadata } from "@/lib/metadata";
import { NosotrosClient } from "./NosotrosClient";

export const metadata = buildMetadata({
  title: "Nosotros",
  description:
    "Conocé a Phi Performance Marketing: nuestra misión, visión y valores. Una boutique de performance digital en Córdoba, Argentina.",
  path: "/nosotros",
  keywords: ["sobre phi performance marketing", "agencia marketing córdoba", "equipo marketing digital argentina"],
});

export default function NosotrosPage() {
  return <NosotrosClient />;
}
