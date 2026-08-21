import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/use-reveal";
import { SectionHead, Shell } from "./primitives";

const STAGES = [
  { n: "01", t: "Ideate", d: "Discover meaningful problems and turn observations into ideas.", c: "var(--primary)" },
  { n: "02", t: "Validate", d: "Research, experiment and challenge assumptions.", c: "var(--primary)" },
  { n: "03", t: "Collaborate", d: "Find people with the skills needed to build your team.", c: "var(--teal)" },
  { n: "04", t: "Build", d: "Create prototypes, complete missions and test solutions.", c: "var(--teal)" },
  { n: "05", t: "Launch", d: "Move promising projects toward mentorship and incubation.", c: "var(--orange)" },
];

export function Stages() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const activeIndex = Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length * 1.15));

  return (
    <section id="how-it-works" className="border-t border-border py-24 md:py-32">
      <Shell>
        <SectionHead
          eyebrow="The journey"
          title="From a Thought to Something Real."
          sub="One continuous path — not five disconnected steps. Scroll, and the ecosystem builds the idea with you."
        />

        <div ref={ref} className="relative mt-16 md:mt-20">
          <div className="absolute top-[13px] right-0 left-0 hidden h-px bg-border md:block" aria-hidden="true" />
          <div
            className="absolute top-[13px] left-0 hidden h-px bg-primary transition-[width] duration-700 md:block"
            style={{ width: `${((activeIndex + 1) / STAGES.length) * 100}%` }}
            aria-hidden="true"
          />
          <span
            className="absolute top-[7px] left-0 hidden h-[13px] w-px bg-border md:block"
            aria-hidden="true"
          />

          <ol className="grid gap-10 md:grid-cols-5 md:gap-6">
            {STAGES.map((s, i) => {
              const active = i <= activeIndex;
              const current = i === activeIndex;
              return (
                <li key={s.n} className="relative md:pt-10">
                  <span
                    className="absolute top-[7px] left-0 hidden h-3 w-3 rounded-full border-2 transition-all duration-500 md:block"
                    style={{
                      borderColor: active ? s.c : "var(--border)",
                      background: active ? s.c : "var(--background)",
                      transform: current ? "scale(1.25)" : "scale(1)",
                    }}
                    aria-hidden="true"
                  />
                  <p
                    className={cn(
                      "font-mono text-[12px] font-semibold tracking-[0.16em] transition-colors duration-500",
                      active ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {s.n}
                  </p>
                  <h3
                    className={cn(
                      "mt-2 text-[21px] font-semibold tracking-[-0.015em] transition-colors duration-500",
                      active ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {s.t}
                  </h3>
                  <p
                    className={cn(
                      "mt-2.5 max-w-[26ch] text-[14.5px] leading-relaxed transition-opacity duration-500",
                      active ? "text-subtle-foreground opacity-100" : "text-muted-foreground opacity-60",
                    )}
                  >
                    {s.d}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </Shell>
    </section>
  );
}
