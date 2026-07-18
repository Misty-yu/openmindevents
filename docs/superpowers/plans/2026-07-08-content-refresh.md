# OpenMindEvents Content Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the homepage imagery and agenda from the approved Notion source, remove the complete Speakers surface, and provide a verified local preview without committing or deploying.

**Architecture:** Store all supplied image assets under `public/images` and reference them with stable root-relative URLs. Keep the existing Agenda presentation component and replace only its data. Remove Speakers routes and links at their composition points so no public entry remains.

**Tech Stack:** Next.js 13 App Router, React 18, TypeScript, Tailwind CSS.

## Global Constraints

- Do not create a Git commit until the user approves the local preview.
- Do not deploy or modify online production state.
- Store the supplied hero and past-event images in `public/images`.
- Preserve the current Agenda layout; change only agenda text and times.
- Remove the homepage Speakers section, `/speakers` route, navigation link, footer link, and unused homepage Speakers component.

---

### Task 1: Import approved Notion assets

**Files:**
- Create: `public/images/openmind-home-hero-ai-collaboration-1600x900.png`
- Create: `public/images/past-events/openmind-past-event-01.png`
- Create: `public/images/past-events/openmind-past-event-02.png`
- Create: `public/images/past-events/openmind-past-event-03.png`
- Create: `public/images/past-events/openmind-past-event-04.png`
- Create: `public/images/past-events/openmind-past-event-05.png`
- Create: `public/images/past-events/openmind-past-event-06.png`
- Temporary source only: `/tmp/0703议程_AI组织架构(2).docx`

- [ ] Download the hero image, six replacement history images, and the Agenda Word attachment from the approved Notion page.
- [ ] Inspect file signatures and image dimensions with `file` and `sips -g pixelWidth -g pixelHeight`.
- [ ] Extract Word text with `unzip -p '/tmp/0703议程_AI组织架构(2).docx' word/document.xml` and convert paragraph boundaries into readable text for transcription.

### Task 2: Replace homepage imagery

**Files:**
- Modify: `components/home/hero.tsx`
- Modify: `components/home/past-events.tsx`

- [ ] Change the Hero `backgroundImage` URL to `/images/openmind-home-hero-ai-collaboration-1600x900.png`.
- [ ] Configure `PastEvents` with a fixed `EventImage[]` containing `/images/past-events/openmind-past-event-01.png` through `-06.png`.
- [ ] Keep the homepage gallery local-only with bundled images and a loading state.
- [ ] Run `npm run typecheck`; expect exit code 0.

### Task 3: Replace Agenda data

**Files:**
- Modify: `app/agenda/page.tsx`

- [ ] Transcribe the Word attachment's agenda rows into the existing `days[].sessions[]` structure using the exact supplied times and wording.
- [ ] Preserve the Hero, notice, day headings, session cards, and `typeColors` presentation.
- [ ] Run `npm run typecheck`; expect exit code 0.

### Task 4: Remove Speakers completely

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/navigation.tsx`
- Modify: `components/footer.tsx`
- Delete: `components/home/speakers-preview.tsx`
- Delete: `app/speakers/page.tsx`

- [ ] Remove the `SpeakersPreview` import and render from the homepage.
- [ ] Remove Speakers entries from the primary navigation and footer.
- [ ] Delete the homepage Speakers component and standalone route.
- [ ] Run `rg -n "Speakers|/speakers" app components`; expect no public Speakers UI references.
- [ ] Run `npm run typecheck`; expect exit code 0.

### Task 5: Verify and launch local preview

**Files:**
- No source changes expected.

- [ ] Run `npm run build`; expect a successful production build.
- [ ] Run `npm run dev` and keep the process active.
- [ ] Verify `/` visually at desktop and mobile widths: local Hero image, six history images, and no Speakers section or navigation entry.
- [ ] Verify `/agenda` visually: supplied times and text appear in the existing layout.
- [ ] Verify `/speakers` returns 404.
- [ ] Share the local preview URL with the user and wait for approval before any commit or deployment.
