import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";
import { useTranslations } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";
import valeriaImg from "@/assets/testimonial-valeria.jpg";
import adelaImg from "@/assets/testimonial-adela.jpg";
import irenaImg from "@/assets/testimonial-irena.jpg";

const testimonialImages = [valeriaImg, adelaImg, irenaImg];

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    const pagePath = "/about";
    return {
      meta: [
        { title: t.meta.aboutTitle },
        { name: "description", content: t.meta.aboutDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: `/en${pagePath}` },
        { rel: "alternate", hreflang: "cs", href: `/cs${pagePath}` },
        { rel: "alternate", hreflang: "es", href: `/es${pagePath}` },
        { rel: "alternate", hreflang: "x-default", href: `/en${pagePath}` },
      ],
    };
  },
  component: About,
});

function About() {
  const t = useTranslations();

  return (
    <div>
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">{t.about.label}</p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">{t.about.heading}</h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-8 text-xl text-foreground/75 leading-relaxed">
              {t.about.intro}
            </p>
          </Animate>
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <Animate>
            <h2 className="font-display text-4xl text-burgundy text-center">{t.about.testimonialsHeading}</h2>
            <p className="text-center text-muted-foreground mt-2">{t.about.testimonialsSubheading}</p>
          </Animate>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {t.about.testimonials.map((item, i) => (
              <Animate key={item.name} delay={(i * 100) as 0 | 100 | 200}>
                <figure className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={testimonialImages[i]} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
                    <span className="text-sm tracking-[0.2em] text-terracotta">{item.name.toUpperCase()}</span>
                  </div>
                  <blockquote className="font-display text-lg italic text-foreground/85 leading-relaxed">"{item.text}"</blockquote>
                </figure>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Animate>
            <h2 className="font-display text-4xl text-burgundy text-center">{t.about.faqHeading}</h2>
          </Animate>
          <div className="mt-12 space-y-4">
            {t.about.faqs.map((f, i) => (
              <Animate key={f.q} delay={(i * 100) as 0 | 100 | 200 | 300 | 400}>
                <details className="group bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 open:shadow-md transition-all duration-300 hover:bg-white/70">
                  <summary className="cursor-pointer font-display text-xl text-burgundy flex items-center justify-between">
                    {f.q}
                    <span className="text-terracotta group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-foreground/75 leading-relaxed">{f.a}</p>
                </details>
              </Animate>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
