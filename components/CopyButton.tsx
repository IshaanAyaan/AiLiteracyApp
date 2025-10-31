'use client';

import { useState } from 'react';

type CopyButtonProps = {
  label: string;
  text: string;
};

export default function CopyButton({ label, text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed', error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-12 min-w-[120px] items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-blue-400 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-200"
    >
      {copied ? 'Copied!' : label}
    </button>
  );
}
