import { getTranslations } from "@/i18n";
import { useParams } from "@tanstack/react-router";

export function useTranslations() {
  const { lang } = useParams({ strict: false }) as { lang: string };
  return getTranslations(lang ?? "en");
}

export function useLang(): string {
  const { lang } = useParams({ strict: false }) as { lang: string };
  return lang ?? "en";
}
