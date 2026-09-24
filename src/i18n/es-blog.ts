// Text used only by the Spanish blog (/es/blog/). The rest of the site stays
// in English and uses src/i18n/en.ts.

// Used for absolute links in the RSS feed and social-sharing images.
export const SITE_URL = "https://kafeconproposito.com";

export const esBlog = {
  label: "EL BLOG",
  heading: "Historias, reflexiones y conversaciones con propósito",
  intro:
    "Reflexiones sobre la conexión, las decisiones y construir algo que importa — de Tamara y la comunidad de Kafe con Propósito.",
  empty: "Muy pronto publicaremos nuestra primera entrada en español.",
  readMoreCta: "Leer más →",
  backToBlog: "← Volver al blog",
  postNotFound: "No encontramos esta entrada",
  publishedOn: "Publicado el",
  minRead: "min de lectura",
  tagsLabel: "Etiquetas",
  reflectionHeading: "Preguntas para reflexionar",
  metaTitle: "Blog en español — Kafe con Propósito",
  metaDescription:
    "Reflexiones sobre la conexión, las decisiones y construir algo que importa, en español.",
  feedTitle: "Kafe con Propósito — Blog en español",
};

const MONTHS_ES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

/** "2026-09-24" → "24 de septiembre de 2026" */
export function formatDateEs(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return `${day} de ${MONTHS_ES[month - 1]} de ${year}`;
}
