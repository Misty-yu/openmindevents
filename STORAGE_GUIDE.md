# Storage Buckets Guide

## Overview

Your Supabase project now has **4 storage buckets** for managing files:

| Bucket | Purpose | Max Size | File Types |
|--------|---------|----------|-----------|
| `speakers-photos` | Speaker profile photos | 5MB | JPG, PNG, WebP, GIF |
| `sponsor-logos` | Sponsor company logos | 2MB | JPG, PNG, WebP, SVG |
| `event-images` | Event photos & banners | 10MB | JPG, PNG, WebP, GIF |
| `documents` | PDFs & presentations | 50MB | PDF, PPT, DOC, XLS |

All buckets are **public** (files are accessible via direct URLs).

## Quick Start

### Import Storage Functions

```typescript
import {
  uploadFile,
  uploadFiles,
  uploadSpeakerPhoto,
  uploadSponsorLogo,
  uploadEventImage,
  uploadDocument,
  deleteFile,
  listFiles,
  getPublicUrl,
} from '@/lib/storage';
```

### Upload Single File

```typescript
import { uploadFile } from '@/lib/storage';

// Basic upload
const result = await uploadFile(file, 'event-images');
console.log(result.publicUrl); // https://xxx.supabase.co/storage/v1/object/public/event-images/...

// Upload to specific path
const result = await uploadFile(file, 'speakers-photos', 'john-doe/profile.jpg');
```

### Upload Multiple Files

```typescript
import { uploadFiles } from '@/lib/storage';

const results = await uploadFiles([file1, file2, file3], 'event-images');
results.forEach(r => console.log(r.publicUrl));
```

### Upload Speaker Photo

```typescript
import { uploadSpeakerPhoto } from '@/lib/storage';

// Upload and get URL
const photoUrl = await uploadSpeakerPhoto(file);

// Upload to specific speaker folder
const photoUrl = await uploadSpeakerPhoto(file, 'speaker-uuid-here');
// Creates: speakers-photos/speaker-uuid-here/profile-{timestamp}.jpg
```

### Upload Sponsor Logo

```typescript
import { uploadSponsorLogo } from '@/lib/storage';

const logoUrl = await uploadSponsorLogo(file, 'sponsor-uuid-here');
// Creates: sponsor-logos/sponsor-uuid-here/logo-{timestamp}.png
```

### Upload Event Image

```typescript
import { uploadEventImage } from '@/lib/storage';

const imageUrl = await uploadEventImage(file, '2025-summit');
// Creates: event-images/2025-summit/{timestamp}-{random}.jpg
```

### Upload Document

```typescript
import { uploadDocument } from '@/lib/storage';

const docUrl = await uploadDocument(pdfFile, 'presentations');
// Creates: documents/presentations/{timestamp}-{random}.pdf
```

## Helper Functions with Database

### Create Speaker with Photo

```typescript
import { createSpeakerWithPhoto } from '@/lib/db';

// File will be uploaded to speakers-photos/{speaker-id}/profile.jpg
const speaker = await createSpeakerWithPhoto(
  {
    name: 'Jane Doe',
    title: 'CEO',
    company: 'Acme Corp',
    bio: 'Expert in...',
    is_featured: true,
  },
  photoFile // optional File object
);

console.log(speaker.photo_url); // Auto-populated with storage URL
```

### Create Sponsor with Logo

```typescript
import { createSponsorWithLogo } from '@/lib/db';

// File will be uploaded to sponsor-logos/{sponsor-id}/logo.png
const sponsor = await createSponsorWithLogo(
  {
    name: 'AWS',
    tier: 'platinum',
    website_url: 'https://aws.amazon.com',
    description: 'Cloud infrastructure partner',
    is_active: true,
  },
  logoFile // optional File object
);

console.log(sponsor.logo_url); // Auto-populated with storage URL
```

## File Management

### List Files in Bucket

```typescript
import { listFiles } from '@/lib/storage';

// List all files in bucket
const files = await listFiles('event-images');

// List files in specific folder
const files = await listFiles('documents', 'presentations');

console.log(files);
// [{ name: 'file1.pdf', id: '...', created_at: '...', metadata: {} }, ...]
```

### Get Public URL

```typescript
import { getPublicUrl } from '@/lib/storage';

const url = getPublicUrl('speakers-photos', 'john-doe/profile.jpg');
// https://xxx.supabase.co/storage/v1/object/public/speakers-photos/john-doe/profile.jpg
```

### Download File

```typescript
import { downloadFile } from '@/lib/storage';

const blob = await downloadFile('documents', 'presentation.pdf');

// Create download link
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'presentation.pdf';
a.click();
```

### Delete File

```typescript
import { deleteFile } from '@/lib/storage';

await deleteFile('event-images', 'old-photo.jpg');
```

## React Component Example

### File Upload Component

