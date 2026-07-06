// Database types for OpenMind Forum

// Storage bucket types
export type StorageBucket = 'speakers-photos' | 'sponsor-logos' | 'event-images' | 'documents';

export interface UploadResult {
  path: string;
  publicUrl: string;
  fullPath: string;
}

export interface FileUpload {
  file: File;
  bucket: StorageBucket;
  path?: string;
}

// Database types
export interface Speaker {
  id: string;
  name: string;
  title?: string;
  company?: string;
  bio?: string;
  photo_url?: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Sponsor {
  id: string;
  name: string;
  tier?: string;
  logo_url?: string;
  website_url?: string;
  description?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface EventRegistration {
  id: string;
  email: string;
  full_name: string;
  company?: string;
  job_title?: string;
  phone?: string;
  status: 'registered' | 'waitlist' | 'cancelled';
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: string;
  email: string;
  full_name: string;
  company?: string;
  subject?: string;
  message: string;
  phone?: string;
  status: 'new' | 'reviewed' | 'responded';
  created_at: string;
  updated_at: string;
}
