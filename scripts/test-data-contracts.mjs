import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

const requiredFiles = [
  'lib/submissions.ts',
  'app/api/contact/route.ts',
  'app/api/waitlist/route.ts',
  'app/api/media/route.ts',
  'supabase/migrations/20260709000000_secure_public_workflows.sql',
];

for (const file of requiredFiles) {
  await assert.doesNotReject(() => read(file), `${file} must exist`);
}

const submissions = await read('lib/submissions.ts');
assert.match(submissions, /normalizeContactSubmission/);
assert.match(submissions, /normalizeWaitlistSubmission/);
assert.match(submissions, /EMAIL_PATTERN/);

for (const route of ['app/api/contact/route.ts', 'app/api/waitlist/route.ts']) {
  const source = await read(route);
  assert.match(source, /export async function POST/);
  assert.match(source, /NextResponse\.json/);
  assert.match(source, /supabase/);
}

for (const form of [
  'components/home/contact-form.tsx',
  'components/waiting-list-modal.tsx',
  'app/contact/page.tsx',
]) {
  const source = await read(form);
  assert.match(source, /await fetch\('/, `${form} must submit to an API`);
  assert.match(source, /setError/, `${form} must display failures`);
  assert.match(source, /setSubmitting/, `${form} must expose pending state`);
}

const mediaRoute = await read('app/api/media/route.ts');
assert.match(mediaRoute, /x-admin-token/);
assert.match(mediaRoute, /ADMIN_MEDIA_TOKEN/);
assert.match(mediaRoute, /export async function (GET|POST|DELETE)/);

const mediaPage = await read('app/admin/media/page.tsx');
assert.match(mediaPage, /type="password"/);
assert.match(mediaPage, /documents/);

const previousEvents = await read('components/home/past-events.tsx');
assert.match(previousEvents, /\/api\/media\?bucket=event-images&folder=past-events/);
assert.match(previousEvents, /eventImages/, 'bundled fallback must remain');

const navigation = await read('components/navigation.tsx');
assert.doesNotMatch(navigation, /href="\/admin\/media"/);

const hero = await read('components/home/hero.tsx');
assert.doesNotMatch(hero, /Become a Founding Partner[\s\S]{0,300}setModalOpen/);

for (const file of ['components/footer.tsx', 'app/contact/page.tsx']) {
  assert.doesNotMatch(await read(file), /href="#"/);
}

const positioningFiles = [
  'app/layout.tsx',
  'app/summit/page.tsx',
  'app/sponsors/page.tsx',
  'components/home/hero.tsx',
  'components/home/summit-overview.tsx',
  'components/home/founding-partner.tsx',
  'components/home/sponsors-preview.tsx',
  'components/navigation.tsx',
  'components/footer.tsx',
];
const positioningCopy = (await Promise.all(positioningFiles.map(read))).join('\n');
assert.doesNotMatch(positioningCopy, /Summit 2026|The Summit|300\+|500\+|premier global/i);
assert.match(positioningCopy, /Forum 2026/);
assert.match(positioningCopy, /50 Senior (Business (?:&|&amp;) HR|HR (?:&|&amp;) Business) Leaders/);

const migration = await read('supabase/migrations/20260709000000_secure_public_workflows.sql');
assert.match(migration, /FOR INSERT[\s\S]*contact_submissions/i);
assert.doesNotMatch(migration, /contact_submissions[\s\S]{0,120}FOR SELECT[\s\S]{0,80}TO anon/i);
assert.match(migration, /storage\.objects/);

console.log('data workflow contracts: ok');
