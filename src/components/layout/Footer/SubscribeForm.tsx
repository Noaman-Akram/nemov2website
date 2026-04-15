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
      <span style={{ fontFamily: "var(--font-haas)", fontSize: 13, color: "var(--green)" }}>
        You&apos;re incredibly early ✓
      </span>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="nl-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        autoComplete="email"
        required
      />
      <button type="submit">Subscribe</button>

      <style>{`
        .nl-form {
          display: flex;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--r-pill);
          padding: 4px;
        }
        .nl-form input {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: none;
          outline: none;
          padding: 0 var(--sp4);
          font-family: var(--font-haas);
          font-size: 14px;
          color: #fff;
        }
        .nl-form input::placeholder { color: rgba(255,255,255,0.3); }
        .nl-form button {
          background: #fff;
          color: #000;
          border: none;
          border-radius: var(--r-pill);
          padding: 0 var(--sp6);
          height: 40px;
          font-family: var(--font-haas);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: background var(--e-fast);
        }
        .nl-form button:hover { background: #e0e0e0; }
      `}</style>
    </form>
  );
}
