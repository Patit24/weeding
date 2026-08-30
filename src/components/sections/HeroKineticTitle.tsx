"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroKineticTitle() {
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 28, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 28, mass: 0.7 });
  const titleX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const titleY = useTransform(smoothY, [-1, 1], [8, -8]);
  const rotateX = useTransform(smoothY, [-1, 1], [1.4, -1.4]);
  const rotateY = useTransform(smoothX, [-1, 1], [-1.8, 1.8]);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function handleLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      className="relative flex min-h-[50vh] sm:min-h-[54vh] flex-col items-center justify-end overflow-hidden px-4 pb-10 text-center lg:min-h-[58vh]"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <motion.div
        aria-hidden="true"
        initial={reduced ? false : { scaleX: 0, opacity: 0 }}
        animate={reduced ? undefined : { scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.25, ease, delay: 0.18 }}
        className="absolute bottom-[6%] left-1/2 h-px w-[min(82vw,1100px)] origin-center -translate-x-1/2 bg-[rgba(185,30,18,0.22)]"
      />

      {/* Elegant Crown / Jewel Subtitle Badge */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: -10 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="relative z-10 mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--gold-border)] bg-[rgba(237,182,0,0.08)] px-4 py-1 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[var(--crimson)] backdrop-blur-sm"
      >
        <span>স্মৃতিকুঠি</span>
        <span className="text-[var(--gold-dark)]">•</span>
        <span>Kolkata & Destination</span>
      </motion.div>

      <motion.p
        className="relative z-10 max-w-xl text-[0.72rem] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]"
        initial={reduced ? false : { opacity: 0, y: 10 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
      >
        {siteConfig.tagline}
      </motion.p>

      <motion.h1
        className="serif relative z-10 mt-5 text-[clamp(4.8rem,13.5vw,13.5rem)] leading-[0.78] tracking-normal text-[var(--espresso)] select-none"
        style={reduced ? undefined : { x: titleX, y: titleY, rotateX, rotateY, transformPerspective: 1200 }}
        initial={reduced ? false : "hidden"}
        animate={reduced ? undefined : "show"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
        }}
      >
        <TitleWord>Wedding</TitleWord>
        <br />
        <TitleWord>Tales</TitleWord>
      </motion.h1>
    </div>
  );
}

function TitleWord({ children }: { children: string }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        className="inline-block origin-bottom"
        variants={{
          hidden: { y: "108%", rotate: 1.8, opacity: 0 },
          show: {
            y: "0%",
            rotate: 0,
            opacity: 1,
            transition: { duration: 1.05, ease },
          },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
