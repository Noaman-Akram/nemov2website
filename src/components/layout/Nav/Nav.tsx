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
        /* ── Fixed header strip: logo | pill | actions ── */
        #site-header {
          position: fixed;
          top: var(--sp4);
          left: 0;
          right: 0;
          z-index: 900;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: var(--container);
          margin: 0 auto;
          padding: 0 var(--sp6);
          left: 50%;
          transform: translateX(-50%);
          box-sizing: border-box;
        }

        /* ── Logo ── */
        .nav-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          line-height: 0;
          pointer-events: auto;
          z-index: 1;
        }
        .nav-logo img {
          height: 20px;
          width: auto;
          display: block;
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

        /* ── Pill island (absolutely centered) ── */
        .nav-pill {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: var(--sp1);
          list-style: none;
          align-items: center;
          background: ${dark ? "rgba(20,20,20,0.78)" : "rgba(245,245,240,0.88)"};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid ${dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)"};
          border-radius: var(--r-pill);
          padding: 5px;
          margin: 0;
          pointer-events: auto;
          transition: background 350ms ease, border-color 350ms ease;
          white-space: nowrap;
        }
        .nav-pill li { list-style: none; }
        .nav-pill a {
          display: inline-block;
          font-family: var(--font-haas);
          font-size: 14px;
          line-height: 1;
          text-decoration: none;
          padding: 9px 16px;
          border-radius: var(--r-pill);
          transition: background 200ms ease, color 200ms ease;
          color: ${dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)"};
        }
        .nav-pill a.active {
          color: ${dark ? "#fff" : "#111"};
          background: ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"};
        }

        /* ── Actions (right) ── */
        .nav-actions {
          display: flex;
          gap: var(--sp3);
          align-items: center;
          flex-shrink: 0;
          pointer-events: auto;
          z-index: 1;
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
          background: ${dark ? "rgba(245,245,240,0.92)" : "rgba(245,245,240,0.92)"};
          color: #111;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid ${dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"};
          transition: background 300ms ease;
        }
        .nav-cta:hover { background: rgba(228,230,222,0.97); }

        /* ── Burger ── */
        .nav-burger {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: var(--r-pill);
          background: ${isOpen ? "rgba(30,30,30,0.9)" : dark ? "rgba(20,20,20,0.78)" : "rgba(245,245,240,0.88)"};
          border: 1px solid ${isOpen ? "var(--b2)" : dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)"};
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
          padding: 0;
          transition: background var(--e-fast), border-color var(--e-fast);
        }
        .nav-burger:hover { opacity: 0.85; }
        .nav-burger .bar {
          display: block;
          width: 16px;
          height: 1.5px;
          background: ${isOpen ? "#fff" : dark ? "rgba(255,255,255,0.85)" : "#111"};
          border-radius: 1px;
          transform-origin: center;
          transition: transform 380ms cubic-bezier(0.16,1,0.3,1), background 300ms ease;
        }
        .nav-burger.is-open .bar:nth-child(1) { transform: rotate(45deg) translate(2.3px, 2.3px); }
        .nav-burger.is-open .bar:nth-child(2) { transform: rotate(-45deg) translate(2.3px, -2.3px); }

        /* ════════════════════════════════════════════
           MENU OVERLAY — backdrop + panel
           Panel is anchored to same position as header
           so it looks like it expands from behind.
        ════════════════════════════════════════════ */
        .nav-backdrop {
          position: fixed;
          inset: 0;
          z-index: 850;
          background: rgba(0,0,0,0.5);
          opacity: ${isOpen ? 1 : 0};
          pointer-events: ${isOpen ? "auto" : "none"};
          transition: opacity 350ms ease;
        }

        .nav-panel {
          position: fixed;
          top: var(--sp4);
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - var(--sp12));
          max-width: var(--container);
          z-index: 880;
          background: #141414;
          border: 1px solid var(--b1);
          border-radius: var(--r-xl);
          overflow: hidden;
          pointer-events: ${isOpen ? "auto" : "none"};
          /* Animate: closed = just tall enough for 1 topbar row, then grows */
          max-height: ${isOpen ? "calc(100vh - var(--sp8))" : "0px"};
          opacity: ${isOpen ? 1 : 0};
          transition: max-height 480ms cubic-bezier(0.16,1,0.3,1),
                      opacity 300ms ease;
        }

        /* Spacer row inside panel so content starts below the real header */
        .nav-panel-spacer {
          height: 64px;
          flex-shrink: 0;
        }

        .nav-panel-inner {
          overflow-y: auto;
          max-height: calc(100vh - var(--sp8) - 64px);
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }

        /* ── Split layout ── */
        .menu-split {
          display: grid;
          grid-template-columns: 1fr 360px;
          overflow: hidden;
        }
        .menu-left {
          padding: var(--sp8) var(--sp8) var(--sp6);
          border-right: 1px solid var(--b1);
          border-top: 1px solid var(--b1);
          opacity: ${isOpen ? 1 : 0};
          transform: ${isOpen ? "translateY(0)" : "translateY(8px)"};
          transition: opacity 340ms ease 120ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 120ms;
        }
        .menu-nav-link {
          display: flex;
          align-items: center;
          gap: var(--sp2);
          font-family: var(--font-aeonik);
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          padding: 10px 0;
          text-decoration: none;
          letter-spacing: -0.8px;
          line-height: 1.2;
          border-bottom: 1px solid var(--b1);
          transition: color 240ms ease, padding-left 240ms ease;
        }
        .menu-nav-link:last-child { border-bottom: none; }
        .menu-nav-link:hover { color: var(--t1); padding-left: var(--sp2); }
        .menu-nav-link .link-arrow {
          font-size: 20px;
          color: var(--green);
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 220ms ease, transform 260ms cubic-bezier(0.16,1,0.3,1);
          flex-shrink: 0;
        }
        .menu-nav-link:hover .link-arrow { opacity: 1; transform: translateX(0); }

        .menu-right {
          padding: var(--sp8) var(--sp8) var(--sp6) var(--sp6);
          background: rgba(0,0,0,0.18);
          display: flex;
          flex-direction: column;
          gap: var(--sp6);
          border-top: 1px solid var(--b1);
          opacity: ${isOpen ? 1 : 0};
          transform: ${isOpen ? "translateY(0)" : "translateY(12px)"};
          transition: opacity 340ms ease 200ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 200ms;
          overflow: hidden;
        }
        .menu-group-title {
          font-family: var(--font-aeonik);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.35);
          margin-bottom: var(--sp3);
          padding-bottom: var(--sp2);
          border-bottom: 1px solid var(--b1);
        }
        .menu-group a {
          display: block;
          font-family: var(--font-haas);
          font-size: 15px;
          color: rgba(255,255,255,0.55);
          padding: var(--sp1) 0;
          text-decoration: none;
          transition: color var(--e-fast), padding-left var(--e-fast);
        }
        .menu-group a:hover { color: var(--t1); padding-left: var(--sp1); }
        .menu-group.products a {
          font-family: var(--font-aeonik);
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
        }
        .menu-group.products a:hover { color: var(--green); padding-left: var(--sp1); }
        .menu-group.soon .menu-group-title { color: rgba(255,255,255,0.2); }
        .menu-group.soon a { font-size: 12px; color: rgba(255,255,255,0.28); padding: 3px 0; }
        .menu-group.soon a:hover { color: rgba(255,255,255,0.6); }

        .menu-footer {
          padding: var(--sp3) var(--sp8);
          border-top: 1px solid var(--b1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: ${isOpen ? 1 : 0};
          transition: opacity 300ms ease 280ms;
        }
        .menu-footer-socials { display: flex; gap: var(--sp6); }
        .menu-footer-socials a {
          font-family: var(--font-haas);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color var(--e-fast);
        }
        .menu-footer-socials a:hover { color: var(--t1); }
        .menu-footer-tagline {
          font-family: var(--font-haas);
          font-size: 11px;
          color: rgba(255,255,255,0.28);
        }
        .menu-footer-tagline .accent { color: var(--green); }

        /* ════════════════════════════════════════════
           TABLET 769–1024px: pill smaller, 3 items
        ════════════════════════════════════════════ */
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-pill a { font-size: 13px; padding: 8px 13px; }
          .menu-split { grid-template-columns: 1fr 240px; }
          .menu-left  { padding: var(--sp6) var(--sp6) var(--sp5); }
          .menu-right { padding: var(--sp6) var(--sp6) var(--sp5) var(--sp5); }
          .menu-footer { padding: var(--sp3) var(--sp6); }
        }

        /* ════════════════════════════════════════════
           MOBILE ≤ 768px
        ════════════════════════════════════════════ */
        @media (max-width: 768px) {
          #site-header {
            top: var(--sp3);
            padding: 0 var(--sp4);
          }
          .nav-panel {
            top: var(--sp3);
            width: calc(100% - var(--sp8));
          }
          .nav-logo img { height: 18px !important; }
          /* Pill smaller on mobile */
          .nav-pill { gap: 2px; padding: 4px; }
          .nav-pill a { font-size: 12px; padding: 7px 11px; }
          .nav-cta { font-size: 12px; padding: 0 var(--sp4); height: 32px; }
          .nav-burger { width: 32px; height: 32px; }
          .nav-panel-spacer { height: 56px; }
          .menu-split {
            display: flex !important;
            flex-direction: column;
          }
          .menu-left {
            padding: var(--sp5) var(--sp4) var(--sp4);
            border-right: none;
            border-bottom: 1px solid var(--b1);
          }
          .menu-nav-link { font-size: 26px; letter-spacing: -0.4px; }
          .menu-right {
            padding: var(--sp4);
            background: transparent;
            flex-direction: row;
            flex-wrap: wrap;
            gap: var(--sp5);
          }
          .menu-group { flex: 1; min-width: 110px; }
          .menu-group a { font-size: 13px; }
          .menu-footer {
            padding: var(--sp3) var(--sp4);
            flex-direction: column;
            align-items: flex-start;
            gap: var(--sp2);
          }
          .menu-footer-socials { gap: var(--sp4); }
        }

        @media (max-width: 480px) {
          .nav-logo img { height: 16px !important; }
          /* Very small: hide pill, keep CTA + burger */
          .nav-pill { display: none !important; }
          .menu-nav-link { font-size: 22px; }
          .menu-right { flex-direction: column; gap: var(--sp4); }
          .menu-group { min-width: unset; }
        }
      `}</style>

      {/* Backdrop */}
      <div className="nav-backdrop" onClick={() => setIsOpen(false)} />

      {/* Menu panel — sits behind header, expands downward */}
      <div className="nav-panel" aria-hidden={!isOpen}>
        <div className="nav-panel-spacer" />
        <div className="nav-panel-inner">
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

      {/* ── Single header: logo | pill | actions ── */}
      <header ref={headerRef} id="site-header">
        <Link href="/" className="nav-logo">
          {!imgError ? (
            <Image
              src="https://madebynemo.com/storage/2025/05/nemo-white.png"
              alt="Nemo"
              width={80}
              height={20}
              style={{ height: 20, width: "auto" }}
              onError={() => setImgError(true)}
              unoptimized
            />
          ) : (
            <span className="nav-logo-fallback">NEMO</span>
          )}
        </Link>

        <ul className="nav-pill">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={active ? "active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          <Link href="/contact" className="nav-cta">
            Let&apos;s talk
          </Link>
          <button
            className={`nav-burger${isOpen ? " is-open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </header>
    </>
  );
}
