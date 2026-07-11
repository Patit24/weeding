"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "-80px" } as const;

export function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.75, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={reduced ? undefined : { clipPath: "inset(0 0 0% 0)" }}
      viewport={viewport}
      transition={{ duration: 1, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionSection({ children, className, delay = 0, ...props }: HTMLMotionProps<"section"> & { delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.section
      initial={reduced ? false : { opacity: 0, y: 34 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.85, ease, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function StaggerGroup({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "show"}
      viewport={viewport}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlowZoom({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { scale: 1.04 }}
      whileInView={reduced ? undefined : { scale: 1 }}
      viewport={viewport}
      transition={{ duration: 1.6, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
