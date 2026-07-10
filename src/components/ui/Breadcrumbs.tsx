import Link from "next/link";

type Crumb = { href: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-editorial py-5 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
      <ol className="flex flex-wrap gap-2">
        <li><Link className="link-underline" href="/">Home</Link></li>
        {items.map((item) => (
          <li key={item.href} className="flex gap-2">
            <span>/</span>
            <Link className="link-underline" href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
