import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { CTASection } from "@/components/sections/CTASection";
import { RateCalculator } from "@/components/sections/RateCalculator";
import { FadeIn, ImageReveal, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";
import { Star, ShieldCheck, Heart, MapPin, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Stories & Google Reviews",
  description:
    "Read real client stories and verified Google reviews for স্মৃতিকুঠি_The Wedding Tales. Discover authentic feedback from couples across Kolkata, West Bengal, Bihar, and Jharkhand.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Stories & Trust"
        title="Real tales told by real families."
        intro="Every photograph holds a family legacy. Explore verified testimonials, couple stories, and Google Business reviews from weddings across West Bengal and beyond."
        image={images.photography}
      />

      {/* Trust Highlights Section */}
      <MotionSection className="border-b border-[var(--fine-border)] bg-[var(--warm-ivory)] py-16">
        <div className="container-editorial">
          <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Star size={20} className="text-amber-600" />,
                title: "4.9 ★ Rating",
                desc: "Consistently rated 5 stars by couples for candid realism & prompt delivery.",
              },
              {
                icon: <ShieldCheck size={20} className="text-emerald-700" />,
                title: "Verified Google Profile",
                desc: "Authentic Google Business listing at Tollygunge Malancha Cinema, Kolkata.",
              },
              {
                icon: <Heart size={20} className="text-rose-700" />,
                title: "100+ Celebrations",
                desc: "Weddings, pre-weddings, rice ceremonies & milestones framed with love.",
              },
              {
                icon: <Award size={20} className="text-[var(--espresso)]" />,
                title: "Transparent Rates",
                desc: "Customizable packages with zero hidden travel charges within Kolkata.",
              },
            ].map((item) => (
              <StaggerItem key={item.title} className="p-6 border border-[var(--fine-border)] bg-[var(--soft-white)]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg border border-[var(--fine-border)] bg-[var(--warm-ivory)]">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-[var(--espresso)]">{item.title}</h3>
                </div>
                <p className="mt-3 text-xs leading-5 text-[var(--muted)]">{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>

      {/* Main Google Reviews Component */}
      <GoogleReviews />

      {/* Interactive Rate Calculator */}
      <RateCalculator />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
