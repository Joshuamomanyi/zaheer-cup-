import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Flag,
  HeartHandshake,
  MapPin,
  Menu,
  Shield,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/zaheer-cup-logo.jpg.asset.json";
import teamAsset from "@/assets/zaheer-team.jpg.asset.json";
import communityAsset from "@/assets/zaheer-community.jpg.asset.json";
import championsAsset from "@/assets/zaheer-champions.jpg.asset.json";
import womenAsset from "@/assets/zaheer-womens-team.jpg.asset.json";
import matchdayAsset from "@/assets/zaheer-matchday.jpg.asset.json";
import { submitTeamRegistration } from "@/lib/team-registrations.functions";
import { teamRegistrationSchema, type TeamRegistrationInput } from "@/lib/team-registration-schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zaheer Jhanda Cup | Nyaribari Chache Elite Showcase" },
      {
        name: "description",
        content:
          "The Zaheer Jhanda Cup celebrates local football, emerging talent and community pride across Nyaribari Chache.",
      },
      { property: "og:title", content: "Zaheer Jhanda Cup | Nyaribari Chache Elite Showcase" },
      {
        property: "og:description",
        content:
          "A showcase for Nyaribari Chache football, youth opportunity and local champions, supported by Hon. Zaheer Jhanda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const CLUBS = [
  "Riodonga FC",
  "Sangoma FC",
  "Otamba FC",
  "Nyanguru FC",
  "Nyamage FC",
  "Kegati FC",
  "Timiza FC",
  "Masongo FC",
  "Skyway FC",
];

const HONOURS = ["Nyanchwa FC", "Giachere FC", "Geterere Queens", "Kiogoro Queens", "Keumbu FC"];

const FIXTURES = [
  { first: "Nyanchwa FC", second: "Giachere FC", label: "Local derby", detail: "Nyaribari Chache" },
  { first: "Keumbu FC", second: "Otamba FC", label: "Club showcase", detail: "Coming soon" },
  {
    first: "Geterere Queens",
    second: "Kiogoro Queens",
    label: "Women's showcase",
    detail: "Coming soon",
  },
];

const HISTORY = [
  {
    year: "2023",
    label: "Where it began",
    title: "A first cup. A lasting legacy.",
    body: "The inaugural tournament brought local clubs together, with Keumbu FC lifting the foundational title.",
    image: teamAsset.url,
  },
  {
    year: "2024–25",
    label: "Bigger, bolder",
    title: "New champions. More voices.",
    body: "Nyanchwa FC made history in a dramatic penalty finish at Nyanturago Stadium. The women's tier and legball widened the field.",
    image: championsAsset.url,
  },
  {
    year: "2026",
    label: "The next chapter",
    title: "Nyaribari Chache takes the stage.",
    body: "A fourth edition brings the county's football talent together for an elite sub-county showcase.",
    image: matchdayAsset.url,
  },
];

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <FixtureTicker />
      <HistorySection />
      <ClubsSection />
      <MissionSection />
      <PatronSection />
      <RegistrationSection />
      <Footer />
    </main>
  );
}

