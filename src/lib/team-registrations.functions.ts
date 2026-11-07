import { createServerFn } from "@tanstack/react-start";

import { teamRegistrationSchema } from "@/lib/team-registration-schema";

export const submitTeamRegistration = createServerFn({ method: "POST" })
  .inputValidator((input) => teamRegistrationSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("team_registrations").insert(data);

    if (error) {
      throw new Error("Your registration could not be saved. Please try again.");
    }

    return { success: true };
  });
