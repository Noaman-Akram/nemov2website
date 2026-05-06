import type { Metadata } from "next";
import { GraphicDesignerForm } from "./GraphicDesignerForm";

export const metadata: Metadata = {
  title: "Apply — Graphic Designer",
  description: "Apply for the Graphic Designer role at Nemo.",
};

export default function ApplyPage() {
  return (
    <>
      <div className="ap-page">
        <div className="ap-header">
          <a href="/careers/graphic-designer" className="ap-back">← Back to role</a>
          <div className="ap-header-text">
            <span className="ap-eyebrow">Graphic Designer · Remote · Egypt</span>
            <h1 className="ap-h1">Apply for this role</h1>
            <p className="ap-sub">Takes about 5 minutes. We read every application and reply within 5 business days.</p>
          </div>
        </div>

        <GraphicDesignerForm />
      </div>

      <style>{`
        .ap-page {
          background: #F5F5F0;
          min-height: 80vh;
          max-width: 760px;
          margin: 0 auto;
          padding: var(--sp20) var(--sp10) var(--sp32);
        }
        .ap-header {
          margin-bottom: var(--sp16);
        }
        .ap-back {
          font-family: var(--font-haas);
          font-size: 13px;
          color: #aaa;
          text-decoration: none;
          display: block;
          margin-bottom: var(--sp8);
          transition: color 150ms ease-in-out;
        }
        .ap-back:hover { color: #111; }
        .ap-eyebrow {
          display: block;
          font-family: var(--font-haas);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
          margin-bottom: var(--sp4);
        }
        .ap-h1 {
          font-family: var(--font-aeonik);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          letter-spacing: -1.5px;
          color: #111;
          margin-bottom: var(--sp3);
        }
        .ap-sub {
          font-size: 14px;
          color: #888;
          line-height: 1.6;
        }
        @media (max-width: 700px) {
          .ap-page { padding: var(--sp16) var(--sp5) var(--sp20); }
        }
      `}</style>
    </>
  );
}
