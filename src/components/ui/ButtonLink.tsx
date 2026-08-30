import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "text";
  className?: string;
};

export function ButtonLink({ href, children, variant = "dark", className }: ButtonLinkProps) {
  if (variant === "text") {
    return (
      <Link href={href} className={cn("link-underline text-sm font-semibold uppercase tracking-[0.18em]", className)}>
        {children}
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all shadow-sm",
        variant === "dark"
          ? "border-[var(--espresso)] bg-[var(--espresso)] text-[var(--warm-ivory)] hover:bg-transparent hover:text-[var(--espresso)]"
          : "border-[rgba(247,243,236,0.62)] text-[var(--warm-ivory)] hover:bg-[var(--warm-ivory)] hover:text-[var(--espresso)]",
        className,
      )}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}
