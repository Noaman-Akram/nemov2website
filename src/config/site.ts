/**
 * Site-wide configuration constants.
 * Single source of truth for nav, routes, metadata, and company info.
 * Import from here — never hard-code strings across files.
 */

export const SITE = {
  name: "NEMO",
  tagline: "Turn your ideas into reality",
  description:
    "We create digital products with advanced technologies to build memorable experiences and transform brands.",
  url: "https://madebynemo.com",
  email: "hello@madebynemo.com",
} as const;

export const NAV_LINKS = [
  { label: "Services",    href: "/services" },
  { label: "Work",        href: "/work" },
  { label: "About",       href: "/about" },
  { label: "Careers",     href: "/careers" },
  { label: "Contact",     href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About",    href: "/about" },
    { label: "Careers",  href: "/careers" },
    { label: "Contact",  href: "/contact" },
  ],
  services: [
    { label: "Services",     href: "/services" },
    { label: "Work",         href: "/work" },
    { label: "Growth Plan",  href: "/growth-plan" },
  ],
  programs: [
    { label: "Affiliate",    href: "/affiliate" },
    { label: "Charity",      href: "/charity" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms",          href: "/terms" },
  ],
} as const;

export const ROUTES = {
  home:        "/",
  services:    "/services",
  work:        "/work",
  about:       "/about",
  careers:     "/careers",
  contact:     "/contact",
  growthPlan:  "/growth-plan",
  affiliate:   "/affiliate",
  charity:     "/charity",
  privacy:     "/privacy",
  terms:       "/terms",
} as const;
