import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-editorial flex min-h-screen flex-col justify-center py-32">
      <p className="eyebrow">404</p>
      <h1 className="serif mt-5 text-[clamp(4rem,10vw,8rem)] leading-none text-[var(--espresso)]">This story wandered.</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">The page you are looking for is no longer here, but the portfolio and consultation form are close by.</p>
      <div className="mt-8 flex gap-5">
        <Link className="link-underline text-xs font-semibold uppercase tracking-[0.18em]" href="/portfolio">Portfolio</Link>
        <Link className="link-underline text-xs font-semibold uppercase tracking-[0.18em]" href="/contact">Contact</Link>
      </div>
    </section>
  );
}
