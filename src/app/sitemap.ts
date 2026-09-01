import type { MetadataRoute } from "next";
import { journalPosts } from "@/data/journal";
import { portfolioItems } from "@/data/portfolio";
import { locationsData } from "@/data/locations";
import { serviceLinks, siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/locations", "/stories", "/portfolio", "/journal", "/faq", "/contact", "/privacy"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date() })),
    ...serviceLinks.map((service) => ({ url: `${siteConfig.url}${service.href}`, lastModified: new Date() })),
    ...locationsData.map((loc) => ({ url: `${siteConfig.url}/locations/${loc.slug}`, lastModified: new Date() })),
    ...portfolioItems.map((item) => ({ url: `${siteConfig.url}/portfolio/${item.slug}`, lastModified: new Date() })),
    ...journalPosts.map((post) => ({ url: `${siteConfig.url}/journal/${post.slug}`, lastModified: new Date(post.date) })),
  ];
}
