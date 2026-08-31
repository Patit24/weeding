import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  MapPin, 
  Camera, 
  Film, 
  ShieldCheck, 
  CheckCircle2, 
  Heart, 
  Award, 
  ArrowUpRight, 
  Clock, 
  Users, 
  Quote
} from "lucide-react";
import { images } from "@/data/images";
import { siteConfig, defaultWhatsAppUrl } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { ClientVideoReviews } from "@/components/sections/ClientVideoReviews";
import { FadeIn, ImageReveal, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";
import { AboutHeroActions } from "@/components/sections/AboutHeroActions";

export const metadata: Metadata = {
  title: "About Shiladitya Das & Studio | স্মৃতিকুঠি The Wedding Tales",
  description: "Learn about স্মৃতিকুঠি The Wedding Tales, founded by lead storyteller Shiladitya Das. Luxury candid wedding photography, heirloom cinematography, and thoughtful celebration planning in Kolkata and pan-India.",
};

export default function AboutPage() {
  const pillars = [
    {
      num: "01",
      title: "Emotional Authenticity",
      subtitle: "Sacred rituals over stiff poses",
      icon: "🕊️",
      description:
        "We never ask your family to perform or freeze for the camera. We quietly observe: elders exchanging quiet tears, the nervous grin before the Sindoor Daan, and unfiltered celebration laughter.",
    },
    {
      num: "02",
      title: "Heirloom Color Science",
      subtitle: "Calibrated for rich Indian hues",
      icon: "🎨",
      description:
        "We spend dozens of hours custom-grading every photograph and film. Warm skin tones, radiant Alta, vivid red Banarasis, and gold jewelry rendered with museum-grade color fidelity.",
    },
    {
      num: "03",
      title: "Cinematic 4K Precision",
      subtitle: "Cinema cameras & aerial drones",
      icon: "🎥",
      description:
        "Equipped with 4K Cine sensors, fast prime lenses, motorized stabilizers, and licensed aerial drones to give your wedding film the grandeur and depth of a motion picture.",
    },
    {
      num: "04",
      title: "Calm, White-Glove Care",
      subtitle: "Punctual, discreet & respectful",
      icon: "🌿",
      description:
        "Weddings are fast and emotionally charged. Our team brings a grounding, peaceful presence that puts you and your family at total ease throughout the festivities.",
    },
  ];

  const teamMembers = [
    {
      role: "Lead Storyteller & Founder",
      name: "Shiladitya Das",
      specialty: "Creative Direction, Candid Portraiture & Master Cinematography",
      bio: "With over 4 years of dedicated wedding storytelling across Kolkata and India, Shiladitya balances technical cinema craft with deep cultural reverence.",
      image: images.featuredPortrait,
      badge: "Founder",
    },
    {
      role: "Principal Candid Photographers",
      name: "Candid Storytelling Unit",
      specialty: "Ritual Documentary, Emotion Frames & Fine-Art Couple Portraits",
      bio: "Specialists in catching unscripted moments, subtle micro-expressions, and intimate bridal preparations without drawing attention to the camera.",
      image: images.team,
      badge: "Photography",
    },
    {
      role: "Cinematography & Aerial Unit",
      name: "Cinema & Color Master Team",
      specialty: "4K Motion Capture, Sound Design & Cinematic Color Grading",
      bio: "Creating wedding films that sound like real life and look like cinema, preserving the sacred chants, laughter, and speeches for generations.",
      image: images.planning,
      badge: "Cinematography",
    },
  ];

  return (
    <>
      {/* 🌟 1. LUXURY EDITORIAL HERO SECTION */}
      <section className="relative border-b border-[var(--fine-border)] bg-gradient-to-b from-[var(--warm-ivory)] via-[var(--soft-white)] to-[var(--warm-ivory)] pt-32 lg:pt-36 pb-20 text-[var(--espresso)] overflow-hidden">
        {/* Subtle Ambient Lighting */}
        <div className="pointer-events-none absolute -top-24 right-10 h-96 w-96 rounded-full bg-[rgba(212,175,55,0.15)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-96 w-96 rounded-full bg-[rgba(139,30,30,0.10)] blur-3xl" />

        <div className="container-editorial relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] xl:gap-16">
            
            {/* Left: Editorial Manifesto */}
            <FadeIn className="space-y-6">
              {/* Luxury Pill Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--gold-border)] bg-[var(--soft-white)] px-4 py-1.5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--crimson)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--crimson)]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--espresso)]">
                  The Story of স্মৃতিকুঠি
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="serif text-[clamp(2.75rem,5.5vw,5.2rem)] font-normal leading-[0.96] tracking-tight text-[var(--espresso)]">
                We photograph what is real, so memory never fades.
              </h1>

              {/* Narrative Intro */}
              <p className="max-w-xl text-base leading-8 text-[var(--charcoal)]/85 sm:text-lg sm:leading-8">
                Founded by <strong className="text-[var(--crimson)] font-semibold">{siteConfig.owner}</strong>, 
                {" "}<strong>স্মৃতিকুঠি The Wedding Tales</strong> was born with an uncompromising belief: weddings are not performances for a camera. They are sacred rituals, spontaneous tears, shared laughter, and heirloom history.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 border-y border-[var(--fine-border)] py-4 text-xs">
                <div>
                  <span className="block text-xl sm:text-2xl font-bold text-[var(--crimson)] serif">4+ Years</span>
                  <span className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)]">Wedding Heritage</span>
                </div>
                <div className="border-x border-[var(--fine-border)] px-3">
                  <span className="block text-xl sm:text-2xl font-bold text-[var(--espresso)] serif">100+ Tales</span>
                  <span className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)]">Happy Families</span>
                </div>
                <div className="pl-3">
                  <span className="block text-xl sm:text-2xl font-bold text-amber-700 serif">5.0 ★ Rating</span>
                  <span className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)]">Verified Google Trust</span>
                </div>
              </div>

              {/* Interactive CTA Actions */}
              <AboutHeroActions />
            </FadeIn>

            {/* Right: Master Portrait Card */}
            <div className="relative">
              <ImageReveal className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-2xl">
                <Image
                  src={images.aboutHero.src}
                  alt={images.aboutHero.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                {/* Floating Founder Badge */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-md border border-[var(--gold-border)] text-[var(--espresso)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[0.68rem] font-bold uppercase tracking-widest text-[var(--crimson)] block">
                        Lead Storyteller &amp; Founder
                      </span>
                      <h3 className="serif text-xl sm:text-2xl font-bold">
                        {siteConfig.owner}
                      </h3>
                    </div>
                    <span className="rounded-full bg-[var(--crimson)] p-2 text-white">
                      <Camera size={18} />
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[var(--charcoal)]/80 leading-relaxed border-t border-[var(--fine-border)] pt-2">
                    &ldquo;Our camera is simply a witness to love that has already been created.&rdquo;
                  </p>
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 2. THE ORIGIN & PURPOSE SECTION */}
      <MotionSection className="py-20 lg:py-28 bg-[var(--soft-white)] border-b border-[var(--fine-border)]">
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
            
            {/* Visual Brand Collage */}
            <div className="relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-xl">
                <Image
                  src={images.featuredPortrait.src}
                  alt="Bride portrait by Sritikuthi"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
                    Kolkata Wedding Heritage
                  </span>
                  <p className="serif text-xl font-bold">The Art of Pure Bengali Emotion</p>
                </div>
              </div>

              {/* Floating Miniature Card */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 items-center gap-3 rounded-2xl bg-[var(--warm-ivory)] p-4 shadow-xl border border-[var(--gold-border)] max-w-xs">
                <div className="h-10 w-10 rounded-full bg-crimson-gradient flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Heart size={20} fill="currentColor" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[var(--espresso)] block">Zero Stiff Poses</span>
                  <span className="text-[0.72rem] text-[var(--muted)] block">Natural, candid human storytelling</span>
                </div>
              </div>
            </div>

            {/* Origin Narrative Copy */}
            <FadeIn className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--crimson)]">
                <Sparkles size={14} />
                <span>Our Philosophy</span>
              </div>

              <h2 className="serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-[var(--espresso)]">
                Built between planning tables, camera straps, and sacred fires.
              </h2>

              <div className="space-y-4 text-base leading-8 text-[var(--muted)]">
                <p>
                  Based near Tollygunge in Kolkata, <strong>স্মৃতিকুঠি The Wedding Tales</strong> was established to bridge the gap between traditional Bengali ritual reverence and high-fashion editorial cinema.
                </p>
                <p>
                  We believe that wedding photography shouldn&apos;t feel like a photoshoot that interrupts your day. Instead, our team works like silent poets—anticipating the glance between father and daughter before the Kanya Sampradan, the laughter during the Sindoor Khela, and the quiet relief when the rituals end and the celebration begins.
                </p>
                <p>
                  Whether you are planning an intimate traditional wedding in South Kolkata, a grand reception in Salt Lake, a destination pre-wedding shoot, or a sacred Rice Ceremony (Annaprasan), we bring the same calm grace to every frame.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </MotionSection>

      {/* 🌟 3. CORE CRAFT PILLARS (BENTO GRID) */}
      <MotionSection className="py-20 lg:py-28 bg-[var(--warm-ivory)] border-b border-[var(--fine-border)]">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--crimson)]">
              How We Create
            </span>
            <h2 className="serif mt-3 text-3xl sm:text-4xl lg:text-5xl leading-tight text-[var(--espresso)]">
              Four Pillars of Our Craft
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              The principles that guide our cameras, color grading suites, and interactions with your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <StaggerItem
                key={pillar.num}
                className="group relative rounded-3xl border border-[var(--gold-border)] bg-[var(--soft-white)] p-8 sm:p-10 shadow-lg hover:shadow-2xl hover:border-[var(--crimson)]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="serif text-4xl sm:text-5xl text-[var(--taupe)] group-hover:text-[var(--crimson)] transition-colors">
                      {pillar.num}
                    </span>
                    <span className="text-2xl p-3 rounded-2xl bg-[var(--sand)]/50 border border-[var(--fine-border)]">
                      {pillar.icon}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold-dark)] block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="serif mt-1 text-2xl sm:text-3xl font-bold text-[var(--espresso)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base leading-7 text-[var(--muted)]">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--fine-border)] flex items-center gap-2 text-xs font-semibold text-[var(--charcoal)]">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                  <span>Guaranteed in every wedding package</span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 🌟 4. THE TEAM BEHIND THE LENS */}
      <MotionSection className="py-20 lg:py-28 bg-[var(--soft-white)] border-b border-[var(--fine-border)]">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[var(--fine-border)]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--crimson)]">
                Artists &amp; Technicians
              </span>
              <h2 className="serif mt-2 text-3xl sm:text-4xl lg:text-5xl leading-tight text-[var(--espresso)]">
                Meet the Storytellers
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[var(--muted)] max-w-xl">
                A close-knit team of experienced wedding photographers, cinematographers, drone pilots, and editors dedicated to your celebration.
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Based in Kolkata • Serving Pan-India
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group flex flex-col rounded-3xl border border-[var(--gold-border)] bg-[var(--warm-ivory)] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--sand)]">
                  <Image
                    src={member.image.src}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/20">
                    {member.badge}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[0.72rem] font-bold uppercase tracking-wider text-[#D4AF37] block">
                      {member.role}
                    </span>
                    <h3 className="serif text-2xl font-bold">{member.name}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[var(--crimson)] block mb-2">
                      {member.specialty}
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--fine-border)] text-[0.72rem] text-[var(--muted)] font-medium">
                    ✓ Verified Sritikuthi Master Crew
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 🌟 5. CLIENT VIDEO REVIEWS ON ABOUT PAGE */}
      <ClientVideoReviews />

      {/* 🌟 6. FOUNDER'S PERSONAL PROMISE NOTE */}
      <MotionSection className="py-20 lg:py-28 bg-[var(--sand)]/40 border-b border-[var(--fine-border)]">
        <div className="container-editorial max-w-4xl">
          <div className="relative rounded-3xl border border-[var(--gold-border)] bg-[var(--soft-white)] p-8 sm:p-14 shadow-2xl text-[var(--espresso)]">
            <div className="absolute top-6 right-6 opacity-10">
              <Quote size={80} />
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--crimson)] mb-4">
              <Sparkles size={14} />
              <span>A Personal Letter from Shiladitya</span>
            </div>

            <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[var(--espresso)]">
              &ldquo;We will never ask your wedding to become someone else&apos;s idea of beautiful.&rdquo;
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg leading-8 text-[var(--charcoal)]/85">
              <p>
                When you look back at your wedding photographs twenty or thirty years from now, you will not care about trendy Instagram poses or artificial lighting setups.
              </p>
              <p>
                You will look for the quiet tear on your mother&apos;s cheek, the tight grip of your grandfather&apos;s hand, and the uncontrollable laughter of your closest friends. Our work is to notice what is already true, prepare with relentless dedication, and make space for your celebration to unfold with effortless grace.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--gold-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <strong className="serif text-2xl text-[var(--espresso)] block">Shiladitya Das</strong>
                <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                  Founder &amp; Lead Storyteller • স্মৃতিকুঠি The Wedding Tales
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Accepting 2026–2027 Wedding Dates
                </span>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 🌟 7. GLOBAL CTA SECTION */}
      <CTASection />
    </>
  );
}
