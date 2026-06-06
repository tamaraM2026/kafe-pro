# Modern Warmth Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply a "Modern Warmth" visual refresh to the entire Kafe con Propósito site — glassmorphism cards, scroll-triggered animations, gradient accents, mobile menu, refined header/footer — while keeping the existing warm brand identity intact.

**Architecture:** Pure CSS transitions triggered by a lightweight `useInView` React hook (IntersectionObserver). A reusable `<Animate>` wrapper component handles scroll-triggered fade+slide entrances. No external animation libraries. All changes are Tailwind class swaps and small new components.

**Tech Stack:** React 19, TanStack Router, Tailwind CSS 4, Vite 7. No new dependencies.

---

### Task 1: Animation System — CSS + `useInView` Hook + `Animate` Component

**Files:**
- Modify: `src/styles.css` (append animation classes + reduced-motion media query)
- Create: `src/hooks/use-in-view.tsx`
- Create: `src/components/Animate.tsx`

- [ ] **Step 1: Add animation CSS classes to `styles.css`**

Append after the existing `@layer base` block in `src/styles.css`:

```css
@layer base {
  .animate-in {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .animate-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .delay-100 { transition-delay: 100ms; }
  .delay-200 { transition-delay: 200ms; }
  .delay-300 { transition-delay: 300ms; }
  .delay-400 { transition-delay: 400ms; }
  .delay-500 { transition-delay: 500ms; }
}

@media (prefers-reduced-motion: reduce) {
  .animate-in {
    opacity: 1;
    transform: none;
    transition-duration: 0.01s;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
```

- [ ] **Step 2: Create `useInView` hook**

Create `src/hooks/use-in-view.tsx`:

```tsx
import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
```

- [ ] **Step 3: Create `Animate` component**

Create `src/components/Animate.tsx`:

```tsx
import { useInView } from "@/hooks/use-in-view";

interface AnimateProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Animate({ children, delay, className = "" }: AnimateProps) {
  const { ref, visible } = useInView();
  const delayClass = delay ? `delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`animate-in ${delayClass} ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Verify the build compiles**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds (no imports of new files yet, but they should compile cleanly).

- [ ] **Step 5: Commit**

```bash
git add src/styles.css src/hooks/use-in-view.tsx src/components/Animate.tsx
git commit -m "feat: add scroll animation system (useInView + Animate component)"
```

---

### Task 2: Header — Glassmorphism, Scroll Shrink, Active Nav

**Files:**
- Modify: `src/components/SiteHeader.tsx`

- [ ] **Step 1: Add scroll state and glassmorphism to SiteHeader**

Replace the entire `src/components/SiteHeader.tsx` with:

```tsx
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "What Kafe is" },
  { to: "/founder", label: "Founder" },
  { to: "/memberships", label: "Memberships" },
  { to: "/community", label: "Community" },
  { to: "/cesky", label: "Česky" },
  { to: "/contact", label: "Contact" },
];

