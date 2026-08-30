import Image from "next/image";
import { images } from "@/data/images";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FadeIn, MotionSection, SlowZoom } from "@/components/ui/Motion";

export function CTASection() {
  return (
    <MotionSection className="relative overflow-hidden bg-royal-espresso py-28 text-[var(--warm-ivory)] border-t border-[var(--gold-border)]">
      <SlowZoom className="absolute inset-0">
        <Image src={images.cta.src} alt={images.cta.alt} fill sizes="100vw" className="object-cover opacity-35" />
      </SlowZoom>
      <div className="absolute inset-0 bg-[rgba(31,14,11,0.55)]" />
      <FadeIn className="container-editorial relative max-w-4xl">
        <div className="mb-4 inline-flex items-center gap-3 rounded-2xl bg-[rgba(255,255,255,0.92)] px-4 py-2 shadow-gold-glow backdrop-blur-sm">
          <div className="relative h-9 w-28">
            <Image src="/brand-logo.png" alt="স্মৃতিকুঠি logo" fill className="object-contain" />
          </div>
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--crimson)]">The Wedding Tales</span>
        </div>
        <h2 className="serif mt-4 text-[clamp(3.2rem,7vw,7rem)] leading-[0.9] text-[var(--warm-ivory)]">Let&apos;s create something worth remembering.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(247,243,236,0.85)]">
          Tell us about your wedding, pre-wedding dreams, or sacred celebration in Kolkata or destination, and we will craft heirloom memories.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink href="/contact" variant="gold">Begin Your Story</ButtonLink>
          <ButtonLink href="/pricing" variant="light">Calculate Investment</ButtonLink>
        </div>
      </FadeIn>
    </MotionSection>
  );
}
