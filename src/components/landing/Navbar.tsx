import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#top" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Explore", href: "#explore" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Incubation", href: "#incubation" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive("#" + hit.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 md:pt-4">
      <nav
        className={cn(
          "w-full max-w-[1240px] rounded-2xl border border-border/80 bg-background/72 backdrop-blur-xl",
          "transition-[padding,box-shadow,background-color] duration-300",
          scrolled ? "px-4 py-2 shadow-soft md:px-5" : "px-4 py-3 md:px-6",
        )}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-2.5">
            <LogoMark compact={scrolled} />
            <span
              className={cn(
                "font-semibold tracking-[-0.02em] transition-all duration-300",
                scrolled ? "text-[14px]" : "text-[15px]",
              )}
            >
              Innovation Ecosystem
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors",
                    active === l.href
                      ? "bg-accent text-primary"
                      : "text-subtle-foreground hover:bg-surface hover:text-foreground",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#join"
              className="rounded-lg px-3 py-2 text-[13.5px] font-semibold text-subtle-foreground transition-colors hover:text-foreground"
            >
              Sign In
            </a>
            <a
              href="#join"
              className={cn(
                "group inline-flex items-center gap-2 rounded-xl bg-primary text-[13.5px] font-semibold text-primary-foreground",
                "transition-all duration-200 hover:shadow-lift",
                scrolled ? "h-9 px-4" : "h-10 px-4.5",
              )}
            >
              Join the Ecosystem
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-foreground transition-transform duration-200",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-foreground transition-transform duration-200",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>

        {open ? (
          <div className="mt-3 border-t border-border pt-3 md:hidden">
            <ul className="grid gap-0.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-[15px] font-medium text-subtle-foreground hover:bg-surface"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid gap-2">
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-border text-sm font-semibold"
              >
                Sign In
              </a>
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
              >
                Join the Ecosystem →
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

function LogoMark({ compact }: { compact: boolean }) {
  return (
    <span
      className={cn(
        "relative grid place-items-center rounded-[10px] border border-border bg-surface transition-all duration-300",
        compact ? "h-7 w-7" : "h-8 w-8",
      )}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <circle cx="6" cy="18" r="2.4" fill="var(--primary)" />
        <circle cx="18" cy="6" r="2.4" fill="var(--teal)" />
        <circle cx="18" cy="18" r="1.6" fill="var(--orange)" />
        <path d="M6 18 L18 6" stroke="var(--foreground)" strokeWidth="1" opacity="0.35" />
        <path d="M6 18 L18 18" stroke="var(--foreground)" strokeWidth="1" opacity="0.2" />
      </svg>
    </span>
  );
}
