/**
 * (legal) layout
 * Shared layout for legal pages: privacy policy, terms of service.
 * Minimal layout — may share nav/footer or use simplified versions.
 */
export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* TODO: Simplified Nav */}
      <main>{children}</main>
      {/* TODO: Simplified Footer */}
    </>
  );
}
