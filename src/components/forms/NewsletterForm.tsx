"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="mt-7 flex border-b border-[rgba(247,243,236,0.35)]"
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
        placeholder={sent ? "Thank you for joining" : "Email for notes"}
        className="min-h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-[rgba(247,243,236,0.55)]"
      />
      <button type="submit" className="min-h-11 min-w-11" aria-label="Join newsletter">
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
