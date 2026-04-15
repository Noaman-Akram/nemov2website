import Image from "next/image";
import Link from "next/link";
import { SubscribeForm } from "./SubscribeForm";
import { LiveClocks } from "./LiveClocks";
import { FooterGlowLine } from "./FooterGlowLine";

const COLS = [
  {
    title: "Product",
    links: [
      { label: "Branding", href: "/services" },
      { label: "Web design", href: "/services" },
      { label: "Apps", href: "/services" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Strategy", href: "/services" },
      { label: "Architecture", href: "/services" },
      { label: "UX / UI", href: "/services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Culture", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Archive",
    links: [
      { label: "Case Studies", href: "/work" },
      { label: "Experiments", href: "/work" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/madebynemo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/madebynemo" },
  { label: "Dribbble", href: "https://dribbble.com/madebynemo" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-nav-dark className="ff theme-black">
      <div className="ff-inner">
        <div className="ff-hero">
          <div>
            <h2 className="nl-h">
              What&apos;s <em>next</em> is<br />
              already in motion
            </h2>
            <div className="nl-buttons">
              <Link href="/contact" className="btn btn-p">
                Start a project ↗
              </Link>
              <Link href="/contact" className="btn btn-s">
                Book a call ↗
              </Link>
            </div>
          </div>
          <div className="ff-hero-right">
            <div className="nl-label">Get early access to insights</div>
            <SubscribeForm />
            <div className="nl-meta">No spam. One dispatch a month.</div>
          </div>
        </div>

        <div className="ff-grid">
          {COLS.map((col) => (
            <div className="col-links" key={col.title}>
              <p className="col-title">{col.title}</p>
              {col.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="ff-bottom-row">
          <LiveClocks />
          <div className="ff-socials">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ff-sp"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="ff-wm" aria-hidden="true">
        <Image
          src="https://madebynemo.com/storage/2025/05/nemo-white.png"
          alt="NEMO"
          width={1100}
          height={200}
          draggable={false}
          unoptimized
          className="ff-wm-img"
        />
      </div>

      <FooterGlowLine />

      <div className="ff-cookie">
        <div className="ff-cookie-inner">
          <div className="ff-cookie-left">
            © {currentYear} Nemo | All rights reserved.
          </div>
          <div className="ff-cookie-right">
            <Link href="/privacy">Cookie Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <style>{`
        .theme-black { background: #050505; color: #fff; overflow: hidden; position: relative; }
        .ff-inner { max-width: var(--container); margin: 0 auto; padding: var(--sp32) var(--sp10) 0; }
        
        .ff-hero { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp16); padding-bottom: var(--sp20); border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: var(--sp16); }
        .nl-h { font-family: var(--font-aeonik); font-size: clamp(36px, 4vw, 56px); font-weight: 400; letter-spacing: -1.5px; line-height: 1.05; margin-bottom: var(--sp6); }
        .nl-h em { font-style: normal; color: var(--green); }
        .nl-buttons { display: flex; gap: var(--sp3); }
        .btn { display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 var(--sp6); border-radius: var(--r-pill); font-family: var(--font-haas); font-size: 14px; font-weight: 500; cursor: pointer; transition: all var(--e-fast); border: 1px solid transparent; }
        .btn-p { background: var(--green); color: #000; }
        .btn-p:hover { background: #29c275; }
        .btn-s { background: transparent; border-color: rgba(255,255,255,0.2); color: #fff; }
        .btn-s:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.4); }
        
        .ff-hero-right { max-width: 440px; width: 100%; justify-self: end; }
        .nl-label { font-family: var(--font-haas); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); margin-bottom: var(--sp3); }
        .nl-meta { margin-top: var(--sp3); font-family: var(--font-haas); font-size: 12px; color: rgba(255,255,255,0.4); }

        .ff-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: var(--sp10); margin-bottom: var(--sp16); }
        .col-title { font-family: var(--font-haas); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); margin-bottom: var(--sp4); }
        .col-links a { display: block; font-family: var(--font-haas); font-size: 14px; color: rgba(255,255,255,0.7); padding: 5px 0; }
        .col-links a:hover { color: #fff; }

        .ff-bottom-row { display: flex; justify-content: space-between; align-items: center; padding-bottom: var(--sp10); }
        .ff-socials { display: flex; gap: var(--sp2); }
        .ff-sp { display: inline-flex; align-items: center; justify-content: center; height: 36px; padding: 0 var(--sp5); border-radius: var(--r-pill); border: 1px solid rgba(255,255,255,0.15); font-family: var(--font-haas); font-size: 12px; color: #fff; }
        .ff-sp:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.4); }

        .ff-wm { margin-top: var(--sp10); display: flex; justify-content: center; align-items: flex-end; position: relative; z-index: 2; margin-bottom: -5px; padding: 0 var(--sp10); }
        .ff-wm-img { width: 100%; max-width: 1100px; height: auto; display: block; -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0) 95%); mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0) 95%); }

        .ff-cookie { background: #030303; padding: var(--sp6) var(--sp10); }
        .ff-cookie-inner { max-width: var(--container); margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .ff-cookie-left { font-family: var(--font-haas); font-size: 12px; color: rgba(255,255,255,0.35); letter-spacing: -0.2px; }
        .ff-cookie-right { display: flex; gap: var(--sp6); }
        .ff-cookie-right a { font-family: var(--font-haas); font-size: 12px; color: rgba(255,255,255,0.35); transition: color var(--e-fast); }
        .ff-cookie-right a:hover { color: #fff; }

        @media(max-width: 900px){
          .ff-hero { grid-template-columns: 1fr; }
          .ff-hero-right { justify-self: start; }
          .ff-grid { grid-template-columns: 1fr 1fr; }
          .ff-bottom-row { flex-direction: column; align-items: flex-start; gap: var(--sp6); }
          .ff-cookie-inner { flex-direction: column; align-items: flex-start; gap: var(--sp4); }
        }
      `}</style>
    </footer>
  );
}
