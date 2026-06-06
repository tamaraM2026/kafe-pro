import { createFileRoute, Outlet, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { isValidLang } from "@/i18n";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isValidLang(params.lang)) {
      throw notFound();
    }
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return <Outlet />;
}
