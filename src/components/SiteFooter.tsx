import logo from "@/assets/logo.png";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/kafeconproposito/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/groups/kafeconproposito",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/kafe-con-prop%C3%B3sito",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-burgundy/95 backdrop-blur-xl text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <img src={logo} alt="" width={56} height={56} className="h-14 w-14 object-contain brightness-0 invert opacity-80" />
          <h3 className="font-display text-2xl">Kafe con Propósito</h3>
          <p className="text-sm opacity-70">A women's circle in Central Bohemia. Real conversations over really good coffee.</p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="/about" className="hover:text-accent transition-colors">What Kafe is</a></li>
            <li><a href="/founder" className="hover:text-accent transition-colors">Founder</a></li>
            <li><a href="/memberships" className="hover:text-accent transition-colors">Memberships</a></li>
            <li><a href="/community" className="hover:text-accent transition-colors">Community</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Follow us</h4>
          <ul className="space-y-3">
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all group"
                >
                  <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Where</h4>
          <p className="text-sm opacity-70">Central Bohemia · Poděbrady · Prague</p>
          <p className="text-sm opacity-70 mt-2">Twice a month · EN · ES · CZ</p>
          <a href="/contact" className="mt-4 inline-block text-sm text-accent hover:underline underline-offset-4 transition-colors">
            Get in touch →
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Kafe con Propósito · Women's Circle
      </div>
    </footer>
  );
}
