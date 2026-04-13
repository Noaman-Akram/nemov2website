"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Work",     href: "/work" },
  { label: "Services", href: "/services" },
];

export function Nav() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [dark, setDark] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Switch to dark mode when nav overlaps a [data-nav-dark] section
  useEffect(() => {
    function update() {
      const header = headerRef.current;
      if (!header) return;
      const navBottom = header.getBoundingClientRect().bottom;
      const darkSections = document.querySelectorAll<HTMLElement>("[data-nav-dark]");
      let over = false;
      darkSections.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < navBottom && r.bottom > 0) over = true;
      });
      setDark(over);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      ref={headerRef}
      id="site-header"
      style={{
        position: "fixed",
        top: 12,
        left: 24,
        right: 24,
        height: 56,
        display: "flex",
        alignItems: "center",
        zIndex: 900,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 40px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 24,
        }}
      >
        {/* ── Logo ── */}
        <Link href="/" style={{ pointerEvents: "auto", display: "inline-flex" }}>
          {!imgError ? (
            <Image
              src="https://madebynemo.com/storage/2025/05/nemo-white.png"
              alt="Nemo"
              width={80}
              height={28}
              style={{
                height: 28,
                width: "auto",
                filter: dark ? "invert(0)" : "invert(1)",
                transition: "filter 400ms ease",
              }}
              onError={() => setImgError(true)}
              unoptimized
            />
          ) : (
            <span
              style={{
                fontFamily: "var(--font-aeonik)",
                fontSize: 17,
                fontWeight: 500,
                letterSpacing: "-0.3px",
                color: dark ? "#fff" : "#111",
                transition: "color 400ms ease",
              }}
            >
              NEMO
            </span>
          )}
        </Link>

        {/* ── Nav links pill ── */}
        <ul
          style={{
            display: "flex",
            gap: 4,
            listStyle: "none",
            justifyContent: "center",
            alignItems: "center",
            background: dark ? "rgba(8,8,8,0.65)" : "rgba(250,251,252,0.65)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
            borderRadius: 9999,
            padding: 6,
            margin: 0,
            pointerEvents: "auto",
            transition: "background 400ms ease, border-color 400ms ease",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-haas)",
                    fontSize: 14,
                    lineHeight: 1,
                    color: dark
                      ? active ? "#fff" : "rgba(255,255,255,0.75)"
                      : active ? "#111" : "rgba(0,0,0,0.6)",
                    background: active
                      ? dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"
                      : "transparent",
                    textDecoration: "none",
                    padding: "10px 18px",
                    borderRadius: 9999,
                    transition: "all 400ms ease",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Actions ── */}
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "flex-end",
            pointerEvents: "auto",
          }}
        >
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-haas)",
              fontSize: 13,
              borderRadius: 9999,
              padding: "0 20px",
              height: 36,
              background: "#E9EBDF",
              color: "#151515",
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              transition: "background 150ms ease-in-out",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d6d8c6")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#E9EBDF")}
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}