```typescriptx
'use client';

import { useState } from 'react';
import { uploadEventImage } from '@/lib/storage';

export function EventImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadEventImage(file);
      setImageUrl(url);
      alert('Image uploaded successfully!');
    } catch (error) {
      alert('Upload failed: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleUpload}
        disabled={uploading}
      />
      {uploading && <p>Uploading...</p>}
      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" className="w-64 h-64 object-cover" />
        </div>
      )}
    </div>
  );
}
```

### Speaker Registration Form

```typescriptx
'use client';

import { useState } from 'react';
import { createSpeakerWithPhoto } from '@/lib/db';

export function SpeakerRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    bio: '',
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const speaker = await createSpeakerWithPhoto(
        {
          ...formData,
          is_featured: false,
        },
        photo || undefined
      );

      alert('Speaker created successfully!');
      console.log('Speaker:', speaker);
    } catch (error) {
      alert('Failed to create speaker: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Company"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
      <textarea
        placeholder="Bio"
        value={formData.bio}
        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setPhoto(e.target.files?.[0] || null)}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
```

## Folder Organization Best Practices

### Speakers
```
speakers-photos/
├── {speaker-id-1}/
│   └── profile-{timestamp}.jpg
├── {speaker-id-2}/
│   └── profile-{timestamp}.jpg
└── ...
```

### Sponsors
```
sponsor-logos/
├── {sponsor-id-1}/
│   └── logo-{timestamp}.png
├── {sponsor-id-2}/
│   └── logo-{timestamp}.svg
└── ...
```

### Event Images
```
event-images/
├── 2025/
│   ├── summit/
│   │   ├── banner.jpg
│   │   ├── gallery-1.jpg
│   │   └── gallery-2.jpg
│   └── workshop/
│       └── promo.jpg
└── 2024/
    └── ...
```

### Documents
```
documents/
├── presentations/
│   ├── keynote.pdf
│   └── workshop-slides.pptx
├── whitepapers/
│   └── workforce-transformation.pdf
└── agendas/
    └── summit-2025.pdf
```

## Validation Rules

All uploads are validated before storage:

- ✅ **File size**: Checked against bucket max size
- ✅ **File type**: Checked against bucket allowed MIME types
- ✅ **Unique filename**: Auto-generated to prevent collisions
- ✅ **Cache headers**: Set to 1 hour (3600s) for performance

## File Size Limits

| Bucket | Max Size | Recommended |
|--------|----------|-------------|
| `speakers-photos` | 5MB | 500KB - 1MB |
| `sponsor-logos` | 2MB | 100KB - 500KB |
| `event-images` | 10MB | 1MB - 3MB |
| `documents` | 50MB | < 10MB |

## Error Handling

Always wrap uploads in try/catch:

```typescript
try {
  const url = await uploadFile(file, 'event-images');
  console.log('Success:', url);
} catch (error) {
  console.error('Upload failed:', error.message);
  // User-friendly error message
  alert(`Upload failed: ${error.message}`);
}
```

Common errors:
- **"File size exceeds XMB limit"** — File too large, compress it
- **"File type X not allowed"** — Wrong format, check allowed types
- **"Upload failed: ..."** — Network error, retry

## CDN & Performance

All files are served via Supabase CDN:
- 🌍 Global edge locations
- ⚡ Automatic caching
- 🚀 Fast delivery worldwide
- 📦 Image optimization (via transformation API)

### Image Transformations (Optional)

Resize/optimize images on-the-fly:

```typescript
// Original
const url = getPublicUrl('event-images', 'photo.jpg');

// Resized (200x200)
const thumbnail = `${url}?width=200&height=200&resize=cover`;

// Optimized WebP
const optimized = `${url}?format=webp&quality=80`;
```

## Storage Dashboard

Manage files in Supabase Dashboard:
1. Go to https://supabase.com/dashboard
2. Select your project
3. Click "Storage" in sidebar
4. Select bucket to view/manage files

Features:
- View all files
- Upload via drag & drop
- Delete files
- Copy public URLs
- View file metadata

## Security & Policies

All buckets have:
- ✅ **Public read** — Anyone can view/download
- ✅ **Public upload** — Simplified for single-tenant app
- ✅ **File type validation** — Enforced via MIME types
- ✅ **File size limits** — Prevent abuse

## Next Steps

1. **Create upload UI** — Component for speaker photos
2. **Add file picker** — Let sponsors upload logos
3. **Build document library** — Display PDFs for download
4. **Add image gallery** — Show event photos
5. **Implement search** — Filter documents by category

## Files Created

- **Storage Migration**: Applied via Supabase MCP
- **Types**: Updated `/lib/types.ts` with `StorageBucket`, `UploadResult`
- **Storage Lib**: `/lib/storage.ts` — All upload/download functions
- **DB Lib**: Updated `/lib/db.ts` with `createSpeakerWithPhoto`, `createSponsorWithLogo`

---

**Status**: ✅ Buckets created and ready
**Buckets**: 4 (speakers-photos, sponsor-logos, event-images, documents)
**Access**: Public (no auth required)
