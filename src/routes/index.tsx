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
