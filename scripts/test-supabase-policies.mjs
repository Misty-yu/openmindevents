import assert from 'assert';
import { readFileSync } from 'fs';

const schema = readFileSync(
  new URL('../supabase/migrations/20260606004138_create_conference_schema.sql', import.meta.url),
  'utf8',
);
const storage = readFileSync(
  new URL('../supabase/migrations/20260606005542_create_storage_buckets.sql', import.meta.url),
  'utf8',
);

for (const table of ['event_registrations', 'contact_submissions']) {
  assert.match(
    schema,
    new RegExp(`CREATE POLICY "[^"]+_insert" ON ${table} FOR INSERT\\s+TO anon, authenticated WITH CHECK \\(true\\);`),
    `${table} must allow anonymous form submissions`,
  );
  for (const operation of ['SELECT', 'UPDATE', 'DELETE']) {
    assert.doesNotMatch(
      schema,
      new RegExp(`CREATE POLICY[\\s\\S]*?ON ${table} FOR ${operation}\\s+TO anon`),
      `${table} must not grant anonymous ${operation}`,
    );
  }
}

for (const table of ['speakers', 'sponsors']) {
  assert.match(
    schema,
    new RegExp(`CREATE POLICY "[^"]+_select" ON ${table} FOR SELECT\\s+TO anon, authenticated USING \\(true\\);`),
    `${table} must remain publicly readable`,
  );
  for (const operation of ['INSERT', 'UPDATE', 'DELETE']) {
    assert.doesNotMatch(
      schema,
      new RegExp(`CREATE POLICY[\\s\\S]*?ON ${table} FOR ${operation}\\s+TO anon`),
      `${table} must not grant anonymous ${operation}`,
    );
  }
}

for (const operation of ['INSERT', 'UPDATE', 'DELETE']) {
  assert.doesNotMatch(
    storage,
    new RegExp(`FOR ${operation} TO public`),
    `storage must not grant public ${operation}`,
  );
}

assert.match(storage, /FOR SELECT TO public/g, 'storage buckets must remain publicly readable');

console.log('Supabase policy checks passed');
