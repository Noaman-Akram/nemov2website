import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Join Nemo's affiliate program. Refer clients, earn commissions, and grow with us.",
};

/**
 * Affiliate — /affiliate
 * Sections:
 * 1. Hero — program overview
 * 2. How it works (steps)
 * 3. Commission structure
 * 4. FAQ
 * 5. Apply CTA
 */
export default function AffiliatePage() {
  return (
    <div style={{ padding: "160px 40px 80px", fontFamily: "var(--font-haas, sans-serif)" }}>
      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#35D687", marginBottom: 8 }}>Affiliate</p>
      <h1 style={{ fontSize: "clamp(36px,4vw,56px)", fontFamily: "var(--font-aeonik, sans-serif)", fontWeight: 400, letterSpacing: "-1px" }}>
        Earn with Nemo
      </h1>
    </div>
  );
}
