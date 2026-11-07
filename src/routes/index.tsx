import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  MapPin,
  Play,
  Radio,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import heroAsset from "@/assets/ebunda-teams.jpg.asset.json";
import womensAsset from "@/assets/women-league.jpg.asset.json";
import keeperAsset from "@/assets/highlight-week.jpg.asset.json";
import portraitAsset from "@/assets/moses-oira-mp.jpg.asset.json";
import logoImg from "@/assets/logo.png";

const heroImg = heroAsset.url;
const womensImg = womensAsset.url;
const keeperImg = keeperAsset.url;
const fansImg = heroAsset.url;
const portraitImg = portraitAsset.url;

export const Route = createFileRoute("/")({
  component: Home,
});

const TEAMS = [
  "Getacho", "Chibwobi", "Omobera", "Kiomiti", "Getare", "Ikenye",
  "Nyamesocho", "Mesabisabi", "Raganga", "Masabo", "Chironge",
  "Nyangonda", "Geteri", "Emonga",
];

const MATCHES = [
  {
    status: "LIVE", minute: "67'", date: "Today", time: "16:00",
    home: "Getacho", away: "Chibwobi", homeScore: 2, awayScore: 1,
    venue: "Keroka Stadium", category: "Men",
  },
  {
    status: "UPCOMING", date: "Sat, Aug 17", time: "15:30",
    home: "Nyamesocho", away: "Raganga", venue: "Ekerenyo Grounds", category: "Women",
  },
  {
    status: "UPCOMING", date: "Sun, Aug 18", time: "16:00",
    home: "Ikenye", away: "Chironge", venue: "Masaba Field", category: "Men",
  },
  {
    status: "FULL TIME", date: "Aug 10", time: "16:00",
    home: "Emonga", away: "Kiomiti", homeScore: 3, awayScore: 3,
    venue: "Keroka Stadium", category: "Men",
  },
  {
    status: "UPCOMING", date: "Fri, Aug 23", time: "17:00",
    home: "Mesabisabi", away: "Nyangonda", venue: "Getare Sports Park", category: "Women",
  },
];

const STANDINGS = [
  { p: 1, team: "Getacho", mp: 8, w: 7, d: 1, l: 0, gd: "+18", pts: 22 },
  { p: 2, team: "Ikenye", mp: 8, w: 6, d: 1, l: 1, gd: "+11", pts: 19 },
  { p: 3, team: "Chironge", mp: 8, w: 5, d: 2, l: 1, gd: "+7", pts: 17 },
  { p: 4, team: "Emonga", mp: 8, w: 4, d: 3, l: 1, gd: "+5", pts: 15 },
  { p: 5, team: "Chibwobi", mp: 8, w: 4, d: 2, l: 2, gd: "+2", pts: 14 },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <MatchesSection />
      <TournamentInfo />
      <StandingsPreview />
      <TeamsSection />
      <EbundaMP />
      <NewsPreview />
      <RegisterCTA />
      <Footer />
    </div>
  );
}

