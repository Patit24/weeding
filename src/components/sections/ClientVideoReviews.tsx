"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Star,
  Sparkles,
  CheckCircle2,
  Quote,
  Heart,
  ArrowUpRight
} from "lucide-react";
import { FadeIn, MotionSection } from "@/components/ui/Motion";
import { useAvailabilityModal } from "@/components/ui/AvailabilityModal";
import { cn } from "@/lib/utils";

export interface ClientVideoReview {
  id: string;
  videoSrc: string;
  clientName: string;
  eventType: string;
  location: string;
  badge: string;
  quote: string;
  rating: number;
}

export const clientVideoReviews: ClientVideoReview[] = [
  {
    id: "review-1",
    videoSrc: "/reviews/review-1.mp4",
    clientName: "Sharmistha & Sourin",
    eventType: "Sacred Bengali Wedding",
    location: "Kolkata, West Bengal",
    badge: "Wedding Couple Review",
    quote: "Shiladitya da and the Sritikuthi team made our wedding day effortless. Every sacred ritual and tear of joy was captured with unmatched beauty.",
    rating: 5,
  },
  {
    id: "review-2",
    videoSrc: "/reviews/review-2.mp4",
    clientName: "Neha & Avonil",
    eventType: "Grand Wedding & Pre-Wedding",
    location: "Kolkata",
    badge: "Verified Client Feedback",
    quote: "The cinematic wedding film and heirloom photos exceeded everything we dreamed of. The team's calm presence made us feel so comfortable.",
    rating: 5,
  },
  {
    id: "review-3",
    videoSrc: "/reviews/review-3.mp4",
    clientName: "Priyanka & Deepak",
    eventType: "Pre-Wedding & Reception",
    location: "Howrah / Kolkata",
    badge: "Client Experience Story",
    quote: "From our pre-wedding shoot to the final reception, every shot felt candid, cinematic, and true to who we are. 10/10 recommend Sritikuthi!",
    rating: 5,
  },
];

