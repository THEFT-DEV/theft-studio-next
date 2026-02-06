import Link from 'next/link';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            THEFT
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
