import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  // Mock email handler. Replace this block with Resend:
  // await resend.emails.send({ from, to, subject, react: <LeadEmail data={parsed.data} /> });
  console.info("New Sritikuthi enquiry", {
    name: parsed.data.fullName,
    email: parsed.data.email,
    eventType: parsed.data.eventType,
    services: parsed.data.services,
  });

  return NextResponse.json({ ok: true });
}
