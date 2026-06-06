import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-gathering.jpg";
import gathering1 from "@/assets/gathering-1.jpg";
import gathering2 from "@/assets/gathering-2.jpg";
import { Animate } from "@/components/Animate";
import { useCountUp } from "@/hooks/use-count-up";
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    const pagePath = "/";
    return {
      meta: [
        { title: t.meta.homeTitle },
        { name: "description", content: t.meta.homeDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: `/en${pagePath}` },
        { rel: "alternate", hreflang: "cs", href: `/cs${pagePath}` },
        { rel: "alternate", hreflang: "es", href: `/es${pagePath}` },
        { rel: "alternate", hreflang: "x-default", href: `/en${pagePath}` },
      ],
    };
  },
  component: HomePage,
});

function StatCard({ value, label }: { value: string; label: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <div ref={ref} className="bg-white/50 backdrop-blur-sm rounded-3xl py-8 px-4 shadow-sm border border-white/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="font-display text-5xl text-terracotta">{display}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function HomePage() {
  const t = useTranslations();
  const lang = useLang();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-sage/10 rounded-full blur-3xl" style={{ animation: "float 6s ease-in-out infinite" }} aria-hidden />

        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <Animate>
              <p className="text-xs tracking-[0.25em] text-terracotta font-medium mb-6">{t.home.regionLabel}</p>
            </Animate>
            <Animate delay={100}>
              <h1 className="font-display text-5xl md:text-7xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.05]">
                {t.home.heroHeading}
              </h1>
              <p className="mt-6 text-xl text-foreground/80 max-w-xl leading-relaxed">
                <span className="font-display text-2xl text-terracotta italic">{t.home.heroBrandName}</span>
                {t.home.heroDescription}
              </p>
            </Animate>
            <Animate delay={200}>
              <p className="mt-4 text-sm text-muted-foreground">{t.home.heroSubtext}</p>
            </Animate>
            <Animate delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to={"/$lang/contact"} params={{ lang }} className="px-7 py-4 rounded-full bg-gradient-to-r from-sage to-sage/80 text-sage-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-sage/20">
                  {t.common.reserve}
                </Link>
                <Link to={"/$lang/memberships"} params={{ lang }} className="px-7 py-4 rounded-full bg-gradient-to-r from-terracotta to-terracotta/80 text-terracotta-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-terracotta/20">
                  {t.common.exploreMemberships}
                </Link>
              </div>
            </Animate>
          </div>
          <Animate delay={200}>
            <div className="relative">
              <div className="absolute -inset-6 bg-sage/15 rounded-[3rem] rotate-2" aria-hidden />
              <img src={hero} alt={t.home.heroBrandName} width={1600} height={1280} className="relative rounded-[2.5rem] shadow-2xl object-cover w-full aspect-[5/4]" />
            </div>
          </Animate>
        </div>

        <div className="mx-auto max-w-5xl px-6 -mt-6 mb-20 grid grid-cols-3 gap-4 text-center">
          {t.home.stats.map((s) => <StatCard key={s.label} value={s.value} label={s.label} />)}
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy whitespace-pre-line">{t.home.painHeading}</h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">{t.home.painSubheading}</p>
          </Animate>
        </div>
        <div className="mx-auto max-w-5xl px-6 mt-14 grid md:grid-cols-2 gap-4">
          {t.home.quotes.map((q, i) => (
            <Animate key={i} delay={(i % 2 * 100) as 0 | 100}>
              <blockquote className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 font-display text-lg italic text-foreground/85 leading-relaxed hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                "{q}"
              </blockquote>
            </Animate>
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">{t.home.whatKafeLabel}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">{t.home.whatKafeHeading}</h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {t.home.pillars.map((p, i) => (
              <Animate key={p.title} delay={(i * 100) as 0 | 100 | 200}>
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-sm text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <span className="text-4xl">{p.icon}</span>
                  <h3 className="mt-4 font-display text-2xl text-burgundy">{p.title}</h3>
                  <p className="mt-3 text-foreground/75 leading-relaxed">{p.text}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">{t.home.belongLabel}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">{t.home.belongHeading}</h2>
          </Animate>
          <ul className="mt-12 space-y-4">
            {t.home.belongItems.map((item, i) => (
              <Animate key={i} delay={(i % 3 * 100) as 0 | 100 | 200}>
                <li className="flex items-start gap-4 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-sage-foreground">✓</span>
                  <span className="text-foreground/85 text-lg">{item}</span>
                </li>
              </Animate>
            ))}
          </ul>
          <Animate>
            <p className="mt-10 text-center text-sm text-muted-foreground italic">{t.home.belongDisclaimer}</p>
          </Animate>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <Animate>
              <p className="text-xs tracking-[0.25em] text-terracotta">{t.home.tiersLabel}</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">{t.home.tiersHeading}</h2>
            </Animate>
            <Animate delay={100}>
              <p className="mt-6 text-foreground/75">{t.home.tiersSubheading}</p>
            </Animate>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {t.home.tiers.map((tier, i) => (
              <Animate key={tier.name} delay={(i * 100) as 0 | 100 | 200}>
                <div className={`relative rounded-3xl p-8 border flex flex-col hover:-translate-y-1 transition-all duration-300 ${tier.featured ? "bg-burgundy text-primary-foreground border-burgundy shadow-2xl shadow-burgundy/25 md:-translate-y-4 hover:md:-translate-y-5" : "bg-white/50 backdrop-blur-sm border-white/30 hover:shadow-lg hover:bg-white/70"}`}>
                  <p className={`text-xs tracking-[0.2em] mb-2 ${tier.featured ? "text-accent" : "text-terracotta"}`}>{tier.tagline.toUpperCase()}</p>
                  <h3 className="font-display text-3xl">{tier.name}</h3>
                  <div className="mt-6">
                    <span className="font-display text-5xl">{tier.price}</span>
                    <span className={`ml-2 text-sm ${tier.featured ? "opacity-70" : "text-muted-foreground"}`}>{tier.per}</span>
                  </div>
                  <p className={`mt-6 flex-1 ${tier.featured ? "opacity-90" : "text-foreground/75"}`}>{tier.desc}</p>
                  <Link to={"/$lang/contact"} params={{ lang }} className={`mt-8 inline-block w-full text-center px-6 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] ${tier.featured ? "bg-accent text-accent-foreground" : "bg-foreground/5 hover:bg-foreground/10"}`}>
                    {tier.cta}
                  </Link>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Gatherings gallery */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">OUR GATHERINGS</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">Real moments, real connection.</h2>
          </Animate>
          <Animate delay={100}>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-2xl">
                <img src={gathering1} alt="Kafe gathering" className="w-full aspect-[5/4] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img src={gathering2} alt="Kafe gathering" className="w-full aspect-[5/4] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">
              {t.home.ctaHeading}
            </h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/75 whitespace-pre-line">{t.home.ctaSubheading}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to={"/$lang/contact"} params={{ lang }} className="px-7 py-4 rounded-full bg-gradient-to-r from-sage to-sage/80 text-sage-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
                {t.common.reserve}
              </Link>
              <Link to={"/$lang/memberships"} params={{ lang }} className="px-7 py-4 rounded-full bg-gradient-to-r from-terracotta to-terracotta/80 text-terracotta-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
                {t.common.exploreMemberships}
              </Link>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
