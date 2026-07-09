import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { normalizeContactSubmission } from '@/lib/submissions';

export async function POST(request: Request) {
  try {
    const payload = normalizeContactSubmission(await request.json());
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      return NextResponse.json({ ok: false, error: 'Submission service is not configured.' }, { status: 503 });
    }

    const supabase = createClient(url, key, { auth: { persistSession: false } });
    const { error } = await supabase.from('contact_submissions').insert(payload);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to submit enquiry.';
    const status = /required|invalid|request body/i.test(message) ? 400 : 500;
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
