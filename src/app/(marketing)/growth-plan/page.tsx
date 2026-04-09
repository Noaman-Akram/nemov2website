import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Plan",
  description:
    "Nemo Growth Plan — a structured partnership to accelerate your digital growth through strategy, design, and development.",
};

/**
 * Growth Plan — /growth-plan
 * Sections:
 * 1. Hero — what is the growth plan
 * 2. What's included
 * 3. Pricing / tiers
 * 4. FAQ
 * 5. Apply / get started CTA
 */
export default function GrowthPlanPage() {
  return (
    <div style={{ padding: "160px 40px 80px", fontFamily: "var(--font-haas, sans-serif)" }}>
      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#35D687", marginBottom: 8 }}>Growth Plan</p>
      <h1 style={{ fontSize: "clamp(36px,4vw,56px)", fontFamily: "var(--font-aeonik, sans-serif)", fontWeight: 400, letterSpacing: "-1px" }}>
        Grow faster,<br />together
      </h1>
    </div>
  );
}
