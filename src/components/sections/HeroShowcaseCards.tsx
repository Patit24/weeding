"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowUpRight, Sparkles } from "lucide-react";
import { images } from "@/data/images";
import { useAvailabilityModal } from "@/components/ui/AvailabilityModal";

export function HeroShowcaseCards() {
  const { openModal } = useAvailabilityModal();

  return (
    <div className="container-editorial mt-8 pb-16 lg:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* 🌟 Left Card: Cinematic Bridal Portrait / Film Feature */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onClick={() => openModal("Bridal Portraiture & Films")}
          className="group relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-2xl cursor-pointer"
        >
          <Image
            src={images.featuredPortrait.src}
            alt={images.featuredPortrait.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

          {/* Top Right Floating Play Icon */}
          <div className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#8B1E1E]">
            <Play size={18} className="fill-white translate-x-0.5" />
          </div>

          {/* Top Left Badge */}
          <div className="absolute top-5 left-5 z-10">
            <span className="rounded-full bg-black/50 backdrop-blur-md px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/20 flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#D4AF37]" />
              <span>Sacred Bridal Tales</span>
            </span>
          </div>

          {/* Bottom Card Caption */}
          <div className="absolute bottom-5 left-5 right-5 text-white z-10 flex items-end justify-between">
            <div>
              <span className="text-[0.72rem] font-bold uppercase tracking-widest text-[#D4AF37] block">
                Bengali Fine-Art Portraiture
              </span>
              <h3 className="serif text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                The Sacred Mukut &amp; Alta Glow
              </h3>
            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#8B1E1E]">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </motion.div>

        {/* 🌸 Right Card: Auspicious Rituals & Mandap Flower Decor */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onClick={() => openModal("Traditional Bengali Wedding")}
          className="group relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-2xl cursor-pointer"
        >
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

          {/* Top Left Badge */}
          <div className="absolute top-5 left-5 z-10">
            <span className="rounded-full bg-black/50 backdrop-blur-md px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/20 flex items-center gap-1.5">
              <span>🌸</span>
              <span>Auspicious Rituals</span>
            </span>
          </div>

          {/* Bottom Card Caption */}
          <div className="absolute bottom-5 left-5 right-5 text-white z-10 flex items-end justify-between">
            <div>
              <span className="text-[0.72rem] font-bold uppercase tracking-widest text-[#D4AF37] block">
                Vedic Mantras &amp; Floral Mandap
              </span>
              <h3 className="serif text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                Shubho Drishti &amp; Saat Paak
              </h3>
            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#8B1E1E]">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
