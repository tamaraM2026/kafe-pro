import { createFileRoute, Link } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

export const Route = createFileRoute("/$lang/memberships")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    return {
      meta: [
        { title: t.meta.membershipsTitle },
        { name: "description", content: t.meta.membershipsDescription },
      ],
    };
  },
  component: Memberships,
});

function Memberships() {
  const t = useTranslations();
  const lang = useLang();

  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">{t.memberships.label}</p>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">{t.memberships.heading}</h1>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-foreground/75">{t.memberships.subheading}</p>
          </Animate>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {t.memberships.tiers.map((tier, i) => (
            <Animate key={tier.name} delay={(i * 100) as 0 | 100 | 200}>
              <div className={`relative rounded-3xl p-8 border flex flex-col hover:-translate-y-1 transition-all duration-300 ${tier.featured ? "bg-burgundy text-primary-foreground border-burgundy shadow-2xl shadow-burgundy/25 md:-translate-y-4 hover:md:-translate-y-5" : "bg-white/50 backdrop-blur-sm border-white/30 hover:shadow-lg hover:bg-white/70"}`}>
                <p className={`text-xs tracking-[0.2em] mb-2 ${tier.featured ? "text-accent" : "text-terracotta"}`}>{tier.tag.toUpperCase()}</p>
                <h3 className="font-display text-3xl">{tier.name}</h3>
                <div className="mt-6">
                  <span className="font-display text-5xl">{tier.price}</span>
                  <span className={`ml-2 text-sm ${tier.featured ? "opacity-70" : "text-muted-foreground"}`}>{tier.per}</span>
                </div>
                <p className={`mt-6 ${tier.featured ? "opacity-90" : "text-foreground/75"}`}>{tier.desc}</p>
                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {tier.perks.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className={`mt-0.5 ${tier.featured ? "text-accent" : "text-sage"}`}>✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link to={"/$lang/contact"} params={{ lang }} className={`mt-8 inline-block w-full text-center px-6 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] ${tier.featured ? "bg-accent text-accent-foreground" : "bg-foreground/5 hover:bg-foreground/10"}`}>
                  {t.memberships.chooseCta}
                </Link>
              </div>
            </Animate>
          ))}
        </div>

        <Animate>
          <div className="mt-20 bg-white/50 backdrop-blur-sm rounded-3xl p-10 md:p-14 text-center border border-white/30 shadow-sm">
            <p className="text-xs tracking-[0.25em] text-terracotta">{t.memberships.bannerLabel}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">{t.memberships.bannerHeading}</h2>
            <p className="mt-6 max-w-2xl mx-auto text-foreground/75">
              {t.memberships.bannerDescription}
            </p>
            <Link to={"/$lang/contact"} params={{ lang }} className="mt-8 inline-block px-7 py-4 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
              {t.memberships.bannerCta}
            </Link>
          </div>
        </Animate>
      </div>
    </section>
  );
}
