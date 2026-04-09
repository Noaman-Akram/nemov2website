import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charity",
  description:
    "Nemo's charity initiative — giving back through pro-bono digital work for nonprofits and social impact organizations.",
};

/**
 * Charity — /charity
 * Sections:
 * 1. Hero — mission statement
 * 2. What we offer nonprofits
 * 3. Past charity work
 * 4. Apply / nominate CTA
 */
export default function CharityPage() {
  return (
    <div style={{ padding: "160px 40px 80px", fontFamily: "var(--font-haas, sans-serif)" }}>
      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#35D687", marginBottom: 8 }}>Charity</p>
      <h1 style={{ fontSize: "clamp(36px,4vw,56px)", fontFamily: "var(--font-aeonik, sans-serif)", fontWeight: 400, letterSpacing: "-1px" }}>
        Building for good
      </h1>
    </div>
  );
}
