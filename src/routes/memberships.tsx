import { createFileRoute, Link } from "@tanstack/react-router";

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
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] text-terracotta">FIND YOUR SEAT</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-burgundy">Three ways to be part of it</h1>
          <p className="mt-6 text-foreground/75">Start with one gathering, or step into the community. You decide the pace.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-3xl p-8 border flex flex-col ${t.featured ? "bg-burgundy text-primary-foreground border-burgundy shadow-2xl shadow-burgundy/30 md:-translate-y-4" : "bg-card border-border"}`}>
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
              <Link to="/contact" className={`mt-8 inline-block w-full text-center px-6 py-3 rounded-full transition ${t.featured ? "bg-accent text-accent-foreground hover:opacity-90" : "bg-foreground/5 hover:bg-foreground/10"}`}>
                Choose this →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-cream rounded-3xl p-10 md:p-14 text-center">
          <p className="text-xs tracking-[0.25em] text-terracotta">COMING MAY 2026</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">One cup. One woman. One story.</h2>
          <p className="mt-6 max-w-2xl mx-auto text-foreground/75">
            Once a month, one woman opens the evening with her story — unfiltered, purposeful, real. Because the most powerful thing one woman can do for another is show her what's possible.
          </p>
          <Link to="/contact" className="mt-8 inline-block px-7 py-4 rounded-full bg-burgundy text-primary-foreground hover:opacity-90 transition">
            Be the first to know →
          </Link>
        </div>
      </div>
    </section>
  );
}
