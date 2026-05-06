import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "8+", label: "Years building" },
  { value: "60+", label: "Projects shipped" },
  { value: "3", label: "Open roles" },
  { value: "2", label: "Offices" },
];

export function CareersHero() {
  return (
    <section className="ch-section">
      <div className="ch-inner">
        <Reveal>
          <span className="ch-eyebrow">Careers</span>
          <h1 className="ch-h1">
            Do the best work<br />
            of your <em>life.</em>
          </h1>
          <p className="ch-lead">
            We're a small, focused team building digital products that matter.
            We hire for craft, curiosity, and the drive to do things properly.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="ch-stats">
            {STATS.map((s) => (
              <div key={s.label} className="ch-stat">
                <div className="ch-stat-val">{s.value}</div>
                <div className="ch-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .ch-section {
          padding: var(--sp20) var(--sp10) var(--sp16);
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .ch-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .ch-eyebrow {
          display: block;
          font-family: var(--font-haas);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: var(--sp5);
        }
        .ch-h1 {
          font-family: var(--font-aeonik);
          font-size: clamp(52px, 7vw, 96px);
          font-weight: 400;
          letter-spacing: -3px;
          line-height: 0.96;
          color: #111;
          margin-bottom: var(--sp8);
        }
        .ch-h1 em {
          font-style: normal;
          color: var(--green);
        }
        .ch-lead {
          font-family: var(--font-haas);
          font-size: 17px;
          line-height: 1.7;
          color: #666;
          max-width: 520px;
          margin-bottom: var(--sp12);
        }
        .ch-stats {
          display: flex;
          gap: var(--sp12);
          flex-wrap: wrap;
          padding-top: var(--sp10);
          border-top: 1px solid rgba(0,0,0,0.07);
        }
        .ch-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ch-stat-val {
          font-family: var(--font-aeonik);
          font-size: 36px;
          font-weight: 400;
          letter-spacing: -1.5px;
          color: #111;
          line-height: 1;
        }
        .ch-stat-label {
          font-family: var(--font-haas);
          font-size: 13px;
          color: #888;
        }
        @media (max-width: 700px) {
          .ch-section { padding: var(--sp16) var(--sp5) var(--sp12); }
          .ch-h1 { letter-spacing: -2px; }
          .ch-stats { gap: var(--sp8); }
          .ch-stat-val { font-size: 28px; }
        }
      `}</style>
    </section>
  );
}
