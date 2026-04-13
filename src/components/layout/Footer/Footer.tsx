import Image from "next/image";
import Link from "next/link";
import { CairoTime } from "./CairoTime";
import { SubscribeForm } from "./SubscribeForm";

/* ── Data ─────────────────────────────── */
const COLS = [
  {
    title: "Explore",
    links: [
      { label: "Home",     href: "/" },
      { label: "Services", href: "/services" },
      { label: "Work",     href: "/work" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",   href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Soon",
    links: [
      { label: "Growth plan", dim: true },
      { label: "Affiliate",   dim: true },
      { label: "Charity",     dim: true },
    ],
  },
  {
    title: "Updates",
    links: [{ label: "LEIILA", href: "#" }],
  },
] as const;

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/madebynemo" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/madebynemo" },
];

const LEGAL = [
  { label: "Cookie Policy",    href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy",   href: "/privacy" },
];

/* ── Component ─────────────────────────── */
export function Footer() {
  return (
    <footer data-nav-dark className="footer-root">

      {/* ① Nav columns */}
      <div className="footer-nav">
        <div className="footer-nav-inner">
          {COLS.map((col) => (
            <div key={col.title}>
              <p className="footer-col-title">{col.title}</p>
              <ul className="footer-links">
                {col.links.map((l) =>
                  "dim" in l && l.dim ? (
                    <li key={l.label}>
                      <span className="footer-link-dim">{l.label}</span>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link href={"href" in l ? l.href : "#"} className="footer-link">
                        {l.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ② Work with us + Cairo clock */}
      <div className="footer-middle">
        <div className="footer-work-col">
          <h3 className="footer-work-heading">Work with us</h3>
          <Link href="/contact" className="btn-get-in-touch">
            Get <em>in</em> touch
          </Link>
        </div>

        <div className="footer-location-col">
          <p className="footer-location-city">Cairo</p>
          <CairoTime />
        </div>
      </div>

      {/* ③ Subscribe + Social */}
      <div className="footer-top">
        <div className="footer-subscribe-col">
          <p className="footer-col-heading">Sign up for updates</p>
          <SubscribeForm />
        </div>

        <div className="footer-social-col">
          <p className="footer-col-heading">Stay connected</p>
          <ul className="footer-social-list">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ④ Giant NEMO wordmark */}
      <div className="footer-giant" aria-hidden="true">
        <Image
          src="https://madebynemo.com/storage/2025/05/nemo-white.png"
          alt=""
          width={1100}
          height={200}
          draggable={false}
          unoptimized
          className="footer-giant-img"
        />
      </div>

      {/* ⑤ Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copy">© 2026 Nemo | All rights reserved.</span>
          <div className="footer-legal">
            {LEGAL.map((l) => (
              <Link key={l.label} href={l.href} className="footer-legal-link">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Root ── */
        .footer-root {
          background: #000;
          margin: 0;
        }

        /* ── Nav columns ── */
        .footer-nav {
          padding: 80px 80px 60px;
          border-bottom: 1px solid var(--b1);
        }
        .footer-nav-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }
        .footer-col-title {
          font-family: var(--font-aeonik);
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 400;
          color: rgba(255,255,255,0.35);
          margin-bottom: 28px;
          letter-spacing: -0.5px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-link {
          font-family: var(--font-haas);
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 200ms ease;
          display: inline-block;
        }
        .footer-link:hover { color: #fff; }
        .footer-link-dim {
          font-family: var(--font-haas);
          font-size: 14px;
          color: rgba(255,255,255,0.25);
          cursor: default;
        }

        /* ── Middle: Work with us + Cairo ── */
        .footer-middle {
          padding: 60px 80px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid var(--b1);
        }
        .footer-work-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .footer-work-heading {
          font-family: var(--font-aeonik);
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 400;
          color: #fff;
          letter-spacing: -1px;
          line-height: 1.1;
          margin: 0;
        }
        .btn-get-in-touch {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-haas);
          font-size: 14px;
          font-weight: 400;
          color: #111;
          background: #fff;
          border: none;
          border-radius: var(--r-sm);
          padding: 12px 28px;
          text-decoration: none;
          transition: opacity 200ms ease;
          white-space: nowrap;
          width: fit-content;
        }
        .btn-get-in-touch:hover { opacity: 0.85; }
        .btn-get-in-touch em {
          font-style: normal;
          color: var(--green);
          margin: 0 4px;
        }
        .footer-location-col { text-align: right; }
        .footer-location-city {
          font-family: var(--font-aeonik);
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 400;
          color: rgba(255,255,255,0.2);
          letter-spacing: -2px;
          line-height: 1;
          margin-bottom: 8px;
        }

        /* ── Top: Subscribe + Social ── */
        .footer-top {
          padding: 100px 80px 80px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
        }
        .footer-subscribe-col {
          display: flex;
          flex-direction: column;
          gap: 36px;
          max-width: 420px;
          flex: 1;
        }
        .footer-social-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-start;
          flex-shrink: 0;
        }
        .footer-col-heading {
          font-family: var(--font-aeonik);
          font-size: 28px;
          font-weight: 400;
          color: #fff;
          letter-spacing: -0.5px;
          margin: 0;
          line-height: 1.2;
        }
        .footer-social-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-social-link {
          font-family: var(--font-aeonik);
          font-size: 28px;
          font-weight: 400;
          color: #fff;
          text-decoration: none;
          transition: opacity 200ms ease;
          display: inline-block;
          letter-spacing: -0.5px;
        }
        .footer-social-link:hover { opacity: 0.5; }

        /* ── Giant NEMO wordmark ── */
        .footer-giant {
          overflow: hidden;
          padding: 60px 40px 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-giant-img {
          width: 100%;
          max-width: 1100px;
          height: auto;
          display: block;
          -webkit-mask-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 88%);
          mask-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 88%);
          user-select: none;
          pointer-events: none;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          position: relative;
          padding: 20px 80px;
        }
        .footer-bottom::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg,
            rgba(53,214,135,0.7) 0%,
            var(--green) 50%,
            rgba(53,214,135,0.7) 100%
          );
          animation: glow-line 3s ease-in-out infinite;
        }
        .footer-bottom-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-copy {
          font-family: var(--font-haas);
          font-size: 13px;
          color: rgba(255,255,255,0.55);
        }
        .footer-legal {
          display: flex;
          gap: 28px;
        }
        .footer-legal-link {
          font-family: var(--font-haas);
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 200ms ease;
        }
        .footer-legal-link:hover { color: #fff; }
      `}</style>
    </footer>
  );
}
