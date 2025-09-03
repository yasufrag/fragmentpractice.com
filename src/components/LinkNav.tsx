import Link from "next/link";
import type { Route } from "next";

type Props = {
  href: Route;
  children: React.ReactNode;
  className?: string;
};

export default function LinkNav({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={`text-gray-400 no-underline hover:underline hover:text-white underline-offset-2 ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}