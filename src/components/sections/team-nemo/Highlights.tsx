import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "8+",  label: "Years shipping product" },
  { value: "60+", label: "Brands launched" },
  { value: "12",  label: "Countries served" },
  { value: "1",   label: "Studio, by design" },
];

export function Highlights() {
  return (
    <section className="tn-stats" data-nav-dark>
      <div className="tn-stats-inner">
        <Reveal>
          <span className="eyebrow tn-stats-eyebrow">// BY THE NUMBERS</span>
        </Reveal>

        <div className="tn-stats-grid">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={80 + i * 60}>
              <div className="tn-stat">
                <div className="tn-stat-value">{stat.value}</div>
                <div className="tn-stat-label">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .tn-stats {
          background: var(--black);
          padding: var(--sp16) var(--sp10);
          border-radius: var(--r-lg);
          margin: 0 var(--sp10);
        }
        .tn-stats-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .tn-stats-eyebrow {
          color: var(--green) !important;
        }
        .tn-stats-grid {
          margin-top: var(--sp8);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--sp6);
        }
        .tn-stat {
          padding: var(--sp6) 0;
          border-top: 1px solid var(--b1);
        }
        .tn-stat-value {
          font-family: var(--font-aeonik);
          font-size: clamp(40px, 4.5vw, 64px);
          font-weight: 400;
          letter-spacing: -1.5px;
          color: var(--green);
          line-height: 1;
        }
        .tn-stat-label {
          font-family: var(--font-haas);
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          margin-top: var(--sp3);
        }

        @media (max-width: 900px) {
          .tn-stats { padding: var(--sp12) var(--sp5); margin: 0 var(--sp4); }
          .tn-stats-grid { grid-template-columns: repeat(2, 1fr); gap: var(--sp4); }
        }
      `}</style>
    </section>
  );
}
