export function AlertBanner() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'var(--green-dim)',
      borderBottom: '1px solid var(--b-green)',
      padding: '4px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span style={{
        fontFamily: 'var(--font-haas)',
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '0.02em',
        color: 'var(--green)',
      }}>
        Website under development
      </span>
    </div>
  );
}
