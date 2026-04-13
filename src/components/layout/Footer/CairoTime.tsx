"use client";

import { useEffect, useState } from "react";

function getCairoTime() {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  const cairo = new Date(utcMs + 2 * 3600000); // UTC+2
  let h = cairo.getHours();
  const m = String(cairo.getMinutes()).padStart(2, "0");
  const s = String(cairo.getSeconds()).padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${String(h).padStart(2, "0")}:${m}:${s} ${ampm}`;
}

export function CairoTime() {
  const [time, setTime] = useState("--:--:-- --");

  useEffect(() => {
    setTime(getCairoTime());
    const id = setInterval(() => setTime(getCairoTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      style={{
        fontFamily: "var(--font-haas)",
        fontSize: 13,
        color: "rgba(255,255,255,0.35)",
      }}
    >
      {time}
    </span>
  );
}
