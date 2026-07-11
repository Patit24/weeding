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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  return { title: item?.title || "Portfolio Story", description: item?.story };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) notFound();
  const next = getPortfolioItem(item.nextProject) || portfolioItems[0];

  return (
    <>
      <MotionSection className="relative min-h-[82vh] overflow-hidden bg-[var(--espresso)] text-[var(--warm-ivory)]">
        <SlowZoom className="absolute inset-0">
          <Image src={item.cover.src} alt={item.cover.alt} fill priority sizes="100vw" className="object-cover opacity-62" />
        </SlowZoom>
        <div className="absolute inset-0 bg-[rgba(41,35,31,0.44)]" />
        <div className="container-editorial relative flex min-h-[82vh] items-end pb-16 pt-32">
          <FadeIn>
            <p className="eyebrow text-[rgba(247,243,236,0.74)]">{item.category} · {item.location}</p>
            <h1 className="serif mt-5 text-[clamp(4rem,10vw,9rem)] leading-[0.86]">{item.title}</h1>
          </FadeIn>
        </div>
      </MotionSection>
      <Breadcrumbs items={[{ href: "/portfolio", label: "Portfolio" }, { href: `/portfolio/${item.slug}`, label: item.title }]} />
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
        {item.gallery.map((image, index) => (
          <ImageReveal key={`${image.src}-${index}`} delay={index * 0.08} className={`relative overflow-hidden ${index === 0 ? "aspect-[16/9] md:col-span-2" : "aspect-[4/5]"}`}>
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
