import { createFileRoute } from "@tanstack/react-router";
import { ThankYouMessage } from "@/components/ThankYouMessage";

export const Route = createFileRoute("/$lang/contact-thank-you")({
  head: () => ({
    meta: [
      { title: "Message sent — Kafe con Propósito" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ContactThankYou,
});

function ContactThankYou() {
  return (
    <ThankYouMessage
      heading="Thanks for reaching out."
      body="Your message is on its way to Tamara. She usually replies within a couple of days."
    />
  );
}
