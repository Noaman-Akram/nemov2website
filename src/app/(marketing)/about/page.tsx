import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nemo — who we are, how we work, and what drives us to create exceptional digital products.",
};

/**
 * About — /about
 * Sections:
 * 1. Intro / mission statement
 * 2. Story + values
 * 3. Team grid
 * 4. Process
 * 5. CTA
 */
export default function AboutPage() {
  return (
    <div style={{ padding: "160px 40px 80px", fontFamily: "var(--font-haas, sans-serif)" }}>
      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#35D687", marginBottom: 8 }}>About</p>
      <h1 style={{ fontSize: "clamp(36px,4vw,56px)", fontFamily: "var(--font-aeonik, sans-serif)", fontWeight: 400, letterSpacing: "-1px" }}>
        We build digital products<br />that matter
      </h1>
    </div>
  );
}
