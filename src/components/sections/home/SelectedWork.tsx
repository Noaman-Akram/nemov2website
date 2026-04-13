import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function SelectedWork() {
  return (
    <section id="about" className="selected-work">
      <div className="selected-work-inner">
        <Reveal>
          <div className="work-header">
            <div>
              <span className="eyebrow">// SELECTED WORK</span>
              <h2 className="work-h2">
                Discover how we&apos;re driving{" "}
                <em style={{ fontStyle: "normal", color: "var(--green)" }}>change</em>
              </h2>
            </div>
            <Link href="/work" className="btn-outline-pill">
              View all →
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        .selected-work {
          padding: 140px var(--sp10);
        }
        .selected-work-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .work-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .eyebrow {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: var(--r-sm);
          font-family: 'Courier New', monospace;
          font-size: 11px;
          font-weight: 700;
          color: #555;
          letter-spacing: 0.1em;
          margin-bottom: var(--sp6);
        }
        .work-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -1px;
          color: #111;
        }
        .btn-outline-pill {
          display: inline-flex;
          align-items: center;
          gap: var(--sp2);
          font-family: var(--font-haas);
          font-size: 14px;
          font-weight: 500;
          color: #111;
          border: 1px solid var(--b-dark);
          border-radius: var(--r-pill);
          height: 48px;
          padding: 0 var(--sp6);
          text-decoration: none;
          transition: background var(--e-fast);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .btn-outline-pill:hover { background: rgba(0,0,0,0.03); }

        @media (max-width: 900px) {
          .selected-work { padding: 80px var(--sp5); }
          .work-header { flex-direction: column; gap: 20px; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}
