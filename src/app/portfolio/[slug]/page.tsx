import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPortfolioItem, portfolioItems } from "@/data/portfolio";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";

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
      <section className="relative min-h-[82vh] bg-[var(--espresso)] text-[var(--warm-ivory)]">
        <Image src={item.cover.src} alt={item.cover.alt} fill priority sizes="100vw" className="object-cover opacity-62" />
        <div className="absolute inset-0 bg-[rgba(41,35,31,0.44)]" />
        <div className="container-editorial relative flex min-h-[82vh] items-end pb-16 pt-32">
          <div>
            <p className="eyebrow text-[rgba(247,243,236,0.74)]">{item.category} · {item.location}</p>
            <h1 className="serif mt-5 text-[clamp(4rem,10vw,9rem)] leading-[0.86]">{item.title}</h1>
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ href: "/portfolio", label: "Portfolio" }, { href: `/portfolio/${item.slug}`, label: item.title }]} />
      <section className="py-20">
        <div className="container-editorial grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="space-y-5 text-sm text-[var(--muted)]">
            <p><span className="text-[var(--charcoal)]">Date:</span> {item.date}</p>
            <p><span className="text-[var(--charcoal)]">Services:</span> {item.services.join(", ")}</p>
            <p><span className="text-[var(--charcoal)]">Location:</span> {item.location}</p>
          </aside>
          <div>
            <p className="serif text-[clamp(2.5rem,5vw,5.5rem)] leading-none text-[var(--espresso)]">{item.story}</p>
          </div>
        </div>
      </section>
      <section className="container-wide grid gap-5 pb-20 md:grid-cols-2">
        {item.gallery.map((image, index) => (
          <div key={`${image.src}-${index}`} className={`relative overflow-hidden ${index === 0 ? "aspect-[16/9] md:col-span-2" : "aspect-[4/5]"}`}>
            <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "100vw" : "50vw"} className="object-cover" />
          </div>
        ))}
      </section>
      <section className="bg-[var(--sand)] py-20">
        <div className="container-editorial grid gap-10 lg:grid-cols-2">
          <blockquote className="serif text-5xl leading-tight text-[var(--espresso)]">“{item.quote}”</blockquote>
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em]">Credits</h2>
            <ul className="mt-5 space-y-3 text-[var(--muted)]">{item.credits.map((credit) => <li key={credit}>{credit}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-editorial flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Next Story</p>
            <h2 className="serif mt-3 text-5xl text-[var(--espresso)]">{next.title}</h2>
          </div>
          <ButtonLink href={`/portfolio/${next.slug}`}>View Next</ButtonLink>
        </div>
      </section>
    </>
  );
}
