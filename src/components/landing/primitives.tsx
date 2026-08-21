import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "header";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-6 md:px-10", className)}>{children}</div>;
}

export function Eyebrow({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "primary" | "orange" | "teal" }) {
  const tones = {
    muted: "text-muted-foreground",
    primary: "text-primary",
    orange: "text-orange",
    teal: "text-teal",
  } as const;
  return (
    <p className={cn("eyebrow flex items-center gap-3", tones[tone])}>
      <span className="inline-block h-px w-6 bg-current opacity-40" />
      {children}
    </p>
  );
}

export function PrimaryButton({
  children,
  href = "#",
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground",
        "transition-[transform,background-color,box-shadow] duration-200 shadow-soft",
        "hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0 active:bg-primary/90",
        className,
      )}
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
    </a>
  );
}

export function SecondaryButton({
  children,
  href = "#",
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-semibold text-foreground",
        "transition-colors duration-200 hover:border-primary/40 hover:bg-accent hover:text-primary",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function TextLink({
  children,
  href = "#",
  className,
  tone = "primary",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  tone?: "primary" | "teal" | "orange" | "foreground";
}) {
  const tones = {
    primary: "text-primary",
    teal: "text-teal",
    orange: "text-orange",
    foreground: "text-foreground",
  } as const;
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80",
        tones[tone],
        className,
      )}
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
    </a>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "primary" | "teal" | "orange" | "success" | "error";
}) {
  const tones = {
    neutral: "border-border text-muted-foreground bg-surface",
    primary: "border-primary/20 text-primary bg-accent",
    teal: "border-teal/25 text-teal bg-teal/8",
    orange: "border-orange/25 text-orange bg-orange/8",
    success: "border-success/25 text-success bg-success/8",
    error: "border-destructive/25 text-destructive bg-destructive/8",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "left",
  tone = "muted",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  tone?: "muted" | "primary" | "orange" | "teal";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <div className={cn(align === "center" && "flex justify-center")}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </div>
      <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-balance">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-[17px] leading-relaxed text-subtle-foreground">{sub}</p> : null}
    </Reveal>
  );
}
