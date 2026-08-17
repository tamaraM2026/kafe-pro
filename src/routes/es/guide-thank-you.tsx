import { createFileRoute } from "@tanstack/react-router";
import { ThankYouMessage } from "@/components/ThankYouMessage";

export const Route = createFileRoute("/es/guide-thank-you")({
  head: () => ({
    meta: [
      { title: "¡Ya estás dentro! — Kafe con Propósito" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: GuideThankYouEs,
});

function GuideThankYouEs() {
  return (
    <ThankYouMessage
      heading="¡Ya estás dentro!"
      body="Revisa tu correo, la guía está en camino. O descárgala ahora mismo:"
      downloadUrl="/10x-unstuck-guide-es.pdf"
      downloadLabel="Descarga la guía ahora"
      backLabel="Volver a la página principal"
      homeLang="en"
    />
  );
}
