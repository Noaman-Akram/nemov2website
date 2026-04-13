import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <Reveal>
          <h1 className="hero-h1">
            Turn your ideas
            <br />
            into reality
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <div className="hero-right">
            <p className="hero-desc">
              We create digital products with advanced technologies to build
              memorable experiences and transform brands.
            </p>
            <Link href="/contact" className="btn-glow-hero">
              Let&apos;s talk &nbsp;→
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        .hero-section {
          padding: calc(var(--sp20) + 56px) var(--sp10) var(--sp12);
          min-height: 60vh;
          display: flex;
          align-items: flex-end;
        }
        .hero-inner {
          max-width: var(--container);
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--sp10);
          align-items: flex-end;
        }
        .hero-h1 {
          font-family: var(--font-aeonik);
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -2px;
          color: var(--black);
          margin: 0;
        }
        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--sp6);
          padding-bottom: var(--sp2);
        }
        .hero-desc {
          font-family: var(--font-haas);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
          color: #555;
          margin: 0;
          max-width: 340px;
        }

        /* Glow button */
        .btn-glow-hero {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: var(--sp2);
          font-family: var(--font-haas);
          font-size: 14px;
          font-weight: 500;
          color: var(--black);
          border: none;
          border-radius: var(--r-pill);
          height: 44px;
          padding: 0 var(--sp6);
          text-decoration: none;
          overflow: hidden;
          z-index: 1;
        }
        .btn-glow-hero::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: conic-gradient(from 0deg, transparent 70%, var(--green) 100%);
          animation: rotate-glow 2s linear infinite;
          z-index: -2;
        }
        .btn-glow-hero::after {
          content: '';
          position: absolute;
          inset: 1.5px;
          background: var(--off-white);
          border-radius: var(--r-pill);
          z-index: -1;
          transition: background var(--e-fast);
        }
        .btn-glow-hero:hover::after { background: #f0f2f5; }

        @media (max-width: 900px) {
          .hero-section { padding: calc(var(--sp20) + 56px) var(--sp5) var(--sp10); min-height: auto; }
          .hero-inner { grid-template-columns: 1fr; gap: var(--sp8); }
          .hero-desc { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
