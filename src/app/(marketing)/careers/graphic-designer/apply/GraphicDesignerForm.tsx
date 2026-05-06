"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

type Status = "idle" | "submitting" | "success" | "error";

interface Errs {
  fullName?: string;
  email?: string;
  mobile?: string;
  portfolio?: string;
  tools?: string;
  education?: string;
  gradYear?: string;
  hoursPerDay?: string;
  activeProjects?: string;
  expectedSalary?: string;
  inspiration?: string;
}

function validEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}
function validUrl(v: string) {
  try { new URL(v.trim().startsWith("http") ? v.trim() : `https://${v.trim()}`); return true; }
  catch { return false; }
}
function validEgMobile(v: string) {
  return /^(\+20|0020|0)?1[0-9]{9}$/.test(v.replace(/\s/g, ""));
}

function validate(f: Record<string, string>): Errs {
  const e: Errs = {};
  if (!f.fullName?.trim()) e.fullName = "Required";
  else if (f.fullName.trim().split(/\s+/).length < 2) e.fullName = "Please enter first and last name";

  if (!f.email?.trim()) e.email = "Required";
  else if (!validEmail(f.email)) e.email = "Invalid email address";

  if (!f.mobile?.trim()) e.mobile = "Required";
  else if (!validEgMobile(f.mobile)) e.mobile = "Enter a valid Egyptian number (e.g. 01xx xxxx xxxx)";

  if (!f.portfolio?.trim()) e.portfolio = "Required";
  else if (!validUrl(f.portfolio)) e.portfolio = "Enter a valid URL";

  if (!f.tools?.trim()) e.tools = "Required";

  if (!f.education?.trim()) e.education = "Required";

  const yr = parseInt(f.gradYear, 10);
  if (!f.gradYear?.trim()) e.gradYear = "Required";
  else if (isNaN(yr) || yr < 1990 || yr > 2030) e.gradYear = "Enter a valid year";

  if (!f.hoursPerDay) e.hoursPerDay = "Please select one";

  if (!f.activeProjects?.trim()) e.activeProjects = "Required — enter 0 if none";
  else if (isNaN(parseInt(f.activeProjects, 10)) || parseInt(f.activeProjects, 10) < 0) e.activeProjects = "Enter a number";

  if (!f.expectedSalary?.trim()) e.expectedSalary = "Required";

  if (!f.inspiration?.trim()) e.inspiration = "Required";
  else if (f.inspiration.trim().length < 20) e.inspiration = "Give us a bit more detail";

  return e;
}

