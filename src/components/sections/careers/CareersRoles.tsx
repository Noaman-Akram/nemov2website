import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const ROLES = [
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    department: "Design",
    location: "Remote · Egypt",
    type: "Full-time",
  },
  {
    slug: "senior-product-designer",
    title: "Senior Product Designer",
    department: "Design",
    location: "Cairo or Remote",
    type: "Full-time",
  },
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    slug: "brand-strategist",
    title: "Brand Strategist",
    department: "Strategy",
    location: "Cairo",
    type: "Full-time",
  },
];

export function CareersRoles() {
  return (
    <section className="cr-section">
      <div className="cr-inner">

        <Reveal>
          <div className="cr-header">
            <span className="cr-eyebrow">Open roles</span>
            <h2 className="cr-h2">Current openings</h2>
          </div>
        </Reveal>

        <div className="cr-list">
          {ROLES.map((role, i) => (
            <Reveal key={role.slug} delay={i * 60}>
              <Link href={`/careers/${role.slug}`} className="cr-row">
                <span className="cr-num">0{i + 1}</span>
                <div className="cr-row-mid">
                  <span className="cr-title">{role.title}</span>
                  <div className="cr-tags">
                    <span className="cr-tag">{role.department}</span>
                    <span className="cr-sep">·</span>
                    <span className="cr-tag">{role.location}</span>
                    <span className="cr-sep">·</span>
                    <span className="cr-tag">{role.type}</span>
                  </div>
                </div>
                <span className="cr-arr">→</span>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>

      <style>{`
        .cr-section {
          padding: var(--sp20) var(--sp10);
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .cr-inner {
          max-width: var(--container);
          margin: 0 auto;
        }
        .cr-header {
          margin-bottom: var(--sp10);
        }
        .cr-eyebrow {
          display: block;
          font-family: var(--font-haas);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
          margin-bottom: var(--sp3);
        }
        .cr-h2 {
          font-family: var(--font-aeonik);
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 400;
          letter-spacing: -1px;
          color: #111;
        }
        .cr-list {
          display: flex;
          flex-direction: column;
        }
        .cr-row {
          display: grid;
          grid-template-columns: 48px 1fr auto;
          align-items: center;
          gap: var(--sp8);
          padding: var(--sp6) 0;
          border-top: 1px solid rgba(0,0,0,0.08);
          text-decoration: none;
          transition: none;
        }
        .cr-row:last-child {
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .cr-num {
          font-family: var(--font-aeonik);
          font-size: 13px;
          color: rgba(0,0,0,0.25);
          letter-spacing: 0.5px;
          transition: color var(--e-fast);
        }
        .cr-row-mid {
          display: flex;
          flex-direction: column;
          gap: var(--sp1);
        }
        .cr-title {
          font-family: var(--font-aeonik);
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 400;
          letter-spacing: -0.5px;
          color: #111;
          transition: color var(--e-fast);
        }
        .cr-tags {
          display: flex;
          align-items: center;
          gap: var(--sp2);
          font-size: 13px;
          color: #999;
        }
        .cr-sep {
          color: rgba(0,0,0,0.2);
        }
        .cr-arr {
          font-size: 18px;
          color: rgba(0,0,0,0.2);
          transition: color var(--e-fast), transform var(--e-fast);
        }
        .cr-row:hover .cr-title { color: var(--green); }
        .cr-row:hover .cr-num   { color: var(--green); }
        .cr-row:hover .cr-arr   { color: #111; transform: translateX(4px); }

        @media (max-width: 700px) {
          .cr-section { padding: var(--sp16) var(--sp5); }
          .cr-row { grid-template-columns: 32px 1fr auto; gap: var(--sp4); }
        }
      `}</style>
    </section>
  );
}
