import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { PrimaryButton, SecondaryButton, Shell } from "./primitives";

type Node = {
  key: string;
  label: string;
  blurb: string;
  color: string;
  x: number; // % of the svg box
  y: number;
};

const NODES: Node[] = [
  { key: "idea", label: "Idea", blurb: "A problem noticed becomes something worth exploring.", color: "var(--primary)", x: 12, y: 23 },
  { key: "validate", label: "Validate", blurb: "Research, talk to people, challenge the assumption.", color: "var(--primary)", x: 29, y: 12 },
  { key: "team", label: "Team", blurb: "Find the skills the idea is missing.", color: "var(--teal)", x: 46, y: 20 },
  { key: "build", label: "Build", blurb: "Prototype, run missions, test in the real world.", color: "var(--teal)", x: 63, y: 9 },
  { key: "launch", label: "Launch", blurb: "Mentors, incubation, resources, first users.", color: "var(--orange)", x: 80, y: 17 },
  { key: "impact", label: "Impact", blurb: "A working solution in the hands of real people.", color: "var(--success)", x: 94, y: 7 },
];

const PATH = "M 12 23 C 20 23 22 12 29 12 C 37 12 39 20 46 20 C 54 20 56 9 63 9 C 71 9 73 17 80 17 C 88 17 88 7 94 7";

export function Hero() {
  const [scrollStage, setScrollStage] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const span = window.innerHeight * 1.25;
      setScrollStage(Math.min(NODES.length - 1, Math.floor((y / span) * NODES.length)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeKey = hovered ?? NODES[scrollStage]!.key;
  const activeIndex = NODES.findIndex((n) => n.key === activeKey);
  const active = NODES[activeIndex]!;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <Shell className="relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="absolute inset-0 rounded-full bg-teal"
                  style={{ animation: "pulse-ring 2.6s ease-out infinite" }}
                />
                <span className="relative h-1.5 w-1.5 rounded-full bg-teal" />
              </span>
              An operating system for innovation
            </p>
            <h1 className="mt-6 text-[clamp(2.4rem,6.2vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.035em]">
              Where Ideas
              <br />
              Become{" "}
              <span className="relative inline-block">
                Impact.
                <svg
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7 C 60 1, 140 1, 198 6"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-subtle-foreground">
              A collaborative innovation ecosystem where students discover problems, build teams, validate ideas, find
              mentors, and turn ambitious concepts into real-world ventures.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton href="#join">Start Building</PrimaryButton>
              <SecondaryButton href="#explore">Explore the Ecosystem</SecondaryButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <dl className="grid grid-cols-3 gap-6 border-t border-border pt-6 lg:pb-2">
              {[
                ["2,450+", "Students"],
                ["680+", "Ideas in motion"],
                ["16", "Incubated"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-[22px] font-semibold tracking-[-0.02em]">{v}</dt>
                  <dd className="mt-1 text-[13px] text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Interactive innovation path */}
        <div className="relative mt-14 md:mt-20">
          <div className="hidden md:block">
            <svg viewBox="0 0 100 30" className="w-full" style={{ overflow: "visible" }} aria-hidden="true">
              <path d={PATH} fill="none" stroke="var(--border)" strokeWidth="0.35" />
              <path
                d={PATH}
                fill="none"
                stroke={active.color}
                strokeWidth="0.5"
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray="100"
                strokeDashoffset={100 - ((activeIndex + 1) / NODES.length) * 100}
                style={{ transition: "stroke-dashoffset 700ms var(--ease-out-soft), stroke 400ms ease" }}
              />
              {NODES.map((n, i) => {
                const isActive = i <= activeIndex;
                const isCurrent = i === activeIndex;
                return (
                  <g key={n.key}>
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={isCurrent ? 1.7 : 1.1}
                      fill={isActive ? n.color : "var(--background)"}
                      stroke={isActive ? n.color : "var(--border)"}
                      strokeWidth="0.35"
                      style={{ transition: "all 350ms var(--ease-out-soft)" }}
                    />
                    {isCurrent ? (
                      <circle cx={n.x} cy={n.y} r="1.7" fill="none" stroke={n.color} strokeWidth="0.3" opacity="0.5">
                        <animate attributeName="r" values="1.7;4;1.7" dur="2.8s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.8s" repeatCount="indefinite" />
                      </circle>
                    ) : null}
                  </g>
                );
              })}
            </svg>

            <div className="pointer-events-none absolute inset-0">
              {NODES.map((n, i) => {
                const isActive = i <= activeIndex;
                const isCurrent = n.key === activeKey;
                return (
                  <button
                    key={n.key}
                    type="button"
                    onMouseEnter={() => setHovered(n.key)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(n.key)}
                    onBlur={() => setHovered(null)}
                    className="pointer-events-auto absolute -translate-x-1/2 text-left"
                    style={{ left: `${n.x}%`, top: `calc(${(n.y / 30) * 100}% + 14px)` }}
                  >
                    <span
                      className={cn(
                        "block text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200",
                        isActive ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {n.label}
                    </span>
                    <span
                      className={cn(
                        "mt-1.5 block w-[150px] text-[12.5px] leading-snug text-muted-foreground transition-all duration-300",
                        isCurrent ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
                      )}
                    >
                      {n.blurb}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile vertical path */}
          <ol className="relative md:hidden">
            <span className="absolute top-2 bottom-2 left-[7px] w-px bg-border" aria-hidden="true" />
            <span
              className="absolute left-[7px] w-px bg-primary transition-[height] duration-700"
              style={{ top: 8, height: `${((activeIndex + 1) / NODES.length) * 88}%` }}
              aria-hidden="true"
            />
            {NODES.map((n, i) => {
              const isActive = i <= activeIndex;
              return (
                <li key={n.key} className="relative flex gap-4 py-3.5 pl-8">
                  <span
                    className="absolute top-5 left-0 h-3.5 w-3.5 rounded-full border-2 transition-colors duration-300"
                    style={{
                      borderColor: isActive ? n.color : "var(--border)",
                      background: isActive ? n.color : "var(--background)",
                    }}
                  />
                  <div>
                    <p
                      className={cn(
                        "text-[12px] font-semibold tracking-[0.12em] uppercase",
                        isActive ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {n.label}
                    </p>
                    <p className="mt-1 text-[13.5px] leading-snug text-muted-foreground">{n.blurb}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Shell>
    </section>
  );
}
