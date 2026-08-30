"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contactSchema, serviceOptions, type ContactFormValues } from "@/lib/contact-schema";
import { StaggerGroup, StaggerItem } from "@/components/ui/Motion";

const fieldClass = "min-h-12 w-full rounded-xl border border-[var(--fine-border)] bg-[var(--soft-white)] px-4 text-sm outline-none";
const labelClass = "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]";

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { services: [], consent: false, website: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    await new Promise((resolve) => setTimeout(resolve, 650));
    console.info("Static consultation enquiry", {
      name: values.fullName,
      email: values.email,
      eventType: values.eventType,
      services: values.services,
    });
    setStatus("success");
    reset();
  }

  const error = (key: keyof ContactFormValues) => errors[key]?.message ? <p className="mt-2 text-sm text-red-700">{String(errors[key]?.message)}</p> : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register("website")} />
      <StaggerGroup className="grid gap-5 md:grid-cols-2">
        <StaggerItem><Field label="Full name" error={error("fullName")}><input className={fieldClass} {...register("fullName")} autoComplete="name" /></Field></StaggerItem>
        <StaggerItem><Field label="Partner or company" error={error("partnerOrCompany")}><input className={fieldClass} {...register("partnerOrCompany")} /></Field></StaggerItem>
        <StaggerItem><Field label="Email" error={error("email")}><input className={fieldClass} type="email" {...register("email")} autoComplete="email" /></Field></StaggerItem>
        <StaggerItem><Field label="Phone or WhatsApp" error={error("phone")}><input className={fieldClass} {...register("phone")} autoComplete="tel" /></Field></StaggerItem>
        <StaggerItem><Field label="Event type" error={error("eventType")}><select className={fieldClass} {...register("eventType")}><option value="">Select</option><option>Wedding</option><option>Pre-Wedding</option><option>Rice Ceremony</option><option>Events</option><option>Engagement</option><option>Corporate Shoot</option><option>Model Shoot</option><option>Commercial</option></select></Field></StaggerItem>
        <StaggerItem><Field label="Event date" error={error("eventDate")}><input className={fieldClass} type="date" {...register("eventDate")} /></Field></StaggerItem>
        <StaggerItem><Field label="City or venue" error={error("city")}><input className={fieldClass} {...register("city")} /></Field></StaggerItem>
        <StaggerItem><Field label="Estimated guest count" error={error("guestCount")}><input className={fieldClass} {...register("guestCount")} /></Field></StaggerItem>
        <StaggerItem><Field label="Approximate budget" error={error("budget")}><select className={fieldClass} {...register("budget")}><option value="">Select</option><option>Under INR 5L</option><option>INR 5L to 12L</option><option>INR 12L to 25L</option><option>INR 25L+</option><option>Still deciding</option></select></Field></StaggerItem>
        <StaggerItem><Field label="How did you find us?" error={error("discovery")}><input className={fieldClass} {...register("discovery")} /></Field></StaggerItem>
      </StaggerGroup>
      <fieldset>
        <legend className={labelClass}>Services required</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((service) => (
            <motion.label key={service} whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="flex min-h-11 items-center gap-3 rounded-xl border border-[var(--fine-border)] bg-[var(--soft-white)] px-4 text-sm cursor-pointer">
              <input type="checkbox" value={service} {...register("services")} className="rounded" />
              {service}
            </motion.label>
          ))}
        </div>
        {error("services")}
      </fieldset>
      <Field label="Message" error={error("message")}><textarea className={`${fieldClass} min-h-36 py-3`} {...register("message")} /></Field>
      <label className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
        <input type="checkbox" {...register("consent")} className="mt-2 rounded" />
        I consent to Sritikuthi The Wedding Tales contacting me about this enquiry.
      </label>
      {error("consent")}
      <motion.button type="submit" disabled={isSubmitting} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-crimson-gradient px-8 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-crimson-glow hover:brightness-110 disabled:opacity-60 transition-all">
        <Send size={16} />
        {isSubmitting ? "Sending" : "Send Enquiry"}
      </motion.button>
      {status === "success" ? <p className="text-sm text-green-800">Thank you. Your enquiry has been captured in this static demo. Connect Resend or a CRM before production lead handling.</p> : null}
      {status === "error" ? <p className="text-sm text-red-700">Something went wrong. Please email us directly.</p> : null}
    </form>
  );
}

function Field({ label, children, error }: { label: string; children: React.ReactNode; error: React.ReactNode }) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <span className="mt-2 block">{children}</span>
      {error}
    </label>
  );
}
