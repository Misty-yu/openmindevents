# 图片上传使用指南

## 功能概览

您的项目现在包含完整的图片上传和管理功能：

✅ **媒体库管理页面** — `/admin/media` 可视化上传和管理所有图片
✅ **图片上传组件** — `<ImageUpload />` 可集成到任何表单
✅ **图片库组件** — `<ImageGallery />` 显示和管理已上传图片
✅ **演讲者表单** — `<SpeakerForm />` 创建演讲者并上传照片
✅ **赞助商表单** — `<SponsorForm />` 创建赞助商并上传Logo

---

## 方法一：使用媒体库管理页面（推荐）

访问 `/admin/media` 页面，您可以：

### 1. 上传图片
- 选择对应标签页（演讲者照片/赞助商Logo/活动图片）
- 点击虚线框选择图片文件
- 图片自动上传并显示预览

### 2. 管理图片
- 鼠标悬停在图片上查看操作按钮
- **选择** — 选中图片，URL显示在页面顶部
- **下载** — 在新标签页打开原图
- **删除** — 删除图片

### 3. 复制URL
- 选中的图片URL会显示在页面顶部
- 复制URL用于其他地方（如数据库记录）

---

## 方法二：使用上传组件

### 基础上传

```tsx
'use client';

import { ImageUpload } from '@/components/image-upload';

export function MyForm() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <ImageUpload
      bucket="speakers-photos"        // 存储桶名称
      onUpload={(url) => setImageUrl(url)}  // 上传完成回调
      folder="speakers"                // 文件夹（可选）
      accept="image/jpeg,image/png"    // 允许的文件类型（可选）
    />
  );
}
```

### 显示当前图片并允许更换

```tsx
<ImageUpload
  bucket="event-images"
  currentUrl={existingImageUrl}  // 当前图片URL
  onUpload={(url) => updateImageUrl(url)}
/>
```

### 集成到表单

```tsx
'use client';

import { useState } from 'react';
import { ImageUpload } from '@/components/image-upload';
import { Button } from '@/components/ui/button';

export function EventForm() {
  const [bannerUrl, setBannerUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 使用 bannerUrl 保存到数据库
    await createEvent({ banner: bannerUrl, ... });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>活动横幅图</label>
        <ImageUpload
          bucket="event-images"
          onUpload={setBannerUrl}
        />
      </div>
      <Button type="submit">保存活动</Button>
    </form>
  );
}
```

---

## 方法三：使用编程式API

### 直接上传

```typescript
import { uploadSpeakerPhoto, uploadSponsorLogo, uploadEventImage } from '@/lib/storage';

// 上传演讲者照片
const speakerPhotoUrl = await uploadSpeakerPhoto(file);

// 上传赞助商Logo
const sponsorLogoUrl = await uploadSponsorLogo(file);

// 上传活动图片
const eventImageUrl = await uploadEventImage(file, '2025-summit');
```

### 上传到指定路径

```typescript
import { uploadFile } from '@/lib/storage';

// 上传到特定文件夹
const result = await uploadFile(file, 'event-images', '2025/summit/banner.jpg');
console.log(result.publicUrl);
```

### 批量上传

```typescript
import { uploadFiles } from '@/lib/storage';

const files = [file1, file2, file3];
const results = await uploadFiles(files, 'event-images');

results.forEach(r => {
  console.log('Uploaded:', r.publicUrl);
});
```

---

## 组件示例

### 图片库展示

```tsx
'use client';

import { ImageGallery } from '@/components/image-gallery';

export function EventGallery() {
  const handleSelectImage = (url: string) => {
    console.log('Selected:', url);
  };

  return (
    <ImageGallery
      bucket="event-images"
      folder="2025/summit"
      onSelect={handleSelectImage}
    />
  );
}
```

### 演讲者创建表单

```tsx
import { SpeakerForm } from '@/components/speaker-form';

export default function CreateSpeakerPage() {
  return (
    <div className="container mx-auto py-8">
      <h1>创建演讲者</h1>
      <SpeakerForm />
    </div>
  );
}
```

### 赞助商创建表单

```tsx
import { SponsorForm } from '@/components/sponsor-form';

export default function CreateSponsorPage() {
  return (
    <div className="container mx-auto py-8">
      <h1>创建赞助商</h1>
      <SponsorForm />
    </div>
  );
}
```

---

## 完整API参考

### `<ImageUpload />` Props

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `bucket` | `StorageBucket` | ✅ | 存储桶名称 |
| `onUpload` | `(url: string) => void` | ✅ | 上传完成回调 |
| `currentUrl` | `string` | ❌ | 当前图片URL |
| `folder` | `string` | ❌ | 上传文件夹 |
| `accept` | `string` | ❌ | 允许的文件类型 |
| `className` | `string` | ❌ | 自定义样式 |

