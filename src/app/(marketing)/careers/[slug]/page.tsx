import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ROLES } from "@/components/sections/careers";
import { Reveal } from "@/components/ui/Reveal";

/* ── Role data ── */
const ROLE_CONTENT: Record<string, {
  about: string;
  doing: string[];
  looking: string[];
  niceToHave: string[];
  offer: string[];
}> = {
  "graphic-designer": {
    about: "We're looking for a Graphic Designer to join the Nemo team (remote, based in Egypt). Your work will span Nemo's own brand and our clients — social media content, presentation decks, website visuals, and product launch materials. This is a design-driven role where creativity, consistency, and taste matter more than years of experience.",
    doing: [
      "Create marketing posts, banners, and carousel content for social media",
      "Design presentation decks and document templates (proposals, reports, briefs)",
      "Produce website visual assets — section graphics, mockups, branded image cards",
      "Build and maintain a social media visual system (formats, templates, stories)",
      "Support product launches with graphics and marketing materials",
      "Contribute to Nemo's brand visual language — patterns, backgrounds, graphic elements",
    ],
    looking: [
      "Practical experience with graphic design tools (Figma, Illustrator, Photoshop, or similar)",
      "The ability to find strong references and translate them into consistent visual direction",
      "A good eye for design — proportion, type, color, layout",
      "Willingness to learn, take feedback, and improve continuously",
      "Consistency and reliability — you meet deadlines and follow through",
      "Based in Egypt (remote role)",
    ],
    niceToHave: [
      "Experience is not required — mindset and taste matter most",
      "Video editing or motion graphics skills (rated separately in application)",
      "Familiarity with social media content formats and trends",
      "Experience working within a brand system or design language",
    ],
    offer: [
      "Fully remote position based in Egypt",
      "Real work with real clients from day one",
      "Direct feedback loop with senior designers",
      "A team that cares deeply about craft and quality",
      "Room to grow — this role expands with you",
    ],
  },
  "senior-product-designer": {
    about: "We're looking for a Senior Product Designer who can take ambiguous problems and turn them into sharp, considered interfaces. You'll work directly with our product and engineering teams to define new product experiences across our platform — from zero to polished.",
    doing: [
      "Lead design on 1–2 major product workstreams at a time",
      "Run discovery sessions with clients and translate insights into product decisions",
      "Design flows, wireframes, and high-fidelity specs that engineers can build directly from",
      "Define and evolve the Nemo product design language",
      "Partner with strategy and engineering to shape scope and prioritization",
      "Mentor junior designers across the team",
    ],
    looking: [
      "4+ years of product design experience, ideally at a software company",
      "A portfolio that shows strong thinking — not just execution",
      "Proficiency in Figma, and comfort working closely with engineers",
      "Comfort navigating ambiguity and defining your own brief",
      "Excellent communication — you can articulate design decisions clearly",
    ],
    niceToHave: [
      "Experience designing data-heavy or AI-adjacent products",
      "Motion and prototyping skills (Framer, ProtoPie)",
      "Cairo-based or willing to spend meaningful time here",
    ],
    offer: [
      "Competitive salary, reviewed annually",
      "Equity — you're building this with us",
      "Flexible working (remote-first culture)",
      "Annual learning and equipment budget",
      "A team that genuinely cares about craft",
    ],
  },
  "frontend-engineer": {
    about: "We're hiring a Senior Frontend Engineer to build the interfaces that power our products. You'll work at the intersection of performance, craft, and complexity — turning demanding requirements into experiences that feel effortless.",
    doing: [
      "Build and maintain core product features across our React/Next.js stack",
      "Architect scalable frontend systems the team can grow with",
      "Collaborate with design to ship with high craft and low friction",
      "Own performance — from rendering to load times to bundle size",
      "Contribute to code review and raise the engineering bar",
    ],
    looking: [
      "5+ years of frontend experience, with deep React and TypeScript knowledge",
      "Strong understanding of the browser and how things actually work",
      "Comfort with complex state management and async data patterns",
      "An eye for design — you notice when spacing is off",
      "Experience building production systems under real load",
    ],
    niceToHave: [
      "Next.js App Router experience",
      "Familiarity with animation libraries (Framer Motion, GSAP)",
      "Prior experience at a startup or fast-moving product team",
    ],
    offer: [
      "Competitive compensation + equity",
      "Remote-first, async-friendly culture",
      "Equipment budget and annual learning allowance",
      "Work with a team that cares about the details",
    ],
  },
  "brand-strategist": {
    about: "Nemo is looking for a Brand Strategist to help our clients — some of the most ambitious companies in the region — tell better stories. You'll sit at the intersection of insight and idea: equal parts researcher, writer, and strategic thinker.",
    doing: [
      "Lead brand strategy engagements from discovery to delivery",
      "Conduct audience and competitive research, synthesize into clear insights",
      "Develop positioning, messaging hierarchies, and brand narratives",
      "Present confidently to senior client and leadership teams",
      "Collaborate with creative teams to ensure strategy translates well",
      "Build internal frameworks the team can use across clients",
    ],
    looking: [
      "3–6 years in brand strategy, consulting, or planning (agency or in-house)",
      "Strong writing and verbal communication skills",
      "Comfort with ambiguity and building structured thinking from scratch",
      "Experience working with client stakeholders at a senior level",
      "Based in Cairo or willing to relocate",
    ],
    niceToHave: [
      "Experience with tech or AI-adjacent brands",
      "Arabic fluency a strong plus",
      "Background in qualitative research methods",
    ],
    offer: [
      "Competitive salary + annual review",
      "Equity in a growing company",
      "Flexible hours, async culture",
      "Learning and equipment budget",
      "Small team, high ownership",
    ],
  },
};