function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const links = [
    { label: "Matches", href: "#matches" },
    { label: "Tournament", href: "#tournament" },
    { label: "History", href: "#history" },
    { label: "Leadership", href: "#leadership" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="container-x mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3"
          aria-label="Zaheer Jhanda Cup home"
        >
          <img
            src={logoAsset.url}
            alt="Zaheer Jhanda Cup crest"
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-lg uppercase">Zaheer Jhanda Cup</span>
            <span className="block text-[10px] uppercase text-muted-foreground">
              Nyaribari Chache · Kenya
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button
            asChild
            className="hidden rounded-sm bg-gold px-4 font-bold text-primary-foreground hover:bg-gold/90 sm:inline-flex"
          >
            <a href="#register">
              Register Team <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu aria-hidden="true" />
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav
          className="border-t border-border bg-background px-5 py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block border-b border-border py-3 text-sm font-medium last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-gold px-4 py-3 text-sm font-bold text-primary-foreground"
          >
            Register Team <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[680px] overflow-hidden border-b border-border sm:min-h-[760px]"
    >
      <img
        src={teamAsset.url}
        alt="Nyaribari Chache footballers celebrating together"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/45" />
      <div className="container-x mx-auto flex max-w-7xl flex-col justify-center py-20 sm:min-h-[680px] md:py-24">
        <div className="flex max-w-[820px] items-center gap-3 text-[11px] font-semibold uppercase text-gold">
          <span className="h-px w-9 bg-gold" /> The fourth edition · 2026
        </div>
        <div className="mt-7 flex max-w-5xl flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <img
            src={logoAsset.url}
            alt="Zaheer Jhanda Cup"
            className="h-24 w-24 shrink-0 rounded-full object-cover ring-1 ring-gold/30 sm:h-32 sm:w-32"
          />
          <h1 className="max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-7xl md:text-8xl lg:text-9xl">
            Zaheer Jhanda Cup
          </h1>
        </div>
        <p className="mt-7 max-w-3xl font-display text-2xl uppercase leading-tight sm:text-3xl md:text-4xl">
          Uniting Nyaribari Chache
          <br className="hidden sm:block" />{" "}
          <span className="text-gold">through sport & talent.</span>
        </p>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base">
          Nyaribari Chache’s elite football showcase—celebrating local champions, opening doors for
          young talent and bringing the community together.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            asChild
            className="h-12 rounded-sm bg-gold px-6 text-primary-foreground hover:bg-gold/90"
          >
            <a href="#matches">
              <Trophy aria-hidden="true" /> Watch Live <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-sm border-foreground/30 bg-background/30 px-6 backdrop-blur-sm hover:bg-background/70"
          >
            <a href="#register">Register your team</a>
          </Button>
        </div>
        <div className="mt-16 grid max-w-2xl grid-cols-3 border-t border-foreground/20 pt-5">
          <HeroFact value="04" label="Editions in 2026" />
          <HeroFact value="14+" label="Local clubs" />
          <HeroFact value="M + W" label="Football for all" />
        </div>
      </div>
      <div className="absolute bottom-8 right-5 hidden items-center gap-2 text-[10px] font-semibold uppercase sm:flex md:right-10">
        <ArrowDownRight className="h-4 w-4 text-gold" aria-hidden="true" /> Game. Community.
        Opportunity.
      </div>
    </section>
  );
}

function HeroFact({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-r border-foreground/15 px-3 first:pl-0 last:border-0">
      <div className="font-display text-2xl text-gold sm:text-3xl">{value}</div>
      <div className="mt-1 text-[9px] font-medium uppercase text-muted-foreground sm:text-[10px]">
        {label}
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sideNote,
}: {
  eyebrow: string;
  title: string;
  sideNote?: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-gold">
          <span className="h-px w-6 bg-gold" /> {eyebrow}
        </div>
        <h2 className="mt-3 font-display text-4xl uppercase leading-none sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </div>
      {sideNote && (
        <p className="max-w-64 text-xs uppercase leading-relaxed text-muted-foreground">
          {sideNote}
        </p>
      )}
    </div>
  );
}