const programmes = [
  { to: "/business-building-blocks", label: "Business Building Blocks" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/70 border-white/30 shadow-sm py-2"
            : "bg-white/50 border-white/20 py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kafe con Propósito"
              width={112}
              height={112}
              className={`object-contain mix-blend-multiply transition-all duration-300 ${
                scrolled ? "h-16 w-16" : "h-24 w-24 md:h-28 md:w-28"
              }`}
            />
            <span className="font-display text-xl md:text-2xl text-burgundy tracking-tight">
              Kafe con Propósito
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative px-4 py-2 rounded-full text-sm text-foreground/80 hover:text-burgundy transition-colors after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-burgundy after:transition-all after:duration-300 hover:after:w-1/2"
                activeProps={{
                  className:
                    "relative px-4 py-2 rounded-full text-sm text-burgundy after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-1/2 after:bg-burgundy",
                }}
              >
                {n.label}
              </Link>
            ))}
            <div className="relative group">
              <button
                type="button"
                className="px-4 py-2 rounded-full text-sm text-foreground/80 hover:text-burgundy transition-colors"
              >
                Programmes ▾
              </button>
              <div className="absolute right-0 top-full pt-2 hidden group-hover:block group-focus-within:block z-50">
                <div className="min-w-[240px] bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg p-2">
                  {programmes.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="block px-4 py-2 rounded-xl text-sm text-foreground/80 hover:text-burgundy hover:bg-white/50 transition-colors"
                      activeProps={{
                        className:
                          "block px-4 py-2 rounded-xl text-sm bg-white/50 text-burgundy",
                      }}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
            <span>EN</span><span>·</span><span>ES</span><span>·</span><span>CZ</span>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-foreground/80 hover:text-burgundy transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
          />
          <nav className="absolute right-0 top-0 h-full w-72 bg-white/90 backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-2 animate-in visible"
            style={{ transform: "none", opacity: 1 }}
          >
            <button
              type="button"
              className="self-end p-2 text-foreground/80 hover:text-burgundy"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-3 rounded-xl text-foreground/80 hover:text-burgundy hover:bg-cream/50 transition-colors"
                activeProps={{ className: "px-4 py-3 rounded-xl text-burgundy bg-cream/50" }}
                onClick={() => setMobileOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="border-t border-border/30 my-2" />
            <p className="px-4 text-xs text-muted-foreground tracking-widest">PROGRAMMES</p>
            {programmes.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="px-4 py-3 rounded-xl text-foreground/80 hover:text-burgundy hover:bg-cream/50 transition-colors"
                activeProps={{ className: "px-4 py-3 rounded-xl text-burgundy bg-cream/50" }}
                onClick={() => setMobileOpen(false)}
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:8080`. Check:
- Header is translucent with blur
- Scrolling shrinks the header and logo
- Hamburger menu appears on narrow viewport
- Mobile drawer opens/closes
- Active nav link has animated underline

- [ ] **Step 3: Commit**

```bash
git add src/components/SiteHeader.tsx
git commit -m "feat: modernize header — glassmorphism, scroll shrink, mobile drawer, active nav"
```

---

### Task 3: Footer — Glassmorphism Dark, SVG Icons, 4-Column Layout

**Files:**
- Modify: `src/components/SiteFooter.tsx`

- [ ] **Step 1: Replace SiteFooter with modernized version**

Replace the entire `src/components/SiteFooter.tsx` with:

```tsx
import logo from "@/assets/logo.png";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/kafeconproposito/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/groups/kafeconproposito",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/kafe-con-prop%C3%B3sito",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-burgundy/95 backdrop-blur-xl text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <img src={logo} alt="" width={56} height={56} className="h-14 w-14 object-contain brightness-0 invert opacity-80" />
          <h3 className="font-display text-2xl">Kafe con Propósito</h3>
          <p className="text-sm opacity-70">A women's circle in Central Bohemia. Real conversations over really good coffee.</p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="/about" className="hover:text-accent transition-colors">What Kafe is</a></li>
            <li><a href="/founder" className="hover:text-accent transition-colors">Founder</a></li>
            <li><a href="/memberships" className="hover:text-accent transition-colors">Memberships</a></li>
            <li><a href="/community" className="hover:text-accent transition-colors">Community</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Follow us</h4>
          <ul className="space-y-3">
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all group"
                >
                  <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Where</h4>
          <p className="text-sm opacity-70">Central Bohemia · Poděbrady · Prague</p>
          <p className="text-sm opacity-70 mt-2">Twice a month · EN · ES · CZ</p>
          <a href="/contact" className="mt-4 inline-block text-sm text-accent hover:underline underline-offset-4 transition-colors">
            Get in touch →
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Kafe con Propósito · Women's Circle
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify in browser**

Check footer on any page: 4-column layout on desktop, SVG social icons with hover scale, logo visible, translucent dark background.

- [ ] **Step 3: Commit**

```bash
git add src/components/SiteFooter.tsx
git commit -m "feat: modernize footer — glassmorphism dark, SVG social icons, 4-column layout"
```

---

### Task 4: Homepage — Full Modern Warmth Treatment

**Files:**
- Create: `src/hooks/use-count-up.tsx`
- Modify: `src/routes/index.tsx`

- [ ] **Step 1: Create `useCountUp` hook**

Create `src/hooks/use-count-up.tsx`:

```tsx
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

export function useCountUp(target: string, duration = 1200) {
  const { ref, visible } = useInView();
  const numericPart = parseInt(target.replace(/\D/g, ""), 10) || 0;
  const suffix = target.replace(/[\d]/g, "");
  const prefix = target.match(/^[^\d]*/)?.[0] ?? "";
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!visible || numericPart === 0) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numericPart * eased);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, numericPart, suffix, prefix, duration]);

  return { ref, display };
}
```

- [ ] **Step 2: Replace homepage with modernized version**

Replace the entire `src/routes/index.tsx` with:

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-gathering.jpg";
import { Animate } from "@/components/Animate";
import { useCountUp } from "@/hooks/use-count-up";

export const Route = createFileRoute("/")({
  component: Index,
});

const quotes = [
  "I have plenty of acquaintances. What I'm missing is people who actually get what I'm trying to build.",
  "I work from home, I'm building something I believe in — but the isolation is real.",
  "I'm not the same person I was a year ago — and I'm not sure yet who I'm becoming.",
  "I want to talk about real things — the doubts, the dreams, the hard choices. Not just the weather.",
];

const pillars = [
  { icon: "☕", title: "Community", text: "A consistent, trusted circle of women who show up — not a one-time event you forget by Monday." },
  { icon: "💬", title: "Growth", text: "Every gathering has a theme chosen by members. You leave with real perspective, not just business cards." },
  { icon: "🪑", title: "Support", text: "Your own people. Women who remember what you talked about last time, who celebrate your wins." },
];

const belong = [
  "You're building a business or career you care about",
  "You're an expat building roots, or a local craving new perspectives",
  "You're a mother balancing ambition with everything else",
  "You're navigating a transition — personal or professional",
  "You want an honest conversation, not polite small talk",
  "You're curious how other women are figuring things out",
];

const tiers = [
  { name: "The Espresso Shot", price: "450 CZK", per: "per session", tagline: "Pay as you go", desc: "Try a gathering before you commit. The perfect entry point for first-timers.", cta: "See upcoming", featured: false },
  { name: "The Brew Community", price: "850 CZK", per: "per month", tagline: "Most popular", desc: "Two guaranteed spots, member discounts, and the directory. The most popular way to make Kafe part of your life.", cta: "Join membership", featured: true },
  { name: "The Roastery", price: "1,950 CZK", per: "per month", tagline: "Premium", desc: "Everything in Brew, plus a monthly Mastermind, VIP guest pass, and business spotlight.", cta: "Go deeper", featured: false },
];

function StatCard({ value, label }: { value: string; label: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <div ref={ref} className="bg-white/50 backdrop-blur-sm rounded-3xl py-8 px-4 shadow-sm border border-white/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="font-display text-5xl text-terracotta">{display}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Floating blobs */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-terracotta/8 rounded-full blur-3xl" style={{ animation: "float 6s ease-in-out infinite" }} aria-hidden />
        <div className="absolute bottom-10 left-[5%] w-56 h-56 bg-sage/10 rounded-full blur-3xl" style={{ animation: "float 8s ease-in-out infinite 2s" }} aria-hidden />

        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <Animate>
              <p className="text-xs tracking-[0.25em] text-terracotta font-medium mb-6">
                CENTRAL BOHEMIA · EN · ES · CZ
              </p>
            </Animate>
            <Animate delay={100}>
              <h1 className="font-display text-5xl md:text-7xl leading-[1.05] bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">
                A community for women who are building something that matters.
              </h1>
            </Animate>
            <Animate delay={200}>
              <p className="mt-8 text-xl text-foreground/80 max-w-xl leading-relaxed">
                <span className="font-medium text-burgundy">Kafe con Propósito</span> brings professional women, entrepreneurs, and expats together — twice a month, in person, over really good coffee. Real conversations. Genuine connection. No pitches, no pressure.
              </p>
            </Animate>
            <Animate delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/memberships" className="px-7 py-4 rounded-full bg-gradient-to-r from-sage to-sage/80 text-sage-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-sage/20">
                  Reserve my spot →
                </Link>
                <Link to="/memberships" className="px-7 py-4 rounded-full bg-gradient-to-r from-terracotta to-terracotta/80 text-terracotta-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-terracotta/20">
                  Explore memberships
                </Link>
              </div>
            </Animate>
            <Animate delay={400}>
              <p className="mt-10 text-sm text-muted-foreground">
                Gatherings in English, Czech & Spanish · Central Bohemia & Prague · Twice a month
              </p>
            </Animate>
          </div>
          <Animate delay={200}>
            <div className="relative">
              <div className="absolute -inset-6 bg-terracotta/10 rounded-[3rem] -rotate-2" aria-hidden />
              <img
                src={hero}
                alt="Group of women laughing together over coffee"
                width={1600}
                height={1280}
                className="relative rounded-[2.5rem] shadow-2xl object-cover w-full aspect-[5/4]"
              />
            </div>
          </Animate>
        </div>

        {/* Wave divider */}
        <svg viewBox="0 0 1440 60" className="w-full -mb-1" preserveAspectRatio="none" aria-hidden>
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z" className="fill-cream" />
        </svg>

        {/* Stats */}
        <div className="bg-cream">
          <div className="mx-auto max-w-5xl px-6 pb-20 grid grid-cols-3 gap-4 text-center">
            <StatCard value="2×" label="gatherings per month" />
            <StatCard value="3" label="languages (EN · ES · CZ)" />
            <StatCard value="10–20" label="women per gathering" />
          </div>
        </div>
      </section>

      {/* Pain quotes */}
      <section className="bg-cream py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy text-center">
              You're surrounded by people.<br/>And still figuring it out alone.
            </h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-center text-foreground/70 max-w-2xl mx-auto">
              Whether you've been here your whole life or arrived last year, growing as a professional woman can feel isolating — especially when the people around you don't quite get what you're building.
            </p>
          </Animate>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {quotes.map((q, i) => (
              <Animate key={i} delay={(i % 2) * 100 as 100 | 200}>
                <blockquote className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 pl-10 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-l-2xl before:bg-gradient-to-b before:from-terracotta before:to-burgundy">
                  <p className="font-display text-xl text-foreground/90 italic leading-relaxed">"{q}"</p>
                </blockquote>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* What Kafe is */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">WHAT KAFE IS</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
              Not an event. A community.
            </h2>
          </Animate>
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <Animate key={p.title} delay={(i * 100) as 100 | 200 | 300}>
                <div className="text-center bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="text-5xl mb-4">{p.icon}</div>
                  <h3 className="font-display text-2xl text-burgundy">{p.title}</h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed">{p.text}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Is this for me */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">IS THIS FOR ME?</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
              You belong here if any of this sounds familiar.
            </h2>
          </Animate>
          <ul className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-5">
            {belong.map((b, i) => (
              <Animate key={b} delay={(i % 2 * 100) as 0 | 100}>
                <li className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-sage-foreground">✓</span>
                  <span className="text-foreground/85">{b}</span>
                </li>
              </Animate>
            ))}
          </ul>
          <Animate delay={200}>
            <p className="mt-14 text-center text-sm text-muted-foreground italic max-w-2xl mx-auto">
              We are not a Facebook group that never actually meets · not a room of strangers exchanging cards · not a place where you need a title, a business plan, or a polished story.
            </p>
          </Animate>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">FIND YOUR SEAT</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
              Three ways to be part of it
            </h2>
            <p className="mt-4 text-center text-muted-foreground">Start with one gathering, or step into the community. You decide the pace.</p>
          </Animate>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <Animate key={t.name} delay={(i * 100) as 0 | 100 | 200}>
                <div className={`relative rounded-3xl p-8 border hover:-translate-y-1 transition-all duration-300 ${t.featured ? "bg-burgundy text-primary-foreground border-burgundy shadow-2xl shadow-burgundy/25 md:-translate-y-4 hover:md:-translate-y-5" : "bg-white/50 backdrop-blur-sm border-white/30 hover:shadow-lg hover:bg-white/70"}`}>
                  <p className={`text-xs tracking-[0.2em] mb-2 ${t.featured ? "text-accent" : "text-terracotta"}`}>{t.tagline.toUpperCase()}</p>
                  <h3 className="font-display text-3xl">{t.name}</h3>
                  <div className="mt-6">
                    <span className="font-display text-4xl">{t.price}</span>
                    <span className={`ml-2 text-sm ${t.featured ? "opacity-70" : "text-muted-foreground"}`}>{t.per}</span>
                  </div>
                  <p className={`mt-6 leading-relaxed ${t.featured ? "opacity-90" : "text-foreground/75"}`}>{t.desc}</p>
                  <Link to="/memberships" className={`mt-8 inline-block w-full text-center px-6 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] ${t.featured ? "bg-accent text-accent-foreground" : "bg-foreground/5 hover:bg-foreground/10"}`}>
                    {t.cta} →
                  </Link>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">
              Your seat at the table is waiting.
            </h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/75">No pitch. No pressure.<br/>Just real women, real conversation, and really good coffee.</p>
          </Animate>
          <Animate delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/memberships" className="px-7 py-4 rounded-full bg-gradient-to-r from-sage to-sage/80 text-sage-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">Reserve my spot →</Link>
              <Link to="/memberships" className="px-7 py-4 rounded-full bg-gradient-to-r from-terracotta to-terracotta/80 text-terracotta-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">Explore memberships</Link>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify in browser**

Open `http://localhost:8080`. Check:
- Hero text staggers in on load
- Floating gradient blobs drift behind the hero image
- Wave divider between hero and stats
- Stats numbers count up when scrolled into view
- Cards have glass effect and hover lift
- Quote blocks have gradient left border
- Buttons have gradient bg and scale on hover/active
- All sections fade in on scroll

- [ ] **Step 4: Commit**

```bash
git add src/hooks/use-count-up.tsx src/routes/index.tsx
git commit -m "feat: modernize homepage — animations, glassmorphism, gradients, count-up stats"
```

---

### Task 5: About Page — Glass Cards, Animated FAQ, Scroll Animations

**Files:**
- Modify: `src/routes/about.tsx`

- [ ] **Step 1: Replace about page with modernized version**

Replace the entire `src/routes/about.tsx` with:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "What Kafe is — Kafe con Propósito" },
      { name: "description", content: "Not an event. A community of women in Central Bohemia meeting twice a month for real conversation." },
    ],
  }),
  component: About,
});

const faqs = [
  { q: "Do I need to speak perfect English or Czech?", a: "Not at all. We welcome every accent and language level. Most gatherings are in English, with Czech and Spanish sessions also on the calendar. Understanding matters — not perfection." },
  { q: "What if I'm introverted or shy?", a: "Most of us are. Groups are small (10–20 women) and no one is put on the spot before they're ready. You'll find your moment." },
  { q: "I'm not an entrepreneur or CEO. Do I fit in?", a: "We're not looking for resumes. We're looking for women who are curious, open, and doing the work of becoming. That's it." },
  { q: "How much does it cost?", a: "Regular sessions start at 450 CZK. Memberships (with guaranteed spots, discounts, and more) start at 850 CZK/month." },
  { q: "Where do you meet?", a: "We gather in Central Bohemia, Poděbrady and Prague — so there's always an option near you." },
];

const testimonials = [
  { name: "Valeria", text: "This is the community I've been searching for since moving here two years ago." },
  { name: "Adela", text: "Pleasant and supportive atmosphere despite the different ages of the participants and their different work backgrounds. The tasks brought interesting thoughts and reflections." },
  { name: "Irena", text: "I thought I had to choose between staying local and growing professionally. Kafe con Propósito showed me I could have both. I've gained perspectives I never would have found in my usual circles — plus real friendships with women who challenge and support me in equal measure." },
];

function About() {
  return (
    <div>
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">WHAT KAFE IS</p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">A women's circle, not a networking event.</h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-8 text-xl text-foreground/75 leading-relaxed">
              Kafe con Propósito is a consistent, trusted circle of women who show up — twice a month, in person, in Central Bohemia. Each gathering is themed, intentional, and built for real conversation, not transactions.
            </p>
          </Animate>
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <Animate>
            <h2 className="font-display text-4xl text-burgundy text-center">What women say</h2>
            <p className="text-center text-muted-foreground mt-2">Real words from real members</p>
          </Animate>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Animate key={t.name} delay={(i * 100) as 0 | 100 | 200}>
                <figure className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <blockquote className="font-display text-lg italic text-foreground/85 leading-relaxed">"{t.text}"</blockquote>
                  <figcaption className="mt-6 text-sm tracking-[0.2em] text-terracotta">— {t.name.toUpperCase()}</figcaption>
                </figure>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Animate>
            <h2 className="font-display text-4xl text-burgundy text-center">A few questions, answered</h2>
          </Animate>
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <Animate key={f.q} delay={(i * 100) as 0 | 100 | 200 | 300 | 400}>
                <details className="group bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 open:shadow-md transition-all duration-300 hover:bg-white/70">
                  <summary className="cursor-pointer font-display text-xl text-burgundy flex items-center justify-between">
                    {f.q}
                    <span className="text-terracotta group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-foreground/75 leading-relaxed">{f.a}</p>
                </details>
              </Animate>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser and commit**

```bash
git add src/routes/about.tsx
git commit -m "feat: modernize about page — glass cards, animated FAQ, scroll animations"
```

---

### Task 6: Founder Page — Parallax-lite, Staggered Text

**Files:**
- Modify: `src/routes/founder.tsx`

- [ ] **Step 1: Replace founder page with modernized version**

Replace the entire `src/routes/founder.tsx` with:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg";
import { Animate } from "@/components/Animate";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder — Kafe con Propósito" },
      { name: "description", content: "Meet Tamara Medina Sapovalova, founder of Kafe con Propósito." },
    ],
  }),
  component: Founder,
});

