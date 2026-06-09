# Kafe con Proposito — Developer Guide for AI Assistants

This guide is the SINGLE SOURCE OF TRUTH for making changes to this project.
Read it COMPLETELY before writing any code. Every pattern, path, and convention
described here must be followed exactly.

## Project Overview

A multilingual website (English/Czech/Spanish) for a women's community in
Central Bohemia. Built with React 19, TanStack Router, Tailwind CSS 4, Vite 7.
Deployed to GitHub Pages (static pre-render) and Cloudflare Workers (SSR).

## Tech Stack (exact versions matter)

- Node.js 22+ (REQUIRED — run `nvm use 22` before any commands)
- React 19, TypeScript 5.8
- TanStack Router (file-based routing under `src/routes/`)
- TanStack Start (SSR via Cloudflare Workers)
- Tailwind CSS 4 (uses `@import "tailwindcss"` syntax, NOT v3 `@tailwind` directives)
- Vite 7 (config in `vite.config.ts` via `@lovable.dev/vite-tanstack-config`)

## Commands

```bash
nvm use 22          # ALWAYS run first
npm install         # install deps
npm run dev         # start dev server at http://localhost:8080
npm run build       # production build (check for errors)
npm run lint        # eslint
```

---

## File Map (know what every file does)

### Core Files — DO NOT MODIFY unless you know what you're doing
```
vite.config.ts              # Vite config — uses @lovable.dev preset, DO NOT add plugins
wrangler.jsonc              # Cloudflare Workers config
src/server.ts               # SSR entry point for Cloudflare
src/router.tsx              # TanStack Router setup
src/start.ts                # TanStack Start entry
src/routeTree.gen.ts        # AUTO-GENERATED — never edit manually
```

### Styling
```
src/styles.css              # Tailwind CSS 4 + custom animations + color theme
                            # Colors: burgundy, sage, terracotta, cream
                            # Fonts: Cormorant Garamond (headings), Inter (body)
                            # Animation: .animate-in + .visible classes
```

### Shared Components
```
src/components/SiteHeader.tsx   # Header with nav, language switcher, mobile drawer
src/components/SiteFooter.tsx   # Footer with 4 columns, social SVG icons
src/components/Animate.tsx      # Scroll animation wrapper (uses IntersectionObserver)
src/components/ui/              # shadcn/ui components — DO NOT modify
```

### Hooks
```
src/hooks/use-in-view.tsx       # IntersectionObserver hook (used by Animate)
src/hooks/use-count-up.tsx      # Number counting animation (used on homepage stats)
src/hooks/use-translations.ts   # Returns translations for current language
src/hooks/use-mobile.tsx        # Mobile breakpoint detection
```

### Translation System (i18n)
```
src/i18n/types.ts           # TypeScript type — DEFINES the shape of all translations
src/i18n/en.ts              # English translations — SOURCE OF TRUTH for content
src/i18n/cs.ts              # Czech translations
src/i18n/es.ts              # Spanish translations
src/i18n/index.ts           # Exports getTranslations(), isValidLang(), SUPPORTED_LANGS
```

### Routes (pages) — ALL under src/routes/$lang/
```
src/routes/__root.tsx                       # Root layout: SiteHeader + <Outlet> + SiteFooter
src/routes/index.tsx                        # Redirect / → /en/
src/routes/$lang/route.tsx                  # Lang validation layout (validates en|cs|es)
src/routes/$lang/index.tsx                  # Homepage
src/routes/$lang/about.tsx                  # What Kafe is
src/routes/$lang/founder.tsx                # Founder bio
src/routes/$lang/memberships.tsx            # Membership tiers
src/routes/$lang/community.tsx              # Community & partners
src/routes/$lang/contact.tsx                # Contact form
src/routes/$lang/business-building-blocks.tsx  # BBB programme
src/routes/$lang/10x-productive.tsx         # 10x Productive guide
src/routes/$lang/the-unveiled-experience.tsx   # The Unveiled Experience event
```

