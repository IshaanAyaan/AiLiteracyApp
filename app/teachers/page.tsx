'use client';

import ChatDock from '@/components/ChatDock';
import WorkflowCard from '@/components/WorkflowCard';
import { teacherWorkflows } from '@/lib/content';

export default function TeachersPage() {
  return (
    <div className="relative pb-40">
      <div className="space-y-6">
        <div className="max-w-4xl rounded-3xl border border-amber-200/40 bg-white/85 px-8 py-8 shadow-lg transition-colors duration-300 dark:border-amber-400/30 dark:bg-slate-900/60">
          <h2 className="font-serif text-3xl text-slate-900 dark:text-slate-100">Teacher Implementation Hub</h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Define AI-allowed zones so brainstorming, outlining, and critique support stay transparent while final deliverables remain student-owned. Each pattern below includes clear evidence expectations.
          </p>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Use the cards to grab student directions, rubric language, and prompts that mirror the workflows—then adapt for your classroom context.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teacherWorkflows.map((workflow) => (
            <WorkflowCard key={workflow.title} {...workflow} />
          ))}
        </div>
      </div>
      <ChatDock role="teacher" />
    </div>
  );
}
