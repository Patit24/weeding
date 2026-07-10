"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { images } from "@/data/images";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FilmFeature() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && closeRef.current) {
        event.preventDefault();
        closeRef.current.focus();
      }
    };
    closeRef.current?.focus();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) triggerRef.current?.focus();
  }, [open]);

  return (
    <section className="border-y border-[var(--fine-border)] bg-[var(--espresso)] py-24 text-[var(--warm-ivory)]">
      <div className="container-wide grid items-center gap-0 border-y border-[rgba(247,243,236,0.24)] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={images.filmStill.src} alt={images.filmStill.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover opacity-86" />
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            className="absolute left-1/2 top-1/2 inline-flex min-h-16 min-w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(247,243,236,0.8)] bg-[rgba(41,35,31,0.44)]"
            aria-label="Play wedding film preview"
          >
            <Play size={26} fill="currentColor" />
          </button>
        </div>
        <div className="px-6 py-12 lg:px-16">
          <p className="eyebrow text-[rgba(247,243,236,0.68)]">Wedding Films</p>
          <h2 className="serif mt-5 text-[clamp(3rem,6vw,6.3rem)] leading-[0.9]">Some memories deserve movement.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[rgba(247,243,236,0.72)]">
            We build films from real sound, real pacing, and the atmosphere of the room, so your wedding can be felt long after it is over.
          </p>
          <ButtonLink href="/services/wedding-films" variant="light" className="mt-8">Explore Films</ButtonLink>
        </div>
      </div>
      {open ? (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-[rgba(41,35,31,0.86)] p-4" onMouseDown={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="Wedding film preview">
          <div className="relative w-full max-w-4xl bg-black" onMouseDown={(event) => event.stopPropagation()}>
            <button ref={closeRef} type="button" onClick={() => setOpen(false)} className="absolute right-3 top-3 z-10 min-h-11 min-w-11 text-white" aria-label="Close video">
              <X />
            </button>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
              title="Placeholder wedding film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
