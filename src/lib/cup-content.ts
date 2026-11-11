export const ACTIVE_CLUBS = [
  "Riodonga FC",
  "Sangoma FC",
  "Otamba FC",
  "Nyanguru FC",
  "Nyamage FC",
  "Kegati FC",
  "Timiza FC",
  "Masongo FC",
  "Skyway FC",
] as const;

export const CUP_HONOURS = [
  "Nyanchwa FC",
  "Giachere FC",
  "Geterere Queens",
  "Kiogoro Queens",
  "Keumbu FC",
] as const;

export const CUP_FIXTURES = [
  {
    home: "Nyanchwa FC",
    away: "Giachere FC",
    category: "Men's showcase",
    note: "Match pairing supplied in the cup brief; date and kickoff to be confirmed.",
  },
  {
    home: "Keumbu FC",
    away: "Otamba FC",
    category: "Club showcase",
    note: "Match pairing supplied in the cup brief; date and kickoff to be confirmed.",
  },
  {
    home: "Geterere Queens",
    away: "Kiogoro Queens",
    category: "Women's tier",
    note: "Women's cup clubs; fixtures to be confirmed.",
  },
] as const;

export const CUP_HISTORY = [
  {
    year: "2023",
    title: "The first cup",
    detail: "Keumbu FC won the foundational title as the tournament brought local sides together.",
    image: "team",
  },
  {
    year: "2024–2025",
    title: "A wider game",
    detail:
      "Nyanchwa FC claimed a dramatic penalty win at Nyanturago Stadium, and the women's tier brought more players into the showcase.",
    image: "champions",
  },
  {
    year: "2026–2027",
    title: "One sub-county, one stage",
    detail:
      "The cup scales into a premier sub-county showcase, bringing wards including Birongo and Keumbu together through sport and talent discovery.",
    image: "matchday",
  },
] as const;
