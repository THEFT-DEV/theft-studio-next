'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

function FooterClock() {
  const [times, setTimes] = useState({
    time1: '',
    time2: '',
    ampm1: '',
    ampm2: '',
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // Catskills New York (ET)
      const etFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      const etParts = etFormatter.formatToParts(now);
      const etHour = etParts.find(p => p.type === 'hour')?.value || '';
      const etMinute = etParts.find(p => p.type === 'minute')?.value || '';
      const etDayPeriod = etParts.find(p => p.type === 'dayPeriod')?.value.toUpperCase() || '';
      const etTime = `${etHour}:${etMinute}`;

      // Barcelona Spain (CET)
      const cetFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Madrid',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      const cetParts = cetFormatter.formatToParts(now);
      const cetHour = cetParts.find(p => p.type === 'hour')?.value || '';
      const cetMinute = cetParts.find(p => p.type === 'minute')?.value || '';
      const cetDayPeriod = cetParts.find(p => p.type === 'dayPeriod')?.value.toUpperCase() || '';
      const cetTime = `${cetHour}:${cetMinute}`;

      setTimes({
        time1: etTime,
        time2: cetTime,
        ampm1: etDayPeriod,
        ampm2: cetDayPeriod,
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-grid-2 text-label">
      <div className="flex items-center gap-grid-2">
        <span className="tabular-nums">{times.time1}</span>
        <span className="opacity-60">{times.ampm1}</span>
        <span className="opacity-60">NY</span>
      </div>
      <div className="flex items-center gap-grid-2">
        <span className="tabular-nums">{times.time2}</span>
        <span className="opacity-60">{times.ampm2}</span>
        <span className="opacity-60">BCN</span>
      </div>
    </div>
  );
}

export function Footer() {
  const links = [
    { href: '/portfolio', label: 'PROJECTS' },
    { href: '/blog', label: 'RESEARCH' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <footer className="mt-auto border-t border-border">
      <div className="max-w-container mx-auto px-grid-4 md:px-grid-8 py-grid-6 md:py-grid-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-6">
          <div>
            <p className="text-label mb-grid-4 opacity-70">
              © {new Date().getFullYear()} THEFT STUDIO LLC
            </p>
            <FooterClock />
          </div>
          <nav className="flex flex-col gap-grid-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-label border-b border-transparent hover:border-foreground hover:opacity-60 transition-all duration-150 w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex md:justify-end">
            <Link
              href="/"
              className="text-button hover:opacity-60 transition-opacity duration-150"
            >
              THEFT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
