import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "108px" }}>{children}</main>
      <Footer />
    </>
  );
}
