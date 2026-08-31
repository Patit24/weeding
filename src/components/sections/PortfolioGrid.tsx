"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { allGalleryPhotos, galleryCategories, type GalleryItem } from "@/data/unified-gallery";
import { siteConfig } from "@/data/site";
import { 
  Sparkles, 
  Search, 
  LayoutGrid, 
  Columns3, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  MapPin, 
  Heart,
  MessageCircle,
  Share2,
  Check
} from "lucide-react";

export function PortfolioGrid() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"bento" | "grid">("bento");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  // Filtered photos
  const filteredPhotos = useMemo(() => {
    return allGalleryPhotos.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allGalleryPhotos.length };
    galleryCategories.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = allGalleryPhotos.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Lightbox Navigation
  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  }, [lightboxIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  }, [lightboxIndex, filteredPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  const handleShare = (photo: GalleryItem) => {
    if (navigator.share) {
      navigator.share({
        title: photo.title,
        text: `Check out this shot from ${photo.client} by Sritikuthi The Wedding Tales!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-8">
      {/* SaaS Style Interactive Filter & Search Bar */}
      <div className="rounded-3xl border border-[var(--gold-border)] bg-[var(--soft-white)]/80 p-4 shadow-xl backdrop-blur-xl md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Gallery category filters">
            {galleryCategories.map((item) => {
              const count = categoryCounts[item] || 0;
              const isActive = category === item;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCategory(item)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-crimson-glow"
                      : "text-[var(--espresso)] hover:bg-[var(--warm-ivory)]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full bg-crimson-gradient"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                  <span
                    className={`relative z-10 rounded-full px-2 py-0.5 text-[0.65rem] font-bold ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-[var(--fine-border)] text-[var(--muted)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & View Mode Switcher */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
              <input
                type="text"
                placeholder="Search ritual, client, city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full rounded-full border border-[var(--fine-border)] bg-[var(--warm-ivory)]/60 pl-9 pr-8 text-xs text-[var(--espresso)] placeholder:text-[var(--muted)] focus:border-[var(--crimson)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--crimson)]/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--muted)] hover:text-[var(--espresso)]"
                >
                  ×
                </button>
              )}
            </div>

            {/* Layout Mode Switcher */}
            <div className="hidden sm:flex items-center rounded-full border border-[var(--fine-border)] bg-[var(--warm-ivory)] p-1">
              <button
                type="button"
                title="Bento Masonry Flow"
                onClick={() => setViewMode("bento")}
                className={`rounded-full p-1.5 transition-colors ${
                  viewMode === "bento"
                    ? "bg-white text-[var(--crimson)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--espresso)]"
                }`}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                type="button"
                title="Structured Grid"
                onClick={() => setViewMode("grid")}
                className={`rounded-full p-1.5 transition-colors ${
                  viewMode === "grid"
                    ? "bg-white text-[var(--crimson)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--espresso)]"
                }`}
              >
                <Columns3 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filter Metrics Banner */}
      <div className="flex items-center justify-between text-xs text-[var(--muted)] px-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span>Showing <strong>{filteredPhotos.length}</strong> master photographs</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Ultra 4K Clarity</span>
          <span>Click any image to expand & enquire</span>
        </div>
      </div>

      {/* Unified Master Portfolio Gallery Grid */}
      <motion.div
        layout
        className={
          viewMode === "bento"
            ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[340px]"
            : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => {
            // Bento sizing rules for modern editorial rhythm
            const isFeatured = photo.featured && viewMode === "bento";
            const isLandscape = photo.aspect === "landscape" && viewMode === "bento";
            const isTall = photo.aspect === "tall" && viewMode === "bento";

            let bentoSpan = "col-span-1 row-span-1";
            if (isFeatured) bentoSpan = "sm:col-span-2 sm:row-span-2";
            else if (isLandscape) bentoSpan = "sm:col-span-2 sm:row-span-1";
            else if (isTall) bentoSpan = "sm:col-span-1 sm:row-span-2";

            return (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.45, delay: (index % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-md transition-all duration-500 hover:shadow-2xl ${
                  viewMode === "bento" ? bentoSpan : "aspect-[4/5]"
                }`}
              >
                {/* Image Container */}
                <div 
                  className="relative h-full w-full cursor-pointer overflow-hidden"
                  onClick={() => setLightboxIndex(index)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading={index < 4 ? "eager" : "lazy"}
                    priority={index < 2}
                    sizes={isFeatured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Top Badge Overlay */}
                  <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                    <Sparkles size={10} className="text-[var(--gold-light)]" />
                    <span>{photo.badge}</span>
                  </div>

                  {/* Quick Zoom Trigger */}
                  <button
                    type="button"
                    title="Quick Zoom View"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(index);
                    }}
                    className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[var(--espresso)] group-hover:opacity-100"
                  >
                    <Maximize2 size={14} />
                  </button>

                  {/* Bottom Information Drawer (Glassmorphic) */}
                  <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/20 bg-gradient-to-t from-black/85 via-black/60 to-black/40 p-4 text-white backdrop-blur-md transition-all duration-500 group-hover:bg-black/90">
                    <div className="flex items-end justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[0.68rem] text-[var(--gold-light)]">
                          <MapPin size={11} />
                          <span className="font-semibold uppercase tracking-wider">{photo.location}</span>
                        </div>
                        <h3 className="serif text-base font-normal leading-snug tracking-wide text-white line-clamp-1 group-hover:text-[var(--gold-light)]">
                          {photo.title}
                        </h3>
                        <p className="text-xs text-white/70">
                          {photo.client} · <span className="text-white/90">{photo.category}</span>
                        </p>
                      </div>

                      {/* Explore Story Button */}
                      <Link
                        href={`/portfolio/${photo.storySlug}`}
                        onClick={(e) => e.stopPropagation()}
                        title="View Full Story"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:scale-110 hover:bg-[var(--crimson)] hover:text-white"
                      >
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Zero State if search returns empty */}
      {filteredPhotos.length === 0 && (
        <div className="rounded-3xl border border-[var(--fine-border)] bg-[var(--soft-white)] p-12 text-center">
          <p className="serif text-2xl text-[var(--espresso)]">No photographs matched &quot;{searchQuery}&quot;</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Try selecting a different category or clear your search term.</p>
          <button
            type="button"
            onClick={() => {
              setCategory("All");
              setSearchQuery("");
            }}
            className="mt-6 inline-flex rounded-full bg-crimson-gradient px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-crimson-glow"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 2026 SaaS High-Res Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-2xl md:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Bar Controls */}
            <div className="absolute inset-x-6 top-6 z-20 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[var(--gold-light)] backdrop-blur-md">
                  {activePhoto.badge}
                </span>
                <span className="text-xs text-white/60">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  title="Share Photo"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(activePhoto);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
                </button>
                <button
                  type="button"
                  title="Close Lightbox (Esc)"
                  onClick={() => setLightboxIndex(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              title="Previous Photo (←)"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:text-black md:left-8"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              title="Next Photo (→)"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:text-black md:right-8"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Content Center Frame */}
            <div
              className="relative flex h-[85vh] w-full max-w-7xl flex-col items-center justify-center lg:flex-row gap-6 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Display */}
              <div className="relative h-full min-h-[45vh] w-full flex-1 overflow-hidden rounded-3xl border border-white/20 bg-black/70 shadow-2xl">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 75vw, 95vw"
                  className="object-contain p-2"
                />
              </div>

              {/* Story Details Card */}
              <div className="w-full max-w-sm shrink-0 rounded-3xl border border-white/15 bg-neutral-900/95 p-6 text-white backdrop-blur-xl shadow-2xl space-y-5">
                <div>
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--gold-light)]">
                    স্মৃতিকুঠি The Wedding Tales
                  </span>
                  <h2 className="serif mt-1 text-2xl font-medium leading-snug">
                    {activePhoto.title}
                  </h2>
                  <p className="mt-2 text-xs leading-5 text-white/70">
                    Client: <strong className="text-white">{activePhoto.client}</strong>
                  </p>
                  <p className="text-xs text-white/70">
                    Location: <strong className="text-white">{activePhoto.location}</strong>
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 text-xs text-white/80 leading-relaxed">
                  <p>{activePhoto.alt}</p>
                </div>

                {/* Lightbox Direct Actions */}
                <div className="space-y-2.5 pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      `Hello Shiladitya, I love this shot "${activePhoto.title}" from ${activePhoto.client} (${activePhoto.category}). I want this style for my celebration!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-crimson-gradient px-5 text-xs font-bold uppercase tracking-wider text-white shadow-crimson-glow transition-all hover:brightness-110 hover:scale-[1.02]"
                  >
                    <MessageCircle size={15} />
                    <span>Enquire for this Style</span>
                  </a>

                  <Link
                    href={`/portfolio/${activePhoto.storySlug}`}
                    className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
                  >
                    <span>View Full Story Page</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
