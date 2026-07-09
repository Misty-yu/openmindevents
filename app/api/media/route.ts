import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import type { StorageBucket } from '@/lib/types';

const buckets: StorageBucket[] = ['sponsor-logos', 'event-images', 'documents'];

function isBucket(value: string | null): value is StorageBucket {
  return Boolean(value && buckets.includes(value as StorageBucket));
}

function authorized(request: NextRequest) {
  const expected = process.env.ADMIN_MEDIA_TOKEN;
  return Boolean(expected && request.headers.get('x-admin-token') === expected);
}

function client(admin = false) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = admin
    ? process.env.SUPABASE_SERVICE_ROLE_KEY
    : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('Media service is not configured.');
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function GET(request: NextRequest) {
  try {
    const bucket = request.nextUrl.searchParams.get('bucket');
    const folder = request.nextUrl.searchParams.get('folder') || '';
    if (!isBucket(bucket)) return NextResponse.json({ error: 'Invalid bucket.' }, { status: 400 });

    const isPublicGallery = bucket === 'event-images' && folder === 'past-events';
    if (!isPublicGallery && !authorized(request)) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const supabase = client(!isPublicGallery);
    const { data, error } = await supabase.storage.from(bucket).list(folder, {
      limit: 100,
      sortBy: { column: 'created_at', order: 'desc' },
    });
    if (error) throw error;
    const files = (data || [])
      .filter((item) => item.id)
      .map((item) => {
        const path = folder ? `${folder}/${item.name}` : item.name;
        return {
          ...item,
          path,
          publicUrl: supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl,
        };
      });
    return NextResponse.json({ files });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unable to list files.' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  try {
    const form = await request.formData();
    const file = form.get('file');
    const bucket = form.get('bucket');
    const folder = typeof form.get('folder') === 'string' ? String(form.get('folder')) : '';
    if (!(file instanceof File) || typeof bucket !== 'string' || !isBucket(bucket)) {
      return NextResponse.json({ error: 'A valid file and bucket are required.' }, { status: 400 });
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
    const filename = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}-${safeName}`;
    const path = folder ? `${folder}/${filename}` : filename;
    const supabase = client(true);
    const { error } = await supabase.storage.from(bucket).upload(path, file, {
      contentType: file.type,
      cacheControl: '3600',
      upsert: false,
    });
    if (error) throw error;
    const publicUrl = supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
    return NextResponse.json({ path, publicUrl });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Upload failed.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  try {
    const { bucket, path } = await request.json();
    if (!isBucket(bucket) || typeof path !== 'string' || !path) {
      return NextResponse.json({ error: 'A valid bucket and path are required.' }, { status: 400 });
    }
    const { error } = await client(true).storage.from(bucket).remove([path]);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Delete failed.' },
      { status: 500 }
    );
  }
}
