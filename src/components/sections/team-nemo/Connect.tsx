import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ROUTES } from "@/config/site";

const LINKS = [
  { label: "Email",     value: "nemo@madebynemo.com", href: "mailto:nemo@madebynemo.com" },
  { label: "Twitter",   value: "@madebynemo",         href: "https://twitter.com/madebynemo" },
  { label: "LinkedIn",  value: "in/nemoakram",        href: "https://linkedin.com/in/nemoakram" },
  { label: "Read.cv",   value: "read.cv/nemo",        href: "https://read.cv/nemo" },
];

export function Connect() {
  return (
    <section className="tn-connect">
      <div className="tn-connect-inner">
        <Reveal>
          <span className="eyebrow">// GET IN TOUCH</span>
        </Reveal>

        <div className="tn-connect-grid">
          <Reveal delay={80}>
            <div>
              <h2 className="tn-connect-h2">
                Have a project
                <br />
                in mind?
              </h2>
              <p className="tn-connect-sub">
                I read every message personally. Best for new engagements,
                speaking, or just saying hi.
              </p>
              <Link href={ROUTES.contact} className="tn-connect-cta">
                Start a project &nbsp;→
              </Link>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <ul className="tn-connect-list">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="tn-connect-row"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <span className="tn-connect-label">{link.label}</span>
                    <span className="tn-connect-value">
                      {link.value}
                      <span className="tn-connect-arrow" aria-hidden="true">↗</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <style>{`
        .tn-connect {
          padding: var(--sp20) var(--sp10);
        }
        .tn-connect-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .tn-connect-grid {
          margin-top: var(--sp8);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--sp16);
          align-items: start;
        }
        .tn-connect-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -1.5px;
          color: var(--black);
          margin: 0 0 var(--sp6);
        }
        .tn-connect-sub {
          font-family: var(--font-haas);
          font-size: 15px;
          line-height: 1.6;
          color: #555;
          max-width: 380px;
          margin-bottom: var(--sp8);
        }
        .tn-connect-cta {
          display: inline-flex;
          align-items: center;
          gap: var(--sp2);
          height: 44px;
          padding: 0 var(--sp6);
          background: var(--black);
          color: var(--off-white);
          border-radius: var(--r-pill);
          font-family: var(--font-haas);
          font-size: 14px;
          font-weight: 500;
          transition: background var(--e-fast);
        }
        .tn-connect-cta:hover { background: var(--charcoal); }

        .tn-connect-list {
          display: flex;
          flex-direction: column;
        }
        .tn-connect-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--sp5) 0;
          border-top: 1px solid rgba(0,0,0,0.12);
          transition: padding-left var(--e-fast);
        }
        .tn-connect-list li:last-child .tn-connect-row {
          border-bottom: 1px solid rgba(0,0,0,0.12);
        }
        .tn-connect-row:hover { padding-left: var(--sp2); }
        .tn-connect-label {
          font-family: 'Courier New', monospace;
          font-size: 11px;
          font-weight: 700;
          color: #999;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .tn-connect-value {
          font-family: var(--font-aeonik);
          font-size: 18px;
          color: var(--black);
          letter-spacing: -0.3px;
          display: inline-flex;
          align-items: center;
          gap: var(--sp2);
        }
        .tn-connect-arrow {
          color: var(--green);
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .tn-connect { padding: var(--sp16) var(--sp5); }
          .tn-connect-grid { grid-template-columns: 1fr; gap: var(--sp10); }
        }
      `}</style>
    </section>
  );
}
