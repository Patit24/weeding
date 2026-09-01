import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { locationsData } from "@/data/locations";
import { siteConfig, defaultWhatsAppUrl } from "@/data/site";
import { images } from "@/data/images";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn, ImageReveal, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Wedding Photography Locations across West Bengal, Bihar & Jharkhand",
  description:
    "Explore luxury wedding photography and 4K cinematography by Sritikuthi across Kolkata, Durgapur, Siliguri, Howrah, Shantiniketan, Patna, Ranchi, and destination weddings pan-India.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Wedding Photography Locations | স্মৃতিকুঠি The Wedding Tales",
    description:
      "Explore luxury wedding photography and 4K cinematography by Sritikuthi across Kolkata, Durgapur, Siliguri, Howrah, Shantiniketan, Patna, Ranchi, and destination weddings pan-India.",
    url: `${siteConfig.url}/locations`,
    images: [{ url: images.featuredWide.src, width: 1200, height: 800, alt: "Sritikuthi Wedding Photography Locations" }],
  },
};

export default function LocationsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas & Destinations"
        title="From heritage Kolkata courtyards to grand destination estates."
        intro="Explore our dedicated wedding photography and 4K cinematography services across Bengal, Bihar, Jharkhand, and iconic destination wedding venues across India."
        image={images.featuredWide}
        ctaText="View Service Cities"
        ctaHref="#cities-grid"
      />

      <MotionSection id="cities-grid" className="py-20 lg:py-28 bg-[var(--soft-white)]">
        <div className="container-editorial">
          <div className="max-w-3xl space-y-4">
            <span className="eyebrow text-[var(--crimson)]">Dedicated Regional Coverage</span>
            <h2 className="serif text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[0.96] text-[var(--espresso)]">
              Where we craft timeless visual memories.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--muted)]">
              Every city carries its own light, heritage textures, and family traditions. Select your wedding location below for tailored venue recommendations, travel logistics, and real client galleries.
            </p>
          </div>

          <StaggerGroup className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locationsData.map((loc) => (
              <StaggerItem
                key={loc.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--fine-border)] bg-[var(--warm-ivory)] p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--gold-border)]"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={loc.heroImage.src}
                      alt={loc.heroImage.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-[rgba(31,14,11,0.75)] backdrop-blur-md px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--gold-light)] border border-white/10">
                      {loc.state}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
                    <MapPin size={14} />
                    <span>{loc.name}</span>
                  </div>

                  <h3 className="serif mt-2 text-2xl font-bold text-[var(--espresso)] group-hover:text-[var(--crimson)] transition-colors">
                    {loc.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-6 text-[var(--muted)] line-clamp-3">
                    {loc.description}
                  </p>

                  <div className="mt-5 space-y-1.5 border-t border-[var(--fine-border)] pt-4">
                    <span className="block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--espresso)]">
                      Popular Venues:
                    </span>
                    <p className="text-xs text-[var(--muted)]">
                      {loc.popularVenues.slice(0, 3).join(" • ")}
                    </p>
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-[var(--fine-border)] flex items-center justify-between">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--espresso)] group-hover:text-[var(--crimson)] transition-colors"
                  >
                    <span>View City Guide</span>
                    <ArrowUpRight size={15} />
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      `Hello Shiladitya, I am inquiring about wedding photography in ${loc.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.68rem] font-semibold text-[var(--muted)] hover:text-[var(--espresso)] transition-colors"
                  >
                    Book on WhatsApp →
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>

      <CTASection />
    </>
  );
}
