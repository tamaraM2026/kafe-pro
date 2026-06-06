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
