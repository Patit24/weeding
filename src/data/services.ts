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
    slug: "wedding",
    title: "Wedding",
    eyebrow: "Sacred rituals, candid tears, timeless heirloom stories",
    description:
      "Documentary-led wedding photography and cinematography for traditional Bengali, luxury, and destination weddings. From Gaye Holud, Borjatri, and Sindoor Daan to the Bou Bhat reception, every glance and emotion is captured with artistic reverence.",
    image: images.photography,
    href: "/services/wedding",
    deliverables: [
      "Full-day multi-camera coverage",
      "Edited high-resolution candid gallery",
      "4K cinematic highlight teaser (3–5 mins)",
      "Traditional chaptered ceremony film (60–90 mins)",
      "Premium Italian handcrafted heirloom album",
    ],
    process: ["Initial consultation", "Ritual timeline review", "Event day lead capture", "Color grading & album design delivery"],
    inclusions: ["Senior candid photographer", "Cinematographer", "Traditional photo & video crew", "Drone 4K aerial coverage", "Master online gallery"],
    addOns: ["Express 24-hr sneak peek", "Parent keepsake albums", "Live streaming worldwide", "Raw master hard drive"],
    faqs: [
      { question: "How many images will we receive?", answer: "Typically 600 to 1,200+ fully retouched and color-graded high-resolution photos depending on the celebration scale." },
      { question: "Do you travel for outstation or destination weddings?", answer: "Yes! We travel across Kolkata, West Bengal, Bihar, Jharkhand, and pan-India destination venues." },
    ],
  },
  {
    slug: "pre-wedding",
    title: "Pre-Wedding",
    eyebrow: "Cinematic, relaxed & editorial couple sessions",
    description:
      "Creative concept-driven pre-wedding photography and cinematic music videos. Whether in historic Kolkata streets, Shantiniketan red earth, tea gardens of Darjeeling, or a heritage palace stay, we design comfortable, unposed sessions that celebrate your connection.",
    image: images.mosaicOne,
    href: "/services/pre-wedding",
    deliverables: [
      "1 or 2-day outdoor styled session",
      "35–50 master retouched portraits",
      "Cinematic couple music film (2–3 mins)",
      "Social media vertical reels teaser pack",
      "High-res photos formatted for digital wedding invites",
    ],
    process: ["Moodboard & concept styling", "Location scouting & timing", "Relaxed guided shoot", "Color graded photo & film delivery"],
    inclusions: ["Lead candid photographer", "Cinematographer with gimbal", "Styling & pose guidance", "All high-res digital files"],
    addOns: ["Aerial drone footage", "Multiple costume changes", "Location permits assistance", "Mini photobook"],
    faqs: [
      { question: "We are camera-shy, how will the shoot feel?", answer: "We never force stiff poses. We direct natural interactions, laughter, and movements to ensure you feel 100% comfortable." },
      { question: "When should we plan our pre-wedding shoot?", answer: "Ideally 1 to 3 months before the wedding to allow time for editing and invitation use." },
    ],
  },
  {
    slug: "rice-ceremony",
    title: "Rice Ceremony",
    eyebrow: "Annaprasan · Mukhebhaat · Sacred childhood milestones",
    description:
      "Gentle, patient, and joyful documentation of your baby's first solid food milestone. From traditional sandalwood makeup (Chandan phota) and mama's blessing to playful family moments and baby portraits, we preserve this tender cultural tradition with utmost warmth.",
    image: images.cta,
    href: "/services/rice-ceremony",
    deliverables: [
      "Ritual & guest reception coverage",
      "Dedicated baby & parents portrait session",
      "150+ color-graded high-res photos",
      "Short emotional celebration highlight reel",
      "Custom baby keepsake photobook",
    ],
    process: ["Schedule around baby's sleep & meal time", "Quiet ritual documentation", "Candid family coverage", "Prompt gallery delivery"],
    inclusions: ["Candid & traditional photographer", "Gentle lighting suitable for infants", "High-res edited gallery"],
    addOns: ["Traditional video coverage", "Parent mini-albums", "Same-day photo sneak peek"],
    faqs: [
      { question: "How do you manage if the baby gets cranky?", answer: "We work around the baby's comfort, taking breaks whenever needed with zero rush." },
      { question: "Can we include outdoor family portraits?", answer: "Yes, we can do a brief intimate portrait session before the ceremony begins." },
    ],
  },
  {
    slug: "events",
    title: "Events",
    eyebrow: "Anniversaries, birthdays, cultural galas & private celebrations",
    description:
      "Comprehensive photo and video coverage for personal, cultural, and family milestone events. We capture the venue decor, guest arrivals, performances, speeches, and lively candid interactions without being obtrusive.",
    image: images.event,
    href: "/services/events",
    deliverables: [
      "Complete event documentary coverage",
      "Edited high-resolution photo gallery",
      "Event highlight video teaser",
      "VIP & family stage portraits",
    ],
    process: ["Event rundown discussion", "On-ground live coverage", "Prompt post-processing", "Digital gallery link"],
    inclusions: ["Lead event photographer", "Standard lighting kit", "Color corrected images", "Commercial usage rights"],
    addOns: ["Cinematography & interviews", "Live streaming", "Same-day event highlight reel", "Photo booth setup"],
    faqs: [
      { question: "What is your turnaround time for event photos?", answer: "Standard delivery is within 5 to 7 business days, with urgent 24-hr previews available on request." },
    ],
  },
  {
    slug: "engagement",
    title: "Engagement",
    eyebrow: "Ring ceremony, Aashirbaad & intimate beginnings",
    description:
      "Intimate documentation of your engagement, ring exchange, and family Aashirbaad rituals. We capture the subtle glances, emotional family blessings, and glamorous couple portraits in equal measure.",
    image: images.mosaicTwo,
    href: "/services/engagement",
    deliverables: [
      "Half-day or full-day ritual coverage",
      "200+ retouched high-resolution photos",
      "Engagement cinematic highlight video (2–3 mins)",
      "Couple editorial portrait session",
    ],
    process: ["Timeline alignment", "Ring ceremony capture", "Family formal & candid portraits", "Digital delivery"],
    inclusions: ["Senior candid photographer", "Cinematographer", "Color grading"],
    addOns: ["Drone coverage", "Engagement guestbook album", "Express social media teaser"],
    faqs: [
      { question: "Can we combine engagement and pre-wedding on the same weekend?", answer: "Yes, we offer bundled packages with attractive discounts." },
    ],
  },
  {
    slug: "corporate-shoot",
    title: "Corporate Shoot",
    eyebrow: "Conferences, brand summits, corporate headshots & leadership galas",
    description:
      "Crisp, polished visual media for businesses, brand conferences, award galas, executive headshots, and corporate culture documentation. We deliver professional imagery ready for annual reports, PR, LinkedIn, and media releases.",
    image: images.planning,
    href: "/services/corporate-shoot",
    deliverables: [
      "Executive headshots & team group portraits",
      "Full conference, keynote & panel discussion coverage",
      "B-roll & attendee networking shots",
      "Corporate sizzle reel / event recap video",
      "High-res press-ready digital gallery",
    ],
    process: ["Event agenda & branding briefing", "On-site multi-camera setup", "Fast turnaround for press/PR", "Full license delivery"],
    inclusions: ["Corporate photographer", "Studio lighting setup", "High-speed raw editing", "Commercial license"],
    addOns: ["Multi-camera live streaming (Zoom/YouTube/Teams)", "Teleprompter & video interviews", "Same-day press photos"],
    faqs: [
      { question: "Can you provide GST invoices?", answer: "Yes, official GST-compliant tax invoices are provided for all corporate assignments." },
    ],
  },
  {
    slug: "model-shoot",
    title: "Model Shoot",
    eyebrow: "Fashion portfolios, lookbooks, agency comp cards & editorial styling",
    description:
      "High-fashion photography and visual aesthetics tailored for aspiring and professional models, actors, influencers, and designer lookbooks. Studio strobe lighting, cinematic natural light, and magazine-grade skin retouching.",
    image: images.featuredPortrait,
    href: "/services/model-shoot",
    deliverables: [
      "Indoor studio / outdoor location session",
      "15–25 magazine-grade high-end retouched portraits",
      "Agency standard Comp Card layout",
      "Fashion video reel / motion portfolio (9:16)",
      "Unrestricted portfolio usage release",
    ],
    process: ["Moodboard curation & wardrobe guide", "Professional shoot with lighting changes", "Proofing gallery selection", "Master retouching"],
    inclusions: ["Lead fashion photographer", "Professional studio/location lighting", "Posing direction", "High-end skin retouching"],
    addOns: ["Professional Hair & Makeup Artist (MUA)", "Fashion stylist", "Express 48-hr retouching"],
    faqs: [
      { question: "Do you help beginners with posing?", answer: "Absolutely. We guide every posture, angle, expression, and eye contact throughout the shoot." },
    ],
  },
  {
    slug: "commercial",
    title: "Commercial",
    eyebrow: "Product campaigns, culinary, architecture, ecommerce & advertising",
    description:
      "Results-oriented commercial photography and ad films designed to elevate brands, restaurants, jewelry, apparel, real estate, and lifestyle products. Crisp lighting and razor-sharp detailing that convert viewers into customers.",
    image: images.featuredWide,
    href: "/services/commercial",
    deliverables: [
      "White background e-commerce packshots (Amazon/Shopify ready)",
      "Creative lifestyle & styled flat-lay product imagery",
      "Short commercial ad films & product showcase reels",
      "High-resolution color-accurate commercial masters",
    ],
    process: ["Creative brief & moodboard", "Set styling & lighting design", "Shooting & tethered client review", "Master retouching & delivery"],
    inclusions: ["Commercial photographer", "Macro & studio specialty lenses", "Color calibration (ColorChecker)", "Commercial usage buyout"],
    addOns: ["Stop-motion product animation", "Voiceover & licensed ad music", "Location sets & props sourcing"],
    faqs: [
      { question: "Do you shoot on-location or in-studio?", answer: "Both. We can bring our mobile studio setup to your business location or shoot in our controlled studio environment." },
    ],
  },
];

export const overviewServices = [...services];
