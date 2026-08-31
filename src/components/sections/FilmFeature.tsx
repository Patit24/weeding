"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, X, Film, Sparkles, Volume2, Video, ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import { FadeIn, MotionSection } from "@/components/ui/Motion";

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
    <MotionSection className="relative border-y border-[var(--fine-border)] bg-[var(--espresso)] py-20 lg:py-28 text-[var(--warm-ivory)] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[rgba(155,27,45,0.22)] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[rgba(237,182,0,0.15)] blur-3xl" />

      <div className="container-editorial relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] xl:gap-16">
          
          {/* Left Column: Visual Cinematic Film Showcase */}
          <div className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-black/60 shadow-2xl">
              <Image
                src={images.filmStill.src}
                alt="Cinematic Bengali wedding film preview by Sritikuthi The Wedding Tales"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top Film Badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--gold-light)] backdrop-blur-md">
                <Film size={12} />
                <span>4K Ultra-HD Teaser</span>
              </div>

              {/* Pulsating Play Button */}
              <motion.button
                ref={triggerRef}
                type="button"
                onClick={() => setOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/80 bg-crimson-gradient p-0 text-white shadow-crimson-glow"
                aria-label="Play wedding film preview"
              >
                <span className="absolute -inset-2 rounded-full border border-[var(--gold-light)] opacity-60 animate-ping" />
                <Play size={28} fill="currentColor" className="ml-1 transition-transform group-hover:scale-110" />
              </motion.button>

              {/* Bottom Film Details Bar */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/60 p-3.5 backdrop-blur-md text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[var(--gold-light)]">
                    <Volume2 size={15} />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">Anirban & Debopriya · Kolkata</span>
                    <span className="text-[0.68rem] text-[var(--gold-light)]">Original Audio & Vedic Chants</span>
                  </div>
                </div>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-white/80 font-mono">
                  03:45
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & CTA */}
          <FadeIn className="space-y-6">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[var(--crimson)]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--gold-light)]">
                Cinematic Wedding Films
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="serif text-[clamp(2.75rem,5.5vw,4.8rem)] font-normal leading-[0.96] text-[var(--warm-ivory)]">
              Some memories deserve movement.
            </h2>

            {/* Narrative Description */}
            <p className="text-base leading-8 text-[rgba(247,243,236,0.8)] sm:text-lg sm:leading-8">
              We build films from real sound, natural room atmosphere, unscripted glances, and rhythmic Bengali traditions — so your wedding day can be relived with pure emotion long after the lights fade.
            </p>

            {/* Film Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 border-y border-white/15 py-4 text-xs">
              <div>
                <span className="block font-bold text-white">4K Cine-Grade</span>
                <span className="text-[0.68rem] text-[var(--gold-light)]">Sony Cinema Line</span>
              </div>
              <div className="border-x border-white/15 px-3">
                <span className="block font-bold text-white">Live Sound</span>
                <span className="text-[0.68rem] text-[var(--gold-light)]">Vows & Mantras</span>
              </div>
              <div className="pl-3">
                <span className="block font-bold text-white">Drone Aerial</span>
                <span className="text-[0.68rem] text-[var(--gold-light)]">Mandap & Venue</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/services/wedding-films"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-crimson-gradient px-7 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-crimson-glow transition-all hover:brightness-110 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Wedding Films</span>
                <ArrowRight size={15} />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[var(--espresso)]"
              >
                <Play size={13} fill="currentColor" />
                <span>Watch Teaser</span>
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] flex items-center justify-center bg-black/90 p-4 backdrop-blur-2xl md:p-8"
            onMouseDown={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Wedding film teaser player"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
                aria-label="Close video player"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                  title="Sritikuthi The Wedding Tales Cinematic Film"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="flex items-center justify-between border-t border-white/15 bg-neutral-950 p-5 text-white">
                <div>
                  <h3 className="serif text-lg text-white">Anirban & Debopriya · Shubho Drishti to Bou Bhat</h3>
                  <p className="text-xs text-[var(--gold-light)]">4K UHD Cinema Teaser · Directed by Shiladitya Das</p>
                </div>
                <Link
                  href="/services/wedding-films"
                  className="rounded-full bg-crimson-gradient px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-crimson-glow"
                >
                  Book Film Crew
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionSection>
  );
}
