import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function CareersNoRole() {
  return (
    <section className="cnr-section">
      <div className="cnr-inner">
        <Reveal>
          <div className="cnr-card">
            <div className="cnr-left">
              <span className="cnr-eyebrow">Not seeing your role?</span>
              <h2 className="cnr-h2">
                We always want to hear<br />from exceptional people.
              </h2>
              <p className="cnr-body">
                If you think you belong here but don&apos;t see the right opening,
                send us a note anyway. We keep strong candidates on file and
                reach out when the time is right.
              </p>
            </div>
            <div className="cnr-right">
              <Link href="mailto:hiring@madebynemo.com" className="cnr-btn-primary">
                Send a speculative CV
              </Link>
              <Link href="/contact" className="cnr-btn-ghost">
                Get in touch
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .cnr-section {
          padding: var(--sp10) var(--sp10) var(--sp20);
        }
        .cnr-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .cnr-card {
          background: #111;
          border-radius: var(--r-xl);
          padding: var(--sp16) var(--sp16);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--sp10);
          flex-wrap: wrap;
        }
        .cnr-left {
          max-width: 560px;
        }
        .cnr-eyebrow {
          display: block;
          font-family: var(--font-haas);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: var(--sp5);
        }
        .cnr-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 400;
          letter-spacing: -1px;
          line-height: 1.1;
          color: #fff;
          margin-bottom: var(--sp5);
        }
        .cnr-body {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255,255,255,0.4);
          max-width: 440px;
        }
        .cnr-right {
          display: flex;
          flex-direction: column;
          gap: var(--sp3);
          flex-shrink: 0;
        }
        .cnr-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          padding: 0 var(--sp8);
          border-radius: var(--r-pill);
          background: var(--green);
          color: #111;
          font-family: var(--font-haas);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: opacity var(--e-fast);
          white-space: nowrap;
        }
        .cnr-btn-primary:hover { opacity: 0.88; }
        .cnr-btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          padding: 0 var(--sp8);
          border-radius: var(--r-pill);
          background: transparent;
          color: rgba(255,255,255,0.55);
          font-family: var(--font-haas);
          font-size: 14px;
          border: 1px solid rgba(255,255,255,0.14);
          text-decoration: none;
          transition: border-color var(--e-fast), color var(--e-fast);
          white-space: nowrap;
        }
        .cnr-btn-ghost:hover {
          border-color: rgba(255,255,255,0.35);
          color: #fff;
        }

        @media (max-width: 800px) {
          .cnr-section { padding: var(--sp5) var(--sp5) var(--sp16); }
          .cnr-card { padding: var(--sp10) var(--sp8); flex-direction: column; align-items: flex-start; }
          .cnr-right { flex-direction: row; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}