function Founder() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Animate>
          <div className="relative">
            <div className="absolute -inset-6 bg-sage/15 rounded-[3rem] rotate-2" aria-hidden />
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <img src={founder} alt="Tamara Medina Sapovalova" width={800} height={1000} className="shadow-2xl object-cover w-full hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </Animate>
        <div>
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">FROM TAMARA</p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">Why I built this</h1>
          </Animate>
          <Animate delay={200}>
            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>I built Kafe con Propósito because I needed it myself. Not just a networking event. Not an online group. A real community — one that meets you where you are and grows with you.</p>
              <p>I've spent over 20 years in international business across Latin America and Europe. I know what it feels like to be the only woman in the room, to relocate and start over, to build something without a map. Kafe is the room I wish had existed.</p>
            </div>
          </Animate>
          <Animate delay={300}>
            <p className="mt-8 font-display text-xl text-burgundy">— Tamara Medina Sapovalova, Founder</p>
          </Animate>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser and commit**

```bash
git add src/routes/founder.tsx
git commit -m "feat: modernize founder page — image hover zoom, staggered text entrance"
```

---

### Task 7: Memberships Page — Glass Cards, Glow Featured, Stagger

**Files:**
- Modify: `src/routes/memberships.tsx`

- [ ] **Step 1: Replace memberships page with modernized version**

