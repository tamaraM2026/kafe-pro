import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "What Kafe is" },
  { to: "/founder", label: "Founder" },
  { to: "/memberships", label: "Memberships" },
  { to: "/community", label: "Community" },
  { to: "/cesky", label: "Česky" },
  { to: "/contact", label: "Contact" },
];

const programmes = [
  { to: "/business-building-blocks", label: "Business Building Blocks" },
];


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Kafe con Propósito" width={112} height={112} className="h-24 w-24 md:h-28 md:w-28 object-contain" />
          <span className="font-display text-xl md:text-2xl text-burgundy tracking-tight">
            Kafe con Propósito
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 rounded-full text-sm text-foreground/80 hover:text-burgundy hover:bg-cream transition-colors"
              activeProps={{ className: "px-4 py-2 rounded-full text-sm bg-cream text-burgundy" }}
            >
              {n.label}
            </Link>
          ))}
          <div className="relative group">
            <button
              type="button"
              className="px-4 py-2 rounded-full text-sm text-foreground/80 hover:text-burgundy hover:bg-cream transition-colors"
            >
              Programmes ▾
            </button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block group-focus-within:block z-50">
              <div className="min-w-[240px] bg-background border border-border rounded-2xl shadow-lg p-2">
                {programmes.map((p) => (
                  <Link
                    key={p.to}
                    to={p.to}
                    className="block px-4 py-2 rounded-xl text-sm text-foreground/80 hover:text-burgundy hover:bg-cream transition-colors"
                    activeProps={{ className: "block px-4 py-2 rounded-xl text-sm bg-cream text-burgundy" }}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
          <span>EN</span><span>·</span><span>ES</span><span>·</span><span>CZ</span>
        </div>

      </div>
    </header>
  );
}
