import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin, Trophy } from "lucide-react";

import { CupPageIntro, CupSectionTitle, CupSiteShell } from "@/components/cup-site-shell";
import { CUP_FIXTURES } from "@/lib/cup-content";
import footballAsset from "@/assets/hero-football.jpg";

export const Route = createFileRoute("/tournament")({
  head: () => ({
    meta: [
      { title: "2027 Tournament | Zaheer Jhanda Cup" },
      {
        name: "description",
        content:
          "Explore 2027 showcase fixtures, match centres and venues across Nyaribari Chache.",
      },
    ],
  }),
  component: TournamentPage,
});

const FILTERS = [
  "All fixtures",
  "Men's Showcase",
  "Women's Showcase",
  "Local Derbies",
  "Knockout Stages",
] as const;
type FixtureFilter = (typeof FILTERS)[number];

const MATCH_CENTRES = [
  {
    home: CUP_FIXTURES[0].home,
    away: CUP_FIXTURES[0].away,
    categories: ["Men's Showcase", "Local Derbies"],
    stage: "Showcase fixture",
    venue: "Nyanturago Stadium",
  },
  {
    home: CUP_FIXTURES[1].home,
    away: CUP_FIXTURES[1].away,
    categories: ["Men's Showcase", "Knockout Stages"],
    stage: "Stage to be confirmed",
    venue: "Venue to be confirmed",
  },
  {
    home: CUP_FIXTURES[2].home,
    away: CUP_FIXTURES[2].away,
    categories: ["Women's Showcase", "Knockout Stages"],
    stage: "Women's showcase fixture",
    venue: "Local ward ground · to be confirmed",
  },
];

const VENUES = [
  {
    name: "Nyanturago Stadium",
    detail: "A focal venue for headline fixtures and major cup moments.",
    type: "Main showcase venue",
  },
  {
    name: "Local ward grounds",
    detail: "Community pitches across Nyaribari Chache, including Birongo and Keumbu.",
    type: "Community match venues",
  },
];

export function TournamentPage() {
  const [activeFilter, setActiveFilter] = useState<FixtureFilter>("All fixtures");
  const fixtures = MATCH_CENTRES.filter(
    (fixture) => activeFilter === "All fixtures" || fixture.categories.includes(activeFilter),
  );

  return (
    <CupSiteShell>
      <main>
        <CupPageIntro
          eyebrow="2027 · The tournament"
          title="Every match. One community."
          description="Follow men's and women's showcases, local rivalries and the road through the knockout stages. Match dates and live updates will appear here once officially confirmed."
          image={footballAsset}
        />

        <section className="container-x mx-auto max-w-7xl py-14 sm:py-18">
          <CupSectionTitle
            eyebrow="The match centre"
            title="Fixtures & matchups"
            note="Pairings are indicative; kickoff times, dates and live scores are pending official confirmation."
          />

          <div
            className="mt-8 flex gap-2 overflow-x-auto pb-2"
            role="group"
            aria-label="Filter fixtures"
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 border px-4 py-2.5 text-xs font-bold uppercase transition-colors ${
                  activeFilter === filter
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border bg-surface text-muted-foreground hover:border-gold/60 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {fixtures.map((fixture) => (
              <article
                key={`${fixture.home}-${fixture.away}`}
                className="border border-border bg-surface/50 p-5 sm:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="chip">{fixture.stage}</span>
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    Date & kickoff to be announced
                  </span>
                </div>
                <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
                  <h3 className="font-display text-xl uppercase leading-tight sm:text-2xl">
                    {fixture.home}
                  </h3>
                  <span className="font-display text-lg text-gold">VS</span>
                  <h3 className="font-display text-xl uppercase leading-tight sm:text-2xl">
                    {fixture.away}
                  </h3>
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                    {fixture.venue}
                  </span>
                  <span className="border border-border px-2.5 py-1 text-[9px] font-bold uppercase text-gold">
                    Upcoming · schedule TBC
                  </span>
                </div>
              </article>
            ))}
            {fixtures.length === 0 && (
              <p className="border border-dashed border-border p-8 text-sm text-muted-foreground lg:col-span-2">
                Fixtures for this category will be announced soon.
              </p>
            )}
          </div>
        </section>

        <section className="border-y border-border bg-surface/35">
          <div className="container-x mx-auto max-w-7xl py-14 sm:py-18">
            <CupSectionTitle
              eyebrow="Across Nyaribari Chache"
              title="Where we play"
              note="Final venue assignments will be published with the confirmed 2027 fixture schedule."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {VENUES.map((venue) => (
                <article
                  key={venue.name}
                  className="flex gap-4 border border-border bg-background/50 p-5 sm:p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold/10 text-gold">
                    {venue.name === "Nyanturago Stadium" ? (
                      <Trophy className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gold">
                      {venue.type}
                    </span>
                    <h3 className="mt-1 font-display text-xl uppercase">{venue.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {venue.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </CupSiteShell>
  );
}