### Assets
```
src/assets/                 # Images (jpg/png) — hero, members, gatherings, etc.
src/assets/logos/            # Partner logos (png with transparent backgrounds)
src/assets/unveiled/         # Images for The Unveiled Experience page
src/assets/logo.png          # Site logo (transparent background)
src/assets/favicon.ico       # Favicon
```

---

## How Things Work

### Routing

Every page lives at `/$lang/pagename` where `$lang` is `en`, `cs`, or `es`.
TanStack Router uses FILE-BASED routing. The file path IS the URL:

- `src/routes/$lang/index.tsx` → `/$lang/` (homepage)
- `src/routes/$lang/about.tsx` → `/$lang/about`

The `$lang` parameter is validated in `src/routes/$lang/route.tsx`.
Invalid languages (e.g., `/fr/`) return 404.

### Translation System

All visible text comes from translation files. Pages NEVER hardcode strings.

**How a page uses translations:**
```tsx
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

// In head() for meta tags:
head: ({ params }) => {
  const t = getTranslations(params.lang);
  return { meta: [{ title: t.meta.pageTitle }] };
},

// In component:
function MyPage() {
  const t = useTranslations();
  const lang = useLang();
  return <h1>{t.pageName.heading}</h1>;
}
```

**How links work with language:**
```tsx
// Internal page link — use lang param:
<Link to={"/$lang/community"} params={{ lang }}>

// Anchor link to homepage section:
<a href={`/${lang}/#what-kafe-is`}>

// External link:
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
```

### Visual Design System

**Colors** (defined in `src/styles.css` as CSS custom properties):
- `burgundy` — primary brand color (dark red, used for headings)
- `terracotta` — warm accent (orange-brown, used for labels/accents)
- `sage` — green accent (used for CTA buttons)
- `cream` — light background for alternating sections
- `background` — main page background (light warm beige)

**Card pattern (glassmorphism):**
```tsx
className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30
           shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
```

**Gradient heading:**
```tsx
className="font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy
           to-terracotta bg-clip-text text-transparent"
```

**CTA button:**
```tsx
className="px-7 py-4 rounded-full bg-gradient-to-r from-sage to-sage/80
           text-sage-foreground hover:scale-[1.02] active:scale-[0.98] transition-all"
```

**Section with animation:**
```tsx
<section className="py-28 bg-cream">
  <div className="mx-auto max-w-6xl px-6">
    <Animate>
      <h2>...</h2>
    </Animate>
    <Animate delay={100}>
      <p>...</p>
    </Animate>
  </div>
</section>
```

**Alternating sections:** Odd sections use default background, even sections use `bg-cream`.

---

## Common Tasks — Step-by-Step Recipes

### Recipe 1: Change Text on a Page

1. Identify which page and which text
2. Open `src/i18n/en.ts` — find the key for that text
3. Change the value in ALL THREE files: `en.ts`, `cs.ts`, `es.ts`
4. Run `npm run build` to verify no type errors
5. Commit

**Example — change the homepage hero heading:**
```
File: src/i18n/en.ts → home.heroHeading
File: src/i18n/cs.ts → home.heroHeading (Czech translation)
File: src/i18n/es.ts → home.heroHeading (Spanish translation)
```

### Recipe 2: Add a New Page

**Step 1:** Add translation type in `src/i18n/types.ts`:
```ts
// Add to the Translations type:
newpage: {
  label: string;
  heading: string;
  body: string;
};
```

**Step 2:** Add meta keys in `src/i18n/types.ts`:
```ts
// Inside the meta section:
newpageTitle: string;
newpageDescription: string;
```

**Step 3:** Add translations in ALL THREE files (`en.ts`, `cs.ts`, `es.ts`):
```ts
newpage: {
  label: "MY LABEL",
  heading: "My Heading",
  body: "My body text.",
},
// Also add to meta section:
newpageTitle: "Page Title — Kafe con Propósito",
newpageDescription: "Description for SEO.",
```

**Step 4:** Create route file `src/routes/$lang/my-page.tsx`:
```tsx
import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

