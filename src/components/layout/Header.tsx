'use client';

import Link from 'next/link';
import { Navigation } from './Navigation';
import { ThemeToggle } from '../ThemeToggle';
import { useEffect, useState } from 'react';

function DualClock() {
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
    <div className="flex gap-grid-4 text-label hide-mobile">
      <div className="flex items-center gap-grid-1">
        <span className="tabular-nums">{times.time1}</span>
        <span className="opacity-60">{times.ampm1}</span>
        <span className="opacity-60 hide-mobile-landscape">NY</span>
      </div>
      <div className="flex items-center gap-grid-1">
        <span className="tabular-nums">{times.time2}</span>
        <span className="opacity-60">{times.ampm2}</span>
        <span className="opacity-60 hide-mobile-landscape">BCN</span>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b border-border z-50">
      <div className="max-w-container mx-auto px-grid-4 md:px-grid-8" style={{ height: '24px' }}>
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center md:w-[36%]">
            <Link
              href="/"
              className="text-button hover:opacity-60 transition-opacity duration-150"
            >
              THEFT
            </Link>
          </div>
          <div className="flex-1 hidden md:flex justify-center">
            <DualClock />
          </div>
          <div className="flex items-center justify-end md:w-[36%] gap-grid-4">
            <ThemeToggle />
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