Replace the entire `src/routes/memberships.tsx` with:

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";

export const Route = createFileRoute("/memberships")({
  head: () => ({
    meta: [
      { title: "Memberships — Kafe con Propósito" },
      { name: "description", content: "Three ways to join Kafe con Propósito: pay-as-you-go, monthly community, or premium Roastery." },
    ],
  }),
  component: Memberships,
});

const tiers = [
  {
    name: "The Espresso Shot",
    tag: "Pay as you go",
    price: "450 CZK",
    per: "per session",
    desc: "Try a gathering before you commit. The perfect entry point for first-timers.",
    perks: ["Single-session ticket", "Choose any open gathering", "No commitment"],
    featured: false,
  },
  {
    name: "The Brew Community",
    tag: "Most popular",
    price: "850 CZK",
    per: "per month",
    desc: "Two guaranteed spots, member discounts, and the directory.",
    perks: ["2 guaranteed gatherings/month", "Member directory access", "Discounts on workshops", "WhatsApp circle"],
    featured: true,
  },
  {
    name: "The Roastery",
    tag: "Premium",
    price: "1,950 CZK",
    per: "per month",
    desc: "Everything in Brew, plus deeper experiences and visibility.",
    perks: ["Everything in Brew", "Monthly Mastermind", "VIP guest pass", "Business spotlight"],
    featured: false,
  },
];

