"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { images } from "@/data/images";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FadeIn, ImageReveal, MotionSection } from "@/components/ui/Motion";

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
    <MotionSection className="border-y border-[var(--fine-border)] bg-[var(--espresso)] py-24 text-[var(--warm-ivory)]">
      <div className="container-wide grid items-center gap-0 border-y border-[rgba(247,243,236,0.24)] lg:grid-cols-[1.15fr_0.85fr]">
        <ImageReveal className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
          <Image src={images.filmStill.src} alt={images.filmStill.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover opacity-86" />
          <motion.button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="absolute left-1/2 top-1/2 inline-flex min-h-16 min-w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(247,243,236,0.8)] bg-[rgba(41,35,31,0.44)]"
            aria-label="Play wedding film preview"
          >
            <Play size={26} fill="currentColor" />
          </motion.button>
        </ImageReveal>
        <FadeIn delay={0.12} className="px-6 py-12 lg:px-16">
          <p className="eyebrow text-[rgba(247,243,236,0.68)]">Wedding Films</p>
          <h2 className="serif mt-5 text-[clamp(3rem,6vw,6.3rem)] leading-[0.9]">Some memories deserve movement.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[rgba(247,243,236,0.72)]">
            We build films from real sound, real pacing, and the atmosphere of the room, so your wedding can be felt long after it is over.
          </p>
          <ButtonLink href="/services/wedding-films" variant="light" className="mt-8">Explore Films</ButtonLink>
        </FadeIn>
      </div>
      <AnimatePresence>
        {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[90] grid place-items-center bg-[rgba(41,35,31,0.86)] p-4"
          onMouseDown={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Wedding film preview"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.45 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button ref={closeRef} type="button" onClick={() => setOpen(false)} className="absolute right-3 top-3 z-10 min-h-11 min-w-11 rounded-full text-white hover:bg-white/20 transition-colors" aria-label="Close video">
              <X />
            </button>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
              title="Placeholder wedding film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
        ) : null}
      </AnimatePresence>
    </MotionSection>
  );
}
