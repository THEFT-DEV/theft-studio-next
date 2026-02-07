import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'THEFT Studio - Design Agency',
  description: 'Award-winning design agency specializing in digital experiences, branding, and web design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen font-mono" suppressHydrationWarning>
        <Header />
        <main className="flex-1" style={{ paddingTop: '25px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
