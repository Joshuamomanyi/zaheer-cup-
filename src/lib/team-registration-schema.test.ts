import { describe, expect, it } from "bun:test";

import { teamRegistrationSchema } from "./team-registration-schema";

const validRegistration = {
  team_name: "Nyanchwa FC",
  ward_location: "Nyanchwa",
  captain_name: "Team Captain",
  captain_phone: "+254 700 123 456",
  sms_opt_in: false,
};

describe("team registration category", () => {
  it("accepts the requested men's and women's categories only", () => {
    expect(teamRegistrationSchema.safeParse({ ...validRegistration, category: "Men" }).success).toBe(true);
    expect(teamRegistrationSchema.safeParse({ ...validRegistration, category: "Women" }).success).toBe(true);
    expect(teamRegistrationSchema.safeParse({ ...validRegistration, category: "Mixed" }).success).toBe(false);
  });
});