### `<ImageGallery />` Props

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `bucket` | `StorageBucket` | ✅ | 存储桶名称 |
| `folder` | `string` | ❌ | 显示的文件夹 |
| `onSelect` | `(url: string) => void` | ❌ | 选择图片回调 |
| `refreshTrigger` | `number` | ❌ | 刷新触发器 |

### Storage Functions

```typescript
// 上传单个文件
uploadFile(file: File, bucket: StorageBucket, path?: string): Promise<UploadResult>

// 上传多个文件
uploadFiles(files: File[], bucket: StorageBucket, basePath?: string): Promise<UploadResult[]>

// 上传演讲者照片
uploadSpeakerPhoto(file: File, speakerId?: string): Promise<string>

// 上传赞助商Logo
uploadSponsorLogo(file: File, sponsorId?: string): Promise<string>

// 上传活动图片
uploadEventImage(file: File, eventId?: string): Promise<string>

// 上传文档
uploadDocument(file: File, category?: string): Promise<string>

// 获取公开URL
getPublicUrl(bucket: StorageBucket, path: string): string

// 删除文件
deleteFile(bucket: StorageBucket, path: string): Promise<void>

// 列出文件
listFiles(bucket: StorageBucket, folder?: string): Promise<FileItem[]>
```

---

## 存储桶列表

| 存储桶 | 用途 | 最大大小 | 允许格式 |
|--------|------|----------|----------|
| `speakers-photos` | 演讲者照片 | 5MB | JPG, PNG, WebP, GIF |
| `sponsor-logos` | 赞助商Logo | 2MB | JPG, PNG, WebP, SVG |
| `event-images` | 活动图片 | 10MB | JPG, PNG, WebP, GIF |
| `documents` | 文档 | 50MB | PDF, PPT, DOC, XLS |

---

## 常见问题

### Q: 如何在数据库中使用上传的图片URL？

A: 上传后会获得公开URL，直接存入数据库即可：

```typescript
const speaker = await createSpeakerWithPhoto(
  {
    name: '演讲者姓名',
    title: 'CEO',
    company: '公司',
    is_featured: true,
  }
);

// 如果需要关联上传的图片，可以：
await supabase
  .from('speakers')
  .update({ photo_url: uploadedImageUrl })
  .eq('id', speaker.id);
```

### Q: 图片上传后在哪里？

A: 所有文件存储在Supabase Storage，可以通过以下方式访问：
- **管理界面**: https://supabase.com/dashboard → Storage
- **公开URL**: `https://bhnocohqxbqirxbzitlu.supabase.co/storage/v1/object/public/{bucket}/{path}`
- **代码访问**: 使用 `getPublicUrl()` 或 `listFiles()`

### Q: 如何删除已上传的图片？

A: 三种方式：
1. **媒体库页面** — 鼠标悬停，点击删除按钮
2. **使用组件** — `<ImageUpload />` 组件支持删除
3. **编程方式** — 调用 `deleteFile(bucket, path)`

### Q: 上传失败怎么办？

A: 检查以下内容：
- 文件大小是否超限（演讲者5MB、赞助商2MB、活动10MB）
- 文件格式是否支持（检查文件扩展名和MIME类型）
- 网络连接是否正常
- 查看浏览器控制台的错误信息

### Q: 如何批量上传图片？

A: 使用 `uploadFiles()` 函数：

```typescript
import { uploadFiles } from '@/lib/storage';

const handleMultipleUpload = async (files: FileList) => {
  const results = await uploadFiles(
    Array.from(files),
    'event-images',
    '2025-gallery'
  );
  console.log('Uploaded:', results.map(r => r.publicUrl));
};
```

---

## 下一步

1. ✅ 访问 `/admin/media` 管理您的图片
2. ✅ 在演讲者页面使用 `<SpeakerForm />`
3. ✅ 在赞助商页面使用 `<SponsorForm />`
4. ✅ 在其他表单中集成 `<ImageUpload />`
5. ✅ 使用图片库展示 `<ImageGallery />`

---

**创建的文件：**
- `/components/image-upload.tsx` — 图片上传组件
- `/components/image-gallery.tsx` — 图片库展示组件
- `/components/speaker-form.tsx` — 演讲者创建表单
- `/components/sponsor-form.tsx` — 赞助商创建表单
- `/app/admin/media/page.tsx` — 媒体库管理页面

**支持中文界面** 🇨🇳
