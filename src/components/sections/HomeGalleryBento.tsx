"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Eye, X, ChevronLeft, ChevronRight, MessageCircle, MapPin } from "lucide-react";
import { allGalleryPhotos, type GalleryItem } from "@/data/unified-gallery";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type FilterTab = "All" | "Weddings" | "Pre-Weddings" | "Rice Ceremonies" | "Rituals & Portraits";

const filterTabs: { key: FilterTab; label: string; icon: string }[] = [
  { key: "All", label: "Featured Highlights", icon: "✨" },
  { key: "Weddings", label: "Bengali Weddings", icon: "💍" },
  { key: "Pre-Weddings", label: "Pre-Weddings", icon: "🌿" },
  { key: "Rice Ceremonies", label: "Rice Ceremonies", icon: "👶" },
  { key: "Rituals & Portraits", label: "Rituals & Portraits", icon: "👰" },
];

export function HomeGalleryBento() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Filter items
  const filteredPhotos = activeTab === "All"
    ? allGalleryPhotos.filter((p) => p.featured || ["wed-anirban-1", "wed-sneha-1", "pre-sn-1", "rice-aarav-1", "wed-anirban-2", "pre-ad-1"].includes(p.id)).slice(0, 6)
    : allGalleryPhotos.filter((p) => p.category === activeTab).slice(0, 6);

  const handleOpenLightbox = (photo: GalleryItem) => {
    setSelectedPhoto(photo);
  };

  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-[var(--sand)]/30 border-y border-[var(--fine-border)]">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-[var(--fine-border)]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-border)] bg-[rgba(237,182,0,0.12)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-dark)]">
              <Sparkles size={14} className="text-[var(--gold)]" />
              <span>Visual Anthology • 2026 Collection</span>
            </div>
            <h2 className="serif mt-3 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[var(--espresso)]">
              Celebrations, gathered in fragments.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--muted)] max-w-xl">
              Authentic Bengali weddings, golden hour pre-weddings, and sacred childhood milestones preserved in timeless heirloom aesthetics.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 self-start md:self-end rounded-full bg-gradient-to-r from-[#8B1E1E] to-[#6A1414] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] !text-white shadow-crimson-glow border border-[#D4AF37]/40 transition-all duration-300 hover:border-[#D4AF37] hover:scale-105 active:scale-95"
          >
            <span>Explore Full Portfolio</span>
            <ArrowUpRight size={14} className="text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Animated Filter Category Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2 pb-4">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer select-none",
                  isActive
                    ? "text-white shadow-md font-bold"
                    : "border border-[var(--gold-border)] bg-[var(--soft-white)] text-[var(--charcoal)] hover:bg-[var(--sand)] hover:border-[var(--crimson)]/40"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeBentoFilter"
                    className="absolute inset-0 rounded-full bg-crimson-gradient"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 2026 Trending Bento Layout */}
        <motion.div layout className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => {
              // Asymmetric bento spans for 6 items:
              // Index 0: Main Grand Card (col-span-12 lg:col-span-8 aspect-[16/10])
              // Index 1: Editorial Portrait Card (col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5])
              // Index 2, 3, 4: Triplet Bento Cards (col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/3])
              // Index 5: Wide Cinematic Card or Standard Card
              const isHeroCard = index === 0;
              const isPortraitCard = index === 1;

              const gridSpanClass = isHeroCard
                ? "col-span-12 lg:col-span-8 aspect-[16/10]"
                : isPortraitCard
                ? "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5] sm:aspect-auto sm:row-span-1 lg:row-span-1"
                : "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/3]";

              return (
                <motion.div
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.94, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-xl cursor-pointer",
                    gridSpanClass
                  )}
                  onClick={() => handleOpenLightbox(photo)}
                >
                  {/* Photo with Ken-Burns Hover Zoom */}
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    priority={index === 0}
                    sizes={
                      isHeroCard
                        ? "(min-width: 1024px) 66vw, 100vw"
                        : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Radial Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="rounded-full bg-black/50 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md border border-white/20 shadow-sm">
                      {photo.badge}
                    </span>
                    <span className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 border border-white/30">
                      <Eye size={15} />
                    </span>
                  </div>

                  {/* Bottom Meta & Story Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                      <MapPin size={13} />
                      <span>{photo.location}</span>
                    </div>

                    <h3 className="serif mt-1.5 text-xl sm:text-2xl font-bold leading-snug drop-shadow-sm group-hover:text-[var(--gold-light)] transition-colors">
                      {photo.title}
                    </h3>

                    <div className="mt-2 flex items-center justify-between pt-2 border-t border-white/20">
                      <span className="text-xs text-white/80 font-medium">
                        Client: <strong className="text-white">{photo.client}</strong>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[0.72rem] font-bold uppercase tracking-wider text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                        <span>View Photo</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/portfolio"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-crimson-gradient px-8 py-3 text-xs font-bold uppercase tracking-[0.18em] !text-white shadow-crimson-glow border border-white/20 transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span>Explore Complete Portfolio</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link
            href="/#rate-calculator"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--espresso)] bg-[var(--soft-white)] px-8 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--espresso)] shadow-sm transition-all duration-300 hover:bg-[var(--espresso)] hover:text-white hover:scale-105 active:scale-95"
          >
            <span>Calculate Custom Package</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            onClick={handleCloseLightbox}
          >
            <button
              type="button"
              onClick={handleCloseLightbox}
              aria-label="Close Lightbox"
              className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:rotate-90"
            >
              <X size={24} />
            </button>

            {/* Navigation arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevPhoto();
              }}
              aria-label="Previous photograph"
              className="absolute left-6 z-10 hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-110"
            >
              <ChevronLeft size={30} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNextPhoto();
              }}
              aria-label="Next photograph"
              className="absolute right-6 z-10 hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-110"
            >
              <ChevronRight size={30} />
            </button>

            <div
              className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-[var(--espresso)] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] max-h-[65vh] w-full bg-black">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  priority
                  sizes="1200px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[var(--espresso)] p-6 text-[var(--warm-ivory)] border-t border-white/10">
                <div>
                  <span className="inline-block rounded-full bg-[#D4AF37]/20 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/40">
                    {selectedPhoto.category} • {selectedPhoto.badge}
                  </span>
                  <h3 className="serif mt-2 text-2xl text-white">{selectedPhoto.title}</h3>
                  <p className="text-xs text-white/70 mt-1">
                    Client: <strong className="text-white">{selectedPhoto.client}</strong> • {selectedPhoto.location}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hello Shiladitya, I saw ${selectedPhoto.title} (${selectedPhoto.client}) on your website and would like to check booking availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-105"
                  >
                    <MessageCircle size={16} />
                    <span>Inquire Photo</span>
                  </a>
                  {selectedPhoto.storySlug && (
                    <Link
                      href={`/portfolio/${selectedPhoto.storySlug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-white/30"
                    >
                      <span>Full Story</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
