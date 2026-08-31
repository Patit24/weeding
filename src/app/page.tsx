import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import { overviewServices } from "@/data/services";
import { journalPosts } from "@/data/journal";
import { portfolioItems } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig, defaultWhatsAppUrl } from "@/data/site";
import { FadeIn, ImageReveal, MotionSection, SlowZoom, StaggerGroup, StaggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FilmFeature } from "@/components/sections/FilmFeature";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { CTASection } from "@/components/sections/CTASection";
import { HeroKineticTitle } from "@/components/sections/HeroKineticTitle";
import { RateCalculator } from "@/components/sections/RateCalculator";
import { HomeGalleryBento } from "@/components/sections/HomeGalleryBento";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { ClientVideoReviews } from "@/components/sections/ClientVideoReviews";
import { formatDate } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <MotionSection className="relative min-h-screen overflow-hidden border-b border-[var(--fine-border)] bg-[var(--warm-ivory)] pt-24 text-[var(--espresso)]">
        <div className="container-wide relative min-h-screen">
          <HeroKineticTitle />
          <FadeIn delay={0.16} className="editorial-band relative z-10 grid min-h-16 grid-cols-[1fr_auto_74px] border-y border-[var(--fine-border)] text-[var(--espresso)] md:grid-cols-[1fr_360px_74px]">
            <div className="hidden border-r border-[var(--fine-border)] md:block" />
            <a href={defaultWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 text-center serif text-2xl transition-colors hover:bg-crimson-gradient hover:text-white">
              Begin a Conversation
            </a>
            <a href={defaultWhatsAppUrl} target="_blank" rel="noopener noreferrer" aria-label="Begin a conversation" className="flex items-center justify-center border-l border-[var(--fine-border)] transition-colors hover:bg-crimson-gradient hover:text-white">
              <ArrowRight size={28} />
            </a>
          </FadeIn>
          <div className="relative z-0 grid min-h-[52vh] border-x border-[var(--fine-border)] md:grid-cols-[0.95fr_1.25fr]">
            <div className="flex flex-col items-center justify-between border-r border-[var(--fine-border)] px-6 py-8 md:py-10">
              <ImageReveal delay={0.28} className="relative aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-xl md:-mt-8">
                <Image src={images.featuredPortrait.src} alt={images.featuredPortrait.alt} fill priority sizes="380px" className="object-cover" />
              </ImageReveal>
              <div className="mt-6 max-w-sm rounded-2xl border border-[var(--fine-border)] bg-[var(--soft-white)]/80 p-4 shadow-sm backdrop-blur-sm text-left">
                <p className="text-xs leading-6 text-[var(--charcoal)]">
                  <strong className="font-semibold text-[var(--crimson)]">Founded by {siteConfig.owner}</strong> — স্মৃতিকুঠি frames Bengali wedding rituals, families, pre-wedding quiet, drone perspectives, films, and celebration design with a patient eye.
                </p>
              </div>
            </div>
            <div className="relative min-h-[48vh] overflow-hidden">
              <SlowZoom className="absolute inset-0">
                <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
              </SlowZoom>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-16 lg:py-20">
        <div className="container-editorial">
          <FadeIn>
            <p className="script text-4xl sm:text-5xl text-[var(--taupe)]">told softly</p>
            <h2 className="serif mt-2 max-w-5xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.96] text-[var(--espresso)]">
              A wedding is made of rituals, waiting rooms, flower-scented mornings, elders watching quietly, and the one glance no one else noticed.
            </h2>
          </FadeIn>
          <FadeIn delay={0.12} className="mt-8 grid gap-6 border-t border-[var(--fine-border)] pt-6 lg:grid-cols-[0.7fr_1fr]">
            <ButtonLink href="/about" variant="text">Our Story</ButtonLink>
            <p className="max-w-2xl text-base sm:text-lg leading-8 text-[var(--muted)]">
              We work quietly and attentively, bringing photography, cinematography, pre-wedding shoots, planning, drone, live streaming, albums, and event coordination into one thoughtful experience.
            </p>
          </FadeIn>
        </div>
      </MotionSection>

      <MotionSection className="py-16 lg:py-20">
        <div className="container-editorial space-y-20">
          <SectionHeading eyebrow="Bespoke Services" title="Five ways we hold the story." />
          {overviewServices.slice(0, 5).map((service, index) => (
            <div key={service.slug} className={`grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] ${index % 2 ? "" : "lg:[&>*:first-child]:order-2"}`}>
              <ImageReveal className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-xl">
                <Image src={service.image.src} alt={service.image.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                  <span className="rounded-full bg-black/50 px-3.5 py-1 text-xs font-semibold backdrop-blur-md border border-white/20">
                    ✨ 0{index + 1} • {service.title.split("&")[0].trim()}
                  </span>
                  <span className="text-xs tracking-wider opacity-90 hidden sm:inline-block">Kolkata &amp; Destination</span>
                </div>
              </ImageReveal>

              <FadeIn className="flex flex-col justify-center">
                <p className="eyebrow text-[var(--crimson)]">0{index + 1} • Bespoke Service</p>
                <h3 className="serif mt-2 text-3xl sm:text-4xl lg:text-5xl leading-[1.08] text-[var(--espresso)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                  {service.eyebrow}
                </p>

                {/* Feature Tags / Pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.deliverables.slice(0, 4).map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--gold-border)] bg-[var(--soft-white)] px-3 py-1 text-[0.7rem] font-medium text-[var(--charcoal)] shadow-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm sm:text-base leading-7 text-[var(--muted)]">
                  {service.description}
                </p>
                <div className="mt-6">
                  <ButtonLink href={service.href} variant="crimson">
                    Explore {service.title.split("&")[0].trim()}
                  </ButtonLink>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* Featured Wedding Story */}
      <MotionSection className="py-16 lg:py-20 border-y border-[var(--fine-border)] bg-[var(--sand)]/40">
        <div className="container-editorial">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ImageReveal className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-xl">
              <Image src={images.featuredWide.src} alt={images.featuredWide.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <span className="rounded-full bg-black/50 px-3.5 py-1 text-xs font-semibold backdrop-blur-md border border-white/20">
                  ✨ Featured Royal Story
                </span>
                <span className="text-xs tracking-wider opacity-90 hidden sm:inline-block">Heritage Mandap • Kolkata</span>
              </div>
            </ImageReveal>

            <FadeIn delay={0.12} className="flex flex-col justify-center">
              <p className="eyebrow text-[var(--crimson)]">Featured Wedding Story</p>
              <h2 className="serif mt-2 text-4xl sm:text-5xl leading-[1.08] text-[var(--espresso)]">
                Anirban &amp; Debopriya
              </h2>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                A Sacred Bengali Wedding in Kolkata
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["💍 Shubho Drishti", "🌿 Sindoor Daan", "🎥 4K Cinematic Film", "📖 Heirloom Album"].map((tag) => (
                  <span key={tag} className="rounded-full border border-[var(--gold-border)] bg-[var(--soft-white)] px-3 py-1 text-[0.7rem] font-medium text-[var(--charcoal)] shadow-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm sm:text-base leading-7 text-[var(--muted)]">
                {portfolioItems[0].story}
              </p>
              <div className="mt-6">
                <ButtonLink href="/portfolio/anirban-debopriya-bengali-wedding" variant="crimson">
                  Explore Full Story &amp; Film
                </ButtonLink>
              </div>
            </FadeIn>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[var(--sand)] py-16 lg:py-20">
        <div className="container-editorial">
          <SectionHeading eyebrow="Philosophy" title="We photograph with instinct and plan with a steady hand." />
          <StaggerGroup className="mt-12 grid gap-0 border-y border-[var(--fine-border)] lg:grid-cols-3">
            {["Honest storytelling", "Thoughtful preparation", "Calm, personal service"].map((item, index) => (
              <StaggerItem key={item} className="border-b border-[var(--fine-border)] py-8 lg:border-b-0 lg:border-r lg:px-8 last:lg:border-r-0">
                <p className="serif text-5xl text-[var(--taupe)]">0{index + 1}</p>
                <h3 className="mt-4 text-base uppercase tracking-[0.14em] font-semibold">{item}</h3>
                <p className="mt-3 leading-7 text-sm text-[var(--muted)]">A measured approach that keeps the day beautiful without making it feel performed.</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>

      {/* 2026 Trending Animated Bento Portfolio Showcase */}
      <HomeGalleryBento />

      <MotionSection className="py-16 lg:py-20 border-t border-[var(--fine-border)]">
        <div className="container-editorial">
          <SectionHeading eyebrow="Experience" title="A considered process from first note to final gallery." />
          <StaggerGroup className="mt-10 grid gap-8 md:grid-cols-4">
            {["Meet", "Imagine", "Create", "Remember"].map((step, index) => (
              <StaggerItem key={step} className="border-t border-[var(--fine-border)] pt-6">
                <p className="serif text-5xl text-[var(--taupe)]">0{index + 1}</p>
                <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.18em]">{step}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-6 text-[var(--muted)]">We shape the next decision with context, care, and room for the day to remain human.</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>

      <RateCalculator />

      <FilmFeature />
      
      <GoogleReviews />
      
      {/* Real Client Video Reviews & Testimonials */}
      <ClientVideoReviews />

      <MotionSection className="pb-24">
        <div className="container-editorial grid items-center gap-10 lg:grid-cols-2">
          <ImageReveal className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
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
                <span className="relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
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
