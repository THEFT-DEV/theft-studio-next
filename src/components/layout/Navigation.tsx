'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/portfolio', label: 'PROJECTS' },
  { href: '/blog', label: 'RESEARCH' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-grid-4">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-button border-b transition-all duration-150 ${
                isActive
                  ? 'border-foreground opacity-100'
                  : 'border-transparent hover:opacity-60'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-button border-b border-transparent hover:opacity-60 transition-opacity duration-150"
        aria-label="Toggle menu"
      >
        {isOpen ? 'CLOSE' : 'MENU'}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[24px] bg-background border-t border-border z-40 md:hidden">
          <nav className="flex flex-col gap-grid-4 p-grid-4">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-headline-lg border-b pb-grid-2 transition-all duration-150 ${
                    isActive
                      ? 'border-foreground opacity-100'
                      : 'border-transparent hover:opacity-60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
