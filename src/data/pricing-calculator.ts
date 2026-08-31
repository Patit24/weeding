export type LocationOption = {
  id: string;
  name: string;
  state: string;
  travelCost: number;
  description: string;
};

export const locationOptions: LocationOption[] = [
  {
    id: "kolkata",
    name: "Kolkata & Greater Kolkata",
    state: "West Bengal",
    travelCost: 0,
    description: "No travel or lodging fee (Within Kolkata & immediate suburbs)",
  },
  {
    id: "wb-outside",
    name: "West Bengal (Outside Kolkata)",
    state: "West Bengal",
    travelCost: 4500,
    description: "Howrah, Durgapur, Shantiniketan, Siliguri, Asansol, Purulia, Burdwan, etc.",
  },
  {
    id: "bihar",
    name: "Bihar",
    state: "Bihar",
    travelCost: 8500,
    description: "Patna, Gaya, Bhagalpur, Muzaffarpur, Darbhanga, etc.",
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    state: "Jharkhand",
    travelCost: 7500,
    description: "Ranchi, Jamshedpur, Dhanbad, Bokaro, Deoghar, etc.",
  },
  {
    id: "other-destination",
    name: "Other State / Destination Wedding",
    state: "Pan-India",
    travelCost: 14000,
    description: "All India destination weddings (Travel allowance tier)",
  },
];

export type TeamRole = "candidPhotographer" | "cinematographer" | "traditionalPhotographer" | "traditionalVideo" | "droneOperator";

export type RoleConfig = {
  key: TeamRole;
  label: string;
  fullDayRate: number;
  halfDayRate: number;
  maxCount: number;
};

export const teamRoleConfigs: Record<TeamRole, RoleConfig> = {
  candidPhotographer: {
    key: "candidPhotographer",
    label: "Candid Photographer",
    fullDayRate: 6000,
    halfDayRate: 6000,
    maxCount: 4,
  },
  cinematographer: {
    key: "cinematographer",
    label: "Cinematographer",
    fullDayRate: 6000,
    halfDayRate: 6000,
    maxCount: 4,
  },
  traditionalPhotographer: {
    key: "traditionalPhotographer",
    label: "Traditional Photographer",
    fullDayRate: 5000,
    halfDayRate: 3200,
    maxCount: 3,
  },
  traditionalVideo: {
    key: "traditionalVideo",
    label: "Traditional Video",
    fullDayRate: 5500,
    halfDayRate: 3500,
    maxCount: 3,
  },
  droneOperator: {
    key: "droneOperator",
    label: "Drone Operator (4K)",
    fullDayRate: 6500,
    halfDayRate: 4000,
    maxCount: 2,
  },
};

import { images, type ImageAsset } from "./images";

export type EventFunctionConfig = {
  id: string;
  number: string;
  title: string;
  defaultType: "half" | "full" | "prewedding";
  tagline: string;
  shortDescription: string;
  image: ImageAsset;
  allowedDurations: ("Half Day" | "Full Day" | "1 Day" | "2 Days")[];
  defaultDuration: "Half Day" | "Full Day" | "1 Day" | "2 Days";
  defaultTeam: Partial<Record<TeamRole, number>>;
};

export const weddingRitualFunctions: EventFunctionConfig[] = [
  {
    id: "w-pre-wedding",
    number: "01",
    title: "Pre-Wedding",
    defaultType: "prewedding",
    tagline: "1 or 2 Day Function",
    shortDescription: "Outdoor & editorial couple session with cinematic teaser.",
    image: images.mosaicOne,
    allowedDurations: ["1 Day", "2 Days"],
    defaultDuration: "1 Day",
    defaultTeam: {
      cinematographer: 1,
      candidPhotographer: 1,
      droneOperator: 0,
    },
  },
  {
    id: "w-engagement",
    number: "02",
    title: "Engagement",
    defaultType: "half",
    tagline: "Half Day Function",
    shortDescription: "Ring ceremony, Aashirbaad & family formal portraits.",
    image: images.mosaicTwo,
    allowedDurations: ["Half Day", "Full Day"],
    defaultDuration: "Half Day",
    defaultTeam: {
      candidPhotographer: 1,
      cinematographer: 0,
      traditionalPhotographer: 0,
    },
  },
  {
    id: "w-tilak",
    number: "03",
    title: "Tilak",
    defaultType: "half",
    tagline: "Half Day Function",
    shortDescription: "Patri Patrika & sacred family blessing rituals.",
    image: images.mosaicThree,
    allowedDurations: ["Half Day", "Full Day"],
    defaultDuration: "Half Day",
    defaultTeam: {},
  },
  {
    id: "w-haldi",
    number: "04",
    title: "Haldi",
    defaultType: "half",
    tagline: "Half Day Function",
    shortDescription: "Gaye Holud morning yellow rituals & candid splash moments.",
    image: images.photography,
    allowedDurations: ["Half Day", "Full Day"],
    defaultDuration: "Half Day",
    defaultTeam: {
      candidPhotographer: 1,
      cinematographer: 1,
    },
  },
  {
    id: "w-mehendi",
    number: "05",
    title: "Mehendi",
    defaultType: "half",
    tagline: "Half Day Function",
    shortDescription: "Intimate henna afternoon & family festivities.",
    image: images.featuredPortrait,
    allowedDurations: ["Half Day", "Full Day"],
    defaultDuration: "Half Day",
    defaultTeam: {},
  },
  {
    id: "w-sangeet",
    number: "06",
    title: "Sangeet",
    defaultType: "half",
    tagline: "Half Day Function",
    shortDescription: "Musical dance night, cocktail & lively celebrations.",
    image: images.event,
    allowedDurations: ["Half Day", "Full Day"],
    defaultDuration: "Half Day",
    defaultTeam: {},
  },
  {
    id: "w-wedding",
    number: "07",
    title: "Wedding",
    defaultType: "full",
    tagline: "Full Day Function",
    shortDescription: "Main wedding rituals, Saat Paake Ghora, Sindoor Daan & Kanyadaan.",
    image: images.photography,
    allowedDurations: ["Full Day", "Half Day"],
    defaultDuration: "Full Day",
    defaultTeam: {
      candidPhotographer: 1,
      cinematographer: 1,
      traditionalPhotographer: 1,
      traditionalVideo: 1,
      droneOperator: 0,
    },
  },
  {
    id: "w-reception",
    number: "08",
    title: "Reception",
    defaultType: "half",
    tagline: "Half Day Function",
    shortDescription: "Bou Bhat grand dinner, stage portraits & family gathering.",
    image: images.featuredWide,
    allowedDurations: ["Half Day", "Full Day"],
    defaultDuration: "Half Day",
    defaultTeam: {
      candidPhotographer: 1,
      cinematographer: 1,
      traditionalPhotographer: 1,
    },
  },
];

