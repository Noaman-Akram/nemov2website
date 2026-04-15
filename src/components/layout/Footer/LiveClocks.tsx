"use client";

import { useEffect, useState } from "react";

export function LiveClocks() {
  const [ist, setIst] = useState("--:--:--");
  const [cai, setCai] = useState("--:--:--");

  useEffect(() => {
    function tick() {
      const d = new Date();
      setIst(d.toLocaleTimeString("en-GB", { timeZone: "Europe/Istanbul", hour12: false }));
      setCai(d.toLocaleTimeString("en-GB", { timeZone: "Africa/Cairo", hour12: false }));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="ff-clocks">
      <div className="ff-ck">
        <span className="ff-ck-dot" />
        <span className="ff-ck-city">Istanbul</span>
        <span className="ff-ck-time">{ist}</span>
      </div>
      <div className="ff-ck">
        <span className="ff-ck-dot" />
        <span className="ff-ck-city">Cairo</span>
        <span className="ff-ck-time">{cai}</span>
      </div>
      <style>{`
        .ff-clocks { display: flex; gap: var(--sp10); }
        .ff-ck { display: flex; align-items: center; gap: 8px; }
        .ff-ck-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--green); box-shadow: 0 0 8px rgba(53,214,135,0.5); }
        .ff-ck-city { font-family: var(--font-haas); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); }
        .ff-ck-time { font-family: var(--font-aeonik); font-size: 14px; color: #fff; font-variant-numeric: tabular-nums; }
        @media(max-width: 900px) {
          .ff-clocks { flex-direction: column; gap: var(--sp4); align-items: flex-start; }
        }
      `}</style>
    </div>
  );
}
