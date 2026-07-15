import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

export const Route = createFileRoute("/$lang/business-building-blocks")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    return {
      meta: [
        { title: t.meta.bbbTitle },
        { name: "description", content: t.meta.bbbDescription },
        { property: "og:title", content: t.meta.bbbTitle },
        { property: "og:description", content: t.meta.bbbDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: "/en/business-building-blocks" },
        { rel: "alternate", hreflang: "x-default", href: "/en/business-building-blocks" },
      ],
    };
  },
  component: BBBPage,
});

const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfyznpioX_NhJkbB6flkurwdeHe6q3fMJ90EMg7s_dcZp725Q/viewform?usp=header";
const WORKSHOPS_URL = "https://www.kafeconproposito.com/bbbworkshopsdescriptions";

function BBBPage() {
  const t = useTranslations();

  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium">{t.bbb.label}</p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.05]">
              {t.bbb.heading}
            </h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-xl text-foreground/75 leading-relaxed">
              {t.bbb.intro}
            </p>
          </Animate>
          <Animate delay={300}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
                {t.bbb.registerCta}
              </a>
              <a href={WORKSHOPS_URL} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full border border-burgundy text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-all">
                {t.bbb.workshopDetailsCta}
              </a>
            </div>
          </Animate>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">{t.bbb.outcomesLabel}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">{t.bbb.outcomesHeading}</h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {t.bbb.outcomes.map((o, i) => (
              <Animate key={o.title} delay={(i % 2 * 100) as 0 | 100}>
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-display text-2xl text-burgundy">{o.title}</h3>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{o.body}</p>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">{t.bbb.differentLabel}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">{t.bbb.differentHeading}</h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {t.bbb.differentiators.map((d, i) => (
              <Animate key={d.title} delay={(i * 100) as 0 | 100 | 200}>
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-display text-xl text-burgundy">{d.title}</h3>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{d.body}</p>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">{t.bbb.curriculumLabel}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">{t.bbb.curriculumHeading}</h2>
          </Animate>
          <ol className="mt-12 space-y-4">
            {t.bbb.curriculum.map((c, i) => (
              <Animate key={i} delay={(i * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
                <li className="flex gap-5 items-start bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <span className="shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-burgundy to-terracotta text-primary-foreground flex items-center justify-center font-display text-lg">
                    {i + 1}
                  </span>
                  <p className="text-foreground/85 leading-relaxed pt-1.5">{c}</p>
                </li>
              </Animate>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-28 bg-burgundy/95 backdrop-blur-xl text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl">{t.bbb.finalCtaHeading}</h2>
            <p className="mt-4 text-primary-foreground/85 italic">{t.bbb.finalCtaSubheading}</p>
          </Animate>
          <Animate delay={100}>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block px-8 py-3 rounded-full bg-background text-burgundy hover:scale-[1.02] active:scale-[0.98] transition-all">
              {t.bbb.finalCtaButton}
            </a>
          </Animate>
        </div>
      </section>
    </>
  );
}
