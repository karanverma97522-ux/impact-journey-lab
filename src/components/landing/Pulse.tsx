import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHead, Shell, TextLink } from "./primitives";

const EVENTS = [
  { kind: "New idea", title: "AI-powered crop disease detection", meta: "Posted 2 hours ago", c: "var(--primary)" },
  { kind: "Mission started", title: "Reduce campus waste", meta: "12 students collaborating", c: "var(--teal)" },
  { kind: "Project incubated", title: "Smart Healthcare Queue", meta: "Entering incubation", c: "var(--orange)" },
  { kind: "Mentor session", title: "Startup Validation Workshop", meta: "34 students joined", c: "var(--success)" },
  { kind: "Validation", title: "Low-cost water quality sensor", meta: "18 interviews completed", c: "var(--primary)" },
  { kind: "Team formed", title: "Accessible campus navigation", meta: "5 skills matched", c: "var(--teal)" },
];

export function Pulse() {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setPulseIndex((i) => (i + 1) % EVENTS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <Shell>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Live ecosystem"
              tone="teal"
              title="Innovation Is Already Happening."
              sub="Not a feed — a pulse. Every signal below is a real movement inside the ecosystem: an idea posted, a mission joined, a project stepping into incubation."
            />
            <div className="mt-8">
              <TextLink href="#explore" tone="teal">
                Watch the ecosystem live
              </TextLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-border">
              {EVENTS.map((e, i) => {
                const live = i === pulseIndex;
                return (
                  <li
                    key={e.title}
                    className={cn(
                      "flex items-center gap-5 border-b border-border py-5 transition-colors duration-500",
                      live && "bg-background",
                    )}
                  >
                    <span className="relative flex h-2 w-2 shrink-0">
                      {live ? (
                        <span
                          className="absolute inset-0 rounded-full"
                          style={{ background: e.c, animation: "pulse-ring 2.4s ease-out infinite" }}
                        />
                      ) : null}
                      <span
                        className="relative h-2 w-2 rounded-full transition-opacity duration-500"
                        style={{ background: e.c, opacity: live ? 1 : 0.3 }}
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className="text-[11px] font-semibold tracking-[0.14em] uppercase"
                        style={{ color: live ? e.c : "var(--muted-foreground)" }}
                      >
                        {e.kind}
                      </p>
                      <p className="mt-1 truncate text-[16px] font-medium tracking-[-0.01em]">{e.title}</p>
                    </div>
                    <span className="shrink-0 text-[12.5px] text-muted-foreground">{e.meta}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Shell>
    </section>
  );
}
