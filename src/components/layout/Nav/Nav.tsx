"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/config/site";

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "72px",
          zIndex: 900,
          background: "rgba(8,8,8,0.96)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container)",
            width: "100%",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-aeonik, sans-serif)",
              fontSize: "17px",
              fontWeight: 500,
              letterSpacing: "-0.3px",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#35D687",
                flexShrink: 0,
              }}
            />
            {SITE.name}
          </Link>

          {/* Desktop links */}
          <nav
            style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
            className="nav-links-desktop"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-haas, sans-serif)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: active ? "#fff" : "#868788",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    transition: "color 150ms ease-in-out, background 150ms ease-in-out",
                    textDecoration: "none",
                    background: active ? "rgba(255,255,255,0.04)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = active ? "#fff" : "#868788";
                    e.currentTarget.style.background = active ? "rgba(255,255,255,0.04)" : "transparent";
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-haas, sans-serif)",
                fontSize: "13px",
                fontWeight: 400,
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "9999px",
                padding: "0 20px",
                height: "36px",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                transition: "border-color 150ms ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              Get in touch
            </Link>

            <Link
              href="/growth-plan"
              style={{
                fontFamily: "var(--font-haas, sans-serif)",
                fontSize: "13px",
                fontWeight: 400,
                color: "#151515",
                background: "#E9EBDF",
                border: "none",
                borderRadius: "9999px",
                padding: "0 20px",
                height: "36px",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                transition: "background 150ms ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d6d8c6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#E9EBDF";
              }}
            >
              Growth plan
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="nav-hamburger"
              style={{
                display: "none",
                background: "none",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "6px",
                width: "36px",
                height: "36px",
                cursor: "pointer",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                padding: 0,
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "16px",
                    height: "1.5px",
                    background: "#fff",
                    borderRadius: "2px",
                    transition: "150ms ease-in-out",
                    transform:
                      mobileOpen && i === 0 ? "rotate(45deg) translate(4px, 4px)"
                      : mobileOpen && i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                      : mobileOpen && i === 1 ? "scaleX(0)"
                      : "none",
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="nav-mobile"
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            background: "rgba(8,8,8,0.98)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            zIndex: 899,
            padding: "12px 20px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-haas, sans-serif)",
                fontSize: "16px",
                fontWeight: 400,
                color: pathname === link.href ? "#fff" : "#868788",
                padding: "10px 12px",
                borderRadius: "6px",
                textDecoration: "none",
                background: pathname === link.href ? "rgba(255,255,255,0.04)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "8px 0" }} />
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "var(--font-haas, sans-serif)",
              fontSize: "15px",
              color: "#fff",
              padding: "10px 12px",
              textDecoration: "none",
            }}
          >
            Get in touch
          </Link>
          <Link
            href="/growth-plan"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "var(--font-haas, sans-serif)",
              fontSize: "14px",
              fontWeight: 400,
              color: "#151515",
              background: "#E9EBDF",
              borderRadius: "9999px",
              padding: "10px 20px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "4px",
            }}
          >
            Growth plan
          </Link>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
