import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Apply",
    body: "Send us your portfolio and a brief note. No cover letter required. We read everything.",
  },
  {
    n: "02",
    title: "Intro call",
    body: "A 30-minute conversation with someone from the team. No trick questions — just getting to know each other.",
  },
  {
    n: "03",
    title: "Work sample",
    body: "A short paid task relevant to the role. We want to see how you think, not just what you've done.",
  },
  {
    n: "04",
    title: "Final call",
    body: "Meet the wider team and ask us anything. We'll be straight with you on timeline and next steps.",
  },
];

export function CareersProcess() {
  return (
    <section className="cp-section">
      <div className="cp-inner">

        <Reveal>
          <div className="cp-header">
            <span className="cp-eyebrow">How we hire</span>
            <h2 className="cp-h2">Straightforward<br />from start to finish.</h2>
          </div>
        </Reveal>

        <div className="cp-steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="cp-step">
                <div className="cp-step-n">{s.n}</div>
                <div className="cp-step-content">
                  <div className="cp-step-title">{s.title}</div>
                  <div className="cp-step-body">{s.body}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      <style>{`
        .cp-section {
          padding: var(--sp20) var(--sp10);
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .cp-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .cp-header {
          margin-bottom: var(--sp12);
        }
        .cp-eyebrow {
          display: block;
          font-family: var(--font-haas);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
          margin-bottom: var(--sp3);
        }
        .cp-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 400;
          letter-spacing: -1px;
          color: #111;
          line-height: 1.1;
        }
        .cp-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .cp-step {
          padding: var(--sp8) var(--sp8) var(--sp8) 0;
          border-right: 1px solid rgba(0,0,0,0.07);
          padding-right: var(--sp8);
          display: flex;
          flex-direction: column;
          gap: var(--sp5);
        }
        .cp-step:first-child {
          padding-left: 0;
        }
        .cp-step:last-child {
          border-right: none;
        }
        .cp-step:not(:first-child) {
          padding-left: var(--sp8);
        }
        .cp-step-n {
          font-family: var(--font-aeonik);
          font-size: clamp(48px, 5vw, 72px);
          font-weight: 400;
          letter-spacing: -2px;
          line-height: 1;
          color: rgba(0,0,0,0.08);
        }
        .cp-step-content {
          display: flex;
          flex-direction: column;
          gap: var(--sp2);
        }
        .cp-step-title {
          font-family: var(--font-aeonik);
          font-size: 18px;
          font-weight: 400;
          letter-spacing: -0.3px;
          color: #111;
        }
        .cp-step-body {
          font-size: 13px;
          line-height: 1.65;
          color: #888;
        }

        @media (max-width: 900px) {
          .cp-section { padding: var(--sp16) var(--sp5); }
          .cp-steps {
            grid-template-columns: repeat(2, 1fr);
            gap: 1px;
            background: rgba(0,0,0,0.07);
            border: 1px solid rgba(0,0,0,0.07);
            border-radius: var(--r-md);
            overflow: hidden;
          }
          .cp-step {
            background: var(--off-white);
            border-right: none;
            padding: var(--sp6);
          }
          .cp-step:not(:first-child) { padding-left: var(--sp6); }
        }
        @media (max-width: 500px) {
          .cp-steps { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