export const Route = createFileRoute("/$lang/my-page")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    return {
      meta: [
        { title: t.meta.newpageTitle },
        { name: "description", content: t.meta.newpageDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: "/en/my-page" },
        { rel: "alternate", hreflang: "cs", href: "/cs/my-page" },
        { rel: "alternate", hreflang: "es", href: "/es/my-page" },
        { rel: "alternate", hreflang: "x-default", href: "/en/my-page" },
      ],
    };
  },
  component: MyPage,
});

function MyPage() {
  const t = useTranslations();
  const lang = useLang();

  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium">
              {t.newpage.label}
            </p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">
              {t.newpage.heading}
            </h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-xl text-foreground/75 leading-relaxed">
              {t.newpage.body}
            </p>
          </Animate>
        </div>
      </section>
    </>
  );
}
```

**Step 5:** Add to navigation in `src/components/SiteHeader.tsx`:
- For a main nav item: add to the `nav` array
- For a programme: add to `common.programmesItems` in types + all translation files, then add to the `programmes` array in SiteHeader

**Step 6:** Run `npm run build` — TanStack Router auto-generates `routeTree.gen.ts`

### Recipe 3: Add an Image

1. Place the image file in `src/assets/` (or a subdirectory like `src/assets/logos/`)
2. In the component file, import it:
   ```tsx
   import myImage from "@/assets/my-image.jpg";
   ```
3. Use it in JSX:
   ```tsx
   <img src={myImage} alt="Description" className="w-full rounded-2xl object-cover" />
   ```
4. For transparent backgrounds on logos, use `mix-blend-multiply` class
5. For hover zoom effect:
   ```tsx
   <div className="overflow-hidden rounded-2xl">
     <img src={myImage} alt="" className="w-full object-cover hover:scale-105 transition-transform duration-700" />
   </div>
   ```

### Recipe 4: Add a Nav Link to an Existing Page

**For a regular page link:**
Add to the `nav` array in `src/components/SiteHeader.tsx`:
```tsx
{ to: "/my-page", label: t.common.nav.myPage, anchor: undefined as string | undefined },
```

**For a homepage section anchor:**
```tsx
{ to: "/", label: t.common.nav.mySection, anchor: "#my-section-id" },
```

**For a programme dropdown item:**
1. Add key to `common.programmesItems` in `src/i18n/types.ts`
2. Add translations in `en.ts`, `cs.ts`, `es.ts`
3. Add to `programmes` array in `SiteHeader.tsx`:
```tsx
{ to: "/my-programme", label: t.common.programmesItems.myProg },
```

### Recipe 5: Fix a Bug

1. Identify the file from the error message or description
2. Read the file
3. Make the minimal change needed
4. Run `npm run build` — must succeed with no errors
5. Test in browser at `http://localhost:8080`
6. Commit with message: `fix: description of what was fixed`

---

## PII & Sensitive Data Protection

### MANDATORY — Check Before Every Commit

**NEVER commit these to the repository:**

- Email addresses of real people (members, customers, attendees)
- Phone numbers
- Physical home addresses (business addresses like event venues are OK)
- Payment information (card numbers, bank details)
- API keys, tokens, or secrets
- Passwords or credentials
- Private social media profiles or DMs
- Member lists or attendance records
- Health, financial, or personal data about members

### What IS Safe to Commit

- Public business information (venue addresses, public social media links)
- Names and bios that are already published on the public website
- Public-facing content (event descriptions, pricing, programme details)
- Brand assets (logos, public photos from the website)

### Pre-Commit Checklist

Before running `git add` and `git commit`, ALWAYS:

