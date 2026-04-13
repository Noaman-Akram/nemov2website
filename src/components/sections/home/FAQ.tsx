"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const FAQS = [
  { q: "How does your process work?" },
  { q: "How long does it take?" },
  { q: "What do you specialize in?" },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="faq-section">
      <div className="faq-inner">
        <Reveal>
          <span className="eyebrow">// FAQ</span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="faq-h2">Got questions? We&apos;ve got the answers</h2>
        </Reveal>

        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <Reveal key={i} delay={100 + i * 100}>
              <div
                className={`faq-item ${open === i ? "faq-item--open" : ""}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="faq-question">{faq.q}</span>
                <span className="faq-plus" style={{ transform: open === i ? "rotate(45deg)" : "none" }}>
                  +
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 100px var(--sp10);
        }
        .faq-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .faq-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -1px;
          color: #111;
          margin-bottom: var(--sp12);
        }
        .faq-list { }
        .faq-item {
          border-top: 1px solid rgba(0,0,0,0.1);
          padding: var(--sp6) 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: background var(--e-fast);
        }
        .faq-item:last-child { border-bottom: 1px solid rgba(0,0,0,0.1); }
        .faq-question {
          font-family: var(--font-aeonik);
          font-size: 20px;
          font-weight: 400;
          color: #111;
        }
        .faq-plus {
          color: var(--green);
          font-size: 24px;
          line-height: 1;
          flex-shrink: 0;
          margin-left: var(--sp5);
          transition: transform var(--e-fast);
          display: inline-block;
        }

        @media (max-width: 900px) {
          .faq-section { padding: 60px var(--sp5); }
        }
      `}</style>
    </section>
  );
}
