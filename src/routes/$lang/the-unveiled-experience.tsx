import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

export const Route = createFileRoute("/$lang/the-unveiled-experience")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    const pagePath = "/the-unveiled-experience";
    return {
      meta: [
        { title: t.meta.unveiledTitle },
        { name: "description", content: t.meta.unveiledDescription },
        { property: "og:title", content: t.meta.unveiledTitle },
        { property: "og:description", content: t.meta.unveiledDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: `/en${pagePath}` },
        { rel: "alternate", hreflang: "cs", href: `/cs${pagePath}` },
        { rel: "alternate", hreflang: "es", href: `/es${pagePath}` },
        { rel: "alternate", hreflang: "x-default", href: `/en${pagePath}` },
      ],
    };
  },
  component: UnveiledExperiencePage,
});

const RESERVE_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfyznpioX_NhJkbB6flkurwdeHe6q3fMJ90EMg7s_dcZp725Q/viewform?usp=header";

function UnveiledExperiencePage() {
  const t = useTranslations();
  const lang = useLang();

  return (
    <>
      {/* Hero */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium">
              {t.unveiled.label}
            </p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.05]">
              {t.unveiled.heading}
            </h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-xl text-foreground/75 leading-relaxed max-w-2xl mx-auto">
              {t.unveiled.heroSub}
            </p>
          </Animate>
          <Animate delay={300}>
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t.unveiled.reserveCta}
            </a>
          </Animate>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy leading-tight">
              {t.unveiled.reflectionHeading}
            </h2>
          </Animate>
          <Animate delay={100}>
            <p className="text-lg text-foreground/75 leading-relaxed">
              {t.unveiled.reflectionText}
            </p>
          </Animate>
        </div>
      </section>

      {/* From Shadow to Soul */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy">
              {t.unveiled.shadowHeading}
            </h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              {t.unveiled.shadowText}
            </p>
          </Animate>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">
              {t.unveiled.pillarsLabel}
            </p>
          </Animate>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {t.unveiled.pillars.map((p, i) => (
              <Animate key={p.title} delay={(i * 100) as 0 | 100 | 200}>
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center">
                  <span className="inline-flex h-14 w-14 rounded-full bg-gradient-to-br from-burgundy to-terracotta text-primary-foreground items-center justify-center font-display text-2xl">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-burgundy">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs tracking-[0.2em] text-terracotta">
                    {p.subtitle.toUpperCase()}
                  </p>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    {p.description}
                  </p>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* No Filters */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy">
              {t.unveiled.noFiltersHeading}
            </h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              {t.unveiled.noFiltersText}
            </p>
          </Animate>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Animate>
            <h2 className="font-display text-4xl text-burgundy text-center">
              {t.unveiled.faqHeading}
            </h2>
          </Animate>
          <div className="mt-12 space-y-4">
            {t.unveiled.faqs.map((f, i) => (
              <Animate key={f.q} delay={(i * 100) as 0 | 100}>
                <details className="group bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 open:shadow-md transition-all duration-300 hover:bg-white/70">
                  <summary className="cursor-pointer font-display text-xl text-burgundy flex items-center justify-between">
                    {f.q}
                    <span className="text-terracotta group-open:rotate-45 transition-transform duration-300 text-2xl">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-foreground/75 leading-relaxed">
                    {f.a}
                  </p>
                </details>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">
              {t.unveiled.guidesLabel}
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
              {t.unveiled.guidesHeading}
            </h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {t.unveiled.guides.map((g, i) => (
              <Animate key={g.name} delay={(i * 100) as 0 | 100 | 200}>
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-display text-2xl text-burgundy">
                    {g.name}
                  </h3>
                  <p className="mt-1 text-sm text-terracotta">{g.role}</p>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    {g.bio}
                  </p>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Joined Forces */}
      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy">
              {t.unveiled.joinedForcesHeading}
            </h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              {t.unveiled.joinedForcesText}
            </p>
          </Animate>
        </div>
      </section>

      {/* The Transformation */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy text-center">
              {t.unveiled.transformationHeading}
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed text-center max-w-2xl mx-auto italic">
              {t.unveiled.transformationIntro}
            </p>
          </Animate>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {t.unveiled.transformations.map((tr, i) => (
              <Animate key={tr.title} delay={(i * 100) as 0 | 100 | 200}>
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-display text-xl text-burgundy">
                    {tr.title}
                  </h3>
                  <p className="mt-3 text-foreground/80 leading-relaxed">
                    {tr.text}
                  </p>
                </article>
              </Animate>
            ))}
          </div>
          <Animate delay={300}>
            <p className="mt-10 text-center text-sm text-muted-foreground italic">
              {t.unveiled.transformationNote}
            </p>
          </Animate>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-28 bg-burgundy/95 backdrop-blur-xl text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl">
              {t.unveiled.eventHeading}
            </h2>
          </Animate>
          <Animate delay={100}>
            <div className="mt-10 space-y-4 text-lg">
              <p className="text-primary-foreground/90">{t.unveiled.eventDate}</p>
              <p className="text-primary-foreground/90">{t.unveiled.eventTime}</p>
              <p className="text-primary-foreground/90">{t.unveiled.eventLocation}</p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">
              {t.unveiled.pricingLabel}
            </p>
          </Animate>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {t.unveiled.tiers.map((tier, i) => {
              const isFeatured = i === 1;
              return (
                <Animate key={tier.name} delay={(i * 100) as 0 | 100 | 200}>
                  <div
                    className={`relative rounded-3xl p-8 border flex flex-col hover:-translate-y-1 transition-all duration-300 ${
                      isFeatured
                        ? "bg-burgundy text-primary-foreground border-burgundy shadow-2xl shadow-burgundy/25 md:-translate-y-4 hover:md:-translate-y-5"
                        : "bg-white/50 backdrop-blur-sm border-white/30 hover:shadow-lg hover:bg-white/70"
                    }`}
                  >
                    {tier.badge && (
                      <p
                        className={`text-xs tracking-[0.2em] mb-2 ${isFeatured ? "text-accent" : "text-terracotta"}`}
                      >
                        {tier.badge.toUpperCase()}
                      </p>
                    )}
                    <h3 className="font-display text-2xl">{tier.name}</h3>
                    <div className="mt-4">
                      <span className="font-display text-4xl">
                        {tier.price}
                      </span>
                      <span
                        className={`ml-2 text-sm ${isFeatured ? "opacity-70" : "text-muted-foreground"}`}
                      >
                        {tier.priceNote}
                      </span>
                    </div>
                    {tier.regularPrice && (
                      <p
                        className={`mt-2 text-sm ${isFeatured ? "opacity-80" : "text-muted-foreground"}`}
                      >
                        {tier.regularPrice}
                      </p>
                    )}
                    <ul className="mt-6 space-y-3 text-sm flex-1">
                      {tier.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 ${isFeatured ? "text-accent" : "text-sage"}`}
                          >
                            ✓
                          </span>
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={RESERVE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-8 inline-block w-full text-center px-6 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] ${
                        isFeatured
                          ? "bg-accent text-accent-foreground"
                          : "bg-foreground/5 hover:bg-foreground/10"
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </Animate>
              );
            })}
          </div>
          <Animate>
            <p className="mt-8 text-center text-sm text-muted-foreground italic">
              {t.unveiled.pricingNote}
            </p>
          </Animate>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground text-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t.unveiled.reserveCta}
            </a>
          </Animate>
        </div>
      </section>
    </>
  );
}
