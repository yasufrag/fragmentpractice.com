export default function Section({
  className = "",
  children,
}: { className?: string; children: React.ReactNode }) {
  return <section className={`section ${className}`}>{children}</section>;
}