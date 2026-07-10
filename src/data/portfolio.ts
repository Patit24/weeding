import { images, type ImageAsset } from "./images";

export type PortfolioCategory = "Weddings" | "Pre-Weddings" | "Films" | "Event Design" | "Corporate Events";

export type PortfolioItem = {
  slug: string;
  title: string;
  location: string;
  date: string;
  category: PortfolioCategory;
  cover: ImageAsset;
  gallery: ImageAsset[];
  services: string[];
  story: string;
  quote: string;
  credits: string[];
  nextProject: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "ishani-ritwik-bengali-wedding",
    title: "Ishani & Ritwik",
    location: "Kolkata",
    date: "February 2026",
    category: "Weddings",
    cover: images.featuredWide,
    gallery: [images.featuredWide, images.featuredPortrait, images.mosaicOne, images.mosaicTwo, images.mosaicFour],
    services: ["Wedding Photography", "Wedding Planning", "Wedding Film"],
    story:
      "A Bengali wedding told through morning rituals, sindoor light, family laughter, and a reception that moved softly into music.",
    quote: "Shiladitya and his team noticed the moments we were too busy living.",
    credits: ["Venue: North Kolkata residence", "Florals: Family-led styling", "Film: Sritikuthi The Wedding Tales"],
    nextProject: "diya-arjun-shantiniketan",
  },
  {
    slug: "diya-arjun-shantiniketan",
    title: "Diya & Arjun",
    location: "Shantiniketan",
    date: "December 2025",
    category: "Films",
    cover: images.films,
    gallery: [images.films, images.hero, images.mosaicThree, images.mosaicTwo],
    services: ["Wedding Film", "Photography"],
    story:
      "A pre-wedding and wedding film shaped by red earth, quiet trees, handwritten vows, and the sound of families arriving.",
    quote: "The film feels like a letter from that week.",
    credits: ["Venue: Boutique garden stay", "Music: Licensed edit", "Planning: Client family"],
    nextProject: "rimjhim-sagnik-prewedding",
  },
  {
    slug: "rimjhim-sagnik-prewedding",
    title: "Rimjhim & Sagnik",
    location: "Darjeeling",
    date: "October 2025",
    category: "Pre-Weddings",
    cover: images.mosaicOne,
    gallery: [images.mosaicOne, images.intro, images.photography, images.mosaicTwo],
    services: ["Pre-wedding Photography"],
    story:
      "A misty hill session with quiet portraits, old letters, and a route planned around the light rather than a shot list.",
    quote: "We never felt posed. We just felt seen.",
    credits: ["Styling: Client wardrobe", "Location: Heritage tea estate", "Photography: Sritikuthi The Wedding Tales"],
    nextProject: "basu-family-annaprasan",
  },
  {
    slug: "basu-family-annaprasan",
    title: "The Basu Family Gathering",
    location: "Kolkata",
    date: "August 2025",
    category: "Event Design",
    cover: images.planning,
    gallery: [images.planning, images.cta, images.featuredWide, images.event],
    services: ["Décor & Styling", "Event Management", "Photography"],
    story:
      "An intimate family dinner with heirloom textiles, low florals, and a hosting plan that let every guest feel personally welcomed.",
    quote: "Every detail felt like it belonged to our family.",
    credits: ["Venue: Private home", "Décor: Sritikuthi direction", "Catering: Client partner"],
    nextProject: "heritage-brand-dinner",
  },
  {
    slug: "heritage-brand-dinner",
    title: "Heritage Brand Dinner",
    location: "Mumbai",
    date: "June 2025",
    category: "Corporate Events",
    cover: images.event,
    gallery: [images.event, images.cta, images.mosaicThree, images.mosaicFour],
    services: ["Corporate Event Management", "Styling", "Photography"],
    story:
      "A brand dinner shaped around tactile materials, measured guest flow, and photography that felt editorial without interrupting conversation.",
    quote: "The event looked refined and ran with no visible friction.",
    credits: ["Client: Independent design atelier", "Production: Sritikuthi The Wedding Tales", "Location: Mumbai"],
    nextProject: "ishani-ritwik-bengali-wedding",
  },
];

export const portfolioCategories = ["All", "Weddings", "Pre-Weddings", "Films", "Event Design", "Corporate Events"] as const;

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
