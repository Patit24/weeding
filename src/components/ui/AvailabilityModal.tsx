"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, MapPin, Sparkles, Send, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type AvailabilityContextType = {
  isOpen: boolean;
  openModal: (serviceOrEvent?: string) => void;
  closeModal: () => void;
};

const AvailabilityContext = createContext<AvailabilityContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useAvailabilityModal = () => useContext(AvailabilityContext);

const eventTypes = [
  { id: "Bengali Wedding", label: "Bengali Wedding", icon: "💍" },
  { id: "Pre-Wedding Shoot", label: "Pre-Wedding", icon: "🌿" },
  { id: "Rice Ceremony (Annaprasan)", label: "Rice Ceremony", icon: "👶" },
  { id: "Engagement / Aashirbaad", label: "Engagement", icon: "💎" },
  { id: "Reception / Sangeet", label: "Reception / Sangeet", icon: "✨" },
  { id: "Corporate / Private Event", label: "Private Event", icon: "📸" },
];

const popularLocations = [
  "Kolkata",
  "Howrah / Greater Kolkata",
  "Durgapur / Asansol",
  "Siliguri / North Bengal",
  "Bihar / Jharkhand",
  "Destination Wedding",
];

export function AvailabilityProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [eventType, setEventType] = useState("Bengali Wedding");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [location, setLocation] = useState("Kolkata");
  const [customLocation, setCustomLocation] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const openModal = (serviceOrEvent?: string) => {
    if (serviceOrEvent) {
      const match = eventTypes.find((t) => t.id.toLowerCase().includes(serviceOrEvent.toLowerCase()) || serviceOrEvent.toLowerCase().includes(t.label.toLowerCase()));
      if (match) {
        setEventType(match.id);
      } else {
        setEventType(serviceOrEvent);
      }
    }
    setErrorMsg("");
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate) {
      setErrorMsg("Please select your event date to check availability.");
      return;
    }

    const finalLocation = customLocation.trim() || location;
    const formattedDates = isMultiDay && endDate ? `${startDate} to ${endDate}` : startDate;

    const messageLines = [
      `*🗓️ Date Availability Enquiry - স্মৃতিকুঠি The Wedding Tales*`,
      ``,
      `🎉 *Event Type:* ${eventType}`,
      `📅 *Event Date(s):* ${formattedDates}`,
      `📍 *Location / Venue:* ${finalLocation}`,
      clientName.trim() ? `👤 *Name:* ${clientName.trim()}` : null,
      clientPhone.trim() ? `📞 *Phone:* ${clientPhone.trim()}` : null,
      notes.trim() ? `📝 *Notes:* ${notes.trim()}` : null,
      ``,
      `Hello Shiladitya, please let me know if your team is available for these dates!`,
    ].filter(Boolean);

    const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(messageLines.join("\n"))}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    closeModal();
  };

  // Get tomorrow's date for date input min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <AvailabilityContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl max-h-[92vh] flex flex-col rounded-3xl border border-[var(--gold-border)] bg-[var(--soft-white)] text-[var(--espresso)] shadow-2xl overflow-hidden z-10 my-auto"
            >
              {/* Header Banner with Luxury Gold Accents */}
              <div className="relative bg-gradient-to-r from-[#8B1E1E] via-[#6A1414] to-[#3D0A0A] p-6 sm:p-7 text-white overflow-hidden flex-shrink-0">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-[var(--gold)]/20 rounded-full blur-2xl pointer-events-none" />
                
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2.5 text-xs text-[#D4AF37] font-bold uppercase tracking-[0.22em]">
                  <Sparkles size={14} />
                  <span>Direct Availability Check</span>
                </div>
                
                <h2 className="serif mt-1.5 text-2xl sm:text-3xl font-bold text-[var(--warm-ivory)]">
                  Check Dates with Shiladitya
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-white/80 max-w-md">
                  Select your event date(s) below to instantly check team availability on WhatsApp.
                </p>
              </div>

              {/* Scrollable Form Body */}
              <form onSubmit={handleSendToWhatsApp} className="flex-1 overflow-y-auto p-6 sm:p-7 space-y-6">
                {/* 1. Event Type Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.16em] text-[var(--charcoal)] mb-2.5">
                    1. Select Event Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {eventTypes.map((t) => {
                      const isSelected = eventType === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setEventType(t.id)}
                          className={cn(
                            "flex items-center gap-2 rounded-xl p-2.5 text-left text-xs font-semibold transition-all border cursor-pointer",
                            isSelected
                              ? "bg-crimson-gradient text-white border-transparent shadow-md"
                              : "bg-[var(--sand)]/50 hover:bg-[var(--sand)] text-[var(--charcoal)] border-[var(--fine-border)]"
                          )}
                        >
                          <span className="text-base">{t.icon}</span>
                          <span className="truncate">{t.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Event Date(s) Picker */}
                <div className="rounded-2xl border border-[var(--gold-border)] bg-[var(--sand)]/40 p-4 sm:p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--charcoal)]">
                      <Calendar size={15} className="text-[var(--crimson)]" />
                      <span>2. Event Date(s) <strong className="text-[var(--crimson)]">*</strong></span>
                    </label>

                    <label className="flex items-center gap-2 text-xs font-medium text-[var(--muted)] cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={isMultiDay}
                        onChange={(e) => setIsMultiDay(e.target.checked)}
                        className="rounded border-[var(--gold-border)] text-[var(--crimson)] focus:ring-[var(--crimson)]"
                      />
                      <span>Multi-day event</span>
                    </label>
                  </div>

                  <div className={cn("grid gap-3", isMultiDay ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1")}>
                    <div>
                      <span className="block text-[0.72rem] font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">
                        {isMultiDay ? "Start / Wedding Date" : "Primary Event Date"}
                      </span>
                      <input
                        type="date"
                        min={today}
                        required
                        value={startDate}
                        onChange={(e) => {
                          setStartDate(e.target.value);
                          if (errorMsg) setErrorMsg("");
                        }}
                        className="w-full min-h-12 rounded-xl border border-[var(--gold-border)] bg-white px-4 text-sm font-medium text-[var(--espresso)] shadow-xs outline-none focus:border-[var(--crimson)] focus:ring-2 focus:ring-[var(--crimson)]/20"
                      />
                    </div>

                    {isMultiDay && (
                      <div>
                        <span className="block text-[0.72rem] font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">
                          End / Reception Date
                        </span>
                        <input
                          type="date"
                          min={startDate || today}
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full min-h-12 rounded-xl border border-[var(--gold-border)] bg-white px-4 text-sm font-medium text-[var(--espresso)] shadow-xs outline-none focus:border-[var(--crimson)] focus:ring-2 focus:ring-[var(--crimson)]/20"
                        />
                      </div>
                    )}
                  </div>
                  {errorMsg && <p className="text-xs font-semibold text-red-600">{errorMsg}</p>}
                </div>

                {/* 3. Event Location */}
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--charcoal)] mb-2.5">
                    <MapPin size={15} className="text-[var(--crimson)]" />
                    <span>3. Event Location / City</span>
                  </label>
                  
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {popularLocations.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => {
                          setLocation(loc);
                          setCustomLocation("");
                        }}
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-medium transition-colors border cursor-pointer",
                          location === loc && !customLocation
                            ? "bg-[var(--espresso)] text-white border-[var(--espresso)]"
                            : "bg-white text-[var(--charcoal)] border-[var(--fine-border)] hover:bg-[var(--sand)]"
                        )}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    placeholder="Or enter specific venue / banquet name (optional)"
                    value={customLocation}
                    onChange={(e) => setCustomLocation(e.target.value)}
                    className="w-full min-h-11 rounded-xl border border-[var(--fine-border)] bg-white px-4 text-sm outline-none focus:border-[var(--crimson)]"
                  />
                </div>

                {/* 4. Client Info (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)] mb-1">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Debopriya Mukherjee"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full min-h-11 rounded-xl border border-[var(--fine-border)] bg-white px-4 text-sm outline-none focus:border-[var(--crimson)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)] mb-1">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full min-h-11 rounded-xl border border-[var(--fine-border)] bg-white px-4 text-sm outline-none focus:border-[var(--crimson)]"
                    />
                  </div>
                </div>

                {/* Action Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                  >
                    <Send size={16} />
                    <span>Check Availability on WhatsApp 💬</span>
                  </button>
                  <p className="mt-2.5 text-center text-[0.72rem] text-[var(--muted)]">
                    Direct instant chat with lead storyteller <strong>Shiladitya Das</strong> (+91 79082 86681).
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AvailabilityContext.Provider>
  );
}
