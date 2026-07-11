import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/data/portfolio";
import { services } from "@/data/services";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FadeIn, ImageReveal, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = portfolioItems.slice(0, 2);

  return (
    <>
      <PageHero eyebrow={service.eyebrow} title={service.title} intro={service.description} image={service.image} />
      <Breadcrumbs items={[{ href: "/services", label: "Services" }, { href: service.href, label: service.title }]} />
      <MotionSection className="py-20">
        <div className="container-editorial grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <FadeIn className="text-sm leading-8 text-[var(--muted)]">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--charcoal)]">Who it is for</p>
            <p className="mt-4">Couples, families, and hosts who want a refined experience that feels personal, organized, and quietly expressive.</p>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-[var(--charcoal)]">Proposal note</p>
            <p className="mt-4">Custom proposals are created after understanding your celebration.</p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="serif text-6xl leading-none text-[var(--espresso)]">What is included</h2>
            <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-2" delay={0.08}>
              {service.inclusions.map((item) => <StaggerItem key={item} className="border-t border-[var(--fine-border)] pt-4 text-sm uppercase tracking-[0.14em]">{item}</StaggerItem>)}
            </StaggerGroup>
          </FadeIn>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--soft-white)] py-20">
        <div className="container-editorial">
          <FadeIn><h2 className="serif text-6xl text-[var(--espresso)]">Process</h2></FadeIn>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-4">
            {service.process.map((step, index) => (
              <StaggerItem key={step} className="border-t border-[var(--fine-border)] pt-5">
                <p className="serif text-5xl text-[var(--taupe)]">0{index + 1}</p>
                <h3 className="mt-4 text-sm uppercase tracking-[0.16em]">{step}</h3>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>
      <MotionSection className="py-20">
        <div className="container-editorial">
          <FadeIn><h2 className="serif text-6xl text-[var(--espresso)]">Sample gallery</h2></FadeIn>
          <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-3">
            {[service.image, ...related.map((item) => item.cover)].map((image, index) => (
              <ImageReveal delay={index * 0.08} className="relative aspect-[4/5] overflow-hidden" key={image.src}>
                <Image src={image.src} alt={image.alt} fill sizes="33vw" className="object-cover" />
              </ImageReveal>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--sand)] py-20">
        <div className="container-editorial grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="serif text-6xl text-[var(--espresso)]">Optional add-ons</h2>
            <ul className="mt-7 space-y-3 text-[var(--muted)]">{service.addOns.map((item) => <li key={item}>{item}</li>)}</ul>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="serif text-6xl text-[var(--espresso)]">FAQ</h2>
            <div className="mt-7 space-y-5">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="border-t border-[var(--fine-border)] pt-4">
                  <summary className="cursor-pointer text-sm uppercase tracking-[0.14em]">{faq.question}</summary>
                  <p className="mt-3 leading-8 text-[var(--muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </MotionSection>
      <MotionSection className="py-20">
        <div className="container-editorial">
          <FadeIn><h2 className="serif text-6xl text-[var(--espresso)]">Related stories</h2></FadeIn>
          <StaggerGroup className="mt-10 grid gap-8 md:grid-cols-2">
            {related.map((item) => (
              <StaggerItem key={item.slug}>
              <a href={`/portfolio/${item.slug}`} className="group block">
                <span className="relative block aspect-[16/10] overflow-hidden"><Image src={item.cover.src} alt={item.cover.alt} fill sizes="50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></span>
                <span className="serif mt-4 block text-4xl text-[var(--espresso)]">{item.title}</span>
              </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <FadeIn delay={0.16}><ButtonLink href="/contact" className="mt-10">Enquire About This Service</ButtonLink></FadeIn>
        </div>
      </MotionSection>
      <CTASection />
    </>
  );
}
