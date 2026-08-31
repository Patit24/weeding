"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { defaultWhatsAppUrl } from "@/data/site";
import { useAvailabilityModal } from "@/components/ui/AvailabilityModal";

export function HeroKineticTitle() {
  const { openModal } = useAvailabilityModal();

  return (
    <div className="relative w-full overflow-hidden bg-[#FAF7F2] pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* 🌸 1. TOP-LEFT HANGING BOTANICAL BRANCH */}
      <div className="pointer-events-none absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-56 sm:w-72 md:w-88 lg:w-[420px] aspect-[4/3] mix-blend-multiply opacity-85 z-0 select-none">
        <Image
          src="/hero-floral-top-left.jpg"
          alt="Vintage floral branch"
          fill
          priority
          sizes="(min-width: 1024px) 420px, 280px"
          className="object-contain object-top-left"
        />
      </div>

      {/* 🏛️ 2. BOTTOM-LEFT VICTORIA MEMORIAL WITH PEACH ROSES */}
      <div className="pointer-events-none absolute -bottom-10 -left-6 sm:left-0 w-64 sm:w-80 md:w-[380px] lg:w-[460px] aspect-[3/4] mix-blend-multiply opacity-90 z-0 select-none">
        <Image
          src="/hero-victoria-left.jpg"
          alt="Victoria Memorial Kolkata sketch with peach watercolor roses"
          fill
          priority
          sizes="(min-width: 1024px) 460px, 320px"
          className="object-contain object-bottom-left"
        />
      </div>

      {/* 🏰 3. RIGHT MUGHAL ARCHWAY WITH BOTANICAL VINES */}
      <div className="pointer-events-none absolute top-10 -right-6 sm:right-0 w-64 sm:w-80 md:w-[400px] lg:w-[480px] aspect-[3/4] mix-blend-multiply opacity-90 z-0 select-none">
        <Image
          src="/hero-arch-right.jpg"
          alt="Classical Mughal archway with peach floral vines"
          fill
          priority
          sizes="(min-width: 1024px) 480px, 340px"
          className="object-contain object-right"
        />
      </div>

      {/* 🌟 4. CENTER EDITORIAL HEADLINE & CONTENT */}
      <div className="container-editorial relative z-10 flex flex-col items-center text-center">
        {/* 🌸 Top Heritage Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/60 bg-[#FAF7F2]/90 px-5 py-1.5 shadow-xs backdrop-blur-md"
        >
          <span className="text-xs text-[#8B1E1E]">🌸</span>
          <span className="serif text-xs font-bold uppercase tracking-[0.26em] text-[#8B1E1E]">
            স্মৃতিকুঠি
          </span>
          <span className="text-[#D4AF37]">•</span>
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#8B1E1E]">
            Kolkata &amp; Destination
          </span>
        </motion.div>

        {/* 📜 Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.34em] text-[#7D756D]"
        >
          Where Every Detail Becomes A Memory
        </motion.p>

        {/* 👑 Grand Dual-Tone Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="mt-3 flex flex-col items-center justify-center font-serif leading-[0.88] tracking-tight select-none"
        >
          <span className="text-[clamp(4.2rem,11.5vw,9.8rem)] font-normal text-[#241512] drop-shadow-xs">
            Wedding
          </span>
          <span className="text-[clamp(4.2rem,11.5vw,9.8rem)] font-normal text-[#8B1E1E] -mt-1 sm:-mt-3 drop-shadow-xs">
            Tales
          </span>
        </motion.div>

        {/* ⚜️ Vintage Ornate Golden Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="my-6 flex items-center justify-center gap-4 text-[#D4AF37]"
        >
          <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <svg className="h-4 w-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
          </svg>
          <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </motion.div>

        {/* 💬 Call To Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-2"
        >
          <button
            type="button"
            onClick={() => openModal()}
            className="group relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#8B1E1E] via-[#7A1515] to-[#630E0E] py-3 pl-8 pr-3 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-white shadow-xl shadow-[#8B1E1E]/25 border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8B1E1E]/40 active:scale-95 cursor-pointer"
          >
            <span>Begin a Conversation</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#8B1E1E] shadow-sm transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={15} />
            </span>
          </button>
        </motion.div>

        {/* 🌟 5. Sub-Hero Intro Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 w-full max-w-5xl rounded-3xl border border-[var(--gold-border)] bg-[rgba(250,247,242,0.92)] p-4 sm:p-6 shadow-xl backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            {/* Left: Icon & Catchphrase */}
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-md border border-[var(--gold-border)] text-[#8B1E1E]">
                <MessageSquare size={20} className="fill-[#8B1E1E]/15" />
              </div>
              <h3 className="serif text-xl sm:text-2xl font-bold text-[var(--espresso)] whitespace-nowrap">
                Let&apos;s Bring Your Story To Life
              </h3>
            </div>

            {/* Center: Narrative snippet */}
            <div className="hidden md:block h-10 w-px bg-[var(--fine-border)]" />
            <p className="max-w-md text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              From intimate gatherings to grand celebrations, we craft experiences that stay with you forever.
            </p>

            {/* Right: Explore link */}
            <div className="hidden md:block h-10 w-px bg-[var(--fine-border)]" />
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#8B1E1E] transition-all hover:text-[#6A1414] group"
            >
              <span>Explore Our Work</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--fine-border)] bg-white text-[var(--espresso)] shadow-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#8B1E1E] group-hover:text-white group-hover:border-[#8B1E1E]">
                <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