1. **Run `git diff` and read every line** — look for emails, phone numbers, addresses
2. **Check for patterns:**
   - Email: anything with `@` that isn't `noreply@anthropic.com`
   - Phone: sequences of 9+ digits or patterns like `+420`, `+1`
   - API keys: strings starting with `sk_`, `pk_`, `ghp_`, `gho_`, `AIza`
3. **Check new asset files** — images should not contain visible PII
   (member lists on whiteboards, name badges with personal info, etc.)
4. **Never commit `.env` files** — they're in `.gitignore` for a reason

### If PII Was Accidentally Committed

1. Do NOT just delete it in a new commit — it's still in git history
2. Use `git filter-branch` or `git-filter-repo` to rewrite history
3. Force-push the cleaned branch
4. Notify the repository owner

### Patterns to Watch For

```
# These should NEVER appear in committed code:
ggeorgie@redhat.com          # developer emails
+420 xxx xxx xxx             # Czech phone numbers  
sk_live_*                    # Stripe keys
JIRA_API_TOKEN               # API tokens
any real member's email      # member PII
```

### Safe Placeholder Patterns

If you need example data in code, use these:
```
email: "hello@kafeconproposito.com"     # public business email
phone: "+420 000 000 000"               # placeholder
name:  "Jane Doe"                       # generic placeholder
```

---

## Don'ts — Things That Break the Build

1. **DON'T create routes outside `$lang/`** — all pages must be at `src/routes/$lang/filename.tsx`
2. **DON'T use `createFileRoute("/page")`** — must be `createFileRoute("/$lang/page")`
3. **DON'T hardcode visible text in JSX** — all text must come from `useTranslations()`
4. **DON'T edit `src/routeTree.gen.ts`** — it's auto-generated by TanStack Router on build
5. **DON'T modify `vite.config.ts`** — the `@lovable.dev` preset handles all plugins
6. **DON'T add translation keys to only one language** — `en.ts`, `cs.ts`, AND `es.ts` must all have the same keys or TypeScript will error
7. **DON'T use Tailwind v3 syntax** — no `@tailwind base;` — use `@import "tailwindcss"`
8. **DON'T import from `@/routes/$lang/route`** in components outside routes — use `useParams({ strict: false })` instead
9. **DON'T use `<Link to="/page">` without lang** — always `<Link to={"/$lang/page"} params={{ lang }}>`
10. **DON'T commit node_modules, dist, .wrangler, or .env files**

---

## Verify Before Commit

```bash
# 1. Build must succeed
npm run build

# 2. Check for TypeScript errors
npx tsc --noEmit

# 3. Review changes for PII
git diff --staged

# 4. Commit
git add <specific-files>
git commit -m "type: description"
```

**Commit message format:**
- `feat: add new feature`
- `fix: fix a bug`
- `chore: maintenance task`
- `docs: update documentation`

---

## Deployment

**GitHub Pages** — auto-deploys on push to `main` via `.github/workflows/deploy.yml`.
The workflow pre-renders all 27 pages (9 pages × 3 languages) with inlined CSS.
Pages are static HTML — no client-side JS on GitHub Pages.

**Cloudflare Workers** (SSR) — deploy manually with `npx wrangler deploy`.
Full SSR with client-side hydration, scroll animations, and interactivity.

---

## Quick Reference

| I want to... | Edit these files |
|---|---|
| Change page text | `src/i18n/en.ts` + `cs.ts` + `es.ts` |
| Add a new page | `src/i18n/types.ts` + 3 lang files + `src/routes/$lang/newpage.tsx` + `SiteHeader.tsx` |
| Add an image | Put in `src/assets/`, import in component |
| Change colors | `src/styles.css` (CSS custom properties in `:root`) |
| Change fonts | `src/styles.css` (`--font-display`, `--font-sans`) |
| Add a nav link | `src/components/SiteHeader.tsx` |
| Change footer | `src/components/SiteFooter.tsx` + translation keys |
| Add animation | Wrap in `<Animate>` component with optional `delay` prop |
| Fix mobile layout | Check `md:` responsive prefixes in Tailwind classes |
