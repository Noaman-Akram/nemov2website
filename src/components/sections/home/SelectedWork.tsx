import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const PROJECTS = [
  {
    title: "Tekronyx AIP",
    category: "AI · Product",
    image: "https://madebynemo.com/storage/2026/02/tkai-768x432.png",
    href: "https://madebynemo.com/projects/tekronyx-aip/",
  },
  {
    title: "Wadi Sabarah Lodge",
    category: "Branding · Web",
    image: "https://madebynemo.com/storage/2026/02/Slide-16_9-1-768x432.png",
    href: "https://madebynemo.com/projects/wadi-sabarah-lodge/",
  },
  {
    title: "EG Group — NEMO CRM",
    category: "SaaS · Product Design",
    image: "https://madebynemo.com/storage/2025/12/Frame-1597880417-1-768x545.png",
    href: "https://madebynemo.com/projects/2648/",
  },
  {
    title: "Almasria Home Decor",
    category: "E-commerce · Branding",
    image: "https://madebynemo.com/storage/2025/12/almasriahomedecor-1-768x432.png",
    href: "https://madebynemo.com/projects/almasria-home-decor/",
  },
];

export function SelectedWork() {
  return (
    <section id="about" className="sw-section">
      <div className="sw-inner">

        <Reveal>
          <div className="sw-header">
            <div>
              <span className="eyebrow">Selected Work</span>
              <h2 className="sw-h2">
                Discover how we&apos;re driving{" "}
                <em style={{ fontStyle: "normal", color: "var(--green)" }}>change</em>
              </h2>
            </div>
            <Link
              href="https://madebynemo.com/projects/"
              target="_blank"
              rel="noopener noreferrer"
              className="sw-btn"
            >
              View all →
            </Link>
          </div>
        </Reveal>

        <div className="sw-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <Link
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sw-card"
              >
                <div className="sw-card-img">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    unoptimized
                    style={{ objectFit: "cover", transition: "transform 500ms ease" }}
                  />
                </div>
                <div className="sw-card-foot">
                  <span className="sw-card-title">{p.title}</span>
                  <span className="sw-card-cat">{p.category}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>

      <style>{`
        .sw-section {
          padding: var(--sp20) var(--sp10);
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .sw-inner {
          max-width: var(--container);
          margin: 0 auto;
        }

        /* Header */
        .sw-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: var(--sp10);
        }
        .sw-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -1px;
          color: var(--black);
          margin: 0;
        }
        .sw-btn {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-haas);
          font-size: 14px;
          font-weight: 500;
          color: var(--black);
          border: 1px solid var(--b-dark);
          border-radius: var(--r-pill);
          height: 44px;
          padding: 0 var(--sp6);
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background var(--e-fast);
        }
        .sw-btn:hover { background: rgba(0,0,0,0.04); }

        /* Grid — 2 columns */
        .sw-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--sp4);
        }

        /* Card */
        .sw-card {
          display: block;
          text-decoration: none;
          border: 1px solid rgba(0,0,0,0.09);
          border-radius: var(--r-lg);
          overflow: hidden;
          background: #f0f0ec;
          transition: box-shadow var(--e-fast), border-color var(--e-fast);
        }
        .sw-card:hover {
          border-color: rgba(0,0,0,0.16);
          box-shadow: var(--shadow-md);
        }
        .sw-card:hover img {
          transform: scale(1.04) !important;
        }
        .sw-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .sw-card-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--sp4) var(--sp5);
          border-top: 1px solid rgba(0,0,0,0.07);
          gap: var(--sp4);
        }
        .sw-card-title {
          font-family: var(--font-aeonik);
          font-size: 15px;
          font-weight: 400;
          color: var(--black);
          letter-spacing: -0.2px;
        }
        .sw-card-cat {
          font-family: var(--font-haas);
          font-size: 11px;
          color: #888;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .sw-section { padding: var(--sp16) var(--sp5); }
          .sw-header { flex-direction: column; align-items: flex-start; gap: var(--sp5); }
          .sw-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