export function GraphicDesignerForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [submitErr, setSubmitErr] = useState("");
  const [errs, setErrs] = useState<Errs>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [hours, setHours] = useState("");

  const touch = useCallback((name: string) => {
    setTouched((t) => ({ ...t, [name]: true }));
  }, []);

  function getFormData(form: HTMLFormElement): Record<string, string> {
    const out: Record<string, string> = {};
    new FormData(form).forEach((v, k) => { out[k] = String(v); });
    return out;
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    touch(name);
    const fd = getFormData(e.currentTarget.form!);
    fd[name] = value;
    const v = validate(fd);
    setErrs((p) => ({ ...p, [name]: v[name as keyof Errs] }));
  }

  function clearErr(name: keyof Errs) {
    setErrs((p) => ({ ...p, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = getFormData(e.currentTarget);
    if (hours) fd.hoursPerDay = hours;

    const v = validate(fd);
    if (Object.keys(v).length) {
      setErrs(v);
      const allTouched: Record<string, boolean> = {};
      Object.keys(v).forEach((k) => (allTouched[k] = true));
      setTouched(allTouched);
      document.querySelector<HTMLElement>(".gf-err")?.closest(".gf-field")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("submitting");
    setSubmitErr("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fd,
          portfolio: fd.portfolio.startsWith("http") ? fd.portfolio : `https://${fd.portfolio}`,
        }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || "Something went wrong");
      }
      setStatus("success");
      setTimeout(() => router.push("/careers"), 4000);
    } catch (err) {
      setStatus("error");
      setSubmitErr(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const e = (n: keyof Errs) => (touched[n] && errs[n] ? errs[n] : undefined);
  const ic = (n: keyof Errs) => `gf-input${e(n) ? " gf-err-input" : ""}`;

  if (status === "success") {
    return (
      <>
        <div className="gf-success">
          <div className="gf-success-check">✓</div>
          <div className="gf-success-h">Application received.</div>
          <p className="gf-success-p">We'll be in touch within 5 business days. Taking you back to careers…</p>
        </div>
        <style>{`
          .gf-success { padding: var(--sp20) 0; display:flex; flex-direction:column; gap:var(--sp4); }
          .gf-success-check { width:48px;height:48px;border-radius:50%;border:1px solid rgba(53,214,135,0.3);background:rgba(53,214,135,0.08);display:flex;align-items:center;justify-content:center;font-size:18px;color:#35D687; }
          .gf-success-h { font-family:var(--font-aeonik);font-size:28px;font-weight:400;letter-spacing:-0.8px;color:#111; }
          .gf-success-p { font-size:14px;color:#888;line-height:1.7; }
        `}</style>
      </>
    );
  }

  return (
    <>
      <form className="gf" onSubmit={handleSubmit} noValidate>

        {/* ── Row 1 ── */}
        <div className="gf-row">
          <div className="gf-field">
            <label className="gf-label">Full Name <span className="gf-req">*</span></label>
            <input className={ic("fullName")} name="fullName" type="text" placeholder="First and last name" onBlur={handleBlur} onChange={() => touched.fullName && clearErr("fullName")} />
            {e("fullName") && <span className="gf-err">{e("fullName")}</span>}
          </div>
          <div className="gf-field">
            <label className="gf-label">Email <span className="gf-req">*</span></label>
            <input className={ic("email")} name="email" type="email" placeholder="you@example.com" onBlur={handleBlur} onChange={() => touched.email && clearErr("email")} />
            {e("email") && <span className="gf-err">{e("email")}</span>}
          </div>
        </div>

        {/* ── Row 2 ── */}
        <div className="gf-row">
          <div className="gf-field">
            <label className="gf-label">Mobile (WhatsApp) <span className="gf-req">*</span></label>
            <input className={ic("mobile")} name="mobile" type="tel" placeholder="01xx xxxx xxxx" onBlur={handleBlur} onChange={() => touched.mobile && clearErr("mobile")} />
            {e("mobile") && <span className="gf-err">{e("mobile")}</span>}
          </div>
          <div className="gf-field">
            <label className="gf-label">Portfolio Link <span className="gf-req">*</span></label>
            <input className={ic("portfolio")} name="portfolio" type="text" placeholder="behance.net/you or drive link" onBlur={handleBlur} onChange={() => touched.portfolio && clearErr("portfolio")} />
            {e("portfolio") && <span className="gf-err">{e("portfolio")}</span>}
          </div>
        </div>

        {/* ── Tools ── */}
        <div className="gf-field">
          <label className="gf-label">Design tools you mainly use <span className="gf-req">*</span></label>
          <input className={ic("tools")} name="tools" type="text" placeholder="Figma, Illustrator, Photoshop…" onBlur={handleBlur} onChange={() => touched.tools && clearErr("tools")} />
          {e("tools") && <span className="gf-err">{e("tools")}</span>}
        </div>

        {/* ── Row 3 ── */}
        <div className="gf-row">
          <div className="gf-field">
            <label className="gf-label">Education <span className="gf-req">*</span></label>
            <input className={ic("education")} name="education" type="text" placeholder="Faculty / Major" onBlur={handleBlur} onChange={() => touched.education && clearErr("education")} />
            {e("education") && <span className="gf-err">{e("education")}</span>}
          </div>
          <div className="gf-field">
            <label className="gf-label">Graduation Year <span className="gf-req">*</span></label>
            <input className={ic("gradYear")} name="gradYear" type="number" placeholder="2024" onBlur={handleBlur} onChange={() => touched.gradYear && clearErr("gradYear")} />
            {e("gradYear") && <span className="gf-err">{e("gradYear")}</span>}
          </div>
        </div>

        {/* ── Hours ── */}
        <div className="gf-field">
          <label className="gf-label">Hours per day available <span className="gf-req">*</span></label>
          <div className="gf-pills">
            {[["lt2","< 2h"],["2","2h"],["4","4h"],["6","6h"],["8","8h"]].map(([v, l]) => (
              <button key={v} type="button"
                className={`gf-pill${hours === v ? " gf-pill-on" : ""}${touched.hoursPerDay && errs.hoursPerDay ? " gf-pill-err" : ""}`}
                onClick={() => { setHours(v); touch("hoursPerDay"); clearErr("hoursPerDay"); }}
              >{l}</button>
            ))}
          </div>
          {e("hoursPerDay") && <span className="gf-err">{e("hoursPerDay")}</span>}
        </div>

        {/* ── Row 4 ── */}
        <div className="gf-row">
          <div className="gf-field">
            <label className="gf-label">Active projects / clients now <span className="gf-req">*</span></label>
            <input className={ic("activeProjects")} name="activeProjects" type="number" placeholder="0" min="0" onBlur={handleBlur} onChange={() => touched.activeProjects && clearErr("activeProjects")} />
            {e("activeProjects") && <span className="gf-err">{e("activeProjects")}</span>}
          </div>
          <div className="gf-field">
            <label className="gf-label">Expected salary — EGP/month <span className="gf-req">*</span></label>
            <input className={ic("expectedSalary")} name="expectedSalary" type="text" placeholder="e.g. 5,000 – 8,000" onBlur={handleBlur} onChange={() => touched.expectedSalary && clearErr("expectedSalary")} />
            {e("expectedSalary") && <span className="gf-err">{e("expectedSalary")}</span>}
          </div>
        </div>

        {/* ── Inspiration ── */}
        <div className="gf-field">
          <label className="gf-label">Where do you get inspiration for moodboards? <span className="gf-req">*</span></label>
          <textarea className={`gf-textarea${e("inspiration") ? " gf-err-input" : ""}`} name="inspiration" placeholder="Behance, Pinterest, specific designers, galleries — be specific." rows={4} onBlur={handleBlur} onChange={() => touched.inspiration && clearErr("inspiration")} />
          {e("inspiration") && <span className="gf-err">{e("inspiration")}</span>}
        </div>

        {/* ── Motion rating ── */}
        <div className="gf-field">
          <label className="gf-label">Video editing / motion graphics skill <span className="gf-opt">— optional</span></label>
          <div className="gf-rating">
            {[1,2,3,4,5].map((n) => (
              <label key={n} className="gf-rating-item">
                <input type="radio" name="motionRating" value={String(n)} />
                <span className="gf-rating-btn">{n}</span>
              </label>
            ))}
            <span className="gf-rating-hint">1 = beginner · 5 = pro</span>
          </div>
        </div>

        {status === "error" && <div className="gf-submit-err">{submitErr}</div>}

        <div className="gf-footer">
          <button className="gf-submit" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting…" : "Submit application →"}
          </button>
          <span className="gf-footer-note">We reply to every application within 5 business days.</span>
        </div>

      </form>

      <style>{`
        .gf {
          display: flex;
          flex-direction: column;
          gap: var(--sp8);
        }
        .gf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--sp5);
        }
        .gf-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .gf-label {
          font-family: var(--font-haas);
          font-size: 13px;
          color: #555;
        }
        .gf-req { color: var(--green); }
        .gf-opt { color: #bbb; font-size: 12px; }

        .gf-input, .gf-textarea {
          font-family: var(--font-haas);
          font-size: 14px;
          color: #111;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.11);
          border-radius: var(--r-md);
          outline: none;
          transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
          width: 100%;
        }
        .gf-input {
          height: 48px;
          padding: 0 var(--sp5);
        }
        .gf-textarea {
          padding: var(--sp4) var(--sp5);
          resize: vertical;
          min-height: 110px;
          line-height: 1.65;
        }
        .gf-input::placeholder, .gf-textarea::placeholder {
          color: rgba(0,0,0,0.2);
        }
        .gf-input:focus, .gf-textarea:focus {
          border-color: #35D687;
          box-shadow: 0 0 0 3px rgba(53,214,135,0.1);
        }
        .gf-err-input {
          border-color: #dc2626 !important;
          box-shadow: 0 0 0 3px rgba(220,38,38,0.06) !important;
        }
        .gf-err {
          font-family: var(--font-haas);
          font-size: 12px;
          color: #dc2626;
        }

        /* Pills */
        .gf-pills { display: flex; gap: var(--sp2); flex-wrap: wrap; }
        .gf-pill {
          height: 38px; padding: 0 var(--sp5);
          border: 1px solid rgba(0,0,0,0.11);
          border-radius: var(--r-pill);
          background: #fff;
          font-family: var(--font-haas); font-size: 13px; color: #666;
          cursor: pointer;
          transition: all 150ms ease-in-out;
        }
        .gf-pill:hover { border-color: rgba(0,0,0,0.22); color: #111; }
        .gf-pill-on { background: #111; border-color: #111; color: #fff; }
        .gf-pill-err { border-color: #dc2626; }

        /* Rating */
        .gf-rating { display: flex; align-items: center; gap: var(--sp2); flex-wrap: wrap; }
        .gf-rating-item { cursor: pointer; }
        .gf-rating-item input { display: none; }
        .gf-rating-btn {
          width: 44px; height: 44px;
          border: 1px solid rgba(0,0,0,0.11);
          border-radius: var(--r-md);
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-aeonik); font-size: 15px; color: #888;
          cursor: pointer;
          transition: all 150ms ease-in-out;
        }
        .gf-rating-item input:checked + .gf-rating-btn {
          background: #111; border-color: #111; color: #fff;
        }
        .gf-rating-hint { font-family: var(--font-haas); font-size: 12px; color: #bbb; margin-left: var(--sp2); }

        /* Submit */
        .gf-submit-err {
          padding: var(--sp4) var(--sp5);
          border: 1px solid rgba(220,38,38,0.18);
          border-radius: var(--r-md);
          background: rgba(220,38,38,0.04);
          font-size: 13px; color: #dc2626;
        }
        .gf-footer {
          display: flex;
          align-items: center;
          gap: var(--sp6);
          padding-top: var(--sp4);
          flex-wrap: wrap;
        }
        .gf-submit {
          height: 52px; padding: 0 var(--sp10);
          border-radius: var(--r-pill);
          background: #111; color: #fff;
          font-family: var(--font-haas); font-size: 14px;
          border: none; cursor: pointer;
          transition: opacity 150ms ease-in-out;
          flex-shrink: 0;
        }
        .gf-submit:hover { opacity: 0.8; }
        .gf-submit:disabled { opacity: 0.4; cursor: not-allowed; }
        .gf-footer-note { font-family: var(--font-haas); font-size: 13px; color: #aaa; }

        @media (max-width: 600px) {
          .gf-row { grid-template-columns: 1fr; }
          .gf-submit { width: 100%; display: flex; justify-content: center; }
          .gf-footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
