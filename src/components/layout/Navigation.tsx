'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/portfolio', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-gray-600 ${
              isActive ? 'text-black' : 'text-gray-500'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
