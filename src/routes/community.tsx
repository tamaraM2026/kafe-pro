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
