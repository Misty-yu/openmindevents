# OpenMind Summit Database Guide

## Overview

Your project now has a fully configured Supabase database with 4 core tables:
- **speakers** — Event speakers & presenters
- **sponsors** — Sponsor organizations
- **event_registrations** — Attendee registrations
- **contact_submissions** — Contact form inquiries

All tables are publicly accessible (no authentication required).

## Database Tables

### speakers
Store information about event speakers.

**Fields:**
- `id` (uuid) — Unique identifier
- `name` (text) — Speaker full name
- `title` (text) — Job title
- `company` (text) — Organization
- `bio` (text) — Biography
- `photo_url` (text) — Profile photo URL
- `is_featured` (boolean) — Featured on homepage
- `created_at` (timestamp) — Created time
- `updated_at` (timestamp) — Last modified

**Example:**
```typescript
const { data, error } = await supabase
  .from('speakers')
  .insert({
    name: 'Jane Doe',
    title: 'Chief Human Resources Officer',
    company: 'Fortune 500 Enterprise',
    bio: 'Expert in workforce transformation...',
    photo_url: 'https://example.com/photo.jpg',
    is_featured: true
  });
```

### sponsors
Store sponsorship information.

**Fields:**
- `id` (uuid) — Unique identifier
- `name` (text) — Sponsor organization name
- `tier` (text) — Sponsorship level (e.g., 'platinum', 'gold', 'silver')
- `logo_url` (text) — Company logo URL
- `website_url` (text) — Company website
- `description` (text) — Sponsor description
- `is_active` (boolean) — Display on site
- `created_at` (timestamp) — Created time
- `updated_at` (timestamp) — Last modified

**Example:**
```typescript
const { data, error } = await supabase
  .from('sponsors')
  .insert({
    name: 'AWS',
    tier: 'platinum',
    logo_url: 'https://example.com/aws-logo.png',
    website_url: 'https://aws.amazon.com',
    description: 'Cloud infrastructure partner',
    is_active: true
  });
```

### event_registrations
Store attendee registrations.

**Fields:**
- `id` (uuid) — Unique identifier
- `email` (text) — Email address
- `full_name` (text) — Full name
- `company` (text) — Organization
- `job_title` (text) — Job title
- `phone` (text) — Phone number
- `status` (text) — 'registered', 'waitlist', or 'cancelled'
- `notes` (text) — Additional notes
- `created_at` (timestamp) — Registration time
- `updated_at` (timestamp) — Last modified

**Example:**
```typescript
const { data, error } = await supabase
  .from('event_registrations')
  .insert({
    email: 'john@example.com',
    full_name: 'John Smith',
    company: 'Acme Corp',
    job_title: 'CHRO',
    phone: '+1-555-0100',
    status: 'registered'
  });
```

### contact_submissions
Store contact form submissions.

**Fields:**
- `id` (uuid) — Unique identifier
- `email` (text) — Contact email
- `full_name` (text) — Contact name
- `company` (text) — Organization
- `subject` (text) — Inquiry subject
- `message` (text) — Message content
- `phone` (text) — Phone number
- `status` (text) — 'new', 'reviewed', or 'responded'
- `created_at` (timestamp) — Submission time
- `updated_at` (timestamp) — Last modified

**Example:**
```typescript
const { data, error } = await supabase
  .from('contact_submissions')
  .insert({
    email: 'contact@example.com',
    full_name: 'Jane Contact',
    company: 'Contact Corp',
    subject: 'Speaking Inquiry',
    message: 'I would like to speak at the summit...',
    phone: '+1-555-0200',
    status: 'new'
  });
```

## Using the Database

### Setup

The Supabase client is already configured in `/lib/supabase.ts`:

```typescript
import { supabase } from '@/lib/supabase';
```

### Helper Functions

Helper functions are available in `/lib/db.ts`:

