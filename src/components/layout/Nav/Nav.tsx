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

const MENU_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Work",     href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/contact" },
];

export function Nav() {
  const pathname  = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [dark,     setDark]     = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isOpen,   setIsOpen]   = useState(false);

  useEffect(() => {
    function update() {
      const h = headerRef.current;
      if (!h) return;
      const nb = h.getBoundingClientRect().bottom;
      let over = false;
      document.querySelectorAll<HTMLElement>("[data-nav-dark]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < nb && r.bottom > 0) over = true;
      });
      setDark(over);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const logoWhite = dark || isOpen;

  return (
    <>
      <style>{`
        /* ── Outer wrapper: fixed, never moves ── */
        #site-header {
          position: fixed;
          top: var(--sp3);
          left: var(--sp6);
          right: var(--sp6);
          z-index: 900;
          pointer-events: none;
        }

        /* ── Shell: transparent on desktop when closed,
              always has a background on mobile ── */
        .nav-shell {
          max-width: var(--container);
          margin: 0 auto;
          background: ${isOpen
            ? "#141414"
            : dark
              ? "rgba(14,14,14,0.72)"
              : "rgba(245,245,240,0.82)"};
          border: 1px solid ${isOpen
            ? "var(--b1)"
            : dark
              ? "rgba(255,255,255,0.06)"
              : "rgba(0,0,0,0.06)"};
          border-radius: var(--r-xl);
          overflow: hidden;
          pointer-events: auto;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: background 350ms ease, border-color 350ms ease;
        }

        /* ── Top bar: 3-col on desktop, always 56px ── */
        .nav-topbar {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: var(--sp4);
          height: 56px;
          padding: 0 var(--sp5);
        }

        /* ── Logo: fixed px, never squishes ── */
        .nav-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          line-height: 0;
        }
        .nav-logo img {
          height: 20px;
          width: auto;
          display: block;
          flex-shrink: 0;
          filter: ${logoWhite ? "none" : "invert(1)"};
          transition: filter 350ms ease;
        }
        .nav-logo-fallback {
          font-family: var(--font-aeonik);
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.3px;
          white-space: nowrap;
          color: ${logoWhite ? "var(--t1)" : "#111"};
          transition: color 350ms ease;
        }

        /* ── Pill nav ── */
        .nav-pill-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 0;
        }
        .nav-pill {
          display: flex;
          gap: var(--sp1);
          list-style: none;
          align-items: center;
          background: ${dark ? "rgba(8,8,8,0.65)" : "rgba(250,251,252,0.65)"};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid ${dark ? "var(--b1)" : "rgba(0,0,0,0.06)"};
          border-radius: var(--r-pill);
          padding: 6px;
          margin: 0;
          opacity: ${isOpen ? 0 : 1};
          visibility: ${isOpen ? "hidden" : "visible"};
          transform: ${isOpen ? "scale(0.96)" : "scale(1)"};
          pointer-events: ${isOpen ? "none" : "auto"};
          transition: opacity 260ms ease, visibility 260ms ease, transform 260ms ease,
                      background 350ms ease, border-color 350ms ease;
        }
        .nav-pill li { list-style: none; }
        .nav-pill a {
          display: inline-block;
          font-family: var(--font-haas);
          font-size: 14px;
          line-height: 1;
          text-decoration: none;
          padding: 10px 18px;
          border-radius: var(--r-pill);
          transition: all 200ms ease;
        }

        /* ── Actions ── */
        .nav-actions {
          display: flex;
          gap: var(--sp3);
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
        }
        .nav-cta {
          font-family: var(--font-haas);
          font-size: 13px;
          font-weight: 500;
          border-radius: var(--r-pill);
          padding: 0 var(--sp5);
          height: 36px;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          border: none;
          flex-shrink: 0;
          background: ${isOpen ? "var(--green)" : "var(--warm-cream)"};
          color: ${isOpen ? "var(--black)" : "#151515"};
          transition: background 300ms ease, color 300ms ease;
        }
        .nav-cta:hover { background: ${isOpen ? "var(--green-hover)" : "#d6d8c6"}; }

        /* ── Burger → X ── */
        .nav-burger {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: var(--r-pill);
          background: ${isOpen ? "rgba(255,255,255,0.08)" : (dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)")};
          border: 1px solid ${isOpen ? "var(--b2)" : (dark ? "var(--b1)" : "rgba(0,0,0,0.06)")};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
          padding: 0;
          transition: background var(--e-fast), border-color var(--e-fast);
        }
        .nav-burger:hover { background: ${isOpen ? "rgba(255,255,255,0.14)" : (dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)")}; }
        .nav-burger .bar {
          display: block;
          width: 16px;
          height: 1.5px;
          background: ${isOpen ? "var(--t1)" : (dark ? "var(--t1)" : "#111")};
          border-radius: 1px;
          transform-origin: center;
          transition: all 400ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav-burger.open .bar:nth-child(1) { transform: rotate(45deg) translate(2.3px, 2.3px); }
        .nav-burger.open .bar:nth-child(2) { transform: rotate(-45deg) translate(2.3px, -2.3px); }

        /* ── Menu body: grows downward ── */
        .nav-menu-body {
          display: grid;
          grid-template-rows: ${isOpen ? "1fr" : "0fr"};
          border-top: 1px solid ${isOpen ? "var(--b1)" : "transparent"};
          transition: grid-template-rows 460ms cubic-bezier(0.16,1,0.3,1),
                      border-color 300ms ease;
        }
        .nav-menu-overflow { overflow: hidden; min-height: 0; }
        .nav-menu-scroll {
          max-height: calc(100vh - 80px);
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }

        /* ── Split layout ── */
        .menu-split {
          display: grid;
          grid-template-columns: 1fr ${isOpen ? "360px" : "0px"};
          transition: grid-template-columns 480ms cubic-bezier(0.16,1,0.3,1);
          overflow: hidden;
        }
        .menu-left {
          padding: var(--sp8) var(--sp8) var(--sp6);
          border-right: 1px solid ${isOpen ? "var(--b1)" : "transparent"};
          opacity: ${isOpen ? 1 : 0};
          transform: ${isOpen ? "translateX(0)" : "translateX(-10px)"};
          transition: opacity 360ms ease 80ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 80ms,
                      border-color 380ms ease 100ms;
        }
        /* Primary links: readable, arrow inline next to text */
        .menu-nav-link {
          display: flex;
          align-items: center;
          gap: var(--sp2);
          font-family: var(--font-aeonik);
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          padding: 10px 0;
          text-decoration: none;
          letter-spacing: -0.8px;
          line-height: 1.2;
          border-bottom: 1px solid var(--b1);
          transition: color 260ms ease, padding-left 260ms ease;
        }
        .menu-nav-link:last-child { border-bottom: none; }
        .menu-nav-link:hover { color: var(--t1); padding-left: var(--sp1); }
        .menu-nav-link .link-arrow {
          font-size: 20px;
          color: var(--green);
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 240ms ease, transform 280ms cubic-bezier(0.16,1,0.3,1);
          flex-shrink: 0;
          line-height: 1;
        }
        .menu-nav-link:hover .link-arrow { opacity: 1; transform: translateX(0); }

        .menu-right {
          padding: var(--sp8) var(--sp8) var(--sp6) var(--sp6);
          background: rgba(0,0,0,0.18);
          display: flex;
          flex-direction: column;
          gap: var(--sp6);
          opacity: ${isOpen ? 1 : 0};
          transform: ${isOpen ? "translateX(0)" : "translateX(28px)"};
          transition: opacity 360ms ease 180ms, transform 420ms cubic-bezier(0.16,1,0.3,1) 180ms;
          overflow: hidden;
        }
        .menu-group-title {
          font-family: var(--font-aeonik);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.4);
          margin-bottom: var(--sp3);
          padding-bottom: var(--sp2);
          border-bottom: 1px solid var(--b1);
        }
        .menu-group a {
          display: block;
          font-family: var(--font-haas);
          font-size: 16px;
          color: rgba(255,255,255,0.6);
          padding: var(--sp1) 0;
          text-decoration: none;
          transition: color var(--e-fast), padding-left var(--e-fast);
        }
        .menu-group a:hover { color: var(--t1); padding-left: var(--sp1); }
        .menu-group.products a {
          font-family: var(--font-aeonik);
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
        }
        .menu-group.products a:hover { color: var(--green); padding-left: var(--sp1); }
        .menu-group.soon .menu-group-title { color: rgba(255,255,255,0.25); }
        .menu-group.soon a { font-size: 13px; color: rgba(255,255,255,0.3); padding: 3px 0; }
        .menu-group.soon a:hover { color: rgba(255,255,255,0.6); }

        /* ── Footer ── */
        .menu-footer {
          padding: var(--sp3) var(--sp8);
          border-top: 1px solid var(--b1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: ${isOpen ? 1 : 0};
          transform: ${isOpen ? "translateY(0)" : "translateY(6px)"};
          transition: opacity 320ms ease 300ms, transform 380ms cubic-bezier(0.16,1,0.3,1) 300ms;
        }
        .menu-footer-socials { display: flex; gap: var(--sp6); }
        .menu-footer-socials a {
          font-family: var(--font-haas);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color var(--e-fast);
        }
        .menu-footer-socials a:hover { color: var(--t1); }
        .menu-footer-tagline {
          font-family: var(--font-haas);
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.01em;
        }
        .menu-footer-tagline .accent { color: var(--green); }

        /* ── Backdrop ── */
        .nav-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 850;
          opacity: ${isOpen ? 1 : 0};
          pointer-events: ${isOpen ? "auto" : "none"};
          transition: opacity 350ms ease;
        }

        /* ════════════════════════════════════════════════
           TABLET 769–1024px: drop pill, 2-col topbar
        ════════════════════════════════════════════════ */
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-pill-wrap { display: none !important; }
          .nav-topbar { grid-template-columns: auto auto; justify-content: space-between; }
          .menu-split { grid-template-columns: 1fr ${isOpen ? "260px" : "0px"}; }
          .menu-left  { padding: var(--sp6) var(--sp6) var(--sp5); }
          .menu-right { padding: var(--sp6) var(--sp6) var(--sp5) var(--sp5); }
          .menu-footer { padding: var(--sp3) var(--sp6); }
        }

        /* ════════════════════════════════════════════════
           MOBILE ≤ 768px
           Shell always visible (dynamic island on mobile too).
           Topbar: logo | actions only.
           Menu: stacked, scrollable.
        ════════════════════════════════════════════════ */
        @media (max-width: 768px) {
          #site-header {
            top: var(--sp2);
            left: var(--sp3);
            right: var(--sp3);
          }
          /* Always show the pill/island on mobile */
          .nav-shell {
            background: ${isOpen
              ? "#141414"
              : dark
                ? "rgba(14,14,14,0.88)"
                : "rgba(248,249,246,0.88)"} !important;
            border-color: ${isOpen
              ? "var(--b1)"
              : dark
                ? "var(--b1)"
                : "rgba(0,0,0,0.07)"} !important;
            backdrop-filter: blur(24px) !important;
            -webkit-backdrop-filter: blur(24px) !important;
          }
          /* 2-col: logo + actions */
          .nav-topbar {
            grid-template-columns: auto auto;
            justify-content: space-between;
            gap: var(--sp3);
            padding: 0 var(--sp4);
            height: 52px;
          }
          /* Logo fixed 18px on mobile */
          .nav-logo img { height: 18px !important; width: auto !important; }
          /* Hide pill on mobile */
          .nav-pill-wrap { display: none !important; }
          /* Smaller CTA on mobile */
          .nav-cta { font-size: 12px; padding: 0 var(--sp4); height: 32px; }
          /* Stack menu vertically */
          .menu-split {
            display: flex !important;
            flex-direction: column;
          }
          .menu-left {
            padding: var(--sp5) var(--sp4) var(--sp4);
            border-right: none;
            border-bottom: 1px solid var(--b1);
            opacity: 1 !important;
            transform: none !important;
          }
          .menu-nav-link { font-size: 26px; letter-spacing: -0.4px; }
          .menu-right {
            padding: var(--sp4);
            background: transparent;
            flex-direction: row;
            flex-wrap: wrap;
            gap: var(--sp5);
            opacity: 1 !important;
            transform: none !important;
          }
          .menu-group { flex: 1; min-width: 120px; }
          .menu-group a { font-size: 14px; }
          .menu-group.products a { font-size: 13px; }
          .menu-footer {
            padding: var(--sp3) var(--sp4);
            flex-direction: column;
            align-items: flex-start;
            gap: var(--sp2);
            opacity: 1 !important;
            transform: none !important;
          }
          .menu-footer-socials { gap: var(--sp4); }
        }

        /* ════════════════════════════════════════════════
           VERY SMALL ≤ 480px
        ════════════════════════════════════════════════ */
        @media (max-width: 480px) {
          .nav-logo img { height: 16px !important; }
          .menu-nav-link { font-size: 22px; }
          .menu-right { flex-direction: column; gap: var(--sp4); }
          .menu-group { min-width: unset; }
        }
      `}</style>

      <div className="nav-backdrop" onClick={() => setIsOpen(false)} />

      <header ref={headerRef} id="site-header">
        <div className="nav-shell">

          <div className="nav-topbar">
            <Link href="/" className="nav-logo">
              {!imgError ? (
                <Image
                  src="https://madebynemo.com/storage/2025/05/nemo-white.png"
                  alt="Nemo"
                  width={80}
                  height={20}
                  style={{ height: 20, width: "auto", flexShrink: 0 }}
                  onError={() => setImgError(true)}
                  unoptimized
                />
              ) : (
                <span className="nav-logo-fallback">NEMO</span>
              )}
            </Link>

            <div className="nav-pill-wrap">
              <ul className="nav-pill">
                {NAV_ITEMS.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        style={{
                          color: dark
                            ? active ? "#fff" : "rgba(255,255,255,0.75)"
                            : active ? "#111" : "rgba(0,0,0,0.6)",
                          background: active
                            ? dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"
                            : "transparent",
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="nav-actions">
              <Link href="/contact" className="nav-cta">
                Let&apos;s talk
              </Link>
              <button
                className={`nav-burger ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <span className="bar" />
                <span className="bar" />
              </button>
            </div>
          </div>

          <div className="nav-menu-body" aria-hidden={!isOpen}>
            <div className="nav-menu-overflow">
              <div className="nav-menu-scroll">
                <div className="menu-split">
                  <div className="menu-left">
                    {MENU_LINKS.map((item) => (
                      <Link key={item.href} href={item.href} className="menu-nav-link">
                        {item.label}
                        <span className="link-arrow">→</span>
                      </Link>
                    ))}
                  </div>
                  <div className="menu-right">
                    <div className="menu-group">
                      <div className="menu-group-title">Company</div>
                      <Link href="/about">Studio</Link>
                      <Link href="/careers">Careers</Link>
                      <Link href="/growth-plan">Growth Plan</Link>
                      <Link href="/charity">Charity</Link>
                    </div>
                    <div className="menu-group products">
                      <div className="menu-group-title">Products</div>
                      <Link href="/products/mappire">Mappire</Link>
                      <Link href="/products/crm">Nemo CRM</Link>
                      <Link href="/products/go">Nemo GO</Link>
                    </div>
                    <div className="menu-group soon">
                      <div className="menu-group-title">Coming Soon</div>
                      <Link href="#">Partner Program</Link>
                      <Link href="#">Affiliate Marketing</Link>
                      <Link href="#">Sitemap</Link>
                    </div>
                  </div>
                </div>
                <div className="menu-footer">
                  <div className="menu-footer-socials">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://linkedin.com"  target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://behance.net"   target="_blank" rel="noopener noreferrer">Behance</a>
                  </div>
                  <p className="menu-footer-tagline">
                    Independent studio. Built in <span className="accent">Cairo.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
