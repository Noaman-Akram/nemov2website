"use client";

import { useState } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  }

  if (done) {
    return (
      <span style={{ fontFamily: "var(--font-haas)", fontSize: 14, color: "var(--green)" }}>
        You&apos;re in ✓
      </span>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="email-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="email"
        required
        className="email-input"
      />
      <button type="submit" className="subscribe-btn">
        Subscribe
      </button>

      <style>{`
        .email-row {
          display: flex;
          align-items: flex-end;
          gap: var(--sp6);
        }
        .email-input {
          font-family: var(--font-haas);
          font-size: 14px;
          background: transparent;
          color: var(--t1);
          border: none;
          border-bottom: 1px solid var(--t1);
          border-radius: 0;
          padding: var(--sp2) 0;
          outline: none;
          width: 220px;
          transition: opacity 200ms ease;
        }
        .email-input::placeholder { color: rgba(255,255,255,0.45); }
        .email-input:focus { opacity: 1; border-bottom-color: rgba(255,255,255,0.9); }
        .subscribe-btn {
          font-family: var(--font-haas);
          font-size: 14px;
          font-weight: 400;
          color: var(--t1);
          background: transparent;
          border: none;
          cursor: pointer;
          padding: var(--sp2) 0;
          white-space: nowrap;
          transition: opacity 200ms ease;
        }
        .subscribe-btn:hover { opacity: 0.6; }
      `}</style>
    </form>
  );
}
