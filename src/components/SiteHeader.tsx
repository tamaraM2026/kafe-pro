import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { getTranslations } from "@/i18n";

function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const location = useLocation();
  const pathAfterLang = location.pathname.replace(/^\/(en|cs|es)/, "") || "/";

  const langs = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "cs", label: "CZ" },
  ];

  return (
    <div className="flex items-center gap-1 text-xs">
      {langs.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && <span className="text-muted-foreground mx-1">&middot;</span>}
          <Link
            to={`/${l.code}${pathAfterLang}`}
            className={`transition-colors ${
              currentLang === l.code
                ? "text-burgundy font-semibold"
                : "text-muted-foreground hover:text-burgundy"
            }`}
          >
            {l.label}
          </Link>
        </span>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const lang = location.pathname.split("/")[1] || "en";
  const t = getTranslations(lang);

  const nav = [
    { to: "/", label: t.common.nav.home },
    { to: "/about", label: t.common.nav.about },
    { to: "/founder", label: t.common.nav.founder },
    { to: "/memberships", label: t.common.nav.memberships },
    { to: "/community", label: t.common.nav.community },
    { to: "/contact", label: t.common.nav.contact },
  ];

  const programmes = [
    { to: "/business-building-blocks", label: t.common.programmesItems.bbb },
    { to: "/10x-productive", label: t.common.programmesItems.tenx },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function langPath(to: string) {
    return `/${lang}${to === "/" ? "/" : to}`;
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/70 border-white/30 shadow-sm py-2"
            : "bg-white/50 border-white/20 py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between gap-6">
          <Link to={langPath("/")} className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kafe con Propósito"
              width={112}
              height={112}
              className={`object-contain mix-blend-multiply transition-all duration-300 ${
                scrolled ? "h-16 w-16" : "h-24 w-24 md:h-28 md:w-28"
              }`}
            />
            <span className="font-display text-xl md:text-2xl text-burgundy tracking-tight">
              Kafe con Propósito
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={langPath(n.to)}
                className="relative px-4 py-2 rounded-full text-sm text-foreground/80 hover:text-burgundy transition-colors after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-burgundy after:transition-all after:duration-300 hover:after:w-1/2"
                activeProps={{
                  className:
                    "relative px-4 py-2 rounded-full text-sm text-burgundy after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-1/2 after:bg-burgundy",
                }}
              >
                {n.label}
              </Link>
            ))}
            <div className="relative group">
              <button
                type="button"
                className="px-4 py-2 rounded-full text-sm text-foreground/80 hover:text-burgundy transition-colors"
              >
                {t.common.programmesLabel} ▾
              </button>
              <div className="absolute right-0 top-full pt-2 hidden group-hover:block group-focus-within:block z-50">
                <div className="min-w-[240px] bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg p-2">
                  {programmes.map((p) => (
                    <Link
                      key={p.to}
                      to={langPath(p.to)}
                      className="block px-4 py-2 rounded-xl text-sm text-foreground/80 hover:text-burgundy hover:bg-white/50 transition-colors"
                      activeProps={{
                        className:
                          "block px-4 py-2 rounded-xl text-sm bg-white/50 text-burgundy",
                      }}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center">
            <LanguageSwitcher currentLang={lang} />
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-foreground/80 hover:text-burgundy transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
          />
          <nav className="absolute right-0 top-0 h-full w-72 bg-white/90 backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-2 animate-in visible"
            style={{ transform: "none", opacity: 1 }}
          >
            <button
              type="button"
              className="self-end p-2 text-foreground/80 hover:text-burgundy"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {nav.map((n) => (
              <Link
                key={n.to}
                to={langPath(n.to)}
                className="px-4 py-3 rounded-xl text-foreground/80 hover:text-burgundy hover:bg-cream/50 transition-colors"
                activeProps={{ className: "px-4 py-3 rounded-xl text-burgundy bg-cream/50" }}
                onClick={() => setMobileOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="border-t border-border/30 my-2" />
            <p className="px-4 text-xs text-muted-foreground tracking-widest">{t.common.programmesLabel.toUpperCase()}</p>
            {programmes.map((p) => (
              <Link
                key={p.to}
                to={langPath(p.to)}
                className="px-4 py-3 rounded-xl text-foreground/80 hover:text-burgundy hover:bg-cream/50 transition-colors"
                activeProps={{ className: "px-4 py-3 rounded-xl text-burgundy bg-cream/50" }}
                onClick={() => setMobileOpen(false)}
              >
                {p.label}
              </Link>
            ))}
            <div className="border-t border-border/30 my-2" />
            <div className="px-4">
              <LanguageSwitcher currentLang={lang} />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
