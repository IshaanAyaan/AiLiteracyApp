import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import '../styles/prose.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: 'AI Literacy Playbook',
  description:
    'Practical guidance for students and teachers on learning with AI responsibly.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
      >
        <ThemeProvider>
          <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-10 sm:px-10 lg:px-16">
            <header className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-slate-900 px-8 py-8 text-slate-50 shadow-2xl transition-colors duration-300 dark:border-slate-100/10 dark:bg-slate-100 dark:text-slate-900">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 opacity-80 dark:from-blue-600 dark:via-purple-500 dark:to-blue-400" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-50/40 bg-slate-800 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 dark:border-slate-300/60 dark:bg-white/80 dark:text-slate-600">
                    AI Literacy Playbook
                  </div>
                  <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
                    Responsible AI Guides for Classrooms
                  </h1>
                  <p className="max-w-3xl text-base text-slate-200 dark:text-slate-600">
                    Tools change fast. We translate them into guardrails, shared language, and ready-to-use workflows so classrooms keep ownership of learning.
                  </p>
                </div>
                <ThemeToggle />
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="rounded-2xl border border-slate-200/70 bg-white px-6 py-5 text-sm text-slate-500 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              Built for classrooms exploring AI with intention. Keep reflecting, keep iterating.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
