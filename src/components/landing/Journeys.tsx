import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHead, Shell, TextLink } from "./primitives";

const JOURNEYS = [
  {
    title: "Smart Healthcare Queue",
    domain: "Healthcare",
    from: "Waiting rooms with no visibility",
    to: "Pilot in two clinics",
    steps: ["Problem", "Research", "Team", "Experiment", "Prototype", "Incubation"],
    c: "var(--primary)",
  },
  {
    title: "Crop Disease Detection",
    domain: "Agriculture",
    from: "Farmers diagnosing by guesswork",
    to: "Field-tested with 40 farms",
    steps: ["Problem", "Research", "Team", "Experiment", "Prototype", "Incubation"],
    c: "var(--teal)",
  },
  {
    title: "Campus Waste Routing",
    domain: "Climate",
    from: "Overflowing bins, empty trucks",
    to: "31% fewer collection trips",
    steps: ["Problem", "Research", "Team", "Experiment", "Prototype", "Incubation"],
    c: "var(--success)",
  },
];

export function Journeys() {
  const [open, setOpen] = useState(0);

  return (
    <section className="border-t border-border py-24 md:py-32">
      <Shell>
        <SectionHead
          eyebrow="Project journeys"
          title="Ideas That Went Further."
          sub="Not testimonials — transformations. Each of these started as a sentence someone wrote down."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {JOURNEYS.map((j, i) => {
            const isOpen = open === i;
            return (
              <div key={j.title} className="bg-background">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  onMouseEnter={() => setOpen(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-7 text-left md:px-10"
                >
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: j.c }}>
                      {j.domain}
                    </p>
                    <h3 className="mt-2 text-[clamp(1.2rem,2.4vw,1.6rem)] font-semibold tracking-[-0.02em]">
                      {j.title}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 text-[13px] font-semibold text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-90",
                    )}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-8 md:px-10">
                      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
                        {j.steps.map((s, si) => (
                          <div key={s} className="flex items-center gap-3">
                            <span
                              className="rounded-lg border px-3 py-1.5 text-[12.5px] font-medium transition-all duration-500"
                              style={{
                                borderColor: isOpen ? j.c : "var(--border)",
                                color: si === j.steps.length - 1 ? j.c : "var(--subtle-foreground)",
                                transitionDelay: `${si * 70}ms`,
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? "none" : "translateY(6px)",
                              }}
                            >
                              {s}
                            </span>
                            {si < j.steps.length - 1 ? (
                              <span className="hidden text-muted-foreground sm:inline" aria-hidden="true">
                                →
                              </span>
                            ) : null}
                          </div>
                        ))}
                      </div>
                      <div className="mt-7 grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
                        <p className="text-[14.5px] text-muted-foreground">
                          <span className="mr-2 text-[11px] tracking-[0.12em] uppercase">Before</span>
                          {j.from}
                        </p>
                        <p className="text-[14.5px] text-subtle-foreground">
                          <span className="mr-2 text-[11px] tracking-[0.12em] uppercase">Now</span>
                          {j.to}
                        </p>
                      </div>
                      <div className="mt-6">
                        <TextLink href="#explore">Read the Journey</TextLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}
