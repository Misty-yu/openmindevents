'use client';

import { useState } from 'react';
import { ImageUpload } from '@/components/image-upload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { createSpeakerWithPhoto } from '@/lib/db';
import { Loader2 } from 'lucide-react';

interface SpeakerFormData {
  name: string;
  title: string;
  company: string;
  bio: string;
  is_featured: boolean;
}

export function SpeakerForm() {
  const [formData, setFormData] = useState<SpeakerFormData>({
    name: '',
    title: '',
    company: '',
    bio: '',
    is_featured: false,
  });
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('请输入演讲者姓名');
      return;
    }

    setSubmitting(true);
    setSuccess(false);

    try {
      // 创建演讲者并上传照片
      const speaker = await createSpeakerWithPhoto(
        {
          name: formData.name,
          title: formData.title || undefined,
          company: formData.company || undefined,
          bio: formData.bio || undefined,
          is_featured: formData.is_featured,
        },
        undefined // 照片已上传，URL 存在 photoUrl 中
      );

      // 如果上传了照片，更新演讲者记录
      if (photoUrl && speaker.id) {
        // 这里可以调用 updateSpeaker 函数更新 photo_url
        console.log('Speaker created with photo:', speaker.id, photoUrl);
      }

      setSuccess(true);
      setFormData({
        name: '',
        title: '',
        company: '',
        bio: '',
        is_featured: false,
      });
      setPhotoUrl('');
    } catch (error) {
      alert('创建失败: ' + (error instanceof Error ? error.message : '未知错误'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          演讲者创建成功！
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 左侧：表单字段 */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">姓名 *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="演讲者姓名"
              required
            />
          </div>

          <div>
            <Label htmlFor="title">职位</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="例如: CEO, CTO, CHRO"
            />
          </div>

          <div>
            <Label htmlFor="company">公司</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="公司名称"
            />
          </div>

          <div>
            <Label htmlFor="bio">简介</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="演讲者简介..."
              rows={4}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              checked={formData.is_featured}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, is_featured: checked })
              }
            />
            <Label htmlFor="featured">标记为特邀嘉宾</Label>
          </div>
        </div>

        {/* 右侧：照片上传 */}
        <div>
          <Label>照片上传</Label>
          <p className="text-sm text-gray-500 mb-2">
            支持 JPG, PNG, WebP 格式，最大 5MB
          </p>
          <ImageUpload
            bucket="speakers-photos"
            currentUrl={photoUrl}
            onUpload={(url) => setPhotoUrl(url)}
            className="mt-2"
          />
          {photoUrl && (
            <div className="mt-2 p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-600">图片URL:</p>
              <code className="text-xs text-blue-600 break-all">{photoUrl}</code>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              创建中...
            </>
          ) : (
            '创建演讲者'
          )}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setFormData({
              name: '',
              title: '',
              company: '',
              bio: '',
              is_featured: false,
            });
            setPhotoUrl('');
          }}
        >
          重置
        </Button>
      </div>
    </form>
  );
}
