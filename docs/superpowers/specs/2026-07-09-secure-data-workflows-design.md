# Secure Data Workflows Design

## Goal

Make every visible submission and media-management workflow truthful, persistent, and safe to expose publicly.

## Architecture

Public contact and waiting-list forms submit to same-origin Next.js route handlers. The handlers validate and normalize input, then use the Supabase anon client; database RLS permits anonymous inserts only and denies anonymous reads, updates, and deletes of personal data. Media management is removed from public navigation and guarded by a shared admin token before write operations are accepted.

The homepage previous-events gallery reads public objects from the `event-images/past-events` folder and falls back to the six bundled images when storage is unavailable or empty. Documents use the same guarded media API. Supabase credentials remain environment variables and are never embedded beyond the public project URL and anon key.

## Data Flow

- Waiting-list submissions create `event_registrations` rows with status `waitlist`.
- Contact forms create `contact_submissions` rows with status `new`.
- API errors keep the form visible and show an actionable error; success UI appears only after a successful response.
- Public pages may list public event images, but all upload and delete operations require the admin token.
- The admin token is entered per browser session and sent as `x-admin-token`; it is never persisted by the application.

## Security

- Anonymous users cannot select, update, or delete registrations or contact submissions.
- Public media reads remain enabled.
- Storage writes and deletes are performed only through guarded server routes.
- `/admin/media` is removed from public navigation and requires an admin token before rendering management controls.
- Existing public CRUD policies are replaced by least-privilege policies.

## Scope

- Connect all three visible forms to persistence.
- Add guarded media upload/list/delete and document upload.
- Connect homepage previous-event images to storage with local fallback.
- Correct partner CTAs and placeholder links.
- Fix existing lint failures and add repeatable contract/smoke tests.
- Apply the SQL migration to Supabase project `nfvsqlehyybflbclqjzc` and verify with test records.

## Environment

Required variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `ADMIN_MEDIA_TOKEN`. The current local anon key is invalid and must be replaced from the target Supabase project before end-to-end verification.
