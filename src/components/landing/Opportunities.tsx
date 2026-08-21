import { Pill, Reveal, SectionHead, Shell, TextLink } from "./primitives";

export function Opportunities() {
  return (
    <section id="opportunities" className="border-t border-border py-24 md:py-32">
      <Shell>
        <SectionHead
          eyebrow="Opportunities"
          tone="orange"
          title="Your Next Opportunity Is Waiting."
          sub="Challenges, incubation windows, mentor sessions and competitions — open right now."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <article className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-shadow duration-300 hover:shadow-soft md:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <Pill tone="orange">Challenge</Pill>
                  <span className="text-[13px] text-muted-foreground">Ends in 6 days</span>
                </div>
                <h3 className="mt-6 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-semibold tracking-[-0.02em]">
                  Healthcare innovation challenge
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-subtle-foreground">
                  Build a solution that shortens the distance between a patient and the care they need.
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
                <span className="text-[13px] text-muted-foreground">128 participants · 22 teams</span>
                <TextLink href="#join" tone="orange">
                  Join Challenge
                </TextLink>
              </div>
            </article>
          </Reveal>

          <Reveal delay={60} className="md:col-span-5">
            <article className="flex h-full flex-col justify-between rounded-2xl border border-primary/25 bg-accent p-8">
              <div>
                <Pill tone="primary">Incubation</Pill>
                <h3 className="mt-6 text-[22px] leading-snug font-semibold tracking-[-0.02em]">
                  Have a validated project?
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-subtle-foreground">
                  Applications Open for the next incubation cohort.
                </p>
              </div>
              <div className="mt-10">
                <TextLink href="#incubation">Apply</TextLink>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5">
            <article className="flex h-full flex-col justify-between rounded-2xl border border-border p-8">
              <div>
                <Pill tone="teal">Mentor session</Pill>
                <h3 className="mt-6 text-[22px] leading-snug font-semibold tracking-[-0.02em]">
                  Startup validation workshop
                </h3>
                <p className="mt-3 text-[15px] text-subtle-foreground">Friday · 4 PM</p>
              </div>
              <div className="mt-10">
                <TextLink href="#join" tone="teal">
                  Register
                </TextLink>
              </div>
            </article>
          </Reveal>

          <Reveal delay={180} className="md:col-span-7">
            <article className="flex h-full items-end justify-between gap-6 rounded-2xl border border-border bg-surface p-8">
              <div>
                <Pill>Competition</Pill>
                <h3 className="mt-6 text-[22px] leading-snug font-semibold tracking-[-0.02em]">
                  Campus innovation challenge
                </h3>
                <p className="mt-3 text-[15px] text-subtle-foreground">Prize pool · open to all departments</p>
                <div className="mt-8">
                  <TextLink href="#explore">Explore</TextLink>
                </div>
              </div>
              <svg viewBox="0 0 120 80" className="hidden h-24 w-32 shrink-0 sm:block" aria-hidden="true">
                {[0, 1, 2, 3].map((i) => (
                  <rect
                    key={i}
                    x={8 + i * 28}
                    y={70 - (i + 1) * 14}
                    width="16"
                    height={(i + 1) * 14}
                    rx="3"
                    fill={i === 3 ? "var(--orange)" : "var(--border)"}
                  />
                ))}
              </svg>
            </article>
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}
