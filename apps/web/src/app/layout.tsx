import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'International-School Families in Singapore',
  description: 'Context for consumer patterns without stereotypes.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-slate-25">
      <body className="min-h-screen bg-slate-25 text-slate-900">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-base font-bold text-indigo-700">
              International-School Families
            </Link>
            <nav className="flex items-center gap-4 text-sm font-semibold text-slate-700">
              <Link href="/ics-snapshot" className="hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600">
                ICS snapshot
              </Link>
              <Link href="/school-models" className="hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600">
                School models
              </Link>
              <Link href="/choose-your-context" className="hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600">
                Choose your context
              </Link>
              <Link href="/sources" className="hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600">
                Sources
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
            <p>Designed for students. Build careful claims, add caveats.</p>
            <div className="flex items-center gap-3">
              <Link href="/data-literacy" className="hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600">
                Data literacy
              </Link>
              <Link href="/inquiry" className="hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600">
                Inquiry questions
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
