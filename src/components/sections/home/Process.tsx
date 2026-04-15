import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="process" data-nav-dark className="process-section">
      <div className="process-inner">
        <Reveal>
          <h2 className="process-title">Accelerate your vision with our tailored process.</h2>
        </Reveal>

        <div className="process-grid">
          {/* STEP 1: Discover */}
          <Reveal delay={100}>
            <div className="process-card">
              <div className="process-icon">
                {/* Concentric Circles SVG representing Discover */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="23.5" stroke="var(--green)" strokeWidth="1" strokeOpacity="0.4" />
                  <circle cx="24" cy="24" r="18.5" stroke="var(--green)" strokeWidth="1" strokeOpacity="0.6" />
                  <circle cx="24" cy="24" r="13.5" stroke="var(--green)" strokeWidth="1" strokeOpacity="0.8" />
                  <circle cx="24" cy="24" r="8.5" stroke="var(--green)" strokeWidth="1" />
                </svg>
              </div>
              <h3 className="process-step-title">Discover</h3>
              <p className="process-step-desc">
                Surface context-aware insights securely grounded in your institutional knowledge and vision.
              </p>
            </div>
          </Reveal>

          {/* STEP 2: Research */}
          <Reveal delay={200}>
            <div className="process-card">
              <div className="process-icon">
                {/* Atom/Structure SVG representing Research */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2Z" stroke="var(--green)" strokeWidth="1" strokeOpacity="0.4"/>
                  <ellipse cx="24" cy="24" rx="22" ry="7" transform="rotate(45 24 24)" stroke="var(--green)" strokeWidth="1" strokeOpacity="0.7"/>
                  <ellipse cx="24" cy="24" rx="22" ry="7" transform="rotate(-45 24 24)" stroke="var(--green)" strokeWidth="1" strokeOpacity="0.7"/>
                  <circle cx="24" cy="24" r="3" fill="var(--green)" />
                </svg>
              </div>
              <h3 className="process-step-title">Research</h3>
              <p className="process-step-desc">
                Quickly draft outlines, validate technologies, and create custom architectures for your needs.
              </p>
            </div>
          </Reveal>

          {/* STEP 3: Development */}
          <Reveal delay={300}>
            <div className="process-card">
              <div className="process-icon">
                {/* Stacked tech/grid SVG representing Development/Automate */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 16L24 6L46 16L24 26L2 16Z" stroke="var(--green)" strokeWidth="1" strokeOpacity="0.4" strokeLinejoin="round"/>
                  <path d="M2 24L24 34L46 24" stroke="var(--green)" strokeWidth="1" strokeOpacity="0.7" strokeLinejoin="round"/>
                  <path d="M2 32L24 42L46 32" stroke="var(--green)" strokeWidth="1" strokeLinejoin="round"/>
                  <path d="M24 6V42" stroke="var(--green)" strokeWidth="1" strokeOpacity="0.3"/>
                  <path d="M13 11L13 37" stroke="var(--green)" strokeWidth="1" strokeOpacity="0.3"/>
                  <path d="M35 11L35 37" stroke="var(--green)" strokeWidth="1" strokeOpacity="0.3"/>
                </svg>
              </div>
              <h3 className="process-step-title">Development</h3>
              <p className="process-step-desc">
                Accelerate software builds with advanced agents that engineer, reason, and act across your systems.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .process-section {
          background: var(--black);
          padding: var(--sp20) var(--sp10);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .process-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .process-title {
          font-family: var(--font-aeonik);
          color: var(--t1);
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -1px;
          margin: 0 0 var(--sp16);
        }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--sp12);
        }
        .process-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .process-icon {
          margin-bottom: var(--sp6);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .process-step-title {
          font-family: var(--font-haas);
          color: var(--t1);
          font-size: 20px;
          font-weight: 500;
          margin: 0 0 var(--sp3);
        }
        .process-step-desc {
          font-family: var(--font-haas);
          color: var(--t-off);
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 900px) {
          .process-section {
            padding: var(--sp16) var(--sp5);
          }
          .process-grid {
            grid-template-columns: 1fr;
            gap: var(--sp10);
          }
        }
      `}</style>
    </section>
  );
}
