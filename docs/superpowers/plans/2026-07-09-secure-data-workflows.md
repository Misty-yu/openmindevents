# Secure Data Workflows Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make public forms persist safely and make media management functional without exposing customer data or anonymous write/delete access.

**Architecture:** Same-origin Next.js route handlers validate submissions and mediate Supabase access. RLS is reduced to anonymous form inserts and public media reads; guarded server routes handle media writes. The homepage reads storage with bundled-image fallback.

**Tech Stack:** Next.js 13 App Router, React 18, TypeScript, Supabase, Node smoke tests.

## Global Constraints

- Preserve all existing uncommitted content-refresh work.
- Do not expose service-role credentials in client code.
- Show success only after confirmed persistence.
- Keep the current visual design and responsive behavior.
- Use project `nfvsqlehyybflbclqjzc` for final integration verification.

---

### Task 1: Submission Contracts and Route Handlers

**Files:**
- Create: `lib/submissions.ts`
- Create: `app/api/contact/route.ts`
- Create: `app/api/waitlist/route.ts`
- Create: `scripts/test-data-contracts.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces `normalizeContactSubmission(input)` and `normalizeWaitlistSubmission(input)` validation helpers.
- Produces `POST /api/contact` and `POST /api/waitlist`, returning `{ ok: true }` or `{ ok: false, error }`.

- [ ] Write smoke assertions for required fields, invalid email, normalized payloads, and route presence.
- [ ] Run `npm run test:data` and confirm it fails because the helpers/routes do not exist.
- [ ] Implement validation helpers and POST handlers with explicit 400/503/500 responses.
- [ ] Run `npm run test:data` and confirm all assertions pass.

### Task 2: Connect the Three Public Forms

**Files:**
- Modify: `components/home/contact-form.tsx`
- Modify: `components/waiting-list-modal.tsx`
- Modify: `app/contact/page.tsx`

**Interfaces:**
- Consumes `POST /api/contact` and `POST /api/waitlist`.
- Produces loading, success, and error states based on real HTTP results.

- [ ] Extend smoke assertions to reject handlers that only call `setSubmitted(true)`.
- [ ] Run `npm run test:data` and confirm the assertions fail.
- [ ] Implement async submission, disable buttons while pending, and display server errors.
- [ ] Run `npm run test:data` and confirm the assertions pass.

### Task 3: Secure and Complete Media Workflows

**Files:**
- Create: `app/api/media/route.ts`
- Create: `components/admin/media-manager.tsx`
- Modify: `app/admin/media/page.tsx`
- Modify: `components/navigation.tsx`
- Modify: `components/home/past-events.tsx`
- Modify: `lib/storage.ts`

**Interfaces:**
- Produces guarded media list/upload/delete operations using `x-admin-token`.
- Produces public previous-event listing with bundled-image fallback.

- [ ] Add smoke assertions for admin guarding, document input, and dynamic previous-event loading.
- [ ] Run `npm run test:data` and confirm failure.
- [ ] Implement guarded route and admin token gate, including documents.
- [ ] Remove the media link from public navigation and connect homepage images to public storage listing.
- [ ] Run `npm run test:data` and confirm pass.

### Task 4: Least-Privilege Supabase Migration

**Files:**
- Create: `supabase/migrations/20260709000000_secure_public_workflows.sql`

**Interfaces:**
- Anonymous contact/waitlist inserts remain allowed.
- Anonymous PII reads/updates/deletes and storage writes/deletes are denied.
- Public storage object reads remain allowed.

- [ ] Write SQL assertions in comments describing expected anon allow/deny behavior.
- [ ] Add idempotent policy replacement SQL and required grants.
- [ ] Apply the migration in project `nfvsqlehyybflbclqjzc` through SQL Editor.
- [ ] Verify allowed inserts and denied reads with the anon key.

### Task 5: Links, CTA Semantics, and Quality Gates

**Files:**
- Modify: `components/home/hero.tsx`
- Modify: `components/home/founding-partner.tsx`
- Modify: `components/footer.tsx`
- Modify: `app/contact/page.tsx`
- Modify: `app/admin/media/page.tsx`

**Interfaces:**
- Partner CTAs route to `/contact` with partner intent.
- Placeholder social/legal links are removed or rendered as non-links until real URLs exist.

- [ ] Add smoke assertions preventing `href="#"` and partner buttons opening waitlist.
- [ ] Run `npm run test:data` and confirm failure.
- [ ] Correct CTA destinations, placeholder links, and JSX lint errors.
- [ ] Run `npm run test:data`, `npm run typecheck`, `npm run lint`, and `npm run build`.
- [ ] Start the preview with real environment values and verify all routes and persisted test submissions.
