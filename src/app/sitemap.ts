import type { MetadataRoute } from "next";
import { journalPosts } from "@/data/journal";
import { portfolioItems } from "@/data/portfolio";
import { serviceLinks, siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/portfolio", "/journal", "/contact", "/privacy"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date() })),
    ...serviceLinks.map((service) => ({ url: `${siteConfig.url}${service.href}`, lastModified: new Date() })),
    ...portfolioItems.map((item) => ({ url: `${siteConfig.url}/portfolio/${item.slug}`, lastModified: new Date() })),
    ...journalPosts.map((post) => ({ url: `${siteConfig.url}/journal/${post.slug}`, lastModified: new Date(post.date) })),
  ];
}
