import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "crimson" | "gold" | "dark" | "light" | "text";
  className?: string;
};

export function ButtonLink({ href, children, variant = "crimson", className }: ButtonLinkProps) {
  if (variant === "text") {
    return (
      <Link href={href} className={cn("link-underline text-sm font-semibold uppercase tracking-[0.18em] text-[var(--crimson)] hover:text-[var(--crimson-dark)]", className)}>
        {children}
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    );
  }

  let variantStyles = "bg-crimson-gradient text-white border-transparent shadow-crimson-glow hover:brightness-110 hover:shadow-xl hover:scale-[1.02] active:scale-95";

  if (variant === "gold") {
    variantStyles = "bg-gold-gradient text-[var(--espresso)] font-bold border-transparent shadow-gold-glow hover:brightness-105 hover:shadow-xl hover:scale-[1.02] active:scale-95";
  } else if (variant === "dark") {
    variantStyles = "border-[var(--espresso)] bg-[var(--espresso)] text-[var(--warm-ivory)] hover:bg-[var(--crimson)] hover:border-[var(--crimson)] hover:text-white active:scale-95";
  } else if (variant === "light") {
    variantStyles = "border-[var(--fine-border)] bg-[var(--soft-white)] text-[var(--crimson)] hover:bg-[var(--crimson)] hover:text-white hover:border-[var(--crimson)] active:scale-95";
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm",
        variantStyles,
        className,
      )}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}

