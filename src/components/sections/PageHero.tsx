import Image from "next/image";
import type { ImageAsset } from "@/data/images";
import { FadeIn } from "@/components/ui/Motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: ImageAsset;
};

export function PageHero({ eyebrow, title, intro, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden border-b border-[var(--fine-border)] bg-[var(--warm-ivory)] text-[var(--espresso)]">
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover opacity-42" />
      <div className="absolute inset-0 bg-[rgba(227,232,229,0.34)]" />
      <div className="container-editorial relative flex min-h-[78vh] items-end justify-center pb-16 pt-36 text-center">
        <FadeIn className="max-w-5xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="serif mt-5 text-[clamp(4rem,11vw,10rem)] leading-[0.82]">{title}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">{intro}</p>
        </FadeIn>
      </div>
    </section>
  );
}
