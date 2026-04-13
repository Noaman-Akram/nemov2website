import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  Marquee,
  FeatureSection,
  SelectedWork,
  FAQ,
  CTASection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "NEMO — Turn your ideas into reality",
  description:
    "We create digital products with advanced technologies to build memorable experiences and transform brands.",
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <FeatureSection />
        <SelectedWork />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
