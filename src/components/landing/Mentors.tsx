import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHead, Shell, TextLink } from "./primitives";

const MENTORS = [
  { name: "Dr. Ananya Rao", expertise: "Clinical systems design", domain: "Healthcare", projects: 14, open: true, detail: "Helps teams pressure-test healthcare workflows before building anything." },
  { name: "Kabir Menon", expertise: "Product & validation", domain: "Technology", projects: 22, open: true, detail: "Runs validation sprints: 20 interviews before a single line of code." },
  { name: "Sara Iyer", expertise: "Agritech field research", domain: "Agriculture", projects: 9, open: false, detail: "Connects student teams with farm cooperatives for real field testing." },
  { name: "Rohit Sen", expertise: "Climate & operations", domain: "Climate", projects: 11, open: true, detail: "Focus on unit economics for sustainability projects on campus scale." },
  { name: "Meera Joshi", expertise: "Venture & incubation", domain: "Social Impact", projects: 18, open: false, detail: "Guides projects through the transition from experiment to venture." },
];

export function Mentors() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <Shell>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Mentor network"
            tone="teal"
            title="You Don't Have to Build Alone."
            sub="Practitioners who have shipped things, available to the teams that need them."
          />
          <div className="pb-1">
            <TextLink href="#join" tone="teal">
              Meet the Mentors
            </TextLink>
          </div>
        </div>

        <div className="-mx-6 mt-12 overflow-x-auto px-6 pb-4 md:-mx-10 md:px-10">
          <ul className="flex min-w-max gap-4">
            {MENTORS.map((m, i) => {
              const on = hover === i;
              return (
                <li key={m.name}>
                  <article
                    tabIndex={0}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover(i)}
                    onBlur={() => setHover(null)}
                    className={cn(
                      "flex h-[260px] w-[280px] flex-col justify-between rounded-2xl border bg-background p-6 transition-all duration-300",
                      on ? "-translate-y-1 border-teal/35 shadow-soft" : "border-border",
                    )}
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className="grid h-9 w-9 place-items-center rounded-full border border-border text-[13px] font-semibold"
                          style={{ color: on ? "var(--teal)" : "var(--muted-foreground)" }}
                        >
                          {m.name
                            .split(" ")
                            .slice(-2)
                            .map((p) => p[0])
                            .join("")}
                        </span>
                        <div>
                          <p className="text-[15px] font-semibold tracking-[-0.01em]">{m.name}</p>
                          <p className="text-[12.5px] text-muted-foreground">{m.domain}</p>
                        </div>
                      </div>
                      <p className="mt-5 text-[14px] text-subtle-foreground">{m.expertise}</p>
                      <p
                        className={cn(
                          "mt-2 text-[13px] leading-snug text-muted-foreground transition-all duration-300",
                          on ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
                        )}
                      >
                        {m.detail}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-border pt-4 text-[12.5px]">
                      <span className="text-muted-foreground">{m.projects} projects supported</span>
                      <span className={cn("font-semibold", m.open ? "text-success" : "text-muted-foreground")}>
                        {m.open ? "Available" : "Waitlist"}
                      </span>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </Shell>
    </section>
  );
}
