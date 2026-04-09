import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* ── AeonikPro — Display / Headings ── */
const aeonikPro = localFont({
  src: [
    { path: "../../public/fonts/AeonikPro-Light.otf",   weight: "300", style: "normal" },
    { path: "../../public/fonts/AeonikPro-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/AeonikPro-Medium.otf",  weight: "500", style: "normal" },
    { path: "../../public/fonts/AeonikPro-Bold.otf",    weight: "700", style: "normal" },
  ],
  variable: "--font-aeonik",
  display: "swap",
  preload: true,
});

/* ── NeueHaas — UI / Body ── */
const neueHaas = localFont({
  src: [
    { path: "../../public/fonts/NeueHaasDisplayLight.ttf",  weight: "300", style: "normal" },
    { path: "../../public/fonts/NeueHaasDisplayRoman.ttf",  weight: "400", style: "normal" },
    { path: "../../public/fonts/NeueHaasDisplayMediu.ttf",  weight: "500", style: "normal" },
    { path: "../../public/fonts/NeueHaasDisplayBold.ttf",   weight: "700", style: "normal" },
  ],
  variable: "--font-haas",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "NEMO — Turn your ideas into reality",
    template: "%s | NEMO",
  },
  description:
    "Nemo is a web development agency that creates digital products with advanced technologies to build memorable experiences and transform brands.",
  metadataBase: new URL("https://madebynemo.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NEMO",
    title: "NEMO — Turn your ideas into reality",
    description: "We create digital products with advanced technologies to build memorable experiences and transform brands.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEMO — Turn your ideas into reality",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${aeonikPro.variable} ${neueHaas.variable}`}>
      <body style={{
        fontFamily: "var(--font-haas), 'Inter', sans-serif",
      }}>
        {children}
      </body>
    </html>
  );
}
