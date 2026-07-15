import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Animate } from "@/components/Animate";
import { useTranslations } from "@/hooks/use-translations";
import { getTranslations } from "@/i18n";

export const Route = createFileRoute("/$lang/contact")({
  head: ({ params }) => {
    const t = getTranslations(params.lang);
    const pagePath = "/contact";
    return {
      meta: [
        { title: t.meta.contactTitle },
        { name: "description", content: t.meta.contactDescription },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: `/en${pagePath}` },
        { rel: "alternate", hreflang: "x-default", href: `/en${pagePath}` },
      ],
    };
  },
  component: Contact,
});

function Contact() {
  const t = useTranslations();
  const [sent, setSent] = useState(false);

  return (
    <section className="py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Animate>
          <p className="text-xs tracking-[0.25em] text-terracotta text-center">{t.contact.label}</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent text-center">{t.contact.heading}</h1>
        </Animate>
        <Animate delay={100}>
          <p className="mt-6 text-center text-foreground/75 max-w-xl mx-auto">
            {t.contact.intro}
          </p>
        </Animate>

        <Animate delay={200}>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-12 bg-white/50 backdrop-blur-sm border border-white/30 rounded-3xl p-8 space-y-5 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-sm text-foreground/75">{t.contact.nameLabel}</span>
                <input required className="mt-2 w-full rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm px-4 py-3 outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
              </label>
              <label className="block">
                <span className="text-sm text-foreground/75">{t.contact.emailLabel}</span>
                <input required type="email" className="mt-2 w-full rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm px-4 py-3 outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-foreground/75">{t.contact.messageLabel}</span>
              <textarea required rows={5} className="mt-2 w-full rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm px-4 py-3 outline-none focus:ring-2 focus:ring-terracotta transition-shadow" />
            </label>
            <button type="submit" className="w-full md:w-auto px-7 py-4 rounded-full bg-gradient-to-r from-burgundy to-burgundy/80 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all">
              {t.contact.submitButton}
            </button>
            {sent && <p className="text-sage text-sm animate-in visible" style={{ transform: "none" }}>{t.contact.successMessage}</p>}
          </form>
        </Animate>

        <Animate delay={300}>
          <div className="mt-12 text-center text-sm text-muted-foreground">
            {t.contact.followText}{" "}
            <a className="text-terracotta hover:underline" href="https://www.instagram.com/kafeconproposito/">Instagram</a>,{" "}
            <a className="text-terracotta hover:underline" href="https://www.facebook.com/groups/kafeconproposito">Facebook</a>,{" "}
            <a className="text-terracotta hover:underline" href="https://www.linkedin.com/company/kafe-con-prop%C3%B3sito">LinkedIn</a>.
          </div>
        </Animate>
      </div>
    </section>
  );
}
