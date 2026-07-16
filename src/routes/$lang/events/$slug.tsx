import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

const RSVP_EMAIL = "tamara@sapovalovasolutions.com";

function buildRsvpMailto(title: string, dateLabel: string) {
  const dateOnly = dateLabel.split(" · ")[0];
  const subject = `RSVP: ${title} – ${dateOnly}`;
  const body = `Hi Tamara,\n\nI'd like to RSVP for "${title}" on ${dateOnly}.\n\nName:\nEmail:\n\nWill I be staying for the optional dinner? Yes / No\n\nThanks!`;
  return `mailto:${RSVP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const Route = createFileRoute("/$lang/events/$slug")({
  beforeLoad: ({ params }) => {
    const t = getTranslations(params.lang);
    if (!t.events.list.some((e) => e.slug === params.slug)) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    const event = t.events.list.find((e) => e.slug === params.slug);
    const pagePath = `/events/${params.slug}`;
    return {
      meta: event
        ? [
            { title: `${event.title} — ${event.dateTag} | Kafe con Propósito` },
            { name: "description", content: event.description },
          ]
        : [],
      links: [
        { rel: "alternate", hreflang: "en", href: `/en${pagePath}` },
        { rel: "alternate", hreflang: "x-default", href: `/en${pagePath}` },
      ],
    };
  },
  component: EventDetail,
  notFoundComponent: EventNotFound,
});

function EventNotFound() {
  const t = useTranslations();
  const lang = useLang();
  return (
    <section className="py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="font-display text-4xl text-burgundy">Event not found</h1>
        <Link to={"/$lang/events"} params={{ lang }} className="mt-6 inline-block text-burgundy hover:text-terracotta transition-colors underline underline-offset-4">
          {t.events.backToCalendar}
        </Link>
      </div>
    </section>
  );
}

function EventDetail() {
  const t = useTranslations();
  const lang = useLang();
  const { slug } = Route.useParams();

  const index = t.events.list.findIndex((e) => e.slug === slug);
  const event = t.events.list[index];
  const isLaunch = index === 0;
  const isClose = index === t.events.list.length - 1;
  const nextEvent = t.events.list[index + 1];
  const eyebrow = isLaunch ? t.events.seasonLaunchEyebrow : isClose ? t.events.seasonCloseEyebrow : t.events.thisEditionEyebrow;
  const mailto = buildRsvpMailto(event.title, event.dateLabel);

  const rhythmItems = [
    t.events.rhythm.oneCup,
    t.events.rhythm.networking,
    { title: `${t.events.rhythm.discussion.title.startsWith("A discussion") ? "Discussion" : t.events.rhythm.discussion.title}: ${event.title}`, text: event.description },
    t.events.rhythm.dinner,
  ];

  const detailsRows = [
    { label: "Date", value: event.dateLabel.split(" · ")[0] },
    { label: "Time", value: event.dateLabel.split(" · ")[1] ?? "" },
    { label: "Language", value: "English" },
    { label: "Where", value: t.events.venuePlaceholder },
    { label: "Ticket", value: event.ticket },
    { label: "Dinner", value: "Optional add-on, priced at cost" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <Link to={"/$lang/events"} params={{ lang }} className="text-sm text-burgundy hover:text-terracotta transition-colors">
              {t.events.backToCalendar}
            </Link>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-xs tracking-[0.25em] text-terracotta font-medium">{eyebrow}</p>
          </Animate>
          <Animate delay={150}>
            <p className="mt-3 text-sm text-muted-foreground">{event.dateLabel}</p>
          </Animate>
          <Animate delay={200}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent leading-[1.1]">
              {event.title}
            </h1>
          </Animate>
          <Animate delay={300}>
            <p className="mt-6 text-xl text-foreground/75 leading-relaxed">{event.description}</p>
          </Animate>
          <Animate delay={350}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={mailto} className="px-7 py-4 rounded-full bg-gradient-to-r from-sage to-sage/80 text-sage-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-sage/20">
                {t.events.rsvpByEmail}
              </a>
            </div>
          </Animate>
        </div>
      </section>

      {/* In this session */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">{t.events.inThisSessionEyebrow}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">{t.events.inThisSessionHeading}</h2>
          </Animate>
        </div>
        <div className="mt-14 mx-auto max-w-6xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rhythmItems.map((item, i) => (
            <Animate key={item.title} delay={(i * 100) as 0 | 100 | 200}>
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <p className="font-display text-3xl text-terracotta/60">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-xl text-burgundy">{item.title}</h3>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{i === 0 ? t.events.speakerPlaceholder : item.text}</p>
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
              {detailsRows.map((row) => (
                <div key={row.label} className="grid sm:grid-cols-3 gap-1 sm:gap-4 p-6">
                  <p className="text-sm tracking-[0.15em] text-terracotta sm:col-span-1">{row.label.toUpperCase()}</p>
                  <p className="text-foreground/85 sm:col-span-2">{row.value}</p>
                </div>
              ))}
            </div>
          </Animate>
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
            <p className="mt-6 text-lg text-primary-foreground/85 leading-relaxed">{t.events.ctaBand.editionBody.replace("{title}", event.title)}</p>
          </Animate>
          <Animate delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={mailto} className="px-7 py-4 rounded-full bg-accent text-accent-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
                {t.events.rsvpByEmail}
              </a>
              <Link to={"/$lang/events"} params={{ lang }} className="px-7 py-4 rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all">
                {t.events.ctaBand.seeOtherDates}
              </Link>
            </div>
          </Animate>
          <Animate delay={300}>
            <p className="mt-6 text-sm text-primary-foreground/70">{t.events.ctaBand.emailNote}</p>
          </Animate>
        </div>
      </section>

      {/* Next edition */}
      {nextEvent && (
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 flex justify-end">
            <Animate>
              <Link to={"/$lang/events/$slug"} params={{ lang, slug: nextEvent.slug }} className="text-sm text-burgundy hover:text-terracotta transition-colors">
                {t.events.nextEditionLabel}: {nextEvent.title} →
              </Link>
            </Animate>
          </div>
        </section>
      )}
    </>
  );
}
