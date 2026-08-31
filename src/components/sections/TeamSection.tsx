"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Video, Sparkles, CheckCircle2, MessageSquare, Award, Clapperboard } from "lucide-react";
import { useAvailabilityModal } from "@/components/ui/AvailabilityModal";
import { FadeIn, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";

export function TeamSection() {
  const { openModal } = useAvailabilityModal();

  const team = [
    {
      name: "Shiladitya Das",
      role: "Founder & Lead Photographer",
      badge: "Creative Director",
      experience: "4+ Years Heritage Storytelling",
      image: "/team/founder.jpg",
      focus: "Candid Emotion, Bridal Fine-Art & Creative Direction",
      bio: "Visionary storyteller behind স্মৃতিকুঠি. Shiladitya captures raw, unposed emotions, sacred rituals, and royal portraits with timeless artistic depth.",
      gear: "Sony Alpha Full-Frame & G-Master Prime Lenses",
      icon: Camera,
    },
    {
      name: "Ratul Kumar Saha",
      role: "Lead Cinematographer",
      badge: "Cinematography Head",
      experience: "Master 4K Cine & Direction",
      image: null, // Without photo right now
      focus: "Cinematic Film Direction, 4K UHD Master Grading & Soundscapes",
      bio: "Head of wedding cinematography. Ratul directs motion and emotion in perfect sync, transforming sacred Vedic vows and royal processions into heirloom cinema.",
      gear: "Sony FX Cine Cameras, Prime Cinema Lenses & 32-bit Float Audio",
      icon: Clapperboard,
    },
    {
      name: "Soumyadip",
      role: "Candid Photographer",
      badge: "Documentary Artist",
      experience: "Candid Rituals & Micro-Moments",
      image: "/team/soumyadip.jpg",
      focus: "Unscripted Expressions, Baraat Energy & Intimate Details",
      bio: "Specialist in capturing spontaneous laughter, quiet family glances, and the vibrant celebratory energy of traditional Bengali wedding rituals.",
      gear: "Full-Frame Fast Primes & Low-Light Art Glass",
      icon: Camera,
    },
    {
      name: "Dipankar",
      role: "Cinematographer",
      badge: "Video Specialist",
      experience: "High-Speed & 4K Cinema",
      image: "/team/dipankar.jpg",
      focus: "4K Motion Capture, Gimbal Dynamics & Aerial Drone",
      bio: "Master of visual rhythm and motion. Dipankar crafts wedding films that feel like classic motion pictures, capturing every milestone in vivid clarity.",
      gear: "Sony Cinema Line & Motorized 3-Axis Stabilizers",
      icon: Video,
    },
    {
      name: "Sankhadip",
      role: "Cinematographer",
      badge: "Visual Storyteller",
      experience: "Ritual & Documentary Motion",
      image: "/team/sankhadip.jpg",
      focus: "Ritual Lighting, Sound Atmosphere & Color Art",
      bio: "Dedicated to catching the unseen nuances — from sacred Vedic fire reflections to heartfelt glances between bride and groom during Saat Paak.",
      gear: "Cinematic Prime Glass & Low-Noise Audio Rigs",
      icon: Sparkles,
    },
  ];

  return (
    <MotionSection className="relative border-b border-[var(--fine-border)] bg-[var(--soft-white)] py-20 lg:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[rgba(212,175,55,0.12)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-[rgba(139,30,30,0.08)] blur-3xl" />

      <div className="container-editorial relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[var(--fine-border)]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-border)] bg-[var(--warm-ivory)] px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[var(--crimson)] shadow-xs">
              <span>🌸</span>
              <span>The Storytellers Behind The Lens</span>
            </div>
            <h2 className="serif mt-3 text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[var(--espresso)]">
              Meet Our Team Members
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--charcoal)]/80 max-w-xl">
              A dedicated crew of passionate visual artists, candid observers, and master cinematographers committed to immortalizing your wedding celebration.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Kolkata &amp; Destination Weddings</span>
          </div>
        </div>

        {/* Team Grid */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => {
            const IconComponent = member.icon;
            return (
              <StaggerItem key={member.name} className="flex">
                <div className="group relative flex flex-col w-full rounded-3xl border border-[var(--gold-border)] bg-[var(--warm-ivory)] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5">
                  {/* Photo Container */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-neutral-900 via-[#241512] to-neutral-950 flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role} at Sritikuthi The Wedding Tales`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      /* Fallback for members without photo (e.g. Ratul Kumar Saha) */
                      <div className="relative flex flex-col items-center justify-center p-8 text-center text-white select-none">
                        <div className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[var(--gold-border)] bg-white/5 backdrop-blur-md shadow-inner">
                          <Clapperboard size={40} className="text-[#D4AF37]" />
                          <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--crimson)] text-white text-[0.65rem] font-bold border border-white">
                            4K
                          </span>
                        </div>
                        <span className="serif text-2xl font-bold tracking-wide text-[var(--gold-light)]">
                          {member.name}
                        </span>
                        <span className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">
                          {member.role}
                        </span>
                        <p className="mt-3 text-[0.72rem] text-white/60 max-w-[200px] leading-relaxed">
                          Master Cinematography &amp; Film Direction Unit
                        </p>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {/* Top Role Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/20 shadow-sm flex items-center gap-1.5">
                        <IconComponent size={12} className="text-[#D4AF37]" />
                        <span>{member.badge}</span>
                      </span>
                    </div>

                    {/* Bottom Info on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                      <span className="text-[0.72rem] font-bold uppercase tracking-widest text-[#D4AF37] block">
                        {member.role}
                      </span>
                      <h3 className="serif text-2xl font-bold text-white drop-shadow-md">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7 justify-between">
                    <div className="space-y-4">
                      {/* Focus Area */}
                      <div className="rounded-xl bg-white/70 p-3.5 border border-[var(--fine-border)]">
                        <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[var(--crimson)] block">
                          Core Craft &amp; Specialty
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-[var(--espresso)] mt-0.5">
                          {member.focus}
                        </p>
                      </div>

                      {/* Bio */}
                      <p className="text-xs sm:text-sm text-[var(--charcoal)]/85 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Gear Line */}
                      <div className="flex items-center gap-2 text-xs text-[var(--muted)] pt-1">
                        <Award size={14} className="text-[#D4AF37] shrink-0" />
                        <span className="truncate">{member.gear}</span>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-6 pt-5 border-t border-[var(--fine-border)] flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[0.72rem] font-semibold text-[var(--espresso)]">
                        <CheckCircle2 size={14} className="text-emerald-600" />
                        <span>{member.experience}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => openModal(`Inquiry with ${member.name} (${member.role})`)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[var(--espresso)] hover:bg-[var(--crimson)] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-white transition-colors cursor-pointer shadow-xs"
                      >
                        <MessageSquare size={12} />
                        <span>Book</span>
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </MotionSection>
  );
}
