"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="mt-7 flex items-center rounded-xl border border-[var(--gold-border)] bg-[rgba(255,255,255,0.06)] px-3 py-1 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder={sent ? "Thank you for joining ✨" : "Email for celebration journal"}
        className="min-h-10 flex-1 bg-transparent text-xs text-[var(--warm-ivory)] outline-none placeholder:text-[rgba(247,243,236,0.55)]"
      />
      <button type="submit" className="min-h-10 px-2 text-[var(--gold)] hover:text-white transition-colors" aria-label="Join newsletter">
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
