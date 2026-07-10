"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioCategories, portfolioItems } from "@/data/portfolio";

export function PortfolioGrid() {
  const [category, setCategory] = useState<(typeof portfolioCategories)[number]>("All");
  const items = useMemo(() => (category === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === category)), [category]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3" role="tablist" aria-label="Portfolio filters">
        {portfolioCategories.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={category === item}
            onClick={() => setCategory(item)}
            className={`min-h-11 border px-4 text-xs uppercase tracking-[0.16em] ${category === item ? "border-[var(--espresso)] bg-[var(--espresso)] text-[var(--warm-ivory)]" : "border-[var(--fine-border)]"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Link
            href={`/portfolio/${item.slug}`}
            key={item.slug}
            className={`group block ${index === 0 ? "md:col-span-2" : ""}`}
          >
            <span className={`relative block overflow-hidden ${index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
              <Image src={item.cover.src} alt={item.cover.alt} fill sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 flex items-end bg-[rgba(41,35,31,0.56)] p-5 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-sm uppercase tracking-[0.16em] text-[var(--warm-ivory)]">{item.category} · {item.location}</span>
              </span>
            </span>
            <span className="mt-4 block">
              <span className="serif block text-3xl text-[var(--espresso)]">{item.title}</span>
              <span className="mt-1 block text-sm text-[var(--muted)]">{item.location} · {item.date}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
