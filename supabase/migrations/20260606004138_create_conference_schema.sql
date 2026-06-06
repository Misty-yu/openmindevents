/*
# Create OpenMind Conference Database Schema

## Overview
This migration creates the core tables for the OpenMind Workforce Transformation Summit website.
The schema is single-tenant (no user_id/auth) since this is a public event site.

## 1. New Tables

### speakers
- `id` (uuid, primary key) — Unique speaker identifier
- `name` (text, not null) — Speaker full name
- `title` (text) — Job title/position
- `company` (text) — Organization name
- `bio` (text) — Speaker biography
- `photo_url` (text) — Profile photo URL
- `is_featured` (boolean) — Whether to highlight on homepage
- `created_at` (timestamp) — Record creation time
- `updated_at` (timestamp) — Last modified time

### sponsors
- `id` (uuid, primary key) — Unique sponsor identifier
- `name` (text, not null) — Sponsor organization name
- `tier` (text) — Sponsorship level (e.g., 'platinum', 'gold', 'silver')
- `logo_url` (text) — Company logo URL
- `website_url` (text) — Company website
- `description` (text) — Sponsor description
- `is_active` (boolean) — Whether to display on site
- `created_at` (timestamp) — Record creation time
- `updated_at` (timestamp) — Last modified time

### event_registrations
- `id` (uuid, primary key) — Unique registration identifier
- `email` (text, not null) — Attendee email
- `full_name` (text, not null) — Attendee full name
- `company` (text) — Attendee organization
- `job_title` (text) — Attendee job title
- `phone` (text) — Contact phone number
- `status` (text) — Registration status ('registered', 'waitlist', 'cancelled')
- `notes` (text) — Additional notes from attendee
- `created_at` (timestamp) — Registration submission time
- `updated_at` (timestamp) — Last modified time

### contact_submissions
- `id` (uuid, primary key) — Unique submission identifier
- `email` (text, not null) — Contact email
- `full_name` (text, not null) — Contact name
- `company` (text) — Organization name
- `subject` (text) — Inquiry subject
- `message` (text, not null) — Contact message
- `phone` (text) — Phone number
- `status` (text) — Status ('new', 'reviewed', 'responded')
- `created_at` (timestamp) — Submission time
- `updated_at` (timestamp) — Last modified time

## 2. Security
- RLS enabled on ALL tables
- All tables allow public read/write (single-tenant, intentionally shared)
- Policies use `USING (true)` because data is public and meant to be shared
- All tables readable by both anon and authenticated users

## 3. Indexes
- speakers: Index on `is_featured`, `name` for discovery
- sponsors: Index on `tier`, `is_active` for filtering
- event_registrations: Index on `email` for lookups, `status` for reporting
- contact_submissions: Index on `status`, `created_at` for queue management

## 4. Important Notes
- Single-tenant design: no user_id columns or auth checks
- Email fields are NOT unique (users can register multiple times)
- All timestamps use UTC (timestamptz)
- Status fields use text for flexibility (no enum constraints)
- Frontend can CRUD these tables directly via Supabase client
*/

-- Speakers table
CREATE TABLE IF NOT EXISTS speakers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text,
  company text,
  bio text,
  photo_url text,
  is_featured boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Sponsors table
CREATE TABLE IF NOT EXISTS sponsors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  tier text,
  logo_url text,
  website_url text,
  description text,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Event Registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text NOT NULL,
  company text,
  job_title text,
  phone text,
  status text NOT NULL DEFAULT 'registered',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Contact Submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text NOT NULL,
  company text,
  subject text,
  message text NOT NULL,
  phone text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Speakers policies (public read/write)
DROP POLICY IF EXISTS "speakers_select" ON speakers;
CREATE POLICY "speakers_select" ON speakers FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "speakers_insert" ON speakers;
CREATE POLICY "speakers_insert" ON speakers FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "speakers_update" ON speakers;
CREATE POLICY "speakers_update" ON speakers FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "speakers_delete" ON speakers;
CREATE POLICY "speakers_delete" ON speakers FOR DELETE
TO anon, authenticated USING (true);

-- Sponsors policies (public read/write)
DROP POLICY IF EXISTS "sponsors_select" ON sponsors;
CREATE POLICY "sponsors_select" ON sponsors FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "sponsors_insert" ON sponsors;
CREATE POLICY "sponsors_insert" ON sponsors FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "sponsors_update" ON sponsors;
CREATE POLICY "sponsors_update" ON sponsors FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "sponsors_delete" ON sponsors;
CREATE POLICY "sponsors_delete" ON sponsors FOR DELETE
TO anon, authenticated USING (true);

-- Event Registrations policies (public read/write)
DROP POLICY IF EXISTS "registrations_select" ON event_registrations;
CREATE POLICY "registrations_select" ON event_registrations FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "registrations_insert" ON event_registrations;
CREATE POLICY "registrations_insert" ON event_registrations FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "registrations_update" ON event_registrations;
CREATE POLICY "registrations_update" ON event_registrations FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "registrations_delete" ON event_registrations;
CREATE POLICY "registrations_delete" ON event_registrations FOR DELETE
TO anon, authenticated USING (true);

-- Contact Submissions policies (public read/write)
DROP POLICY IF EXISTS "contacts_select" ON contact_submissions;
CREATE POLICY "contacts_select" ON contact_submissions FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "contacts_insert" ON contact_submissions;
CREATE POLICY "contacts_insert" ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "contacts_update" ON contact_submissions;
CREATE POLICY "contacts_update" ON contact_submissions FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "contacts_delete" ON contact_submissions;
CREATE POLICY "contacts_delete" ON contact_submissions FOR DELETE
TO anon, authenticated USING (true);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS speakers_featured_idx ON speakers(is_featured);
CREATE INDEX IF NOT EXISTS speakers_name_idx ON speakers(name);
CREATE INDEX IF NOT EXISTS sponsors_tier_idx ON sponsors(tier);
CREATE INDEX IF NOT EXISTS sponsors_active_idx ON sponsors(is_active);
CREATE INDEX IF NOT EXISTS registrations_email_idx ON event_registrations(email);
CREATE INDEX IF NOT EXISTS registrations_status_idx ON event_registrations(status);
CREATE INDEX IF NOT EXISTS registrations_created_idx ON event_registrations(created_at);
CREATE INDEX IF NOT EXISTS contacts_status_idx ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS contacts_created_idx ON contact_submissions(created_at);
