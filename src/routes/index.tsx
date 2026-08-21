import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stages } from "@/components/landing/Stages";
import { Problems } from "@/components/landing/Problems";
import { Roles } from "@/components/landing/Roles";
import { Pulse } from "@/components/landing/Pulse";
import { Opportunities } from "@/components/landing/Opportunities";
import { Radar } from "@/components/landing/Radar";
import { Metrics } from "@/components/landing/Metrics";
import { Journeys } from "@/components/landing/Journeys";
import { Failure } from "@/components/landing/Failure";
import { Mentors } from "@/components/landing/Mentors";
import { Incubation } from "@/components/landing/Incubation";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

const title = "Innovation Ecosystem — Where Ideas Become Impact";
const description =
  "A collaborative innovation ecosystem where students discover problems, build teams, validate ideas, find mentors, and turn concepts into real ventures.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stages />
        <Problems />
        <Roles />
        <Pulse />
        <Opportunities />
        <Radar />
        <Metrics />
        <Journeys />
        <Failure />
        <Mentors />
        <Incubation />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
