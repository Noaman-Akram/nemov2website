import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Nemo terms of service — the terms under which we provide our services.",
};

export default function TermsPage() {
  return (
    <div style={{ padding: "120px 40px 80px", maxWidth: "800px", margin: "0 auto", fontFamily: "var(--font-haas, sans-serif)" }}>
      <h1 style={{ fontFamily: "var(--font-aeonik, sans-serif)", fontWeight: 400, fontSize: 40, letterSpacing: "-1px", marginBottom: 32 }}>
        Terms of Service
      </h1>
      <p style={{ color: "#868788", fontSize: 14 }}>Content coming soon.</p>
    </div>
  );
}
