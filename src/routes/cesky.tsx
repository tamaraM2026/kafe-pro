import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-gathering.jpg";

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

const stats = [
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

function CeskyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium mb-6">PODĚBRADY · STŘEDNÍ ČECHY</p>
            <h1 className="font-display text-5xl md:text-7xl text-burgundy leading-[1.05]">
              Kafe con Propósito
            </h1>
            <p className="mt-6 font-display text-2xl text-terracotta italic">
              Káva s posláním
            </p>
            <p className="mt-6 text-lg text-foreground/80 max-w-xl leading-relaxed">
              Proměňte svůj čas na kávu v prostor pro růst, propojení a inspiraci. Místo pro sdílení a skutečné spojení mezi ženami — u šálku dobré kávy.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="px-7 py-4 rounded-full bg-sage text-sage-foreground hover:opacity-90 transition shadow-lg shadow-sage/20">
                Zajistit si místo →
              </Link>
              <Link to="/memberships" className="px-7 py-4 rounded-full bg-terracotta text-terracotta-foreground hover:opacity-90 transition shadow-lg shadow-terracotta/20">
                Nabídka členství
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-sage/15 rounded-[3rem] rotate-2" aria-hidden />
            <img
              src={hero}
              alt="Ženy u stolu s kávou"
              width={1600}
              height={1280}
              className="relative rounded-[2.5rem] shadow-2xl object-cover w-full aspect-[5/4]"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-5xl px-6 -mt-6 mb-20 grid grid-cols-3 gap-4 text-center">
          {stats.map(([n, l]) => (
            <div key={l} className="bg-card rounded-3xl py-8 px-4 shadow-sm border border-border/50">
              <div className="font-display text-5xl text-terracotta">{n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">NA ČEM STOJÍ KAFE CON PROPÓSITO</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
            Tři pilíře naší komunity
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm">
                <h3 className="font-display text-2xl text-burgundy">{p.title}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs tracking-[0.25em] text-terracotta">PROČ TO VLASTNĚ DĚLÁME?</p>
          <blockquote className="mt-8 font-display text-2xl md:text-3xl text-burgundy leading-relaxed italic">
            "Věříme, že když se ženy navzájem podporují, dějí se velké věci. Naším cílem je vybudovat prostor, kde se každá z nás může cítit slyšena a inspirována."
          </blockquote>
          <p className="mt-6 text-terracotta font-medium">— Iveta &amp; Tamara</p>
        </div>
      </section>

      {/* Storytelling */}
      <section className="py-24 bg-burgundy text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <span className="text-5xl">☕️</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Jeden šálek, jeden příběh
            </h2>
            <p className="mt-6 opacity-90 leading-relaxed">
              Součástí každého druhého setkání je naše speciální storytellingová série. Prostor vyhrazený pro jednu ženu, která během dvaceti minut sdílí svůj příběh — autenticky, otevřeně a bez přetvářky. Nahlédnete do cesty, která často zůstává skrytá za profesními úspěchy.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">JAK TO PROBÍHÁ</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
            Tři kroky k vašemu místu u stolu
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl p-8 bg-cream">
                <div className="font-display text-5xl text-terracotta">{s.n}</div>
                <h3 className="mt-4 font-display text-2xl text-burgundy">{s.title}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">PRO KOHO JE PROGRAM URČEN</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
            Patříte sem, pokud…
          </h2>
          <ul className="mt-12 space-y-4">
            {forWhom.map((w) => (
              <li key={w} className="flex items-start gap-4 bg-background rounded-2xl p-6 border border-border/50">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-sage-foreground">✓</span>
                <span className="text-foreground/85 text-lg">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">NAŠE KOMUNITA</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
            Co o nás říkají ženy
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="bg-cream rounded-2xl p-8 border-l-4 border-terracotta">
                <p className="font-display text-lg text-foreground/90 italic leading-relaxed">"{t.text}"</p>
                <footer className="mt-6 text-burgundy font-medium">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl text-burgundy">
            Každý šálek kávy je příležitostí k novému začátku.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-7 py-4 rounded-full bg-sage text-sage-foreground hover:opacity-90 transition">
              Zajistit si místo →
            </Link>
            <Link to="/memberships" className="px-7 py-4 rounded-full bg-terracotta text-terracotta-foreground hover:opacity-90 transition">
              Nabídka členství
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
