import { z } from "zod";

export const teamRegistrationSchema = z.object({
  team_name: z.string().trim().min(1, "Enter a team name.").max(100),
  ward_location: z.string().trim().min(1, "Enter a ward or location.").max(120),
  category: z.enum(["Men", "Women"], { message: "Choose a team category." }),
  captain_name: z.string().trim().min(1, "Enter the captain’s name.").max(100),
  captain_phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(24)
    .regex(/^\+?[0-9\s()-]+$/, "Enter a valid phone number."),
  sms_opt_in: z.boolean(),
});

export type TeamRegistrationInput = z.infer<typeof teamRegistrationSchema>;
