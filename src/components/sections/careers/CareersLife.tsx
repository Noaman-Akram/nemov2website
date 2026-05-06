import { Reveal } from "@/components/ui/Reveal";

const PERKS = [
  { title: "Equity from day one", body: "You're building this with us. Meaningful equity, not tokens." },
  { title: "Remote-first culture", body: "Async by default. Work where you do your best thinking." },
  { title: "Learning budget", body: "Annual allowance for courses, books, conferences, tools." },
  { title: "Equipment sorted", body: "We'll set you up with whatever you need to do great work." },
  { title: "Small team, big scope", body: "No layers of approval. High ownership from day one." },
  { title: "Cairo HQ access", body: "Drop in whenever. Good coffee, better company." },
];

export function CareersLife() {
  return (
    <section className="cl-section" data-nav-dark>
      <div className="cl-inner">

        <Reveal>
          <div className="cl-header">
            <span className="cl-eyebrow">Life at Nemo</span>
            <h2 className="cl-h2">We take the work<br />seriously. Not ourselves.</h2>
          </div>
        </Reveal>

        <div className="cl-grid">
          {PERKS.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <div className="cl-card">
                <div className="cl-card-num">0{i + 1}</div>
                <div className="cl-card-title">{p.title}</div>
                <div className="cl-card-body">{p.body}</div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      <style>{`
        .cl-section {
          background: #111;
          padding: var(--sp20) var(--sp10);
        }
        .cl-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .cl-header {
          margin-bottom: var(--sp12);
        }
        .cl-eyebrow {
          display: block;
          font-family: var(--font-haas);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: var(--sp4);
        }
        .cl-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          letter-spacing: -1.5px;
          line-height: 1.08;
          color: #fff;
        }
        .cl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--r-lg);
          overflow: hidden;
          background: rgba(255,255,255,0.07);
        }
        .cl-card {
          background: #111;
          padding: var(--sp8);
          display: flex;
          flex-direction: column;
          gap: var(--sp3);
        }
        .cl-card-num {
          font-family: var(--font-aeonik);
          font-size: 12px;
          color: var(--green);
          letter-spacing: 0.5px;
          margin-bottom: var(--sp2);
        }
        .cl-card-title {
          font-family: var(--font-aeonik);
          font-size: 18px;
          font-weight: 400;
          letter-spacing: -0.4px;
          color: #fff;
          line-height: 1.2;
        }
        .cl-card-body {
          font-size: 13px;
          line-height: 1.65;
          color: rgba(255,255,255,0.4);
        }

        @media (max-width: 900px) {
          .cl-section { padding: var(--sp16) var(--sp5); }
          .cl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .cl-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
