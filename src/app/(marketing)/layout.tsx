import { Nav } from "@/components/layout/Nav";

/**
 * (marketing) route group layout
 * All main site pages share this layout: Nav + Footer.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "108px" }}>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
