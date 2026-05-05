import { Reveal } from "@/components/ui/Reveal";

export function Bio() {
  return (
    <section className="tn-bio">
      <div className="tn-bio-inner">
        <Reveal>
          <span className="eyebrow">// ABOUT</span>
        </Reveal>

        <div className="tn-bio-grid">
          <Reveal delay={80}>
            <h2 className="tn-bio-lead">
              Building digital products that feel
              <br />
              as good as they look.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="tn-bio-body">
              <p>
                Nemo started his career at the intersection of design and engineering —
                a place where most people pick a side. He didn&apos;t. After years
                shipping interfaces for startups across MENA and Europe, he
                founded Nemo to bring that same blend to a small group of clients
                who care about the details.
              </p>
              <p>
                His work is grounded in a simple belief: a great product is what
                happens when craft meets clarity. No fluff, no ceremony — just
                interfaces that respect the user&apos;s time and the brand&apos;s
                ambition.
              </p>
              <p>
                Today he leads the studio&apos;s creative direction, oversees every
                engagement end-to-end, and still writes most of the production
                CSS himself.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .tn-bio {
          padding: var(--sp16) var(--sp10);
        }
        .tn-bio-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .tn-bio-grid {
          margin-top: var(--sp8);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--sp16);
          align-items: start;
        }
        .tn-bio-lead {
          font-family: var(--font-aeonik);
          font-size: clamp(28px, 3.4vw, 44px);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -1px;
          color: var(--black);
          margin: 0;
        }
        .tn-bio-body {
          display: flex;
          flex-direction: column;
          gap: var(--sp5);
          font-family: var(--font-haas);
          font-size: 15px;
          line-height: 1.7;
          color: #444;
        }

        @media (max-width: 900px) {
          .tn-bio { padding: var(--sp12) var(--sp5); }
          .tn-bio-grid { grid-template-columns: 1fr; gap: var(--sp8); }
        }
      `}</style>
    </section>
  );
}
