"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Sparkles, Film } from "lucide-react";
import { useAvailabilityModal } from "@/components/ui/AvailabilityModal";

export function HeroShowcaseCards() {
  const { openModal } = useAvailabilityModal();
  const [playingLeft, setPlayingLeft] = useState(false);
  const [playingRight, setPlayingRight] = useState(false);
  const [mutedLeft, setMutedLeft] = useState(true);
  const [mutedRight, setMutedRight] = useState(true);

  const videoLeftRef = useRef<HTMLVideoElement | null>(null);
  const videoRightRef = useRef<HTMLVideoElement | null>(null);

  const togglePlayLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoLeftRef.current) return;
    if (videoLeftRef.current.paused) {
      if (videoRightRef.current && !videoRightRef.current.paused) {
        videoRightRef.current.pause();
        setPlayingRight(false);
      }
      videoLeftRef.current.play().then(() => setPlayingLeft(true)).catch(() => {});
    } else {
      videoLeftRef.current.pause();
      setPlayingLeft(false);
    }
  };

  const togglePlayRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRightRef.current) return;
    if (videoRightRef.current.paused) {
      if (videoLeftRef.current && !videoLeftRef.current.paused) {
        videoLeftRef.current.pause();
        setPlayingLeft(false);
      }
      videoRightRef.current.play().then(() => setPlayingRight(true)).catch(() => {});
    } else {
      videoRightRef.current.pause();
      setPlayingRight(false);
    }
  };

  const toggleMuteLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoLeftRef.current) return;
    videoLeftRef.current.muted = !videoLeftRef.current.muted;
    setMutedLeft(videoLeftRef.current.muted);
  };

  const toggleMuteRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRightRef.current) return;
    videoRightRef.current.muted = !videoRightRef.current.muted;
    setMutedRight(videoRightRef.current.muted);
  };

  return (
    <div className="container-editorial mt-8 pb-16 lg:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* 🌟 Left Card: Sacred Wedding Cinema Reel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onClick={togglePlayLeft}
          className="group relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-black shadow-2xl cursor-pointer"
        >
          <video
            ref={videoLeftRef}
            src="/reels/wedding-reel.mp4"
            playsInline
            loop
            muted={mutedLeft}
            preload="none"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
          />

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

          {/* Top Left Badge */}
          <div className="absolute top-5 left-5 z-10 pointer-events-none">
            <span className="rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/20 flex items-center gap-1.5 shadow-sm">
              <Film size={12} className="text-[#D4AF37]" />
              <span>4K Wedding Reel</span>
            </span>
          </div>

          {/* Top Right Floating Sound Toggle */}
          <button
            type="button"
            onClick={toggleMuteLeft}
            className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/30 text-white shadow-md transition-transform hover:scale-110 active:scale-95"
            aria-label={mutedLeft ? "Unmute video" : "Mute video"}
          >
            {mutedLeft ? <VolumeX size={16} /> : <Volume2 size={16} className="text-emerald-400" />}
          </button>

          {/* Center Play / Pause Indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={`h-16 w-16 rounded-full bg-crimson-gradient border border-[#D4AF37]/50 flex items-center justify-center text-white shadow-crimson-glow transition-all duration-300 ${
                playingLeft ? "opacity-0 group-hover:opacity-85 scale-90" : "opacity-100 scale-100"
              }`}
            >
              {playingLeft ? <Pause size={24} className="fill-white" /> : <Play size={24} className="fill-white translate-x-0.5" />}
            </div>
          </div>

          {/* Bottom Card Caption & Action */}
          <div className="absolute bottom-5 left-5 right-5 text-white z-10 flex items-end justify-between">
            <div>
              <span className="text-[0.72rem] font-bold uppercase tracking-widest text-[#D4AF37] block">
                Bengali Wedding Cinema
              </span>
              <h3 className="serif text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                The Sacred Rituals &amp; Alta Glow
              </h3>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openModal("Wedding Cinema Package");
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 hover:bg-white hover:text-[#8B1E1E] backdrop-blur-md border border-white/40 text-white shadow-md transition-all hover:scale-110"
              aria-label="Check wedding date"
            >
              <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* 🌸 Right Card: Pre-Wedding Romance Cinema Reel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onClick={togglePlayRight}
          className="group relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-black shadow-2xl cursor-pointer"
        >
          <video
            ref={videoRightRef}
            src="/reels/pre-wedding-reel.mp4"
            playsInline
            loop
            muted={mutedRight}
            preload="none"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
          />

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

          {/* Top Left Badge */}
          <div className="absolute top-5 left-5 z-10 pointer-events-none">
            <span className="rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/20 flex items-center gap-1.5 shadow-sm">
              <Sparkles size={12} className="text-[#D4AF37]" />
              <span>Pre-Wedding Film</span>
            </span>
          </div>

          {/* Top Right Floating Sound Toggle */}
          <button
            type="button"
            onClick={toggleMuteRight}
            className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/30 text-white shadow-md transition-transform hover:scale-110 active:scale-95"
            aria-label={mutedRight ? "Unmute video" : "Mute video"}
          >
            {mutedRight ? <VolumeX size={16} /> : <Volume2 size={16} className="text-emerald-400" />}
          </button>

          {/* Center Play / Pause Indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={`h-16 w-16 rounded-full bg-crimson-gradient border border-[#D4AF37]/50 flex items-center justify-center text-white shadow-crimson-glow transition-all duration-300 ${
                playingRight ? "opacity-0 group-hover:opacity-85 scale-90" : "opacity-100 scale-100"
              }`}
            >
              {playingRight ? <Pause size={24} className="fill-white" /> : <Play size={24} className="fill-white translate-x-0.5" />}
            </div>
          </div>

          {/* Bottom Card Caption & Action */}
          <div className="absolute bottom-5 left-5 right-5 text-white z-10 flex items-end justify-between">
            <div>
              <span className="text-[0.72rem] font-bold uppercase tracking-widest text-[#D4AF37] block">
                Heritage Rajbari &amp; Riverbank
              </span>
              <h3 className="serif text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                Cinematic Pre-Wedding Love Story
              </h3>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openModal("Pre-Wedding Cinema Package");
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 hover:bg-white hover:text-[#8B1E1E] backdrop-blur-md border border-white/40 text-white shadow-md transition-all hover:scale-110"
              aria-label="Check pre-wedding date"
            >
              <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
