import { images, type ImageAsset } from "./images";

export type LocationItem = {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  heroImage: ImageAsset;
  description: string;
  travelInfo: string;
  popularVenues: string[];
  features: string[];
  testimonial: {
    client: string;
    venue: string;
    text: string;
    rating: number;
  };
  highlights: {
    title: string;
    description: string;
  }[];
};

export const locationsData: LocationItem[] = [
  {
    slug: "durgapur",
    name: "Durgapur",
    state: "West Bengal",
    tagline: "Premier Wedding Photography & 4K Cinematography in Durgapur & Asansol",
    heroImage: images.hero,
    description:
      "Planning a grand Bengali wedding in Durgapur, Asansol, or Raniganj? স্মৃতিকুঠি The Wedding Tales brings Kolkata's signature editorial aesthetics, master candid portraiture, and high-frame-rate 4K wedding cinema to the Steel City with seamless zero-stress travel coordination.",
    travelInfo: "Direct Highway & Express Rail connectivity from Kolkata. Complete team arrives with full production gear 24 hours prior to your first ritual.",
    popularVenues: [
      "The Peerless Inn Durgapur",
      "Fortune Park Bharat, Durgapur",
      "City Residency & Banquets",
      "Hotel The Park Residency",
      "Ananya Banquet Durgapur",
    ],
    features: [
      "Senior Kolkata Photographers & Cinematographers on-site",
      "Full Muhurat, Gaye Holud, Shubho Drishti & Bou Bhat coverage",
      "Licensed 4K Drone Cinematography for grand outdoor banquets",
      "Direct WhatsApp communication and personalized ritual schedules",
    ],
    testimonial: {
      client: "Debopriya & Anirban",
      venue: "City Center Banquets, Durgapur",
      text: "Shiladitya and his entire team travelled from Kolkata to Durgapur for our 3-day celebration. Their quiet patience during our Saat Paak and Sindoor Daan produced memories our family will treasure for generations!",
      rating: 5,
    },
    highlights: [
      {
        title: "Industrial Modernity Meets Heritage Rituals",
        description: "From sprawling club lawns in Durgapur to heritage household courtyards in Asansol, we capture every emotional beat with balanced lighting and authentic colors.",
      },
      {
        title: "All Rituals Covered with Care",
        description: "Comprehensive multi-camera storytelling spanning Aiburobhat, Dodhi Mangal, sacred Mandap ceremonies, and the Bou Bhat reception.",
      },
    ],
  },
  {
    slug: "siliguri",
    name: "Siliguri & North Bengal",
    state: "West Bengal",
    tagline: "Destination & Foothill Wedding Photography across Siliguri, Darjeeling & Dooars",
    heroImage: images.photography,
    description:
      "From scenic tea garden destination weddings in Dooars to opulent banquet celebrations across Siliguri and Matigara, স্মৃতিকুঠি The Wedding Tales crafts cinematic, romantic wedding visual stories framed by majestic Himalayan foothill light.",
    travelInfo: "Direct Bagdogra flights & Vande Bharat rail coordination. Dedicated gear freight and weather-sealed equipment suitable for foothill micro-climates.",
    popularVenues: [
      "Mayfair Tea Resort, Siliguri",
      "Courtyard by Marriott Siliguri",
      "Sinclairs Retreat Dooars",
      "Lemon Tree Hotel Siliguri",
      "The Cindrella Hotel & Resort",
    ],
    features: [
      "Specialized Himalayan golden hour couple portrait sessions",
      "Pre-wedding shoot locations across Mirik, Kurseong, and Sukna Forest",
      "Multi-angle 4K master cinema with crisp live audio recording",
      "Color grading calibrated for vibrant green landscapes and regal bridal silks",
    ],
    testimonial: {
      client: "Pooja & Sourav",
      venue: "Mayfair Tea Resort, Siliguri",
      text: "Having Sritikuthi shoot our destination wedding in North Bengal was the best decision we made. The teaser reel looked like a feature film!",
      rating: 5,
    },
    highlights: [
      {
        title: "Tea Garden Romance & Majestic Vistas",
        description: "We weave the tranquil natural beauty of North Bengal into your wedding portraits and couple films for timeless heirloom art.",
      },
      {
        title: "Destination Logistics Expertise",
        description: "Experienced in managing multi-day destination itineraries with backup cameras, drones, and lighting rigs.",
      },
    ],
  },
  {
    slug: "howrah",
    name: "Howrah",
    state: "West Bengal",
    tagline: "Authentic Bengali Wedding & Heritage Photography in Howrah & Hooghly",
    heroImage: images.mosaicOne,
    description:
      "Capturing timeless family traditions, century-old Bonedi Bari celebrations, and grand banquets across Howrah, Bally, Uttarpara, and the historic Hooghly riverbank with artistic devotion.",
    travelInfo: "Local Kolkata hub service with zero travel overheads. On-time arrival across all Howrah & Hooghly venues.",
    popularVenues: [
      "The Westin Kolkata (Rajarhat / Riverfront vicinity)",
      "Howrah Club & Banquets",
      "Heritage Rajbari estates along Hooghly river",
      "Utsav Banquet Shibpur",
      "Green Valley Banquet Howrah",
    ],
    features: [
      "Deep expertise in traditional Bonedi Bari family rituals",
      "Riverfront golden hour portraiture and Hooghly Ghat pre-wedding frames",
      "High-speed digital delivery within agreed timelines",
      "Handcrafted Italian flush-mount heirloom albums",
    ],
    testimonial: {
      client: "Sneha & Koushik",
      venue: "Riverbank Banquet, Howrah",
      text: "Every ritual was respected and captured without any rush. Their team felt like part of our family throughout the wedding night.",
      rating: 5,
    },
    highlights: [
      {
        title: "Ghats & Heritage Architecture",
        description: "We utilize natural architectural lines, terracotta temples, and vintage textures to give your wedding photographs an unmatched regal quality.",
      },
      {
        title: "Family First Philosophy",
        description: "Our photographers ensure grandparents, cousins, and lifelong friends receive the same warm attention as the bride and groom.",
      },
    ],
  },
  {
    slug: "shantiniketan",
    name: "Shantiniketan & Bolpur",
    state: "West Bengal",
    tagline: "Earthy, Bohemian & Heritage Rajbari Wedding Photography in Bolpur",
    heroImage: images.intro,
    description:
      "Celebrate your sacred union amidst red soil (Lal Mati), Palash flowers, Baul melodies, and terracotta heritage. Sritikuthi captures the poetic charm and organic warmth of Shantiniketan destination weddings.",
    travelInfo: "Quick express train or private highway convoy from Kolkata. Complete team ready for dawn Dodhi Mangal and sunset riverbed pre-wedding shoots.",
    popularVenues: [
      "Mohor Kutir Resort, Bolpur",
      "Sonajhurir Haat Heritage Cottages",
      "The Garden Bungalow Shantiniketan",
      "Aranya Resort Shantiniketan",
      "Surul Rajbari Heritage Estate",
    ],
    features: [
      "Natural-light focus celebrating terracotta tones and handloom silks",
      "Outdoor candid photography under Kopai riverbank tree canopies",
      "Unplugged cultural wedding films with authentic Baul & folk scores",
      "Fine-art couple sessions during Sonajhuri forest golden hours",
    ],
    testimonial: {
      client: "Madhurima & Rahul",
      venue: "Mohor Kutir, Shantiniketan",
      text: "Our Shantiniketan wedding had a rustic, natural feel that Sritikuthi preserved perfectly. The album is pure poetry!",
      rating: 5,
    },
    highlights: [
      {
        title: "Soulful Cultural Aesthetics",
        description: "Capturing open-air Mandap rituals surrounded by fragrant flowers, clay lamps, and organic Bengali artistry.",
      },
      {
        title: "Forest & Riverbed Pre-Weddings",
        description: "Dreamy couple portraits on the banks of the Kopai River and the picturesque Sonajhuri forest trails.",
      },
    ],
  },
  {
    slug: "patna",
    name: "Patna & Bihar",
    state: "Bihar",
    tagline: "Luxury Wedding Photography & 4K Cinema across Patna, Gaya & Muzaffarpur",
    heroImage: images.featuredWide,
    description:
      "Smritikuthi The Wedding Tales brings Kolkata's renowned cinematic wedding craftsmanship to grand Bihari, Marwari, and intercultural weddings in Patna, Gaya, and across Bihar.",
    travelInfo: "Direct flights and Vande Bharat rail connections to Patna Junction. Seamless interstate crew travel logistics.",
    popularVenues: [
      "Hotel Maurya, Patna",
      "Lemon Tree Premier, Patna",
      "The Panache, Patna",
      "Gargee Grand Hotel",
      "Patliputra Exotica",
    ],
    features: [
      "Specialized in multi-day celebrations: Tilak, Haldi, Sangeet, Jaimala & Vidaai",
      "Dual 4K cinematic cameras with wireless audio monitoring",
      "High-power lighting setups for grand hotel ballrooms and lawn setups",
      "Transparent shift pricing with no hidden charges",
    ],
    testimonial: {
      client: "Richa & Aditya",
      venue: "Hotel Maurya, Patna",
      text: "We booked Sritikuthi from Kolkata for our Patna wedding. Their punctuality, creative vision, and editing quality blew everyone away!",
      rating: 5,
    },
    highlights: [
      {
        title: "Grand Jaimala & Emotional Vidaai",
        description: "From electrifying Baraat entries to the tender emotions of Vidaai, we capture the grandeur and tears with equal sensitivity.",
      },
      {
        title: "Cross-Cultural Mastery",
        description: "Fluent in Bihari, Bengali, and North Indian wedding rituals, ensuring no symbolic custom is ever missed.",
      },
    ],
  },
  {
    slug: "ranchi",
    name: "Ranchi & Jharkhand",
    state: "Jharkhand",
    tagline: "Signature Wedding Photography & Films across Ranchi, Jamshedpur & Dhanbad",
    heroImage: images.films,
    description:
      "Elevate your wedding celebration in Jharkhand with Sritikuthi's editorial photography and cinematic wedding films. Available across Ranchi, Jamshedpur, Dhanbad, and Bokaro.",
    travelInfo: "Direct Vande Bharat train and flight connectivity from Kolkata. Crew travels with dedicated power backups and production equipment.",
    popularVenues: [
      "Radisson Blu Hotel, Ranchi",
      "Chanakya BNR Hotel, Ranchi",
      "The Boulevard Hotel, Jamshedpur",
      "Hotel Capitol Hill, Ranchi",
      "Ramada Jamshedpur",
    ],
    features: [
      "Comprehensive multi-day wedding and pre-wedding packages",
      "Drone cinematography capturing sprawling resort landscapes",
      "Dedicated lead visual artists for bride and groom sides",
      "Quick turnaround teaser video within 7 working days",
    ],
    testimonial: {
      client: "Tanvi & Subhash",
      venue: "Radisson Blu, Ranchi",
      text: "The team was so polite and unobtrusive yet caught the most incredible candid moments of our parents laughing and dancing.",
      rating: 5,
    },
    highlights: [
      {
        title: "Lush Hills & Grand Ballrooms",
        description: "Blending Jharkhand's scenic plateau backdrops with luxurious banquet lighting for magazine-worthy wedding portraits.",
      },
      {
        title: "Complete Audio-Visual Storytelling",
        description: "Crystal-clear recording of vows, laughter, and speeches woven into a 4K cinematic film that feels timeless.",
      },
    ],
  },
  {
    slug: "destination-wedding-india",
    name: "Destination Weddings (Pan-India)",
    state: "India",
    tagline: "Luxury Destination Wedding Photography & Cinematography across India",
    heroImage: images.mosaicTwo,
    description:
      "Whether you are exchanging vows in a regal Udaipur palace, a serene beach resort in Goa, a heritage fort in Jaipur, or an intimate retreat in Puri, Sritikuthi crafts world-class visual memories with artistic flair.",
    travelInfo: "Pan-India travel ready with air travel packing standards, global gear insurance, and experienced travel-hardy cinematographers.",
    popularVenues: [
      "Bawali Rajbari (Heritage Bengal)",
      "Rajkutir Swabhumi (Kolkata)",
      "Heritage Palaces in Rajasthan (Jaipur, Udaipur)",
      "Beachfront Resorts in Puri & Goa",
      "Hilltop Retreats in Darjeeling & Shillong",
    ],
    features: [
      "Full itinerary coverage from welcome dinners to farewell brunches",
      "Same-day or next-day highlight edit reels for social media sharing",
      "Cinematic couple portraits tailored to your destination's architecture",
      "Dedicated production manager for smooth multi-venue scheduling",
    ],
    testimonial: {
      client: "Ria & Karan",
      venue: "The Rajbari Bawali",
      text: "Sritikuthi transformed our heritage destination wedding into a fairytale film. Their eye for architecture and emotion is second to none.",
      rating: 5,
    },
    highlights: [
      {
        title: "Architectural & Environmental Storytelling",
        description: "We use the historic arches, sunset coastlines, and regal courtyards of your destination to build cinematic scale.",
      },
      {
        title: "Tailored Destination Packages",
        description: "Transparent calculator rates with customizable shifts and crew counts to suit any destination scale.",
      },
    ],
  },
];

export function getLocation(slug: string) {
  return locationsData.find((loc) => loc.slug === slug);
}
