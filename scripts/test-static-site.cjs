const assert = require('assert').strict;
const { readdir, readFile } = require('fs').promises;
const path = require('path');

const root = path.resolve(__dirname, '..');
const read = (relativePath) => readFile(path.join(root, relativePath), 'utf8');

async function sourceFiles(relativeDirectory) {
  const directory = path.join(root, relativeDirectory);
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) files.push(...(await sourceFiles(relativePath)));
    if (entry.isFile() && /\.(?:ts|tsx|js|mjs)$/.test(entry.name)) files.push(relativePath);
  }

  return files;
}

async function main() {
  const removedFiles = [
    'lib/supabase.ts',
    'lib/db.ts',
    'lib/storage.ts',
    'lib/submissions.ts',
    'lib/types.ts',
    'app/api/contact/route.ts',
    'app/api/waitlist/route.ts',
    'app/api/media/route.ts',
    'app/admin/media/page.tsx',
    'components/waiting-list-modal.tsx',
    'components/home/contact-form.tsx',
    'components/image-upload.tsx',
    'components/image-gallery.tsx',
    'components/sponsor-form.tsx',
  ];

  for (const file of removedFiles) {
    await assert.rejects(() => read(file), { code: 'ENOENT' }, `${file} must be removed`);
  }

  const packageJson = JSON.parse(await read('package.json'));
  assert.equal(packageJson.dependencies?.['@supabase/supabase-js'], undefined);
  assert.equal(packageJson.scripts?.['test:data'], undefined);

  const liveFiles = (
    await Promise.all(['app', 'components', 'lib'].map(sourceFiles))
  ).flat();
  const liveSource = (await Promise.all(liveFiles.map(read))).join('\n');

  assert.doesNotMatch(liveSource, /supabase/i);
  assert.doesNotMatch(liveSource, /event_registrations|contact_submissions/);
  assert.doesNotMatch(liveSource, /\/api\/(?:waitlist|contact|media)/);
  assert.doesNotMatch(liveSource, /WaitingListModal|Join Waiting List|Register Interest/);
  assert.doesNotMatch(liveSource, /force-dynamic/);

  const previousEvents = await read('components/home/past-events.tsx');
  assert.doesNotMatch(previousEvents, /fetch\(|publicUrl|remoteImages/);
  for (let index = 1; index <= 8; index += 1) {
    const suffix = String(index).padStart(2, '0');
    assert.match(previousEvents, new RegExp(`/images/past-events/openmind-past-event-${suffix}\\.png`));
  }

  const navigation = await read('components/navigation.tsx');
  for (const href of ['/', '/summit', '/agenda']) {
    assert.match(navigation, new RegExp(`href: '${href.replace('/', '\\/')}'`));
  }
  assert.match(navigation, /Toggle menu/);

  console.log('static site contracts: ok');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
