import { NextResponse } from 'next/server';
import { callGemini } from '@/lib/gemini';
import { composeUserPrompt } from '@/lib/prompts';
import type { AssistRole, ModeKey } from '@/lib/types';

export const runtime = 'nodejs';

const validRoles: AssistRole[] = ['student', 'teacher'];
const validModes: ModeKey[] = ['beginner', 'intermediate', 'advanced', 'college'];

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (typeof payload !== 'object' || payload === null) {
    return NextResponse.json({ error: 'Request body must be an object.' }, { status: 400 });
  }

  const { role, mode, question } = payload as {
    role?: string;
    mode?: string;
    question?: unknown;
  };

  if (!role || !validRoles.includes(role as AssistRole)) {
    return NextResponse.json({ error: 'Role must be "student" or "teacher".' }, { status: 400 });
  }

  if (role === 'student' && mode && !validModes.includes(mode as ModeKey)) {
    return NextResponse.json({ error: 'Mode must be beginner, intermediate, advanced, or college.' }, { status: 400 });
  }

  if (typeof question !== 'string' || question.trim().length === 0) {
    return NextResponse.json({ error: 'Question must be a non-empty string.' }, { status: 400 });
  }

  try {
    const prompt = composeUserPrompt(role as AssistRole, mode as ModeKey | undefined, question);
    const text = await callGemini(prompt);
    return NextResponse.json({ text });
  } catch (error) {
    console.error('Assist API error', error);
    return NextResponse.json({ error: 'Assistant service failed. Check server logs.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405, headers: { Allow: 'POST' } });
}
