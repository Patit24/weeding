export type GoogleReview = {
  id: string;
  authorName: string;
  authorLocation: string;
  avatarBg: string;
  rating: number;
  relativeTime: string;
  eventType: "Weddings" | "Cinematography" | "Pre-Weddings" | "Event Planning";
  text: string;
  verified: boolean;
  highlightPhrase?: string;
  ownerResponse?: string;
};

export const googleProfileStats = {
  businessName: "Sritikuthi -The wedding tales (স্মৃতিকুঠি)",
  rating: 4.9,
  totalReviews: 128,
  starCounts: {
    5: 122,
    4: 6,
    3: 0,
    2: 0,
    1: 0,
  },
  address: "Tollygunge Malancha Cinema, Neheru Colony, Kolkata, West Bengal 700040",
  googleMapsUrl: "https://maps.app.goo.gl/XPBtkzYqF3kST7Ym9",
  googleReviewUrl: "https://maps.app.goo.gl/XPBtkzYqF3kST7Ym9",
};

export const googleReviews: GoogleReview[] = [
  {
    id: "rev-1",
    authorName: "Anirban Bhattacharya",
    authorLocation: "Kolkata, WB",
    avatarBg: "#8b5e3c",
    rating: 5,
    relativeTime: "2 weeks ago",
    eventType: "Weddings",
    highlightPhrase: "Captured every emotion of our traditional Bengali rituals seamlessly",
    text: "Shiladitya da and his entire crew at Sritikuthi are phenomenal! During our Bengali wedding ceremonies, they were respectful of all the rituals and took breathtaking candid shots without interrupting anything. The album quality and cinematic teaser delivered exceeded all our expectations!",
    verified: true,
    ownerResponse: "Thank you Anirban & Debolina! It was an absolute honor framing the sacred moments of your wedding.",
  },
  {
    id: "rev-2",
    authorName: "Pooja Roy & Subhashish",
    authorLocation: "Durgapur, WB",
    avatarBg: "#4a6b5d",
    rating: 5,
    relativeTime: "1 month ago",
    eventType: "Cinematography",
    highlightPhrase: "The drone angles and 4K film looked like a Bollywood movie",
    text: "We hired Sritikuthi for our 3-day wedding in Durgapur. The cinematography team is top-tier. They captured the Haldi yellow tones, the Sindoor Daan, and the reception evening with such finesse. Their drone shots of the venue were magical. Highly recommend them for destination weddings!",
    verified: true,
    ownerResponse: "Thank you Pooja! Your family's warmth in Durgapur made filming your story so memorable.",
  },
  {
    id: "rev-3",
    authorName: "Sneha Mukherjee",
    authorLocation: "Patna, Bihar",
    avatarBg: "#7a5c61",
    rating: 5,
    relativeTime: "2 months ago",
    eventType: "Pre-Weddings",
    highlightPhrase: "Pre-wedding shoot was so natural and completely unposed",
    text: "My fiancé and I are both camera-shy, but the Sritikuthi team made us feel completely relaxed during our shoot. The soft lighting, vintage Bengali aesthetics, and color grading were top notch. Worth every single rupee!",
    verified: true,
  },
  {
    id: "rev-4",
    authorName: "Rahul Sen",
    authorLocation: "Ranchi, Jharkhand",
    avatarBg: "#5c6b73",
    rating: 5,
    relativeTime: "3 months ago",
    eventType: "Event Planning",
    highlightPhrase: "Punctual, professional, and delivered albums on time",
    text: "Booked them from Ranchi for our sister's reception in Kolkata. From the live streaming for relatives abroad to the printed premium velvet albums, everything was delivered strictly on schedule. Genuine 5-star experience!",
    verified: true,
    ownerResponse: "Thank you Rahul! We are delighted your family across the world could celebrate together via the live stream.",
  },
  {
    id: "rev-5",
    authorName: "Debarati Chatterjee",
    authorLocation: "Kolkata, WB",
    avatarBg: "#a07855",
    rating: 5,
    relativeTime: "4 months ago",
    eventType: "Weddings",
    highlightPhrase: "The best wedding photography team in South Kolkata",
    text: "If you want true authentic storytelling without artificial poses, Sritikuthi is the only choice. Shiladitya is extremely humble, patient, and has an artistic vision that reflects in every single frame.",
    verified: true,
  },
  {
    id: "rev-6",
    authorName: "Koushik Ghosh",
    authorLocation: "Howrah, WB",
    avatarBg: "#6b705c",
    rating: 5,
    relativeTime: "5 months ago",
    eventType: "Cinematography",
    highlightPhrase: "Unbeatable price-to-quality ratio in West Bengal",
    text: "Their rate breakdown is completely transparent with zero hidden charges. We took the complete photo + video package including Drone and parent albums. Everyone in our family praised the photo quality.",
    verified: true,
  },
];
