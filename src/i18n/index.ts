import type { Translations } from "./types";
import { en } from "./en";
import { cs } from "./cs";
import { es } from "./es";

const translations: Record<string, Translations> = { en, cs, es };

export const SUPPORTED_LANGS = ["en", "cs", "es"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export function getTranslations(lang: string): Translations {
  return translations[lang] ?? translations.en;
}

export function isValidLang(lang: string): lang is Lang {
  return SUPPORTED_LANGS.includes(lang as Lang);
}
