# Multi-Language (EN/CS/ES) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add full EN/CS/ES multi-language support with prefix-based routing (`/$lang/page`), typed translation files, a language switcher in the header, and SEO hreflang tags.

**Architecture:** All page content extracted into typed translation objects in `src/i18n/`. A `$lang` route parameter validates the language and provides it via TanStack Router context. Page components read translations via a `useTranslations()` hook. The header's `EN · ES · CZ` text becomes clickable links that swap the lang prefix while preserving the current page path. Root `/` redirects to `/en/`.

**Tech Stack:** React 19, TanStack Router (file-based routing with `$lang` param), TypeScript, Tailwind CSS 4. No external i18n library.

---

### Task 1: Translation Type Definition + English Translations

**Files:**
- Create: `src/i18n/types.ts`
- Create: `src/i18n/en.ts`
- Create: `src/i18n/index.ts`

This task extracts ALL translatable strings from the current pages into a typed structure. The English file is the source of truth — Czech and Spanish will match its shape exactly.

- [ ] **Step 1: Create the translation type**

Create `src/i18n/types.ts`. The type must cover every string on every page. Structure: one key per page, plus `common` for shared strings (nav, footer, CTAs). Use flat keys within each page section — no nesting beyond page level.

Extract every hardcoded string from the current route files (`index.tsx`, `about.tsx`, `founder.tsx`, `memberships.tsx`, `community.tsx`, `contact.tsx`, `business-building-blocks.tsx`) and the shared components (`SiteHeader.tsx`, `SiteFooter.tsx`).

Key naming convention: `camelCase`, descriptive, e.g. `heroTitle`, `heroBody`, `painQuotesTitle`.

Arrays of items (quotes, pillars, tiers, FAQs, testimonials, members, curriculum, etc.) should be typed as arrays within their page section.

The `common` section must include:
- Navigation labels for all 7 pages + Programmes dropdown
- Footer text (tagline, explore heading, follow heading, where heading, location text, getInTouch)
- CTA button labels (reserve, exploreMemberships)
- Language names (english, czech, spanish)
- Meta: page titles and descriptions for each page

- [ ] **Step 2: Create the English translation file**

Create `src/i18n/en.ts` implementing the `Translations` type. Extract exact strings from the current page files — do not paraphrase or edit. Every string currently hardcoded in JSX must appear here.

- [ ] **Step 3: Create the translation index**

Create `src/i18n/index.ts`:

```ts
import type { Translations } from "./types";
import { en } from "./en";

const translations: Record<string, Translations> = { en };

export const SUPPORTED_LANGS = ["en", "cs", "es"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export function getTranslations(lang: string): Translations {
  return translations[lang] ?? translations.en;
}

export function isValidLang(lang: string): lang is Lang {
  return SUPPORTED_LANGS.includes(lang as Lang);
}
```

Note: Czech and Spanish will be added to the `translations` record in Tasks 2 and 3.

- [ ] **Step 4: Verify build**

Run: `source ~/.nvm/nvm.sh && nvm use 22 && npx tsc --noEmit 2>&1 | tail -10`
Expected: No type errors.

- [ ] **Step 5: Commit**

```bash
git add src/i18n/
git commit -m "feat: add i18n type definitions and English translations"
```

---

### Task 2: Czech Translations

**Files:**
- Create: `src/i18n/cs.ts`
- Modify: `src/i18n/index.ts` (add `cs` import)

- [ ] **Step 1: Create Czech translation file**

Create `src/i18n/cs.ts` implementing the `Translations` type.

**Homepage (`home`):** Use the existing strings from `src/routes/cesky.tsx` — these are real Czech translations already written by a human. Extract them directly: `pillars`, `stats`, `steps`, `forWhom`, `testimonials`, hero text, CTA labels, section headings.

**All other pages:** Translate from English. The founder's name stays as-is. Member names, URLs, and collaborator names are not translated. The BBB programme's `REGISTER_URL` and `WORKSHOPS_URL` stay the same.

**Community page members:** The `bio` field for members who already have Czech bios (Zuzana Koláčková, Iveta Skřivanová) should keep their existing Czech text. For English-bio members (Adela, Tamara, Viktoria), translate to Czech.

