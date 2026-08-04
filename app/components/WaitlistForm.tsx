"use client";

import { FormEvent, useState } from "react";

const waitlistEndpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT || "https://api.web3forms.com/submit";
const waitlistAccessKey =
  process.env.NEXT_PUBLIC_WAITLIST_ACCESS_KEY || "61fdf15b-b3aa-4419-8a9f-b3e949b3d867";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "local">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    if (!waitlistEndpoint || !waitlistAccessKey) {
      window.localStorage.setItem("hush-waitlist-email", email);
      setStatus("local");
      return;
    }

    try {
      const response = await fetch(waitlistEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });

      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || result.success === false) throw new Error("Waitlist request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="waitlist-form reveal reveal--up" id="waitlist" data-reveal data-delay="180">
      <p className="waitlist-form__label">Get early access</p>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value={waitlistAccessKey} />
        <input type="hidden" name="name" value="Hush waitlist" />
        <input type="hidden" name="subject" value="New Hush waitlist signup" />
        <input type="hidden" name="message" value="New email added to the Hush waitlist." />
        <label className="sr-only" htmlFor="waitlist-email">Email address</label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button className="button button--solid" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Saving…" : "Join waitlist"}
        </button>
      </form>
      <p className="waitlist-form__status" aria-live="polite">
        {status === "success" && "You’re on the list."}
        {status === "local" && "Saved on this browser. Check the waitlist configuration."}
        {status === "error" && "Something went wrong. Try again."}
      </p>
    </div>
  );
}