export function ClientVideoReviews() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [playingState, setPlayingState] = useState<Record<string, boolean>>({});
  const [mutedState, setMutedState] = useState<Record<string, boolean>>({
    "review-1": true,
    "review-2": true,
    "review-3": true,
  });
  const [fullscreenVideo, setFullscreenVideo] = useState<ClientVideoReview | null>(null);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const { openModal } = useAvailabilityModal();

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      // Pause all other videos
      Object.entries(videoRefs.current).forEach(([otherId, otherVideo]) => {
        if (otherId !== id && otherVideo && !otherVideo.paused) {
          otherVideo.pause();
          setPlayingState((prev) => ({ ...prev, [otherId]: false }));
        }
      });

      video.play().then(() => {
        setPlayingState((prev) => ({ ...prev, [id]: true }));
      }).catch((err) => {
        console.warn("Video playback interrupted", err);
      });
    } else {
      video.pause();
      setPlayingState((prev) => ({ ...prev, [id]: false }));
    }
  };

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;
    video.muted = !video.muted;
    setMutedState((prev) => ({ ...prev, [id]: video.muted }));
  };

  return (
    <section className="relative border-b border-[var(--fine-border)] bg-gradient-to-b from-[var(--warm-ivory)] via-[var(--sand)]/40 to-[var(--warm-ivory)] py-20 lg:py-32 text-[var(--espresso)] overflow-hidden">
      {/* Background Luxury Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-10 h-96 w-96 rounded-full bg-[rgba(212,175,55,0.14)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-10 h-96 w-96 rounded-full bg-[rgba(139,30,30,0.12)] blur-3xl" />

      <div className="container-editorial relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[var(--fine-border)]">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--gold-border)] bg-[var(--soft-white)] px-4 py-1.5 shadow-sm text-xs font-bold uppercase tracking-[0.22em] text-[var(--crimson)]">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span>Real Words • Real Emotion</span>
            </div>

            <h2 className="serif mt-4 text-[clamp(2.75rem,5.5vw,5rem)] leading-[0.95] text-[var(--espresso)]">
              Client Video Reviews
            </h2>
            <p className="mt-3 max-w-xl text-base leading-8 text-[var(--muted)]">
              Hear directly from our couples and families as they share their firsthand experience with Shiladitya Das and the Sritikuthi photography team.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 rounded-full bg-crimson-gradient px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] !text-white shadow-crimson-glow border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Check Your Wedding Date</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* 3-Column Video Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientVideoReviews.map((review, index) => {
            const isPlaying = playingState[review.id] || false;
            const isMuted = mutedState[review.id] ?? true;

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col rounded-3xl border border-[var(--gold-border)] bg-[var(--soft-white)] shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[var(--gold)]/60"
              >
                {/* 9:16 Vertical Video Container */}
                <div
                  className="relative aspect-[9/14] sm:aspect-[9/13] w-full bg-black cursor-pointer overflow-hidden"
                  onClick={() => togglePlay(review.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[review.id] = el;
                    }}
                    src={review.videoSrc}
                    playsInline
                    loop
                    muted={isMuted}
                    preload="none"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/30 pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/20 shadow-sm flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      <span>{review.badge}</span>
                    </span>

                    <span className="flex items-center gap-0.5 text-amber-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold border border-white/20">
                      <Star size={12} fill="currentColor" />
                      <span>5.0</span>
                    </span>
                  </div>

                  {/* Center Glowing Play / Pause Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={cn(
                        "h-16 w-16 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl transition-all duration-300",
                        isPlaying
                          ? "opacity-0 group-hover:opacity-85 scale-90"
                          : "opacity-100 scale-100 bg-gradient-to-r from-[#8B1E1E] to-[#6A1414] shadow-crimson-glow border-[#D4AF37]/50"
                      )}
                    >
                      {isPlaying ? (
                        <Pause size={24} className="fill-white" />
                      ) : (
                        <Play size={24} className="fill-white translate-x-0.5" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Video Controls & Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex items-end justify-between z-10">
                    <div>
                      <span className="text-[0.72rem] font-bold uppercase tracking-wider text-[#D4AF37] block">
                        {review.eventType}
                      </span>
                      <h3 className="serif text-xl font-bold text-white drop-shadow-md">
                        {review.clientName}
                      </h3>
                      <span className="text-xs text-white/80 block">
                        {review.location}
                      </span>
                    </div>

                    {/* Audio Mute/Unmute Toggle */}
                    <button
                      type="button"
                      onClick={(e) => toggleMute(review.id, e)}
                      className="h-9 w-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 cursor-pointer shadow-md"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-emerald-400" />}
                    </button>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="relative">
                    <Quote size={24} className="text-[var(--gold)]/40 mb-2" />
                    <p className="text-sm leading-relaxed text-[var(--charcoal)] italic">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--fine-border)] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--muted)]">
                      Filmed by <strong>Sritikuthi Studio</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => openModal(review.eventType)}
                      className="text-xs font-bold text-[var(--crimson)] hover:text-[var(--crimson-dark)] uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Check Dates</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust & Direct Consultation Banner */}
        <div className="mt-14 rounded-3xl border border-[var(--gold-border)] bg-royal-espresso p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--gold)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
                <Sparkles size={14} />
                <span>Join Over 100+ Happy Couples</span>
              </div>
              <h3 className="serif text-2xl sm:text-3xl font-bold text-[var(--warm-ivory)]">
                Ready to turn your wedding memories into timeless cinema?
              </h3>
              <p className="mt-1 text-sm text-white/80 max-w-xl">
                Dates for popular upcoming wedding seasons are reserved fast. Check date availability directly with Shiladitya.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openModal()}
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-crimson-gradient px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] !text-white shadow-crimson-glow border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Check My Wedding Dates 💬</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
