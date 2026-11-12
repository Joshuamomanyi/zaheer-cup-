import { createFileRoute } from "@tanstack/react-router";

import { CupPageIntro, CupSectionTitle, CupSiteShell } from "@/components/cup-site-shell";
import { CUP_HISTORY } from "@/lib/cup-content";
import teamAsset from "@/assets/zaheer-team.jpg";
import championsAsset from "@/assets/zaheer-champions.jpg";
import matchdayAsset from "@/assets/zaheer-matchday.jpg";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Our History | Zaheer Jhanda Cup" },
      {
        name: "description",
        content: "Discover the milestones behind Nyaribari Chache's Zaheer Jhanda Cup.",
      },
    ],
  }),
  component: HistoryPage,
});

const HISTORY_IMAGES = {
  team: teamAsset,
  champions: championsAsset,
  matchday: matchdayAsset,
};

function HistoryPage() {
  return (
    <CupSiteShell>
      <main>
        <CupPageIntro
          eyebrow="Our story · 2023 to 2027"
          title="A legacy in motion."
          description="From a first local champion to a growing showcase for the wards, clubs and young talent of Nyaribari Chache."
          image={championsAsset}
        />
        <section className="container-x mx-auto max-w-7xl py-14 sm:py-18">
          <CupSectionTitle
            eyebrow="Cup milestones"
            title="The journey so far"
            note="A community story shaped by competition, inclusion and local pride."
          />
          <ol className="relative mt-10 space-y-6 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-px before:bg-border md:space-y-8">
            {CUP_HISTORY.map((item, index) => (
              <li
                key={item.year}
                className="relative grid gap-5 pl-14 md:grid-cols-[150px_1fr] md:gap-8 md:pl-0"
              >
                <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-background font-display text-sm text-gold md:static md:mt-1">
                  0{index + 1}
                </span>
                <div className="pt-1 md:text-right">
                  <span className="font-display text-3xl text-gold">{item.year}</span>
                </div>
                <article className="grid overflow-hidden border border-border bg-surface/50 sm:grid-cols-[220px_1fr]">
                  <img
                    src={HISTORY_IMAGES[item.image]}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-48 w-full object-cover sm:h-full sm:min-h-48"
                  />
                  <div className="p-5 sm:p-7">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                      Cup milestone
                    </span>
                    <h3 className="mt-2 font-display text-2xl uppercase sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </CupSiteShell>
  );
}
