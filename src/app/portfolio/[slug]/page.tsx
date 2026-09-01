import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPortfolioItem, portfolioItems } from "@/data/portfolio";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FadeIn, ImageReveal, MotionSection, SlowZoom, StaggerGroup, StaggerItem } from "@/components/ui/Motion";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

import { siteConfig } from "@/data/site";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  return {
    title: item?.title || "Portfolio Story",
    description: item?.story,
    alternates: { canonical: `/portfolio/${slug}` },
    openGraph: {
      title: item ? `${item.title} | ${siteConfig.name}` : siteConfig.name,
      description: item?.story,
      url: `${siteConfig.url}/portfolio/${slug}`,
      images: item ? [{ url: item.cover.src, width: 1200, height: 800, alt: item.cover.alt }] : undefined,
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) notFound();
  const next = getPortfolioItem(item.nextProject) || portfolioItems[0];
  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: item.title,
    description: item.story,
    image: `${siteConfig.url}${item.cover.src}`,
    creator: {
      "@type": "Person",
      name: siteConfig.owner,
      url: `${siteConfig.url}/about`,
    },
    locationCreated: {
      "@type": "Place",
      name: item.location,
    },
    genre: "Wedding Photography & Cinematography",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <MotionSection className="relative border-b border-[var(--fine-border)] bg-gradient-to-b from-[var(--warm-ivory)] via-[var(--soft-white)] to-[var(--warm-ivory)] py-14 lg:py-20 text-[var(--espresso)]">
        <div className="container-editorial">
          <Breadcrumbs items={[{ href: "/portfolio", label: "Portfolio" }, { href: `/portfolio/${item.slug}`, label: item.title }]} />
          
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn className="space-y-6">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--gold-border)] bg-[var(--soft-white)] px-4 py-1.5 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[var(--crimson)]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--espresso)]">
                  {item.category} · {item.location}
                </span>
              </div>

              <h1 className="serif text-[clamp(3rem,6vw,5.8rem)] font-normal leading-[0.94] text-[var(--espresso)]">
                {item.title}
              </h1>

              <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
                {item.story}
              </p>

              <div className="grid grid-cols-3 gap-3 border-y border-[var(--fine-border)] py-4 text-xs">
                <div>
                  <span className="block font-bold text-[var(--espresso)]">Date</span>
                  <span className="text-[0.68rem] text-[var(--muted)]">{item.date}</span>
                </div>
                <div className="border-x border-[var(--fine-border)] px-3">
                  <span className="block font-bold text-[var(--crimson)]">Services</span>
                  <span className="text-[0.68rem] text-[var(--muted)]">{item.services.slice(0, 2).join(", ")}</span>
                </div>
                <div className="pl-3">
                  <span className="block font-bold text-amber-700">Location</span>
                  <span className="text-[0.68rem] text-[var(--muted)] line-clamp-1">{item.location}</span>
                </div>
              </div>
            </FadeIn>

            <ImageReveal className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] shadow-2xl">
              <Image src={item.cover.src} alt={item.cover.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </ImageReveal>
          </div>
        </div>
      </MotionSection>
      <MotionSection className="py-20">
        <div className="container-editorial grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <FadeIn className="space-y-5 text-sm text-[var(--muted)]">
            <p><span className="text-[var(--charcoal)]">Date:</span> {item.date}</p>
            <p><span className="text-[var(--charcoal)]">Services:</span> {item.services.join(", ")}</p>
            <p><span className="text-[var(--charcoal)]">Location:</span> {item.location}</p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="serif text-[clamp(2.5rem,5vw,5.5rem)] leading-none text-[var(--espresso)]">{item.story}</p>
          </FadeIn>
        </div>
      </MotionSection>
      <MotionSection className="container-wide grid gap-5 pb-20 md:grid-cols-2">
        {item.gallery
          .filter((image) => image.src !== item.cover.src)
          .map((image, index) => (
            <ImageReveal key={`${image.src}-${index}`} delay={index * 0.08} className={`relative w-full overflow-hidden rounded-2xl shadow-md ${index === 0 ? "aspect-[16/9] md:col-span-2" : "aspect-[4/5]"}`}>
              <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "100vw" : "50vw"} className="object-cover" />
            </ImageReveal>
          ))}
      </MotionSection>
      <MotionSection className="bg-[var(--sand)] py-20">
        <div className="container-editorial grid gap-10 lg:grid-cols-2">
          <FadeIn><blockquote className="serif text-5xl leading-tight text-[var(--espresso)]">“{item.quote}”</blockquote></FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="text-xs uppercase tracking-[0.18em]">Credits</h2>
            <StaggerGroup className="mt-5 space-y-3 text-[var(--muted)]">{item.credits.map((credit) => <StaggerItem key={credit}>{credit}</StaggerItem>)}</StaggerGroup>
          </FadeIn>
        </div>
      </MotionSection>
      <MotionSection className="py-20">
        <FadeIn className="container-editorial flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Next Story</p>
            <h2 className="serif mt-3 text-5xl text-[var(--espresso)]">{next.title}</h2>
          </div>
          <ButtonLink href={`/portfolio/${next.slug}`}>View Next</ButtonLink>
        </FadeIn>
      </MotionSection>
    </>
  );
}
