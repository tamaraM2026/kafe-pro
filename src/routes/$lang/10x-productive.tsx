import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/10x-productive")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/$lang/10x-unstuck", params: { lang: params.lang } });
  },
  component: () => null,
});
