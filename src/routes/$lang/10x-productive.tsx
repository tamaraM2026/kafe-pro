import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/$lang/10x-productive")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    return {
      meta: [
        { title: t.meta.tenxTitle },
        { name: "description", content: t.meta.tenxDescription },
        { property: "og:title", content: t.meta.tenxTitle },
        { property: "og:description", content: t.meta.tenxDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: "/en/10x-productive" },
        { rel: "alternate", hreflang: "cs", href: "/cs/10x-productive" },
        { rel: "alternate", hreflang: "es", href: "/es/10x-productive" },
        { rel: "alternate", hreflang: "x-default", href: "/en/10x-productive" },
      ],
    };
  },
  component: TenxPage,
});

function TenxPage() {
  const t = useTranslations();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium">
              {t.tenx.label}
            </p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">
              <span className="bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">
                {t.tenx.heading}
              </span>
              <br />
              <span className="bg-gradient-to-r from-terracotta to-burgundy bg-clip-text text-transparent">
                {t.tenx.headingEmphasis}
              </span>
            </h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-xl text-foreground/75 leading-relaxed">
              {t.tenx.heroSub}
            </p>
          </Animate>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Animate>
            <blockquote className="border-l-4 border-gradient-to-b from-burgundy to-terracotta pl-8 py-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-burgundy to-terracotta rounded-full" />
              <p className="font-display text-2xl md:text-3xl italic text-foreground/85 leading-relaxed">
                "{t.tenx.pullQuote}"
              </p>
            </blockquote>
          </Animate>
        </div>
      </section>

      {/* Days grid */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">
              {t.tenx.daysLabel}
            </p>
          </Animate>
          <div className="mt-14 grid md:grid-cols-2 gap-4">
            {t.tenx.days.map((day, i) => (
              <Animate key={i} delay={(i % 2 * 100) as 0 | 100}>
                <div className="flex gap-5 items-start bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <span className="shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-terracotta to-terracotta/70 text-primary-foreground flex items-center justify-center font-display text-lg">
                    {i + 1}
                  </span>
                  <p className="text-foreground/85 leading-relaxed pt-1.5">
                    {day}
                  </p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* For you */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">
              {t.tenx.forYouLabel}
            </p>
          </Animate>
          <ul className="mt-12 space-y-4">
            {t.tenx.forYouItems.map((item, i) => (
              <Animate key={i} delay={(i * 100) as 0 | 100 | 200 | 300 | 400}>
                <li className="flex gap-4 items-start">
                  <span className="shrink-0 mt-1 h-6 w-6 rounded-full bg-sage/30 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sage"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <p className="text-lg text-foreground/85 leading-relaxed">
                    {item}
                  </p>
                </li>
              </Animate>
            ))}
          </ul>
        </div>
      </section>

      {/* Tamara block */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Animate>
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <img
                src={founder}
                alt={t.tenx.tamaraName}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shrink-0 border-4 border-white/60 shadow-md"
              />
              <div>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {t.tenx.tamaraBio}
                </p>
                <p className="mt-4 font-display text-xl text-burgundy">
                  {t.tenx.tamaraName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t.tenx.tamaraRole}
                </p>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Opt-in form */}
      <section className="py-28 bg-burgundy/95 backdrop-blur-xl text-primary-foreground">
        <div className="mx-auto max-w-xl px-6 text-center">
          {submitted ? (
            <Animate>
              <div className="py-8">
                <span className="text-5xl">&#10003;</span>
                <h2 className="mt-4 font-display text-4xl">
                  {t.tenx.successHeading}
                </h2>
                <p className="mt-4 text-primary-foreground/85 text-lg">
                  {t.tenx.successMessage}
                </p>
              </div>
            </Animate>
          ) : (
            <>
              <Animate>
                <h2 className="font-display text-4xl md:text-5xl">
                  {t.tenx.optInTitle}{" "}
                  <span className="bg-gradient-to-r from-terracotta to-terracotta/70 bg-clip-text text-transparent">
                    {t.tenx.optInTitleEmphasis}
                  </span>
                </h2>
                <p className="mt-4 text-primary-foreground/85">
                  {t.tenx.optInSub}
                </p>
              </Animate>
              <Animate delay={100}>
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col gap-3"
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.tenx.namePlaceholder}
                    className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.tenx.emailPlaceholder}
                    className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                  />
                  {error && (
                    <p className="text-terracotta text-sm">{t.tenx.errorMsg}</p>
                  )}
                  <button
                    type="submit"
                    className="mt-2 w-full px-8 py-3 rounded-full bg-gradient-to-r from-terracotta to-terracotta/80 text-primary-foreground font-medium hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    {t.tenx.ctaButton}
                  </button>
                  <p className="mt-2 text-xs text-primary-foreground/60">
                    {t.tenx.privacyNote}
                  </p>
                </form>
              </Animate>
            </>
          )}
        </div>
      </section>
    </>
  );
}
