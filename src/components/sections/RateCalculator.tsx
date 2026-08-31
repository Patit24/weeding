"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Plus, 
  Trash2, 
  Printer, 
  RotateCcw, 
  CheckCircle2, 
  MapPin, 
  Tag, 
  Send,
  Camera,
  Film,
  Sparkles,
  Layers,
  ArrowRight,
  Check,
  Users,
  Video,
  Disc
} from "lucide-react";
import { 
  weddingRitualFunctions,
  standardFunctions, 
  teamRoleConfigs, 
  deliverableOptions, 
  locationOptions, 
  type TeamRole,
  type EventFunctionConfig,
  type LocationOption
} from "@/data/pricing-calculator";
import { siteConfig } from "@/data/site";

type CategoryTab = {
  id: string;
  title: string;
  iconEmoji: string;
  subtitle: string;
};

const mainServiceTabs: CategoryTab[] = [
  {
    id: "wedding",
    title: "Wedding",
    iconEmoji: "💍",
    subtitle: "Complete Bengali & luxury wedding celebrations with multi-ritual coverage",
  },
  {
    id: "rice-ceremony",
    title: "Rice Ceremony",
    iconEmoji: "👶",
    subtitle: "Annaprasan, Mukhebhaat & milestone portraits",
  },
  {
    id: "events",
    title: "Events",
    iconEmoji: "🎉",
    subtitle: "Birthdays, anniversaries, private galas",
  },
  {
    id: "corporate-shoot",
    title: "Corporate Shoot",
    iconEmoji: "🏢",
    subtitle: "Conferences, seminars, leadership headshots",
  },
  {
    id: "model-shoot",
    title: "Model Shoot",
    iconEmoji: "👗",
    subtitle: "Fashion lookbooks, agency comp cards & portfolio",
  },
  {
    id: "commercial",
    title: "Commercial",
    iconEmoji: "🛍️",
    subtitle: "Product campaigns, ad films & e-commerce",
  },
];

type FunctionSelection = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  image: EventFunctionConfig["image"];
  duration: "Half Day" | "Full Day" | "1 Day" | "2 Days";
  team: Record<TeamRole, number>;
  enabled: boolean;
};

type CustomFunction = {
  id: string;
  name: string;
  duration: "Half Day" | "Full Day";
  team: Record<TeamRole, number>;
};

