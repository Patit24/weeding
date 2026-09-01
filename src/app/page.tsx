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
import { HeroShowcaseCards } from "@/components/sections/HeroShowcaseCards";
import { RateCalculator } from "@/components/sections/RateCalculator";
import { HomeGalleryBento } from "@/components/sections/HomeGalleryBento";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { ClientVideoReviews } from "@/components/sections/ClientVideoReviews";
import { TeamSection } from "@/components/sections/TeamSection";
import { GoogleMapSection } from "@/components/sections/GoogleMapSection";
import { formatDate } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--fine-border)] bg-[var(--warm-ivory)] text-[var(--espresso)]">
        <HeroKineticTitle />
        <HeroShowcaseCards />
      </section>

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
              <ImageReveal className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-xl">
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
            <ImageReveal className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-xl">
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
            {[
              {
                title: "Honest storytelling",
                desc: "Preserving spontaneous laughter, tearful Sindoor Daan blessings, and unscripted intimacy without turning your sacred ceremony into a staged production.",
              },
              {
                title: "Thoughtful preparation",
                desc: "Mapping lighting, Muhurat schedules, and mandap angles weeks in advance so your family remains fully immersed in pure celebration.",
              },
              {
                title: "Calm, personal service",
                desc: "A dedicated team of senior visual artists moving with quiet precision, keeping your wedding serene, dignified, and effortless.",
              },
            ].map((item, index) => (
              <StaggerItem key={item.title} className="border-b border-[var(--fine-border)] py-8 lg:border-b-0 lg:border-r lg:px-8 last:lg:border-r-0">
                <p className="serif text-5xl text-[var(--taupe)]">0{index + 1}</p>
                <h3 className="mt-4 text-base uppercase tracking-[0.14em] font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-sm text-[var(--muted)]">{item.desc}</p>
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
            {[
              {
                step: "Meet",
                desc: "An intimate consultation to understand your family traditions, ritual nuances, and aesthetic vision over coffee or a call.",
              },
              {
                step: "Imagine",
                desc: "Crafting tailored shot lists, timeline schedules, and mood boards synchronized with your venue's natural light.",
              },
              {
                step: "Create",
                desc: "Unobtrusive multi-angle 4K cinema and master portrait capture guided by seasoned wedding visual artists.",
              },
              {
                step: "Remember",
                desc: "Color-graded high-resolution digital galleries, cinematic 4K highlight reels, and handcrafted heirloom albums delivered to your doorstep.",
              },
            ].map((item, index) => (
              <StaggerItem key={item.step} className="border-t border-[var(--fine-border)] pt-6">
                <p className="serif text-5xl text-[var(--taupe)]">0{index + 1}</p>
                <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.18em]">{item.step}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-6 text-[var(--muted)]">{item.desc}</p>
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

      {/* Meet the Storytellers Team Members Section */}
      <TeamSection />

      <MotionSection className="pb-24">
        <div className="container-editorial grid items-center gap-10 lg:grid-cols-2">
          <ImageReveal className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md">
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
          <div className="mt-12 text-center">
            <ButtonLink href="/journal" variant="crimson">
              View All Wedding Guides &amp; Rituals →
            </ButtonLink>
          </div>
        </div>
      </MotionSection>

      {/* Destination & City Coverage Internal Linking Hub */}
      <MotionSection className="py-20 border-t border-[var(--fine-border)] bg-[var(--warm-ivory)]">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Coverage & Destinations"
            title="Wedding Photography Across Kolkata & Beyond"
          >
            <p>
              Based in Kolkata with zero travel fees across the city. We regularly travel across West Bengal, Bihar, Jharkhand, and pan-India destination venues with full 4K cinema and multi-photographer production crews.
            </p>
          </SectionHeading>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Kolkata (Home Base)", slug: "kolkata", desc: "Tollygunge, Salt Lake, New Town, South Kolkata, Rajbaris", fee: "₹0 Travel Fee" },
              { name: "Howrah & Hooghly", slug: "howrah", desc: "Riverside Ghats, Heritage Mansions & Grand Banquets", fee: "Direct Transit" },
              { name: "Durgapur & Asansol", slug: "durgapur", desc: "Steel City Luxury Banquets & Steel Club Weddings", fee: "Full Crew Travel" },
              { name: "Siliguri & North Bengal", slug: "siliguri", desc: "Tea Gardens, Foothills & Destination Resorts", fee: "Full Crew Travel" },
              { name: "Shantiniketan & Bolpur", slug: "shantiniketan", desc: "Open-Air Baul Heritage & Eco-Resort Nuptials", fee: "Full Crew Travel" },
              { name: "Patna & Bihar", slug: "patna", desc: "Grand Bhojpuri & Bihari Cultural Celebrations", fee: "Destination Travel" },
              { name: "Ranchi & Jharkhand", slug: "ranchi", desc: "Plateau Resorts, Forest Venues & Club Weddings", fee: "Destination Travel" },
              { name: "Destination Weddings", slug: "destination", desc: "Puri, Goa, Jaipur, Udaipur & Pan-India Resorts", fee: "Pan-India Production" },
            ].map((loc) => (
              <Link
                key={loc.slug}
                href={loc.slug === "kolkata" ? "/locations" : `/locations/${loc.slug}`}
                className="group rounded-2xl border border-[var(--fine-border)] bg-[var(--soft-white)] p-5 shadow-xs transition-all duration-300 hover:border-[var(--gold-border)] hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--crimson)]">
                    {loc.fee}
                  </span>
                  <span className="text-xs text-[var(--muted)] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <h3 className="serif mt-3 text-xl font-bold text-[var(--espresso)] group-hover:text-[var(--crimson)] transition-colors">
                  {loc.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--charcoal)]">
                  {loc.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <ButtonLink href="/locations" variant="text">
              Explore All Regional Locations &amp; Venues →
            </ButtonLink>
          </div>
        </div>
      </MotionSection>

      <GoogleMapSection />
      <CTASection />
    </>
  );
}
