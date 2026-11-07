import { describe, expect, it } from "bun:test";

import { teamRegistrationSchema } from "../src/lib/team-registration-schema.ts";

const registration = {
  team_name: "Nyanchwa FC",
  ward_location: "Nyanchwa",
  captain_name: "Team Captain",
  captain_phone: "+254 700 123 456",
  sms_opt_in: false,
};

describe("team registration category", () => {
  it("accepts the requested men’s and women’s categories only", () => {
    expect(teamRegistrationSchema.safeParse({ ...registration, category: "Men" }).success).toBe(
      true,
    );
    expect(teamRegistrationSchema.safeParse({ ...registration, category: "Women" }).success).toBe(
      true,
    );
    expect(teamRegistrationSchema.safeParse({ ...registration, category: "Mixed" }).success).toBe(
      false,
    );
  });
});
