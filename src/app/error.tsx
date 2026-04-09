"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: "100px 40px", fontFamily: "sans-serif" }}>
      <h1>Something went wrong.</h1>
      <button onClick={reset} style={{ marginTop: "16px", cursor: "pointer" }}>
        Try again
      </button>
    </div>
  );
}
