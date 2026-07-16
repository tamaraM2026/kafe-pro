import { createFileRoute, Link } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

export const Route = createFileRoute("/$lang/events/")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    const pagePath = "/events";
    return {
      meta: [
        { title: t.meta.eventsTitle },
        { name: "description", content: t.meta.eventsDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: `/en${pagePath}` },
        { rel: "alternate", hreflang: "x-default", href: `/en${pagePath}` },
      ],
    };
  },
  component: EventsCalendar,
});

function EventsCalendar() {
  const t = useTranslations();
  const lang = useLang();
  const firstEvent = t.events.list[0];
  const rhythmItems = [t.events.rhythm.oneCup, t.events.rhythm.networking, t.events.rhythm.discussion, t.events.rhythm.dinner];

  return (
    <>
      {/* Hero */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta font-medium">{t.events.hero.eyebrow}</p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.1]">
              {t.events.hero.heading}
            </h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-xl text-foreground/75 leading-relaxed">{t.events.hero.lead}</p>
          </Animate>
          <Animate delay={300}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to={"/$lang/events/$slug"} params={{ lang, slug: firstEvent.slug }} className="px-7 py-4 rounded-full bg-gradient-to-r from-sage to-sage/80 text-sage-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-sage/20">
                {t.events.viewDetailsCta.replace(" →", "")} — {firstEvent.dateTag}
              </Link>
              <a href="#calendar" className="px-7 py-4 rounded-full border border-burgundy text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-all">
                {t.events.hero.secondaryCta}
              </a>
            </div>
          </Animate>
          <Animate delay={350}>
            <p className="mt-6 text-sm text-muted-foreground">{t.events.hero.metaLine}</p>
          </Animate>
        </div>
      </section>

      {/* What's new */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">{t.events.whatsNew.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">{t.events.whatsNew.heading}</h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">{t.events.whatsNew.intro}</p>
          </Animate>
        </div>
        <div className="mt-14 mx-auto max-w-6xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rhythmItems.map((item, i) => (
            <Animate key={item.title} delay={(i * 100) as 0 | 100 | 200}>
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <p className="font-display text-3xl text-terracotta/60">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-xl text-burgundy">{item.title}</h3>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{item.text}</p>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* The details */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta text-center">{t.events.detailsEyebrow}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy text-center">{t.events.detailsHeading}</h2>
          </Animate>
          <Animate delay={100}>
            <div className="mt-12 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/30 divide-y divide-border/30 overflow-hidden">
              {t.events.seasonDetails.map((row) => (
                <div key={row.label} className="grid sm:grid-cols-3 gap-1 sm:gap-4 p-6">
                  <p className="text-sm tracking-[0.15em] text-terracotta sm:col-span-1">{row.label.toUpperCase()}</p>
                  <p className="text-foreground/85 sm:col-span-2">{row.value}</p>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-28" id="calendar">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Animate>
              <p className="text-xs tracking-[0.25em] text-terracotta">{t.events.calendarEyebrow}</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">{t.events.calendarHeading}</h2>
            </Animate>
            <Animate delay={100}>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">{t.events.calendarIntro}</p>
            </Animate>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.events.list.map((event, i) => {
              const isLaunch = i === 0;
              const isClose = i === t.events.list.length - 1;
              return (
                <Animate key={event.slug} delay={((i % 3) * 100) as 0 | 100 | 200}>
                  <Link
                    to={"/$lang/events/$slug"}
                    params={{ lang, slug: event.slug }}
                    className="block bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <p className="text-xs tracking-[0.2em] text-terracotta flex items-center gap-2">
                      {event.dateTag.toUpperCase()}
                      {isLaunch && <span className="px-2 py-0.5 rounded-full bg-sage/20 text-sage normal-case tracking-normal">{t.events.launchTag}</span>}
                      {isClose && <span className="px-2 py-0.5 rounded-full bg-sage/20 text-sage normal-case tracking-normal">{t.events.closeTag}</span>}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-burgundy">{event.title}</h3>
                    <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{event.description}</p>
                    <span className="mt-6 inline-block text-sm text-burgundy hover:text-terracotta transition-colors">{t.events.viewDetailsCta}</span>
                  </Link>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-28 bg-burgundy text-primary-foreground">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-accent">{t.events.ctaBand.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">{t.events.ctaBand.heading}</h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-primary-foreground/85 leading-relaxed">{t.events.ctaBand.seasonBody}</p>
          </Animate>
          <Animate delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to={"/$lang/events/$slug"} params={{ lang, slug: firstEvent.slug }} className="px-7 py-4 rounded-full bg-accent text-accent-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
                {t.events.viewDetailsCta.replace(" →", "")} — {firstEvent.dateTag}
              </Link>
            </div>
          </Animate>
          <Animate delay={300}>
            <p className="mt-6 text-sm text-primary-foreground/70">{t.events.ctaBand.emailNote}</p>
          </Animate>
        </div>
      </section>
    </>
  );
}
