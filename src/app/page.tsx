import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";

export const metadata: Metadata = {
  title: "NEMO — Turn your ideas into reality",
  description:
    "We create digital products with advanced technologies to build memorable experiences and transform brands.",
};

/**
 * Home — /
 * Sections (in order):
 * 1. Hero
 * 2. Marquee / Ticker
 * 3. Dark Feature section + dashboard mockup
 * 4. Selected Work
 * 5. FAQ
 * 6. CTA Card
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "72px" }}>
        {/* Hero */}
        {/* <HeroSection /> */}

        {/* SKELETON */}
        <div
          style={{
            padding: "100px 40px 80px",
            fontFamily: "var(--font-haas, sans-serif)",
          }}
        >
          <p
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#35D687",
              marginBottom: 12,
            }}
          >
            Web Development Agency
          </p>
          <h1
            style={{
              fontSize: "clamp(48px,6vw,80px)",
              fontFamily: "var(--font-aeonik, sans-serif)",
              fontWeight: 400,
              letterSpacing: "-2px",
              lineHeight: 1.1,
              color: "#111",
            }}
          >
            Turn your ideas
            <br />
            into reality
          </h1>
        </div>
      </main>
    </>
  );
}
