import { createFileRoute } from "@tanstack/react-router";
import { ThankYouMessage } from "@/components/ThankYouMessage";

export const Route = createFileRoute("/$lang/guide-thank-you")({
  head: () => ({
    meta: [
      { title: "You're in — Kafe con Propósito" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: GuideThankYou,
});

function GuideThankYou() {
  return (
    <ThankYouMessage
      heading="You're in!"
      body="Check your inbox, the guide is on its way."
    />
  );
}
