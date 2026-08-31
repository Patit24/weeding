import Image from "next/image";
import Link from "next/link";
import type { ImageAsset } from "@/data/images";
import { defaultWhatsAppUrl } from "@/data/site";
import { FadeIn, ImageReveal, MotionSection } from "@/components/ui/Motion";
import { Sparkles, MapPin, Award, ArrowRight, CheckCircle2 } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: ImageAsset;
  secondaryImage?: ImageAsset;
  stats?: { label: string; value: string }[];
  ctaText?: string;
  ctaHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  secondaryImage,
  stats,
  ctaText = "Calculate Rates & Date",
  ctaHref = "/stories#rate-calculator",
}: PageHeroProps) {
  return (
    <MotionSection className="relative border-b border-[var(--fine-border)] bg-gradient-to-b from-[var(--warm-ivory)] via-[var(--soft-white)] to-[var(--warm-ivory)] py-16 lg:py-24 text-[var(--espresso)] overflow-hidden">
      {/* Subtle luxury ambient lighting */}
      <div className="pointer-events-none absolute -top-32 right-10 h-96 w-96 rounded-full bg-[rgba(237,182,0,0.12)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-10 h-96 w-96 rounded-full bg-[rgba(155,27,45,0.08)] blur-3xl" />

      <div className="container-editorial relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] xl:gap-16">
          {/* Left Column: Editorial Storytelling */}
          <FadeIn className="space-y-6">
            {/* Luxury Pill Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--gold-border)] bg-[var(--soft-white)] px-4 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--crimson)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--crimson)]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--espresso)]">
                {eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="serif text-[clamp(2.75rem,5.5vw,5.2rem)] font-normal leading-[0.96] tracking-tight text-[var(--espresso)]">
              {title}
            </h1>

            {/* Narrative Intro */}
            <p className="max-w-xl text-base leading-8 text-[var(--charcoal)]/80 sm:text-lg sm:leading-8">
              {intro}
            </p>

            {/* Micro Highlights & Stats */}
            <div className="grid grid-cols-3 gap-3 border-y border-[var(--fine-border)] py-4 text-xs">
              <div>
                <span className="block font-bold text-[var(--espresso)]">Kolkata & Beyond</span>
                <span className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)]">Destination Ready</span>
              </div>
              <div className="border-x border-[var(--fine-border)] px-3">
                <span className="block font-bold text-[var(--crimson)]">100% Authentic</span>
                <span className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)]">Zero Stiff Poses</span>
              </div>
              <div className="pl-3">
                <span className="block font-bold text-amber-700">4.9 ★ Rating</span>
                <span className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)]">Verified Reviews</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={ctaHref}
                className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-crimson-gradient px-7 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-crimson-glow transition-all hover:brightness-110 hover:scale-[1.02] active:scale-95"
              >
                <span>{ctaText}</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--fine-border)] bg-[var(--soft-white)] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--charcoal)] transition-colors hover:border-[var(--espresso)] hover:bg-[var(--warm-ivory)] cursor-pointer"
              >
                <span>Contact Studio</span>
              </a>
            </div>
          </FadeIn>

          {/* Right Column: Visual Masterpiece Showcase */}
          <div className="relative">
            {/* Primary Framed Artwork */}
            <ImageReveal className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              
              {/* Floating Bottom Glassmorphic Label */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-black/45 p-4 text-white backdrop-blur-md">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">
                      স্মৃতিকুঠি The Wedding Tales
                    </span>
                    <span className="serif block text-lg font-medium leading-snug line-clamp-1">
                      {image.alt}
                    </span>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <Sparkles size={14} />
                  </span>
                </div>
              </div>
            </ImageReveal>

            {/* Secondary Floating Accent Card */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--gold-border)] bg-[var(--soft-white)] p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-crimson-gradient text-white shadow-sm">
                  <Award size={20} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[var(--espresso)]">Fine-Art Documentary</span>
                  <span className="text-[0.68rem] text-[var(--muted)]">Preserving sacred Bengali rituals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

