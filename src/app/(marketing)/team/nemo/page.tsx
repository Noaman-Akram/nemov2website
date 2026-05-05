import type { Metadata } from "next";
import {
  Hero,
  Bio,
  Highlights,
  Principles,
  Timeline,
  Quote,
  Connect,
} from "@/components/sections/team-nemo";

export const metadata: Metadata = {
  title: "Nemo Akram — Founder",
  description:
    "Nemo Akram is the founder and creative director of Nemo, a small studio building digital products that feel as good as they look.",
};

/**
 * Team / Nemo — /team/nemo
 *
 * Founder profile page. Not linked from the main nav by design;
 * intended to be reached from team listings, deep links, or future routes.
 *
 * Section order:
 * 1. Hero          — name, role, portrait
 * 2. Bio           — narrative intro
 * 3. Highlights    — dark stats band
 * 4. Principles    — 3-up working philosophy
 * 5. Timeline      — career milestones
 * 6. Quote         — pull quote
 * 7. Connect       — links + CTA
 */
export default function TeamNemoPage() {
  return (
    <>
      <Hero />
      <Bio />
      <Highlights />
      <Principles />
      <Timeline />
      <Quote />
      <Connect />
    </>
  );
}
