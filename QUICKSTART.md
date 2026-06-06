# Database Quickstart

## Database Ready ✅

Your Supabase database is configured with 4 tables:

| Table | Purpose | Rows |
|-------|---------|------|
| `speakers` | Event speakers & presenters | 0 |
| `sponsors` | Sponsor organizations | 0 |
| `event_registrations` | Attendee registrations | 0 |
| `contact_submissions` | Contact form inquiries | 0 |

All tables have RLS enabled and allow public read/write.

## Quick Start

### 1. Import Types & Functions

```typescript
import { supabase } from '@/lib/supabase';
import { submitContact, registerForEvent, getSpeakers } from '@/lib/db';
import type { Speaker, Sponsor, EventRegistration, ContactSubmission } from '@/lib/types';
```

### 2. Add a Speaker

```typescript
const speaker: Speaker = {
  id: '', // Auto-generated
  name: 'Jane Doe',
  title: 'Chief Human Resources Officer',
  company: 'Fortune 500 Enterprise',
  bio: 'Expert in workforce transformation...',
  photo_url: 'https://example.com/photo.jpg',
  is_featured: true,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

const { data, error } = await supabase
  .from('speakers')
  .insert(speaker);
```

### 3. Get All Speakers

```typescript
const speakers = await getSpeakers();
console.log(speakers);
```

### 4. Register User for Event

```typescript
const registration = await registerForEvent({
  email: 'user@example.com',
  full_name: 'John Smith',
  company: 'Acme Corp',
  job_title: 'CHRO',
  phone: '+1-555-0000'
});
```

### 5. Submit Contact Form

```typescript
const contact = await submitContact({
  email: 'user@example.com',
  full_name: 'Jane Contact',
  company: 'Contact Corp',
  subject: 'Speaking Inquiry',
  message: 'I would like to speak at the summit...',
  phone: '+1-555-0000'
});
```

## Database Files

- **Schema Migration**: Applied via Supabase MCP (no files to edit)
- **Types**: `/lib/types.ts` — TypeScript interfaces
- **Client**: `/lib/supabase.ts` — Supabase client instance
- **Queries**: `/lib/db.ts` — Helper functions
- **Full Guide**: `DATABASE_GUIDE.md` — Complete documentation

## Environment

Your credentials are in `.env`:
```
NEXT_PUBLIC_SUPABASE_URL=https://bhnocohqxbqirxbzitlu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

These are public and safe to expose on the frontend.

## Supabase Dashboard

View and manage your database at:
https://supabase.com/dashboard

Login with your Supabase account.

## Next Steps

1. Connect the contact form (`/components/home/contact-form.tsx`) to use `submitContact()`
2. Load speakers in speakers page using `getSpeakers()`
3. Display sponsors from database
4. Show registration count on homepage
5. Add test data to tables

---

For detailed information, see `DATABASE_GUIDE.md`
