import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Nemo privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div style={{ padding: "120px 40px 80px", maxWidth: "800px", margin: "0 auto", fontFamily: "var(--font-haas, sans-serif)" }}>
      <h1 style={{ fontFamily: "var(--font-aeonik, sans-serif)", fontWeight: 400, fontSize: 40, letterSpacing: "-1px", marginBottom: 32 }}>
        Privacy Policy
      </h1>
      <p style={{ color: "#868788", fontSize: 14 }}>Content coming soon.</p>
    </div>
  );
}
