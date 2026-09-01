import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJournalPost, journalPosts } from "@/data/journal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { formatDate } from "@/lib/utils";
import { FadeIn, ImageReveal, MotionSection, SlowZoom, StaggerGroup, StaggerItem } from "@/components/ui/Motion";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

import { siteConfig } from "@/data/site";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  return {
    title: post?.title || "Journal",
    description: post?.excerpt,
    alternates: { canonical: `/journal/${slug}` },
    openGraph: {
      title: post ? `${post.title} | ${siteConfig.name}` : siteConfig.name,
      description: post?.excerpt,
      url: `${siteConfig.url}/journal/${slug}`,
      images: post ? [{ url: post.image.src, width: 1200, height: 800, alt: post.image.alt }] : undefined,
      type: "article",
    },
  };
}

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();
  const related = journalPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <MotionSection className="relative min-h-[76vh] overflow-hidden bg-[var(--espresso)] text-[var(--warm-ivory)]">
        <SlowZoom className="absolute inset-0">
          <Image src={post.image.src} alt={post.image.alt} fill priority sizes="100vw" className="object-cover opacity-58" />
        </SlowZoom>
        <div className="absolute inset-0 bg-[rgba(41,35,31,0.48)]" />
        <div className="container-editorial relative flex min-h-[76vh] items-end pb-16 pt-32">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow text-[rgba(247,243,236,0.74)]">{post.category} · {formatDate(post.date)} · {post.readingTime}</p>
            <h1 className="serif mt-5 text-[clamp(3.8rem,8vw,8rem)] leading-[0.88]">{post.title}</h1>
            <p className="mt-6 text-[rgba(247,243,236,0.78)]">By {post.author}</p>
          </FadeIn>
        </div>
      </MotionSection>
      <Breadcrumbs items={[{ href: "/journal", label: "Journal" }, { href: `/journal/${post.slug}`, label: post.title }]} />
      <MotionSection className="container-editorial py-20">
        <div className="mx-auto max-w-3xl prose-luxury text-lg">
          {post.body.map((paragraph, index) => <FadeIn key={paragraph} delay={index * 0.04}><p>{paragraph}</p></FadeIn>)}
          <FadeIn><blockquote className="serif my-12 border-y border-[var(--fine-border)] py-8 text-5xl leading-tight text-[var(--espresso)]">“{post.quote}”</blockquote></FadeIn>
          <ImageReveal className="relative my-12 aspect-[16/10] w-full overflow-hidden"><Image src={post.image.src} alt={post.image.alt} fill sizes="768px" className="object-cover" /></ImageReveal>
          <FadeIn><p>When a celebration is planned with this kind of attention, the photographs and films do not have to compensate for the day. They simply reveal it.</p></FadeIn>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--soft-white)] py-20">
        <div className="container-editorial">
          <FadeIn><h2 className="serif text-6xl text-[var(--espresso)]">Related notes</h2></FadeIn>
          <StaggerGroup className="mt-10 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <StaggerItem key={item.slug}>
              <Link href={`/journal/${item.slug}`} className="group block">
                <span className="relative block aspect-[4/3] overflow-hidden"><Image src={item.image.src} alt={item.image.alt} fill sizes="33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></span>
                <span className="serif mt-4 block text-3xl leading-tight text-[var(--espresso)]">{item.title}</span>
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
