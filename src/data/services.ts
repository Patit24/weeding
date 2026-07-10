import { images } from "./images";

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: typeof images.hero;
  href: string;
  deliverables: string[];
  process: string[];
  inclusions: string[];
  addOns: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "wedding-photography",
    title: "Wedding Photography",
    eyebrow: "For memories that still feel alive",
    description:
      "Documentary-led photography for ceremonies, rituals, portraits, family moments, and all the small in-between gestures that give a wedding its pulse.",
    image: images.photography,
    href: "/services/wedding-photography",
    deliverables: ["Full-day coverage", "Edited high-resolution gallery", "Fine-art album guidance", "Family and couple portraits"],
    process: ["Story consultation", "Timeline review", "Celebration coverage", "Private gallery delivery"],
    inclusions: ["Lead photographer", "Second photographer where needed", "Color graded images", "Online gallery", "Print release"],
    addOns: ["Additional day coverage", "Pre-wedding session", "Heirloom album", "Same-week highlights"],
    faqs: [
      { question: "How many images will we receive?", answer: "The final count depends on the scale and number of events, but every delivered image is edited with care." },
      { question: "Do you travel for weddings?", answer: "Yes. We regularly photograph celebrations across India and selected destination weddings." },
    ],
  },
  {
    slug: "wedding-films",
    title: "Wedding Films",
    eyebrow: "Movement, voice, atmosphere",
    description:
      "Cinematic wedding films shaped around real sound, quiet emotion, and the rhythm of the celebration rather than staged spectacle.",
    image: images.films,
    href: "/services/wedding-films",
    deliverables: ["Highlight film", "Ceremony edit", "Speeches and vows", "Social teaser"],
    process: ["Film language call", "Shot planning", "Live event capture", "Edit and music licensing"],
    inclusions: ["Cinematographer team", "Professional audio capture", "Color graded edit", "Private review link"],
    addOns: ["Drone coverage where permitted", "Extended family film", "Instagram reels", "Multi-day documentary edit"],
    faqs: [
      { question: "Can we choose the music?", answer: "We welcome direction, then use licensed music that supports the film legally and emotionally." },
      { question: "Do you record full ceremonies?", answer: "Yes, full ceremony and speech edits can be included in the proposal." },
    ],
  },
  {
    slug: "wedding-planning",
    title: "Wedding Planning",
    eyebrow: "Calm structure for meaningful celebrations",
    description:
      "Planning support that holds logistics, vendor coordination, guest flow, and family expectations with warmth and precision.",
    image: images.planning,
    href: "/services/wedding-planning",
    deliverables: ["Planning roadmap", "Vendor coordination", "Timeline and floor plan", "On-ground event direction"],
    process: ["Discovery", "Design and vendor mapping", "Production planning", "Celebration management"],
    inclusions: ["Budget framework", "Venue coordination", "Guest movement plan", "Run sheet", "Production checklists"],
    addOns: ["Hospitality desks", "Travel coordination", "Invitation logistics", "Welcome dinner planning"],
    faqs: [
      { question: "Do you work with our existing vendors?", answer: "Yes. We can coordinate your chosen vendors or recommend teams that fit the celebration." },
      { question: "Can you handle only the wedding week?", answer: "Yes. We offer wedding-week management when the larger planning is already in place." },
    ],
  },
  {
    slug: "event-management",
    title: "Event Management",
    eyebrow: "Elegant gatherings beyond the wedding day",
    description:
      "Design-conscious management for private celebrations, brand dinners, corporate galas, anniversaries, and milestone gatherings.",
    image: images.event,
    href: "/services/event-management",
    deliverables: ["Event concept", "Venue and vendor handling", "Guest experience planning", "Production coordination"],
    process: ["Brief", "Concept and logistics", "Vendor booking", "Event day leadership"],
    inclusions: ["Vendor shortlist", "Production plan", "Décor coordination", "Guest flow", "Post-event wrap"],
    addOns: ["Photography", "Film coverage", "Entertainment sourcing", "Brand styling"],
    faqs: [
      { question: "Do you manage corporate events?", answer: "Yes. We manage premium brand gatherings, leadership dinners, launches, and private hosted events." },
      { question: "Can you design the decor too?", answer: "We can create the visual direction and coordinate florals, lighting, furniture, and styling partners." },
    ],
  },
];

export const overviewServices = [
  ...services,
  {
    slug: "pre-wedding-stories",
    title: "Pre-Wedding Stories",
    eyebrow: "Portraits before the pace begins",
    description: "Editorial couple sessions shaped around location, styling, and natural chemistry.",
    image: images.mosaicOne,
    href: "/contact",
    deliverables: ["Concept direction", "Location planning", "Edited portrait gallery"],
    process: ["Moodboard", "Shoot", "Selection", "Delivery"],
    inclusions: ["Photographer", "Styling notes", "Edited images"],
    addOns: ["Makeup artist", "Wardrobe styling"],
    faqs: [],
  },
  {
    slug: "decor-styling",
    title: "Décor & Styling",
    eyebrow: "Atmosphere with restraint",
    description: "Tables, florals, light, and spatial details that feel personal without feeling crowded.",
    image: images.featuredWide,
    href: "/contact",
    deliverables: ["Visual direction", "Vendor coordination", "Styling plan"],
    process: ["Brief", "Design", "Sourcing", "Install"],
    inclusions: ["Moodboard", "Production notes", "On-site styling"],
    addOns: ["Custom stationery", "Welcome hampers"],
    faqs: [],
  },
  {
    slug: "guest-vendor-coordination",
    title: "Guest & Vendor Coordination",
    eyebrow: "The invisible work that makes everything feel easy",
    description: "Careful coordination for arrivals, rooms, transport, vendor timing, and family communication.",
    image: images.mosaicThree,
    href: "/contact",
    deliverables: ["Guest flow", "Vendor run sheet", "Communication plan"],
    process: ["Audit", "Plan", "Coordinate", "Resolve"],
    inclusions: ["Hospitality checklist", "On-ground team", "Vendor desk"],
    addOns: ["Travel support", "Concierge desk"],
    faqs: [],
  },
  {
    slug: "private-celebrations",
    title: "Private Celebrations",
    eyebrow: "Intimate, hosted, considered",
    description: "Anniversaries, birthdays, and family gatherings designed and managed with quiet polish.",
    image: images.cta,
    href: "/contact",
    deliverables: ["Event plan", "Styling", "Photography options"],
    process: ["Brief", "Plan", "Host", "Wrap"],
    inclusions: ["Vendor coordination", "Décor guidance", "Day management"],
    addOns: ["Film", "Entertainment", "Gifting"],
    faqs: [],
  },
];
