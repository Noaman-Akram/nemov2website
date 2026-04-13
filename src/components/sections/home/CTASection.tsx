import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  return (
    <section id="contact" className="cta-section">
      <Reveal>
        <div className="cta-card">
          <div className="cta-card-grid" aria-hidden="true" />
          <div className="cta-inner">
            <span className="eyebrow">// READY TO START?</span>
            <h2 className="cta-h2">
              Turn tech into your biggest{" "}
              <em style={{ fontStyle: "normal", color: "var(--green)" }}>advantage</em>
            </h2>
            <p className="cta-desc">
              Discover how partnering with Nemo can drive your success and
              prepare you for what&apos;s next.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-cta-primary">
                Get a free consultation
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <style>{`
        .cta-section {
          padding: 0 var(--sp6) var(--sp10);
        }
        .cta-card {
          background: #E8FBF1;
          padding: 120px var(--sp10);
          text-align: center;
          position: relative;
          overflow: hidden;
          border-radius: var(--r-lg);
        }
        .cta-card-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, var(--green-dim) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }
        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: var(--container);
          margin: 0 auto;
        }
        .cta-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(36px, 4.5vw, 48px);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -1px;
          color: #111;
          margin-bottom: var(--sp4);
        }
        .cta-desc {
          font-family: var(--font-haas);
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          margin-bottom: var(--sp10);
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-buttons {
          display: flex;
          gap: var(--sp4);
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-cta-primary {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-haas);
          font-size: 14px;
          font-weight: 500;
          color: var(--t1);
          background: var(--black);
          border: none;
          border-radius: var(--r-pill);
          padding: 0 var(--sp8);
          height: 48px;
          text-decoration: none;
          transition: background var(--e-fast);
        }
        .btn-cta-primary:hover { background: var(--charcoal); }

        @media (max-width: 900px) {
          .cta-section { padding: 0 var(--sp4) var(--sp8); }
          .cta-card { padding: 80px var(--sp5); }
          .cta-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>
    </section>
  );
}
