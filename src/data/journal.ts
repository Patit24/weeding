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
    slug: "aiburobhat-bengali-wedding-ritual-guide",
    title: "Aiburobhat: Meaning, Rituals, Traditional Menu & Photography Ideas",
    category: "Wedding Planning",
    date: "2026-07-02",
    readingTime: "8 min read",
    excerpt: "Everything you need to know about the beloved Bengali pre-wedding feast of Aiburobhat: cultural significance, 5-fry thali traditions, blessings, and emotional candid photography moments.",
    image: images.mosaicOne,
    author: "Shiladitya Das",
    quote: "Aiburobhat is a feast of memory before a step into a new lifetime.",
    body: [
      "In traditional Bengali wedding culture, 'Aiburo' means unmarried and 'Bhat' means rice meal. The Aiburobhat marks the bride and groom's ceremonial final home meal as a bachelor or bachelorette, lovingly prepared by maternal aunts, uncles, and parents.",
      "The Traditional 5-Fry (Panch Bhaja) Thali: A classic Aiburobhat spread features steaming Gobindobhog rice with ghee, yellow dal, Shukto, followed by 5 types of fries (Begun, Alu, Potol, Ucchhe, Machher Tel), Ilish Bhapa or Chingri Malaikari, mutton Kosha Mangsho, tomato-khejur chutney, Payesh (kheer), and authentic Bengali Mishti.",
      "Key Photography Moments: We focus on the tender eye contact when maternal grandparents feed the first spoonful of Payesh, candid laughter with cousins holding brass thaals, and the bride's glowing joy in her traditional handloom saree.",
      "How to Plan the Schedule: Host your Aiburobhat during late morning light (11:30 AM to 1:30 PM) in a well-ventilated room with ample natural window illumination so food steam, brass reflections, and warm skin tones capture naturally without heavy flash disruption.",
    ],
  },
  {
    slug: "shubho-drishti-saat-paak-sindoor-daan-guide",
    title: "Shubho Drishti, Saat Paak & Sindoor Daan: Sacred Moments of Bengali Weddings",
    category: "Real Weddings",
    date: "2026-06-25",
    readingTime: "7 min read",
    excerpt: "A deep dive into the most sacred and visually dramatic Bengali wedding rituals: the wooden Piri lifting, the seven circles of fire, and the eternal red Sindoor Daan.",
    image: images.hero,
    author: "Sritikuthi Editorial",
    quote: "When the betel leaves part during Shubho Drishti, a room full of noise turns to sheer silence.",
    body: [
      "The Saat Paak & Piri Lift: The bride is carried on a low wooden stool (Piri) by her brothers and maternal cousins, encircling the groom seven times. Our cinematography team utilizes low-angle gimbals and 4K slow motion to frame the dynamic spiral of laughter, flower petals, and family energy.",
      "The Unveiling (Shubho Drishti): Lowering the auspicious Paan (betel leaves) to reveal the bride's eyes to the groom under the conch shell (Shankha) blowing and Ulu dhwani creates the quintessential iconic Bengali wedding image. Our dual-camera setup ensures synchronized master portraits of both bride and groom reactions.",
      "Sindoor Daan & Ghomta: The climax of the ceremony where the groom marks the bride's parting with red vermilion using a Darpan (silver mirror) or coin, followed by the elder women drawing the new silk Ghomta over her forehead. We photograph this quiet holy blessing with prime lenses for rich bokeh and cinematic depth.",
    ],
  },
  {
    slug: "annaprashan-rice-ceremony-photography-guide",
    title: "Annaprasan (Rice Ceremony) Photography: Rituals, Muhurat & Milestone Ideas",
    category: "Photography Advice",
    date: "2026-06-10",
    readingTime: "6 min read",
    excerpt: "How to plan and photograph a baby's first rice eating ceremony (Mukhe Bhaat) in Kolkata without overwhelming the little one: timing, family blessings, and heirloom album tips.",
    image: images.riceCeremony,
    author: "Shiladitya Das",
    quote: "A baby's first taste of rice is a milestone of family blessings.",
    body: [
      "The Holy First Taste: Annaprasan marks the transition to solid nourishment. Traditionally celebrated at 6 months for baby boys and 5 or 7 months for baby girls, the maternal uncle (Mama) feeds the first golden spoonful of sacred kheer (Payesh).",
      "The Future Destiny Tray (Jibika Tray): A beloved ritual where the baby is placed before a silver tray containing books, gold coins, soil, pen, and paddy to see which item tiny hands reach for first. We capture this delightful curiosity in rapid burst photography.",
      "Comfort-First Shooting Tips: Schedule the primary photoshoot right after the baby's morning nap when energy is highest. Avoid heavy artificial strobes near infant eyes—our team utilizes ultra-fast f/1.4 lenses to work purely with ambient room light.",
    ],
  },
  {
    slug: "bengali-wedding-photography-cost-guide",
    title: "How Much Does a Bengali Wedding Photographer Cost in Kolkata? (2026 Price Guide)",
    category: "Wedding Planning",
    date: "2026-05-18",
    readingTime: "7 min read",
    excerpt: "A transparent breakdown of wedding photography packages in Kolkata, candid vs traditional crew shifts, drone cinematography rates, and album pricing.",
    image: images.photography,
    author: "Shiladitya Das",
    quote: "Transparency in pricing allows couples to invest with confidence.",
    body: [
      "Understanding Shift Rates vs Full-Day Coverage: In Kolkata, premium candid photographers and cinematographers typically charge ₹6,000 per full-day shift or ₹3,000 for half-day morning rituals like Dodhi Mangal or Gaye Holud.",
      "Key Cost Factors: Package totals vary based on (1) Number of days and rituals (Aiburobhat, Wedding, Bou Bhat), (2) Crew size—e.g. 2 Candid + 2 Cinematography + 1 Drone Operator, (3) Deliverables like 4K cinematic teasers, chaptered ritual films, and Italian flush-mount photobooks.",
      "Using an Interactive Calculator: Instead of rigid one-size-fits-all bundles, use our live Rate Calculator on Sritikuthi to select your exact functions, crew members, and add-ons with real-time WhatsApp quote generation.",
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
