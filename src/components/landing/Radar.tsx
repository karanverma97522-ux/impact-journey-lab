import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHead, Shell, TextLink } from "./primitives";

type Idea = {
  id: string;
  title: string;
  domain: string;
  validation: string;
  team: string;
  activity: string;
  x: number;
  y: number;
  r: number;
  c: string;
  links: string[];
};

const IDEAS: Idea[] = [
  { id: "a", title: "Smart Healthcare Queue", domain: "Healthcare", validation: "42 interviews", team: "5 members", activity: "High", x: 32, y: 34, r: 7, c: "var(--primary)", links: ["b", "d"] },
  { id: "b", title: "Crop disease detection", domain: "Agriculture", validation: "18 field tests", team: "4 members", activity: "High", x: 63, y: 26, r: 6, c: "var(--teal)", links: ["e"] },
  { id: "c", title: "Campus waste routing", domain: "Climate", validation: "9 experiments", team: "6 members", activity: "Medium", x: 24, y: 68, r: 5.5, c: "var(--success)", links: ["a", "f"] },
  { id: "d", title: "Peer tutoring exchange", domain: "Education", validation: "26 surveys", team: "3 members", activity: "Medium", x: 52, y: 62, r: 5, c: "var(--orange)", links: ["c"] },
  { id: "e", title: "Low-cost water sensor", domain: "Technology", validation: "12 prototypes", team: "4 members", activity: "High", x: 78, y: 56, r: 6, c: "var(--primary)", links: ["b", "d"] },
  { id: "f", title: "Accessible navigation", domain: "Social Impact", validation: "31 interviews", team: "5 members", activity: "Rising", x: 44, y: 84, r: 4.5, c: "var(--purple)", links: ["a"] },
];

const DOMAINS = ["Healthcare", "Agriculture", "Education", "Climate", "Technology", "Social Impact"];

export function Radar() {
  const [active, setActive] = useState<string | null>(null);
  const current = IDEAS.find((i) => i.id === active) ?? null;
  const related = current ? new Set([current.id, ...current.links]) : null;

  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <Shell>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Innovation radar"
              title="Ideas Are Everywhere. Potential Is Not."
              sub="Discover ideas showing strong activity, validation and collaboration signals. Connections appear where ideas share problems, skills, teams, domains or mentors."
            />

            <ul className="mt-8 flex flex-wrap gap-2">
              {DOMAINS.map((d) => (
                <li
                  key={d}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition-colors duration-300",
                    current?.domain === d
                      ? "border-primary/30 bg-accent text-primary"
                      : "border-border bg-background text-muted-foreground",
                  )}
                >
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-8 min-h-[130px] rounded-2xl border border-border bg-background p-6">
              {current ? (
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: current.c }}>
                    {current.domain}
                  </p>
                  <h3 className="mt-2 text-[19px] font-semibold tracking-[-0.015em]">{current.title}</h3>
                  <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-4 text-[13px]">
                    {[
                      ["Validation", current.validation],
                      ["Team", current.team],
                      ["Activity", current.activity],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-[11px] tracking-[0.1em] text-muted-foreground uppercase">{k}</dt>
                        <dd className="mt-1 font-medium">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : (
                <p className="text-[14.5px] leading-relaxed text-muted-foreground">
                  Hover or focus a node to read its idea, validation depth, team and current activity.
                </p>
              )}
            </div>

            <div className="mt-7">
              <TextLink href="#explore">Explore Innovation Radar</TextLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-background p-4 sm:p-8">
              <svg viewBox="0 0 100 100" className="w-full" role="img" aria-label="Interactive network of ideas across domains">
                {[18, 32, 44].map((r) => (
                  <circle key={r} cx="50" cy="55" r={r} fill="none" stroke="var(--border)" strokeWidth="0.3" />
                ))}
                <line x1="6" y1="55" x2="94" y2="55" stroke="var(--border)" strokeWidth="0.3" />
                <line x1="50" y1="11" x2="50" y2="99" stroke="var(--border)" strokeWidth="0.3" />

                {IDEAS.flatMap((n) =>
                  n.links.map((l) => {
                    const t = IDEAS.find((i) => i.id === l);
                    if (!t) return null;
                    const lit = related ? related.has(n.id) && related.has(t.id) : false;
                    return (
                      <line
                        key={n.id + l}
                        x1={n.x}
                        y1={n.y}
                        x2={t.x}
                        y2={t.y}
                        stroke={lit ? current!.c : "var(--border)"}
                        strokeWidth={lit ? 0.5 : 0.3}
                        opacity={related && !lit ? 0.35 : 1}
                        style={{ transition: "all 300ms ease" }}
                      />
                    );
                  }),
                )}

                {IDEAS.map((n) => {
                  const lit = !related || related.has(n.id);
                  const isCurrent = current?.id === n.id;
                  return (
                    <g
                      key={n.id}
                      tabIndex={0}
                      role="button"
                      aria-label={`${n.title}, ${n.domain}`}
                      onMouseEnter={() => setActive(n.id)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(n.id)}
                      onBlur={() => setActive(null)}
                      style={{ cursor: "pointer", transition: "opacity 300ms ease", opacity: lit ? 1 : 0.3 }}
                    >
                      <circle cx={n.x} cy={n.y} r={n.r + 4} fill="transparent" />
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={isCurrent ? n.r + 1.5 : n.r}
                        fill={n.c}
                        opacity={isCurrent ? 0.18 : 0.1}
                        style={{ transition: "r 250ms ease" }}
                      />
                      <circle cx={n.x} cy={n.y} r={isCurrent ? 2.6 : 2} fill={n.c} style={{ transition: "r 250ms ease" }} />
                      <text
                        x={n.x}
                        y={n.y - n.r - 2.5}
                        textAnchor="middle"
                        fontSize="2.7"
                        fill="var(--muted-foreground)"
                        style={{ opacity: isCurrent ? 1 : 0.75, transition: "opacity 250ms ease" }}
                      >
                        {n.domain}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
