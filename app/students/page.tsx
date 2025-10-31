'use client';

import { useState } from 'react';
import ChatDock from '@/components/ChatDock';
import ModeSwitch, { modeOptions } from '@/components/ModeSwitch';
import WorkflowCard from '@/components/WorkflowCard';
import { studentWorkflows } from '@/lib/content';
import type { ModeKey } from '@/lib/types';

export default function StudentsPage() {
  const [mode, setMode] = useState<ModeKey>('beginner');
  const workflows = studentWorkflows[mode];

  return (
    <div className="relative pb-40">
      <div className="space-y-6">
        <div className="max-w-4xl rounded-3xl border border-blue-200/40 bg-white/80 px-8 py-8 shadow-lg transition-colors duration-300 dark:border-blue-500/30 dark:bg-slate-900/60">
          <h2 className="font-serif text-3xl text-slate-900 dark:text-slate-100">Student Playbook</h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            These workflows help you invite AI in without surrendering your learning. Begin with your own thinking, ask AI for structure or critique, then document what you adopt, tweak, or ignore.
          </p>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Choose a mode that fits your comfort level—each card includes steps, guardrails, and ready-to-copy prompts tuned for that stage.
          </p>
        </div>
        <ModeSwitch value={mode} onChange={setMode} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workflows.map((workflow) => (
            <WorkflowCard key={workflow.title} {...workflow} />
          ))}
        </div>
      </div>
      <ChatDock role="student" mode={mode} modeOptions={modeOptions} onModeChange={setMode} />
    </div>
  );
}