- [ ] **Step 2: Register Czech in index**

Add to `src/i18n/index.ts`:
```ts
import { cs } from "./cs";
// Update the translations record:
const translations: Record<string, Translations> = { en, cs };
```

- [ ] **Step 3: Verify build**

Run: `source ~/.nvm/nvm.sh && nvm use 22 && npx tsc --noEmit 2>&1 | tail -10`
Expected: No type errors — `cs` must satisfy `Translations` type.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/cs.ts src/i18n/index.ts
git commit -m "feat: add Czech translations"
```

---

### Task 3: Spanish Translations

**Files:**
- Create: `src/i18n/es.ts`
- Modify: `src/i18n/index.ts` (add `es` import)

- [ ] **Step 1: Create Spanish translation file**

Create `src/i18n/es.ts` implementing the `Translations` type. Translate all content from English to Spanish.

The founder (Tamara Medina) is a native Spanish speaker — her bio and the brand voice should feel natural in Spanish, not machine-translated. "Kafe con Propósito" is already Spanish — the tagline can be "Café con Propósito" or kept as "Kafe con Propósito" (brand name).

Member names, URLs, and collaborator names are not translated. Members with Czech-only bios (Zuzana, Iveta) should have their bios translated from Czech to Spanish.

- [ ] **Step 2: Register Spanish in index**

Add to `src/i18n/index.ts`:
```ts
import { es } from "./es";
const translations: Record<string, Translations> = { en, cs, es };
```

- [ ] **Step 3: Verify build**

Run: `source ~/.nvm/nvm.sh && nvm use 22 && npx tsc --noEmit 2>&1 | tail -10`
Expected: No type errors.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/es.ts src/i18n/index.ts
git commit -m "feat: add Spanish translations"
```

---

### Task 4: Route Restructure — `$lang` Layout + Redirect

**Files:**
- Modify: `src/routes/index.tsx` (replace with redirect)
- Create: `src/routes/$lang/route.tsx` (lang validation layout)
- Create: `src/hooks/use-translations.ts`
- Modify: `src/routes/__root.tsx` (dynamic html lang)

This task sets up the routing infrastructure. No page content is moved yet.

- [ ] **Step 1: Create the `useTranslations` hook**

Create `src/hooks/use-translations.ts`:

```ts
import { getTranslations } from "@/i18n";
import { Route as LangRoute } from "@/routes/$lang/route";

export function useTranslations() {
  const { lang } = LangRoute.useParams();
  return getTranslations(lang);
}

export function useLang() {
  const { lang } = LangRoute.useParams();
  return lang;
}
```

- [ ] **Step 2: Create the `$lang` layout route**

Create `src/routes/$lang/route.tsx`:

```tsx
import { createFileRoute, Outlet, notFound } from "@tanstack/react-router";
import { isValidLang } from "@/i18n";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isValidLang(params.lang)) {
      throw notFound();
    }
  },
  component: () => <Outlet />,
});
```

- [ ] **Step 3: Replace root index with redirect**

Replace `src/routes/index.tsx` with:

```tsx
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang", params: { lang: "en" } });
  },
  component: () => null,
});
```

- [ ] **Step 4: Update `__root.tsx` for dynamic lang**

In `src/routes/__root.tsx`, modify the `RootShell` to accept and pass through lang. Since the root shell renders before route params are available, we'll read it from the URL path directly:

```tsx
function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}
```

The `lang` attribute on `<html>` will be updated client-side by the `$lang/route.tsx` layout using a `useEffect` that sets `document.documentElement.lang`. Add this to `src/routes/$lang/route.tsx`:

```tsx
import { useEffect } from "react";
// Inside the component:
function LangLayout() {
  const { lang } = Route.useParams();
  useEffect(() => {
    document.documentElement.lang = lang === "cs" ? "cs" : lang === "es" ? "es" : "en";
  }, [lang]);
  return <Outlet />;
}
```

- [ ] **Step 5: Verify build**