export function generateStaticParams() {
  return ROLES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = ROLES.find((r) => r.slug === slug);
  if (!role) return { title: "Role not found" };
  return {
    title: role.title,
    description: `${role.title} — ${role.department}, ${role.location}. Join the Nemo team.`,
  };
}

export default async function RolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = ROLES.find((r) => r.slug === slug);
  const content = ROLE_CONTENT[slug];
  if (!role || !content) notFound();

  return (
    <>
      <div className="role-page">

        {/* ── Sidebar ── */}
        <aside className="rp-sidebar">
          <Link href="/careers" className="rp-back">← All open roles</Link>

          <div className="rp-sidebar-body">
            <div className="rp-meta-card">
              <div className="rp-meta-item">
                <span className="rp-meta-key">Department</span>
                <span className="rp-meta-val">{role.department}</span>
              </div>
              <div className="rp-meta-item">
                <span className="rp-meta-key">Location</span>
                <span className="rp-meta-val">{role.location}</span>
              </div>
              <div className="rp-meta-item">
                <span className="rp-meta-key">Type</span>
                <span className="rp-meta-val">{role.type}</span>
              </div>
            </div>

            <Link
              href={role.slug === "graphic-designer"
                ? `/careers/${role.slug}/apply`
                : `mailto:hiring@madebynemo.com?subject=Application — ${role.title}`}
              className="rp-apply-btn"
            >
              Apply for this role
            </Link>

            <div className="rp-share">
              <span className="rp-share-label">Share</span>
              <div className="rp-share-row">
                <button className="rp-share-btn">LinkedIn</button>
                <button className="rp-share-btn">Copy link</button>
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main ── */}
        <main className="rp-main">

          {/* Breadcrumb */}
          <Reveal>
            <nav className="rp-breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="rp-bc-link">Home</Link>
              <span className="rp-bc-sep">/</span>
              <Link href="/careers" className="rp-bc-link">Careers</Link>
              <span className="rp-bc-sep">/</span>
              <span className="rp-bc-current">{role.title}</span>
            </nav>

            {/* Meta tags + title */}
            <div className="rp-meta-row">
              <span className="rp-tag">{role.department}</span>
              <span className="rp-tag">{role.location}</span>
              <span className="rp-tag">{role.type}</span>
              <span className="rp-tag rp-tag-green">Active</span>
            </div>
            <h1 className="rp-h1">{role.title}</h1>
          </Reveal>

          {/* Prose */}
          <Reveal delay={80}>
            <article className="rp-prose">
              <h3 className="rp-section-title">About the role</h3>
              <p className="rp-p">{content.about}</p>

              <h3 className="rp-section-title">What you&apos;ll do</h3>
              <ul className="rp-list">
                {content.doing.map((item) => (
                  <li key={item} className="rp-li">{item}</li>
                ))}
              </ul>

              <h3 className="rp-section-title">What we&apos;re looking for</h3>
              <ul className="rp-list">
                {content.looking.map((item) => (
                  <li key={item} className="rp-li">{item}</li>
                ))}
              </ul>

              <h3 className="rp-section-title">Nice to haves</h3>
              <ul className="rp-list">
                {content.niceToHave.map((item) => (
                  <li key={item} className="rp-li">{item}</li>
                ))}
              </ul>

              <h3 className="rp-section-title">What we offer</h3>
              <ul className="rp-list">
                {content.offer.map((item) => (
                  <li key={item} className="rp-li">{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>

        </main>
      </div>

      <style>{`
        /* ── Page shell ── */
        .role-page {
          background: #F5F5F0;
          min-height: 60vh;
          max-width: var(--container);
          margin: 0 auto;
          padding: var(--sp16) var(--sp10) var(--sp20);
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: var(--sp16);
          align-items: start;
        }

        /* ── Sidebar ── */
        .rp-sidebar {
          position: sticky;
          top: calc(108px + var(--sp6));
          display: flex;
          flex-direction: column;
          gap: var(--sp6);
        }
        .rp-back {
          font-family: var(--font-haas);
          font-size: 13px;
          color: #888;
          text-decoration: none;
          transition: color var(--e-fast);
          display: block;
          margin-bottom: var(--sp2);
        }
        .rp-back:hover { color: #111; }
        .rp-sidebar-body {
          display: flex;
          flex-direction: column;
          gap: var(--sp4);
        }
        .rp-meta-card {
          border: 1px solid rgba(0,0,0,0.09);
          border-radius: var(--r-md);
          overflow: hidden;
          background: #fff;
        }
        .rp-meta-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--sp3) var(--sp4);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          font-size: 13px;
        }
        .rp-meta-item:last-child { border-bottom: none; }
        .rp-meta-key { color: #aaa; font-family: var(--font-haas); }
        .rp-meta-val { color: #333; font-family: var(--font-haas); }
        .rp-apply-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          border-radius: var(--r-pill);
          background: #111;
          color: #fff;
          font-family: var(--font-haas);
          font-size: 14px;
          text-decoration: none;
          transition: opacity var(--e-fast);
        }
        .rp-apply-btn:hover { opacity: 0.8; }
        .rp-share {
          display: flex;
          flex-direction: column;
          gap: var(--sp2);
          padding-top: var(--sp2);
        }
        .rp-share-label {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.28);
          font-family: var(--font-haas);
        }
        .rp-share-row {
          display: flex;
          gap: var(--sp2);
        }
        .rp-share-btn {
          height: 32px;
          padding: 0 var(--sp4);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: var(--r-pill);
          background: transparent;
          font-family: var(--font-haas);
          font-size: 12px;
          color: #888;
          cursor: pointer;
          transition: border-color var(--e-fast), color var(--e-fast);
        }
        .rp-share-btn:hover { border-color: rgba(0,0,0,0.25); color: #333; }

        /* ── Main ── */
        .rp-main {
          display: flex;
          flex-direction: column;
          gap: var(--sp10);
        }
        .rp-breadcrumb {
          display: flex;
          align-items: center;
          gap: var(--sp2);
          margin-bottom: var(--sp8);
        }
        .rp-bc-link {
          font-family: var(--font-haas);
          font-size: 13px;
          color: #aaa;
          text-decoration: none;
          transition: color var(--e-fast);
        }
        .rp-bc-link:hover { color: #111; }
        .rp-bc-sep { font-size: 13px; color: rgba(0,0,0,0.18); }
        .rp-bc-current {
          font-family: var(--font-haas);
          font-size: 13px;
          color: #555;
        }
        .rp-meta-row {
          display: flex;
          align-items: center;
          gap: var(--sp2);
          flex-wrap: wrap;
          margin-bottom: var(--sp5);
        }
        .rp-tag {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-haas);
          font-size: 12px;
          color: #888;
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: var(--r-sm);
          padding: 3px 12px;
        }
        .rp-tag-green {
          color: var(--green);
          border-color: rgba(53,214,135,0.35);
        }
        .rp-h1 {
          font-family: var(--font-aeonik);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 400;
          letter-spacing: -2.5px;
          line-height: 1;
          color: #111;
        }

        /* ── Prose ── */
        .rp-prose { max-width: 660px; }
        .rp-section-title {
          font-family: var(--font-aeonik);
          font-size: 20px;
          font-weight: 400;
          letter-spacing: -0.4px;
          color: #111;
          margin: var(--sp10) 0 var(--sp4);
        }
        .rp-section-title:first-child { margin-top: 0; }
        .rp-p {
          font-family: var(--font-haas);
          font-size: 15px;
          line-height: 1.8;
          color: #666;
          margin-bottom: var(--sp4);
        }
        .rp-list {
          display: flex;
          flex-direction: column;
          gap: var(--sp2);
          margin-bottom: var(--sp4);
        }
        .rp-li {
          font-family: var(--font-haas);
          font-size: 15px;
          line-height: 1.65;
          color: #666;
          padding-left: var(--sp6);
          position: relative;
        }
        .rp-li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--green);
        }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .role-page {
            grid-template-columns: 1fr;
            padding: var(--sp10) var(--sp5) var(--sp16);
            gap: var(--sp8);
          }
          .rp-sidebar {
            position: static;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: var(--sp3);
          }
          .rp-back { margin-bottom: 0; flex-basis: 100%; }
          .rp-sidebar-body {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: var(--sp3);
            width: 100%;
          }
          .rp-meta-card { flex: 1 1 auto; display: flex; }
          .rp-meta-item { flex: 1; flex-direction: column; align-items: flex-start; gap: 1px; }
          .rp-apply-btn { flex-shrink: 0; padding: 0 var(--sp6); }
          .rp-share { display: none; }
        }
      `}</style>
    </>
  );
}
