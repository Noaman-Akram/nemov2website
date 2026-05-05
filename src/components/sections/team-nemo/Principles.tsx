import { Reveal } from "@/components/ui/Reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "Craft is a daily practice",
    body: "Quality isn't a phase at the end — it's the texture of every commit, every spacing token, every rounded corner.",
  },
  {
    n: "02",
    title: "Fewer clients, deeper work",
    body: "We take on a small number of engagements at a time so that every product gets the attention it deserves.",
  },
  {
    n: "03",
    title: "Ship, then refine",
    body: "Real users teach us more in a week than a quarter of internal review. We move fast and iterate honestly.",
  },
];

export function Principles() {
  return (
    <section className="tn-principles">
      <div className="tn-principles-inner">
        <Reveal>
          <span className="eyebrow">// HOW I WORK</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="tn-principles-h2">
            Three principles that guide
            <br />
            everything the studio ships.
          </h2>
        </Reveal>

        <div className="tn-principles-grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={140 + i * 80}>
              <article className="tn-principle">
                <span className="tn-principle-n">{p.n}</span>
                <h3 className="tn-principle-title">{p.title}</h3>
                <p className="tn-principle-body">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .tn-principles {
          padding: var(--sp20) var(--sp10);
        }
        .tn-principles-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .tn-principles-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -1px;
          color: var(--black);
          margin: var(--sp4) 0 var(--sp12);
        }
        .tn-principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--sp8);
        }
        .tn-principle {
          padding-top: var(--sp6);
          border-top: 1px solid rgba(0,0,0,0.12);
        }
        .tn-principle-n {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--green);
          letter-spacing: 0.08em;
        }
        .tn-principle-title {
          font-family: var(--font-aeonik);
          font-size: 22px;
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.5px;
          color: var(--black);
          margin: var(--sp4) 0 var(--sp3);
        }
        .tn-principle-body {
          font-family: var(--font-haas);
          font-size: 14px;
          line-height: 1.65;
          color: #555;
        }

        @media (max-width: 900px) {
          .tn-principles { padding: var(--sp16) var(--sp5); }
          .tn-principles-grid { grid-template-columns: 1fr; gap: var(--sp6); }
        }
      `}</style>
    </section>
  );
}