function Memberships() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">FIND YOUR SEAT</p>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">Three ways to be part of it</h1>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-foreground/75">Start with one gathering, or step into the community. You decide the pace.</p>
          </Animate>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Animate key={t.name} delay={(i * 100) as 0 | 100 | 200}>
              <div className={`relative rounded-3xl p-8 border flex flex-col hover:-translate-y-1 transition-all duration-300 ${t.featured ? "bg-burgundy text-primary-foreground border-burgundy shadow-2xl shadow-burgundy/25 md:-translate-y-4 hover:md:-translate-y-5" : "bg-white/50 backdrop-blur-sm border-white/30 hover:shadow-lg hover:bg-white/70"}`}>
                <p className={`text-xs tracking-[0.2em] mb-2 ${t.featured ? "text-accent" : "text-terracotta"}`}>{t.tag.toUpperCase()}</p>
                <h3 className="font-display text-3xl">{t.name}</h3>
                <div className="mt-6">
                  <span className="font-display text-5xl">{t.price}</span>
                  <span className={`ml-2 text-sm ${t.featured ? "opacity-70" : "text-muted-foreground"}`}>{t.per}</span>
                </div>
                <p className={`mt-6 ${t.featured ? "opacity-90" : "text-foreground/75"}`}>{t.desc}</p>
                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className={`mt-0.5 ${t.featured ? "text-accent" : "text-sage"}`}>✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 inline-block w-full text-center px-6 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] ${t.featured ? "bg-accent text-accent-foreground" : "bg-foreground/5 hover:bg-foreground/10"}`}>
                  Choose this →
                </Link>
              </div>
            </Animate>
          ))}
        </div>

        <Animate>
          <div className="mt-20 bg-white/50 backdrop-blur-sm rounded-3xl p-10 md:p-14 text-center border border-white/30 shadow-sm">
            <p className="text-xs tracking-[0.25em] text-terracotta">COMING MAY 2026</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">One cup. One woman. One story.</h2>
            <p className="mt-6 max-w-2xl mx-auto text-foreground/75">
              Once a month, one woman opens the evening with her story — unfiltered, purposeful, real. Because the most powerful thing one woman can do for another is show her what's possible.
            </p>
            <Link to="/contact" className="mt-8 inline-block px-7 py-4 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
              Be the first to know →
            </Link>
          </div>
        </Animate>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser and commit**

```bash
git add src/routes/memberships.tsx
git commit -m "feat: modernize memberships page — glass cards, gradient heading, glow featured"
```

---

### Task 8: Community Page — Glass Cards, Image Hover, Stagger

**Files:**
- Modify: `src/routes/community.tsx`

- [ ] **Step 1: Replace community page with modernized version**

Replace the entire `src/routes/community.tsx` with:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import featuredImg from "@/assets/featured-pastry.jpg";
import adelaImg from "@/assets/member-adela.jpg";
import zuzanaImg from "@/assets/member-zuzana.jpg";
import tamaraImg from "@/assets/member-tamara.jpg";
import ivetaImg from "@/assets/member-iveta.jpg";
import viktoriaImg from "@/assets/member-viktoria.jpg";
import { Animate } from "@/components/Animate";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community & Partners — Kafe con Propósito" },
      { name: "description", content: "Meet the women, mentors, and partner brands shaping the Kafe con Propósito community." },
      { property: "og:title", content: "Community & Partners — Kafe con Propósito" },
      { property: "og:description", content: "Meet the women, mentors, and partner brands shaping the Kafe con Propósito community." },
    ],
  }),
  component: CommunityPage,
});

type Member = {
  name: string;
  langs: string;
  role: string;
  bio: string;
  url: string;
  urlLabel: string;
  image?: string;
};

const members: Member[] = [
  {
    name: "Adela Fialová",
    langs: "CZ · EN",
    role: "Photographer",
    bio: "Photography is not just a job for me, it's a way of life. Each image is a challenge to combine technical precision with artistic sensibility — a way of sharing stories, emotions, and journeys with the world.",
    url: "https://www.adelafialova.com/",
    urlLabel: "adelafialova.com",
    image: adelaImg,
  },
  {
    name: "Zuzana Koláčková",
    langs: "CZ",
    role: "Business mentor & strategist · Podnikatelky SOBĚ",
    bio: "Vedu ženy k tomu, aby přestaly business jen 'zkoušet' a naučily se ho řídit s jistotou a vědomím. Propojuji vnitřní nastavení s pevnou business strategií — pro stabilní projekty v souladu se životním stylem.",
    url: "https://www.podnikatelkysobe.cz/",
    urlLabel: "podnikatelkysobe.cz",
    image: zuzanaImg,
  },
  {
    name: "Tamara Medina",
    langs: "ES · EN · CZ",
    role: "Business Coach & Network Builder",
    bio: "I've always been the person who connects people, who spots the opportunity before anyone else names it. What drives me is the belief that the most powerful thing one woman can do for another is show her she's not alone in it.",
    url: "https://www.kafeconproposito.com/",
    urlLabel: "kafeconproposito.com",
    image: tamaraImg,
  },
  {
    name: "Iveta Skřivanová",
    langs: "CZ",
    role: "Průvodkyně návratem k sobě skrze vnímání",
    bio: "Vytvářím prostor pro zastavení a vnímání toho, co se ve vás skutečně děje. Skrze naslouchání a prožitek pomáhám lidem vracet se k pravdivosti, klidu a vlastnímu středu.",
    url: "https://ivetaskrivanova.cz/",
    urlLabel: "ivetaskrivanova.cz",
    image: ivetaImg,
  },
  {
    name: "Viktoria Platonova",
    langs: "CZ · EN · RU",
    role: "Wellness Coach & Yoga Teacher · MaMeetUs Founder",
    bio: "I work with women at the intersection of movement, breath, and mind — believing that connection, to others and to ourselves, is the first step back to who we truly are.",
    url: "https://www.mameetus.cz/",
    urlLabel: "mameetus.cz",
    image: viktoriaImg,
  },
];

const featured = {
  title: "Foťte mobilem jako profesionál",
  flag: "🇨🇿",
  bullets: [
    "Chcete zachytit své životní okamžiky jako profesionální fotograf?",
    "Vyžaduje váš business neustálé přispívání na sociálních sítí?",
    "Rádi byste si z výletů odvezli reprezentativní galerii fotografií?",
    "Chcete dostat maximum z vašeho mobilního telefonu — bez drahé techniky?",
  ],
  url: "https://www.kurzfocenimobilem.cz/",
};

const collaborators = [
  { name: "Podnikatelky SOBĚ", url: "https://www.podnikatelkysobe.cz/" },
  { name: "Adela Fialová", url: "https://www.adelafialova.com/" },
  { name: "Harrington Verve", url: "https://harringtonverve.com/" },
  { name: "MaMeetUs", url: "https://www.mameetus.cz/" },
  { name: "Iveta Skřivanová", url: "https://ivetaskrivanova.cz/" },
  { name: "Sapovalova Solutions", url: "#" },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}

function CommunityPage() {
  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium">COMMUNITY & PARTNERS</p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.05]">
              The women — and the brands — behind the table.
            </h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Mentors, makers, and collaborators we trust. These are the people building alongside us — and the partner picks we recommend to our community.
            </p>
          </Animate>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">FEATURED PARTNER PICK</p>
            <div className="mt-4 grid md:grid-cols-2 gap-10 items-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30 shadow-sm hover:shadow-lg transition-all duration-300">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-burgundy">
                  {featured.title} <span className="ml-1">{featured.flag}</span>
                </h2>
                <ul className="mt-6 space-y-3">
                  {featured.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-foreground/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block px-7 py-3 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Learn more →
                </a>
              </div>
              <img
                src={featuredImg}
                alt="Foťte mobilem jako profesionál"
                width={756}
                height={566}
                className="rounded-2xl object-cover w-full aspect-[5/4] shadow-md"
              />
            </div>
          </Animate>
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">COMMUNITY VOICES</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
              Meet the circle
            </h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {members.map((m, i) => (
              <Animate key={m.name} delay={(i % 2 * 100) as 0 | 100}>
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm flex gap-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="shrink-0 overflow-hidden rounded-2xl">
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        width={144}
                        height={144}
                        className="h-28 w-28 md:h-36 md:w-36 rounded-2xl object-cover hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="h-28 w-28 md:h-36 md:w-36 rounded-2xl bg-burgundy text-primary-foreground flex items-center justify-center font-display text-3xl">
                        {initials(m.name)}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl text-burgundy">{m.name}</h3>
                    <p className="mt-1 text-xs tracking-[0.18em] text-terracotta">{m.langs}</p>
                    <p className="mt-1 text-sm text-foreground/70">{m.role}</p>
                    <p className="mt-4 text-foreground/80 leading-relaxed italic">"{m.bio}"</p>
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm text-burgundy hover:text-terracotta transition-colors underline underline-offset-4"
                    >
                      {m.urlLabel} →
                    </a>
                  </div>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">COLLABORATORS</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">
              Brands & partners we build with
            </h2>
          </Animate>
          <Animate delay={100}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {collaborators.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-white/30 bg-white/50 backdrop-blur-sm text-foreground/80 hover:text-burgundy hover:border-burgundy hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  {c.name}
                </a>
              ))}
            </div>
          </Animate>
          <Animate delay={200}>
            <p className="mt-12 text-sm text-muted-foreground italic">
              Want to collaborate or be featured? Reach out — we love meeting women building work that matters.
            </p>
          </Animate>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify in browser and commit**

```bash
git add src/routes/community.tsx
git commit -m "feat: modernize community page — glass cards, image hover zoom, stagger"
```

---

### Task 9: Contact Page — Glass Form, Staggered Fields

**Files:**
- Modify: `src/routes/contact.tsx`

- [ ] **Step 1: Replace contact page with modernized version**

Replace the entire `src/routes/contact.tsx` with:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Animate } from "@/components/Animate";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kafe con Propósito" },
      { name: "description", content: "Reach out to Kafe con Propósito to reserve a seat or ask a question." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Animate>
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">CONTACT US</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent text-center">Say hello.</h1>
        </Animate>
        <Animate delay={100}>
          <p className="mt-6 text-center text-foreground/75 max-w-xl mx-auto">
            Question, collaboration, or ready to reserve your seat? Drop us a line and we'll get back to you with the next gathering details.
          </p>
        </Animate>

        <Animate delay={200}>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-12 bg-white/50 backdrop-blur-sm border border-white/30 rounded-3xl p-8 space-y-5 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-sm text-foreground/75">Name</span>
                <input required className="mt-2 w-full rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm px-4 py-3 outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
              </label>
              <label className="block">
                <span className="text-sm text-foreground/75">Email</span>
                <input required type="email" className="mt-2 w-full rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm px-4 py-3 outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-foreground/75">Message</span>
              <textarea required rows={5} className="mt-2 w-full rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm px-4 py-3 outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
            </label>
            <button type="submit" className="w-full md:w-auto px-7 py-4 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
              Send message →
            </button>
            {sent && <p className="text-sage text-sm animate-in visible" style={{ transform: "none" }}>Thanks — we'll be in touch soon.</p>}
          </form>
        </Animate>

        <Animate delay={300}>
          <div className="mt-12 text-center text-sm text-muted-foreground">
            Or follow us on{" "}
            <a className="text-terracotta hover:underline" href="https://www.instagram.com/kafeconproposito/">Instagram</a>,{" "}
            <a className="text-terracotta hover:underline" href="https://www.facebook.com/groups/kafeconproposito">Facebook</a>,{" "}
            <a className="text-terracotta hover:underline" href="https://www.linkedin.com/company/kafe-con-prop%C3%B3sito">LinkedIn</a>.
          </div>
        </Animate>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser and commit**

```bash
git add src/routes/contact.tsx
git commit -m "feat: modernize contact page — glass form, gradient heading, stagger"
```

---

### Task 10: Česky Page — Full Treatment (Mirrors Homepage)

**Files:**
- Modify: `src/routes/cesky.tsx`

- [ ] **Step 1: Replace česky page with modernized version**

Replace the entire `src/routes/cesky.tsx` with:

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-gathering.jpg";
import { Animate } from "@/components/Animate";
import { useCountUp } from "@/hooks/use-count-up";

export const Route = createFileRoute("/cesky")({
  head: () => ({
    meta: [
      { title: "Kafe con Propósito — Česky" },
      { name: "description", content: "Káva s posláním. Prostor pro smysluplná setkávání mezi ženami v Poděbradech a okolí." },
      { property: "og:title", content: "Kafe con Propósito — Česky" },
      { property: "og:description", content: "Káva s posláním. Prostor pro smysluplná setkávání mezi ženami v Poděbradech a okolí." },
    ],
  }),
  component: CeskyPage,
});

const pillars = [
  { title: "Sdílení zkušeností", text: "Učte se z úspěchů i výzev ostatních žen." },
  { title: "Komunita", text: "Navažte vztahy, které jdou nad rámec pouhé výměny vizitek." },
  { title: "Osobní růst", text: "Získejte nové perspektivy pro svůj život, kariéru nebo podnikání." },
];

const stats: [string, string][] = [
  ["2×", "Měsíční setkávání"],
  ["3", "Jazyky: CZ · EN · ES"],
  ["8–10", "Účastnic na setkání"],
];

const steps = [
  { n: "01", title: "Registrace", text: "Vyberte si termín a téma, které s vámi nejvíce rezonuje." },
  { n: "02", title: "Setkání", text: "Připojte se k malé, bezpečné skupině podobně smýšlejících žen." },
  { n: "03", title: "Inspirace a akce", text: "Odneste si konkrétní poznatky a spojení, která můžete ihned využít." },
];

const forWhom = [
  "Pro ženy profesionálky, které hledají inspiraci.",
  "Pro lídryně, které chtějí rozvíjet svůj vliv.",
  "Pro každou ženu, která věří, že lidské spojení je klíčem k úspěchu.",
];

const testimonials = [
  { name: "Valeria", text: "Tohle je přesně ta komunita, kterou jsem hledala od té doby, co jsem se sem před dvěma lety přistěhovala." },
  { name: "Adela", text: "Zúčastnila jsem se prvního setkání a panovala tam velmi příjemná a podporující atmosféra. Jako freelancerka jsem moc ráda, že mohu být součástí takové skupiny." },
  { name: "Irena", text: "Myslela jsem si, že si musím vybrat mezi tím, abych zůstala tam, kde žiji, a tím, abych profesně rostla. Kafe con Propósito mi ukázalo, že můžu mít obojí." },
];

function StatCard({ value, label }: { value: string; label: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <div ref={ref} className="bg-white/50 backdrop-blur-sm rounded-3xl py-8 px-4 shadow-sm border border-white/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="font-display text-5xl text-terracotta">{display}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function CeskyPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-sage/10 rounded-full blur-3xl" style={{ animation: "float 6s ease-in-out infinite" }} aria-hidden />

        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <Animate>
              <p className="text-xs tracking-[0.25em] text-terracotta font-medium mb-6">PODĚBRADY · STŘEDNÍ ČECHY</p>
            </Animate>
            <Animate delay={100}>
              <h1 className="font-display text-5xl md:text-7xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.05]">
                Kafe con Propósito
              </h1>
              <p className="mt-6 font-display text-2xl text-terracotta italic">
                Káva s posláním
              </p>
            </Animate>
            <Animate delay={200}>
              <p className="mt-6 text-xl text-foreground/80 max-w-xl leading-relaxed">
                Proměňte svůj čas na kávu v prostor pro růst, propojení a inspiraci. Místo pro sdílení a skutečné spojení mezi ženami — u šálku dobré kávy.
              </p>
            </Animate>
            <Animate delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="px-7 py-4 rounded-full bg-gradient-to-r from-sage to-sage/80 text-sage-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-sage/20">
                  Zajistit si místo →
                </Link>
                <Link to="/memberships" className="px-7 py-4 rounded-full bg-gradient-to-r from-terracotta to-terracotta/80 text-terracotta-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-terracotta/20">
                  Nabídka členství
                </Link>
              </div>
            </Animate>
          </div>
          <Animate delay={200}>
            <div className="relative">
              <div className="absolute -inset-6 bg-sage/15 rounded-[3rem] rotate-2" aria-hidden />
              <img src={hero} alt="Ženy u stolu s kávou" width={1600} height={1280} className="relative rounded-[2.5rem] shadow-2xl object-cover w-full aspect-[5/4]" />
            </div>
          </Animate>
        </div>

        <div className="mx-auto max-w-5xl px-6 -mt-6 mb-20 grid grid-cols-3 gap-4 text-center">
          {stats.map(([n, l]) => <StatCard key={l} value={n} label={l} />)}
        </div>
      </section>

      <section className="bg-cream py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">NA ČEM STOJÍ KAFE CON PROPÓSITO</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">Tři pilíře naší komunity</h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <Animate key={p.title} delay={(i * 100) as 0 | 100 | 200}>
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-display text-2xl text-burgundy">{p.title}</h3>
                  <p className="mt-3 text-foreground/75 leading-relaxed">{p.text}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">PROČ TO VLASTNĚ DĚLÁME?</p>
            <blockquote className="mt-8 font-display text-2xl md:text-3xl text-burgundy leading-relaxed italic">
              "Věříme, že když se ženy navzájem podporují, dějí se velké věci. Naším cílem je vybudovat prostor, kde se každá z nás může cítit slyšena a inspirována."
            </blockquote>
            <p className="mt-6 text-terracotta font-medium">— Iveta &amp; Tamara</p>
          </Animate>
        </div>
      </section>

      <section className="py-28 bg-burgundy/95 backdrop-blur-xl text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <Animate>
            <div className="text-center">
              <span className="text-5xl">☕️</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Jeden šálek, jeden příběh</h2>
              <p className="mt-6 opacity-90 leading-relaxed">
                Součástí každého druhého setkání je naše speciální storytellingová série. Prostor vyhrazený pro jednu ženu, která během dvaceti minut sdílí svůj příběh — autenticky, otevřeně a bez přetvářky. Nahlédnete do cesty, která často zůstává skrytá za profesními úspěchy.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">JAK TO PROBÍHÁ</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">Tři kroky k vašemu místu u stolu</h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <Animate key={s.n} delay={(i * 100) as 0 | 100 | 200}>
                <div className="rounded-2xl p-8 bg-white/50 backdrop-blur-sm border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="font-display text-5xl text-terracotta">{s.n}</div>
                  <h3 className="mt-4 font-display text-2xl text-burgundy">{s.title}</h3>
                  <p className="mt-3 text-foreground/75 leading-relaxed">{s.text}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">PRO KOHO JE PROGRAM URČEN</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">Patříte sem, pokud…</h2>
          </Animate>
          <ul className="mt-12 space-y-4">
            {forWhom.map((w, i) => (
              <Animate key={w} delay={(i * 100) as 0 | 100 | 200}>
                <li className="flex items-start gap-4 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-sage-foreground">✓</span>
                  <span className="text-foreground/85 text-lg">{w}</span>
                </li>
              </Animate>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">NAŠE KOMUNITA</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">Co o nás říkají ženy</h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Animate key={t.name} delay={(i * 100) as 0 | 100 | 200}>
                <blockquote className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 pl-10 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-l-2xl before:bg-gradient-to-b before:from-terracotta before:to-burgundy">
                  <p className="font-display text-lg text-foreground/90 italic leading-relaxed">"{t.text}"</p>
                  <footer className="mt-6 text-burgundy font-medium">— {t.name}</footer>
                </blockquote>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">
              Každý šálek kávy je příležitostí k novému začátku.
            </h2>
          </Animate>
          <Animate delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-7 py-4 rounded-full bg-gradient-to-r from-sage to-sage/80 text-sage-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
                Zajistit si místo →
              </Link>
              <Link to="/memberships" className="px-7 py-4 rounded-full bg-gradient-to-r from-terracotta to-terracotta/80 text-terracotta-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
                Nabídka členství
              </Link>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify in browser and commit**

```bash
git add src/routes/cesky.tsx
git commit -m "feat: modernize česky page — full Modern Warmth treatment"
```

---

### Task 11: Business Building Blocks Page — Stagger Curriculum, Glass Cards

**Files:**
- Modify: `src/routes/business-building-blocks.tsx`

- [ ] **Step 1: Replace BBB page with modernized version**

Replace the entire `src/routes/business-building-blocks.tsx` with:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";

export const Route = createFileRoute("/business-building-blocks")({
  head: () => ({
    meta: [
      { title: "Business Building Blocks — Kafe con Propósito" },
      { name: "description", content: "A 2-month program that takes you from 'I have an idea' to 'I have a real, working business.' Live workshops, practical tools, real momentum." },
      { property: "og:title", content: "Business Building Blocks — Kafe con Propósito" },
      { property: "og:description", content: "A 2-month program that takes you from 'I have an idea' to 'I have a real, working business.'" },
    ],
  }),
  component: BBBPage,
});

const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfyznpioX_NhJkbB6flkurwdeHe6q3fMJ90EMg7s_dcZp725Q/viewform?usp=header";
const WORKSHOPS_URL = "https://www.kafeconproposito.com/bbbworkshopsdescriptions";

const outcomes = [
  { title: "Someone who actually gets it", body: "Forget cookie-cutter advice. You'll develop your own leadership style and create a plan that fits your life, your values, and your goals." },
  { title: "Confidence to avoid expensive mistakes", body: "Learn from people who've been there. Get the insider knowledge that helps you sidestep the costly errors most new business owners make." },
  { title: "A business that can actually grow", body: "Stop building something that only works if you're doing everything yourself. Create systems and structures that let your business expand without burning you out." },
  { title: "People who get what you're going through", body: "Connect with others on the same journey — people to celebrate wins with, brainstorm solutions with, and lean on when things get tough." },
];

const differentiators = [
  { title: "You'll learn what actually matters", body: "From finding the right partners to understanding your finances, from building your business model to becoming the leader your company needs. No critical gaps." },
  { title: "It fits into your real life", body: "Each 1.5–2 hour workshop tackles one specific challenge. Not drinking from a fire hose — learning something practical, then using it before the next session." },
  { title: "You learn by doing", body: "Spread across 2 months, giving you time to apply what you're learning. Each week builds on the last, creating real momentum in your business." },
];

const curriculum = [
  "Getting Your Mind Right — the foundation every successful entrepreneur needs",
  "Making Decisions That Move You Forward — clear goals, clear action",
  "Building Something That Lasts — strong foundations from day one",
  "Understanding Your Market — who needs what you offer, and how to reach them",
  "Turning Conversations Into Sales — real negotiation skills that feel authentic",
  "Smart Growth — using connections, technology, and AI tools to scale efficiently",
];

function BBBPage() {
  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium">PROGRAMME</p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.05]">
              Business Building Blocks
            </h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-xl text-foreground/75 leading-relaxed">
              Turn your business idea into reality. A 2-month programme that takes you from
              <span className="italic"> "I have an idea" </span> to
              <span className="italic"> "I have a real, working business." </span>
              Live workshops and learn-at-your-own-pace sessions — no fluff, no theory that doesn't work in real life.
            </p>
          </Animate>
          <Animate delay={300}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
                Register your interest →
              </a>
              <a href={WORKSHOPS_URL} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full border border-burgundy text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-all">
                Workshop details
              </a>
            </div>
          </Animate>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">WHAT YOU'LL WALK AWAY WITH</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">More than a course — a turning point</h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {outcomes.map((o, i) => (
              <Animate key={o.title} delay={(i % 2 * 100) as 0 | 100}>
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-display text-2xl text-burgundy">{o.title}</h3>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{o.body}</p>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">WHY THIS PROGRAMME IS DIFFERENT</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">Built for the way real businesses grow</h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <Animate key={d.title} delay={(i * 100) as 0 | 100 | 200}>
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-display text-xl text-burgundy">{d.title}</h3>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{d.body}</p>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">HERE'S WHAT WE'LL COVER</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">Six building blocks</h2>
          </Animate>
          <ol className="mt-12 space-y-4">
            {curriculum.map((c, i) => (
              <Animate key={c} delay={(i * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
                <li className="flex gap-5 items-start bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <span className="shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-burgundy to-terracotta text-primary-foreground flex items-center justify-center font-display text-lg">
                    {i + 1}
                  </span>
                  <p className="text-foreground/85 leading-relaxed pt-1.5">{c}</p>
                </li>
              </Animate>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-28 bg-burgundy/95 backdrop-blur-xl text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl">Register your interest today</h2>
            <p className="mt-4 text-primary-foreground/85 italic">Limited spaces.</p>
          </Animate>
          <Animate delay={100}>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block px-8 py-3 rounded-full bg-background text-burgundy hover:scale-[1.02] active:scale-[0.98] transition-all">
              Start now →
            </a>
          </Animate>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify in browser and commit**

```bash
git add src/routes/business-building-blocks.tsx
git commit -m "feat: modernize BBB page — glass cards, gradient numbers, stagger curriculum"
```

---

### Task 12: Final Verification — Full Site Walkthrough

- [ ] **Step 1: Build check**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds with no errors.

- [ ] **Step 2: Visual walkthrough**

Open `http://localhost:8080` and navigate every page. Check:
- [ ] Homepage: hero stagger, floating blobs, wave divider, count-up stats, glass cards, gradient headings, gradient quote borders, button hover scale
- [ ] About: glass testimonials, animated FAQ open/close, stagger entrance
- [ ] Founder: image hover zoom, staggered text
- [ ] Memberships: glass cards, featured glow, gradient CTA heading
- [ ] Community: glass member cards, image hover zoom, partner pills hover
- [ ] Contact: glass form, gradient heading, stagger entrance
- [ ] Česky: full treatment matching homepage
- [ ] BBB: gradient numbered circles, stagger curriculum, glass outcome cards
- [ ] Header: glassmorphism, scroll shrink, mobile drawer, active underline
- [ ] Footer: 4-column, SVG social icons, logo, glassmorphism dark
- [ ] Reduced motion: test with browser DevTools → Rendering → Emulate prefers-reduced-motion

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final verification — Modern Warmth redesign complete"
```
