import type { Metadata } from "next";
import Link from "next/link";
import { GraphicDesignerForm } from "./GraphicDesignerForm";

export const metadata: Metadata = {
  title: "Apply — Graphic Designer",
  description: "Apply for the Graphic Designer role at Nemo.",
};

export default function ApplyPage() {
  return (
    <>
      <div className="ap-wrap">
        <div className="ap-inner">

          <Link href="/careers/graphic-designer" className="ap-back">← Back to role</Link>

          <div className="ap-header">
            <span className="ap-eyebrow">Graphic Designer · Remote · Egypt</span>
            <h1 className="ap-h1">Apply</h1>
          </div>

          <div className="ap-divider" />

          <GraphicDesignerForm />

        </div>
      </div>

      <style>{`
        .ap-wrap {
          background: #F5F5F0;
          min-height: 100vh;
          padding: var(--sp20) var(--sp10) var(--sp32);
        }
        .ap-inner {
          max-width: 680px;
          margin: 0 auto;
        }
        .ap-back {
          display: inline-block;
          font-family: var(--font-haas);
          font-size: 13px;
          color: #aaa;
          text-decoration: none;
          margin-bottom: var(--sp10);
          transition: color 150ms ease-in-out;
        }
        .ap-back:hover { color: #111; }
        .ap-header {
          margin-bottom: var(--sp8);
        }
        .ap-eyebrow {
          display: block;
          font-family: var(--font-haas);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.3);
          margin-bottom: var(--sp4);
        }
        .ap-h1 {
          font-family: var(--font-aeonik);
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 400;
          letter-spacing: -2.5px;
          line-height: 1;
          color: #111;
        }
        .ap-divider {
          height: 1px;
          background: rgba(0,0,0,0.08);
          margin-bottom: var(--sp12);
        }
        @media (max-width: 700px) {
          .ap-wrap { padding: var(--sp16) var(--sp5) var(--sp20); }
        }
      `}</style>
    </>
  );
}
