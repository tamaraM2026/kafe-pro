import type { Translations } from "./types";
import { en } from "./en";

const translations: Record<string, Translations> = { en };

export const SUPPORTED_LANGS = ["en"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export function getTranslations(_lang: string): Translations {
  return translations.en;
}

export function isValidLang(lang: string): lang is Lang {
  return SUPPORTED_LANGS.includes(lang as Lang);
}
