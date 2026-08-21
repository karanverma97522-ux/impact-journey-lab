import { PrimaryButton, Reveal, SecondaryButton, Shell } from "./primitives";

export function FinalCta() {
  return (
    <section id="join" className="relative overflow-hidden border-t border-border py-28 md:py-36">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <Shell className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-center">Begin</p>
          <h2 className="mt-6 text-[clamp(2rem,4.4vw,3rem)] leading-[1.12] font-bold tracking-[-0.03em]">
            Your Next Idea Could Start Here.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-subtle-foreground">
            You don't need a startup.
            <br />
            You don't need a perfect idea.
            <br />
            You just need a problem worth exploring.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <PrimaryButton href="#join">Join the Innovation Ecosystem</PrimaryButton>
            <SecondaryButton href="#explore">Explore Ideas</SecondaryButton>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
