import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, Shield, Trophy } from "lucide-react";

import { CupPageIntro, CupSectionTitle, CupSiteShell } from "@/components/cup-site-shell";
import { ACTIVE_CLUBS, CUP_HONOURS } from "@/lib/cup-content";
import teamsAsset from "@/assets/zaheer-team.jpg";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "Teams Directory | Zaheer Jhanda Cup" },
      {
        name: "description",
        content: "Browse the clubs and past finalists of the Zaheer Jhanda Cup.",
      },
    ],
  }),
  component: TeamsPage,
});

const DIRECTORY = [
  ...ACTIVE_CLUBS.map((name) => ({ name, category: "Men" as const })),
  { name: "Geterere Queens", category: "Women" as const },
  { name: "Kiogoro Queens", category: "Women" as const },
];

type TeamCategory = "All categories" | "Men" | "Women";

function TeamsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<TeamCategory>("All categories");
  const filteredTeams = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return DIRECTORY.filter(
      (team) =>
        (category === "All categories" || team.category === category) &&
        team.name.toLocaleLowerCase().includes(query),
    );
  }, [category, search]);

  return (
    <CupSiteShell>
      <main>
        <CupPageIntro
          eyebrow="The club directory · 2027"
          title="Meet the teams."
          description="The clubs and showcase sides bringing Nyaribari Chache football to the pitch. Ward affiliations and this season's participation are being confirmed."
          image={teamsAsset}
        />
        <section className="container-x mx-auto max-w-7xl py-14 sm:py-18">
          <CupSectionTitle
            eyebrow="Club directory"
            title="Find your side"
            note="Search by club name; ward details will be added after official confirmation."
          />
          <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_220px]">
            <label className="flex min-h-12 items-center gap-3 border border-border bg-surface/60 px-4 focus-within:border-gold">
              <Search className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span className="sr-only">Search clubs or ward</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
                placeholder="Search clubs or ward"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </label>
            <label className="flex min-h-12 items-center gap-3 border border-border bg-surface/60 px-4">
              <span className="sr-only">Filter teams by category</span>
              <select
                value={category}
                onChange={(event) => setCategory(event.currentTarget.value as TeamCategory)}
                className="w-full bg-transparent text-sm text-foreground outline-none"
              >
                <option className="bg-background" value="All categories">
                  All categories
                </option>
                <option className="bg-background" value="Men">
                  Men
                </option>
                <option className="bg-background" value="Women">
                  Women
                </option>
              </select>
            </label>
          </div>
          <p
            className="mt-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
            aria-live="polite"
          >
            {filteredTeams.length} {filteredTeams.length === 1 ? "team" : "teams"} shown
          </p>
          {filteredTeams.length > 0 ? (
            <div className="mt-4 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {filteredTeams.map((team, index) => (
                <article
                  key={team.name}
                  className="flex min-w-0 items-center gap-4 bg-background p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/25 bg-gold/5 text-gold">
                    <Shield className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="break-words font-display text-xl uppercase">{team.name}</h3>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {team.category} showcase · Ward TBC
                    </p>
                  </div>
                  <span className="ml-auto font-display text-lg text-gold/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-4 border border-dashed border-border p-8 text-sm text-muted-foreground">
              No teams match that search. Try another club name or category.
            </p>
          )}
        </section>
        <section className="border-y border-border bg-surface/35">
          <div className="container-x mx-auto max-w-7xl py-14 sm:py-18">
            <CupSectionTitle
              eyebrow="Cup honours"
              title="Champions & finalists"
              note="Recognising the clubs named in the tournament's story."
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CUP_HONOURS.map((club, index) => (
                <article
                  key={club}
                  className="flex items-center gap-4 border border-border bg-background/60 p-5"
                >
                  <Trophy className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="min-w-0 flex-1 font-display text-lg uppercase">{club}</span>
                  <span className="text-[9px] font-bold uppercase text-muted-foreground">
                    Honours
                  </span>
                  <span className="font-display text-sm text-gold/70">0{index + 1}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </CupSiteShell>
  );
}
