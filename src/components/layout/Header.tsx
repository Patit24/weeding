"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-[var(--warm-ivory)] focus:px-4 focus:py-3">
        Skip to content
      </a>
      <header
        className={cn(
          "fixed left-0 top-0 z-50 w-full transition-all duration-500",
          scrolled || open ? "border-b border-[var(--fine-border)] bg-[rgba(227,232,229,0.94)] text-[var(--espresso)]" : "border-b border-[var(--fine-border)] bg-[rgba(227,232,229,0.78)] text-[var(--espresso)]",
        )}
      >
        <div className="container-wide grid min-h-20 grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-8">
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "link-underline text-xs uppercase tracking-[0.18em]",
                  (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))) && "font-semibold",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/" className="text-center" aria-label={`${siteConfig.name} home`}>
            <span className="serif block text-2xl leading-none sm:text-3xl">স্মৃতিকুঠি</span>
            <span className="block text-[0.56rem] uppercase tracking-[0.28em]">The Wedding Tales</span>
          </Link>
          <div className="hidden items-center justify-end gap-7 lg:flex">
            {navLinks.slice(4).map((link) => (
              <Link key={link.href} href={link.href} className="link-underline text-xs uppercase tracking-[0.18em]">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="link-underline text-xs font-semibold uppercase tracking-[0.18em]">
              Check Availability
            </Link>
          </div>
          <button
            type="button"
            className="col-start-3 ml-auto inline-flex min-h-11 min-w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--warm-ivory)] px-6 pb-10 pt-28 text-[var(--espresso)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-5"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                  <Link href={link.href} onClick={() => setOpen(false)} className="serif text-[clamp(2.7rem,14vw,5rem)] leading-none">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            <div className="mt-12 border-t border-[var(--fine-border)] pt-8 text-sm leading-8 text-[var(--muted)]">
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.hours}</p>
              <a className="link-underline mt-4 inline-flex" href={siteConfig.instagram}>
                Instagram
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-8 flex min-h-11 items-center justify-center border border-[var(--espresso)] bg-[var(--espresso)] px-5 text-xs uppercase tracking-[0.18em] text-[var(--warm-ivory)]">
                Consultation
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
