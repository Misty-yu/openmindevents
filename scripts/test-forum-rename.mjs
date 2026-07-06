import assert from 'assert';
import { existsSync, readdirSync, readFileSync, statSync } from 'fs';
import { join, relative } from 'path';

const root = new URL('..', import.meta.url).pathname;
const scanRoots = ['app', 'components', 'lib', 'public'];
const legacyRoute = 'app/summit/page.tsx';
const findings = [];

function scan(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) {
      scan(path);
      continue;
    }
    const repoPath = relative(root, path);
    if (repoPath === legacyRoute) continue;
    const content = readFileSync(path, 'utf8');
    if (/summit/i.test(repoPath) || /summit/i.test(content)) findings.push(repoPath);
  }
}

for (const directory of scanRoots) scan(join(root, directory));

assert.deepStrictEqual(findings, [], `Summit branding remains in: ${findings.join(', ')}`);
assert.ok(existsSync(join(root, 'app/forum/page.tsx')), 'canonical /forum page must exist');

const redirect = readFileSync(join(root, legacyRoute), 'utf8');
assert.match(redirect, /permanentRedirect\(['"]\/forum['"]\)/);

console.log('Forum rename checks passed');
