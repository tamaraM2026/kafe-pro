# Multi-Language Support (EN / CS / ES)

**Date:** 2026-06-06
**Languages:** English (en), Czech (cs), Spanish (es)
**URL scheme:** Prefix routes — `/$lang/page`
**Persistence:** None — language is determined by URL only

## What Changes

### 1. Route Restructuring

**Current structure:**
```
src/routes/
  __root.tsx
  index.tsx          → /
  about.tsx          → /about
  founder.tsx        → /founder
  memberships.tsx    → /memberships
  community.tsx      → /community
  contact.tsx        → /contact
  cesky.tsx          → /cesky
  business-building-blocks.tsx → /business-building-blocks
```

**New structure:**
```
src/routes/
  __root.tsx              (unchanged — still renders SiteHeader + Outlet + SiteFooter)
  index.tsx               → / (redirect to /en/)
  $lang/
    route.tsx             → /$lang layout (validates lang param, provides context)
    index.tsx             → /$lang/ (homepage)
    about.tsx             → /$lang/about
    founder.tsx           → /$lang/founder
    memberships.tsx       → /$lang/memberships
    community.tsx         → /$lang/community
    contact.tsx           → /$lang/contact
    business-building-blocks.tsx → /$lang/business-building-blocks
```

**Removed:** `src/routes/cesky.tsx` (replaced by `/$lang/` with `lang=cs`)

**Root redirect:** `src/routes/index.tsx` becomes a simple redirect component:
```tsx
// Navigate to /en/ on mount
```

**Lang validation:** `src/routes/$lang/route.tsx` validates that `$lang` is one of `en`, `cs`, `es`. Invalid values trigger 404. This route also provides the lang context via TanStack Router's route context, so all child routes can access the current language.

### 2. Translation System

**No external library.** Three TypeScript files exporting typed translation objects.

**Files:**
- `src/i18n/types.ts` — TypeScript type for the translation object shape
- `src/i18n/en.ts` — English translations (extracted from current hardcoded strings)
- `src/i18n/cs.ts` — Czech translations (homepage from existing `/cesky`, rest AI-translated)
- `src/i18n/es.ts` — Spanish translations (all AI-translated)
- `src/i18n/index.ts` — exports `getTranslations(lang: string)` function

**Translation object shape:** One top-level key per page, plus `common` for shared strings (header, footer, language names, CTA labels). Each page key contains all the strings for that page as flat key-value pairs.

```ts
type Translations = {
  common: {
    siteName: string;
    reserve: string;
    exploreMemberships: string;
    // ... header, footer, nav labels
  };
  home: {
    heroSubtitle: string;
    heroTitle: string;
    heroBody: string;
    // ... all homepage strings
  };
  about: { ... };
  founder: { ... };
  memberships: { ... };
  community: { ... };
  contact: { ... };
  bbb: { ... };
};
```

**Hook:** `src/hooks/use-translations.ts`
```ts
export function useTranslations() {
  const { lang } = Route.useParams(); // from $lang route
  return getTranslations(lang);
}
```

Each page component calls `useTranslations()` and uses `t.home.heroTitle` etc. instead of hardcoded strings.

### 3. Language Switcher (Header)

The static `EN · ES · CZ` text in `SiteHeader.tsx` becomes clickable links:
- Each link navigates to the same page in the target language
- Uses `useLocation()` to get the current path, swaps the lang prefix
- Active language is visually highlighted (bolder, different color)
- Uses the existing nav link styling

Example: If user is on `/cs/about` and clicks "EN", navigates to `/en/about`.

**Implementation:** Extract the path after `/$lang/` and prepend the new lang prefix.

### 4. SEO — Head Meta per Language

Each page's `head()` function reads the lang param and returns translated `<title>` and `<meta description>`.

Add `<link rel="alternate">` hreflang tags for all three languages on every page:
```html
<link rel="alternate" hreflang="en" href="/en/about" />
<link rel="alternate" hreflang="cs" href="/cs/about" />
<link rel="alternate" hreflang="es" href="/es/about" />
<link rel="alternate" hreflang="x-default" href="/en/about" />
```

The `<html lang="xx">` attribute in `__root.tsx` should reflect the current language.

### 5. Footer Language Adaptation

Footer content (section titles, description, link labels) is pulled from `t.common` translations. Social links stay the same across languages.

## Content Sources

| Page | English | Czech | Spanish |
|------|---------|-------|---------|
| Homepage | Current `index.tsx` strings | Existing `cesky.tsx` strings | AI-translated |
| About | Current `about.tsx` strings | AI-translated | AI-translated |
| Founder | Current `founder.tsx` strings | AI-translated | AI-translated |
| Memberships | Current `memberships.tsx` strings | AI-translated | AI-translated |
| Community | Current `community.tsx` strings | AI-translated | AI-translated |
| Contact | Current `contact.tsx` strings | AI-translated | AI-translated |
| BBB | Current `bbb.tsx` strings | AI-translated | AI-translated |

## What Stays the Same

- All Modern Warmth visual treatment (glassmorphism, animations, gradients, hover effects)
- Page component structure and layout — only text strings change
- `Animate` component, `useInView`, `useCountUp` hooks
- Color palette, fonts, Tailwind configuration
- The `__root.tsx` shell (SiteHeader + main + SiteFooter)

## Files Changed

**New files (6):**
- `src/i18n/types.ts`
- `src/i18n/en.ts`
- `src/i18n/cs.ts`
- `src/i18n/es.ts`
- `src/i18n/index.ts`
- `src/hooks/use-translations.ts`

**New files (route restructure) (8):**
- `src/routes/$lang/route.tsx`
- `src/routes/$lang/index.tsx`
- `src/routes/$lang/about.tsx`
- `src/routes/$lang/founder.tsx`
- `src/routes/$lang/memberships.tsx`
- `src/routes/$lang/community.tsx`
- `src/routes/$lang/contact.tsx`
- `src/routes/$lang/business-building-blocks.tsx`

**Modified files (3):**
- `src/routes/index.tsx` (becomes redirect to `/en/`)
- `src/components/SiteHeader.tsx` (language switcher links)
- `src/routes/__root.tsx` (dynamic `lang` attribute on `<html>`)

**Removed files (7):**
- `src/routes/about.tsx`
- `src/routes/founder.tsx`
- `src/routes/memberships.tsx`
- `src/routes/community.tsx`
- `src/routes/contact.tsx`
- `src/routes/cesky.tsx`
- `src/routes/business-building-blocks.tsx`

**Modified shared components (1):**
- `src/components/SiteFooter.tsx` (uses `useTranslations` hook for footer text)
