CREATE TABLE public.team_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_name TEXT NOT NULL CHECK (char_length(team_name) <= 100),
  ward_location TEXT NOT NULL CHECK (char_length(ward_location) <= 120),
  category TEXT NOT NULL CHECK (category IN ('Men', 'Women')),
  captain_name TEXT NOT NULL CHECK (char_length(captain_name) <= 100),
  captain_phone TEXT NOT NULL CHECK (char_length(captain_phone) <= 30),
  sms_opt_in BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
GRANT ALL ON public.team_registrations TO service_role;
ALTER TABLE public.team_registrations ENABLE ROW LEVEL SECURITY;