import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-gathering.jpg";

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

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium mb-6">
              CENTRAL BOHEMIA · EN · ES · CZ
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-burgundy leading-[1.05]">
              A community for women who are building something that matters.
            </h1>
            <p className="mt-8 text-lg text-foreground/80 max-w-xl leading-relaxed">
              <span className="font-medium text-burgundy">Kafe con Propósito</span> brings professional women, entrepreneurs, and expats together — twice a month, in person, over really good coffee. Real conversations. Genuine connection. No pitches, no pressure.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/memberships" className="px-7 py-4 rounded-full bg-sage text-sage-foreground hover:opacity-90 transition shadow-lg shadow-sage/20">
                Reserve my spot →
              </Link>
              <Link to="/memberships" className="px-7 py-4 rounded-full bg-terracotta text-terracotta-foreground hover:opacity-90 transition shadow-lg shadow-terracotta/20">
                Explore memberships
              </Link>
            </div>
            <p className="mt-10 text-sm text-muted-foreground">
              Gatherings in English, Czech & Spanish · Central Bohemia & Prague · Twice a month
            </p>
          </div>
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
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-5xl px-6 -mt-6 mb-20 grid grid-cols-3 gap-4 text-center">
          {[["2×","gatherings per month"],["3","languages (EN · ES · CZ)"],["10–20","women per gathering"]].map(([n,l]) => (
            <div key={l} className="bg-card rounded-3xl py-8 px-4 shadow-sm border border-border/50">
              <div className="font-display text-5xl text-terracotta">{n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pain quotes */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-4xl md:text-5xl text-burgundy text-center">
            You're surrounded by people.<br/>And still figuring it out alone.
          </h2>
          <p className="mt-6 text-center text-foreground/70 max-w-2xl mx-auto">
            Whether you've been here your whole life or arrived last year, growing as a professional woman can feel isolating — especially when the people around you don't quite get what you're building.
          </p>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {quotes.map((q, i) => (
              <blockquote key={i} className="bg-background rounded-2xl p-8 border-l-4 border-terracotta shadow-sm">
                <p className="font-display text-xl text-foreground/90 italic leading-relaxed">"{q}"</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* What Kafe is */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">WHAT KAFE IS</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
            Not an event. A community.
          </h2>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="text-center">
                <div className="text-5xl mb-4">{p.icon}</div>
                <h3 className="font-display text-2xl text-burgundy">{p.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is this for me */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">IS THIS FOR ME?</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
            You belong here if any of this sounds familiar.
          </h2>
          <ul className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-5">
            {belong.map((b) => (
              <li key={b} className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-sage-foreground">✓</span>
                <span className="text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-14 text-center text-sm text-muted-foreground italic max-w-2xl mx-auto">
            We are not a Facebook group that never actually meets · not a room of strangers exchanging cards · not a place where you need a title, a business plan, or a polished story.
          </p>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">FIND YOUR SEAT</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
            Three ways to be part of it
          </h2>
          <p className="mt-4 text-center text-muted-foreground">Start with one gathering, or step into the community. You decide the pace.</p>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className={`relative rounded-3xl p-8 border ${t.featured ? "bg-burgundy text-primary-foreground border-burgundy shadow-2xl shadow-burgundy/30 md:-translate-y-4" : "bg-card border-border"}`}>
                <p className={`text-xs tracking-[0.2em] mb-2 ${t.featured ? "text-accent" : "text-terracotta"}`}>{t.tagline.toUpperCase()}</p>
                <h3 className="font-display text-3xl">{t.name}</h3>
                <div className="mt-6">
                  <span className="font-display text-4xl">{t.price}</span>
                  <span className={`ml-2 text-sm ${t.featured ? "opacity-70" : "text-muted-foreground"}`}>{t.per}</span>
                </div>
                <p className={`mt-6 leading-relaxed ${t.featured ? "opacity-90" : "text-foreground/75"}`}>{t.desc}</p>
                <Link to="/memberships" className={`mt-8 inline-block w-full text-center px-6 py-3 rounded-full transition ${t.featured ? "bg-accent text-accent-foreground hover:opacity-90" : "bg-foreground/5 hover:bg-foreground/10"}`}>
                  {t.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl text-burgundy">
            Your seat at the table is waiting.
          </h2>
          <p className="mt-6 text-lg text-foreground/75">No pitch. No pressure.<br/>Just real women, real conversation, and really good coffee.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/memberships" className="px-7 py-4 rounded-full bg-sage text-sage-foreground hover:opacity-90 transition">Reserve my spot →</Link>
            <Link to="/memberships" className="px-7 py-4 rounded-full bg-terracotta text-terracotta-foreground hover:opacity-90 transition">Explore memberships</Link>
          </div>
        </div>
      </section>
    </>
  );
}
