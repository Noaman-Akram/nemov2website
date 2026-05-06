"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type FormState = "idle" | "submitting" | "success" | "error";

export function GraphicDesignerForm() {
  const router = useRouter();
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: fd.get("fullName"),
      email: fd.get("email"),
      mobile: fd.get("mobile"),
      portfolio: fd.get("portfolio"),
      tools: fd.get("tools"),
      education: fd.get("education"),
      gradYear: fd.get("gradYear"),
      hoursPerDay: fd.get("hoursPerDay"),
      activeProjects: fd.get("activeProjects"),
      expectedSalary: fd.get("expectedSalary"),
      inspiration: fd.get("inspiration"),
      motionRating: fd.get("motionRating"),
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setState("success");
      setTimeout(() => router.push("/careers"), 3000);
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (state === "success") {
    return (
      <>
        <div className="gf-success">
          <div className="gf-success-icon">✓</div>
          <h2 className="gf-success-h">Application submitted.</h2>
          <p className="gf-success-p">We&apos;ve received your application and will be in touch within 5 business days. Redirecting you back to careers…</p>
        </div>
        <style>{`
          .gf-success { text-align:center; padding: var(--sp20) 0; }
          .gf-success-icon { width:56px;height:56px;border-radius:50%;background:rgba(53,214,135,0.12);border:1px solid rgba(53,214,135,0.3);display:flex;align-items:center;justify-content:center;font-size:22px;color:#35D687;margin:0 auto var(--sp6); }
          .gf-success-h { font-family:var(--font-aeonik);font-size:28px;font-weight:400;letter-spacing:-0.8px;color:#111;margin-bottom:var(--sp3); }
          .gf-success-p { font-size:14px;color:#888;line-height:1.7;max-width:400px;margin:0 auto; }
        `}</style>
      </>
    );
  }

  return (
    <>
      <form className="gf-form" onSubmit={handleSubmit} noValidate>

        {/* Row 1 */}
        <div className="gf-row gf-row-2">
          <div className="gf-field">
            <label className="gf-label">Full Name <span className="gf-req">*</span></label>
            <input className="gf-input" name="fullName" type="text" placeholder="Your full name" required />
          </div>
          <div className="gf-field">
            <label className="gf-label">Email <span className="gf-req">*</span></label>
            <input className="gf-input" name="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>

        {/* Row 2 */}
        <div className="gf-row gf-row-2">
          <div className="gf-field">
            <label className="gf-label">Mobile (WhatsApp) <span className="gf-req">*</span></label>
            <input className="gf-input" name="mobile" type="tel" placeholder="+20 1xx xxx xxxx" required />
          </div>
          <div className="gf-field">
            <label className="gf-label">Portfolio Link <span className="gf-req">*</span></label>
            <input className="gf-input" name="portfolio" type="url" placeholder="behance.net/you or drive link" required />
          </div>
        </div>

        {/* Tools */}
        <div className="gf-field">
          <label className="gf-label">What design tools do you mainly use? <span className="gf-req">*</span></label>
          <input className="gf-input" name="tools" type="text" placeholder="e.g. Figma, Illustrator, Photoshop" required />
        </div>

        {/* Education row */}
        <div className="gf-row gf-row-2">
          <div className="gf-field">
            <label className="gf-label">Education <span className="gf-req">*</span></label>
            <input className="gf-input" name="education" type="text" placeholder="Faculty / Major" required />
          </div>
          <div className="gf-field">
            <label className="gf-label">Graduation Year <span className="gf-req">*</span></label>
            <input className="gf-input" name="gradYear" type="number" placeholder="e.g. 2024" min="2000" max="2030" required />
          </div>
        </div>

        {/* Hours per day */}
        <div className="gf-field">
          <label className="gf-label">How many hours per day can you dedicate? <span className="gf-req">*</span></label>
          <div className="gf-options">
            {[["lt2","Less than 2h"],["2","2h"],["4","4h"],["6","6h"],["8","8h"]].map(([val, label]) => (
              <label key={val} className="gf-option">
                <input type="radio" name="hoursPerDay" value={val} required />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Projects / salary row */}
        <div className="gf-row gf-row-2">
          <div className="gf-field">
            <label className="gf-label">How many projects/clients are you currently working with? <span className="gf-req">*</span></label>
            <input className="gf-input" name="activeProjects" type="number" placeholder="0" min="0" required />
          </div>
          <div className="gf-field">
            <label className="gf-label">Expected Salary (EGP) <span className="gf-req">*</span></label>
            <input className="gf-input" name="expectedSalary" type="text" placeholder="e.g. 5,000 – 8,000" required />
          </div>
        </div>

        {/* Inspiration */}
        <div className="gf-field">
          <label className="gf-label">Where do you usually get inspiration for moodboards / visual direction? <span className="gf-req">*</span></label>
          <textarea className="gf-textarea" name="inspiration" placeholder="Behance, Pinterest, specific accounts, galleries…" rows={3} required />
        </div>

        {/* Motion rating */}
        <div className="gf-field">
          <label className="gf-label">Rate your skills in video editing / motion graphics <span className="gf-opt">(optional)</span></label>
          <div className="gf-stars">
            {[1,2,3,4,5].map((n) => (
              <label key={n} className="gf-star-label">
                <input type="radio" name="motionRating" value={String(n)} />
                <span className="gf-star">{n}</span>
              </label>
            ))}
          </div>
        </div>

        {state === "error" && (
          <div className="gf-error-msg">{errorMsg}</div>
        )}

        <button className="gf-submit" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Submitting…" : "Submit application"}
        </button>

        <p className="gf-note">We respond to every application within 5 business days.</p>
      </form>

      <style>{`
        .gf-form { display:flex; flex-direction:column; gap:var(--sp8); }

        .gf-row { display:grid; gap:var(--sp6); }
        .gf-row-2 { grid-template-columns:1fr 1fr; }

        .gf-field { display:flex; flex-direction:column; gap:var(--sp2); }
        .gf-label { font-family:var(--font-haas); font-size:13px; color:#555; line-height:1.5; }
        .gf-req { color:#35D687; margin-left:2px; }
        .gf-opt { color:#bbb; font-size:12px; }

        .gf-input {
          height:48px; padding:0 var(--sp5);
          border:1px solid rgba(0,0,0,0.12); border-radius:var(--r-md);
          background:#fff; font-family:var(--font-haas); font-size:14px; color:#111;
          outline:none; transition:border-color 150ms ease-in-out;
          appearance:none;
        }
        .gf-input:focus { border-color:#35D687; }
        .gf-input::placeholder { color:#bbb; }

        .gf-textarea {
          padding:var(--sp4) var(--sp5);
          border:1px solid rgba(0,0,0,0.12); border-radius:var(--r-md);
          background:#fff; font-family:var(--font-haas); font-size:14px; color:#111;
          outline:none; resize:vertical; line-height:1.6;
          transition:border-color 150ms ease-in-out;
        }
        .gf-textarea:focus { border-color:#35D687; }
        .gf-textarea::placeholder { color:#bbb; }

        /* Radio pill options */
        .gf-options { display:flex; gap:var(--sp2); flex-wrap:wrap; margin-top:var(--sp1); }
        .gf-option { display:flex; align-items:center; cursor:pointer; }
        .gf-option input[type=radio] { display:none; }
        .gf-option span {
          height:36px; padding:0 var(--sp5);
          border:1px solid rgba(0,0,0,0.12); border-radius:var(--r-pill);
          font-family:var(--font-haas); font-size:13px; color:#666;
          display:flex; align-items:center; cursor:pointer;
          transition:border-color 150ms ease-in-out, background 150ms ease-in-out, color 150ms ease-in-out;
        }
        .gf-option input[type=radio]:checked + span {
          background:#111; border-color:#111; color:#fff;
        }

        /* Star rating */
        .gf-stars { display:flex; gap:var(--sp2); margin-top:var(--sp1); }
        .gf-star-label { cursor:pointer; }
        .gf-star-label input[type=radio] { display:none; }
        .gf-star {
          width:40px; height:40px; border-radius:var(--r-md);
          border:1px solid rgba(0,0,0,0.12); background:#fff;
          display:flex; align-items:center; justify-content:center;
          font-family:var(--font-aeonik); font-size:15px; color:#888;
          cursor:pointer; transition:all 150ms ease-in-out;
        }
        .gf-star-label input[type=radio]:checked + .gf-star {
          background:#111; border-color:#111; color:#fff;
        }

        .gf-error-msg {
          padding:var(--sp4) var(--sp5);
          border-radius:var(--r-md); border:1px solid rgba(220,38,38,0.2);
          background:rgba(220,38,38,0.05); font-size:13px; color:#dc2626;
        }

        .gf-submit {
          height:52px; border-radius:var(--r-pill);
          background:#111; color:#fff;
          font-family:var(--font-haas); font-size:14px;
          border:none; cursor:pointer;
          transition:opacity 150ms ease-in-out;
          margin-top:var(--sp4);
        }
        .gf-submit:hover { opacity:0.8; }
        .gf-submit:disabled { opacity:0.5; cursor:not-allowed; }

        .gf-note { font-size:12px; color:#bbb; text-align:center; margin-top:var(--sp2); }

        @media (max-width:600px) {
          .gf-row-2 { grid-template-columns:1fr; }
        }
      `}</style>
    </>
  );
}
