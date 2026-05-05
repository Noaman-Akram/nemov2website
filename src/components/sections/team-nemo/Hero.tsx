import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="tn-hero">
      <div className="tn-hero-inner">
        <Reveal>
          <span className="eyebrow">// TEAM / FOUNDER</span>
        </Reveal>

        <div className="tn-hero-grid">
          <Reveal delay={80}>
            <div className="tn-hero-left">
              <h1 className="tn-hero-h1">
                Nemo
                <br />
                Akram
              </h1>
              <p className="tn-hero-role">Founder &amp; Creative Director</p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="tn-hero-right">
              <div className="tn-portrait" aria-hidden="true">
                <div className="tn-portrait-glow" />
                <div className="tn-portrait-mark">N</div>
              </div>
              <p className="tn-hero-meta">
                Based in Cairo · Working globally
                <br />
                <span className="tn-hero-meta-dim">Available for new projects · 2026</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .tn-hero {
          padding: calc(var(--sp20) + 56px) var(--sp10) var(--sp16);
        }
        .tn-hero-inner {
          max-width: var(--container);
          margin: 0 auto;
          width: 100%;
        }
        .tn-hero-grid {
          margin-top: var(--sp10);
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: var(--sp16);
          align-items: end;
        }
        .tn-hero-h1 {
          font-family: var(--font-aeonik);
          font-size: clamp(56px, 8vw, 132px);
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: -2px;
          color: var(--black);
          margin: 0;
        }
        .tn-hero-role {
          font-family: var(--font-haas);
          font-size: 15px;
          color: #555;
          margin-top: var(--sp6);
        }
        .tn-hero-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--sp6);
        }
        .tn-portrait {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: var(--r-lg);
          background:
            linear-gradient(160deg, #1A1A1A 0%, #0D0D0D 60%, #080808 100%);
          border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tn-portrait-glow {
          position: absolute;
          inset: -20%;
          background: radial-gradient(circle at 30% 30%, var(--green-dim), transparent 60%);
          pointer-events: none;
        }
        .tn-portrait-mark {
          font-family: var(--font-aeonik);
          font-size: 220px;
          font-weight: 400;
          letter-spacing: -12px;
          color: rgba(255,255,255,0.05);
          line-height: 1;
          position: relative;
        }
        .tn-hero-meta {
          font-family: var(--font-haas);
          font-size: 13px;
          color: #555;
          line-height: 1.6;
        }
        .tn-hero-meta-dim { color: #999; }

        @media (max-width: 900px) {
          .tn-hero { padding: calc(var(--sp20) + 56px) var(--sp5) var(--sp12); }
          .tn-hero-grid { grid-template-columns: 1fr; gap: var(--sp10); }
        }
      `}</style>
    </section>
  );
}
