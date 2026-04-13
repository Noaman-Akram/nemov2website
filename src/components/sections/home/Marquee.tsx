const CLIENTS = [
  "AXA",
  "Mazda",
  "Pfizer",
  "BlueCross BlueShield",
  "Sage",
  "Carrefour",
  "1-800-Flowers",
  "POLARIS",
  "Mercado Libre",
];

export function Marquee() {
  // Duplicate for seamless loop
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <div
      data-nav-dark
      aria-label="Our clients"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "20px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "marquee 30s linear infinite",
          whiteSpace: "nowrap",
          alignItems: "center",
          width: "max-content",
        }}
      >
        {items.map((name, i) => (
          <span
            key={i}
            style={{
              margin: "0 40px",
              fontFamily: "var(--font-aeonik)",
              fontSize: 20,
              color: "rgba(255,255,255,0.4)",
              fontWeight: 500,
              flexShrink: 0,
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
