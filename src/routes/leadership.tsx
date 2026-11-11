import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Handshake, Sprout, Trophy, Users } from "lucide-react";

import { CupPageIntro, CupSectionTitle, CupSiteShell } from "@/components/cup-site-shell";
import communityAsset from "@/assets/zaheer-community.jpg";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Vision | Zaheer Jhanda Cup" },
      {
        name: "description",
        content: "The grassroots football and community vision behind the Zaheer Jhanda Cup.",
      },
    ],
  }),
  component: LeadershipPage,
});

const IMPACT_AREAS = [
  {
    number: "01",
    title: "Youth opportunity",
    description:
      "Create a visible platform for young players to develop, compete and be discovered through football.",
    icon: Users,
  },
  {
    number: "02",
    title: "Grassroots football",
    description:
      "Bring clubs, wards and supporters together around an inclusive, well-organised local showcase.",
    icon: Trophy,
  },
  {
    number: "03",
    title: "Local enterprise",
    description:
      "Connect match days with local traders and service providers, helping community activity create opportunity.",
    icon: Sprout,
  },
];

function LeadershipPage() {
  return (
    <CupSiteShell>
      <main>
        <CupPageIntro
          eyebrow="Patron & leadership · 2027"
          title="Sport with purpose."
          description="A grassroots football vision centred on opportunity for young people, stronger community ties and a vibrant local economy."
          image={communityAsset}
        />
        <section className="container-x mx-auto grid max-w-7xl gap-10 py-14 sm:py-18 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
          <div className="relative overflow-hidden border border-border">
            <img
              src={communityAsset}
              alt="Community members gathered around local football"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/75 to-transparent p-5 pt-14">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                Tournament patron
              </span>
              <h2 className="mt-1 font-display text-3xl uppercase">Hon. Zaheer Jhanda</h2>
              <p className="mt-1 text-xs text-foreground/75">
                Member of Parliament for Nyaribari Chache
              </p>
            </div>
          </div>
          <div>
            <CupSectionTitle eyebrow="A shared vision" title="More than match day" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The Zaheer Jhanda Cup puts grassroots football at the heart of community life. Its
              vision is to give emerging talent a meaningful stage, encourage youth empowerment and
              bring wards together through sport.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A thriving tournament can also create room for local enterprise—from vendors and small
              businesses to the people who make every match day happen—so the benefits of the game
              reach beyond the final whistle.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border-l-2 border-gold pl-4 text-xs font-semibold uppercase text-foreground">
              <Handshake className="h-4 w-4 text-gold" aria-hidden="true" />
              Rooted in community. Driven by opportunity.
            </div>
          </div>
        </section>
        <section className="border-y border-border bg-surface/35">
          <div className="container-x mx-auto max-w-7xl py-14 sm:py-18">
            <CupSectionTitle
              eyebrow="Community impact"
              title="A platform to grow"
              note="Priorities for the cup—not measured outcomes or official statistics."
            />
            <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-3">
              {IMPACT_AREAS.map((area) => (
                <article key={area.number} className="relative bg-background p-6 sm:p-8">
                  <span className="absolute right-6 top-5 font-display text-4xl text-gold/30">
                    {area.number}
                  </span>
                  <area.icon className="h-7 w-7 text-gold" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="mt-8 font-display text-2xl uppercase">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-gold">
                    Impact priority <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </CupSiteShell>
  );
}
