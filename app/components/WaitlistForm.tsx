"use client";

import { FormEvent, useState } from "react";

const waitlistEndpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "local">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    if (!waitlistEndpoint) {
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

      if (!response.ok) throw new Error("Waitlist request failed");
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
        {status === "local" && "Saved on this browser. Connect a form endpoint to collect centrally."}
        {status === "error" && "Something went wrong. Try again."}
      </p>
    </div>
  );
}
