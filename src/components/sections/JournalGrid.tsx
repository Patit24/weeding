"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { journalCategories, journalPosts } from "@/data/journal";
import { formatDate } from "@/lib/utils";

export function JournalGrid() {
  const [category, setCategory] = useState<(typeof journalCategories)[number]>("All");
  const [query, setQuery] = useState("");
  const posts = useMemo(() => {
    return journalPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesSearch = `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  return (
    <div>
      <div className="mb-9 grid gap-4 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="Journal filters">
          {journalCategories.map((item) => (
            <motion.button key={item} type="button" role="tab" aria-selected={category === item} onClick={() => setCategory(item)} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={`min-h-11 border px-4 text-xs uppercase tracking-[0.16em] ${category === item ? "border-[var(--espresso)] bg-[var(--espresso)] text-[var(--warm-ivory)]" : "border-[var(--fine-border)]"}`}>
              {item}
            </motion.button>
          ))}
        </div>
        <label className="block">
          <span className="sr-only">Search journal</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search notes" className="min-h-11 w-full border border-[var(--fine-border)] bg-transparent px-4 text-sm outline-none lg:w-72" />
        </label>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {posts.map((post) => (
            <motion.div
              layout
              key={post.slug}
              initial={{ opacity: 0, y: 22, clipPath: "inset(0 0 12% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, y: 14, clipPath: "inset(0 0 14% 0)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/journal/${post.slug}`} className="group block">
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image src={post.image.src} alt={post.image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </span>
                <span className="mt-5 block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{post.category} · {formatDate(post.date)} · {post.readingTime}</span>
                <span className="serif mt-3 block text-3xl leading-tight text-[var(--espresso)]">{post.title}</span>
                <span className="mt-3 block text-sm leading-7 text-[var(--muted)]">{post.excerpt}</span>
                <span className="link-underline mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.18em]">Read Note</span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
