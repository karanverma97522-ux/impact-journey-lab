import { useScrollProgress } from "@/hooks/use-reveal";
import { Shell } from "./primitives";

const LOOP = [
  { t: "Experiment", c: "var(--primary)" },
  { t: "Failed hypothesis", c: "var(--destructive)" },
  { t: "User feedback", c: "var(--info)" },
  { t: "Pivot", c: "var(--teal)" },
  { t: "New experiment", c: "var(--primary)" },
  { t: "Validated direction", c: "var(--success)" },
];

export function Failure() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const activeIndex = Math.min(LOOP.length - 1, Math.floor(progress * LOOP.length * 1.2));

  return (
    <section className="border-y border-border bg-foreground py-24 text-background md:py-32">
      <Shell>
        <div ref={ref} className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-background/55">Failure &amp; learning</p>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.025em]">
              Failure Isn't the End. It's Data.
            </h2>
            <p className="mt-5 max-w-md text-[16.5px] leading-relaxed text-background/70">
              Every experiment teaches something. Document what didn't work, understand why, and use the learning to
              build what comes next.
            </p>
          </div>

          <ol className="relative lg:col-span-7">
            <span className="absolute top-3 bottom-3 left-[6px] w-px bg-background/15" aria-hidden="true" />
            {LOOP.map((s, i) => {
              const on = i <= activeIndex;
              return (
                <li key={s.t} className="relative flex items-baseline gap-6 py-4 pl-8">
                  <span
                    className="absolute top-[22px] left-0 h-3 w-3 rounded-full border-2 transition-all duration-500"
                    style={{
                      borderColor: on ? s.c : "oklch(1 0 0 / 25%)",
                      background: on ? s.c : "transparent",
                    }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[12px] tracking-[0.14em] text-background/40">0{i + 1}</span>
                  <span
                    className="text-[clamp(1.1rem,2.2vw,1.5rem)] font-medium tracking-[-0.02em] transition-colors duration-500"
                    style={{ color: on ? "oklch(1 0 0)" : "oklch(1 0 0 / 40%)" }}
                  >
                    {s.t}
                  </span>
                  {i === 1 && on ? (
                    <span className="text-[12px] font-semibold tracking-[0.1em] text-destructive uppercase">
                      logged, not hidden
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </Shell>
    </section>
  );
}
