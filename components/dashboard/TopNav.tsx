'use client';

import { BellIcon, SettingsIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitch } from '@/components/shared/ThemeSwitch';
import { navItems } from '@/data/dashboard';

export function TopNav() {
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const activePathname =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || '/'
      : pathname;

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-4 bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl shadow-[var(--shadow-elevated)]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center font-bold text-neutral-textMain dark:text-dark-secondary-900 text-lg">
          M
        </div>
        <span className="text-xl font-semibold text-neutral-textMain dark:text-dark-secondary-500">
          Mark.cc
        </span>
      </div>

      <nav className="order-3 w-full overflow-x-auto md:order-none md:w-auto md:flex md:items-center md:gap-1 bg-neutral-background dark:bg-dark-neutral-background rounded-full px-2 py-1.5">
        <div className="flex min-w-max items-center gap-1">
          {navItems.map((item) => {
            const isActive = activePathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                isActive
                  ? 'bg-neutral-textMain dark:bg-dark-secondary-500 text-white dark:text-dark-neutral-background'
                  : 'text-neutral-textMuted dark:text-dark-neutral-textMuted hover:text-neutral-textMain dark:hover:text-dark-secondary-500'
              }
            `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-xl hover:bg-neutral-border dark:hover:bg-dark-neutral-border transition-colors">
          <BellIcon className="w-5 h-5 text-neutral-textMuted dark:text-dark-neutral-textMuted" />
        </button>
        <button className="p-2 rounded-xl hover:bg-neutral-border dark:hover:bg-dark-neutral-border transition-colors">
          <SettingsIcon className="w-5 h-5 text-neutral-textMuted dark:text-dark-neutral-textMuted" />
        </button>
        <ThemeSwitch />
      </div>
    </header>
  );
}
