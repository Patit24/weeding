"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const reset = () => window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(reset);
    const shortTimer = window.setTimeout(reset, 80);
    const restoreTimer = window.setTimeout(reset, 320);

    window.addEventListener("pageshow", reset);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(shortTimer);
      window.clearTimeout(restoreTimer);
      window.removeEventListener("pageshow", reset);
    };
  }, [pathname]);

  return null;
}
