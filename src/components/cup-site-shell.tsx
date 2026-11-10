import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/zaheer-cup-logo.jpg";

const NAV_LINKS = [
  { label: "Matches", to: "/matches" },
  { label: "Tournament", to: "/tournament" },
  { label: "History", to: "/history" },
  { label: "Teams", to: "/teams" },
  { label: "Leadership · MP 2027", to: "/leadership" },
] as const;

export function CupSiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CupSiteHeader />
      {children}
      <CupSiteFooter />
    </div>
  );
}

export function CupPageIntro({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/30" />
      <div className="container-x mx-auto flex min-h-[340px] max-w-7xl flex-col justify-end py-14 sm:min-h-[410px] sm:py-16">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-gold">
          <span className="h-px w-7 bg-gold" /> {eyebrow}
        </div>
        <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.95] sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}

export function CupSectionTitle({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-gold">
          <span className="h-px w-6 bg-gold" /> {eyebrow}
        </div>
        <h2 className="mt-3 font-display text-4xl uppercase leading-none sm:text-5xl">{title}</h2>
      </div>
      {note && <p className="max-w-xs text-xs uppercase leading-relaxed text-muted-foreground">{note}</p>}
    </div>
  );
}

function CupSiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="container-x mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-3">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Zaheer Jhanda Cup home">
          <img src={logoAsset} alt="" className="h-11 w-11 shrink-0 rounded-full object-cover" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base uppercase sm:text-lg">Zaheer Jhanda Cup</span>
            <span className="block text-[9px] uppercase text-muted-foreground">Nyaribari Chache · Kenya</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-4 xl:flex" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="whitespace-nowrap text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button asChild className="hidden rounded-sm bg-gold px-3 font-bold text-primary-foreground hover:bg-gold/90 sm:inline-flex">
            <Link to="/register">Register <ArrowRight aria-hidden="true" /></Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="xl:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      {menuOpen && (
        <nav className="border-t border-border bg-background px-5 py-3 xl:hidden" aria-label="Mobile navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-border py-3 text-sm font-medium last:border-0"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-gold px-4 py-3 text-sm font-bold text-primary-foreground"
          >
            Register Team <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  );
}

function CupSiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-x mx-auto flex max-w-7xl flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset} alt="" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-base uppercase">Zaheer Jhanda Cup</span>
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground" aria-label="Footer navigation">
          {NAV_LINKS.map((item) => (
            <Link key={item.to} to={item.to} className="transition-colors hover:text-gold">{item.label}</Link>
          ))}
          <Link to="/register" className="text-gold">Register team</Link>
        </nav>
      </div>
      <div className="border-t border-border py-3 text-center text-[9px] uppercase text-muted-foreground">
        © {new Date().getFullYear()} Zaheer Jhanda Cup · Nyaribari Chache, Kenya
      </div>
    </footer>
  );
}