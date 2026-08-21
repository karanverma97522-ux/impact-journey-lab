import { Shell } from "./primitives";

const COLUMNS = [
  { title: "Platform", links: ["Explore", "Ideas", "Missions", "Opportunities", "Mentors", "Incubation"] },
  { title: "Community", links: ["Students", "Mentors", "Institutions", "Partners"] },
  { title: "Resources", links: ["Knowledge Library", "Success Stories", "Failure & Learning", "Events"] },
  { title: "Company", links: ["About", "Contact", "Privacy", "Terms"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-16 md:py-20">
      <Shell>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[16px] font-semibold tracking-[-0.02em]">Innovation Ecosystem</p>
            <p className="mt-2 text-[14.5px] text-muted-foreground">Where Ideas Become Impact.</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-[14px] text-subtle-foreground transition-colors hover:text-primary"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} Innovation Ecosystem. All rights reserved.
          </p>
          <p className="text-[13px] text-muted-foreground">An operating system for innovation.</p>
        </div>
      </Shell>
    </footer>
  );
}
