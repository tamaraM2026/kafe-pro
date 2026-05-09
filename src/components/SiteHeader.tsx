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

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Kafe con Propósito" width={80} height={80} className="h-20 w-20" />
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
        </nav>
        <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
          <span>EN</span><span>·</span><span>ES</span><span>·</span><span>CZ</span>
        </div>
      </div>
    </header>
  );
}
