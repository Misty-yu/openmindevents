# Storage Buckets Quick Reference

## ✅ Storage Created

Your Supabase project now has **4 public storage buckets** ready to use:

| Bucket | Purpose | Max Size | File Types |
|--------|---------|----------|-----------|
| `speakers-photos` | Speaker profile photos | 5MB | JPG, PNG, WebP, GIF |
| `sponsor-logos` | Company logos | 2MB | JPG, PNG, WebP, SVG |
| `event-images` | Event photos & banners | 10MB | JPG, PNG, WebP, GIF |
| `documents` | PDFs & presentations | 50MB | PDF, PPT, DOC, XLS |

## 🚀 Quick Upload Example

```typescript
import { uploadFile, uploadSpeakerPhoto, uploadSponsorLogo } from '@/lib/storage';

// Upload any file to any bucket
const result = await uploadFile(file, 'event-images');
console.log(result.publicUrl);

// Upload speaker photo (auto-named)
const photoUrl = await uploadSpeakerPhoto(file);

// Upload sponsor logo (auto-named)
const logoUrl = await uploadSponsorLogo(file);
```

## 📦 Integrated Database Functions

```typescript
import { createSpeakerWithPhoto, createSponsorWithLogo } from '@/lib/db';

// Create speaker and upload photo in one call
const speaker = await createSpeakerWithPhoto(
  {
    name: 'Jane Doe',
    title: 'CEO',
    company: 'Acme Corp',
    bio: 'Expert in workforce transformation...',
    is_featured: true,
  },
  photoFile // optional File
);
console.log(speaker.photo_url); // Auto-populated

// Create sponsor and upload logo in one call
const sponsor = await createSponsorWithLogo(
  {
    name: 'AWS',
    tier: 'platinum',
    website_url: 'https://aws.amazon.com',
    description: 'Cloud partner',
    is_active: true,
  },
  logoFile // optional File
);
console.log(sponsor.logo_url); // Auto-populated
```

## 🔗 Public URLs

All uploaded files are immediately accessible:

```typescript
// Get public URL
const url = getPublicUrl('speakers-photos', 'path/to/photo.jpg');
// https://bhnocohqxbqirxbzitlu.supabase.co/storage/v1/object/public/speakers-photos/...
```

## 📋 Available Functions

**From `/lib/storage.ts`:**
- `uploadFile(file, bucket, path?)` — Upload single file
- `uploadFiles(files, bucket, basePath?)` — Upload multiple files
- `uploadSpeakerPhoto(file, speakerId?)` — Upload speaker photo
- `uploadSponsorLogo(file, sponsorId?)` — Upload sponsor logo
- `uploadEventImage(file, eventId?)` — Upload event image
- `uploadDocument(file, category?)` — Upload document
- `downloadFile(bucket, path)` — Download file as Blob
- `deleteFile(bucket, path)` — Delete file
- `listFiles(bucket, folder?)` — List files in bucket
- `getPublicUrl(bucket, path)` — Get public URL

**From `/lib/db.ts`:**
- `createSpeakerWithPhoto(speaker, photoFile?)` — Create speaker + photo
- `createSponsorWithLogo(sponsor, logoFile?)` — Create sponsor + logo

## 🎯 Common Use Cases

### Upload Speaker Photo
```typescript
const speaker = await createSpeakerWithPhoto(
  { name: 'Speaker Name', title: 'CEO', company: 'Corp', is_featured: false },
  photoFile
);
```

### Upload Sponsor Logo
```typescript
const sponsor = await createSponsorWithLogo(
  { name: 'Sponsor', tier: 'gold', is_active: true },
  logoFile
);
```

### Upload Event Gallery Image
```typescript
const url = await uploadEventImage(file, '2025-summit');
// Stored at: event-images/2025-summit/{timestamp}-{random}.jpg
```

### Upload Conference PDF
```typescript
const url = await uploadDocument(pdfFile, 'presentations');
// Stored at: documents/presentations/{timestamp}-{random}.pdf
```

## 🔍 File Validation

All uploads are automatically validated:
- ✅ File size (bucket-specific limits)
- ✅ File type (bucket-specific MIME types)
- ✅ Unique filename (auto-generated to prevent collisions)
- ✅ Cache headers (1 hour for performance)

## 📁 Folder Structure

```
speakers-photos/
  └── {speaker-id}/profile.jpg

sponsor-logos/
  └── {sponsor-id}/logo.png

event-images/
  └── {year}/{event}/image.jpg

documents/
  └── {category}/file.pdf
```

## 🌐 CDN Info

All files served via Supabase CDN:
- 🌍 Global edge locations
- ⚡ Automatic caching
- 🚀 Fast worldwide delivery
- 📦 Public URLs (no auth needed)

## 📖 Full Documentation

See `STORAGE_GUIDE.md` for:
- Complete API reference
- React component examples
- Error handling patterns
- Image transformation options
- Security & policy details

## 🛠️ Files Created

- `/lib/types.ts` — Added `StorageBucket` and `UploadResult` types
- `/lib/storage.ts` — All storage functions (upload, download, delete, list)
- `/lib/db.ts` — Added `createSpeakerWithPhoto()`, `createSponsorWithLogo()`
- `STORAGE_GUIDE.md` — Complete documentation

---

**Status**: ✅ Ready to use
**Build**: ✅ Passing
**Access**: Public (no auth required)
**CDN**: Enabled (global delivery)