Run: `source ~/.nvm/nvm.sh && nvm use 22 && npm run build 2>&1 | tail -5`
Expected: Build succeeds. The old page routes still exist at `/about` etc. — they'll be moved in the next tasks.

- [ ] **Step 6: Commit**

```bash
git add src/routes/index.tsx src/routes/\$lang/route.tsx src/hooks/use-translations.ts src/routes/__root.tsx
git commit -m "feat: add lang route layout, redirect, useTranslations hook"
```

---

### Task 5: Move All Pages Under `$lang/` + Use Translations

**Files:**
- Create: `src/routes/$lang/index.tsx` (homepage)
- Create: `src/routes/$lang/about.tsx`
- Create: `src/routes/$lang/founder.tsx`
- Create: `src/routes/$lang/memberships.tsx`
- Create: `src/routes/$lang/community.tsx`
- Create: `src/routes/$lang/contact.tsx`
- Create: `src/routes/$lang/business-building-blocks.tsx`
- Delete: `src/routes/about.tsx`
- Delete: `src/routes/founder.tsx`
- Delete: `src/routes/memberships.tsx`
- Delete: `src/routes/community.tsx`
- Delete: `src/routes/contact.tsx`
- Delete: `src/routes/cesky.tsx`
- Delete: `src/routes/business-building-blocks.tsx`

Each new page file under `$lang/`:
1. Changes `createFileRoute("/page")` to `createFileRoute("/$lang/page")`
2. Replaces all hardcoded strings with `t.page.keyName` from `useTranslations()`
3. Replaces hardcoded `Link to="/page"` with `Link to="/$lang/page" params={{ lang }}`
4. Uses `useLang()` to get the current lang for Link params
5. Sets `head()` meta from translations using route params

The page component structure, CSS classes, Animate wrappers, and all visual treatment stay identical. Only the text source changes from inline constants to `t.pageName.key`.

For the homepage specifically, the `StatCard` component stays the same but gets its `value` and `label` from translations. The quotes, pillars, belong, and tiers arrays all come from the translation object.

For the community page, member data (names, langs, roles, bios, urls) all come from translations. The `image` imports stay in the component file since they're asset references, not translatable text. Map images to members by index.

- [ ] **Step 1: Create all 7 page files under `$lang/`**

Each page follows the same pattern. Read the translation type to know which keys to use. The component JSX stays identical to the current version — only string sources change.

- [ ] **Step 2: Delete old route files**

```bash
rm src/routes/about.tsx src/routes/founder.tsx src/routes/memberships.tsx src/routes/community.tsx src/routes/contact.tsx src/routes/cesky.tsx src/routes/business-building-blocks.tsx
```

- [ ] **Step 3: Verify build**

Run: `source ~/.nvm/nvm.sh && nvm use 22 && npm run build 2>&1 | tail -5`
Expected: Build succeeds. TanStack Router auto-generates `routeTree.gen.ts`.

- [ ] **Step 4: Verify in browser**

Open `http://localhost:8080`. Should redirect to `/en/`. Navigate all pages — English content should display correctly. Try `/cs/` and `/es/` — should show Czech and Spanish content.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: move all pages under \$lang/ route, use translation system"
```

---

### Task 6: Language Switcher in Header

**Files:**
- Modify: `src/components/SiteHeader.tsx`

- [ ] **Step 1: Update header with language switcher**

Replace the static `EN · ES · CZ` div with functional links. Use `useLocation()` from TanStack Router to get the current path, extract the page segment after `/$lang/`, and build links to the same page in each language.

```tsx
import { Link, useLocation } from "@tanstack/react-router";

