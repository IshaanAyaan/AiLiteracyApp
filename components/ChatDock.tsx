'use client';

import { useEffect, useMemo, useState } from 'react';
import type { AssistRole, ModeKey } from '@/lib/types';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatDockProps = {
  role: AssistRole;
  mode?: ModeKey;
  modeOptions?: ModeKey[];
  onModeChange?: (mode: ModeKey) => void;
};

const roleLabels: Record<AssistRole, string> = {
  student: 'Student Help Chat',
  teacher: 'Teacher Help Chat',
};

export default function ChatDock({ role, mode, modeOptions, onModeChange }: ChatDockProps) {
  const [internalMode, setInternalMode] = useState<ModeKey | undefined>(mode);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const effectiveMode = useMemo(() => mode ?? internalMode, [mode, internalMode]);

  useEffect(() => {
    if (mode) {
      setInternalMode(mode);
    }
  }, [mode]);

  function handleModeChange(nextMode: ModeKey) {
    setInternalMode(nextMode);
    onModeChange?.(nextMode);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;

    setError(null);
    setLoading(true);
    setMessages((prev) => [...prev, { role: 'user', content: question }]);
    setInput('');

    try {
      const response = await fetch('/api/assist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role, mode: effectiveMode, question }),
      });

      if (!response.ok) {
        const text = await response.text();
        let message = 'Request failed';
        if (text) {
          try {
            const parsed = JSON.parse(text);
            if (typeof parsed?.error === 'string') {
              message = parsed.error;
            } else if (typeof parsed?.message === 'string') {
              message = parsed.message;
            } else {
              message = text;
            }
          } catch {
            message = text;
          }
        }
        throw new Error(message);
      }

      const data = await response.json().catch(async () => ({ text: await response.text() }));
      const assistantText = typeof data?.text === 'string' ? data.text : String(data ?? '');

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantText }]);
    } catch (err) {
      console.error(err);
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message || 'Something went wrong. Please try again.');
      setInput(question);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-full max-w-md drop-shadow-2xl">
      <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 backdrop-blur-sm transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900/90">
        <div className="flex items-center justify-between border-b border-slate-200/60 bg-slate-50/80 px-4 py-3 dark:border-slate-800/80 dark:bg-slate-900/70">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500">{roleLabels[role]}</div>
            <div className="text-sm text-slate-600">Quick answers without leaving the page.</div>
          </div>
          {modeOptions && modeOptions.length ? (
            <label className="flex flex-col text-right text-xs text-slate-500 dark:text-slate-400">
              Mode
              <select
                className="mt-1 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition focus:border-blue-400 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                value={effectiveMode ?? modeOptions[0]}
                onChange={(event) => handleModeChange(event.target.value as ModeKey)}
              >
                {modeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
        </div>
        <div className="flex max-h-72 flex-col gap-3 overflow-y-auto px-4 py-3 text-sm text-slate-700 dark:text-slate-200">
          {messages.length === 0 ? (
            <p className="text-slate-500 dark:text-slate-400">Ask something specific like "How do I scaffold a critique activity?"</p>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === 'assistant'
                    ? 'rounded-2xl bg-blue-50/80 p-3 text-slate-700 dark:bg-blue-500/20 dark:text-blue-100'
                    : 'rounded-2xl bg-slate-100/80 p-3 text-slate-700 dark:bg-slate-800/60 dark:text-slate-200'
                }
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {message.role === 'assistant' ? 'Response' : 'You'}
                </div>
                <div className="mt-1 whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
              </div>
            ))
          )}
          {error ? <p className="text-sm text-red-500 dark:text-red-400">{error}</p> : null}
        </div>
        <form
          onSubmit={handleSubmit}
          className="border-t border-slate-200/60 bg-slate-50/80 px-4 py-3 dark:border-slate-800/80 dark:bg-slate-900/70"
        >
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask a focused question..."
            rows={2}
            className="w-full resize-none rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 text-sm text-slate-700 shadow-inner transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
          />
          <div className="mt-3 flex justify-end gap-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-12 min-w-[110px] items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-blue-500 disabled:translate-y-0 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-blue-300 dark:hover:bg-blue-400"
            >
              {loading ? 'Thinking...' : 'Ask'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
