export const siteConfig = {
  name: "স্মৃতিকুঠি The Wedding Tales",
  englishName: "Sritikuthi The Wedding Tales",
  bengaliName: "স্মৃতিকুঠি",
  tagline: "Where Every Detail Becomes a Memory",
  logo: "/brand-logo.png",
  logoFull: "/brand-logo-full.png",
  description:
    "Professional wedding photography, cinematography, pre-wedding shoots, rice ceremony (annaprasan), events, engagement, corporate shoot, model shoot, and commercial photography across Kolkata, West Bengal, Bihar, Jharkhand, and destination locations.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://patit24.github.io/weeding",
  email: "sritikuthi@gmail.com",
  phone: "+91 62979 07175 / +91 79082 86681",
  primaryPhone: "+916297907175",
  whatsapp: "917908286681",
  address: "Tollygunge Malancha Cinema, Neheru Colony, Kolkata 700040",
  hours: "Monday - Sunday, 10:00 AM - 10:00 PM",
  owner: "Shiladitya Das",
  experience: "4 years",
  team: {
    photographers: 2,
    cinematographers: 3,
  },
  locations: ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol", "Entire West Bengal", "Bihar", "Jharkhand", "Destination weddings"],
  instagram: "https://www.instagram.com/sritikuthitheweddingtales?igsh=OG9lYTdiemZubWpv",
  facebook: "https://www.facebook.com/share/19FZ97z44K/",
  youtube: "https://youtube.com/@sritikuthitheweddingtales?si=2zeQVBjDjVLTjfxk",
  googleMaps: "https://maps.app.goo.gl/XPBtkzYqF3kST7Ym9",
  googleReviews: "https://maps.app.goo.gl/XPBtkzYqF3kST7Ym9",
  pinterest: "",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/stories", label: "Stories" },
  { href: "/#rate-calculator", label: "Calculator" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export const serviceLinks = [
  { href: "/services/wedding", label: "Wedding" },
  { href: "/services/pre-wedding", label: "Pre-Wedding" },
  { href: "/services/rice-ceremony", label: "Rice Ceremony" },
  { href: "/services/events", label: "Events" },
  { href: "/services/engagement", label: "Engagement" },
  { href: "/services/corporate-shoot", label: "Corporate Shoot" },
  { href: "/services/model-shoot", label: "Model Shoot" },
  { href: "/services/commercial", label: "Commercial" },
];

export const allServiceNames = [
  "Wedding Photography & Films",
  "Pre-Wedding Shoot",
  "Rice Ceremony (Annaprasan)",
  "Events & Private Celebrations",
  "Engagement Shoot",
  "Corporate Shoot & Conferences",
  "Model Shoot & Fashion Portfolio",
  "Commercial & Product Photography",
] as const;
