import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/business-building-blocks")({
  head: () => ({
    meta: [
      { title: "Business Building Blocks — Kafe con Propósito" },
      {
        name: "description",
        content:
          "A 2-month program that takes you from 'I have an idea' to 'I have a real, working business.' Live workshops, practical tools, real momentum.",
      },
      { property: "og:title", content: "Business Building Blocks — Kafe con Propósito" },
      {
        property: "og:description",
        content:
          "A 2-month program that takes you from 'I have an idea' to 'I have a real, working business.'",
      },
    ],
  }),
  component: BBBPage,
});

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfyznpioX_NhJkbB6flkurwdeHe6q3fMJ90EMg7s_dcZp725Q/viewform?usp=header";
const WORKSHOPS_URL = "https://www.kafeconproposito.com/bbbworkshopsdescriptions";

const outcomes = [
  {
    title: "Someone who actually gets it",
    body:
      "Forget cookie-cutter advice. You'll develop your own leadership style and create a plan that fits your life, your values, and your goals.",
  },
  {
    title: "Confidence to avoid expensive mistakes",
    body:
      "Learn from people who've been there. Get the insider knowledge that helps you sidestep the costly errors most new business owners make.",
  },
  {
    title: "A business that can actually grow",
    body:
      "Stop building something that only works if you're doing everything yourself. Create systems and structures that let your business expand without burning you out.",
  },
  {
    title: "People who get what you're going through",
    body:
      "Connect with others on the same journey — people to celebrate wins with, brainstorm solutions with, and lean on when things get tough.",
  },
];

const differentiators = [
  {
    title: "You'll learn what actually matters",
    body:
      "From finding the right partners to understanding your finances, from building your business model to becoming the leader your company needs. No critical gaps.",
  },
  {
    title: "It fits into your real life",
    body:
      "Each 1.5–2 hour workshop tackles one specific challenge. Not drinking from a fire hose — learning something practical, then using it before the next session.",
  },
  {
    title: "You learn by doing",
    body:
      "Spread across 2 months, giving you time to apply what you're learning. Each week builds on the last, creating real momentum in your business.",
  },
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
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs tracking-[0.25em] text-terracotta font-medium">PROGRAMME</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-burgundy leading-[1.05]">
            Business Building Blocks
          </h1>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Turn your business idea into reality. A 2-month programme that takes you from
            <span className="italic"> "I have an idea" </span> to
            <span className="italic"> "I have a real, working business." </span>
            Live workshops and learn-at-your-own-pace sessions — no fluff, no theory that
            doesn't work in real life.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-burgundy text-primary-foreground hover:opacity-90 transition"
            >
              Register your interest →
            </a>
            <a
              href={WORKSHOPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-burgundy text-burgundy hover:bg-burgundy hover:text-primary-foreground transition"
            >
              Workshop details
            </a>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">WHAT YOU'LL WALK AWAY WITH</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
            More than a course — a turning point
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {outcomes.map((o) => (
              <article
                key={o.title}
                className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm"
              >
                <h3 className="font-display text-2xl text-burgundy">{o.title}</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed">{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why different */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">WHY THIS PROGRAMME IS DIFFERENT</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
            Built for the way real businesses grow
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <article
                key={d.title}
                className="bg-background rounded-3xl p-8 border border-border/50 shadow-sm"
              >
                <h3 className="font-display text-xl text-burgundy">{d.title}</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed">{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">HERE'S WHAT WE'LL COVER</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
            Six building blocks
          </h2>
          <ol className="mt-12 space-y-4">
            {curriculum.map((c, i) => (
              <li
                key={c}
                className="flex gap-5 items-start bg-card rounded-2xl p-6 border border-border/50"
              >
                <span className="shrink-0 h-10 w-10 rounded-full bg-burgundy text-primary-foreground flex items-center justify-center font-display text-lg">
                  {i + 1}
                </span>
                <p className="text-foreground/85 leading-relaxed pt-1.5">{c}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-burgundy text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Register your interest today
          </h2>
          <p className="mt-4 text-primary-foreground/85 italic">Limited spaces.</p>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-8 py-3 rounded-full bg-background text-burgundy hover:opacity-90 transition"
          >
            Start now →
          </a>
        </div>
      </section>
    </>
  );
}
