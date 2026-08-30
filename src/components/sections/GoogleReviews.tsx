"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle, ExternalLink, MessageSquare, MapPin } from "lucide-react";
import { googleReviews, googleProfileStats, type GoogleReview } from "@/data/google-reviews";
import { FadeIn } from "@/components/ui/Motion";

const categories = ["All", "Weddings", "Cinematography", "Pre-Weddings", "Event Planning"] as const;

export function GoogleReviews() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredReviews = activeCategory === "All"
    ? googleReviews
    : googleReviews.filter((r) => r.eventType === activeCategory);

  return (
    <section className="relative border-b border-[var(--fine-border)] bg-[var(--warm-ivory)] py-20 lg:py-28 text-[var(--charcoal)] overflow-hidden">
      <div className="container-editorial">
        {/* Top Header with Google Business Profile Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[var(--fine-border)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-700" />
              <span>Google Business Profile</span>
            </div>
            <h2 className="serif mt-3 text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.95] text-[var(--espresso)]">
              Client Stories on Google
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Genuine experiences from couples, families, and organizers across Kolkata, West Bengal, Bihar, and Jharkhand.
            </p>
          </div>

          {/* Google Summary Badge Card */}
          <div className="flex flex-wrap items-center gap-6 p-5 border border-[var(--fine-border)] bg-[var(--soft-white)] shadow-sm">
            {/* Google G Logo SVG */}
            <div className="flex items-center gap-3">
              <svg className="h-8 w-8" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="serif text-2xl font-bold text-[var(--espresso)]">{googleProfileStats.rating}</span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-[0.68rem] text-[var(--muted)] uppercase tracking-wider font-semibold">
                  {googleProfileStats.totalReviews} Verified Google Reviews
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={googleProfileStats.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-[var(--espresso)] bg-[var(--espresso)] px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--warm-ivory)] hover:bg-[var(--charcoal)] transition-colors"
              >
                <span>Write Review</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={googleProfileStats.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-[var(--fine-border)] bg-transparent px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--espresso)] hover:bg-[var(--warm-ivory)] transition-colors"
              >
                <span>Google Maps</span>
                <MapPin size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-all ${
                  isActive
                    ? "border-[var(--espresso)] bg-[var(--espresso)] text-[var(--warm-ivory)]"
                    : "border-[var(--fine-border)] bg-[var(--soft-white)] text-[var(--charcoal)] hover:border-[var(--espresso)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Reviews Masonry / Responsive Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between border border-[var(--fine-border)] bg-[var(--soft-white)] p-6 shadow-sm transition-all hover:border-[var(--espresso)]"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-inner"
                        style={{ backgroundColor: rev.avatarBg }}
                      >
                        {rev.authorName.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-semibold text-[var(--espresso)] leading-snug">
                            {rev.authorName}
                          </h4>
                          {rev.verified && (
                            <span title="Verified Customer" className="inline-flex items-center">
                              <CheckCircle size={14} className="text-emerald-700 shrink-0" />
                            </span>
                          )}
                        </div>
                        <p className="text-[0.68rem] text-[var(--muted)]">{rev.authorLocation}</p>
                      </div>
                    </div>

                    <span className="text-[0.68rem] text-[var(--muted)]">{rev.relativeTime}</span>
                  </div>

                  {/* Stars & Event Category */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--muted)] bg-[var(--warm-ivory)] px-2 py-0.5 border border-[var(--fine-border)]">
                      {rev.eventType}
                    </span>
                  </div>

                  {/* Highlight phrase */}
                  {rev.highlightPhrase && (
                    <p className="serif mt-3 text-base font-semibold text-[var(--espresso)] italic leading-snug">
                      "{rev.highlightPhrase}"
                    </p>
                  )}

                  {/* Review Text */}
                  <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                    {rev.text}
                  </p>
                </div>

                {/* Owner response if available */}
                {rev.ownerResponse && (
                  <div className="mt-5 border-t border-[var(--fine-border)] pt-3 text-[0.72rem] bg-[rgba(227,232,229,0.4)] p-3">
                    <div className="flex items-center gap-1.5 font-semibold text-[var(--espresso)]">
                      <MessageSquare size={12} />
                      <span>Response from Shiladitya Das (Owner)</span>
                    </div>
                    <p className="mt-1 text-[var(--muted)] leading-relaxed italic">
                      "{rev.ownerResponse}"
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[var(--fine-border)] pt-8">
          <p className="text-xs text-[var(--muted)]">
            📍 Located at Tollygunge Malancha Cinema, Kolkata 700040. Available across West Bengal, Bihar, Jharkhand & Destination weddings.
          </p>
          <a
            href={googleProfileStats.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--espresso)] hover:underline"
          >
            <span>Read all 128+ reviews on Google</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
