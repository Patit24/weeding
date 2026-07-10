import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJournalPost, journalPosts } from "@/data/journal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  return { title: post?.title || "Journal", description: post?.excerpt };
}

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();
  const related = journalPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative min-h-[76vh] bg-[var(--espresso)] text-[var(--warm-ivory)]">
        <Image src={post.image.src} alt={post.image.alt} fill priority sizes="100vw" className="object-cover opacity-58" />
        <div className="absolute inset-0 bg-[rgba(41,35,31,0.48)]" />
        <div className="container-editorial relative flex min-h-[76vh] items-end pb-16 pt-32">
          <div className="max-w-4xl">
            <p className="eyebrow text-[rgba(247,243,236,0.74)]">{post.category} · {formatDate(post.date)} · {post.readingTime}</p>
            <h1 className="serif mt-5 text-[clamp(3.8rem,8vw,8rem)] leading-[0.88]">{post.title}</h1>
            <p className="mt-6 text-[rgba(247,243,236,0.78)]">By {post.author}</p>
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ href: "/journal", label: "Journal" }, { href: `/journal/${post.slug}`, label: post.title }]} />
      <article className="container-editorial py-20">
        <div className="mx-auto max-w-3xl prose-luxury text-lg">
          {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <blockquote className="serif my-12 border-y border-[var(--fine-border)] py-8 text-5xl leading-tight text-[var(--espresso)]">“{post.quote}”</blockquote>
          <div className="relative my-12 aspect-[16/10] overflow-hidden"><Image src={post.image.src} alt={post.image.alt} fill sizes="768px" className="object-cover" /></div>
          <p>When a celebration is planned with this kind of attention, the photographs and films do not have to compensate for the day. They simply reveal it.</p>
        </div>
      </article>
      <section className="bg-[var(--soft-white)] py-20">
        <div className="container-editorial">
          <h2 className="serif text-6xl text-[var(--espresso)]">Related notes</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/journal/${item.slug}`} className="group">
                <span className="relative block aspect-[4/3] overflow-hidden"><Image src={item.image.src} alt={item.image.alt} fill sizes="33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></span>
                <span className="serif mt-4 block text-3xl leading-tight text-[var(--espresso)]">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
