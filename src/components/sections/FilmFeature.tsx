"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, X, Film, Sparkles, Volume2, VolumeX, Video, ArrowRight, Heart } from "lucide-react";
import { FadeIn, MotionSection } from "@/components/ui/Motion";
import { useAvailabilityModal } from "@/components/ui/AvailabilityModal";

export function FilmFeature() {
  const [activeFilm, setActiveFilm] = useState<"wedding" | "prewedding">("wedding");
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const { openModal } = useAvailabilityModal();

  const films = {
    wedding: {
      src: "/reels/wedding-reel.mp4",
      title: "Sacred Bengali Wedding & Sindoor Daan",
      couple: "Anirban & Debopriya · South Kolkata",
      duration: "03:45",
      tag: "4K Master Cinema",
      description:
        "Every conch blow, sacred Vedic mantra, and tears of joy during the Shubho Drishti & Saat Paak, captured in uncompressed 4K cinema.",
    },
    prewedding: {
      src: "/reels/pre-wedding-reel.mp4",
      title: "Heritage Rajbari & Riverbank Love Story",
      couple: "Sneha & Somnath · Kolkata Ghats",
      duration: "02:50",
      tag: "Pre-Wedding Film",
      description:
        "Golden hour romance against the historic ghats of Kolkata and grand Rajbari courtyards, set to authentic emotional musical pacing.",
    },
  };

  const current = films[activeFilm];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    closeRef.current?.focus();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleModalPlay = () => {
    if (!videoPlayerRef.current) return;
    if (videoPlayerRef.current.paused) {
      videoPlayerRef.current.play();
      setIsPlaying(true);
    } else {
      videoPlayerRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleModalMute = () => {
    if (!videoPlayerRef.current) return;
    videoPlayerRef.current.muted = !videoPlayerRef.current.muted;
    setIsMuted(videoPlayerRef.current.muted);
  };

  return (
    <MotionSection className="relative border-y border-[var(--fine-border)] bg-[var(--espresso)] py-20 lg:py-28 text-[var(--warm-ivory)] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[rgba(155,27,45,0.25)] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[rgba(237,182,0,0.18)] blur-3xl" />

      <div className="container-editorial relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] xl:gap-16">
          
          {/* Left Column: Visual Cinematic Film Player */}
          <div className="relative">
            {/* Film Selector Tabs */}
            <div className="mb-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveFilm("wedding")}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilm === "wedding"
                    ? "bg-crimson-gradient text-white shadow-crimson-glow"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                💍 Bengali Wedding Film
              </button>
              <button
                type="button"
                onClick={() => setActiveFilm("prewedding")}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilm === "prewedding"
                    ? "bg-crimson-gradient text-white shadow-crimson-glow"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                🕊️ Pre-Wedding Reel
              </button>
            </div>

            {/* Video Container */}
            <div 
              onClick={() => setOpen(true)}
              className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-black shadow-2xl cursor-pointer"
            >
              <video
                key={current.src}
                src={current.src}
                playsInline
                loop
                muted
                autoPlay
                preload="metadata"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

              {/* Top Film Badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--gold-light)] backdrop-blur-md">
                <Film size={12} />
                <span>{current.tag}</span>
              </div>

              {/* Pulsating Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/80 bg-crimson-gradient p-0 text-white shadow-crimson-glow transition-transform duration-300 group-hover:scale-110">
                  <span className="absolute -inset-2 rounded-full border border-[var(--gold-light)] opacity-60 animate-ping" />
                  <Play size={28} fill="currentColor" className="ml-1" />
                </div>
              </div>

              {/* Bottom Film Details Bar */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/60 p-3.5 backdrop-blur-md text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[var(--gold-light)]">
                    <Volume2 size={15} />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">{current.couple}</span>
                    <span className="text-[0.68rem] text-[var(--gold-light)]">{current.title}</span>
                  </div>
                </div>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-white/80 font-mono">
                  {current.duration}
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
            <p className="text-base leading-8 text-[rgba(247,243,236,0.85)] sm:text-lg sm:leading-8">
              {current.description}
            </p>

            {/* Film Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 border-y border-white/15 py-4 text-xs">
              <div>
                <span className="block font-bold text-white">4K Cinema Line</span>
                <span className="text-[0.68rem] text-[var(--gold-light)]">Sony FX3 / Alpha</span>
              </div>
              <div className="border-x border-white/15 px-3">
                <span className="block font-bold text-white">Authentic Audio</span>
                <span className="text-[0.68rem] text-[var(--gold-light)]">Vedic Chants & Vows</span>
              </div>
              <div className="pl-3">
                <span className="block font-bold text-white">Drone Cinematography</span>
                <span className="text-[0.68rem] text-[var(--gold-light)]">Licensed Pilots</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => openModal(current.title)}
                className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-crimson-gradient px-7 text-xs font-bold uppercase tracking-[0.18em] !text-white shadow-crimson-glow transition-all hover:brightness-110 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Check Film Availability</span>
                <ArrowRight size={15} />
              </button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[var(--espresso)] cursor-pointer"
              >
                <Play size={13} fill="currentColor" />
                <span>Watch Full Reel</span>
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 🎬 Ultra-HD Cinema Video Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] flex items-center justify-center bg-black/95 p-4 backdrop-blur-2xl md:p-8"
            onMouseDown={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Wedding film player"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl"
              onMouseDown={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black cursor-pointer shadow-lg"
                aria-label="Close video player"
              >
                <X size={18} />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={videoPlayerRef}
                  src={current.src}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Bottom Modal Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/15 bg-neutral-950 p-5 text-white">
                <div>
                  <h3 className="serif text-xl text-white">{current.title}</h3>
                  <p className="text-xs text-[var(--gold-light)]">
                    {current.couple} · 4K UHD Master Film directed by Shiladitya Das
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openModal(current.title);
                  }}
                  className="rounded-full bg-crimson-gradient px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-crimson-glow transition-all hover:scale-105 cursor-pointer"
                >
                  Book This Film Crew 💬
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionSection>
  );
}
