import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div style={{ padding: "100px 40px", fontFamily: "sans-serif" }}>
      <h1>404 — Page Not Found</h1>
      <p>
        <a href="/">← Back to home</a>
      </p>
    </div>
  );
}
