import { Reveal } from "@/components/ui/Reveal";

const POINTS = [
  { n: "01", text: "Small team, high impact. You'll own real work from day one." },
  { n: "02", text: "Fully remote-friendly. We care about output, not hours at a desk." },
  { n: "03", text: "We work with ambitious companies across MENA and globally." },
  { n: "04", text: "Design and engineering are equals here. Craft is a shared value." },
];

const LOGOS = [
  "Tekronyx",
  "Wadi Sabarah",
  "EG Group",
  "Almasria",
  "Noxus",
  "Vaulta",
  "Retool",
  "Realm",
];

export function CareersAbout() {
  /* Duplicate for seamless loop */
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className="ca-section">
      <div className="ca-inner">

        <Reveal>
          <div className="ca-grid">
            <div className="ca-left">
              <span className="ca-eyebrow">Why Nemo</span>
              <h2 className="ca-h2">Built to do<br />great work.</h2>
              <p className="ca-body">
                Nemo is a digital product studio. We design and build the kind
                of things that make people stop and say &ldquo;who made that?&rdquo; We&apos;ve
                shipped for startups, enterprises, and everyone in between.
              </p>
            </div>
            <div className="ca-right">
              {POINTS.map((p) => (
                <div key={p.n} className="ca-point">
                  <span className="ca-point-n">{p.n}</span>
                  <p className="ca-point-text">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Marquee strip */}
        <div className="ca-marquee-wrap">
          <span className="ca-marquee-label">Companies we&apos;ve worked with</span>
          <div className="ca-marquee-outer">
            <div className="ca-marquee-track">
              {track.map((name, i) => (
                <span key={i} className="ca-marquee-item">
                  {name}
                  <span className="ca-marquee-dot" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .ca-section {
          padding: var(--sp20) var(--sp10) 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .ca-inner {
          max-width: var(--container);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--sp16);
        }
        .ca-eyebrow {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-aeonik);
          font-size: 12px;
          font-weight: 400;
          color: rgba(0,0,0,0.45);
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: var(--r-sm);
          padding: 4px 14px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: var(--sp6);
        }
        .ca-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--sp20);
          align-items: start;
        }
        .ca-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 400;
          letter-spacing: -1.5px;
          line-height: 1.05;
          color: #111;
          margin-bottom: var(--sp6);
        }
        .ca-body {
          font-size: 15px;
          line-height: 1.75;
          color: #666;
          max-width: 420px;
        }
        .ca-right {
          display: flex;
          flex-direction: column;
        }
        .ca-point {
          display: flex;
          gap: var(--sp5);
          align-items: baseline;
          padding: var(--sp5) 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .ca-point:first-child { border-top: 1px solid rgba(0,0,0,0.07); }
        .ca-point-n {
          font-family: var(--font-aeonik);
          font-size: 12px;
          color: var(--green);
          flex-shrink: 0;
          width: 24px;
          letter-spacing: 0.5px;
        }
        .ca-point-text {
          font-size: 14px;
          line-height: 1.65;
          color: #555;
        }

        /* ── Marquee ── */
        .ca-marquee-wrap {
          display: flex;
          flex-direction: column;
          gap: var(--sp4);
          /* break out of inner padding to go full-width */
          margin-left: calc(-1 * var(--sp10));
          margin-right: calc(-1 * var(--sp10));
        }
        .ca-marquee-label {
          font-family: var(--font-haas);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.3);
          padding: 0 var(--sp10);
        }
        .ca-marquee-outer {
          overflow: hidden;
          border-top: 1px solid rgba(0,0,0,0.07);
          border-bottom: 1px solid rgba(0,0,0,0.07);
          padding: var(--sp5) 0;
        }
        .ca-marquee-track {
          display: flex;
          width: max-content;
          animation: ca-scroll 28s linear infinite;
        }
        .ca-marquee-outer:hover .ca-marquee-track {
          animation-play-state: paused;
        }
        .ca-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: var(--sp5);
          font-family: var(--font-aeonik);
          font-size: clamp(18px, 2vw, 26px);
          font-weight: 400;
          letter-spacing: -0.5px;
          color: rgba(0,0,0,0.18);
          white-space: nowrap;
          padding: 0 var(--sp6);
          transition: color var(--e-fast);
        }
        .ca-marquee-item:hover { color: #111; }
        .ca-marquee-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--green);
          opacity: 0.5;
          flex-shrink: 0;
        }
        @keyframes ca-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 900px) {
          .ca-section { padding: var(--sp16) var(--sp5) 0; }
          .ca-marquee-wrap {
            margin-left: calc(-1 * var(--sp5));
            margin-right: calc(-1 * var(--sp5));
          }
          .ca-marquee-label { padding: 0 var(--sp5); }
          .ca-grid { grid-template-columns: 1fr; gap: var(--sp10); }
        }
      `}</style>
    </section>
  );
}
