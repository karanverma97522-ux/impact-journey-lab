import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { JOURNEY, type Stage } from "@/lib/mock/data";
import { Check } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  sub,
  actions,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
      <div className="min-w-0">
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-[clamp(1.5rem,2.6vw,2rem)] font-semibold tracking-[-0.02em] text-foreground">
          {title}
        </h1>
        {sub ? <p className="mt-2 max-w-2xl text-sm text-subtle-foreground">{sub}</p> : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}

export function Panel({
  title,
  action,
  children,
  className,
  tone = "plain",
}: {
  title?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: "plain" | "surface";
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-border",
        tone === "surface" ? "bg-surface" : "bg-card",
        className,
      )}
    >
      {title ? (
        <header className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
          <h2 className="text-sm font-semibold tracking-[-0.01em] text-foreground">{title}</h2>
          {action}
        </header>
      ) : null}
      <div className="p-5">{children}</div>
    </section>
  );
}

const toneMap = {
  neutral: "border-border bg-surface text-muted-foreground",
  indigo: "border-primary/20 bg-accent text-primary",
  teal: "border-teal/25 bg-teal/10 text-teal",
  orange: "border-orange/25 bg-orange/10 text-orange",
  green: "border-success/25 bg-success/10 text-success",
  red: "border-destructive/25 bg-destructive/10 text-destructive",
} as const;

export type Tone = keyof typeof toneMap;

export function Tag({ children, tone = "neutral", className }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function statusTone(status: string): Tone {
  if (["Incubated", "Evidence collected"].includes(status)) return "green";
  if (["Incubation Requested", "Under Review", "Submitted"].includes(status)) return "orange";
  if (["Validating", "Researching", "Building"].includes(status)) return "indigo";
  if (["Team Forming"].includes(status)) return "teal";
  return "neutral";
}

export function ProgressBar({ value, tone = "indigo" }: { value: number; tone?: "indigo" | "teal" | "orange" }) {
  const bar = { indigo: "bg-primary", teal: "bg-teal", orange: "bg-orange" }[tone];
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
      <div
        className={cn("h-full rounded-full transition-[width] duration-500", bar)}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export function StageTrack({ current, compact = false }: { current: Stage; compact?: boolean }) {
  const index = JOURNEY.indexOf(current);
  return (
    <ol className={cn("flex w-full items-center", compact ? "gap-1" : "gap-2")}>
      {JOURNEY.map((stage, i) => {
        const done = i < index;
        const active = i === index;
        return (
          <li key={stage} className="flex min-w-0 flex-1 items-center gap-2">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold",
                    done && "border-primary bg-primary text-primary-foreground",
                    active && "border-primary bg-accent text-primary",
                    !done && !active && "border-border bg-background text-muted-foreground",
                  )}
                >
                  {done ? <Check className="size-3" /> : i + 1}
                </span>
                {!compact ? (
                  <span
                    className={cn(
                      "truncate text-xs font-medium",
                      active ? "text-primary" : done ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {stage}
                  </span>
                ) : null}
              </div>
              <div className={cn("h-0.5 rounded-full", done || active ? "bg-primary/60" : "bg-border")} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function Avatar({ initials, className }: { initials: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-[11px] font-semibold text-subtle-foreground",
        className,
      )}
    >
      {initials}
    </span>
  );
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface px-6 py-12 text-center">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{body}</p>
      {action ? <div className="mt-5 flex justify-center">{action}</div> : null}
    </div>
  );
}
