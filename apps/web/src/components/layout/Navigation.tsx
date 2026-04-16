'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/works', label: 'Works' },
  { href: '/career', label: 'Career' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-1">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={[
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                pathname === href
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
              ].join(' ')}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
