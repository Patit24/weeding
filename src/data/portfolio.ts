import { images, preWeddingGalleries, weddingGalleries, riceCeremonyGalleries, type ImageAsset } from "./images";

export type PortfolioCategory = "Weddings" | "Pre-Weddings" | "Rice Ceremonies" | "Films" | "Event Design" | "Corporate Events";

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
    slug: "anirban-debopriya-bengali-wedding",
    title: "Anirban & Debopriya",
    location: "Heritage Mandap, South Kolkata",
    date: "February 2026",
    category: "Weddings",
    cover: weddingGalleries.anirbanDebopriya.cover,
    gallery: weddingGalleries.anirbanDebopriya.photos,
    services: ["Traditional Bengali Wedding", "Shubho Drishti Rituals", "4K Cinematic Film", "Heirloom Photo Album"],
    story:
      "A soulful Bengali wedding celebration marked by sacred conch blowing (Shankhadhwani), traditional Shubho Drishti betel leaf ritual, the groom in Topor, and glowing reception portraits.",
    quote: "Sritikuthi captured our Shubho Drishti and wedding rituals with such breathtaking authenticity and warmth.",
    credits: ["Venue: Heritage Mandap, Kolkata", "Ritual Styling: Traditional Bengali Banarasi & Topor", "Photography & Films: Sritikuthi The Wedding Tales"],
    nextProject: "sneha-koushik-regal-wedding",
  },
  {
    slug: "sneha-koushik-regal-wedding",
    title: "Sneha & Koushik",
    location: "Heritage Palace & Lakeside, Kolkata",
    date: "January 2026",
    category: "Weddings",
    cover: weddingGalleries.snehaKoushik.cover,
    gallery: weddingGalleries.snehaKoushik.photos,
    services: ["Bridal Portraiture", "Shubho Drishti Documentation", "Cinematic Highlight", "Drone Aerials"],
    story:
      "From the dramatic crimson glow of bridal Mukut studio portraits to the heartwarming Shubho Drishti ceremony and lakeside moments, an unforgettable celebration of two souls.",
    quote: "The bridal Mukut portraits and ritual moments look straight out of a royal Bengali painting.",
    credits: ["Venue: Heritage Palace, Kolkata", "Bridal Crown: Traditional Bengali Mukut & Nath", "Photography: Sritikuthi The Wedding Tales"],
    nextProject: "dhritidipa-bridal-tales",
  },
  {
    slug: "dhritidipa-bridal-tales",
    title: "Dhritidipa",
    location: "Serene Garden Vista, Kolkata",
    date: "December 2025",
    category: "Weddings",
    cover: weddingGalleries.dhritidipa.cover,
    gallery: weddingGalleries.dhritidipa.photos,
    services: ["Bridal Solo Session", "Ritual Portraiture", "Art Direction"],
    story:
      "Graceful Mukut elegance, traditional turquoise-magenta silk sarees, and candid joy as confetti and leaves shower over a radiant Bengali bride.",
    quote: "Every frame brings back the unhurried joy and blessings of our special day.",
    credits: ["Location: Botanical Gardens, Kolkata", "Attire: Handwoven Silk Saree & Gold Ornaments", "Photography: Sritikuthi The Wedding Tales"],
    nextProject: "aarav-annaprashan-rice-ceremony",
  },
  {
    slug: "aarav-annaprashan-rice-ceremony",
    title: "Baby Aarav's Rice Ceremony",
    location: "Private Residence & Studio, Kolkata",
    date: "January 2026",
    category: "Rice Ceremonies",
    cover: riceCeremonyGalleries.aaravAnnaprashan.cover,
    gallery: riceCeremonyGalleries.aaravAnnaprashan.photos,
    services: ["Annaprashan Ceremony", "Infant Portraiture", "Candid Family Moments", "Keepsake Photobook"],
    story:
      "Celebrating baby's first taste of solid food (Mukhebhaat) with sweet smiles, glowing fairy light teepee setups, cuddly plush toys, and warm blessings from grandparents and mama.",
    quote: "Shiladitya and his team were so patient and gentle with our baby. The pictures are pure magic!",
    credits: ["Setup: Cozy fairy light teepee & plushies", "Styling: Traditional Peach & Pink Infant Attire", "Photography: Sritikuthi The Wedding Tales"],
    nextProject: "sneha-somnath-kolkata-prewedding",
  },
  {
    slug: "sneha-somnath-kolkata-prewedding",
    title: "Sneha & Somnath",
    location: "Howrah Ghat & Princep Ghat, Kolkata",
    date: "January 2026",
    category: "Pre-Weddings",
    cover: preWeddingGalleries.snehaSomnath.cover,
    gallery: preWeddingGalleries.snehaSomnath.photos,
    services: ["Pre-Wedding Photography", "Drone Cinematography", "Creative Concept Styling"],
    story:
      "A quintessential Kolkata romance by the Ganges. Running freely as pigeons scatter before the iconic Howrah Bridge, dressed in vibrant Bengali handloom, catching the warm morning breeze.",
    quote: "Smritikuthi made us forget the camera and just enjoy the ghats of our beloved Kolkata.",
    credits: ["Location: Howrah Riverfront & Ghats, Kolkata", "Wardrobe: Handwoven Bengali Traditional", "Photography: Sritikuthi The Wedding Tales"],
    nextProject: "sneha-koushik-heritage-prewedding",
  },
  {
    slug: "sneha-koushik-heritage-prewedding",
    title: "Sneha & Koushik",
    location: "Heritage Rajbari, Kolkata",
    date: "December 2025",
    category: "Pre-Weddings",
    cover: preWeddingGalleries.snehaKoushik.cover,
    gallery: preWeddingGalleries.snehaKoushik.photos,
    services: ["Heritage Pre-Wedding Session", "Cinematic Film", "Lighting Direction"],
    story:
      "Framed beneath majestic crystal chandeliers and vintage gilded mirrors in a royal Kolkata Rajbari, this session brought aristocratic elegance and quiet intimacy into every frame.",
    quote: "The lighting and royal aesthetic looked straight out of a classic Bengali period film.",
    credits: ["Venue: Heritage Rajbari Kolkata", "Styling: Royal Red & White Bengali Ensembles", "Photography: Sritikuthi The Wedding Tales"],
    nextProject: "sourin-sharmistha-nature-prewedding",
  },
  {
    slug: "sourin-sharmistha-nature-prewedding",
    title: "Sourin & Sharmistha",
    location: "Eco Park & Green Woodlands, Kolkata",
    date: "November 2025",
    category: "Pre-Weddings",
    cover: preWeddingGalleries.sourinSharmistha.cover,
    gallery: preWeddingGalleries.sourinSharmistha.photos,
    services: ["Outdoor Pre-Wedding", "Couple Portraits", "Editorial Color Grading"],
    story:
      "Soft golden sunlight filtering through emerald trees, quiet whispers, and an intimate forehead kiss that holds years of shared memories.",
    quote: "Every photo feels gentle, unhurried, and genuinely us.",
    credits: ["Location: Green Woodlands & Botanical Vista, Kolkata", "Wardrobe: Contemporary Pastel Tones", "Photography: Sritikuthi The Wedding Tales"],
    nextProject: "avronil-neha-north-kolkata-prewedding",
  },
  {
    slug: "avronil-neha-north-kolkata-prewedding",
    title: "Avronil & Neha",
    location: "North Kolkata Heritage Lanes",
    date: "October 2025",
    category: "Pre-Weddings",
    cover: preWeddingGalleries.avronilNeha.cover,
    gallery: preWeddingGalleries.avronilNeha.photos,
    services: ["Heritage Street Pre-Wedding", "Candid Documentary", "Art Direction"],
    story:
      "Playful street laughter, old terracotta walls, and vintage wooden shutters in the charming lanes of North Kolkata.",
    quote: "The team made our casual laughter look like poetry.",
    credits: ["Location: Vintage Heritage Streets, North Kolkata", "Wardrobe: Crimson & Chikankari Kurta", "Photography: Sritikuthi The Wedding Tales"],
    nextProject: "anirban-debapriya-sunburst-prewedding",
  },
  {
    slug: "anirban-debapriya-sunburst-prewedding",
    title: "Anirban & Debapriya",
    location: "Kolkata Architectural Skyline",
    date: "September 2025",
    category: "Pre-Weddings",
    cover: preWeddingGalleries.anirbanDebapriya.cover,
    gallery: preWeddingGalleries.anirbanDebapriya.photos,
    services: ["Architectural Pre-Wedding", "Silhouette Photography", "Candid Portraits"],
    story:
      "Dramatic sunburst silhouettes over historic Kolkata rooftops and alleyways, celebrating warmth and unscripted companionship.",
    quote: "The sunburst silhouette portrait is framed on our living room wall—truly magnificent.",
    credits: ["Location: Historic City Center, Kolkata", "Wardrobe: Casual Contemporary", "Photography: Sritikuthi The Wedding Tales"],
    nextProject: "indrajit-susmita-coastal-prewedding",
  },
  {
    slug: "indrajit-susmita-coastal-prewedding",
    title: "Indrajit & Susmita",
    location: "Bengal Coastal Shoreline",
    date: "August 2025",
    category: "Pre-Weddings",
    cover: preWeddingGalleries.indrajitSusmita.cover,
    gallery: preWeddingGalleries.indrajitSusmita.photos,
    services: ["Destination Beach Pre-Wedding", "Drone Aerials", "Couple Session"],
    story:
      "Minimalist white-on-white romance by the calm coastal tide. Gentle sea breezes, interlocking fingers, and open horizon lines.",
    quote: "The ocean portraits capture our bond with such peace and simplicity.",
    credits: ["Location: Bengal Coastal Beach", "Wardrobe: Seaside White Monochrome", "Photography: Sritikuthi The Wedding Tales"],
    nextProject: "ishani-ritwik-bengali-wedding",
  },
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
    nextProject: "sneha-somnath-kolkata-prewedding",
  },
  {
    slug: "basu-family-gathering",
    title: "The Basu Family Gathering",
    location: "Kolkata",
    date: "August 2025",
    category: "Event Design",
    cover: images.event,
    gallery: [images.event, images.mosaicTwo, images.planning, images.featuredWide],
    services: ["Décor & Styling", "Event Management", "Photography"],
    story:
      "An intimate family dinner with heirloom textiles, low florals, and a hosting plan that let every guest feel personally welcomed.",
    quote: "Every detail felt like it belonged to our family.",
    credits: ["Venue: Private heritage banquet", "Décor: Sritikuthi direction", "Catering: Client partner"],
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
    nextProject: "anirban-debopriya-bengali-wedding",
  },
];

export const portfolioCategories = ["All", "Weddings", "Pre-Weddings", "Rice Ceremonies", "Films", "Event Design", "Corporate Events"] as const;

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}


