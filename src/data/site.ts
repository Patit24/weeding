export const siteConfig = {
  name: "স্মৃতিকুঠি_The Wedding Tales",
  englishName: "Sritikuthi The Wedding Tales",
  tagline: "Where Every Detail Becomes a Memory",
  description:
    "Wedding photography, cinematography, pre-wedding shoots, wedding planning, event management, drone coverage, live streaming, albums, and family celebration coverage from Kolkata across West Bengal, India, and destination weddings.",
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
  locations: ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol", "Entire West Bengal", "India", "Destination weddings"],
  instagram: "https://www.instagram.com/sritikuthitheweddingtales?igsh=OG9lYTdiemZubWpv",
  facebook: "https://www.facebook.com/share/19FZ97z44K/",
  youtube: "https://youtube.com/@sritikuthitheweddingtales?si=2zeQVBjDjVLTjfxk",
  pinterest: "",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export const serviceLinks = [
  { href: "/services/wedding-photography", label: "Wedding Photography" },
  { href: "/services/wedding-films", label: "Wedding Films" },
  { href: "/services/wedding-planning", label: "Wedding Planning" },
  { href: "/services/event-management", label: "Event Management" },
];

export const allServiceNames = [
  "Wedding Photography",
  "Wedding Cinematography",
  "Pre-Wedding Shoot",
  "Engagement Shoot",
  "Haldi",
  "Mehendi",
  "Sangeet",
  "Reception",
  "Maternity Shoot",
  "Baby Shoot",
  "Birthday Photography",
  "Corporate Events",
  "Drone Photography",
  "Live Streaming",
  "Albums",
  "Wedding Invitation Videos",
] as const;
