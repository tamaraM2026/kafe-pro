# Modern Warmth — Full Site Refresh

**Date:** 2026-06-06
**Direction:** Modern Warmth — keep the warm soul of Kafe con Propósito, bring in 2025 visual techniques
**Animation level:** Confident & Lively — noticeable motion without being distracting
**Scope:** Full refresh across all pages and shared components

## What Stays the Same

- Color palette: burgundy, sage, terracotta, cream (CSS custom properties unchanged)
- Font pairing: Cormorant Garamond (display) + Inter (body)
- Content, copy, and page structure
- TanStack Router file-based routing
- Tailwind CSS 4 utility-first approach

## What Changes

### 1. Scroll Animation System

**New file:** `src/hooks/use-in-view.tsx`

A reusable `useInView` hook wrapping `IntersectionObserver`. Returns a ref and a boolean. Components attach the ref and apply CSS classes when visible.

**New file:** `src/components/Animate.tsx`

A wrapper component that applies fade+slide-up entrance animation to its children when they scroll into view. Accepts optional `delay` prop for staggering siblings.

```tsx
<Animate>
  <div>I fade in when scrolled to</div>
</Animate>

<Animate delay={100}>
  <div>I fade in 100ms later</div>
</Animate>
```

**CSS additions to `styles.css`:**
- `.animate-in` base class: `opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;`
- `.animate-in.visible`: `opacity: 1; transform: translateY(0);`
- Delay utility classes: `.delay-100` through `.delay-500`

No external animation library. Pure CSS transitions triggered by IntersectionObserver.

### 2. Header (`SiteHeader.tsx`)

**Glassmorphism refinement:**
- Background: `bg-white/60 backdrop-blur-xl` (more translucent than current `bg-background/80`)
- Border: `border-b border-white/20` (softer than current)
- Add `shadow-sm` when scrolled (track scroll position with a small `useEffect`)

**Scroll shrink:**
- New state: `isScrolled` (true when `scrollY > 20`)
- When scrolled: reduce vertical padding, slightly shrink logo
- Smooth transition via `transition-all duration-300`

**Mobile menu:**
- Hamburger icon button visible on `md:hidden`
- Slide-in drawer from right with backdrop overlay
- Same nav links + Programmes accordion
- Close on link click or backdrop click

**Active nav animation:**
- Replace static `bg-cream` activeProps with animated bottom border/underline
- `after:` pseudo-element that scales from 0 to 1 on active

### 3. Hero Section (Homepage `index.tsx`)

**Text entrance:**
- Wrap heading in `<Animate>` with slight delay stagger between tagline, heading, body, CTAs
- Heading fades + slides up, followed by paragraph 200ms later, CTAs 400ms later

**Floating decorative elements:**
- Add 2-3 subtle gradient blobs behind the hero image using `absolute` positioned divs
- Soft radial gradients in terracotta/sage at low opacity (8-12%)
- Gentle CSS `animation: float 6s ease-in-out infinite` for slow drift

**Stats cards:**
- Number counting animation: a `useCountUp` hook that animates from 0 to target value when in view
- Hover: `hover:-translate-y-1 hover:shadow-md transition-all duration-300`

**CTA buttons:**
- Add subtle gradient backgrounds instead of flat colors
- Hover: slight scale (`hover:scale-[1.02]`) + shadow increase
- Active: `active:scale-[0.98]` for tactile feedback

### 4. Cards & Content Blocks (global)

**Glassmorphism cards:**
- New card style: `bg-white/50 backdrop-blur-sm border border-white/30 shadow-sm`
- Applied to: testimonial cards, feature cards, FAQ items, member cards, pricing non-featured
- Hover: `hover:-translate-y-1 hover:shadow-lg hover:bg-white/70 transition-all duration-300`

**Testimonial quotes (homepage + about + cesky):**
- Replace `border-l-4 border-terracotta` with gradient left border using pseudo-element
- Gradient: terracotta → burgundy vertical

**Pricing cards (homepage + memberships):**
- Non-featured: glassmorphism style
- Featured (burgundy): add soft glow via `shadow-2xl shadow-burgundy/25`
- All cards: hover lift effect

**Member cards (community):**
- Glassmorphism background
- Image hover: subtle scale (`hover:scale-105`) with overflow hidden
- Card hover: lift + shadow

### 5. Section Transitions

