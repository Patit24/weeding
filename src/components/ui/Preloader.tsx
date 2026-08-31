"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/** Easing matching the site's --ease variable */
const ease = [0.22, 1, 0.36, 1] as const;

export function Preloader() {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [exit, setExit] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    // If user has already seen the preloader this session, skip it
    if (sessionStorage.getItem("preloader-done") === "1" || reduced) {
      setDone(true);
      return;
    }

    // Lock scroll while preloader is active
    document.body.style.overflow = "hidden";

    const DURATION = 2200; // ms for 0→100 fill

    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const raw = Math.min(elapsed / DURATION, 1);
      // Ease-out curve so it slows near 100 %
      const eased = 1 - Math.pow(1 - raw, 3);
      const pct = Math.round(eased * 100);
      setProgress(pct);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Hold at 100 % briefly, then trigger exit animation
        setTimeout(() => {
          setExit(true);
          // After exit animation completes, unmount
          setTimeout(() => {
            setDone(true);
            document.body.style.overflow = "";
            sessionStorage.setItem("preloader-done", "1");
          }, 900);
        }, 220);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
  }, [reduced]);

  if (done) return null;

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease } }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--espresso)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Subtle texture grain overlay */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              opacity: 0.6,
              pointerEvents: "none",
            }}
          />

          {/* Brand name in script font — mirrors Spylt logo treatment */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            style={{
              fontFamily: "var(--font-allura), cursive",
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              color: "var(--warm-ivory)",
              lineHeight: 1.1,
              letterSpacing: "0.01em",
              textAlign: "center",
              userSelect: "none",
              marginBottom: "2.8rem",
            }}
          >
            Sritikuthi
          </motion.div>

          {/* Counter + progress bar container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.6rem",
              width: "min(260px, 60vw)",
            }}
          >
            {/* Percentage readout */}
            <span
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.05rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                color: "var(--warm-ivory)",
                opacity: 0.82,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {progress}&thinsp;%
            </span>

            {/* Track line */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(250,246,240,0.18)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Fill */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  background: "var(--warm-ivory)",
                  width: `${progress}%`,
                  transition: "width 40ms linear",
                }}
              />
            </div>
          </motion.div>

          {/* Curtain panels that split and reveal on exit */}
          <AnimatePresence>
            {exit && (
              <>
                <motion.div
                  key="curtain-top"
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  transition={{ duration: 0.85, ease }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background: "var(--espresso)",
                    zIndex: 1,
                  }}
                />
                <motion.div
                  key="curtain-bottom"
                  initial={{ y: 0 }}
                  animate={{ y: "100%" }}
                  transition={{ duration: 0.85, ease }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background: "var(--espresso)",
                    zIndex: 1,
                  }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
