export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type UnknownRecord = Record<string, unknown>;

function text(input: UnknownRecord, key: string, required = false): string | undefined {
  const raw = input[key];
  const value = typeof raw === 'string' ? raw.trim() : '';
  if (required && !value) throw new Error(`${key} is required`);
  return value || undefined;
}

function email(input: UnknownRecord): string {
  const value = text(input, 'email', true)!;
  if (!EMAIL_PATTERN.test(value)) throw new Error('email is invalid');
  return value.toLowerCase();
}

export function normalizeContactSubmission(input: unknown) {
  if (!input || typeof input !== 'object') throw new Error('Invalid request body');
  const data = input as UnknownRecord;
  const interest = text(data, 'interest');
  const jobTitle = text(data, 'jobTitle');
  return {
    email: email(data),
    full_name: text(data, 'name', true)!,
    company: text(data, 'company'),
    subject: [interest, jobTitle].filter(Boolean).join(' - ') || 'Website enquiry',
    message: text(data, 'message', true)!,
    phone: text(data, 'phone'),
    status: 'new' as const,
  };
}

export function normalizeWaitlistSubmission(input: unknown) {
  if (!input || typeof input !== 'object') throw new Error('Invalid request body');
  const data = input as UnknownRecord;
  return {
    email: email(data),
    full_name: text(data, 'name', true)!,
    company: text(data, 'company'),
    job_title: text(data, 'jobTitle'),
    phone: text(data, 'phone'),
    status: 'waitlist' as const,
    notes: 'Submitted via OpenMind website',
  };
}