**Gradient dividers:**
- Replace hard `bg-cream` / `bg-background` alternation with subtle gradient fade at boundaries
- Add `bg-gradient-to-b from-background to-cream` transition sections (8px tall div between sections)

**Wave dividers (hero → stats only):**
- Single SVG wave between hero and stats section
- Inline SVG, matches background colors
- Only on homepage — keeps it special without overusing the effect

### 6. Typography & Spacing

**Section breathing room:**
- Increase main section padding: `py-24` → `py-28` on desktop, keep `py-16` on mobile
- Increase gap between section header and content: add `mt-16` → `mt-20` where needed

**Gradient headings:**
- Key headings (hero h1, CTA h2) get `bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent`
- Not all headings — only 2-3 per page for emphasis

**Body text:**
- Hero paragraph: bump to `text-xl` from `text-lg`
- Increase `leading-relaxed` usage for longer paragraphs

### 7. Footer (`SiteFooter.tsx`)

**Glassmorphism dark:**
- Background: `bg-burgundy/95 backdrop-blur-xl`
- Inner border: `border-t border-white/10`

**Social icons:**
- Replace text links ("Instagram", "Facebook", "LinkedIn") with inline SVG icons
- Hover: color transition + slight scale
- Icon size: 20x20, with text label on hover via tooltip or adjacent span

**Layout refinement:**
- 4-column grid on desktop (about, links, social, location) instead of 3
- Add Kafe logo in footer

### 8. Page-by-Page Application

Every page wraps its sections in `<Animate>` for scroll-triggered entrances:

- **Homepage (`index.tsx`):** All 6 sections animated. Stats get count-up. Hero gets staggered entrance + floating blobs.
- **About (`about.tsx`):** Testimonials and FAQ items stagger. FAQ details get smooth open/close transition.
- **Founder (`founder.tsx`):** Image parallax-lite (slower scroll via `transform`). Text staggered fade-in.
- **Memberships (`memberships.tsx`):** Pricing cards stagger left-to-right. CTA banner fade-in.
- **Community (`community.tsx`):** Member cards stagger. Featured partner card hover lift. Collaborator pills animate in as a group.
- **Contact (`contact.tsx`):** Form fields stagger entrance. Success message fade-in.
- **Česky (`cesky.tsx`):** Same treatment as homepage (mirrored structure). Storytelling section gets special gradient bg animation.
- **Business Building Blocks (`business-building-blocks.tsx`):** Curriculum numbered items stagger. Outcome cards stagger.

### 9. Accessibility

- All animations respect `prefers-reduced-motion: reduce` — disable transforms, reduce opacity transition to instant
- Add `@media (prefers-reduced-motion: reduce)` block in `styles.css` that sets `transition-duration: 0.01s` on `.animate-in`
- Mobile hamburger menu is keyboard-accessible (focus trap, Escape to close)
- No animation-only content — everything is readable without motion

## Files Changed

**New files (3):**
- `src/hooks/use-in-view.tsx` — IntersectionObserver hook
- `src/components/Animate.tsx` — scroll animation wrapper
- `src/components/MobileMenu.tsx` — slide-in mobile navigation drawer

**Modified files (11):**
- `src/styles.css` — animation classes, glassmorphism utilities, gradient utilities, reduced-motion media query
- `src/components/SiteHeader.tsx` — glassmorphism, scroll shrink, mobile menu integration, active nav animation
- `src/components/SiteFooter.tsx` — glassmorphism dark, SVG social icons, 4-column layout
- `src/routes/index.tsx` — animate wraps, floating blobs, gradient headings, count-up stats, glass cards
- `src/routes/about.tsx` — animate wraps, glass cards, FAQ transition
- `src/routes/founder.tsx` — animate wraps, parallax-lite image
- `src/routes/memberships.tsx` — animate wraps, glass cards, glow on featured
- `src/routes/community.tsx` — animate wraps, glass cards, image hover
- `src/routes/contact.tsx` — animate wraps, form field stagger
- `src/routes/cesky.tsx` — animate wraps, glass cards, gradient storytelling
- `src/routes/business-building-blocks.tsx` — animate wraps, stagger curriculum

## Implementation Approach

Pure CSS + small React hooks. No external dependencies added. The `Animate` component is ~20 lines. The `useInView` hook is ~15 lines. Everything else is Tailwind class changes in existing files.

Work can proceed page-by-page: build the animation system + header + footer first (shared), then apply to each page independently.
