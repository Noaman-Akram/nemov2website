import { Reveal } from "@/components/ui/Reveal";

const MILESTONES = [
  { year: "2018", title: "First freelance contracts", body: "Designing and building MVPs for early-stage startups in Cairo." },
  { year: "2020", title: "Lead designer, fintech",   body: "Joined a Berlin-based fintech and shipped a payments platform used across the EU." },
  { year: "2022", title: "Independent consulting",   body: "Started taking on dedicated long-form engagements with founders he believed in." },
  { year: "2024", title: "Founded Nemo",             body: "Launched the studio with a clear thesis: small team, deep collaboration, exceptional craft." },
  { year: "2026", title: "Nemo V.2",                 body: "Rebuilt the studio brand and offering around a tighter set of services." },
];

export function Timeline() {
  return (
    <section className="tn-timeline">
      <div className="tn-timeline-inner">
        <Reveal>
          <span className="eyebrow">// JOURNEY</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="tn-timeline-h2">A short history.</h2>
        </Reveal>

        <ol className="tn-timeline-list">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.year} delay={120 + i * 60}>
              <li className="tn-timeline-row">
                <span className="tn-timeline-year">{m.year}</span>
                <div className="tn-timeline-content">
                  <h3 className="tn-timeline-title">{m.title}</h3>
                  <p className="tn-timeline-body">{m.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <style>{`
        .tn-timeline {
          padding: var(--sp16) var(--sp10);
        }
        .tn-timeline-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .tn-timeline-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -1px;
          color: var(--black);
          margin: var(--sp4) 0 var(--sp10);
        }
        .tn-timeline-list {
          display: flex;
          flex-direction: column;
        }
        .tn-timeline-row {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: var(--sp10);
          padding: var(--sp6) 0;
          border-top: 1px solid rgba(0,0,0,0.1);
          align-items: baseline;
        }
        .tn-timeline-row:last-child {
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        .tn-timeline-year {
          font-family: var(--font-aeonik);
          font-size: 20px;
          color: var(--green);
          letter-spacing: -0.5px;
        }
        .tn-timeline-title {
          font-family: var(--font-aeonik);
          font-size: 20px;
          font-weight: 400;
          letter-spacing: -0.5px;
          color: var(--black);
          margin-bottom: var(--sp2);
        }
        .tn-timeline-body {
          font-family: var(--font-haas);
          font-size: 14px;
          line-height: 1.65;
          color: #555;
          max-width: 560px;
        }

        @media (max-width: 900px) {
          .tn-timeline { padding: var(--sp12) var(--sp5); }
          .tn-timeline-row { grid-template-columns: 1fr; gap: var(--sp2); }
        }
      `}</style>
    </section>
  );
}
