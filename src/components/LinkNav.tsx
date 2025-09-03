import Link from "next/link";
export default function LinkNav({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-400 no-underline hover:underline hover:text-white underline-offset-2"
    >
      {children}
    </Link>
  );
}
