import { createFileRoute } from "@tanstack/react-router";
import { ThankYouMessage } from "@/components/ThankYouMessage";

export const Route = createFileRoute("/$lang/rsvp-thank-you")({
  head: () => ({
    meta: [
      { title: "You're on the list — Kafe con Propósito" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: RsvpThankYou,
});

function RsvpThankYou() {
  return (
    <ThankYouMessage
      heading="You're on the list!"
      body="We'll confirm the details by email closer to the date."
    />
  );
}
