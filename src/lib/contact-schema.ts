import { z } from "zod";

export const serviceOptions = [
  "Photography",
  "Cinematography",
  "Pre-wedding shoot",
  "Wedding planning",
  "Décor",
  "Guest management",
  "Corporate event",
  "Other",
] as const;

export const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  partnerOrCompany: z.string().min(2, "Please enter a partner or company name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a phone or WhatsApp number."),
  eventType: z.string().min(2, "Please choose an event type."),
  eventDate: z.string().min(1, "Please share an approximate date."),
  city: z.string().min(2, "Please share the city or venue."),
  guestCount: z.string().min(1, "Please share an estimated guest count."),
  services: z.array(z.enum(serviceOptions)).min(1, "Please select at least one service."),
  budget: z.string().min(1, "Please choose an approximate budget range."),
  discovery: z.string().min(1, "Please share how you found us."),
  message: z.string().min(10, "Please tell us a little more."),
  consent: z.boolean().refine((value) => value, "Please consent to being contacted."),
  website: z.string().max(0, "Spam detected.").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
