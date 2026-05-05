import { Reveal } from "@/components/ui/Reveal";

export function Quote() {
  return (
    <section className="tn-quote">
      <div className="tn-quote-inner">
        <Reveal>
          <blockquote className="tn-quote-text">
            <span className="tn-quote-mark">&ldquo;</span>
            The work I&apos;m proudest of is never the loudest. It&apos;s the
            interface a person uses for years without ever thinking about the
            people who built it.
          </blockquote>
        </Reveal>

        <Reveal delay={120}>
          <p className="tn-quote-attr">— Nemo Akram</p>
        </Reveal>
      </div>

      <style>{`
        .tn-quote {
          padding: var(--sp20) var(--sp10);
          background: var(--off-white);
        }
        .tn-quote-inner {
          max-width: 960px;
          margin: 0 auto;
        }
        .tn-quote-text {
          font-family: var(--font-aeonik);
          font-size: clamp(28px, 3.6vw, 44px);
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -1px;
          color: var(--black);
          position: relative;
          margin: 0;
        }
        .tn-quote-mark {
          color: var(--green);
          margin-right: var(--sp1);
        }
        .tn-quote-attr {
          font-family: var(--font-haas);
          font-size: 14px;
          color: #777;
          margin-top: var(--sp6);
        }

        @media (max-width: 900px) {
          .tn-quote { padding: var(--sp16) var(--sp5); }
        }
      `}</style>
    </section>
  );
}
