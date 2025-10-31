'use client';

import CopyButton from './CopyButton';

type PromptOption = {
  label: string;
  text: string;
};

type WorkflowCardProps = {
  title: string;
  whenToUse: string;
  steps: string[];
  prompts: PromptOption[];
};

export default function WorkflowCard({ title, whenToUse, steps, prompts }: WorkflowCardProps) {
  return (
    <article className="group flex h-full flex-col gap-5 rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800/80 dark:bg-slate-900/80">
      <div className="space-y-2">
        <h3 className="font-serif text-xl text-slate-900 transition-colors group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          <span className="font-semibold text-slate-800 dark:text-slate-100">When to use:</span> {whenToUse}
        </p>
      </div>
      <ol className="list-decimal space-y-2 rounded-2xl border border-slate-100 bg-slate-50/60 px-5 py-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-200">
        {steps.map((step, idx) => (
          <li key={idx} className="leading-relaxed">
            {step}
          </li>
        ))}
      </ol>
      <div className="mt-auto flex flex-wrap gap-3">
        {prompts.map((prompt) => (
          <CopyButton key={prompt.label} label={prompt.label} text={prompt.text} />
        ))}
      </div>
    </article>
  );
}