export function RateCalculator() {
  // Selected category (wedding vs rice-ceremony vs events vs corporate vs model vs commercial)
  const [selectedCategory, setSelectedCategory] = useState<string>("wedding");

  // State for Wedding Functions (01 Pre-Wedding to 08 Reception)
  const [weddingFunctions, setWeddingFunctions] = useState<FunctionSelection[]>(() =>
    weddingRitualFunctions.map((fn) => {
      const isDefaultActive = fn.id === "w-wedding" || fn.id === "w-reception";
      return {
        id: fn.id,
        number: fn.number,
        title: fn.title,
        tagline: fn.tagline,
        shortDescription: fn.shortDescription,
        image: fn.image,
        duration: fn.defaultDuration,
        team: {
          candidPhotographer: fn.defaultTeam.candidPhotographer || (isDefaultActive ? 1 : 0),
          cinematographer: fn.defaultTeam.cinematographer || (isDefaultActive ? 1 : 0),
          traditionalPhotographer: fn.defaultTeam.traditionalPhotographer || (isDefaultActive ? 1 : 0),
          traditionalVideo: fn.defaultTeam.traditionalVideo || (isDefaultActive ? 1 : 0),
          droneOperator: fn.defaultTeam.droneOperator || 0,
        },
        enabled: isDefaultActive,
      };
    })
  );

  // State for Non-Wedding Single Service Configurations
  const [singleServices, setSingleServices] = useState<Record<string, FunctionSelection>>(() => {
    const map: Record<string, FunctionSelection> = {};
    standardFunctions
      .filter((fn) => !fn.id.startsWith("w-"))
      .forEach((fn) => {
        map[fn.id] = {
          id: fn.id,
          number: fn.number,
          title: fn.title,
          tagline: fn.tagline,
          shortDescription: fn.shortDescription,
          image: fn.image,
          duration: fn.defaultDuration,
          team: {
            candidPhotographer: fn.defaultTeam.candidPhotographer || 1,
            cinematographer: fn.defaultTeam.cinematographer || 0,
            traditionalPhotographer: fn.defaultTeam.traditionalPhotographer || 0,
            traditionalVideo: fn.defaultTeam.traditionalVideo || 0,
            droneOperator: fn.defaultTeam.droneOperator || 0,
          },
          enabled: true,
        };
      });
    return map;
  });

  // Accordion active open ID within Wedding
  const [openWeddingAccordion, setOpenWeddingAccordion] = useState<string | null>("w-wedding");

  // Selected Location
  const [selectedLocationId, setSelectedLocationId] = useState<string>("kolkata");

  // Selected Deliverables
  const [selectedDeliverableIds, setSelectedDeliverableIds] = useState<string[]>([
    "album-premium",
    "teaser-film",
    "reels-pack",
  ]);

  // Custom added functions
  const [customFunctions, setCustomFunctions] = useState<CustomFunction[]>([]);
  const [newCustomName, setNewCustomName] = useState("");
  const [newCustomDuration, setNewCustomDuration] = useState<"Half Day" | "Full Day">("Half Day");
  const [newCustomTeam, setNewCustomTeam] = useState<Record<TeamRole, number>>({
    candidPhotographer: 1,
    cinematographer: 0,
    traditionalPhotographer: 0,
    traditionalVideo: 0,
    droneOperator: 0,
  });

  // Promo code
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoError, setPromoError] = useState("");

  const selectedLocation = useMemo(() => {
    return locationOptions.find((loc) => loc.id === selectedLocationId) || locationOptions[0];
  }, [selectedLocationId]);

  // Toggle wedding accordion
  const toggleWeddingAccordion = (id: string) => {
    setOpenWeddingAccordion((prev) => (prev === id ? null : id));
  };

  // Update team in wedding function
  const updateWeddingFunctionTeam = (fnId: string, role: TeamRole, count: number) => {
    setWeddingFunctions((prev) =>
      prev.map((fn) => {
        if (fn.id !== fnId) return fn;
        const newTeam = { ...fn.team, [role]: Math.max(0, count) };
        const totalCrew = Object.values(newTeam).reduce((a, b) => a + b, 0);
        return {
          ...fn,
          team: newTeam,
          enabled: totalCrew > 0,
        };
      })
    );
  };

  // Update duration in wedding function
  const updateWeddingFunctionDuration = (fnId: string, duration: "Half Day" | "Full Day" | "1 Day" | "2 Days") => {
    setWeddingFunctions((prev) =>
      prev.map((fn) => (fn.id === fnId ? { ...fn, duration } : fn))
    );
  };

  // Update team in single service
  const updateSingleServiceTeam = (svcId: string, role: TeamRole, count: number) => {
    setSingleServices((prev) => {
      const current = prev[svcId];
      if (!current) return prev;
      const newTeam = { ...current.team, [role]: Math.max(0, count) };
      const totalCrew = Object.values(newTeam).reduce((a, b) => a + b, 0);
      return {
        ...prev,
        [svcId]: {
          ...current,
          team: newTeam,
          enabled: totalCrew > 0,
        },
      };
    });
  };

  // Update duration in single service
  const updateSingleServiceDuration = (svcId: string, duration: "Half Day" | "Full Day" | "1 Day" | "2 Days") => {
    setSingleServices((prev) => {
      const current = prev[svcId];
      if (!current) return prev;
      return {
        ...prev,
        [svcId]: { ...current, duration },
      };
    });
  };

  // Toggle deliverable
  const toggleDeliverable = (delivId: string) => {
    setSelectedDeliverableIds((prev) =>
      prev.includes(delivId) ? prev.filter((id) => id !== delivId) : [...prev, delivId]
    );
  };

  // Add custom function
  const handleAddCustomFunction = () => {
    if (!newCustomName.trim()) return;
    const newFn: CustomFunction = {
      id: `custom-${Date.now()}`,
      name: newCustomName.trim(),
      duration: newCustomDuration,
      team: { ...newCustomTeam },
    };
    setCustomFunctions((prev) => [...prev, newFn]);
    setNewCustomName("");
    setNewCustomTeam({
      candidPhotographer: 1,
      cinematographer: 0,
      traditionalPhotographer: 0,
      traditionalVideo: 0,
      droneOperator: 0,
    });
  };

  const removeCustomFunction = (id: string) => {
    setCustomFunctions((prev) => prev.filter((f) => f.id !== id));
  };

  // Apply promo code
  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === "SRITIKUTHI5" || code === "WEDDING5" || code === "SPECIAL5") {
      setAppliedDiscount(0.05); // 5% discount
      setPromoError("");
    } else if (code === "SRITIKUTHI10") {
      setAppliedDiscount(0.10); // 10% discount
      setPromoError("");
    } else {
      setAppliedDiscount(0);
      setPromoError("Invalid code. Try 'SRITIKUTHI5' for 5% off.");
    }
  };

  // Reset calculator
  const handleReset = () => {
    setWeddingFunctions(
      weddingRitualFunctions.map((fn) => ({
        id: fn.id,
        number: fn.number,
        title: fn.title,
        tagline: fn.tagline,
        shortDescription: fn.shortDescription,
        image: fn.image,
        duration: fn.defaultDuration,
        team: {
          candidPhotographer: fn.defaultTeam.candidPhotographer || (fn.id === "w-wedding" ? 1 : 0),
          cinematographer: fn.defaultTeam.cinematographer || (fn.id === "w-wedding" ? 1 : 0),
          traditionalPhotographer: fn.defaultTeam.traditionalPhotographer || (fn.id === "w-wedding" ? 1 : 0),
          traditionalVideo: fn.defaultTeam.traditionalVideo || (fn.id === "w-wedding" ? 1 : 0),
          droneOperator: fn.defaultTeam.droneOperator || 0,
        },
        enabled: fn.id === "w-wedding" || fn.id === "w-reception",
      }))
    );
    setSelectedCategory("wedding");
    setOpenWeddingAccordion("w-wedding");
    setCustomFunctions([]);
    setSelectedDeliverableIds(["album-premium", "teaser-film", "reels-pack"]);
    setSelectedLocationId("kolkata");
    setAppliedDiscount(0);
    setPromoCode("");
    setPromoError("");
  };

  // Calculate pricing breakdown
  const calculation = useMemo(() => {
    let functionsSubtotal = 0;
    let totalCrewCount = 0;
    const activeFunctionSummaries: { name: string; duration: string; crewCount: number; cost: number; teamList: string[] }[] = [];

    if (selectedCategory === "wedding") {
      // Wedding multi-ritual functions
      weddingFunctions.forEach((fn) => {
        if (!fn.enabled) return;
        const isFull = fn.duration === "Full Day" || fn.duration === "1 Day";
        const isTwoDays = fn.duration === "2 Days";
        const multiplier = isTwoDays ? 2 : 1;

        let fnCost = 0;
        let fnCrew = 0;
        const teamList: string[] = [];

        (Object.keys(fn.team) as TeamRole[]).forEach((role) => {
          const count = fn.team[role];
          if (count > 0) {
            const config = teamRoleConfigs[role];
            const rate = isFull || isTwoDays ? config.fullDayRate : config.halfDayRate;
            fnCost += rate * count * multiplier;
            fnCrew += count;
            teamList.push(`${count}x ${config.label}`);
          }
        });

        if (fnCost > 0) {
          functionsSubtotal += fnCost;
          totalCrewCount += fnCrew;
          activeFunctionSummaries.push({
            name: fn.title,
            duration: fn.duration,
            crewCount: fnCrew,
            cost: fnCost,
            teamList,
          });
        }
      });
    } else {
      // Non-wedding single service
      const svc = singleServices[selectedCategory];
      if (svc && svc.enabled) {
        const isFull = svc.duration === "Full Day" || svc.duration === "1 Day";
        let fnCost = 0;
        let fnCrew = 0;
        const teamList: string[] = [];

        (Object.keys(svc.team) as TeamRole[]).forEach((role) => {
          const count = svc.team[role];
          if (count > 0) {
            const config = teamRoleConfigs[role];
            const rate = isFull ? config.fullDayRate : config.halfDayRate;
            fnCost += rate * count;
            fnCrew += count;
            teamList.push(`${count}x ${config.label}`);
          }
        });

        if (fnCost > 0) {
          functionsSubtotal += fnCost;
          totalCrewCount += fnCrew;
          activeFunctionSummaries.push({
            name: svc.title,
            duration: svc.duration,
            crewCount: fnCrew,
            cost: fnCost,
            teamList,
          });
        }
      }
    }

    // Custom functions cost
    customFunctions.forEach((fn) => {
      const isFull = fn.duration === "Full Day";
      let fnCost = 0;
      let fnCrew = 0;
      const teamList: string[] = [];

      (Object.keys(fn.team) as TeamRole[]).forEach((role) => {
        const count = fn.team[role];
        if (count > 0) {
          const config = teamRoleConfigs[role];
          const rate = isFull ? config.fullDayRate : config.halfDayRate;
          fnCost += rate * count;
          fnCrew += count;
          teamList.push(`${count}x ${config.label}`);
        }
      });

      if (fnCost > 0) {
        functionsSubtotal += fnCost;
        totalCrewCount += fnCrew;
        activeFunctionSummaries.push({
          name: fn.name,
          duration: fn.duration,
          crewCount: fnCrew,
          cost: fnCost,
          teamList,
        });
      }
    });

    // Deliverables cost
    let deliverablesSubtotal = 0;
    const activeDeliverables: { name: string; price: number }[] = [];
    selectedDeliverableIds.forEach((id) => {
      const deliv = deliverableOptions.find((d) => d.id === id);
      if (deliv) {
        deliverablesSubtotal += deliv.price;
        activeDeliverables.push({ name: deliv.name, price: deliv.price });
      }
    });

    // Travel cost
    const travelCost = selectedLocation.travelCost;

    // Gross total
    const grossTotal = functionsSubtotal + deliverablesSubtotal + travelCost;

    // Discount
    const discountAmount = Math.round(grossTotal * appliedDiscount);
    const finalTotal = Math.max(0, grossTotal - discountAmount);

    return {
      functionsSubtotal,
      deliverablesSubtotal,
      travelCost,
      grossTotal,
      discountAmount,
      finalTotal,
      activeFunctionSummaries,
      activeDeliverables,
      totalCrewCount,
    };
  }, [selectedCategory, weddingFunctions, singleServices, customFunctions, selectedDeliverableIds, selectedLocation, appliedDiscount]);

  // Construct WhatsApp Link
  const whatsappUrl = useMemo(() => {
    const categoryName = mainServiceTabs.find((t) => t.id === selectedCategory)?.title || "Wedding";
    const lines: string[] = [
      `*Photography & Film Package Estimate*`,
      `Studio: ${siteConfig.name}`,
      `Service Category: *${categoryName}*`,
      `-----------------------------------------`,
      `*Selected Functions & Rituals:*`,
    ];

    calculation.activeFunctionSummaries.forEach((f) => {
      lines.push(`• *${f.name}* (${f.duration}) — ₹${f.cost.toLocaleString("en-IN")}`);
      lines.push(`  Crew: ${f.teamList.join(", ")}`);
    });

    lines.push(
      ``,
      `*Location:* ${selectedLocation.name} (${selectedLocation.travelCost === 0 ? "No travel fee" : `+ ₹${selectedLocation.travelCost.toLocaleString("en-IN")}`})`
    );

    if (calculation.activeDeliverables.length > 0) {
      lines.push(``, `*Deliverables:*`);
      calculation.activeDeliverables.forEach((d) => {
        lines.push(`• ${d.name}: ₹${d.price.toLocaleString("en-IN")}`);
      });
    }

    if (calculation.discountAmount > 0) {
      lines.push(``, `*Discount:* -₹${calculation.discountAmount.toLocaleString("en-IN")} (${appliedDiscount * 100}% OFF)`);
    }

    lines.push(
      `-----------------------------------------`,
      `*Total Estimated Investment:* ₹${calculation.finalTotal.toLocaleString("en-IN")}`,
      ``,
      `Hi Shiladitya, I configured this package on your website calculator. Please let me know your availability for our dates!`
    );

    const encodedText = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodedText}`;
  }, [calculation, selectedLocation, appliedDiscount, selectedCategory]);

  return (
    <section id="rate-calculator" className="relative border-y border-[var(--fine-border)] bg-[var(--soft-white)] py-20 lg:py-28 text-[var(--charcoal)]">
      <div className="container-editorial">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[var(--fine-border)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
              <Sparkles size={14} className="text-[var(--espresso)]" />
              <span>Transparent Rate Calculator</span>
            </div>
            <h2 className="serif mt-3 text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.95] text-[var(--espresso)]">
              Photography & Film Rate Calculator
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Select your service type, configure your camera & cinema operators across wedding rituals or custom events, and view your instant itemized package quote.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--fine-border)] bg-[var(--warm-ivory)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--espresso)] transition-colors hover:bg-[var(--espresso)] hover:text-[var(--warm-ivory)]"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--fine-border)] bg-[var(--warm-ivory)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--espresso)] transition-colors hover:bg-[var(--espresso)] hover:text-[var(--warm-ivory)]"
            >
              <Printer size={14} />
              <span>Print Quote</span>
            </button>
          </div>
        </div>

        {/* 🌟 STEP 1: SERVICE CATEGORY SELECTOR CARDS */}
        <div className="py-10 border-b border-[var(--fine-border)]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] mb-4">
            <Camera size={14} />
            <span>1 · Select Service Category</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {mainServiceTabs.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`group relative flex flex-col items-center justify-center p-5 text-center border rounded-2xl transition-all ${
                    isSelected
                      ? "border-[var(--espresso)] bg-[var(--warm-ivory)] shadow-md ring-2 ring-[var(--espresso)]"
                      : "border-[var(--fine-border)] bg-[var(--soft-white)] hover:border-[var(--espresso)]"
                  }`}
                >
                  {isSelected && (
                    <span className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-700 text-white shadow-sm">
                      <Check size={10} />
                    </span>
                  )}
                  <span className="text-3xl mb-2.5 transform transition-transform group-hover:scale-110">
                    {tab.iconEmoji}
                  </span>
                  <h4 className="text-sm font-bold text-[var(--espresso)] leading-snug">
                    {tab.title}
                  </h4>
                  <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-wider text-[var(--muted)]">
                    {isSelected ? "● Active Setup" : "Select"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 🌟 MAIN 2-COLUMN CONFIGURATION & LIVE QUOTATION */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_390px] xl:grid-cols-[1fr_420px]">
          {/* Left Column */}
          <div className="space-y-12">
            
            {/* 🌟 STEP 2: WEDDING RITUALS ACCORDION LIST (WHEN WEDDING IS SELECTED) */}
            {selectedCategory === "wedding" ? (
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--fine-border)]">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    <Layers size={14} />
                    <span>2 · Wedding Rituals & Functions Selection</span>
                  </div>
                  <span className="text-xs text-[var(--muted)]">Click any ritual to set operator team</span>
                </div>

                <div className="mt-6 space-y-3">
                  {weddingFunctions.map((fn) => {
                    const isOpen = openWeddingAccordion === fn.id;
                    const totalCrew = Object.values(fn.team).reduce((a, b) => a + b, 0);

                    return (
                      <div key={fn.id} className="border border-[var(--fine-border)] rounded-2xl bg-[var(--soft-white)] overflow-hidden transition-colors">
                        {/* Accordion Row Header */}
                        <button
                          type="button"
                          onClick={() => toggleWeddingAccordion(fn.id)}
                          className="flex w-full items-center justify-between py-4 px-4 sm:px-6 text-left transition-colors hover:bg-[rgba(227,232,229,0.4)]"
                        >
                          <div className="flex items-center gap-3 sm:gap-4">
                            <span className="serif text-xl sm:text-2xl font-light text-[var(--muted)] w-8">
                              {fn.number}
                            </span>
                            <div>
                              <div className="flex items-center gap-2.5">
                                <h4 className="serif text-xl sm:text-2xl font-medium text-[var(--espresso)]">
                                  {fn.title}
                                </h4>
                                {totalCrew > 0 && (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.68rem] font-semibold uppercase tracking-wider bg-[var(--espresso)] text-[var(--warm-ivory)]">
                                    {totalCrew} Crew · {fn.duration}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-[var(--muted)] line-clamp-1">{fn.tagline}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="text-right hidden sm:block">
                              <span className="text-xs font-medium text-[var(--muted)]">
                                {totalCrew === 0 ? "Not selected" : `${totalCrew} Members`}
                              </span>
                            </div>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.25 }}
                              className="p-1 text-[var(--espresso)]"
                            >
                              <ChevronDown size={20} />
                            </motion.div>
                          </div>
                        </button>

                        {/* Accordion Content for Function */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 sm:px-8 pb-7 pt-3 space-y-6 bg-[rgba(227,232,229,0.3)] border-t border-[var(--fine-border)]">
                                {/* Duration selector */}
                                <div>
                                  <label className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                                    Function Duration
                                  </label>
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    {weddingRitualFunctions
                                      .find((s) => s.id === fn.id)
                                      ?.allowedDurations.map((dur) => (
                                        <button
                                          key={dur}
                                          type="button"
                                          onClick={() => updateWeddingFunctionDuration(fn.id, dur)}
                                          className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all ${
                                            fn.duration === dur
                                              ? "border-[var(--espresso)] bg-[var(--espresso)] text-[var(--warm-ivory)]"
                                              : "border-[var(--fine-border)] bg-[var(--soft-white)] text-[var(--charcoal)] hover:border-[var(--espresso)]"
                                          }`}
                                        >
                                          {dur}
                                        </button>
                                      ))}
                                  </div>
                                </div>

                                {/* Team requirements */}
                                <div>
                                  <label className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                                    Team Requirements (Select Operator Crew Count)
                                  </label>
                                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {(Object.keys(teamRoleConfigs) as TeamRole[]).map((roleKey) => {
                                      const config = teamRoleConfigs[roleKey];
                                      const count = fn.team[roleKey] || 0;
                                      const isFull = fn.duration === "Full Day" || fn.duration === "1 Day";
                                      const isTwoDays = fn.duration === "2 Days";
                                      const roleRate = isFull || isTwoDays ? config.fullDayRate : config.halfDayRate;

                                      return (
                                        <div
                                          key={roleKey}
                                          className="flex items-center justify-between p-3.5 rounded-xl border border-[var(--fine-border)] bg-[var(--soft-white)]"
                                        >
                                          <div>
                                            <div className="text-xs font-semibold text-[var(--espresso)]">
                                              {config.label}
                                            </div>
                                            <div className="text-[0.68rem] text-[var(--muted)]">
                                              ₹{roleRate.toLocaleString("en-IN")} / shift
                                            </div>
                                          </div>
                                          <select
                                            value={count}
                                            onChange={(e) =>
                                              updateWeddingFunctionTeam(fn.id, roleKey, parseInt(e.target.value, 10))
                                            }
                                            className="h-9 min-w-14 rounded-lg border border-[var(--fine-border)] bg-[var(--warm-ivory)] px-2 text-sm font-semibold text-[var(--espresso)] outline-none focus:border-[var(--espresso)]"
                                          >
                                            {Array.from({ length: config.maxCount + 1 }, (_, i) => (
                                              <option key={i} value={i}>
                                                {i}
                                              </option>
                                            ))}
                                          </select>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* 🌟 STEP 2 (NON-WEDDING): SINGLE SERVICE TEAM OPERATORS */
              <div className="p-6 sm:p-8 border border-[var(--espresso)] rounded-3xl bg-[var(--warm-ivory)] shadow-sm">
                {(() => {
                  const svc = singleServices[selectedCategory];
                  if (!svc) return null;
                  return (
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--fine-border)]">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                            <Users size={14} />
                            <span>2 · Set Operator Teams for {svc.title}</span>
                          </div>
                          <h3 className="serif mt-1 text-3xl text-[var(--espresso)]">
                            {svc.title} Team Configuration
                          </h3>
                        </div>

                        {/* Duration buttons */}
                        <div>
                          <label className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] mb-1.5">
                            Duration
                          </label>
                          <div className="flex gap-1.5">
                            {["Half Day", "Full Day"].map((dur) => (
                              <button
                                key={dur}
                                type="button"
                                onClick={() => updateSingleServiceDuration(selectedCategory, dur as any)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all ${
                                  svc.duration === dur
                                    ? "border-[var(--espresso)] bg-[var(--espresso)] text-[var(--warm-ivory)]"
                                    : "border-[var(--fine-border)] bg-[var(--soft-white)] text-[var(--charcoal)] hover:border-[var(--espresso)]"
                                }`}
                              >
                                {dur}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Operators list */}
                      <div className="mt-6 space-y-3">
                        <label className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)] mb-2">
                          Select Required Crew Operators
                        </label>

                        {(Object.keys(teamRoleConfigs) as TeamRole[]).map((roleKey) => {
                          const config = teamRoleConfigs[roleKey];
                          const count = svc.team[roleKey] || 0;
                          const isFull = svc.duration === "Full Day" || svc.duration === "1 Day";
                          const roleRate = isFull ? config.fullDayRate : config.halfDayRate;

                          return (
                            <div
                              key={roleKey}
                              className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                                count > 0
                                  ? "border-[var(--espresso)] bg-[var(--soft-white)] shadow-sm"
                                  : "border-[var(--fine-border)] bg-[rgba(255,255,255,0.6)]"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl border border-[var(--fine-border)] bg-[var(--warm-ivory)] text-[var(--espresso)]">
                                  {roleKey === "cinematographer" || roleKey === "traditionalVideo" ? (
                                    <Video size={16} />
                                  ) : roleKey === "droneOperator" ? (
                                    <Disc size={16} />
                                  ) : (
                                    <Camera size={16} />
                                  )}
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-[var(--espresso)]">
                                    {config.label}
                                  </div>
                                  <div className="text-xs text-[var(--muted)]">
                                    ₹{roleRate.toLocaleString("en-IN")} / shift
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => updateSingleServiceTeam(selectedCategory, roleKey, count - 1)}
                                  disabled={count === 0}
                                  className="h-8 w-8 rounded-lg flex items-center justify-center border border-[var(--fine-border)] bg-[var(--warm-ivory)] text-sm font-bold text-[var(--espresso)] hover:bg-[var(--espresso)] hover:text-[var(--warm-ivory)] disabled:opacity-30"
                                >
                                  -
                                </button>
                                <span className="w-8 text-center text-sm font-bold text-[var(--espresso)]">
                                  {count}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateSingleServiceTeam(selectedCategory, roleKey, count + 1)}
                                  disabled={count >= config.maxCount}
                                  className="h-8 w-8 rounded-lg flex items-center justify-center border border-[var(--fine-border)] bg-[var(--warm-ivory)] text-sm font-bold text-[var(--espresso)] hover:bg-[var(--espresso)] hover:text-[var(--warm-ivory)] disabled:opacity-30"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 🌟 STEP 3: ADDITIONAL CUSTOM FUNCTION BUILDER */}
            <div className="p-6 rounded-3xl border border-[var(--fine-border)] bg-[var(--warm-ivory)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                <Plus size={14} />
                <span>Add Additional Function / Custom Ritual</span>
              </div>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Need extra custom shoots (e.g. Ring Ceremony, Rooftop Cocktail, Aashirbaad, Gaye Holud)?
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    Function Name
                  </label>
                  <input
                    type="text"
                    value={newCustomName}
                    onChange={(e) => setNewCustomName(e.target.value)}
                    placeholder="Enter function name"
                    className="mt-1 h-11 w-full rounded-xl border border-[var(--fine-border)] bg-[var(--soft-white)] px-3 text-sm outline-none focus:border-[var(--espresso)]"
                  />
                </div>
                <div>
                  <label className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    Function Duration
                  </label>
                  <div className="mt-1 flex gap-2">
                    {(["Half Day", "Full Day"] as const).map((dur) => (
                      <button
                        key={dur}
                        type="button"
                        onClick={() => setNewCustomDuration(dur)}
                        className={`flex-1 h-11 rounded-xl text-xs font-semibold uppercase tracking-wider border ${
                          newCustomDuration === dur
                            ? "border-[var(--espresso)] bg-[var(--espresso)] text-[var(--warm-ivory)]"
                            : "border-[var(--fine-border)] bg-[var(--soft-white)] text-[var(--charcoal)]"
                        }`}
                      >
                        {dur}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Custom team selectors */}
              <div className="mt-4">
                <label className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Select Team Members
                </label>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(Object.keys(teamRoleConfigs) as TeamRole[]).map((role) => (
                    <label
                      key={role}
                      className="flex items-center gap-2 p-2 rounded-xl border border-[var(--fine-border)] bg-[var(--soft-white)] text-xs text-[var(--charcoal)] cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={(newCustomTeam[role] || 0) > 0}
                        onChange={(e) =>
                          setNewCustomTeam((prev) => ({
                            ...prev,
                            [role]: e.target.checked ? 1 : 0,
                          }))
                        }
                      />
                      <span>{teamRoleConfigs[role].label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={handleAddCustomFunction}
                  disabled={!newCustomName.trim()}
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--espresso)] bg-[var(--espresso)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--warm-ivory)] disabled:opacity-40 transition-opacity"
                >
                  <Plus size={14} />
                  <span>Add Function to Estimate</span>
                </button>
              </div>

              {/* List of custom functions added */}
              {customFunctions.length > 0 && (
                <div className="mt-5 pt-4 border-t border-[var(--fine-border)] space-y-2">
                  <span className="text-xs font-semibold text-[var(--espresso)]">Added Custom Functions:</span>
                  {customFunctions.map((cf) => (
                    <div
                      key={cf.id}
                      className="flex items-center justify-between p-3 rounded-xl border border-[var(--fine-border)] bg-[var(--soft-white)] text-sm"
                    >
                      <div>
                        <span className="font-semibold text-[var(--espresso)]">{cf.name}</span>
                        <span className="ml-2 text-xs text-[var(--muted)]">({cf.duration})</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeCustomFunction(cf.id)}
                        className="text-red-700 hover:text-red-900 p-1"
                        aria-label="Remove function"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 🌟 STEP 4: EVENT LOCATION & TRAVEL SURCHARGE */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                <MapPin size={14} />
                <span>3 · Event Location & Travel Surcharge</span>
              </div>
              <h3 className="serif mt-2 text-3xl text-[var(--espresso)]">Where will the celebration happen?</h3>
              
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {locationOptions.map((loc) => {
                  const isSelected = selectedLocationId === loc.id;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setSelectedLocationId(loc.id)}
                      className={`relative flex flex-col justify-between p-5 rounded-2xl text-left border transition-all ${
                        isSelected
                          ? "border-[var(--espresso)] bg-[var(--warm-ivory)] shadow-sm ring-1 ring-[var(--espresso)]"
                          : "border-[var(--fine-border)] bg-[var(--soft-white)] hover:border-[var(--espresso)]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold text-[var(--espresso)]">{loc.name}</span>
                        {isSelected && <CheckCircle2 size={16} className="text-[var(--espresso)] shrink-0 mt-0.5" />}
                      </div>
                      <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{loc.description}</p>
                      <div className="mt-3 text-xs font-medium uppercase tracking-wider text-[var(--espresso)]">
                        {loc.travelCost === 0 ? "✨ No Travel Charge" : `+ ₹${loc.travelCost.toLocaleString("en-IN")} Travel / Stay allowance`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 🌟 STEP 5: ADD DELIVERABLES */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                <Film size={14} />
                <span>4 · Add Deliverables & Heirloom Albums</span>
              </div>
              <h3 className="serif mt-2 text-3xl text-[var(--espresso)]">Fine-Art Photobooks & Edits</h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {deliverableOptions.map((deliv) => {
                  const isChecked = selectedDeliverableIds.includes(deliv.id);
                  return (
                    <label
                      key={deliv.id}
                      className={`relative flex items-start gap-3.5 p-5 rounded-2xl border cursor-pointer transition-all ${
                        isChecked
                          ? "border-[var(--espresso)] bg-[var(--warm-ivory)] shadow-sm"
                          : "border-[var(--fine-border)] bg-[var(--soft-white)] hover:border-[var(--espresso)]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleDeliverable(deliv.id)}
                        className="mt-1 h-4 w-4 rounded accent-[var(--espresso)]"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm font-semibold text-[var(--espresso)]">{deliv.name}</span>
                        </div>
                        <p className="mt-1 text-xs text-[var(--muted)] leading-5">{deliv.description}</p>
                        <div className="mt-2 text-xs font-bold text-[var(--espresso)]">
                          + ₹{deliv.price.toLocaleString("en-IN")}
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 🌟 RIGHT COLUMN: STICKY ESTIMATE SUMMARY & WHATSAPP */}
          <div className="lg:relative">
            <div className="sticky top-28 border border-[var(--gold-border)] rounded-3xl bg-royal-espresso text-[var(--warm-ivory)] p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-5 border-b border-[rgba(237,182,0,0.25)]">
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">Live Quotation</span>
                <span className="text-xs font-mono rounded-full bg-[rgba(237,182,0,0.15)] border border-[var(--gold-border)] px-3 py-1 text-[var(--gold-light)] font-bold">
                  {calculation.activeFunctionSummaries.length} Function{calculation.activeFunctionSummaries.length > 1 ? "s" : ""}
                </span>
              </div>

              {/* Big Price Display */}
              <div className="py-6 border-b border-[rgba(237,182,0,0.25)]">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--gold)]">Estimated Wedding Investment</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="serif text-4xl sm:text-5xl font-semibold text-[var(--warm-ivory)]">
                    ₹{calculation.finalTotal.toLocaleString("en-IN")}
                  </span>
                  {calculation.discountAmount > 0 && (
                    <span className="text-sm text-[rgba(247,243,236,0.6)] line-through">
                      ₹{calculation.grossTotal.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs text-[rgba(247,243,236,0.7)] leading-relaxed">
                  *Includes master retouching, audio mastering & digital delivery.
                </p>
              </div>

              {/* Selected Services & Crew summary */}
              <div className="py-5 border-b border-[rgba(237,182,0,0.2)] space-y-3 text-xs">
                {calculation.activeFunctionSummaries.map((f) => (
                  <div key={f.name} className="flex justify-between text-[rgba(247,243,236,0.85)]">
                    <span>{f.name} ({f.duration}):</span>
                    <span className="text-[var(--warm-ivory)] font-medium">
                      ₹{f.cost.toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}

                <div className="flex justify-between text-[rgba(247,243,236,0.85)] pt-2 border-t border-[rgba(237,182,0,0.15)]">
                  <span>Albums & Deliverables:</span>
                  <span className="text-[var(--warm-ivory)] font-medium">
                    ₹{calculation.deliverablesSubtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between text-[rgba(247,243,236,0.85)]">
                  <span>Location ({selectedLocation.name}):</span>
                  <span className="text-[var(--warm-ivory)] font-medium">
                    {selectedLocation.travelCost === 0 ? "₹0 (Included)" : `₹${selectedLocation.travelCost.toLocaleString("en-IN")}`}
                  </span>
                </div>

                {calculation.discountAmount > 0 && (
                  <div className="flex justify-between text-[var(--gold-light)] font-semibold">
                    <span>Special Promo Discount:</span>
                    <span>- ₹{calculation.discountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
              </div>

              {/* Promo Code Box */}
              <div className="py-5 border-b border-[rgba(237,182,0,0.2)]">
                <label className="block text-[0.68rem] uppercase tracking-[0.18em] text-[var(--gold)] mb-2 font-semibold">
                  Promo / Coupon Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter SRITIKUTHI5"
                    className="h-10 flex-1 rounded-xl bg-[rgba(255,255,255,0.08)] border border-[var(--gold-border)] px-3 text-xs text-[var(--warm-ivory)] uppercase outline-none focus:border-[var(--gold)]"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="h-10 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gold-gradient text-[var(--espresso)] hover:brightness-105 transition-all shadow-gold-glow"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="mt-2 text-xs text-red-300">{promoError}</p>}
                {appliedDiscount > 0 && (
                  <p className="mt-2 text-xs text-emerald-300 font-semibold">
                    ✓ Promo applied: {appliedDiscount * 100}% discount active!
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  <Send size={16} />
                  <span>Get on WhatsApp</span>
                </a>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[var(--gold-border)] bg-[rgba(255,255,255,0.06)] hover:bg-crimson-gradient hover:border-transparent px-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--warm-ivory)] transition-all active:scale-95"
                >
                  <span>Chat &amp; Lock Dates on WhatsApp</span>
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(227,232,229,0.15)] text-center">
                <p className="text-[0.68rem] text-[var(--sand)]">
                  Need a tailored multi-day destination or custom package?{" "}
                  <a href={`tel:${siteConfig.primaryPhone}`} className="underline hover:text-white">
                    Call Shiladitya Das directly
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