```typescript
import {
  getSpeakers,
  getFeaturedSpeakers,
  getSponsors,
  registerForEvent,
  submitContact,
  getRegistrations,
  getContactSubmissions,
} from '@/lib/db';

// Get all speakers
const speakers = await getSpeakers();

// Get featured speakers
const featured = await getFeaturedSpeakers();

// Get sponsors by tier
const platinumSponsors = await getSponsorsByTier('platinum');

// Register for event
const registration = await registerForEvent({
  email: 'user@example.com',
  full_name: 'User Name',
  company: 'Company',
  job_title: 'Title',
  phone: '+1-555-0000'
});

// Submit contact form
const contact = await submitContact({
  email: 'user@example.com',
  full_name: 'User Name',
  company: 'Company',
  subject: 'Inquiry',
  message: 'My message...',
  phone: '+1-555-0000'
});
```

### Direct Queries

For custom queries, use the Supabase client directly:

```typescript
import { supabase } from '@/lib/supabase';

// Select
const { data, error } = await supabase
  .from('speakers')
  .select('*')
  .order('name');

// Insert
const { data, error } = await supabase
  .from('event_registrations')
  .insert([{ email, full_name, ... }])
  .select();

// Update
const { data, error } = await supabase
  .from('speakers')
  .update({ name: 'New Name' })
  .eq('id', speakerId);

// Delete
const { data, error } = await supabase
  .from('sponsors')
  .delete()
  .eq('id', sponsorId);
```

## Real-Time Subscriptions

Listen for real-time changes:

```typescript
const subscription = supabase
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'event_registrations'
    },
    (payload) => {
      console.log('Change received!', payload);
    }
  )
  .subscribe();

// Clean up
subscription.unsubscribe();
```

## Error Handling

Always check for errors:

```typescript
const { data, error } = await supabase
  .from('speakers')
  .select('*');

if (error) {
  console.error('Error:', error.message);
  // Handle error
} else {
  // Use data
}
```

## Environment Variables

Your Supabase credentials are already configured in `.env`:

```
NEXT_PUBLIC_SUPABASE_URL=https://bhnocohqxbqirxbzitlu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

These are public credentials (safe to expose in frontend code) and allow:
- ✅ READ access to all tables
- ✅ INSERT access (for registrations, contact forms)
- ✅ Limited UPDATE access (based on RLS policies)

## Supabase Dashboard

Access your database directly at:
https://supabase.com/dashboard

Sign in with your credentials to:
- View table data
- Run SQL queries
- Configure real-time subscriptions
- Manage backups

## Data Management

### Backup
Supabase automatically backs up your data daily.

### Monitoring
Monitor usage, query performance, and real-time metrics in the Supabase dashboard.

### Storage Limits
- Database: 8GB storage included
- Bandwidth: 2GB outbound included
- Rows: Unlimited

## Best Practices

1. **Error Handling** — Always check for errors on every query
2. **Type Safety** — Use TypeScript types from `/lib/types.ts`
3. **Lazy Loading** — Use `.maybeSingle()` instead of `.single()` when a row may not exist
4. **Filtering** — Filter in the database, not the client
5. **Indexing** — Indexes are already set up for common queries
6. **Timestamps** — All tables have `created_at` and `updated_at` for auditing

## Troubleshooting

**"CORS error"**
- Ensure your domain is whitelisted in Supabase project settings
- Check browser console for full error details

**"Unauthorized" / "Forbidden"**
- Check RLS policies are correctly configured
- Verify Supabase credentials in `.env`

**"Slow queries"**
- Check database indexes (already configured)
- Use filtering and pagination for large datasets
- Avoid N+1 queries

## Next Steps

1. **Connect the contact form** to use `submitContact()` from `/lib/db.ts`
2. **Display speakers** from database in speakers page
3. **Load sponsors** from database in sponsors section
4. **Show registration count** on homepage
5. **Create admin panel** to manage content (optional)

---

**Database Status**: ✅ Active and Ready  
**Tables**: 4 (speakers, sponsors, event_registrations, contact_submissions)  
**RLS**: Enabled (public access)
