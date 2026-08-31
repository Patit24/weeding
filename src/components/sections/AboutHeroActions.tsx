"use client";

import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { useAvailabilityModal } from "@/components/ui/AvailabilityModal";

export function AboutHeroActions() {
  const { openModal } = useAvailabilityModal();

  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      <button
        type="button"
        onClick={() => openModal()}
        className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-crimson-gradient px-7 text-xs font-bold uppercase tracking-[0.18em] !text-white shadow-crimson-glow transition-all hover:brightness-110 hover:scale-[1.02] active:scale-95 cursor-pointer"
      >
        <Calendar size={15} />
        <span>Check Date Availability</span>
        <ArrowRight size={14} />
      </button>

      <a
        href="/#rate-calculator"
        className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--fine-border)] bg-[var(--soft-white)] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--charcoal)] transition-colors hover:border-[var(--espresso)] hover:bg-[var(--warm-ivory)] shadow-xs"
      >
        <span>Calculate Custom Package</span>
      </a>
    </div>
  );
}
