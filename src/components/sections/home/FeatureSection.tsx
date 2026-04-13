import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { label: "Revenue", value: "$83K",  change: "↑ 12.4%", green: true  },
  { label: "Users",   value: "1,284", change: "↑ 8.1%",  green: false },
  { label: "Orders",  value: "845",   change: "↑ 4.6%",  green: false },
];
const BAR_HEIGHTS = [30, 55, 40, 75, 60, 85, 100];
const ACTIVE_BARS = new Set([3, 6]);
const ROWS = [
  { name: "Alex Harper — Product Manager", dim: false },
  { name: "Sara Kim — UX Designer",        dim: true  },
];

export function FeatureSection() {
  return (
    <div id="work" data-nav-dark className="feature-wrap">

      {/* Green ambient glow */}
      <div aria-hidden="true" className="feature-glow" />

      {/* Pill badge */}
      <div className="feature-badge">
        Nemo V.2{" "}
        <span style={{ opacity: 0.4 }}>|</span>{" "}
        <span className="feature-badge-new">NEW</span>
        Auth0 for AI Agents →
      </div>

      {/* 2-col grid */}
      <div className="feature-grid">

        <Reveal>
          <p className="feature-text">
            We create digital products with advanced technologies to build
            memorable experiences and transform brands.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mock-ui">

            {/* Browser chrome */}
            <div className="mock-chrome">
              <div className="mock-dot" style={{ background: "#FF5F57" }} />
              <div className="mock-dot" style={{ background: "#FFBD2E" }} />
              <div className="mock-dot" style={{ background: "#28CA42" }} />
              <div className="mock-chrome-bar">
                <span className="mock-url">app.noxus.io/dashboard</span>
              </div>
            </div>

            {/* Dashboard */}
            <div className="mock-dashboard">

              {/* Sidebar */}
              <div className="mock-sidebar">
                {[true, false, false, false, false].map((active, i) => (
                  <div key={i} className={`mock-icon ${active ? "mock-icon--active" : ""}`}>
                    <div className={`mock-icon-dot ${active ? "mock-icon-dot--green" : ""}`} />
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="mock-main">
                <div className="mock-header-row">
                  <span className="mock-page-title">Dashboard</span>
                  <span className="mock-live-badge">Live</span>
                </div>

                {/* Stats */}
                <div className="mock-stats">
                  {STATS.map((s) => (
                    <div key={s.label} className="mock-stat-card">
                      <div className="mock-stat-label">{s.label}</div>
                      <div className={`mock-stat-value ${s.green ? "mock-stat-value--green" : ""}`}>
                        {s.value}
                      </div>
                      <div className="mock-stat-change">{s.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="mock-chart">
                  <div className="mock-chart-title">Revenue Overview</div>
                  <div className="mock-chart-bars">
                    {BAR_HEIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className={`mock-bar ${ACTIVE_BARS.has(i) ? "mock-bar--active" : ""}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Table */}
                {ROWS.map((row) => (
                  <div key={row.name} className="mock-row">
                    <div className={`mock-avatar ${row.dim ? "mock-avatar--dim" : ""}`} />
                    <div className="mock-name">{row.name}</div>
                    <div className="mock-tag">Active</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .feature-wrap {
          background: var(--black);
          border-radius: 0 0 24px 24px;
          padding: 120px var(--sp10);
          position: relative;
          overflow: hidden;
        }

        /* Ambient glow */
        .feature-glow {
          position: absolute;
          top: 10%; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, var(--green-dim) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Badge */
        .feature-badge {
          position: absolute;
          top: 100px; left: 50%;
          transform: translateX(-50%);
          background: rgba(53,214,135,0.15);
          border-radius: var(--r-pill);
          padding: var(--sp2) var(--sp6);
          color: var(--green);
          font-family: var(--font-haas);
          font-size: 13px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: var(--sp3);
          z-index: 10;
          border: 1px solid var(--b-green);
          box-shadow: 0 0 24px var(--green-dim);
          white-space: nowrap;
          backdrop-filter: blur(8px);
        }
        .feature-badge-new {
          background: rgba(0,0,0,0.2);
          padding: 2px var(--sp2);
          border-radius: var(--r-sm);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-right: var(--sp1);
        }

        /* Grid */
        .feature-grid {
          max-width: var(--container);
          margin: var(--sp20) auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .feature-text {
          font-family: var(--font-aeonik);
          color: var(--t1);
          font-size: 28px;
          line-height: 1.4;
          font-weight: 400;
          max-width: 480px;
        }

        /* ── Dashboard Mockup ── */
        .mock-ui {
          background: #0A0A0F;
          border-radius: var(--r-xl);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 520px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px var(--b2), 0 0 60px var(--green-dim);
          border: 1px solid var(--b2);
        }

        /* Chrome */
        .mock-chrome {
          display: flex;
          align-items: center;
          gap: var(--sp1);
          padding: var(--sp3) var(--sp4);
          background: #111118;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .mock-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
        }
        .mock-chrome-bar {
          flex: 1;
          margin: 0 var(--sp3);
          background: rgba(255,255,255,0.05);
          border-radius: var(--r-sm);
          height: 20px;
          display: flex;
          align-items: center;
          padding: 0 var(--sp2);
        }
        .mock-url {
          font-size: 10px;
          color: var(--t-off);
          font-family: monospace;
        }

        /* Body */
        .mock-dashboard { display: flex; flex: 1; min-height: 0; }

        /* Sidebar */
        .mock-sidebar {
          width: 52px;
          background: #111118;
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--sp4) 0;
          gap: var(--sp4);
          flex-shrink: 0;
        }
        .mock-icon {
          width: 28px; height: 28px;
          border-radius: var(--r-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mock-icon--active { background: var(--green-dim); }
        .mock-icon-dot {
          width: 14px; height: 14px;
          border-radius: 3px;
          background: var(--b3);
        }
        .mock-icon-dot--green { background: var(--green); opacity: 0.8; }

        /* Main */
        .mock-main {
          flex: 1;
          padding: var(--sp4);
          display: flex;
          flex-direction: column;
          gap: var(--sp2);
          overflow: hidden;
        }
        .mock-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2px;
        }
        .mock-page-title {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
          font-family: var(--font-aeonik);
        }
        .mock-live-badge {
          background: var(--green-dim);
          border: 1px solid var(--b-green);
          color: var(--green);
          font-size: 9px;
          font-weight: 700;
          padding: 2px var(--sp2);
          border-radius: 20px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Stats */
        .mock-stats {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: var(--sp2);
        }
        .mock-stat-card {
          background: var(--s3);
          border: 1px solid var(--b1);
          border-radius: 10px;
          padding: var(--sp2);
        }
        .mock-stat-label {
          font-size: 8px;
          color: var(--t-off);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: var(--sp1);
        }
        .mock-stat-value {
          font-size: 16px;
          font-weight: 700;
          color: var(--t1);
          font-family: var(--font-aeonik);
          line-height: 1;
        }
        .mock-stat-value--green { color: var(--green); }
        .mock-stat-change { font-size: 8px; color: var(--green); margin-top: 3px; }

        /* Chart */
        .mock-chart {
          background: var(--s3);
          border: 1px solid var(--b1);
          border-radius: 10px;
          padding: var(--sp3);
          flex: 1;
        }
        .mock-chart-title {
          font-size: 9px;
          color: rgba(255,255,255,0.45);
          margin-bottom: var(--sp2);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .mock-chart-bars {
          display: flex;
          align-items: flex-end;
          gap: 5px;
          height: 48px;
        }
        .mock-bar {
          flex: 1;
          border-radius: 3px 3px 0 0;
          background: rgba(53,214,135,0.2);
        }
        .mock-bar--active { background: var(--green); }

        /* Table rows */
        .mock-row {
          display: flex;
          align-items: center;
          gap: var(--sp2);
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .mock-avatar {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: var(--green-dim);
          border: 1px solid var(--b-green);
          flex-shrink: 0;
        }
        .mock-avatar--dim {
          background: rgba(255,255,255,0.05);
          border-color: var(--b1);
        }
        .mock-name { font-size: 9px; color: rgba(255,255,255,0.7); flex: 1; }
        .mock-tag {
          font-size: 8px;
          padding: 2px var(--sp1);
          border-radius: 20px;
          background: var(--green-dim);
          color: var(--green);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .feature-wrap { padding: 80px var(--sp5); }
          .feature-grid { grid-template-columns: 1fr; gap: 40px; margin-top: 60px; }
          .mock-ui { max-width: 100%; }
        }
      `}</style>
    </div>
  );
}
