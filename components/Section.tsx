import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  children?: ReactNode;
};

export default function Section({ title, description, eyebrow, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      {eyebrow ? <span className="text-xs uppercase tracking-widest text-slate-500">{eyebrow}</span> : null}
      <div>
        <h2 className="font-serif text-2xl text-slate-900">{title}</h2>
        {description ? <p className="mt-2 text-sm text-slate-600">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
