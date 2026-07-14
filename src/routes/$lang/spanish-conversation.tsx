import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

export const Route = createFileRoute("/$lang/spanish-conversation")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    return {
      meta: [
        { title: t.meta.spanishConversationTitle },
        { name: "description", content: t.meta.spanishConversationDescription },
        { property: "og:title", content: t.meta.spanishConversationTitle },
        { property: "og:description", content: t.meta.spanishConversationDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: "/en/spanish-conversation" },
        { rel: "alternate", hreflang: "cs", href: "/cs/spanish-conversation" },
        { rel: "alternate", hreflang: "es", href: "/es/spanish-conversation" },
        { rel: "alternate", hreflang: "x-default", href: "/en/spanish-conversation" },
      ],
    };
  },
  component: SpanishConversationPage,
});

function SpanishConversationPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium">
              {t.spanishConversation.label}
            </p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.05]">
              {t.spanishConversation.heading}
              <span className="ml-2">{t.spanishConversation.headingEmphasis}</span>
            </h1>
          </Animate>
          <Animate delay={150}>
            <p className="mt-4 font-display text-2xl md:text-3xl text-burgundy/80">
              {t.spanishConversation.subheading}
            </p>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-xl text-foreground/75 leading-relaxed">
              {t.spanishConversation.intro}
            </p>
          </Animate>
        </div>
      </section>

      {/* Why join */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center font-medium">
              {t.spanishConversation.whyLabel}
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
              {t.spanishConversation.whyHeading}
            </h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {t.spanishConversation.whyItems.map((item, i) => (
              <Animate key={i} delay={(i * 100) as 0 | 100 | 200}>
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="font-display text-2xl text-burgundy">{item.title}</h3>
                  <p className="mt-4 text-foreground/80 leading-relaxed">{item.body}</p>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Groups / schedule */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center font-medium">
              {t.spanishConversation.groupsLabel}
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
              {t.spanishConversation.groupsHeading}
            </h2>
            <p className="mt-4 text-center text-foreground/75 max-w-2xl mx-auto">
              {t.spanishConversation.groupsIntro}
            </p>
          </Animate>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {t.spanishConversation.groups.map((group, i) => (
              <Animate key={i} delay={(i * 100) as 0 | 100}>
                <article className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl text-burgundy">{group.name}</h3>
                      <p className="mt-2 text-terracotta font-medium">{group.dayTime}</p>
                      <p className="mt-1 text-foreground/70">{group.location}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-sage/15 text-sage text-xs font-medium whitespace-nowrap">
                      {group.status}
                    </span>
                  </div>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center font-medium">
              {t.spanishConversation.topicsLabel}
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
              {t.spanishConversation.topicsHeading}
            </h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {t.spanishConversation.topics.map((topic, i) => (
              <Animate key={i} delay={(i % 2 * 100) as 0 | 100}>
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="font-display text-2xl text-burgundy">{topic.title}</h3>
                  <p className="mt-4 text-foreground/80 leading-relaxed">{topic.body}</p>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-burgundy/95 backdrop-blur-xl text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <p className="text-primary-foreground/85 leading-relaxed">
              {t.spanishConversation.limitedSpots}
            </p>
          </Animate>
          <Animate delay={100}>
            <a
              href="#"
              className="mt-8 inline-block px-8 py-4 rounded-full bg-background text-burgundy hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t.spanishConversation.ctaButton}
            </a>
          </Animate>
        </div>
      </section>
    </>
  );
}
