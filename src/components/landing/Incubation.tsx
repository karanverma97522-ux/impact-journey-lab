import { useScrollProgress } from "@/hooks/use-reveal";
import { PrimaryButton, Shell } from "./primitives";

const STEPS = [
  { t: "Idea", c: "var(--primary)" },
  { t: "Validation", c: "var(--primary)" },
  { t: "Team", c: "var(--teal)" },
  { t: "Mission", c: "var(--primary)" },
  { t: "Prototype", c: "var(--teal)" },
  { t: "Incubation", c: "var(--orange)" },
];

export function Incubation() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const activeIndex = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length * 1.2));

  return (
    <section id="incubation" className="border-t border-border py-24 md:py-32">
      <Shell>
        <div ref={ref} className="overflow-hidden rounded-3xl border border-primary/20 bg-accent px-6 py-14 md:px-14 md:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">Incubation</p>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.025em]">
              When an Idea Is Ready to Grow.
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-subtle-foreground">
              Promising projects can move beyond experimentation into structured incubation with mentors, resources,
              partnerships and ecosystem support.
            </p>
          </div>

          <div className="mt-14">
            <div className="hidden items-center md:flex">
              {STEPS.map((s, i) => {
                const on = i <= activeIndex;
                return (
                  <div key={s.t} className="flex flex-1 items-center last:flex-none">
                    <div className="flex flex-col items-start gap-3">
                      <span
                        className="h-3 w-3 rounded-full border-2 transition-all duration-500"
                        style={{
                          borderColor: on ? s.c : "var(--primary-focus)",
                          background: on ? s.c : "transparent",
                          transform: i === activeIndex ? "scale(1.3)" : "scale(1)",
                        }}
                      />
                      <span
                        className="text-[12.5px] font-semibold tracking-[0.1em] uppercase transition-colors duration-500"
                        style={{ color: on ? "var(--foreground)" : "var(--muted-foreground)" }}
                      >
                        {s.t}
                      </span>
                    </div>
                    {i < STEPS.length - 1 ? (
                      <span className="mx-3 mb-7 h-px flex-1 bg-primary/20">
                        <span
                          className="block h-px transition-[width] duration-500"
                          style={{ width: i < activeIndex ? "100%" : "0%", background: "var(--primary)" }}
                        />
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <ol className="grid grid-cols-2 gap-4 md:hidden">
              {STEPS.map((s, i) => {
                const on = i <= activeIndex;
                return (
                  <li key={s.t} className="flex items-center gap-3">
                    <span
                      className="h-2.5 w-2.5 rounded-full transition-colors duration-500"
                      style={{ background: on ? s.c : "var(--primary-focus)" }}
                    />
                    <span
                      className="text-[13px] font-semibold tracking-[0.06em] uppercase"
                      style={{ color: on ? "var(--foreground)" : "var(--muted-foreground)" }}
                    >
                      {s.t}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-primary/15 pt-8">
            <PrimaryButton href="#join">Explore Incubation</PrimaryButton>
            <p className="text-[13.5px] text-muted-foreground">
              Next cohort applications open · <span className="font-semibold text-orange">16 projects incubated</span>
            </p>
          </div>
        </div>
      </Shell>
    </section>
  );
}
