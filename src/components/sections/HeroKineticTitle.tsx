"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;
const eyebrow = "স্মৃতিকুঠি · The Wedding Tales · Kolkata";

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
      className="relative flex min-h-[58vh] flex-col items-center justify-end overflow-hidden px-4 pb-8 text-center lg:min-h-[62vh]"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <motion.div
        aria-hidden="true"
        initial={reduced ? false : { scaleX: 0, opacity: 0 }}
        animate={reduced ? undefined : { scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.25, ease, delay: 0.18 }}
        className="absolute bottom-[7%] left-1/2 h-px w-[min(78vw,1060px)] origin-center -translate-x-1/2 bg-[rgba(185,30,18,0.25)]"
      />

      <motion.div
        className="relative z-10 mb-5 inline-flex items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.92)] px-6 py-3 shadow-crimson-glow border border-[var(--gold-border)] backdrop-blur-sm"
        initial={reduced ? false : { scale: 0.85, opacity: 0, y: 15 }}
        animate={reduced ? undefined : { scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease, delay: 0.1 }}
      >
        <div className="relative h-14 sm:h-20 w-44 sm:w-64">
          <Image
            src="/brand-logo.png"
            alt="স্মৃতিকুঠি The Wedding Tales official Bengali brand logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </motion.div>
      <motion.p
        className="eyebrow relative z-10 flex flex-wrap justify-center gap-x-[0.34em] gap-y-1"
        initial={reduced ? false : "hidden"}
        animate={reduced ? undefined : "show"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.025, delayChildren: 0.12 } },
        }}
        aria-label={eyebrow}
      >
        {eyebrow.split("").map((char, index) => (
          <motion.span
            aria-hidden="true"
            key={`${char}-${index}`}
            variants={{
              hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease } },
            }}
            className={char === " " ? "w-[0.35em]" : ""}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
      <motion.p
        className="relative z-10 mt-5 max-w-2xl text-xs uppercase tracking-[0.22em] text-[var(--muted)]"
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.68 }}
      >
        {siteConfig.tagline}
      </motion.p>
      <motion.h1
        className="serif relative z-10 mt-6 text-[clamp(5rem,14vw,14.2rem)] leading-[0.76] tracking-normal"
        style={reduced ? undefined : { x: titleX, y: titleY, rotateX, rotateY, transformPerspective: 1200 }}
        initial={reduced ? false : "hidden"}
        animate={reduced ? undefined : "show"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18, delayChildren: 0.32 } },
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
