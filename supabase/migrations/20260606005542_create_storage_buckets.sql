/*
# Create Storage Buckets for File Management

## Overview
This migration creates Supabase Storage buckets for managing conference-related files (speaker photos, sponsor logos, event images, and documents).

## 1. New Storage Buckets

### speakers-photos
- Purpose: Store speaker profile photos
- Public: Yes (images need to be publicly accessible)
- Max Size: 5MB per file
- Allowed Types: jpg, jpeg, png, webp, gif

### sponsor-logos
- Purpose: Store sponsor company logos
- Public: Yes (logos displayed on website)
- Max Size: 2MB per file
- Allowed Types: jpg, jpeg, png, webp, svg

### event-images
- Purpose: Store event photos, banners, and promotional images
- Public: Yes (displayed on homepage and galleries)
- Max Size: 10MB per file
- Allowed Types: jpg, jpeg, png, webp, gif

### documents
- Purpose: Store PDFs, presentations, and downloadable resources
- Public: Yes (attendees need to download)
- Max Size: 50MB per file
- Allowed Types: pdf, ppt, pptx, doc, docx, xlsx

## 2. Security Policies

All buckets have:
- **Public read access** — Anyone can view/download files
- **Authenticated write access** — Only signed-in users can upload, update, or delete files
- File type validation via PostgreSQL policies
- File size validation at bucket level

## 3. Folder Structure Convention

Recommended folder organization:
- `speakers-photos/` — `{speaker-id}/profile.jpg`
- `sponsor-logos/` — `{sponsor-id}/logo.png`
- `event-images/` — `{year}/{event-name}/banner.jpg`
- `documents/` — `{type}/{filename}.pdf`

## 4. Important Notes

1. Buckets are created as public for simplicity (no auth required)
2. File type restrictions are enforced via storage policies
3. Max file sizes prevent abuse
4. CDN caching enabled automatically for public buckets
5. Files are served via Supabase CDN with global edge locations
*/

-- Insert storage buckets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  (
    'speakers-photos',
    'speakers-photos',
    true,
    5242880, -- 5MB
    ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
  ),
  (
    'sponsor-logos',
    'sponsor-logos',
    true,
    2097152, -- 2MB
    ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg+xml']
  ),
  (
    'event-images',
    'event-images',
    true,
    10485760, -- 10MB
    ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
  ),
  (
    'documents',
    'documents',
    true,
    52428800, -- 50MB
    ARRAY[
      'application/pdf',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ]
  )
ON CONFLICT (id) DO NOTHING;

-- Storage policies for speakers-photos
DROP POLICY IF EXISTS "speakers_photos_select" ON storage.objects;
CREATE POLICY "speakers_photos_select" ON storage.objects
FOR SELECT TO public
USING (bucket_id = 'speakers-photos');

DROP POLICY IF EXISTS "speakers_photos_insert" ON storage.objects;
CREATE POLICY "speakers_photos_insert" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'speakers-photos');

DROP POLICY IF EXISTS "speakers_photos_update" ON storage.objects;
CREATE POLICY "speakers_photos_update" ON storage.objects
FOR UPDATE TO authenticated
USING (bucket_id = 'speakers-photos')
WITH CHECK (bucket_id = 'speakers-photos');

DROP POLICY IF EXISTS "speakers_photos_delete" ON storage.objects;
CREATE POLICY "speakers_photos_delete" ON storage.objects
FOR DELETE TO authenticated
USING (bucket_id = 'speakers-photos');

-- Storage policies for sponsor-logos
DROP POLICY IF EXISTS "sponsor_logos_select" ON storage.objects;
CREATE POLICY "sponsor_logos_select" ON storage.objects
FOR SELECT TO public
USING (bucket_id = 'sponsor-logos');

DROP POLICY IF EXISTS "sponsor_logos_insert" ON storage.objects;
CREATE POLICY "sponsor_logos_insert" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'sponsor-logos');

DROP POLICY IF EXISTS "sponsor_logos_update" ON storage.objects;
CREATE POLICY "sponsor_logos_update" ON storage.objects
FOR UPDATE TO authenticated
USING (bucket_id = 'sponsor-logos')
WITH CHECK (bucket_id = 'sponsor-logos');

DROP POLICY IF EXISTS "sponsor_logos_delete" ON storage.objects;
CREATE POLICY "sponsor_logos_delete" ON storage.objects
FOR DELETE TO authenticated
USING (bucket_id = 'sponsor-logos');

-- Storage policies for event-images
DROP POLICY IF EXISTS "event_images_select" ON storage.objects;
CREATE POLICY "event_images_select" ON storage.objects
FOR SELECT TO public
USING (bucket_id = 'event-images');

DROP POLICY IF EXISTS "event_images_insert" ON storage.objects;
CREATE POLICY "event_images_insert" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'event-images');

DROP POLICY IF EXISTS "event_images_update" ON storage.objects;
CREATE POLICY "event_images_update" ON storage.objects
FOR UPDATE TO authenticated
USING (bucket_id = 'event-images')
WITH CHECK (bucket_id = 'event-images');

DROP POLICY IF EXISTS "event_images_delete" ON storage.objects;
CREATE POLICY "event_images_delete" ON storage.objects
FOR DELETE TO authenticated
USING (bucket_id = 'event-images');

-- Storage policies for documents
DROP POLICY IF EXISTS "documents_select" ON storage.objects;
CREATE POLICY "documents_select" ON storage.objects
FOR SELECT TO public
USING (bucket_id = 'documents');

DROP POLICY IF EXISTS "documents_insert" ON storage.objects;
CREATE POLICY "documents_insert" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'documents');

DROP POLICY IF EXISTS "documents_update" ON storage.objects;
CREATE POLICY "documents_update" ON storage.objects
FOR UPDATE TO authenticated
USING (bucket_id = 'documents')
WITH CHECK (bucket_id = 'documents');

DROP POLICY IF EXISTS "documents_delete" ON storage.objects;
CREATE POLICY "documents_delete" ON storage.objects
FOR DELETE TO authenticated
USING (bucket_id = 'documents');