function Header() {
  const nav = [
    { label: "Matches", to: "#matches" },
    { label: "Tournament", to: "#standings" },
    { label: "News", to: "#news" },
    { label: "MP 2027", to: "#mp2027" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="container-x mx-auto flex h-18 max-w-7xl items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoImg} alt="Ebunda Cup" width={40} height={40} className="h-10 w-10" />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide">EBUNDA CUP</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Nyaribari Masaba
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a key={n.label} href={n.to} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#register" className="btn-gold">
          Register Team <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" width={1920} height={1200} className="h-full w-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="container-x relative mx-auto max-w-7xl py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="chip">
            <span className="live-dot" /> Season 2026 · Men & Women
          </span>
          <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
            The Pride of<br />
            <span className="text-gold">Nyaribari</span> Masaba
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            The Ebunda Cup is where the villages come to compete. 14 teams. Men's & Women's categories. August and December — every year.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#register" className="btn-gold">
              Register Your Team <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#live" className="btn-ghost-gold">
              <Play className="h-4 w-4 fill-current" /> Watch Live
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <Stat kicker="Teams" value="14" />
            <Stat kicker="Categories" value="M+W" />
            <Stat kicker="Editions / yr" value="2" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ kicker, value }: { kicker: string; value: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-gold md:text-5xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{kicker}</div>
    </div>
  );
}

function Marquee() {
  const items = [...TEAMS, ...TEAMS];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-surface/50 py-5">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-3 font-display text-xl uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function MatchesSection() {
  const loop = [...MATCHES, ...MATCHES];
  return (
    <section id="live" className="container-x mx-auto max-w-7xl py-20 md:py-28">
      <SectionHead
        kicker="Fixtures & Results"
        title="Live & Upcoming"
        cta="View full schedule"
      />
      <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="matches-track flex w-max gap-5 group-hover:[animation-play-state:paused]">
          {loop.map((m, i) => (
            <MatchCard key={i} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}


function MatchCard({ m }: { m: (typeof MATCHES)[number] }) {
  const isLive = m.status === "LIVE";
  const isDone = m.status === "FULL TIME";
  return (
    <article className="group w-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/8 bg-card/60 backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em]">
          {isLive ? (
            <>
              <span className="live-dot" />
              <span className="text-live">LIVE · {m.minute}</span>
            </>
          ) : isDone ? (
            <span className="text-muted-foreground">Full Time</span>
          ) : (
            <span className="text-gold">Upcoming</span>
          )}
        </div>
        <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{m.category}</span>
      </div>

      <div className="px-5 py-6">
        <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> {m.date} · {m.time}</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {m.venue.split(" ")[0]}</span>
        </div>
        <TeamRow name={m.home} score={m.homeScore} />
        <div className="my-2.5 h-px bg-white/5" />
        <TeamRow name={m.away} score={m.awayScore} />
      </div>

      <div className="border-t border-white/5 px-5 py-4">
        {isLive ? (
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110">
            <Play className="h-3.5 w-3.5 fill-current" /> Watch Live
          </button>
        ) : isDone ? (
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 py-2.5 text-sm font-semibold text-foreground/80 transition hover:border-gold/40 hover:text-gold">
            Match Report <ArrowRight className="h-3.5 w-3.5" />
          </button>
        ) : (
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gold/40 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold/10">
            Set Reminder
          </button>
        )}
      </div>
    </article>
  );
}

function TeamRow({ name, score }: { name: string; score?: number }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold/30 to-gold/5 font-display text-sm text-gold ring-1 ring-gold/20">
          {name.slice(0, 2).toUpperCase()}
        </div>
        <span className="font-semibold">{name}</span>
      </div>
      <span className="font-display text-2xl">{score ?? "–"}</span>
    </div>
  );
}

function SectionHead({ kicker, title, cta }: { kicker: string; title: string; cta?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{kicker}</div>
        <h2 className="mt-2 font-display text-4xl uppercase md:text-5xl lg:text-6xl">{title}</h2>
      </div>
      {cta && (
        <a href="#" className="group flex items-center gap-1 text-sm font-semibold text-muted-foreground transition hover:text-gold">
          {cta} <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}

function TournamentInfo() {
  const cards = [
    { icon: Trophy, title: "Two Editions", body: "August & December every year — dry season derbies and festive-season finals." },
    { icon: Users, title: "Men's & Women's", body: "Equal spotlight. Equal pitch. Equal glory across both categories." },
    { icon: ShieldCheck, title: "14 Villages", body: "One representative team per village competing for the Ebunda Cup." },
    { icon: Radio, title: "Streamed Live", body: "Every knockout match streamed live for the diaspora and beyond." },
  ];
  return (
    <section className="container-x mx-auto max-w-7xl py-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <div key={i} className="group rounded-2xl border border-white/8 bg-surface/60 p-6 transition hover:border-gold/40 hover:bg-surface">
            <c.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl uppercase tracking-wide">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StandingsPreview() {
  return (
    <section className="container-x mx-auto max-w-7xl py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div>
          <SectionHead kicker="Men's League" title="Standings" cta="Full table" />
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/8 bg-card/60">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  <th className="px-4 py-3 text-left font-semibold">#</th>
                  <th className="px-4 py-3 text-left font-semibold">Team</th>
                  <th className="hidden px-3 py-3 text-center font-semibold sm:table-cell">MP</th>
                  <th className="hidden px-3 py-3 text-center font-semibold sm:table-cell">W</th>
                  <th className="hidden px-3 py-3 text-center font-semibold sm:table-cell">D</th>
                  <th className="hidden px-3 py-3 text-center font-semibold sm:table-cell">L</th>
                  <th className="px-3 py-3 text-center font-semibold">GD</th>
                  <th className="px-4 py-3 text-center font-semibold text-gold">PTS</th>
                </tr>
              </thead>
              <tbody>
                {STANDINGS.map((r) => (
                  <tr key={r.p} className="border-b border-white/5 last:border-0 transition hover:bg-white/[0.02]">
                    <td className="px-4 py-3.5 font-display text-lg text-gold">{r.p}</td>
                    <td className="px-4 py-3.5 font-semibold">{r.team}</td>
                    <td className="hidden px-3 py-3.5 text-center text-muted-foreground sm:table-cell">{r.mp}</td>
                    <td className="hidden px-3 py-3.5 text-center text-muted-foreground sm:table-cell">{r.w}</td>
                    <td className="hidden px-3 py-3.5 text-center text-muted-foreground sm:table-cell">{r.d}</td>
                    <td className="hidden px-3 py-3.5 text-center text-muted-foreground sm:table-cell">{r.l}</td>
                    <td className="px-3 py-3.5 text-center text-muted-foreground">{r.gd}</td>
                    <td className="px-4 py-3.5 text-center font-display text-lg">{r.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <FeatureImage src={womensImg} label="Women's Category" tag="On the pitch" />
          <FeatureImage src={keeperImg} label="Highlight of the Week" tag="Save of the day" />
          <div className="col-span-2">
            <FeatureImage src={fansImg} label="Fans of Nyaribari" tag="Community" wide />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureImage({ src, label, tag, wide }: { src: string; label: string; tag: string; wide?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/8 ${wide ? "aspect-[16/8]" : "aspect-[4/5]"}`}>
      <img src={src} alt={label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">{tag}</div>
        <div className="mt-1 font-display text-lg uppercase">{label}</div>
      </div>
    </div>
  );
}

function TeamsSection() {
  return (
    <section className="border-y border-white/5 bg-surface/40 py-20 md:py-28">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHead kicker="The Field" title="14 Teams. One Cup." cta="All teams" />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {TEAMS.map((t) => (
            <a key={t} href="#" className="group flex flex-col items-center gap-3 rounded-xl border border-white/8 bg-card/40 px-3 py-5 transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-card">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold/25 to-gold/5 font-display text-lg text-gold ring-1 ring-gold/20 transition group-hover:ring-gold/60">
                {t.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-center text-sm font-semibold">{t}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function EbundaMP() {
  return (
    <section className="container-x mx-auto max-w-7xl py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-surface via-background to-surface p-8 md:p-14">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-gold/30">
              <img src={portraitImg} alt="Eng. Moses Oira (Ebunda)" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-gold px-4 py-3 shadow-[var(--shadow-glow)]">
              <div className="font-display text-2xl text-primary-foreground leading-none">2027</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground/80">MP Aspirant</div>
            </div>
          </div>

          <div>
            <span className="chip">Ebunda MP 2027</span>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] md:text-6xl">
              Eng. Moses Oira
              <span className="block text-gold">"Ebunda"</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              A son of Nyaribari Masaba. An engineer by profession. A convener of communities through sport. The Ebunda Cup is his gift to our young people — a place to compete, to belong, and to be seen.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              In 2027, he's stepping forward to represent us in parliament.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="btn-gold">Read the Vision <ArrowRight className="h-4 w-4" /></a>
              <a href="#" className="btn-ghost-gold">Volunteer</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsPreview() {
  const posts = [
    { tag: "Match Report", title: "Getacho edge Chibwobi in five-goal Keroka thriller", date: "Aug 12" },
    { tag: "Community", title: "Ebunda Cup expands girls' academy to four sub-locations", date: "Aug 9" },
    { tag: "Feature", title: "Meet the top scorers of the 2026 August edition", date: "Aug 5" },
  ];
  return (
    <section className="container-x mx-auto max-w-7xl py-20 md:py-28">
      <SectionHead kicker="From the Ground" title="Latest News" cta="All stories" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {posts.map((p, i) => (
          <a key={i} href="#" className="group rounded-2xl border border-white/8 bg-card/60 p-6 transition hover:-translate-y-1 hover:border-gold/40">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.15em]">
              <span className="text-gold">{p.tag}</span>
              <span className="text-muted-foreground">{p.date}</span>
            </div>
            <h3 className="mt-5 font-display text-2xl uppercase leading-tight transition group-hover:text-gold">
              {p.title}
            </h3>
            <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-muted-foreground transition group-hover:text-gold">
              Read <ChevronRight className="h-4 w-4" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function RegisterCTA() {
  return (
    <section id="register" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <img src={keeperImg} alt="" loading="lazy" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>
      <div className="container-x relative mx-auto max-w-4xl text-center">
        <span className="chip">Registration Open</span>
        <h2 className="mt-6 font-display text-5xl uppercase leading-[0.95] md:text-7xl">
          Bring your village <span className="text-gold">to the pitch.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Team registration for the August & December editions is now open. Captains, get your squad in early.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="btn-gold">Register Your Team <ArrowRight className="h-4 w-4" /></a>
          <a href="#" className="btn-ghost-gold">Contact the Organisers</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-surface/40">
      <div className="container-x mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logoImg} alt="" width={40} height={40} className="h-10 w-10" />
              <div className="font-display text-xl">EBUNDA CUP</div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The official home of the Ebunda Cup — celebrating football, community and youth in Nyaribari Masaba.
            </p>
          </div>
          <FooterCol title="Tournament" links={["Schedule", "Results", "Standings", "Teams", "Gallery"]} />
          <FooterCol title="Community" links={["News", "Ebunda MP 2027", "Volunteer", "Contact", "Privacy Policy"]} />
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Ebunda Cup · Nyaribari Masaba, Kenya</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold">Facebook</a>
            <a href="#" className="hover:text-gold">X / Twitter</a>
            <a href="#" className="hover:text-gold">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{title}</div>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-muted-foreground transition hover:text-foreground">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
