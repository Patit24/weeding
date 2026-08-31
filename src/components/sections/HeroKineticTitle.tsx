"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
import { useAvailabilityModal } from "@/components/ui/AvailabilityModal";

export function HeroKineticTitle() {
  const { openModal } = useAvailabilityModal();

  return (
    <div className="relative w-full overflow-hidden bg-[#FAF7F2] pt-28 pb-12 lg:pt-36 lg:pb-16">
      {/* 🌸 1. TOP-LEFT HANGING FLORAL BRANCH (TRANSPARENT PNG) */}
      <div className="pointer-events-none absolute top-0 left-0 w-56 sm:w-72 md:w-88 lg:w-[420px] select-none z-0">
        <Image
          src="/hero-floral-top-left.png"
          alt="Vintage floral branch"
          width={420}
          height={315}
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* 🏛️ 2. BOTTOM-LEFT VICTORIA MEMORIAL MONUMENT WITH ROSES (TRANSPARENT PNG) */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-60 sm:w-76 md:w-[380px] lg:w-[460px] select-none z-0">
        <Image
          src="/hero-victoria-left.png"
          alt="Victoria Memorial Kolkata with peach watercolor roses"
          width={460}
          height={613}
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* 🏰 3. RIGHT MUGHAL ARCHWAY WITH BOTANICAL ROSES (TRANSPARENT PNG) */}
      <div className="pointer-events-none absolute top-6 sm:top-10 right-0 w-60 sm:w-80 md:w-[400px] lg:w-[480px] select-none z-0">
        <Image
          src="/hero-arch-right.png"
          alt="Classical Mughal archway with peach floral vines"
          width={480}
          height={640}
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* 🌟 4. CENTER EDITORIAL HEADLINE & CONTENT */}
      <div className="container-editorial relative z-10 flex flex-col items-center text-center">
        {/* 🌸 Top Heritage Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-[#D9CDBD] bg-[#FAF7F2]/90 px-6 py-1.5 shadow-xs backdrop-blur-xs"
        >
          <span className="text-xs text-[#8B1E1E]">🌸</span>
          <span className="serif text-xs font-bold uppercase tracking-[0.24em] text-[#8B1E1E]">
            স্মৃতিকুঠি
          </span>
          <span className="text-[#C5B49E]">•</span>
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#8B1E1E]">
            Kolkata &amp; Destination
          </span>
        </motion.div>

        {/* 📜 Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-[0.75rem] sm:text-xs font-semibold uppercase tracking-[0.32em] text-[#736B63]"
        >
          Where Every Detail Becomes A Memory
        </motion.p>

        {/* 👑 Grand Dual-Tone Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 flex flex-col items-center justify-center font-serif leading-[0.88] tracking-tight select-none"
        >
          <span className="text-[clamp(4.6rem,11.5vw,9.6rem)] font-normal text-[#241512]">
            Wedding
          </span>
          <span className="text-[clamp(4.6rem,11.5vw,9.6rem)] font-normal text-[#8B1E1E] -mt-1 sm:-mt-3">
            Tales
          </span>
        </motion.div>

        {/* ⚜️ Vintage Ornate Golden Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="my-5 flex items-center justify-center gap-3 text-[#C5B49E]"
        >
          <span className="h-px w-20 sm:w-28 bg-[#C5B49E]/70" />
          <svg className="h-3.5 w-3.5 text-[#C5B49E]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
          </svg>
          <span className="h-px w-20 sm:w-28 bg-[#C5B49E]/70" />
        </motion.div>

        {/* 💬 Call To Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-1"
        >
          <button
            type="button"
            onClick={() => openModal()}
            className="group relative inline-flex items-center gap-4 rounded-full bg-[#6B1414] py-3 pl-8 pr-3 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-white shadow-xl shadow-[#6B1414]/30 hover:bg-[#580F0F] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Begin a Conversation</span>
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white text-[#6B1414] shadow-sm transition-transform duration-300 group-hover:translate-x-1 font-bold text-xs sm:text-sm">
              →
            </span>
          </button>
        </motion.div>

        {/* 🌟 5. Sub-Hero Intro Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 w-full max-w-5xl rounded-3xl border border-[#D9CDBD] bg-[#FAF7F2]/95 p-4 sm:p-5 shadow-lg backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            {/* Left: Icon & Catchphrase */}
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-xs border border-[#D9CDBD] text-[#8B1E1E]">
                <MessageSquare size={18} className="fill-[#8B1E1E]/15" />
              </div>
              <h3 className="serif text-xl sm:text-2xl font-bold text-[#241512] whitespace-nowrap">
                Let&apos;s Bring Your Story To Life
              </h3>
            </div>

            {/* Center: Narrative snippet */}
            <div className="hidden md:block h-9 w-px bg-[#D9CDBD]" />
            <p className="max-w-md text-xs sm:text-sm text-[#736B63] leading-relaxed">
              From intimate gatherings to grand celebrations, we craft experiences that stay with you forever.
            </p>

            {/* Right: Explore link */}
            <div className="hidden md:block h-9 w-px bg-[#D9CDBD]" />
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#241512] hover:text-[#8B1E1E] transition-colors group"
            >
              <span>Explore Our Work</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D9CDBD] bg-white text-[#241512] shadow-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#8B1E1E] group-hover:text-white group-hover:border-[#8B1E1E] font-bold text-xs">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