function FixtureTicker() {
  const ticker = [...FIXTURES, ...FIXTURES];
  return (
    <section
      id="matches"
      aria-label="Local fixtures"
      className="border-b border-border bg-surface/50"
    >
      <div className="container-x mx-auto flex max-w-7xl items-center gap-5 py-5">
        <div className="hidden shrink-0 items-center gap-2 text-[10px] font-bold uppercase text-gold sm:flex">
          <CalendarDays className="h-4 w-4" aria-hidden="true" /> Around the pitch
        </div>
        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="matches-track flex w-max gap-3 pr-3 hover:[animation-play-state:paused]">
            {ticker.map((match, index) => (
              <div
                key={`${match.first}-${index}`}
                className="flex min-w-[260px] items-center gap-4 border-r border-border pr-5 last:border-0"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[9px] font-semibold uppercase text-muted-foreground">
                    {match.label} · {match.detail}
                  </div>
                  <div className="mt-1 whitespace-nowrap font-display text-base uppercase">
                    {match.first} <span className="text-gold">vs</span> {match.second}
                  </div>
                </div>
                <span className="shrink-0 border border-border px-2 py-1 text-[8px] font-bold uppercase text-gold">
                  Fixture
                </span>
              </div>
            ))}
          </div>
        </div>
        <span className="hidden shrink-0 text-[9px] font-semibold uppercase text-muted-foreground xl:inline">
          Kickoff details to be announced
        </span>
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section id="history" className="container-x mx-auto max-w-7xl py-20 md:py-28">
      <SectionHeading
        eyebrow="A growing football story"
        title="Built on local pride."
        sideNote="From a first trophy to a stage for every rising star."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {HISTORY.map((item, index) => (
          <article
            key={item.year}
            className="group min-w-0 border-t-2 border-border transition-colors hover:border-gold"
          >
            <div className="relative mt-4 aspect-[16/10] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-4xl text-gold">
                {item.year}
              </span>
              <span className="absolute right-3 top-3 bg-background/80 px-2.5 py-1.5 text-[9px] font-bold uppercase backdrop-blur-sm">
                0{index + 1} / 03
              </span>
            </div>
            <div className="py-5">
              <div className="text-[10px] font-bold uppercase text-gold">{item.label}</div>
              <h3 className="mt-2 font-display text-2xl uppercase">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClubsSection() {
  return (
    <section id="tournament" className="border-y border-border bg-surface/35">
      <div className="container-x mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading
          eyebrow="Official club community"
          title="Chache, all in."
          sideNote="FKF Nyaribari Chache clubs and cup favourites, together on one stage."
        />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3 text-[10px] font-semibold uppercase">
              <span>FKF · Nyaribari Chache clubs</span>
              <span className="text-muted-foreground">01 — 09</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3">
              {CLUBS.map((club, index) => (
                <div
                  key={club}
                  className="group flex min-w-0 items-center gap-3 border-b border-r border-border px-3 py-4 transition hover:bg-gold/5 sm:px-4"
                >
                  <span className="font-display text-sm text-gold/70">0{index + 1}</span>
                  <span className="min-w-0 break-words text-sm font-semibold">{club}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3 text-[10px] font-semibold uppercase">
              <span>Champions & finalists</span>
              <Trophy className="h-4 w-4 text-gold" aria-hidden="true" />
            </div>
            <div className="divide-y divide-border">
              {HONOURS.map((club, index) => (
                <div key={club} className="flex items-center justify-between gap-4 py-3.5">
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="font-display text-lg text-gold">0{index + 1}</span>
                    <span className="break-words font-semibold">{club}</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const missions = [
    {
      icon: Flag,
      number: "01",
      title: "Talent discovery",
      body: "Give promising young players the visibility, competition and pathway their ability deserves.",
    },
    {
      icon: HeartHandshake,
      number: "02",
      title: "Economic uplift",
      body: "Bring people and local opportunity together around the energy of match day.",
    },
    {
      icon: Users,
      number: "03",
      title: "Community pride",
      body: "A cup that draws neighbourhoods together, and gives women’s football a place to grow.",
    },
  ];
  return (
    <section className="container-x mx-auto max-w-7xl py-20 md:py-28">
      <SectionHeading
        eyebrow="Why we play"
        title="A bigger game."
        sideNote="The best results reach beyond the final whistle."
      />
      <div className="mt-12 grid border-y border-border md:grid-cols-3">
        {missions.map((mission, index) => (
          <article
            key={mission.number}
            className={`relative px-5 py-7 sm:px-7 md:py-8 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}
          >
            <span className="absolute right-5 top-6 font-display text-4xl text-gold/45">
              {mission.number}
            </span>
            <mission.icon className="h-7 w-7 text-gold" strokeWidth={1.6} aria-hidden="true" />
            <h3 className="mt-8 font-display text-2xl uppercase">{mission.title}</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {mission.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PatronSection() {
  return (
    <section id="leadership" className="relative border-y border-border bg-surface/45">
      <div className="container-x mx-auto grid max-w-7xl gap-9 py-16 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-16 md:py-24">
        <div className="relative min-w-0">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={communityAsset.url}
              alt="Hon. Zaheer Jhanda with the local football community"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-background/90 px-3 py-2 text-[9px] font-bold uppercase backdrop-blur-sm">
            <Shield className="h-4 w-4 text-gold" aria-hidden="true" /> Patron · Nyaribari Chache
          </div>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-gold">
            <span className="h-px w-6 bg-gold" /> A vision for the constituency
          </div>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] sm:text-5xl md:text-6xl">
            More than a cup.
            <br />
            <span className="text-gold">A way forward.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Hon. Zaheer Jhanda, Member of Parliament for Nyaribari Chache, champions this showcase
            as a platform for grassroots sport, youth empowerment and local opportunity.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            When a community stands behind its talent, the impact travels beyond the pitch—to local
            enterprise, stronger ties and bigger ambition.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-[9px] font-bold uppercase">
            <span className="border border-border px-3 py-2">Youth opportunity</span>
            <span className="border border-border px-3 py-2">Grassroots football</span>
            <span className="border border-border px-3 py-2">Local enterprise</span>
          </div>
        </div>
      </div>
      <div className="container-x mx-auto max-w-7xl pb-12">
        <div className="grid gap-3 sm:grid-cols-2">
          <img
            src={womenAsset.url}
            alt="Women footballers representing their team"
            loading="lazy"
            className="h-56 w-full object-cover"
          />
          <img
            src={championsAsset.url}
            alt="Cup champions celebrating with community supporters"
            loading="lazy"
            className="h-56 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function RegistrationSection() {
  return (
    <section id="register" className="container-x mx-auto max-w-7xl py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-gold">
            <span className="h-px w-6 bg-gold" /> Take your place
          </div>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] sm:text-6xl">
            Put your
            <br />
            <span className="text-gold">team forward.</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Share your club and captain’s details to register your team for the showcase.
          </p>
          <div className="mt-8 flex max-w-xs items-center gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> Nyaribari Chache,
            Kisii County
          </div>
          <a
            href="#history"
            className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase text-muted-foreground transition hover:text-gold"
          >
            Discover the cup <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <RegistrationForm />
      </div>
    </section>
  );
}

function RegistrationForm() {
  const submit = useServerFn(submitTeamRegistration);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus("submitting");
    setMessage("");
    const form = new FormData(formElement);
    const result = teamRegistrationSchema.safeParse({
      team_name: form.get("team_name"),
      ward_location: form.get("ward_location"),
      category: form.get("category"),
      captain_name: form.get("captain_name"),
      captain_phone: form.get("captain_phone"),
      sms_opt_in: form.get("sms_opt_in") === "on",
    });

    if (!result.success) {
      setStatus("error");
      setMessage(result.error.issues[0]?.message ?? "Check the details and try again.");
      return;
    }

    try {
      const input: TeamRegistrationInput = result.data;
      await submit({ data: input });
      formElement.reset();
      setStatus("success");
      setMessage("Team registration received. Thank you for stepping up.");
    } catch {
      setStatus("error");
      setMessage("We couldn't save this registration. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-surface/40 p-5 sm:p-7"
      aria-label="Team registration"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
        <h3 className="font-display text-2xl uppercase sm:text-3xl">Team registration</h3>
        <span className="hidden shrink-0 text-[9px] font-semibold uppercase text-muted-foreground sm:inline">
          Fields marked * are required
        </span>
      </div>
      <div className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <FormField
          id="team_name"
          label="Team name *"
          placeholder="Your club name"
          autoComplete="organization"
        />
        <FormField
          id="ward_location"
          label="Ward / location *"
          placeholder="Ward or home ground"
          autoComplete="address-level2"
        />
        <FormField
          id="captain_name"
          label="Captain’s name *"
          placeholder="Full name"
          autoComplete="name"
        />
        <FormField
          id="captain_phone"
          label="Captain’s phone *"
          placeholder="e.g. +254 700 000 000"
          type="tel"
          autoComplete="tel"
        />
        <label
          htmlFor="category"
          className="block min-w-0 text-[10px] font-semibold uppercase sm:col-span-2"
        >
          Category *
          <select
            id="category"
            name="category"
            required
            defaultValue=""
            className="mt-2 block h-11 w-full border border-input bg-background px-3 text-sm font-normal normal-case outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="" disabled>
              Choose a category
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </label>
      </div>
      <label
        htmlFor="sms_opt_in"
        className="mt-5 flex cursor-pointer items-start gap-3 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground"
      >
        <input
          id="sms_opt_in"
          name="sms_opt_in"
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
        />
        <span>
          I agree to receive tournament updates by text message. Optional; no text messages are sent
          unless campaign messaging is set up.
        </span>
      </label>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-12 rounded-sm bg-gold px-5 font-bold text-primary-foreground hover:bg-gold/90"
        >
          {status === "submitting" ? "Sending…" : "Submit team"}{" "}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        {status === "success" && (
          <span role="status" className="inline-flex items-center gap-2 text-xs text-gold">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> {message}
          </span>
        )}
        {status === "error" && (
          <span role="alert" className="text-xs text-destructive">
            {message}
          </span>
        )}
      </div>
    </form>
  );
}

function FormField({
  id,
  label,
  placeholder,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label htmlFor={id} className="block min-w-0 text-[10px] font-semibold uppercase">
      {label}
      <input
        id={id}
        name={id}
        type={type}
        required
        maxLength={id === "ward_location" ? 120 : id === "captain_phone" ? 24 : 100}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 block h-11 w-full min-w-0 border border-input bg-background px-3 text-sm font-normal normal-case outline-none placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-ring"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface/35">
      <div className="container-x mx-auto flex max-w-7xl flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt=""
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-display text-base uppercase">Zaheer Jhanda Cup</span>
        </a>
        <p className="text-xs text-muted-foreground">
          Celebrating football, talent and community · Nyaribari Chache, Kenya
        </p>
        <a
          href="#top"
          className="flex items-center gap-2 text-[10px] font-bold uppercase text-gold"
        >
          Back to top <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <div className="border-t border-border py-3 text-center text-[9px] uppercase text-muted-foreground">
        © {new Date().getFullYear()} Zaheer Jhanda Cup
      </div>
    </footer>
  );
}
