-- Expected anon behavior after this migration:
-- ALLOW: INSERT contact_submissions, INSERT event_registrations.
-- ALLOW: SELECT active sponsors, featured speakers, and public storage objects.
-- DENY: SELECT/UPDATE/DELETE contact_submissions and event_registrations.
-- DENY: INSERT/UPDATE/DELETE storage.objects. Server media routes use service_role.

create extension if not exists pgcrypto;

create table if not exists public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  full_name text not null,
  company text,
  job_title text,
  phone text,
  status text not null default 'waitlist',
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  full_name text not null,
  company text,
  subject text,
  message text not null,
  phone text,
  status text not null default 'new',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.speakers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text,
  company text,
  bio text,
  photo_url text,
  is_featured boolean not null default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.sponsors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  tier text,
  logo_url text,
  website_url text,
  description text,
  is_active boolean not null default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.event_registrations enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.speakers enable row level security;
alter table public.sponsors enable row level security;

drop policy if exists registrations_select on public.event_registrations;
drop policy if exists registrations_insert on public.event_registrations;
drop policy if exists registrations_update on public.event_registrations;
drop policy if exists registrations_delete on public.event_registrations;
drop policy if exists public_waitlist_insert on public.event_registrations;
create policy public_waitlist_insert on public.event_registrations
  for insert to anon, authenticated
  with check (status = 'waitlist');

drop policy if exists contacts_select on public.contact_submissions;
drop policy if exists contacts_insert on public.contact_submissions;
drop policy if exists contacts_update on public.contact_submissions;
drop policy if exists contacts_delete on public.contact_submissions;
drop policy if exists public_contact_insert on public.contact_submissions;
create policy public_contact_insert on public.contact_submissions
  for insert to anon, authenticated
  with check (status = 'new');

drop policy if exists speakers_select on public.speakers;
drop policy if exists speakers_insert on public.speakers;
drop policy if exists speakers_update on public.speakers;
drop policy if exists speakers_delete on public.speakers;
drop policy if exists public_speakers_select on public.speakers;
create policy public_speakers_select on public.speakers
  for select to anon, authenticated using (true);

drop policy if exists sponsors_select on public.sponsors;
drop policy if exists sponsors_insert on public.sponsors;
drop policy if exists sponsors_update on public.sponsors;
drop policy if exists sponsors_delete on public.sponsors;
drop policy if exists public_sponsors_select on public.sponsors;
create policy public_sponsors_select on public.sponsors
  for select to anon, authenticated using (is_active = true);

grant usage on schema public to anon, authenticated;
grant insert on public.event_registrations, public.contact_submissions to anon, authenticated;
grant select on public.speakers, public.sponsors to anon, authenticated;
revoke select, update, delete on public.event_registrations, public.contact_submissions from anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('speakers-photos', 'speakers-photos', true, 5242880, array['image/jpeg','image/png','image/webp','image/gif']),
  ('sponsor-logos', 'sponsor-logos', true, 2097152, array['image/jpeg','image/png','image/webp','image/svg+xml']),
  ('event-images', 'event-images', true, 10485760, array['image/jpeg','image/png','image/webp','image/gif']),
  ('documents', 'documents', true, 52428800, array['application/pdf','application/vnd.ms-powerpoint','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists speakers_photos_select on storage.objects;
drop policy if exists speakers_photos_insert on storage.objects;
drop policy if exists speakers_photos_update on storage.objects;
drop policy if exists speakers_photos_delete on storage.objects;
drop policy if exists sponsor_logos_select on storage.objects;
drop policy if exists sponsor_logos_insert on storage.objects;
drop policy if exists sponsor_logos_update on storage.objects;
drop policy if exists sponsor_logos_delete on storage.objects;
drop policy if exists event_images_select on storage.objects;
drop policy if exists event_images_insert on storage.objects;
drop policy if exists event_images_update on storage.objects;
drop policy if exists event_images_delete on storage.objects;
drop policy if exists documents_select on storage.objects;
drop policy if exists documents_insert on storage.objects;
drop policy if exists documents_update on storage.objects;
drop policy if exists documents_delete on storage.objects;
drop policy if exists public_conference_assets_select on storage.objects;
create policy public_conference_assets_select on storage.objects
  for select to public
  using (bucket_id in ('speakers-photos', 'sponsor-logos', 'event-images', 'documents'));
