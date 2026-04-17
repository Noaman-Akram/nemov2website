import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* ── AeonikPro — Display / Headings ── */
const aeonikPro = localFont({
  src: [
    { path: "../fonts/AeonikPro-Regular.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-aeonik",
  display: "swap",
  preload: true,
});

/* ── NeueHaas — UI / Body ── */
const neueHaas = localFont({
  src: [
    { path: "../fonts/NeueHaasDisplayRoman.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-haas",
  display: "swap",
  preload: true,
});

import { DynamicFavicon } from "@/components/layout/Favicon";

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
      <head>
        <DynamicFavicon />
      </head>
      <body style={{
        fontFamily: "var(--font-haas), 'Inter', sans-serif",
      }}>
        {children}
      </body>
    </html>
  );
}
