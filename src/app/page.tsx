import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import { overviewServices } from "@/data/services";
import { journalPosts } from "@/data/journal";
import { portfolioItems } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FadeIn, ImageReveal, MotionSection, SlowZoom, StaggerGroup, StaggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FilmFeature } from "@/components/sections/FilmFeature";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { CTASection } from "@/components/sections/CTASection";
import { formatDate } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <MotionSection className="relative min-h-screen overflow-hidden border-b border-[var(--fine-border)] bg-[var(--warm-ivory)] pt-24 text-[var(--espresso)]">
        <div className="container-wide relative min-h-screen">
          <FadeIn className="flex min-h-[56vh] flex-col items-center justify-end px-4 pb-8 text-center lg:min-h-[58vh]">
            <p className="eyebrow">Sritikuthi · Bengali Weddings · Films · Planning</p>
            <h1 className="serif mt-8 text-[clamp(5rem,14vw,14.2rem)] leading-[0.76] tracking-normal">
              Wedding<br />Tales
            </h1>
          </FadeIn>
          <FadeIn delay={0.16} className="editorial-band relative z-10 grid min-h-16 grid-cols-[1fr_auto_74px] border-y text-[var(--espresso)] md:grid-cols-[1fr_360px_74px]">
            <div className="hidden border-r border-[var(--fine-border)] md:block" />
            <Link href="/contact" className="flex items-center justify-center px-6 text-center serif text-2xl transition-colors hover:bg-[var(--espresso)] hover:text-[var(--warm-ivory)]">
              Begin a Conversation
            </Link>
            <Link href="/contact" aria-label="Begin a conversation" className="flex items-center justify-center border-l border-[var(--fine-border)] transition-colors hover:bg-[var(--espresso)] hover:text-[var(--warm-ivory)]">
              <ArrowRight size={28} />
            </Link>
          </FadeIn>
          <div className="relative z-0 grid min-h-[48vh] border-x border-[var(--fine-border)] md:grid-cols-[0.92fr_1.25fr]">
            <div className="relative flex items-start justify-center border-r border-[var(--fine-border)] px-6 pb-16 pt-8 md:pt-0">
              <ImageReveal delay={0.28} className="relative aspect-[4/5] w-full max-w-[400px] overflow-hidden md:-mt-12">
                <Image src={images.featuredPortrait.src} alt={images.featuredPortrait.alt} fill priority sizes="420px" className="object-cover" />
              </ImageReveal>
              <p className="absolute bottom-8 max-w-sm text-sm leading-7 text-[var(--muted)]">
                Founded by Shiladitya Das, Sritikuthi frames Bengali wedding rituals, families, pre-wedding quiet, and celebration design with a patient eye.
              </p>
            </div>
            <div className="relative min-h-[48vh] overflow-hidden">
              <SlowZoom className="absolute inset-0">
                <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
              </SlowZoom>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-24">
        <div className="container-editorial">
          <FadeIn>
            <p className="script text-5xl text-[var(--taupe)]">told softly</p>
            <h2 className="serif mt-2 max-w-5xl text-[clamp(3rem,7vw,7rem)] leading-[0.94] text-[var(--espresso)]">
              A wedding is made of rituals, waiting rooms, flower-scented mornings, elders watching quietly, and the one glance no one else noticed.
            </h2>
          </FadeIn>
          <FadeIn delay={0.12} className="mt-10 grid gap-8 border-t border-[var(--fine-border)] pt-8 lg:grid-cols-[0.7fr_1fr]">
            <ButtonLink href="/about" variant="text">Our Story</ButtonLink>
            <p className="max-w-2xl text-lg leading-9 text-[var(--muted)]">
              We work quietly and attentively, bringing photography, cinematography, planning, and event coordination into one thoughtful experience.
            </p>
          </FadeIn>
        </div>
      </MotionSection>

      <MotionSection className="pb-24">
        <div className="container-editorial space-y-20">
          <SectionHeading eyebrow="Services" title="Five ways we hold the story." />
          {overviewServices.slice(0, 5).map((service, index) => (
            <div key={service.slug} className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 ? "" : "lg:[&>*:first-child]:order-2"}`}>
              <ImageReveal className="relative aspect-[4/5] overflow-hidden bg-[var(--sand)]">
                <Image src={service.image.src} alt={service.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </ImageReveal>
              <FadeIn className="max-w-xl">
                <p className="eyebrow">0{index + 1}</p>
                <h3 className="serif mt-4 text-[clamp(2.8rem,6vw,6rem)] leading-[0.9] text-[var(--espresso)]">{service.title}</h3>
                <p className="mt-6 text-base leading-8 text-[var(--muted)]">{service.description}</p>
                <ButtonLink href={service.href} variant="text" className="mt-7">Read More</ButtonLink>
              </FadeIn>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="py-24">
        <div className="container-wide">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.55fr]">
            <ImageReveal className="relative aspect-[16/9] overflow-hidden">
              <Image src={images.featuredWide.src} alt={images.featuredWide.alt} fill sizes="70vw" className="object-cover" />
            </ImageReveal>
            <FadeIn delay={0.12} className="lg:pt-24">
              <p className="eyebrow">Featured Wedding Story</p>
              <h2 className="serif mt-4 text-6xl leading-none text-[var(--espresso)]">Ishani & Ritwik</h2>
              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">A Bengali wedding in North Kolkata</p>
              <p className="mt-6 text-base leading-8 text-[var(--muted)]">Wedding Photography · Planning · Film</p>
              <p className="mt-6 max-w-md leading-8 text-[var(--muted)]">{portfolioItems[0].story}</p>
              <ButtonLink href="/portfolio/ishani-ritwik-bengali-wedding" variant="text" className="mt-7">View Their Story</ButtonLink>
            </FadeIn>
            <ImageReveal delay={0.24} className="relative aspect-[3/4] w-full max-w-sm overflow-hidden lg:absolute lg:bottom-[-12%] lg:left-[8%]">
              <Image src={images.featuredPortrait.src} alt={images.featuredPortrait.alt} fill sizes="384px" className="object-cover" />
            </ImageReveal>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[var(--sand)] py-24">
        <div className="container-editorial">
          <SectionHeading eyebrow="Philosophy" title="We photograph with instinct and plan with a steady hand." />
          <StaggerGroup className="mt-14 grid gap-0 border-y border-[var(--fine-border)] lg:grid-cols-3">
            {["Honest storytelling", "Thoughtful preparation", "Calm, personal service"].map((item, index) => (
              <StaggerItem key={item} className="border-b border-[var(--fine-border)] py-8 lg:border-b-0 lg:border-r lg:px-8 last:lg:border-r-0">
                <p className="serif text-5xl text-[var(--taupe)]">0{index + 1}</p>
                <h3 className="mt-5 text-lg uppercase tracking-[0.14em]">{item}</h3>
                <p className="mt-4 leading-8 text-[var(--muted)]">A measured approach that keeps the day beautiful without making it feel performed.</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>

      <MotionSection className="py-24">
        <div className="container-editorial">
          <SectionHeading eyebrow="Portfolio" title="Celebrations, gathered in fragments." />
          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-4">
            {[images.mosaicOne, images.mosaicTwo, images.mosaicThree, images.mosaicFour].map((image, index) => (
              <StaggerItem key={image.src} className={`${index === 0 ? "md:col-span-2 md:row-span-2" : index === 3 ? "md:col-span-2" : ""}`}>
              <Link href="/portfolio" className={`group relative block overflow-hidden ${index === 0 ? "aspect-[4/5]" : index === 3 ? "aspect-[16/8]" : "aspect-[3/4]"}`}>
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 flex items-end bg-[rgba(41,35,31,0.52)] p-5 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="text-xs uppercase tracking-[0.18em] text-[var(--warm-ivory)]">Wedding · Kolkata</span>
                </span>
              </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <FadeIn delay={0.2}><ButtonLink href="/portfolio" variant="text" className="mt-10">View All Celebrations</ButtonLink></FadeIn>
        </div>
      </MotionSection>

      <MotionSection className="pb-24">
        <div className="container-editorial">
          <SectionHeading eyebrow="Experience" title="A considered process from first note to final gallery." />
          <StaggerGroup className="mt-12 grid gap-8 md:grid-cols-4">
            {["Meet", "Imagine", "Create", "Remember"].map((step, index) => (
              <StaggerItem key={step} className="border-t border-[var(--fine-border)] pt-6">
                <p className="serif text-6xl text-[var(--taupe)]">0{index + 1}</p>
                <h3 className="mt-4 text-sm uppercase tracking-[0.18em]">{step}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">We shape the next decision with context, care, and room for the day to remain human.</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>

      <FilmFeature />
      <TestimonialSlider />

      <MotionSection className="pb-24">
        <div className="container-editorial grid items-center gap-10 lg:grid-cols-2">
          <ImageReveal className="relative aspect-[4/5] overflow-hidden">
            <Image src={images.event.src} alt={images.event.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </ImageReveal>
          <FadeIn delay={0.12}>
            <SectionHeading eyebrow="Event Management" title="For gatherings beyond the wedding day.">
              <p>From venue coordination and décor to guest management and corporate celebrations, we bring the same calm design intelligence to every hosted moment.</p>
            </SectionHeading>
            <ul className="mt-8 grid gap-3 text-sm uppercase tracking-[0.14em] text-[var(--muted)] sm:grid-cols-2">
              {["Wedding planning", "Venue coordination", "Décor and styling", "Guest management", "Vendor coordination", "Corporate celebrations", "Private events"].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </FadeIn>
        </div>
      </MotionSection>

      <MotionSection className="bg-[var(--soft-white)] py-24">
        <div className="container-editorial">
          <SectionHeading eyebrow="Journal" title="Notes for a more considered celebration." />
          <StaggerGroup className="mt-12 grid gap-8 md:grid-cols-3">
            {journalPosts.slice(0, 3).map((post) => (
              <StaggerItem key={post.slug}>
              <Link href={`/journal/${post.slug}`} className="group block">
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image src={post.image.src} alt={post.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </span>
                <span className="mt-5 block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{post.category} · {formatDate(post.date)} · {post.readingTime}</span>
                <span className="serif mt-3 block text-3xl leading-tight text-[var(--espresso)]">{post.title}</span>
                <span className="link-underline mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.18em]">Read More</span>
              </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>
      <CTASection />
    </>
  );
}
