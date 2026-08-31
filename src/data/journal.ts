import { images, type ImageAsset } from "./images";

export type JournalPost = {
  slug: string;
  title: string;
  category: "Wedding Planning" | "Photography Advice" | "Real Weddings" | "Event Design" | "Destination Weddings";
  date: string;
  readingTime: string;
  excerpt: string;
  image: ImageAsset;
  author: string;
  body: string[];
  quote: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "stress-free-wedding-timeline",
    title: "Planning a wedding timeline that leaves room to breathe",
    category: "Wedding Planning",
    date: "2026-06-18",
    readingTime: "6 min read",
    excerpt: "A calm wedding day is rarely accidental. It is built through generous buffers, honest priorities, and fewer unnecessary transitions.",
    image: images.planning,
    author: "Shiladitya Das",
    quote: "The best timelines protect feeling, not just punctuality.",
    body: [
      "Begin with the moments that matter most to your families, then build the day around them. A timeline should support the emotional rhythm of the celebration rather than forcing every ritual into the same pace.",
      "Add quiet space before portraits, after ceremonies, and before entrances. These pauses are where people settle, touch up, breathe, and return to themselves.",
      "Share one clear version of the schedule with family leads and vendors. When everyone works from the same rhythm, the day feels hosted instead of hurried.",
    ],
  },
  {
    slug: "choose-your-wedding-photographer",
    title: "How to choose a wedding photographer without getting lost in trends",
    category: "Photography Advice",
    date: "2026-05-29",
    readingTime: "5 min read",
    excerpt: "Look beyond a beautiful grid. Ask how a photographer handles family, light, time pressure, and the parts of the day no one can repeat.",
    image: images.photography,
    author: "Sritikuthi Editorial",
    quote: "Consistency matters more than one perfect portrait.",
    body: [
      "Review full wedding stories, not only highlights. A strong photographer can move from rituals to portraits to crowded dance floors without the work losing its voice.",
      "Notice how families are photographed. Premium wedding coverage is not only about the couple; it is also about the people who raised, shaped, and travelled for them.",
      "Ask about backup gear, delivery timelines, second photographers, and how the team approaches low light. The answers should feel specific and calm.",
    ],
  },
  {
    slug: "personal-celebration-design",
    title: "Designing a celebration that feels personal",
    category: "Event Design",
    date: "2026-05-03",
    readingTime: "4 min read",
    excerpt: "Personal design is less about adding more details and more about choosing the right ones with intention.",
    image: images.cta,
    author: "Shiladitya Das",
    quote: "A personal wedding does not need to explain itself; it simply feels true.",
    body: [
      "Start with memory, not moodboards. A family textile, a favourite flower, a shared city, or a ritual can carry more meaning than a borrowed trend.",
      "Edit firmly. When every corner asks for attention, the important details get quieter. Let a few strong choices lead the room.",
      "Design guest movement alongside decor. Where people gather, pause, greet, eat, and dance will shape the emotional experience as much as the flowers.",
    ],
  },
  {
    slug: "kolkata-candlelit-real-wedding",
    title: "Inside a candlelit Kolkata wedding",
    category: "Real Weddings",
    date: "2026-04-12",
    readingTime: "7 min read",
    excerpt: "A real celebration with Bengali rituals, courtyard music, and a reception designed around warmth rather than spectacle.",
    image: images.featuredWide,
    author: "Sritikuthi Editorial",
    quote: "The evening looked grand because it felt intimate first.",
    body: [
      "The couple wanted a wedding that held tradition without becoming theatrical. We built the visual language around low candles, marigold restraint, and family heirlooms.",
      "Photography moved quietly through the day, giving elders, siblings, and friends the same attention as the headline moments.",
      "The final gallery tells the story in layers: ritual, room, touch, laughter, and the last song after midnight.",
    ],
  },
  {
    slug: "destination-wedding-light",
    title: "What to know about light at destination weddings",
    category: "Destination Weddings",
    date: "2026-03-21",
    readingTime: "5 min read",
    excerpt: "Different cities ask for different timing. Light, heat, travel, and venue restrictions should shape the plan early.",
    image: images.mosaicTwo,
    author: "Sritikuthi Editorial",
    quote: "The destination should shape the schedule, not just the invitation.",
    body: [
      "Scout the ceremony and portrait locations at the same time of day you plan to use them. Noon courtyards, sunset terraces, and indoor halls behave very differently.",
      "Build travel time generously, especially when guests are moving between venues. A beautiful plan becomes fragile when transport is underestimated.",
      "Plan backup options that still feel considered. Rain plans, indoor portraits, and alternate entrances should be designed before they are needed.",
    ],
  },
  {
    slug: "family-formals-with-grace",
    title: "Family photographs without the chaos",
    category: "Photography Advice",
    date: "2026-02-15",
    readingTime: "4 min read",
    excerpt: "Family portraits can be efficient and warm when names, helpers, and timing are decided before the wedding day.",
    image: images.mosaicThree,
    author: "Shiladitya Das",
    quote: "Good preparation makes formal photographs feel less formal.",
    body: [
      "Make a short list of essential combinations and share it with the photography team before the wedding week.",
      "Choose one helper from each side of the family who knows the faces and can gather people kindly.",
      "Place family portraits after a natural gathering point, not during a transition when guests are scattered across the venue.",
    ],
  },
];

export const journalCategories = ["All", "Wedding Planning", "Photography Advice", "Real Weddings", "Event Design", "Destination Weddings"] as const;

export function getJournalPost(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}
