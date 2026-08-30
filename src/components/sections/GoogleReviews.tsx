"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  CheckCircle, 
  ExternalLink, 
  MessageSquare, 
  MapPin, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Share2, 
  ThumbsUp,
  Camera,
  Award
} from "lucide-react";
import { googleReviews, googleProfileStats, type GoogleReview } from "@/data/google-reviews";
import { FadeIn, MotionSection } from "@/components/ui/Motion";
import { siteConfig } from "@/data/site";

const categories = ["All", "Weddings", "Cinematography", "Pre-Weddings", "Event Planning"] as const;

export function GoogleReviews() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const filteredReviews = activeCategory === "All"
    ? googleReviews
    : googleReviews.filter((r) => r.eventType === activeCategory);

  const toggleHelpful = (id: string) => {
    setLikedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (likedReviews[id] ? -1 : 1),
    }));
  };

  return (
    <section className="relative border-b border-[var(--fine-border)] bg-[var(--soft-white)] py-20 lg:py-32 text-[var(--charcoal)] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[rgba(203,211,208,0.35)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[rgba(227,232,229,0.5)] blur-3xl" />

      <div className="container-editorial relative z-10">
        
        {/* 🌟 ULTRA-MODERN HEADER & GOOGLE TRUST HERO */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end pb-12 border-b border-[var(--fine-border)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--fine-border)] bg-[var(--warm-ivory)] text-xs font-semibold uppercase tracking-[0.22em] text-[var(--espresso)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Official Google Business Profile</span>
            </div>

            <h2 className="serif mt-4 text-[clamp(2.8rem,5.5vw,5.2rem)] leading-[0.95] text-[var(--espresso)]">
              Real Client Stories on Google
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">
              Every celebration tells a sacred truth. Read verified Google reviews from couples and families whose most intimate memories we had the privilege of capturing.
            </p>
          </div>

          {/* Google Summary Glassmorphic Trust Card */}
          <div className="border border-[var(--fine-border)] bg-[var(--warm-ivory)] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Google G Emblem + Rating Score */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md border border-[var(--fine-border)]">
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
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="serif text-3xl font-bold text-[var(--espresso)]">{googleProfileStats.rating}</span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={17} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <ShieldCheck size={14} className="text-emerald-700" />
                    <span className="text-xs font-semibold text-[var(--charcoal)]">
                      {googleProfileStats.totalReviews}+ Verified Google Ratings
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={googleProfileStats.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 border border-[var(--espresso)] bg-[var(--espresso)] px-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--warm-ivory)] hover:bg-[var(--charcoal)] transition-all shadow-sm"
                >
                  <Star size={13} fill="currentColor" />
                  <span>Write Review</span>
                </a>
                <a
                  href={googleProfileStats.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 border border-[var(--fine-border)] bg-[var(--soft-white)] px-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--espresso)] hover:border-[var(--espresso)] transition-colors"
                >
                  <MapPin size={13} />
                  <span>View on Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-6 pt-5 border-t border-[var(--fine-border)] grid grid-cols-3 gap-2 text-center text-xs">
              <div className="border-r border-[var(--fine-border)] pr-2">
                <span className="block font-bold text-base text-[var(--espresso)]">100%</span>
                <span className="text-[0.68rem] text-[var(--muted)] uppercase tracking-wider">On-Time Delivery</span>
              </div>
              <div className="border-r border-[var(--fine-border)] pr-2">
                <span className="block font-bold text-base text-[var(--espresso)]">4.9 ★</span>
                <span className="text-[0.68rem] text-[var(--muted)] uppercase tracking-wider">Average Rating</span>
              </div>
              <div>
                <span className="block font-bold text-base text-[var(--espresso)]">4+ Yrs</span>
                <span className="text-[0.68rem] text-[var(--muted)] uppercase tracking-wider">Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* 🌟 FILTER TABS */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-all ${
                    isActive
                      ? "border-[var(--espresso)] bg-[var(--espresso)] text-[var(--warm-ivory)] shadow-sm"
                      : "border-[var(--fine-border)] bg-[var(--warm-ivory)] text-[var(--charcoal)] hover:border-[var(--espresso)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[var(--muted)] font-medium">
            Showing {filteredReviews.length} client stories
          </div>
        </div>

        {/* 🌟 MODERN MASONRY / RESPONSIVE REVIEWS GRID */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev, index) => {
              const isLiked = likedReviews[rev.id];
              const likes = (helpfulCounts[rev.id] || 0) + (index % 3 + 2);

              return (
                <motion.div
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group relative flex flex-col justify-between border border-[var(--fine-border)] bg-[var(--warm-ivory)] p-7 transition-all duration-300 hover:border-[var(--espresso)] hover:shadow-lg"
                >
                  <div>
                    {/* Top Reviewer Row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div
                          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-md ring-2 ring-white/60"
                          style={{ backgroundColor: rev.avatarBg }}
                        >
                          {rev.authorName.charAt(0)}
                          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm border border-emerald-100">
                            <CheckCircle size={11} />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[var(--espresso)] leading-snug">
                            {rev.authorName}
                          </h4>
                          <div className="flex items-center gap-1.5 text-[0.7rem] text-[var(--muted)]">
                            <MapPin size={11} className="text-[var(--espresso)]" />
                            <span>{rev.authorLocation}</span>
                          </div>
                        </div>
                      </div>

                      {/* Google G Mini Icon */}
                      <svg className="h-5 w-5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
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
                    </div>

                    {/* Star Rating & Relative Time */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={15} fill="currentColor" />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--muted)] bg-[var(--soft-white)] px-2 py-0.5 border border-[var(--fine-border)]">
                          {rev.eventType}
                        </span>
                        <span className="text-[0.68rem] text-[var(--muted)]">{rev.relativeTime}</span>
                      </div>
                    </div>

                    {/* Highlight Phrase in Serif Quote */}
                    {rev.highlightPhrase && (
                      <p className="serif mt-4 text-lg font-semibold text-[var(--espresso)] italic leading-snug">
                        "{rev.highlightPhrase}"
                      </p>
                    )}

                    {/* Full Review Description */}
                    <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                      {rev.text}
                    </p>
                  </div>

                  <div>
                    {/* Owner Response Drawer */}
                    {rev.ownerResponse && (
                      <div className="mt-5 border-t border-[var(--fine-border)] pt-3 text-[0.72rem] bg-[rgba(247,246,241,0.8)] p-3.5 border-l-2 border-l-[var(--espresso)]">
                        <div className="flex items-center gap-1.5 font-semibold text-[var(--espresso)]">
                          <MessageSquare size={12} className="text-[var(--espresso)]" />
                          <span>Response from Shiladitya Das (Owner)</span>
                        </div>
                        <p className="mt-1 text-[var(--muted)] leading-relaxed italic">
                          "{rev.ownerResponse}"
                        </p>
                      </div>
                    )}

                    {/* Helpful interaction footer */}
                    <div className="mt-4 flex items-center justify-between pt-3 border-t border-[var(--fine-border)] text-xs text-[var(--muted)]">
                      <button
                        type="button"
                        onClick={() => toggleHelpful(rev.id)}
                        className={`inline-flex items-center gap-1.5 text-[0.7rem] font-medium transition-colors ${
                          isLiked ? "text-[var(--espresso)] font-bold" : "hover:text-[var(--espresso)]"
                        }`}
                      >
                        <ThumbsUp size={12} className={isLiked ? "fill-[var(--espresso)]" : ""} />
                        <span>Helpful ({likes})</span>
                      </button>

                      <span className="inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-wider text-emerald-800 font-semibold">
                        <CheckCircle size={11} /> Verified Customer
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 🌟 BOTTOM LOCATION CALLOUT & GOOGLE REVIEW INVITATION BANNER */}
        <div className="mt-16 border border-[var(--espresso)] bg-[var(--espresso)] text-[var(--warm-ivory)] p-8 sm:p-12 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--sand)]">
                <Award size={16} />
                <span>Join Our Story</span>
              </div>
              <h3 className="serif mt-3 text-3xl sm:text-4xl text-[var(--soft-white)]">
                Have you celebrated with স্মৃতিকুঠি?
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--sand)]">
                Your words inspire newly engaged couples and help our artists preserve stories with honesty and passion. Share your Google review in seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <a
                href={googleProfileStats.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 bg-emerald-700 px-6 text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-emerald-600 transition-all shadow-md"
              >
                <Star size={15} fill="currentColor" />
                <span>Leave a Google Review</span>
                <ExternalLink size={14} />
              </a>
              
              <a
                href={siteConfig.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 border border-[rgba(227,232,229,0.35)] bg-transparent px-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--warm-ivory)] hover:bg-[rgba(227,232,229,0.1)] transition-colors"
              >
                <MapPin size={15} />
                <span>Visit Studio Location</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
