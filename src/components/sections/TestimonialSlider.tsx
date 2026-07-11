"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { MotionSection } from "@/components/ui/Motion";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  const move = (direction: number) => setIndex((current) => (current + direction + testimonials.length) % testimonials.length);

  return (
    <MotionSection className="py-24">
      <div className="container-editorial grid items-center gap-10 border-y border-[var(--fine-border)] py-14 lg:grid-cols-[0.7fr_1.3fr]">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.name}
            initial={{ opacity: 0, clipPath: "inset(0 0 18% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 18% 0)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[4/5] w-56 overflow-hidden sm:w-72"
          >
            <Image src={item.portrait.src} alt={item.portrait.alt} fill sizes="288px" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={item.quote}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow">Client Notes</p>
              <blockquote className="serif mt-5 text-[clamp(2.2rem,5vw,5rem)] leading-[1] text-[var(--espresso)]">“{item.quote}”</blockquote>
              <p className="mt-7 text-sm uppercase tracking-[0.18em]">{item.name}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.location} · {item.type}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center gap-4">
            <motion.button type="button" onClick={() => move(-1)} whileHover={{ x: -2 }} whileTap={{ scale: 0.96 }} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-[var(--fine-border)]" aria-label="Previous testimonial">
              <ArrowLeft size={18} />
            </motion.button>
            <motion.button type="button" onClick={() => move(1)} whileHover={{ x: 2 }} whileTap={{ scale: 0.96 }} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-[var(--fine-border)]" aria-label="Next testimonial">
              <ArrowRight size={18} />
            </motion.button>
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{index + 1} / {testimonials.length}</span>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
