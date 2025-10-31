import Link from 'next/link';

const links = [
  {
    href: '/students',
    title: 'Students',
    description: 'Mode-aware workflows, ready-to-copy prompts, and a help chat tuned for learners.'
  },
  {
    href: '/teachers',
    title: 'Teachers',
    description: 'Assignment patterns, rubrics, and guidance for integrating AI with classroom guardrails.'
  },
  {
    href: '/why',
    title: 'Why this exists',
    description: 'How we translate fast AI tooling into language educators and students can actually use.'
  }
];

export default function HomePage() {
  return (
    <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-xl transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800/70 dark:bg-slate-900/70"
        >
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300 opacity-90 dark:from-blue-500 dark:via-indigo-400 dark:to-emerald-400" />
          <div className="mt-2 inline-flex w-max items-center gap-2 rounded-full border border-slate-200/70 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 transition-colors group-hover:border-blue-300 group-hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:border-blue-400 dark:group-hover:text-blue-300">
            {item.title}
          </div>
          <h2 className="mt-6 font-serif text-2xl text-slate-900 transition-colors group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">
            {item.description.split('.')[0]}.
          </h2>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
          <span className="mt-auto inline-flex items-center gap-3 pt-6 text-sm font-semibold text-blue-700 transition-colors group-hover:text-blue-600 dark:text-blue-300 dark:group-hover:text-blue-200">
            Explore
            <span
              aria-hidden
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-200 text-base transition-transform duration-200 group-hover:scale-110 group-hover:border-blue-400 dark:border-blue-500"
            >
              →
            </span>
          </span>
        </Link>
      ))}
    </section>
  );
}
