import { createFileRoute } from "@tanstack/react-router";

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
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs tracking-[0.25em] text-terracotta">WHAT KAFE IS</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-burgundy">A women's circle, not a networking event.</h1>
          <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
            Kafe con Propósito is a consistent, trusted circle of women who show up — twice a month, in person, in Central Bohemia. Each gathering is themed, intentional, and built for real conversation, not transactions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-4xl text-burgundy text-center">What women say</h2>
          <p className="text-center text-muted-foreground mt-2">Real words from real members</p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-card rounded-3xl p-8 shadow-sm border border-border/50">
                <blockquote className="font-display text-lg italic text-foreground/85 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 text-sm tracking-[0.2em] text-terracotta">— {t.name.toUpperCase()}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-4xl text-burgundy text-center">A few questions, answered</h2>
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-card rounded-2xl p-6 border border-border/50 open:shadow-md transition">
                <summary className="cursor-pointer font-display text-xl text-burgundy flex items-center justify-between">
                  {f.q}
                  <span className="text-terracotta group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="mt-4 text-foreground/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
