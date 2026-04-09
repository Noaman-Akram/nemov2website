import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Nemo team. We are looking for talented people who want to build exceptional digital products.",
};

/**
 * Careers — /careers
 * Sections:
 * 1. Hero — culture statement
 * 2. Values / why work here
 * 3. Open roles list
 * 4. Application CTA
 */
export default function CareersPage() {
  return (
    <div style={{ padding: "160px 40px 80px", fontFamily: "var(--font-haas, sans-serif)" }}>
      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#35D687", marginBottom: 8 }}>Careers</p>
      <h1 style={{ fontSize: "clamp(36px,4vw,56px)", fontFamily: "var(--font-aeonik, sans-serif)", fontWeight: 400, letterSpacing: "-1px" }}>
        Build with us
      </h1>
    </div>
  );
}