export const standardFunctions: EventFunctionConfig[] = [
  ...weddingRitualFunctions,
  {
    id: "rice-ceremony",
    number: "09",
    title: "Rice Ceremony",
    defaultType: "half",
    tagline: "Annaprasan & Baby Milestone",
    shortDescription: "Traditional baby Mukhebhaat rituals, chandan phota and family portraits.",
    image: images.riceCeremony,
    allowedDurations: ["Half Day", "Full Day"],
    defaultDuration: "Half Day",
    defaultTeam: {
      candidPhotographer: 1,
      traditionalPhotographer: 1,
    },
  },
  {
    id: "events",
    number: "10",
    title: "Events",
    defaultType: "half",
    tagline: "Birthdays, Anniversaries & Private Galas",
    shortDescription: "Joyful milestone birthdays, family reunions, and hosted dinners.",
    image: images.event,
    allowedDurations: ["Half Day", "Full Day"],
    defaultDuration: "Half Day",
    defaultTeam: {
      candidPhotographer: 1,
      cinematographer: 0,
    },
  },
  {
    id: "corporate-shoot",
    number: "11",
    title: "Corporate Shoot",
    defaultType: "full",
    tagline: "Conferences, Summits & Headshots",
    shortDescription: "Keynotes, panel discussions, team headshots, and event recap videos.",
    image: images.planning,
    allowedDurations: ["Full Day", "Half Day"],
    defaultDuration: "Full Day",
    defaultTeam: {
      candidPhotographer: 1,
      traditionalVideo: 1,
    },
  },
  {
    id: "model-shoot",
    number: "12",
    title: "Model Shoot",
    defaultType: "half",
    tagline: "Fashion Lookbook & Comp Card",
    shortDescription: "Studio & outdoor editorial modeling sessions with high-end retouching.",
    image: images.featuredPortrait,
    allowedDurations: ["Half Day", "Full Day"],
    defaultDuration: "Half Day",
    defaultTeam: {
      candidPhotographer: 1,
    },
  },
  {
    id: "commercial",
    number: "13",
    title: "Commercial",
    defaultType: "full",
    tagline: "Product Campaigns & Ad Films",
    shortDescription: "E-commerce packshots, culinary styling, and promotional advertising.",
    image: images.featuredWide,
    allowedDurations: ["Full Day", "Half Day"],
    defaultDuration: "Full Day",
    defaultTeam: {
      candidPhotographer: 1,
      cinematographer: 1,
    },
  },
];

export type DeliverableOption = {
  id: string;
  name: string;
  price: number;
  description: string;
  popular?: boolean;
};

export const deliverableOptions: DeliverableOption[] = [
  {
    id: "album-premium",
    name: "Premium Wedding Heirloom Album (40 Pages)",
    price: 15000,
    description: "Handcrafted Italian photobook with acrylic/velvet presentation box",
    popular: true,
  },
  {
    id: "teaser-film",
    name: "Teaser / Highlight Cinematic Film (3–5 Mins)",
    price: 5000,
    description: "Color-graded 4K cinematic highlight set to licensed music",
    popular: true,
  },
  {
    id: "reels-pack",
    name: "Social Media Reels (Per Reel)",
    price: 5000,
    description: "Vertical 9:16 high-impact cinematic reels formatted for Instagram",
    popular: true,
  },
  {
    id: "full-edited-film",
    name: "Full Length Edited Video (45–90 Mins)",
    price: 4000,
    description: "Chaptered coverage of full mantras, rituals, and speeches",
  },
  {
    id: "same-day-edit",
    name: "Same Day / 24-Hr Express Sneak Peek",
    price: 3000,
    description: "25 fully retouched highlight images within 24 hours",
  },
  {
    id: "photo-slideshow",
    name: "Photo Slideshow with Melodic Score",
    price: 1500,
    description: "Curated 100-best emotional photos in a 4K video montage",
  },
  {
    id: "raw-harddrive",
    name: "All Raw Master Data in Hard Drive",
    price: 2500,
    description: "Complete raw CR3 and 4K MP4 camera footage on hard drive",
  },
  {
    id: "live-streaming",
    name: "Multi-Cam YouTube Live Streaming",
    price: 6000,
    description: "High definition private broadcast for family worldwide",
  },
];
