import { createFileRoute, Link } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg";
import { Animate } from "@/components/Animate";
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

export const Route = createFileRoute("/$lang/founder")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    const pagePath = "/founder";
    return {
      meta: [
        { title: t.meta.founderTitle },
        { name: "description", content: t.meta.founderDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: `/en${pagePath}` },
        { rel: "alternate", hreflang: "x-default", href: `/en${pagePath}` },
      ],
    };
  },
  component: Founder,
});

function Founder() {
  const t = useTranslations();
  const lang = useLang();

  return (
    <>
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Animate>
            <div className="relative">
              <div className="absolute -inset-6 bg-sage/15 rounded-[3rem] rotate-2" aria-hidden />
              <div className="relative overflow-hidden rounded-[2.5rem]">
                <img src={founder} alt="Tamara Medina Sapovalova" width={800} height={1000} className="shadow-2xl object-cover w-full hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </Animate>
          <div>
            <Animate>
              <p className="text-xs tracking-[0.25em] text-terracotta">{t.founder.label}</p>
            </Animate>
            <Animate delay={100}>
              <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">{t.founder.heading}</h1>
            </Animate>
            <Animate delay={150}>
              <p className="mt-3 text-sm text-muted-foreground">{t.founder.profileTitle}</p>
            </Animate>
            <Animate delay={200}>
              <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-lg">
                {t.founder.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Animate>
            <Animate delay={300}>
              <p className="mt-8 font-display text-xl text-burgundy">{t.founder.signature}</p>
            </Animate>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy">{t.founder.experience.heading}</h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">{t.founder.experience.body}</p>
          </Animate>
          <Animate delay={200}>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {t.founder.experience.details.map((d) => (
                <div key={d.label} className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <p className="text-xs tracking-[0.2em] text-terracotta">{d.label.toUpperCase()}</p>
                  <p className="mt-2 text-foreground/85">{d.value}</p>
                </div>
              ))}
            </div>
          </Animate>
          <Animate delay={300}>
            <p className="mt-10 text-lg text-foreground/80 leading-relaxed">{t.founder.experience.closing}</p>
          </Animate>
        </div>
      </section>

      {/* Turning point */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy">{t.founder.turningPoint.heading}</h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">{t.founder.turningPoint.body}</p>
          </Animate>
          <Animate delay={200}>
            <blockquote className="mt-10 bg-burgundy text-primary-foreground rounded-3xl p-10 md:p-14 font-display text-2xl md:text-3xl leading-snug">
              “{t.founder.turningPoint.quote}”
            </blockquote>
          </Animate>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl">
            <Animate>
              <h2 className="font-display text-4xl md:text-5xl text-burgundy">{t.founder.services.heading}</h2>
            </Animate>
            <Animate delay={100}>
              <p className="mt-6 text-lg text-foreground/80 leading-relaxed">{t.founder.services.intro}</p>
            </Animate>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {t.founder.services.items.map((item, i) => (
              <Animate key={item.title} delay={(i * 100) as 0 | 100}>
                <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <p className="text-xs tracking-[0.2em] text-terracotta">{item.tag}</p>
                  <h3 className="mt-3 font-display text-2xl text-burgundy">{item.title}</h3>
                  <p className="mt-4 text-foreground/75 flex-1">{item.desc}</p>
                  <Link to={"/$lang/contact"} params={{ lang }} className="mt-6 text-sm text-burgundy hover:text-terracotta transition-colors underline underline-offset-4">
                    {item.cta}
                  </Link>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy">{t.founder.closing.heading}</h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">{t.founder.closing.body}</p>
          </Animate>
          <Animate delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to={"/$lang/contact"} params={{ lang }} className="px-7 py-4 rounded-full bg-gradient-to-r from-sage to-sage/80 text-sage-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-sage/20">
                {t.founder.closing.ctaPrimary}
              </Link>
              <Link to={"/$lang/the-unveiled-experience"} params={{ lang }} className="px-7 py-4 rounded-full border border-burgundy text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-all">
                {t.founder.closing.ctaSecondary}
              </Link>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
