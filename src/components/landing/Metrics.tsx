import { useCountUp, useReveal } from "@/hooks/use-reveal";
import { Shell } from "./primitives";

const METRICS = [
  { v: 2450, suffix: "+", l: "Students" },
  { v: 680, suffix: "+", l: "Ideas" },
  { v: 320, suffix: "+", l: "Mentors" },
  { v: 124, suffix: "+", l: "Missions" },
  { v: 16, suffix: "", l: "Incubated projects" },
];

export function Metrics() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.35);

  return (
    <section className="border-t border-border py-16 md:py-20">
      <Shell>
        <div ref={ref} className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
          {METRICS.map((m) => (
            <Metric key={m.l} {...m} visible={visible} />
          ))}
        </div>
      </Shell>
    </section>
  );
}

function Metric({ v, suffix, l, visible }: { v: number; suffix: string; l: string; visible: boolean }) {
  const n = useCountUp(v, visible);
  return (
    <div>
      <p className="text-[clamp(1.6rem,3vw,2rem)] font-semibold tracking-[-0.03em] tabular-nums">
        {n.toLocaleString()}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-1.5 text-[13px] text-muted-foreground">{l}</p>
    </div>
  );
}
