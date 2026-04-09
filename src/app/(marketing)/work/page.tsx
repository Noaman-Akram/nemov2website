import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Nemo — a portfolio of digital products, websites, and brand experiences we have built.",
};

/**
 * Work — /work
 * Sections:
 * 1. Hero header + filters
 * 2. Project grid (masonry or uniform)
 * 3. Case study CTAs
 */
export default function WorkPage() {
  return (
    <div style={{ padding: "160px 40px 80px", fontFamily: "var(--font-haas, sans-serif)" }}>
      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#35D687", marginBottom: 8 }}>Work</p>
      <h1 style={{ fontSize: "clamp(36px,4vw,56px)", fontFamily: "var(--font-aeonik, sans-serif)", fontWeight: 400, letterSpacing: "-1px" }}>
        Selected projects
      </h1>
    </div>
  );
}
