import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

export const Route = createFileRoute("/$lang/ai-prompting-workshop")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    return {
      meta: [
        { title: t.meta.aiPromptingTitle },
        { name: "description", content: t.meta.aiPromptingDescription },
        { property: "og:title", content: t.meta.aiPromptingTitle },
        { property: "og:description", content: t.meta.aiPromptingDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: "/en/ai-prompting-workshop" },
        { rel: "alternate", hreflang: "cs", href: "/cs/ai-prompting-workshop" },
        { rel: "alternate", hreflang: "es", href: "/es/ai-prompting-workshop" },
        { rel: "alternate", hreflang: "x-default", href: "/en/ai-prompting-workshop" },
      ],
    };
  },
  component: AIPromptingPage,
});

function AIPromptingPage() {
  const t = useTranslations();

  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium">{t.aiPrompting.label}</p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.05]">
              {t.aiPrompting.heading}
            </h1>
          </Animate>
          <Animate delay={150}>
            <p className="mt-3 font-display text-2xl md:text-3xl text-burgundy/80">
              {t.aiPrompting.subheading}
            </p>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-xl text-foreground/75 leading-relaxed">
              {t.aiPrompting.intro}
            </p>
          </Animate>
          <Animate delay={300}>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {t.aiPrompting.registerCta}
              </a>
            </div>
          </Animate>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">{t.aiPrompting.frameworksLabel}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">{t.aiPrompting.frameworksHeading}</h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {t.aiPrompting.frameworks.map((f, i) => (
              <Animate key={i} delay={(i % 2 * 100) as 0 | 100}>
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <p className="text-foreground/80 leading-relaxed">{f}</p>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">{t.aiPrompting.facilitatorLabel}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">{t.aiPrompting.facilitatorHeading}</h2>
          </Animate>
          <Animate delay={100}>
            <div className="mt-10 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm">
              <h3 className="font-display text-2xl text-burgundy">{t.aiPrompting.facilitatorName}</h3>
              <p className="mt-1 text-terracotta font-medium">{t.aiPrompting.facilitatorRole}</p>
              <p className="mt-4 text-foreground/80 leading-relaxed">{t.aiPrompting.facilitatorBio}</p>
            </div>
          </Animate>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">{t.aiPrompting.detailsLabel}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">{t.aiPrompting.detailsHeading}</h2>
          </Animate>
          <Animate delay={100}>
            <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm">
                <p className="text-xs tracking-[0.25em] text-terracotta font-medium">{t.aiPrompting.dateLabel}</p>
                <p className="mt-2 font-display text-xl text-burgundy">{t.aiPrompting.date}</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm">
                <p className="text-xs tracking-[0.25em] text-terracotta font-medium">{t.aiPrompting.timeLabel}</p>
                <p className="mt-2 font-display text-xl text-burgundy">{t.aiPrompting.time}</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm">
                <p className="text-xs tracking-[0.25em] text-terracotta font-medium">{t.aiPrompting.locationLabel}</p>
                <p className="mt-2 font-display text-xl text-burgundy">{t.aiPrompting.location}</p>
              </div>
            </div>
          </Animate>
          <Animate delay={200}>
            <p className="mt-8 text-foreground/75 italic">{t.aiPrompting.spacesNote}</p>
          </Animate>
        </div>
      </section>

      <section className="py-28 bg-burgundy/95 backdrop-blur-xl text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl">{t.aiPrompting.finalCtaHeading}</h2>
            <p className="mt-4 text-primary-foreground/85">{t.aiPrompting.finalCtaSubheading}</p>
          </Animate>
          <Animate delay={100}>
            <a
              href="#"
              className="mt-8 inline-block px-8 py-3 rounded-full bg-background text-burgundy hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t.aiPrompting.registerCta}
            </a>
          </Animate>
        </div>
      </section>
    </>
  );
}
