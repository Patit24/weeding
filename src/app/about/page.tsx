import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/data/images";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Sritikuthi The Wedding Tales, founded by Shiladitya Das for Bengali wedding photography, films, planning, and events.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About the studio" title="A calm eye for wedding tales." intro="Founded by Shiladitya Das, Sritikuthi began with a simple belief: Bengali weddings are not performances for the camera. They are family, ritual, sound, and memory." image={images.aboutHero} />
      <section className="py-24">
        <div className="container-editorial grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Origin" title="Built between planning tables and camera straps." />
          <div className="prose-luxury text-lg">
            <p>Our team brings photography, cinematography, production, and hospitality into one steady experience. We are based in Kolkata and work across India for families, couples, and hosts who value emotional clarity over noise.</p>
            <p>We plan the logistics that protect a day, then photograph the moments that give it meaning: hands finding each other, elders watching quietly, rooms warming as guests arrive.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--soft-white)] py-24">
        <div className="container-editorial grid gap-6 md:grid-cols-3">
          <div className="relative aspect-[3/4] overflow-hidden md:mt-16"><Image src={images.team.src} alt={images.team.alt} fill sizes="33vw" className="object-cover" /></div>
          <div className="relative aspect-[4/5] overflow-hidden"><Image src={images.featuredPortrait.src} alt={images.featuredPortrait.alt} fill sizes="33vw" className="object-cover" /></div>
          <div className="relative aspect-[3/4] overflow-hidden md:mt-28"><Image src={images.planning.src} alt={images.planning.alt} fill sizes="33vw" className="object-cover" /></div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-editorial">
          <SectionHeading eyebrow="Philosophy" title="We believe elegance is a kind of restraint.">
            <p>Every decision should make the day feel more personal, more navigable, or more truthful. If it does none of those things, we edit it out.</p>
          </SectionHeading>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {["150+ celebrations documented", "8 years of combined experience", "12 cities covered", "4.9 average client rating"].map((stat) => (
              <FadeIn key={stat} className="border-t border-[var(--fine-border)] pt-5 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">{stat}</FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[var(--sand)] py-24">
        <div className="container-editorial grid gap-10 lg:grid-cols-3">
          {["Shiladitya Das · Founder & Lead Storyteller", "Sritikuthi Film Team · Cinematography", "Event Studio · Planning & Production"].map((person) => (
            <div key={person} className="border-t border-[var(--fine-border)] pt-6">
              <h2 className="serif text-4xl text-[var(--espresso)]">{person}</h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">A thoughtful presence before and during the celebration, balancing creative direction with practical calm.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24">
        <div className="container-editorial max-w-4xl">
          <p className="script text-5xl text-[var(--taupe)]">a note</p>
          <h2 className="serif mt-3 text-6xl leading-none text-[var(--espresso)]">From the founder</h2>
          <p className="mt-8 text-lg leading-9 text-[var(--muted)]">We will never ask your wedding to become someone else&apos;s idea of beautiful. Our work is to notice what is already true, prepare carefully, and make space for the celebration to unfold with grace.</p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
