import { createFileRoute } from "@tanstack/react-router";

import { TournamentPage } from "./tournament";

export const Route = createFileRoute("/matches")({
  component: TournamentPage,
});
