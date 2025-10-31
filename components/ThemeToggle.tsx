'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-900/60 bg-slate-100 text-slate-900 shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:border-slate-100/70 dark:bg-slate-900 dark:text-slate-100"
      aria-label="Toggle theme"
    >
      <span className="text-xl transition-transform duration-200" aria-hidden>
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  );
}
