import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Nemo's services — web development, design systems, product strategy, and digital transformation for modern businesses.",
};

/**
 * Services — /services
 * Sections:
 * 1. Hero header
 * 2. Services grid (cards)
 * 3. Process overview
 * 4. Testimonials
 * 5. CTA
 */
export default function ServicesPage() {
  return (
    <div style={{ padding: "160px 40px 80px", fontFamily: "var(--font-haas, sans-serif)" }}>
      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#35D687", marginBottom: 8 }}>Services</p>
      <h1 style={{ fontSize: "clamp(36px,4vw,56px)", fontFamily: "var(--font-aeonik, sans-serif)", fontWeight: 400, letterSpacing: "-1px" }}>
        What we build
      </h1>
    </div>
  );
}
