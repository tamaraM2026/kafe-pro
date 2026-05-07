export function SiteFooter() {
  return (
    <footer className="bg-burgundy text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl mb-3">Kafe con Propósito</h3>
          <p className="text-sm opacity-80">A women's circle in Central Bohemia. Real conversations over really good coffee.</p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Follow us</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="https://www.instagram.com/kafeconproposito/" className="hover:text-accent">Instagram</a></li>
            <li><a href="https://www.facebook.com/groups/kafeconproposito" className="hover:text-accent">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/kafe-con-prop%C3%B3sito" className="hover:text-accent">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Where</h4>
          <p className="text-sm opacity-80">Central Bohemia · Poděbrady · Prague<br/>Twice a month · EN · ES · CZ</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Kafe con Propósito · Women's Circle
      </div>
    </footer>
  );
}
