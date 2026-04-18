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

  useEffect(() => {
    const closeMenu = window.setTimeout(() => setIsOpen(false), 0);
    return () => window.clearTimeout(closeMenu);
  }, [pathname]);
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
        #site-header {
          --nav-offset-top: var(--sp3);
          --nav-outer-x: var(--sp6);
          --nav-shell-pad-left: var(--sp4);
          --nav-shell-pad-right: var(--sp3);
          --nav-topbar-height: calc(var(--sp12) + var(--sp1));
        }

        #site-header {
          position: fixed;
          top: var(--nav-offset-top);
          left: var(--nav-outer-x);
          right: var(--nav-outer-x);
          z-index: 900;
          pointer-events: none;
        }

        .nav-shell {
          max-width: var(--container);
          margin: 0 auto;
          border-radius: var(--r-xl);
          overflow: hidden;
          pointer-events: auto;
          background: ${isOpen ? "#141414" : "transparent"};
          border: 1px solid ${isOpen ? "var(--b1)" : "transparent"};
          backdrop-filter: ${isOpen ? "blur(20px)" : "none"};
          -webkit-backdrop-filter: ${isOpen ? "blur(20px)" : "none"};
          transition: background 350ms ease, border-color 350ms ease, backdrop-filter 350ms ease;
        }

        .nav-topbar {
          position: relative;
          display: grid;
          grid-template-columns: max-content 1fr max-content;
          align-items: center;
          gap: var(--sp2);
          min-height: var(--nav-topbar-height);
          padding: 0 var(--nav-shell-pad-right) 0 var(--nav-shell-pad-left);
        }

        .nav-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          line-height: 0;
          justify-self: start;
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

        .nav-pill-wrap {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .nav-pill {
          display: flex;
          gap: var(--sp1);
          list-style: none;
          align-items: center;
          background: ${dark || isOpen ? "rgba(20,20,20,0.78)" : "rgba(245,245,240,0.88)"};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid ${dark || isOpen ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)"};
          border-radius: var(--r-pill);
          padding: 5px;
          margin: 0;
          white-space: nowrap;
          opacity: ${isOpen ? 0 : 1};
          visibility: ${isOpen ? "hidden" : "visible"};
          transform: scale(${isOpen ? 0.96 : 1});
          pointer-events: ${isOpen ? "none" : "auto"};
          transition: opacity 260ms ease, visibility 260ms ease, transform 320ms cubic-bezier(0.16,1,0.3,1),
                      background 350ms ease, border-color 350ms ease;
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
          pointer-events: ${isOpen ? "none" : "auto"};
          transition: background 200ms ease, color 200ms ease;
          color: ${dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)"};
        }
        .nav-pill a:hover { color: ${dark ? "#fff" : "#111"}; }
        .nav-pill a.active {
          color: ${dark ? "#fff" : "#111"};
          background: ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"};
        }

        .nav-actions {
          display: flex;
          gap: var(--sp2);
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
          justify-self: end;
          width: max-content;
        }
        .nav-cta {
          font-family: var(--font-haas);
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
          border-radius: var(--r-pill);
          padding: 0 var(--sp5);
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          background: ${isOpen ? "var(--green)" : "rgba(245,245,240,0.92)"};
          color: ${isOpen ? "var(--black)" : "#111"};
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid ${isOpen ? "var(--b-green)" : dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"};
          transition: background 300ms ease, border-color 300ms ease, color 300ms ease;
        }
        .nav-cta:hover {
          background: ${isOpen ? "var(--green)" : "rgba(228,230,222,0.97)"};
        }

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
          line-height: 0;
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

        .nav-backdrop {
          position: fixed;
          inset: 0;
          z-index: 850;
          background: rgba(0,0,0,0.5);
          opacity: ${isOpen ? 1 : 0};
          pointer-events: ${isOpen ? "auto" : "none"};
          transition: opacity 350ms ease;
        }

        .nav-menu-body {
          display: grid;
          grid-template-rows: ${isOpen ? "1fr" : "0fr"};
          border-top: 1px solid ${isOpen ? "var(--b1)" : "transparent"};
          transition: grid-template-rows 460ms cubic-bezier(0.16,1,0.3,1),
                      border-color 300ms ease;
        }
        .nav-menu-overflow {
          overflow: hidden;
          min-height: 0;
        }
        .nav-menu-scroll {
          max-height: calc(100vh - var(--nav-offset-top) - var(--nav-topbar-height) - var(--sp4));
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }

        .menu-split {
          display: grid;
          grid-template-columns: 1fr 360px;
          overflow: hidden;
        }
        .menu-left {
          padding: var(--sp5) var(--sp8) var(--sp6);
          border-right: 1px solid var(--b1);
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
          padding: var(--sp5) var(--sp8) var(--sp6) var(--sp6);
          background: rgba(0,0,0,0.18);
          display: flex;
          flex-direction: column;
          gap: var(--sp6);
          opacity: ${isOpen ? 1 : 0};
          transform: ${isOpen ? "translateX(0)" : "translateX(var(--sp8))"};
          transition: opacity 340ms ease, transform 420ms cubic-bezier(0.22,1,0.36,1);
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
          margin: 0;
        }
        .menu-footer-tagline .accent { color: var(--green); }

        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-pill a { font-size: 13px; padding: 8px 14px; }
          .menu-split { grid-template-columns: 1fr 240px; }
          .menu-left  { padding: var(--sp6) var(--sp6) var(--sp5); }
          .menu-right { padding: var(--sp6) var(--sp6) var(--sp5) var(--sp5); }
          .menu-footer { padding: var(--sp3) var(--sp6); }
        }

        @media (max-width: 768px) {
          #site-header {
            --nav-offset-top: var(--sp2);
            --nav-outer-x: var(--sp3);
            --nav-shell-pad-left: var(--sp3);
            --nav-shell-pad-right: var(--sp2);
            --nav-topbar-height: var(--sp12);
          }
          .nav-topbar { min-height: var(--nav-topbar-height); }
          .nav-logo img { height: 18px !important; }
          .nav-pill { gap: 2px; padding: 4px; }
          .nav-pill a { font-size: 12px; padding: 7px 11px; }
          .nav-cta { font-size: 12px; padding: 0 var(--sp3); height: 32px; }
          .nav-burger { width: 32px; height: 32px; }
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
            transform: none;
          }
          .menu-group { flex: 1; min-width: 110px; }
          .menu-group a { font-size: 13px; }
          .menu-footer {
            padding: var(--sp3) var(--sp4);
            flex-direction: column;
            align-items: flex-start;
            gap: var(--sp2);
          }
          .menu-footer-socials {
            gap: var(--sp3) var(--sp4);
            flex-wrap: wrap;
          }
        }

        @media (max-width: 600px) {
          .nav-pill-wrap { display: none; }
        }

        @media (max-width: 480px) {
          .nav-logo img { height: 16px !important; }
          .nav-cta { font-size: 11px; padding: 0 var(--sp3); height: 30px; }
          .nav-burger { width: 30px; height: 30px; }
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
                  style={{ height: 20, width: "auto" }}
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
                        className={active ? "active" : ""}
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
                className={`nav-burger${isOpen ? " is-open" : ""}`}
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
