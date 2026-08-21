import { Reveal, SectionHead, Shell, TextLink } from "./primitives";

export function Roles() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <Shell>
        <SectionHead
          eyebrow="Who it's for"
          title="One Ecosystem. Many Roles."
          sub="Four different experiences, one shared innovation journey."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {/* Students — indigo led */}
          <Reveal className="relative bg-background p-8 md:p-10">
            <span className="absolute top-0 left-0 h-full w-1 bg-primary" aria-hidden="true" />
            <p className="eyebrow text-primary">Students</p>
            <h3 className="mt-4 text-[24px] font-semibold tracking-[-0.02em]">Discover. Collaborate. Build.</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-subtle-foreground">
              Create ideas, join teams, complete missions and develop your innovation journey.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Ideas", "Missions", "Teams", "Portfolio"].map((t) => (
                <span key={t} className="rounded-full bg-accent px-2.5 py-1 text-[11.5px] font-semibold text-primary">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <TextLink href="#join">Explore as a Student</TextLink>
            </div>
          </Reveal>

          {/* Mentors — teal, quiet numbered list */}
          <Reveal delay={60} className="bg-surface p-8 md:p-10">
            <p className="eyebrow text-teal">Mentors</p>
            <h3 className="mt-4 text-[24px] font-semibold tracking-[-0.02em]">Guide the next generation.</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-subtle-foreground">
              Review projects, share expertise and help teams overcome challenges.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] text-subtle-foreground">
              {["Review project submissions", "Run focused sessions", "Answer team blockers"].map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="font-mono text-[12px] text-teal">0{i + 1}</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <TextLink href="#join" tone="teal">
                Become a Mentor
              </TextLink>
            </div>
          </Reveal>

          {/* Incubators — orange signal, metric strip */}
          <Reveal delay={120} className="bg-surface p-8 md:p-10">
            <p className="eyebrow text-orange">Incubators</p>
            <h3 className="mt-4 text-[24px] font-semibold tracking-[-0.02em]">Find what deserves to grow.</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-subtle-foreground">
              Discover promising projects, support teams and move ideas toward incubation.
            </p>
            <dl className="mt-7 grid grid-cols-3 border-t border-border pt-4">
              {[
                ["48", "Ready to pitch"],
                ["16", "In incubation"],
                ["9", "Domains"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-[20px] font-semibold tracking-[-0.02em]">{v}</dt>
                  <dd className="mt-0.5 text-[12px] text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <TextLink href="#incubation" tone="orange">
                Explore Incubation
              </TextLink>
            </div>
          </Reveal>

          {/* Institutions — network diagram */}
          <Reveal delay={180} className="bg-background p-8 md:p-10">
            <p className="eyebrow">Institutions &amp; Partners</p>
            <h3 className="mt-4 text-[24px] font-semibold tracking-[-0.02em]">Build an innovation ecosystem.</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-subtle-foreground">
              Connect students, mentors, opportunities and incubation.
            </p>
            <svg viewBox="0 0 200 70" className="mt-6 h-20 w-full" aria-hidden="true">
              <line x1="20" y1="55" x2="100" y2="18" stroke="var(--border)" strokeWidth="1" />
              <line x1="100" y1="18" x2="180" y2="55" stroke="var(--border)" strokeWidth="1" />
              <line x1="20" y1="55" x2="180" y2="55" stroke="var(--border)" strokeWidth="1" />
              <line x1="100" y1="18" x2="100" y2="55" stroke="var(--border)" strokeWidth="1" />
              <circle cx="100" cy="18" r="5" fill="var(--primary)" />
              <circle cx="20" cy="55" r="4" fill="var(--teal)" />
              <circle cx="180" cy="55" r="4" fill="var(--orange)" />
              <circle cx="100" cy="55" r="4" fill="var(--foreground)" opacity="0.75" />
            </svg>
            <div className="mt-6">
              <TextLink href="#join">Partner With Us</TextLink>
            </div>
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}
