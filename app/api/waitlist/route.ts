import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { normalizeWaitlistSubmission } from '@/lib/submissions';

export async function POST(request: Request) {
  try {
    const payload = normalizeWaitlistSubmission(await request.json());
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      return NextResponse.json({ ok: false, error: 'Waiting-list service is not configured.' }, { status: 503 });
    }

    const supabase = createClient(url, key, { auth: { persistSession: false } });
    const { error } = await supabase.from('event_registrations').insert(payload);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to join the waiting list.';
    const status = /required|invalid|request body/i.test(message) ? 400 : 500;
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
