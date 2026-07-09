import { supabase } from './supabase';
import type { StorageBucket, UploadResult } from './types';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';

// Bucket configuration
export const BUCKET_CONFIG: Record<StorageBucket, {
  maxSize: number;
  allowedTypes: string[];
  public: boolean;
}> = {
  'sponsor-logos': {
    maxSize: 2 * 1024 * 1024, // 2MB
    allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg+xml'],
    public: true,
  },
  'event-images': {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'],
    public: true,
  },
  'documents': {
    maxSize: 50 * 1024 * 1024, // 50MB
    allowedTypes: [
      'application/pdf',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    public: true,
  },
};

/**
 * Validate file before upload
 */
function validateFile(file: File, bucket: StorageBucket): { valid: boolean; error?: string } {
  const config = BUCKET_CONFIG[bucket];

  // Check file size
  if (file.size > config.maxSize) {
    const maxSizeMB = (config.maxSize / (1024 * 1024)).toFixed(0);
    return {
      valid: false,
      error: `File size exceeds ${maxSizeMB}MB limit`,
    };
  }

  // Check file type
  const allowedTypes = config.allowedTypes;
  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: `File type ${file.type} not allowed for ${bucket}`,
    };
  }

  return { valid: true };
}

/**
 * Generate unique filename
 */
function generateUniqueFilename(file: File): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(7);
  const extension = file.name.split('.').pop() || 'jpg';
  return `${timestamp}-${random}.${extension}`;
}

/**
 * Upload file to storage bucket
 */
export async function uploadFile(
  file: File,
  bucket: StorageBucket,
  customPath?: string
): Promise<UploadResult> {
  // Validate file
  const validation = validateFile(file, bucket);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  // Generate path
  const filename = generateUniqueFilename(file);
  const path = customPath || filename;

  // Upload to Supabase Storage
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    throw new Error(`Upload failed: ${error.message}`);
  }

  // Get public URL
  const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(data.path);

  return {
    path: data.path,
    publicUrl: urlData.publicUrl,
    fullPath: `${bucket}/${data.path}`,
  };
}

/**
 * Upload multiple files to a bucket
 */
export async function uploadFiles(
  files: File[],
  bucket: StorageBucket,
  basePath?: string
): Promise<UploadResult[]> {
  const results: UploadResult[] = [];

  for (const file of files) {
    const path = basePath ? `${basePath}/${generateUniqueFilename(file)}` : undefined;
    const result = await uploadFile(file, bucket, path);
    results.push(result);
  }

  return results;
}

/**
 * Get public URL for a file
 */
export function getPublicUrl(bucket: StorageBucket, path: string): string {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

/**
 * Download file from storage
 */
export async function downloadFile(bucket: StorageBucket, path: string): Promise<Blob> {
  const { data, error } = await supabase.storage.from(bucket).download(path);

  if (error) {
    throw new Error(`Download failed: ${error.message}`);
  }

  return data;
}

/**
 * Delete file from storage
 */
export async function deleteFile(bucket: StorageBucket, path: string): Promise<void> {
  const { error } = await supabase.storage.from(bucket).remove([path]);

  if (error) {
    throw new Error(`Delete failed: ${error.message}`);
  }
}

/**
 * List files in a bucket
 */
export async function listFiles(
  bucket: StorageBucket,
  folder?: string
): Promise<{ name: string; id: string; created_at: string; metadata: Record<string, any> }[]> {
  const { data, error } = await supabase.storage.from(bucket).list(folder || '');

  if (error) {
    throw new Error(`List failed: ${error.message}`);
  }

  return data || [];
}

/**
 * Upload sponsor logo
 */
export async function uploadSponsorLogo(file: File, sponsorId?: string): Promise<string> {
  const path = sponsorId ? `${sponsorId}/logo` : undefined;
  const result = await uploadFile(file, 'sponsor-logos', path);
  return result.publicUrl;
}

/**
 * Upload event image
 */
export async function uploadEventImage(file: File, eventId?: string): Promise<string> {
  const path = eventId ? `${eventId}/${generateUniqueFilename(file)}` : undefined;
  const result = await uploadFile(file, 'event-images', path);
  return result.publicUrl;
}

/**
 * Upload document
 */
export async function uploadDocument(file: File, category?: string): Promise<string> {
  const path = category ? `${category}/${generateUniqueFilename(file)}` : undefined;
  const result = await uploadFile(file, 'documents', path);
  return result.publicUrl;
}
