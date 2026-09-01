import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowUpRight, CheckCircle2, MessageCircle, Star, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { getLocation, locationsData } from "@/data/locations";
import { siteConfig } from "@/data/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RateCalculator } from "@/components/sections/RateCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn, ImageReveal, MotionSection, SlowZoom, StaggerGroup, StaggerItem } from "@/components/ui/Motion";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locationsData.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return { title: "Location" };

  return {
    title: `Wedding Photographer in ${loc.name} | 4K Cinematography & Films`,
    description: loc.description,
    alternates: { canonical: `/locations/${slug}` },
    openGraph: {
      title: `Wedding Photographer in ${loc.name} | স্মৃতিকুঠি The Wedding Tales`,
      description: loc.description,
      url: `${siteConfig.url}/locations/${slug}`,
      images: [{ url: loc.heroImage.src, width: 1200, height: 800, alt: `Wedding Photography in ${loc.name}` }],
    },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const locationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Wedding Photography & Cinematography in ${loc.name}`,
    serviceType: "Wedding Photography, Cinematography, Pre-Wedding Shoots",
    provider: {
      "@type": ["LocalBusiness", "Photographer"],
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.primaryPhone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address,
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700040",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: loc.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: loc.state,
      },
    },
    description: loc.description,
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Shiladitya, I am inquiring about booking wedding photography/cinematography in ${loc.name} (${loc.state}).`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }}
      />

      {/* Hero */}
      <MotionSection className="relative min-h-[75vh] overflow-hidden bg-royal-espresso text-[var(--warm-ivory)]">
        <SlowZoom className="absolute inset-0">
          <Image
            src={loc.heroImage.src}
            alt={loc.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
        </SlowZoom>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,14,11,0.92)] via-[rgba(31,14,11,0.55)] to-transparent" />
        
        <div className="container-editorial relative flex min-h-[75vh] items-end pb-16 pt-36">
          <FadeIn className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--gold-border)] bg-[rgba(237,182,0,0.12)] px-4 py-1.5 backdrop-blur-md">
              <MapPin size={14} className="text-[var(--gold)]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-light)]">
                {loc.name} · {loc.state}
              </span>
            </div>

            <h1 className="serif mt-5 text-[clamp(2.8rem,6.5vw,5.6rem)] leading-[0.94] text-[var(--warm-ivory)]">
              {loc.tagline}
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[rgba(247,243,236,0.88)]">
              {loc.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/20 bg-crimson-gradient px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-crimson-glow transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Enquire Dates in {loc.name}</span>
              </a>
              <ButtonLink href="/#rate-calculator" variant="outline-light">
                Calculate Package Rate
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </MotionSection>

      <Breadcrumbs
        items={[
          { href: "/locations", label: "Locations" },
          { href: `/locations/${loc.slug}`, label: loc.name },
        ]}
      />

      {/* Highlights & Logistics Grid */}
      <MotionSection className="py-20 bg-[var(--sand)]">
        <div className="container-editorial grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="eyebrow text-[var(--crimson)]">Artistic Vision & Coverage</span>
              <h2 className="serif mt-3 text-3xl sm:text-4xl text-[var(--espresso)]">
                Why couples in {loc.name} choose স্মৃতিকুঠি
              </h2>
            </div>

            <div className="space-y-8">
              {loc.highlights.map((h, i) => (
                <div key={i} className="rounded-2xl border border-[var(--fine-border)] bg-[var(--soft-white)] p-6 shadow-sm">
                  <h3 className="serif text-xl font-semibold text-[var(--espresso)]">{h.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">{h.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-[var(--fine-border)] bg-[var(--warm-ivory)] p-7">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--espresso)]">
                Key Inclusions for {loc.name} Weddings
              </h3>
              <ul className="mt-4 space-y-3">
                {loc.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--charcoal)]">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--crimson)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            {/* Travel info box */}
            <div className="rounded-3xl border border-[var(--fine-border)] bg-[var(--espresso)] p-7 text-[var(--warm-ivory)]">
              <span className="eyebrow text-[var(--gold)]">Travel Logistics</span>
              <h3 className="serif mt-2 text-2xl text-[var(--gold-light)]">Crew & Travel Management</h3>
              <p className="mt-4 text-sm leading-relaxed text-[rgba(247,243,236,0.8)]">
                {loc.travelInfo}
              </p>
              <div className="mt-6 pt-5 border-t border-white/10 text-xs text-[rgba(247,243,236,0.65)]">
                ✓ Zero hidden travel surcharges — transparent estimates via our Rate Calculator.
              </div>
            </div>

            {/* Popular venues */}
            <div className="rounded-3xl border border-[var(--fine-border)] bg-[var(--soft-white)] p-7 shadow-sm">
              <span className="eyebrow text-[var(--crimson)]">Venues We Love</span>
              <h3 className="serif mt-2 text-2xl text-[var(--espresso)]">Popular Venues in {loc.name}</h3>
              <ul className="mt-4 space-y-2.5">
                {loc.popularVenues.map((v, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--crimson)]" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial */}
            <div className="rounded-3xl border border-[var(--gold-border)] bg-[var(--warm-ivory)] p-7 shadow-sm">
              <div className="flex items-center gap-1 text-[var(--gold)]">
                {Array.from({ length: loc.testimonial.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-sm italic leading-relaxed text-[var(--espresso)]">
                &ldquo;{loc.testimonial.text}&rdquo;
              </p>
              <div className="mt-4 border-t border-[var(--fine-border)] pt-3 text-xs">
                <span className="font-bold text-[var(--espresso)]">{loc.testimonial.client}</span>
                <span className="block text-[var(--muted)]">{loc.testimonial.venue}</span>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Live Calculator section */}
      <RateCalculator />

      <CTASection />
    </>
  );
}
