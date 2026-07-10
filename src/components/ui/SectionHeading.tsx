import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
};

export function SectionHeading({ eyebrow, title, align = "left", children, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-5", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="serif text-[clamp(2.4rem,6vw,5.8rem)] leading-[0.92] text-[var(--espresso)]">{title}</h2>
      {children ? <div className="max-w-2xl text-base leading-8 text-[var(--muted)]">{children}</div> : null}
    </div>
  );
}
