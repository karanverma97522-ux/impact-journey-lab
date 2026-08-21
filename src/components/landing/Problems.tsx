import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHead, Shell } from "./primitives";

const PROBLEMS = [
  {
    n: "01",
    domain: "Healthcare",
    q: "How might we reduce hospital waiting times?",
    meta: "42 people exploring",
    c: "var(--primary)",
  },
  {
    n: "02",
    domain: "Sustainability",
    q: "How might we reduce campus waste?",
    meta: "27 people exploring",
    c: "var(--teal)",
  },
  {
    n: "03",
    domain: "Agriculture",
    q: "How might we help farmers detect crop disease?",
    meta: "35 people exploring",
    c: "var(--orange)",
  },
];

export function Problems() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="explore" className="border-t border-border bg-surface py-24 md:py-32">
      <Shell>
        <SectionHead
          eyebrow="Begin here"
          title="Start With a Problem."
          sub="Great innovation doesn't always begin with an idea. Sometimes it begins with noticing something that shouldn't work this way."
        />

        <div className="mt-14 border-t border-border">
          {PROBLEMS.map((p, i) => {
            const on = hover === i;
            return (
              <Reveal key={p.n} delay={i * 70}>
                <a
                  href="#explore"
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(i)}
                  onBlur={() => setHover(null)}
                  className={cn(
                    "group relative block border-b border-border py-9 transition-colors duration-300 md:py-11",
                    on ? "bg-background" : "bg-transparent",
                  )}
                >
                  <span
                    className="absolute top-0 left-0 h-px transition-[width] duration-500"
                    style={{ width: on ? "100%" : "0%", background: p.c }}
                    aria-hidden="true"
                  />
                  <div className="grid items-center gap-4 px-2 md:grid-cols-12 md:px-6">
                    <div className="md:col-span-2 flex items-center gap-4">
                      <span
                        className="font-mono text-[13px] font-semibold tracking-[0.16em] transition-colors duration-300"
                        style={{ color: on ? p.c : "var(--muted-foreground)" }}
                      >
                        {on ? "→" : p.n}
                      </span>
                      <span className="text-[12px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                        {p.domain}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "text-[clamp(1.35rem,2.6vw,1.9rem)] leading-[1.2] font-semibold tracking-[-0.02em] transition-transform duration-500 md:col-span-8",
                        on && "md:translate-x-2",
                      )}
                    >
                      {p.q}
                    </h3>
                    <div className="md:col-span-2 md:text-right">
                      <span
                        className={cn(
                          "block text-[13px] font-semibold transition-all duration-300",
                          on ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
                        )}
                        style={{ color: p.c }}
                      >
                        Explore Problem →
                      </span>
                      <span
                        className={cn(
                          "mt-1 block text-[12.5px] text-muted-foreground transition-opacity duration-300",
                          on ? "opacity-100" : "opacity-60",
                        )}
                      >
                        {p.meta}
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}
