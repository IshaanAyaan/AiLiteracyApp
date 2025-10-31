'use client';

import classNames from 'classnames';
import type { ModeKey } from '@/lib/types';

type ModeOption = {
  key: ModeKey;
  label: string;
  description: string;
};

const options: ModeOption[] = [
  { key: 'beginner', label: 'Beginner', description: 'First steps with AI' },
  { key: 'intermediate', label: 'Intermediate', description: 'Comfortable, wants structure' },
  { key: 'advanced', label: 'Advanced', description: 'Push iteration and critique' },
  { key: 'college', label: 'College Prep', description: 'Research rigor and citations' },
];

type ModeSwitchProps = {
  value: ModeKey;
  onChange: (mode: ModeKey) => void;
};

export default function ModeSwitch({ value, onChange }: ModeSwitchProps) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900/70">
      <div className="flex flex-wrap justify-between gap-3">
        {options.map((option) => {
          const active = option.key === value;
          return (
            <button
              key={option.key}
              type="button"
              onClick={() => onChange(option.key)}
              className={classNames(
                'group relative flex min-w-[140px] flex-1 items-center gap-3 rounded-full border-2 px-5 py-3 text-left text-sm font-semibold transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 sm:max-w-xs',
                active
                  ? 'border-blue-600 bg-blue-600 text-white shadow-lg hover:scale-105 dark:border-blue-400 dark:bg-blue-500'
                  : 'border-slate-200 bg-white text-slate-600 hover:scale-105 hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300'
              )}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base text-blue-600 shadow-sm transition-transform duration-200 group-hover:scale-110 dark:bg-slate-700 dark:text-blue-300">
                {option.label.charAt(0)}
              </span>
              <span className="flex flex-col">
                <span>{option.label}</span>
                <span className="text-xs font-normal text-slate-500 transition-colors group-hover:text-blue-100 dark:text-slate-400 dark:group-hover:text-blue-200">
                  {option.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export const modeOptions: ModeKey[] = options.map((option) => option.key);
