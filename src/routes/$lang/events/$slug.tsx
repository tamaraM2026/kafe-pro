import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";
import type { Translations } from "@/i18n/types";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/web3forms";
import paymentQr from "@/assets/payment/payment-qr.jpg";

type EventItem = Translations["events"]["list"][number];

function buildRsvpSubject(title: string, dateOnly: string) {
  return `RSVP: ${title} – ${dateOnly}`;
}

function RsvpForm({ event, tone }: { event: EventItem; tone: "sage" | "accent" }) {
  const t = useTranslations();
  const dateOnly = event.dateLabel.split(" · ")[0];

  const btnClass =
    tone === "sage"
      ? "px-7 py-4 rounded-full bg-gradient-to-r from-sage to-sage/80 text-sage-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-sage/20"
      : "px-7 py-4 rounded-full bg-accent text-accent-foreground hover:scale-[1.02] active:scale-[0.98] transition-all";

  const inputClass =
    tone === "sage"
      ? "w-full rounded-xl border border-white/40 bg-white/60 backdrop-blur-sm px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-terracotta transition-shadow"
      : "w-full rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:ring-2 focus:ring-accent transition-shadow";

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="w-full max-w-sm mx-auto text-left space-y-3"
    >
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value={buildRsvpSubject(event.title, dateOnly)} />
      <input type="hidden" name="from_name" value="Kafe con Propósito website" />
      <input type="hidden" name="redirect" value="https://kafeconproposito.com/en/rsvp-thank-you" />
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />
      <input
        required
        name="name"
        placeholder={t.events.rsvpNamePlaceholder}
        className={inputClass}
      />
      <input
        required
        type="email"
        name="email"
        placeholder={t.events.rsvpEmailPlaceholder}
        className={inputClass}
      />
      <div className={tone === "sage" ? "text-sm text-foreground/75" : "text-sm text-primary-foreground/75"}>
        <span>{t.events.rsvpDinnerLabel}</span>
        <div className="mt-2 flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="dinner"
              value={t.events.rsvpDinnerYes}
              defaultChecked
            />
            {t.events.rsvpDinnerYes}
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="dinner"
              value={t.events.rsvpDinnerNo}
            />
            {t.events.rsvpDinnerNo}
          </label>
        </div>
      </div>
      <button type="submit" className={`${btnClass} w-full`}>
        {t.events.rsvpSubmitCta}
      </button>
    </form>
  );
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
              <RsvpForm event={event} tone="sage" />
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
              <div className="grid sm:grid-cols-3 gap-4 p-6 items-center">
                <p className="text-sm tracking-[0.15em] text-terracotta sm:col-span-1">PAY BY QR</p>
                <div className="sm:col-span-2 flex flex-col items-start gap-2">
                  <img
                    src={paymentQr}
                    alt="Scan to pay for this event"
                    className="w-40 h-40 rounded-xl border border-white/40 bg-white p-2"
                  />
                  <p className="text-sm text-foreground/60">Scan to pay by QR code</p>
                  <p className="text-sm text-foreground/60">Once you've finalized payment, send your RSVP.</p>
                </div>
              </div>
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
              <Link to={"/$lang/events"} params={{ lang }} className="px-7 py-4 rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all whitespace-nowrap">
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
