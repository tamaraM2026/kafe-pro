import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { Animate } from "@/components/Animate";
import { useTranslations, useLang } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";
import heroImg from "@/assets/unveiled/hero.jpg";
import reflectionImg from "@/assets/unveiled/reflection.jpg";
import shadowImg from "@/assets/unveiled/shadow.jpg";
import pillarMindsetImg from "@/assets/unveiled/pillar-mindset.jpg";
import pillarBodyImg from "@/assets/unveiled/pillar-body.jpg";
import pillarPortraitImg from "@/assets/unveiled/pillar-portrait.jpg";
import slideMindsetImg from "@/assets/unveiled/slide-mindset.jpg";
import slideBodyImg from "@/assets/unveiled/slide-body.png";
import slidePortraitImg from "@/assets/unveiled/slide-portrait.png";
import guidePetraImg from "@/assets/unveiled/guide-petra.jpg";
import guideAdelaImg from "@/assets/unveiled/guide-adela.jpg";
import guideTamaraImg from "@/assets/unveiled/guide-tamara.jpg";
import noFilters1Img from "@/assets/unveiled/no-filters-1.jpg";
import noFilters2Img from "@/assets/unveiled/no-filters-2.jpg";
import venueImg from "@/assets/unveiled/venue.jpg";

const pillarImages = [pillarMindsetImg, pillarBodyImg, pillarPortraitImg];
const guideImages = [guidePetraImg, guideAdelaImg, guideTamaraImg];

const slideImages = [slideMindsetImg, slideBodyImg, slidePortraitImg];

function Slideshow({ slides }: { slides: Array<{ image: string; title: string; subtitle: string; cta: string; href: string }> }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 h-full flex flex-col items-start justify-center px-8 md:px-20 max-w-4xl">
            <h2 className="font-display text-5xl md:text-7xl text-white leading-[1.1]">{slide.title}</h2>
            <p className="mt-2 font-display text-3xl md:text-5xl text-white/90 italic whitespace-pre-line">{slide.subtitle}</p>
            <a href={slide.href} target={slide.href.startsWith("http") ? "_blank" : undefined} rel={slide.href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-8 px-8 py-3 rounded-full bg-burgundy/80 text-white hover:bg-burgundy transition-colors text-lg">
              {slide.cta}
            </a>
          </div>
        </div>
      ))}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white transition-colors" aria-label="Previous slide">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white transition-colors" aria-label="Next slide">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 6 15 12 9 18" /></svg>
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"}`} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

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

const TIER_URLS = [
  "https://forms.gle/vkRbreRKs5XzrtxS9",
  "https://docs.google.com/forms/d/e/1FAIpQLScqyYdEznXOCFoUjCRdsGq8_9NzvJ9OyiPjMjiIq5fp6mOw4Q/viewform?usp=sharing",
  "https://forms.gle/biZVdgfEf7Bwgs6w7",
];

function UnveiledExperiencePage() {
  const t = useTranslations();
  const lang = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
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
              <p className="mt-6 text-xl text-foreground/75 leading-relaxed">
                {t.unveiled.heroSub}
              </p>
            </Animate>
            <Animate delay={300}>
              <a
                href="#pricing"
                className="mt-8 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {t.unveiled.reserveCta}
              </a>
            </Animate>
          </div>
          <Animate delay={200}>
            <div className="relative">
              <div className="absolute -inset-6 bg-terracotta/10 rounded-[3rem] -rotate-2" aria-hidden />
              <img src={heroImg} alt="" width={800} height={534} className="relative rounded-[2.5rem] shadow-2xl object-cover w-full aspect-[5/4]" />
            </div>
          </Animate>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <Animate>
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <img src={reflectionImg} alt="" width={600} height={900} className="shadow-2xl object-cover w-full aspect-[3/4] hover:scale-105 transition-transform duration-700" />
            </div>
          </Animate>
          <div>
            <Animate>
              <h2 className="font-display text-4xl md:text-5xl text-burgundy leading-tight">
                {t.unveiled.reflectionHeading}
              </h2>
            </Animate>
            <Animate delay={100}>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                {t.unveiled.reflectionText}
              </p>
            </Animate>
          </div>
        </div>
      </section>

      {/* From Shadow to Soul */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
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
          <Animate delay={200}>
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <img src={shadowImg} alt="" width={800} height={630} className="shadow-2xl object-cover w-full aspect-[5/4] hover:scale-105 transition-transform duration-700" />
            </div>
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
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="overflow-hidden">
                    <img src={pillarImages[i]} alt={p.title} className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="font-display text-2xl text-burgundy">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs tracking-[0.2em] text-terracotta">
                      {p.subtitle.toUpperCase()}
                    </p>
                    <p className="mt-4 text-foreground/80 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </article>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <Slideshow slides={[
        { image: slideImages[0], title: "Mindset", subtitle: "Deep-Dive", cta: "Join us", href: "#pricing" },
        { image: slideImages[1], title: "Mastering", subtitle: "Body\nConfidence", cta: "Join us", href: "#pricing" },
        { image: slideImages[2], title: "THE UNVEILED", subtitle: "Portrait\nSession", cta: "Claim your Early bird", href: TIER_URLS[0] },
      ]} />

      {/* No Filters */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <Animate>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy text-center">
              {t.unveiled.noFiltersHeading}
            </h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed text-center max-w-2xl mx-auto">
              {t.unveiled.noFiltersText}
            </p>
          </Animate>
          <Animate delay={200}>
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img src={noFilters1Img} alt="" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img src={noFilters2Img} alt="" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
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
                <article className="bg-white/50 backdrop-blur-sm rounded-3xl border border-white/30 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="overflow-hidden">
                    <img src={guideImages[i]} alt={g.name} className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl text-burgundy">
                      {g.name}
                    </h3>
                    <p className="mt-1 text-sm text-terracotta">{g.role}</p>
                    <p className="mt-4 text-foreground/80 leading-relaxed">
                      {g.bio}
                    </p>
                  </div>
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
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <Animate>
            <div className="text-center md:text-left">
              <h2 className="font-display text-4xl md:text-5xl">
                {t.unveiled.eventHeading}
              </h2>
              <div className="mt-10 space-y-4 text-lg">
                <p className="text-primary-foreground/90">{t.unveiled.eventDate}</p>
                <p className="text-primary-foreground/90">{t.unveiled.eventTime}</p>
                <p className="text-primary-foreground/90">{t.unveiled.eventLocation}</p>
              </div>
            </div>
          </Animate>
          <Animate delay={100}>
            <div className="overflow-hidden rounded-2xl">
              <img src={venueImg} alt="" className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg opacity-90" />
            </div>
          </Animate>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28" id="pricing">
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
                      href={TIER_URLS[i]}
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
              href="#pricing"
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
