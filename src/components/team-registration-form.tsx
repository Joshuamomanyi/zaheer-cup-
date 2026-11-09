import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { submitTeamRegistration } from "@/lib/team-registrations.functions";
import { teamRegistrationSchema, type TeamRegistrationInput } from "@/lib/team-registration-schema";

export function TeamRegistrationForm() {
  const submit = useServerFn(submitTeamRegistration);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus("submitting");
    setMessage("");
    const form = new FormData(formElement);
    const result = teamRegistrationSchema.safeParse({
      team_name: form.get("team_name"),
      ward_location: form.get("ward_location"),
      category: form.get("category"),
      captain_name: form.get("captain_name"),
      captain_phone: form.get("captain_phone"),
      sms_opt_in: form.get("sms_opt_in") === "on",
    });

    if (!result.success) {
      setStatus("error");
      setMessage(result.error.issues[0]?.message ?? "Check the details and try again.");
      return;
    }

    try {
      const input: TeamRegistrationInput = result.data;
      await submit({ data: input });
      formElement.reset();
      setStatus("success");
      setMessage("Team registration received. Thank you for stepping up.");
    } catch {
      setStatus("error");
      setMessage("We couldn't save this registration. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-surface/40 p-5 sm:p-7" aria-label="Team registration">
      <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
        <h2 className="font-display text-2xl uppercase sm:text-3xl">Team registration</h2>
        <span className="hidden shrink-0 text-[9px] font-semibold uppercase text-muted-foreground sm:inline">Fields marked * are required</span>
      </div>
      <div className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <FormField id="team_name" label="Team name *" placeholder="Your club name" autoComplete="organization" />
        <FormField id="ward_location" label="Ward / location *" placeholder="Ward or home ground" autoComplete="address-level2" />
        <FormField id="captain_name" label="Captain’s name *" placeholder="Full name" autoComplete="name" />
        <FormField id="captain_phone" label="Captain’s phone *" placeholder="e.g. +254 700 000 000" type="tel" autoComplete="tel" />
        <label htmlFor="category" className="block min-w-0 text-[10px] font-semibold uppercase sm:col-span-2">
          Category *
          <select id="category" name="category" required defaultValue="" className="mt-2 block h-11 w-full border border-input bg-background px-3 text-sm font-normal normal-case outline-none focus-visible:ring-1 focus-visible:ring-ring">
            <option value="" disabled>Choose a category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </label>
      </div>
      <label htmlFor="sms_opt_in" className="mt-5 flex cursor-pointer items-start gap-3 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        <input id="sms_opt_in" name="sms_opt_in" type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-gold" />
        <span>I agree to receive tournament updates by text message. Optional; no text messages are sent unless campaign messaging is set up.</span>
      </label>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting"} className="h-12 rounded-sm bg-gold px-5 font-bold text-primary-foreground hover:bg-gold/90">
          {status === "submitting" ? "Sending…" : "Submit team"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        {status === "success" && <span role="status" className="inline-flex items-center gap-2 text-xs text-gold"><CheckCircle2 className="h-4 w-4" aria-hidden="true" /> {message}</span>}
        {status === "error" && <span role="alert" className="text-xs text-destructive">{message}</span>}
      </div>
    </form>
  );
}

function FormField({
  id,
  label,
  placeholder,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label htmlFor={id} className="block min-w-0 text-[10px] font-semibold uppercase">
      {label}
      <input
        id={id}
        name={id}
        type={type}
        required
        maxLength={id === "ward_location" ? 120 : id === "captain_phone" ? 24 : 100}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 block h-11 w-full min-w-0 border border-input bg-background px-3 text-sm font-normal normal-case outline-none placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-ring"
      />
    </label>
  );
}