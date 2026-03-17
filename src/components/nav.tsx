"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const links = [
    { label: "Calculate", href: "/", active: pathname === "/" },
    { label: "Learn", href: "/learn", active: pathname.startsWith("/learn") },
  ];

  return (
    <nav className="flex gap-6 text-sm">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`transition-colors ${
            link.active
              ? "text-neutral-900 font-medium"
              : "text-neutral-500 hover:text-neutral-700"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
