import Link from 'next/link';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors"
        >
          Portfolio
        </Link>
        <Navigation />
      </div>
    </header>
  );
};
