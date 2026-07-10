import Image from "next/image";
import { images } from "@/data/images";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[var(--espresso)] py-28 text-[var(--warm-ivory)]">
      <Image src={images.cta.src} alt={images.cta.alt} fill sizes="100vw" className="object-cover opacity-45" />
      <div className="absolute inset-0 bg-[rgba(41,35,31,0.42)]" />
      <div className="container-editorial relative max-w-4xl">
        <p className="eyebrow text-[rgba(247,243,236,0.76)]">Consultation</p>
        <h2 className="serif mt-5 text-[clamp(3.2rem,7vw,7rem)] leading-[0.9]">Let&apos;s create something worth remembering.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(247,243,236,0.82)]">
          Tell us where you are in your planning journey, and we&apos;ll help you shape what comes next.
        </p>
        <ButtonLink href="/contact" variant="light" className="mt-9">Begin Your Story</ButtonLink>
      </div>
    </section>
  );
}
