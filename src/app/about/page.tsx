import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn, ImageReveal, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "About",
  description: "Meet স্মৃতিকুঠি_The Wedding Tales, founded by Shiladitya Das for wedding photography, cinematography, planning, and events.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About the studio" title="A calm eye for wedding tales." intro={`Founded by ${siteConfig.owner}, স্মৃতিকুঠি_The Wedding Tales began with a simple belief: weddings are not performances for the camera. They are family, ritual, sound, and memory.`} image={images.aboutHero} />
      <MotionSection className="py-24">
        <div className="container-editorial grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Origin" title="Built between planning tables and camera straps." />
          <FadeIn className="prose-luxury text-lg">
            <p>Our team brings photography, cinematography, production, and hospitality into one steady experience. We are based near Tollygunge in Kolkata and work across West Bengal, India, and destination wedding locations for families, couples, and hosts who value emotional clarity over noise.</p>
            <p>We plan the logistics that protect a day, then photograph the moments that give it meaning: hands finding each other, elders watching quietly, rooms warming as guests arrive.</p>
          </FadeIn>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--soft-white)] py-24">
        <div className="container-editorial grid gap-6 md:grid-cols-3">
          <ImageReveal className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md md:mt-16"><Image src={images.team.src} alt={images.team.alt} fill sizes="33vw" className="object-cover" /></ImageReveal>
          <ImageReveal delay={0.12} className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md"><Image src={images.featuredPortrait.src} alt={images.featuredPortrait.alt} fill sizes="33vw" className="object-cover" /></ImageReveal>
          <ImageReveal delay={0.24} className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md md:mt-28"><Image src={images.planning.src} alt={images.planning.alt} fill sizes="33vw" className="object-cover" /></ImageReveal>
        </div>
      </MotionSection>
      <MotionSection className="py-24">
        <div className="container-editorial">
          <SectionHeading eyebrow="Philosophy" title="We believe elegance is a kind of restraint.">
            <p>Every decision should make the day feel more personal, more navigable, or more truthful. If it does none of those things, we edit it out.</p>
          </SectionHeading>
          <StaggerGroup className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              `${siteConfig.experience} in business`,
              `${siteConfig.team.photographers} photographers`,
              `${siteConfig.team.cinematographers} cinematographers`,
              "West Bengal and India coverage",
            ].map((stat) => (
              <StaggerItem key={stat} className="border-t border-[var(--fine-border)] pt-5 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">{stat}</StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--sand)] py-24">
        <StaggerGroup className="container-editorial grid gap-10 lg:grid-cols-3">
          {[`${siteConfig.owner} · Owner & Lead Storyteller`, "Photography Team · Wedding, pre-wedding, baby, birthday & event coverage", "Film Team · Cinematography, drone, live streaming & invitation videos"].map((person) => (
            <StaggerItem key={person} className="border-t border-[var(--fine-border)] pt-6">
              <h2 className="serif text-4xl text-[var(--espresso)]">{person}</h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">A thoughtful presence before and during the celebration, balancing creative direction with practical calm.</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </MotionSection>
      <MotionSection className="py-24">
        <div className="container-editorial max-w-4xl">
          <FadeIn>
            <p className="script text-5xl text-[var(--taupe)]">a note</p>
            <h2 className="serif mt-3 text-6xl leading-none text-[var(--espresso)]">From the founder</h2>
            <p className="mt-8 text-lg leading-9 text-[var(--muted)]">We will never ask your wedding to become someone else&apos;s idea of beautiful. Our work is to notice what is already true, prepare carefully, and make space for the celebration to unfold with grace.</p>
          </FadeIn>
        </div>
      </MotionSection>
      <CTASection />
    </>
  );
}
