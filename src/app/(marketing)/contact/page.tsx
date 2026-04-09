import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nemo. Let's talk about your project and how we can bring your ideas to life.",
};

/**
 * Contact — /contact
 * Sections:
 * 1. Hero / intro
 * 2. Contact form (name, email, message, budget)
 * 3. Location / socials
 */
export default function ContactPage() {
  return (
    <div style={{ padding: "160px 40px 80px", fontFamily: "var(--font-haas, sans-serif)" }}>
      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#35D687", marginBottom: 8 }}>Contact</p>
      <h1 style={{ fontSize: "clamp(36px,4vw,56px)", fontFamily: "var(--font-aeonik, sans-serif)", fontWeight: 400, letterSpacing: "-1px" }}>
        Let&apos;s work together
      </h1>
    </div>
  );
}