// Inside SiteHeader, replace the language div:
function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const location = useLocation();
  const pathAfterLang = location.pathname.replace(/^\/(en|cs|es)/, "") || "/";
  
  const langs = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "cs", label: "CZ" },
  ];

  return (
    <div className="flex items-center gap-1 text-xs">
      {langs.map((l, i) => (
        <span key={l.code}>
          {i > 0 && <span className="text-muted-foreground mx-1">·</span>}
          <Link
            to={`/${l.code}${pathAfterLang}`}
            className={`transition-colors ${
              currentLang === l.code
                ? "text-burgundy font-semibold"
                : "text-muted-foreground hover:text-burgundy"
            }`}
          >
            {l.label}
          </Link>
        </span>
      ))}
    </div>
  );
}
```

The header needs to read the current lang. Since it renders outside the `$lang` route context, use `useLocation()` to extract it from the URL path:

```tsx
const lang = location.pathname.split("/")[1] || "en";
```

Also update all nav `Link` components to use `/$lang/page` paths with the current lang.

The mobile drawer nav links also need updating to use lang-prefixed paths.

- [ ] **Step 2: Verify in browser**

- Click "CZ" — should navigate to Czech version of current page
- Click "ES" — should navigate to Spanish version
- Language indicator highlights the active language
- Works from any page

- [ ] **Step 3: Commit**

```bash
git add src/components/SiteHeader.tsx
git commit -m "feat: add functional language switcher to header"
```

---

### Task 7: Footer Translations + Lang-Prefixed Links

**Files:**
- Modify: `src/components/SiteFooter.tsx`

- [ ] **Step 1: Update footer to use translations**

The footer currently has hardcoded English text. It needs to:
1. Read translations via URL path (same approach as header — extract lang from `useLocation()`)
2. Replace hardcoded text with translation keys
3. Update footer nav links to use `/$lang/` prefixed paths

Footer translatable strings: tagline, "Explore" heading, nav link labels, "Follow us" heading, "Where" heading, location text, "Get in touch" CTA, copyright text.

Social link names (Instagram, Facebook, LinkedIn) stay in English — they're brand names.

- [ ] **Step 2: Verify in browser**

Switch to Czech — footer text should be in Czech. Switch to Spanish — footer in Spanish.

- [ ] **Step 3: Commit**

```bash
git add src/components/SiteFooter.tsx
git commit -m "feat: footer uses translations and lang-prefixed links"
```

---

### Task 8: SEO — hreflang Tags

**Files:**
- Modify: `src/routes/$lang/route.tsx` (or individual page head functions)

- [ ] **Step 1: Add hreflang alternate links**

Each page's `head()` function should include `<link rel="alternate">` tags for all three languages. Since TanStack Router's `head()` receives route params, build the hreflang links dynamically:

```tsx
head: ({ params }) => ({
  meta: [
    { title: getTranslations(params.lang).meta.homeTitle },
    { name: "description", content: getTranslations(params.lang).meta.homeDescription },
  ],
  links: [
    { rel: "alternate", hreflang: "en", href: `/en/` },
    { rel: "alternate", hreflang: "cs", href: `/cs/` },
    { rel: "alternate", hreflang: "es", href: `/es/` },
    { rel: "alternate", hreflang: "x-default", href: `/en/` },
  ],
}),
```

Each page generates its own hreflang links with the correct page path.

- [ ] **Step 2: Verify**

View page source or inspect `<head>` — should see 4 `<link rel="alternate">` tags per page with correct hrefs.

- [ ] **Step 3: Commit**

```bash
git add src/routes/\$lang/
git commit -m "feat: add hreflang alternate links for SEO"
```

---

### Task 9: Final Verification

- [ ] **Step 1: Build check**

Run: `source ~/.nvm/nvm.sh && nvm use 22 && npm run build 2>&1 | tail -5`
Expected: Clean build, no errors.

- [ ] **Step 2: Full walkthrough**

Open `http://localhost:8080`:
- [ ] Root `/` redirects to `/en/`
- [ ] All 7 English pages render correctly at `/en/`, `/en/about`, etc.
- [ ] Switch to Czech — all 7 pages render in Czech at `/cs/`, `/cs/about`, etc.
- [ ] Switch to Spanish — all 7 pages render in Spanish at `/es/`, `/es/about`, etc.
- [ ] Language switcher highlights active language
- [ ] Switching language on any page preserves the current page
- [ ] Mobile menu works and uses correct language links
- [ ] Footer text changes with language
- [ ] Invalid lang like `/fr/` shows 404
- [ ] Page titles and descriptions are in the correct language (check browser tab)

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: final verification — multi-language support complete"
```
