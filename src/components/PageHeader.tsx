export default function PageHeader({ title }: { title: string }) {
  return <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>;
}