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
        /* ══════════════════════════════════════════════════
           OUTER WRAPPER — NEVER moves. Always fixed at top.
           The shell beneath it opens downward like a dropdown.
        ══════════════════════════════════════════════════ */
        #site-header {
          position: fixed;
          top: var(--sp3);
          left: var(--sp6);
          right: var(--sp6);
          z-index: 900;
          pointer-events: none;
        }

        /* ══════════════════════════════════════════════════
           SHELL — one piece. Topbar stays put.
           Menu body grows downward from it.
        ══════════════════════════════════════════════════ */
        .nav-shell {
          max-width: var(--container);
          margin: 0 auto;
          background: ${isOpen ? "#141414" : "transparent"};
          border: 1px solid ${isOpen ? "var(--b1)" : "transparent"};
          border-radius: var(--r-xl);
          overflow: hidden;
          pointer-events: auto;
          transition:
            background 350ms ease,
            border-color 350ms ease;
        }

        /* ══════════════════════════════════════════════════
           TOP BAR — locked height, never shifts
        ══════════════════════════════════════════════════ */
        .nav-topbar {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: var(--sp4);
          height: 56px;
          padding: 0 var(--sp5);
        }

        /* ══════════════════════════════════════════════════
           LOGO — fixed px height, aspect-ratio preserved.
           Never shrinks with grid pressure.
        ══════════════════════════════════════════════════ */
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

        /* ══════════════════════════════════════════════════
           PILL NAV — center, fades away on open
        ══════════════════════════════════════════════════ */
        .nav-pill-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
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
          transition:
            opacity 260ms ease,
            visibility 260ms ease,
            transform 260ms ease,
            background 350ms ease,
            border-color 350ms ease;
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

        /* ══════════════════════════════════════════════════
           ACTIONS — right side
        ══════════════════════════════════════════════════ */
        .nav-actions {
          display: flex;
          gap: var(--sp3);
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        /* CTA: cream when closed → solid green when open */
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
        .nav-cta:hover {
          background: ${isOpen ? "var(--green-hover)" : "#d6d8c6"};
        }

        /* Burger → X */
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
        .nav-burger:hover {
          background: ${isOpen ? "rgba(255,255,255,0.14)" : (dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)")};
        }
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

        /* ══════════════════════════════════════════════════
           MENU BODY — grows downward from topbar.
           Scrollable so it never exceeds the viewport.
        ══════════════════════════════════════════════════ */
        .nav-menu-body {
          display: grid;
          grid-template-rows: ${isOpen ? "1fr" : "0fr"};
          border-top: 1px solid ${isOpen ? "var(--b1)" : "transparent"};
          transition:
            grid-template-rows 460ms cubic-bezier(0.16,1,0.3,1),
            border-color 300ms ease;
        }
        .nav-menu-overflow {
          overflow: hidden;
          min-height: 0;
        }
        /* Inner scroller — caps height so menu never takes full page */
        .nav-menu-scroll {
          max-height: calc(100vh - 80px);
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }

        /* ══════════════════════════════════════════════════
           SPLIT LAYOUT
           Left: big nav links  |  Right: slides in
        ══════════════════════════════════════════════════ */
        .menu-split {
          display: grid;
          grid-template-columns: 1fr ${isOpen ? "360px" : "0px"};
          transition: grid-template-columns 480ms cubic-bezier(0.16,1,0.3,1);
          overflow: hidden;
        }

        /* ── Left ── */
        .menu-left {
          padding: var(--sp8) var(--sp8) var(--sp6);
          border-right: 1px solid ${isOpen ? "var(--b1)" : "transparent"};
          opacity: ${isOpen ? 1 : 0};
          transform: ${isOpen ? "translateX(0)" : "translateX(-10px)"};
          transition:
            opacity 360ms ease 80ms,
            transform 400ms cubic-bezier(0.16,1,0.3,1) 80ms,
            border-color 380ms ease 100ms;
        }

        /*
          Primary links:
          - Readable by default (not dim)
          - Hover: arrow appears inline right after text, slides in from left
          - No justify-content space-between — arrow sits next to label
        */
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
        .menu-nav-link:hover .link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Right ── */
        .menu-right {
          padding: var(--sp8) var(--sp8) var(--sp6) var(--sp6);
          background: rgba(0,0,0,0.18);
          display: flex;
          flex-direction: column;
          gap: var(--sp6);
          opacity: ${isOpen ? 1 : 0};
          transform: ${isOpen ? "translateX(0)" : "translateX(28px)"};
          transition:
            opacity 360ms ease 180ms,
            transform 420ms cubic-bezier(0.16,1,0.3,1) 180ms;
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
        .menu-group.soon a {
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          padding: 3px 0;
        }
        .menu-group.soon a:hover { color: rgba(255,255,255,0.6); }

        /* ══════════════════════════════════════════════════
           FOOTER
        ══════════════════════════════════════════════════ */
        .menu-footer {
          padding: var(--sp3) var(--sp8);
          border-top: 1px solid var(--b1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: ${isOpen ? 1 : 0};
          transform: ${isOpen ? "translateY(0)" : "translateY(6px)"};
          transition:
            opacity 320ms ease 300ms,
            transform 380ms cubic-bezier(0.16,1,0.3,1) 300ms;
        }
        .menu-footer-socials {
          display: flex;
          gap: var(--sp6);
        }
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

        /* ══════════════════════════════════════════════════
           BACKDROP
        ══════════════════════════════════════════════════ */
        .nav-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 850;
          opacity: ${isOpen ? 1 : 0};
          pointer-events: ${isOpen ? "auto" : "none"};
          transition: opacity 350ms ease;
        }

        /* ══════════════════════════════════════════════════
           TABLET — 769–1024px
        ══════════════════════════════════════════════════ */
        @media (min-width: 769px) and (max-width: 1024px) {
          /* Hide pill nav, collapse to 2-col topbar */
          .nav-pill-wrap { display: none !important; }
          .nav-topbar {
            grid-template-columns: auto auto;
            justify-content: space-between;
          }
          .menu-split {
            grid-template-columns: 1fr ${isOpen ? "260px" : "0px"};
          }
          .menu-left  { padding: var(--sp6) var(--sp6) var(--sp5); }
          .menu-right { padding: var(--sp6) var(--sp6) var(--sp5) var(--sp5); }
          .menu-footer { padding: var(--sp3) var(--sp6); }
        }

        /* ══════════════════════════════════════════════════
           MOBILE — < 768px
           - Logo: fixed 18px height, never shrinks
           - Pill nav: hidden
           - Topbar: 2-col logo | actions
           - Menu: vertical stack, scrollable dropdown
        ══════════════════════════════════════════════════ */
        @media (max-width: 768px) {
          #site-header {
            top: var(--sp2);
            left: var(--sp3);
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--e-normal);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 40px 40px;
        }
        .nav-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }
        .menu-card {
          background: var(--off-white);
          border-radius: var(--radius-lg);
          padding: var(--sp10);
          color: var(--black);
          transform: translateY(20px);
          opacity: 0;
          transition: transform var(--e-normal), opacity var(--e-normal);
          box-shadow: var(--shadow-card);
          border: 1px solid var(--b-dark);
        }
        .nav-overlay.open .menu-card {
          transform: translateY(0);
          opacity: 1;
        }
        .nav-overlay.open .menu-card:nth-child(2) {
          transition-delay: 100ms;
        }
        .primary-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-aeonik);
          font-size: 32px;
          font-weight: 400;
          letter-spacing: -0.5px;
          padding: 12px 0;
          border-bottom: 1px solid var(--b-dark);
          color: var(--black);
          text-decoration: none;
          transition: all var(--e-fast);
        }
        .primary-link:last-child { border-bottom: none; }
        .primary-link .arrow { font-size: 24px; color: var(--b-dark); opacity: 0; transform: translateX(-10px); transition: all var(--e-fast); }
        .primary-link:hover { padding-left: 8px; color: var(--green); }
        .primary-link:hover .arrow { opacity: 1; transform: translateX(0); color: var(--green); }

        .menu-eyebrow {
          font-family: var(--font-aeonik);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--green);
          margin-bottom: 24px;
        }
        
        .grp-title {
          font-family: var(--font-aeonik);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--black);
          margin-bottom: 16px;
          border-bottom: 2px solid var(--green);
          display: inline-block;
          padding-bottom: 2px;
        }
        .grp-link {
          display: block;
          font-family: var(--font-haas);
          font-size: 14px;
          font-weight: 500;
          color: var(--gray);
          padding: 4px 0;
          text-decoration: none;
          transition: all var(--e-fast);
        }
        .grp-link:hover { color: var(--black); padding-left: 4px; }
        
        .burger {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-pill);
          background: ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"};
          border: 1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          cursor: pointer;
          pointer-events: auto;
          transition: all var(--e-fast);
        }
        .burger:hover { background: ${dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}; }
        .burger span { width: 14px; height: 1.5px; background: ${isOpen ? "var(--black)" : (dark ? "#fff" : "#111")}; border-radius: 1px; transition: all var(--e-normal); }
        .burger.open span:nth-child(1) { transform: translateY(2.75px) rotate(45deg); }
        .burger.open span:nth-child(2) { transform: translateY(-2.75px) rotate(-45deg); }

        .logo-txt {
          font-family: var(--font-aeonik);
          font-size: 17px;
          font-weight: 500;
          letter-spacing: -0.3px;
          display: flex;
          align-items: center;
          gap: 6px;
          color: ${isOpen ? "var(--black)" : (dark ? "var(--t1)" : "#111")};
          transition: color 400ms ease;
        }
        .logo-dot {
          width: 6px;
          height: 6px;
          background: var(--green);
          border-radius: 50%;
        }
      `}</style>

      {/* Backdrop */}
      <div className="nav-backdrop" onClick={() => setIsOpen(false)} />

      <header ref={headerRef} id="site-header">
        <div className="nav-shell">

          {/* ── Top bar — stays locked in place always ── */}
          <div className="nav-topbar">

            {/* Logo — fixed pixel height, flex-shrink:0 */}
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

            {/* Center pill — desktop only */}
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

            {/* Actions */}
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

          {/* ── Menu body — drops down, scrollable ── */}
          <div className="nav-menu-body" aria-hidden={!isOpen}>
            <div className="nav-menu-overflow">
              <div className="nav-menu-scroll">

                <div className="menu-split">
                  {/* Left: primary links */}
                  <div className="menu-left">
                    {MENU_LINKS.map((item) => (
                      <Link key={item.href} href={item.href} className="menu-nav-link">
                        {item.label}
                        <span className="link-arrow">→</span>
                      </Link>
                    ))}
                  </div>

                  {/* Right: secondary — slides in */}
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

                {/* Footer */}
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
