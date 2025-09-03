// src/components/Section.tsx
type Props = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Section({ title, className, children }: Props) {
  return (
    <section className={`mt-8 sm:mt-10 ${className ?? ""}`}>
      {title && <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>}
      {children}
    </section>
  );
}