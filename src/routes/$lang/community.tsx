import { createFileRoute } from "@tanstack/react-router";
import featuredImg from "@/assets/featured-pastry.jpg";
import adelaImg from "@/assets/member-adela.jpg";
import zuzanaImg from "@/assets/member-zuzana.jpg";
import tamaraImg from "@/assets/member-tamara.jpg";
import ivetaImg from "@/assets/member-iveta.jpg";
import viktoriaImg from "@/assets/member-viktoria.jpg";
import { Animate } from "@/components/Animate";
import { useTranslations } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

export const Route = createFileRoute("/$lang/community")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    return {
      meta: [
        { title: t.meta.communityTitle },
        { name: "description", content: t.meta.communityDescription },
        { property: "og:title", content: t.meta.communityTitle },
        { property: "og:description", content: t.meta.communityDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: "/en/community" },
        { rel: "alternate", hreflang: "cs", href: "/cs/community" },
        { rel: "alternate", hreflang: "es", href: "/es/community" },
        { rel: "alternate", hreflang: "x-default", href: "/en/community" },
      ],
    };
  },
  component: CommunityPage,
});

const memberImages = [adelaImg, zuzanaImg, tamaraImg, ivetaImg, viktoriaImg];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}

function CommunityPage() {
  const t = useTranslations();

  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium">{t.community.label}</p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.05]">
              {t.community.heading}
            </h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              {t.community.intro}
            </p>
          </Animate>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">{t.community.featuredLabel}</p>
            <div className="mt-4 grid md:grid-cols-2 gap-10 items-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30 shadow-sm hover:shadow-lg transition-all duration-300">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-burgundy">
                  {t.community.featured.title} <span className="ml-1">{t.community.featured.flag}</span>
                </h2>
                <ul className="mt-6 space-y-3">
                  {t.community.featured.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-foreground/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.kurzfocenimobilem.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block px-7 py-3 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {t.community.featured.learnMore}
                </a>
              </div>
              <img
                src={featuredImg}
                alt={t.community.featured.title}
                width={756}
                height={566}
                className="rounded-2xl object-cover w-full aspect-[5/4] shadow-md"
              />
            </div>
          </Animate>
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">{t.community.voicesLabel}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">
              {t.community.voicesHeading}
            </h2>
          </Animate>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {t.community.members.map((m, i) => {
              const image = memberImages[i];
              return (
                <Animate key={m.name} delay={(i % 2 * 100) as 0 | 100}>
                  <article className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm flex gap-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <div className="shrink-0 overflow-hidden rounded-2xl">
                      {image ? (
                        <img
                          src={image}
                          alt={m.name}
                          width={144}
                          height={144}
                          className="h-28 w-28 md:h-36 md:w-36 rounded-2xl object-cover hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="h-28 w-28 md:h-36 md:w-36 rounded-2xl bg-burgundy text-primary-foreground flex items-center justify-center font-display text-3xl">
                          {initials(m.name)}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl text-burgundy">{m.name}</h3>
                      <p className="mt-1 text-xs tracking-[0.18em] text-terracotta">{m.langs}</p>
                      <p className="mt-1 text-sm text-foreground/70">{m.role}</p>
                      <p className="mt-4 text-foreground/80 leading-relaxed italic">"{m.bio}"</p>
                      <a
                        href={m.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm text-burgundy hover:text-terracotta transition-colors underline underline-offset-4"
                      >
                        {m.urlLabel} →
                      </a>
                    </div>
                  </article>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">{t.community.collaboratorsLabel}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">
              {t.community.collaboratorsHeading}
            </h2>
          </Animate>
          <Animate delay={100}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {t.community.collaborators.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-white/30 bg-white/50 backdrop-blur-sm text-foreground/80 hover:text-burgundy hover:border-burgundy hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  {c.name}
                </a>
              ))}
            </div>
          </Animate>
          <Animate delay={200}>
            <p className="mt-12 text-sm text-muted-foreground italic">
              {t.community.collaborateCta}
            </p>
          </Animate>
        </div>
      </section>
    </>
  );
}
