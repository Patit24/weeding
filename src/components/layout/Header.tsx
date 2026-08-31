"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteConfig, defaultWhatsAppUrl } from "@/data/site";
import { useAvailabilityModal } from "@/components/ui/AvailabilityModal";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useAvailabilityModal();

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
          scrolled || open
            ? "border-b border-[var(--gold-border)] bg-[rgba(250,246,240,0.96)] backdrop-blur-md shadow-sm text-[var(--espresso)]"
            : "border-b border-[var(--fine-border)] bg-[rgba(250,246,240,0.88)] backdrop-blur-sm text-[var(--espresso)]",
        )}
      >
        <div className="container-wide flex min-h-20 items-center justify-between gap-3 px-4 sm:px-8">
          {/* Left Navigation */}
          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary navigation">
            {navLinks.slice(0, 4).map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-200 no-underline whitespace-nowrap",
                    isActive
                      ? "font-bold text-[var(--crimson)]"
                      : "font-medium text-[var(--espresso)] hover:text-[var(--crimson)]",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--crimson)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Center Brand Logo */}
          <Link href="/" className="group flex flex-col items-center justify-center py-1 transition-transform duration-300 hover:scale-105" aria-label={`${siteConfig.name} home`}>
            <div className="relative h-10 sm:h-12 w-32 sm:w-44">
              <Image
                src="/brand-logo.png"
                alt="স্মৃতিকুঠি The Wedding Tales official logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="block text-[0.54rem] font-bold uppercase tracking-[0.28em] text-[var(--crimson)] group-hover:text-[var(--gold-dark)] transition-colors">
              The Wedding Tales
            </span>
          </Link>

          {/* Right Navigation & CTA */}
          <div className="hidden items-center justify-end gap-5 xl:gap-6 lg:flex">
            {navLinks.slice(4).map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-200 no-underline whitespace-nowrap",
                    isActive
                      ? "font-bold text-[var(--crimson)]"
                      : "font-medium text-[var(--espresso)] hover:text-[var(--crimson)]",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--crimson)]" />
                  )}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => openModal()}
              className="relative group flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#8B1E1E] to-[#6A1414] px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] !text-white shadow-[0_4px_16px_rgba(139,30,30,0.28)] border border-[#D4AF37]/50 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_6px_24px_rgba(139,30,30,0.45)] hover:scale-[1.03] active:scale-95 whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
              <span className="!text-white font-bold tracking-[0.18em]">Check Availability</span>
              <ArrowUpRight size={13} className="text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center lg:hidden text-[var(--crimson)]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
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
                  <Link href={link.href} onClick={() => setOpen(false)} className="serif text-[clamp(2.7rem,14vw,5rem)] leading-none no-underline">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            <div className="mt-12 border-t border-[var(--fine-border)] pt-8 text-sm leading-8 text-[var(--muted)]">
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.hours}</p>
              <a className="mt-4 inline-flex font-semibold text-[var(--crimson)] hover:underline" href={siteConfig.instagram}>
                Instagram
              </a>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openModal();
                }}
                className="relative group mt-8 flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#8B1E1E] to-[#6A1414] px-6 text-xs font-bold uppercase tracking-[0.18em] !text-white shadow-[0_4px_16px_rgba(139,30,30,0.3)] border border-[#D4AF37]/50 cursor-pointer"
              >
                <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                <span className="!text-white font-bold">Check Availability</span>
                <ArrowUpRight size={15} className="text-[#D4AF37]" />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
