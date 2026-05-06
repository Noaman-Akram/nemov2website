"use client";
import { Nav } from "@/components/layout/Nav";

export default function CareersLab() {
  return (
    <>
      <Nav />
      <main style={{ 
        backgroundColor: 'var(--black)', 
        minHeight: '100vh', 
        paddingTop: '160px',
        paddingBottom: '120px' 
      }}>
        <div style={{ 
          maxWidth: 'var(--container)', 
          margin: '0 auto', 
          padding: '0 40px',
          color: 'var(--t1)' 
        }}>
          <h1 style={{ 
            fontFamily: 'var(--font-aeonik)', 
            fontSize: 'clamp(36px, 4vw, 48px)', 
            letterSpacing: '-1px',
            marginBottom: 'var(--sp16)' 
          }}>
            Job Listing Options
          </h1>

          {/* OPTION 1: Minimal Line Items */}
          <section style={{ marginBottom: 'var(--sp20)' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-haas)', 
              fontSize: '12px', 
              fontWeight: 700, 
              letterSpacing: '0.14em', 
              textTransform: 'uppercase', 
              color: 'var(--green)',
              marginBottom: 'var(--sp8)'
            }}>
              Option 1: Minimal Rows
            </h2>
            
            <div style={{ borderTop: '1px solid var(--b1)' }}>
              {[
                { title: "Senior Frontend Engineer", location: "Cairo / Remote" },
                { title: "Product Designer", location: "Remote" },
                { title: "Backend Engineer (Go)", location: "Cairo" }
              ].map((job, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 'var(--sp6) 0',
                  borderBottom: '1px solid var(--b1)',
                  cursor: 'pointer',
                  transition: 'background var(--e-fast), padding var(--e-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--s3h)';
                  e.currentTarget.style.paddingLeft = 'var(--sp4)';
                  e.currentTarget.style.paddingRight = 'var(--sp4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.paddingLeft = '0';
                  e.currentTarget.style.paddingRight = '0';
                }}
                >
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-aeonik)', fontSize: '24px', fontWeight: 400, marginBottom: 'var(--sp2)' }}>{job.title}</h3>
                    <span style={{ 
                      fontFamily: 'var(--font-haas)', 
                      fontSize: '14px', 
                      color: 'var(--t3)',
                      display: 'flex',
                      gap: 'var(--sp4)'
                    }}>
                      <span>Engineering</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </span>
                  </div>
                  <div style={{ color: 'var(--green)', fontSize: '24px' }}>→</div>
                </div>
              ))}
            </div>
          </section>

          {/* OPTION 2: Feature Cards */}
          <section style={{ marginBottom: 'var(--sp20)' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-haas)', 
              fontSize: '12px', 
              fontWeight: 700, 
              letterSpacing: '0.14em', 
              textTransform: 'uppercase', 
              color: 'var(--green)',
              marginBottom: 'var(--sp8)'
            }}>
              Option 2: Feature Cards
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--sp6)' }}>
              {[
                { title: "Senior Frontend Engineer", location: "Cairo / Remote", type: "Full-time" },
                { title: "Product Designer", location: "Remote", type: "Contract" },
                { title: "Backend Engineer (Go)", location: "Cairo", type: "Full-time" }
              ].map((job, i) => (
                <div key={i} style={{
                  background: 'var(--s3)',
                  border: '1px solid var(--b1)',
                  borderTop: '2px solid var(--green)',
                  borderRadius: 'var(--r-md)',
                  padding: 'var(--sp8)',
                  cursor: 'pointer',
                  transition: 'background var(--e-fast), transform var(--e-fast), box-shadow var(--e-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--s3h)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 16px -4px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--s3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{ display: 'flex', gap: 'var(--sp2)', marginBottom: 'var(--sp6)' }}>
                    <span style={{ 
                      fontFamily: 'var(--font-haas)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      padding: '0 9px', height: '20px', display: 'inline-flex', alignItems: 'center', borderRadius: 'var(--r-pill)',
                      background: 'var(--s3)', color: 'var(--t3)', border: '1px solid var(--b2)'
                    }}>{job.location}</span>
                    <span style={{ 
                      fontFamily: 'var(--font-haas)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      padding: '0 9px', height: '20px', display: 'inline-flex', alignItems: 'center', borderRadius: 'var(--r-pill)',
                      background: 'var(--s3)', color: 'var(--t3)', border: '1px solid var(--b2)'
                    }}>{job.type}</span>
                  </div>
                  
                  <h3 style={{ fontFamily: 'var(--font-aeonik)', fontSize: '24px', fontWeight: 400, marginBottom: 'var(--sp4)' }}>{job.title}</h3>
                  <p style={{ fontFamily: 'var(--font-haas)', fontSize: '14px', color: 'var(--t2)', lineHeight: 1.5, marginBottom: 'var(--sp6)' }}>
                    Join our core team to build the next generation of web applications using advanced technologies and premium design.
                  </p>
                  
                  <div style={{ fontFamily: 'var(--font-haas)', fontSize: '14px', fontWeight: 500, color: 'var(--t1)' }}>
                    View Role <span style={{ color: 'var(--green)' }}>→</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
