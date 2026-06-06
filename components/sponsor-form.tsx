'use client';

import { useState } from 'react';
import { ImageUpload } from '@/components/image-upload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { createSponsorWithLogo } from '@/lib/db';
import { Loader2 } from 'lucide-react';

interface SponsorFormData {
  name: string;
  tier: string;
  website_url: string;
  description: string;
  is_active: boolean;
}

const SPONSOR_TIERS = [
  { value: 'platinum', label: '铂金合作伙伴' },
  { value: 'gold', label: '金牌合作伙伴' },
  { value: 'silver', label: '银牌合作伙伴' },
  { value: 'bronze', label: '铜牌合作伙伴' },
  { value: 'partner', label: '合作伙伴' },
];

export function SponsorForm() {
  const [formData, setFormData] = useState<SponsorFormData>({
    name: '',
    tier: '',
    website_url: '',
    description: '',
    is_active: true,
  });
  const [logoUrl, setLogoUrl] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('请输入赞助商名称');
      return;
    }

    if (!formData.tier) {
      alert('请选择赞助等级');
      return;
    }

    setSubmitting(true);
    setSuccess(false);

    try {
      const sponsor = await createSponsorWithLogo(
        {
          name: formData.name,
          tier: formData.tier,
          website_url: formData.website_url || undefined,
          description: formData.description || undefined,
          is_active: formData.is_active,
        },
        undefined // Logo 已上传，URL 存在 logoUrl 中
      );

      console.log('Sponsor created:', sponsor.id, logoUrl);

      setSuccess(true);
      setFormData({
        name: '',
        tier: '',
        website_url: '',
        description: '',
        is_active: true,
      });
      setLogoUrl('');
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
          赞助商创建成功！
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 左侧：表单字段 */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="sponsor-name">公司名称 *</Label>
            <Input
              id="sponsor-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="公司名称"
              required
            />
          </div>

          <div>
            <Label htmlFor="tier">赞助等级 *</Label>
            <Select
              value={formData.tier}
              onValueChange={(value) => setFormData({ ...formData, tier: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择赞助等级" />
              </SelectTrigger>
              <SelectContent>
                {SPONSOR_TIERS.map((tier) => (
                  <SelectItem key={tier.value} value={tier.value}>
                    {tier.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="website">网站地址</Label>
            <Input
              id="website"
              type="url"
              value={formData.website_url}
              onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
              placeholder="https://company.com"
            />
          </div>

          <div>
            <Label htmlFor="sponsor-desc">公司简介</Label>
            <Textarea
              id="sponsor-desc"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="公司简介..."
              rows={4}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="active"
              checked={formData.is_active}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, is_active: checked })
              }
            />
            <Label htmlFor="active">激活赞助商信息</Label>
          </div>
        </div>

        {/* 右侧：Logo上传 */}
        <div>
          <Label>Logo上传</Label>
          <p className="text-sm text-gray-500 mb-2">
            支持 JPG, PNG, WebP, SVG 格式，最大 2MB
          </p>
          <ImageUpload
            bucket="sponsor-logos"
            currentUrl={logoUrl}
            onUpload={(url) => setLogoUrl(url)}
            accept="image/jpeg,image/jpg,image/png,image/webp,image/svg+xml"
            className="mt-2"
          />
          {logoUrl && (
            <div className="mt-2 p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-600">Logo URL:</p>
              <code className="text-xs text-blue-600 break-all">{logoUrl}</code>
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
            '创建赞助商'
          )}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setFormData({
              name: '',
              tier: '',
              website_url: '',
              description: '',
              is_active: true,
            });
            setLogoUrl('');
          }}
        >
          重置
        </Button>
      </div>
    </form>
  );
}
