'use client';

import { useState } from 'react';
import { ImageUpload } from '@/components/image-upload';
import { ImageGallery } from '@/components/image-gallery';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MediaManagementPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedUrl, setSelectedUrl] = useState<string>('');
  const [adminToken, setAdminToken] = useState('');
  const [tokenInput, setTokenInput] = useState('');

  const handleUploadComplete = () => {
    setRefreshKey((k) => k + 1);
  };

  if (!adminToken) {
    return (
      <div className="max-w-md mx-auto px-4 py-32">
        <h1 className="text-2xl font-bold mb-2">媒体库登录</h1>
        <p className="text-sm text-gray-600 mb-6">请输入管理员令牌以管理网站文件。</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (tokenInput.trim()) setAdminToken(tokenInput.trim());
          }}
          className="space-y-3"
        >
          <input
            type="password"
            value={tokenInput}
            onChange={(event) => setTokenInput(event.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5"
            autoComplete="current-password"
            required
          />
          <button type="submit" className="w-full rounded-lg bg-[#2563eb] text-white py-2.5 font-semibold">
            进入媒体库
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mt-20 mb-2">媒体库管理</h1>
        <p className="text-gray-600">上传和管理活动图片、赞助商Logo、文档</p>
      </div>

      {selectedUrl && (
        <Card className="mb-6 bg-blue-50 border-blue-200">
          <CardContent className="pt-4">
            <p className="text-sm text-blue-800">
              <strong>已选择:</strong>{' '}
              <code className="bg-blue-100 px-2 py-1 rounded text-xs break-all">
                {selectedUrl}
              </code>
            </p>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="sponsors" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
          <TabsTrigger value="sponsors">赞助商Logo</TabsTrigger>
          <TabsTrigger value="events">活动图片</TabsTrigger>
          <TabsTrigger value="documents">文档</TabsTrigger>
        </TabsList>

        <TabsContent value="sponsors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>上传赞助商Logo</CardTitle>
              <CardDescription>
                支持 JPG, PNG, WebP, SVG 格式，最大 2MB
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ImageUpload
                bucket="sponsor-logos"
                adminToken={adminToken}
                onUpload={(url) => {
                  setSelectedUrl(url);
                  handleUploadComplete();
                }}
                folder="sponsors"
                accept="image/jpeg,image/jpg,image/png,image/webp,image/svg+xml"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>已上传的Logo</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageGallery
                bucket="sponsor-logos"
                adminToken={adminToken}
                folder="sponsors"
                refreshTrigger={refreshKey}
                onSelect={(url) => setSelectedUrl(url)}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <Tabs defaultValue="upload" className="space-y-4">
            <TabsList>
              <TabsTrigger value="upload">上传新图片</TabsTrigger>
              <TabsTrigger value="past">往期活动图片</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>上传活动图片</CardTitle>
                  <CardDescription>
                    支持 JPG, PNG, WebP, GIF 格式，最大 10MB
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageUpload
                    bucket="event-images"
                    adminToken={adminToken}
                    onUpload={(url) => {
                      setSelectedUrl(url);
                      handleUploadComplete();
                    }}
                    folder="events"
                    accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>上传往期活动图片</CardTitle>
                  <CardDescription>
                    这些图片会显示在首页 &quot;Our Previous Events&quot; 轮播区域
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageUpload
                    bucket="event-images"
                    adminToken={adminToken}
                    onUpload={(url) => {
                      setSelectedUrl(url);
                      handleUploadComplete();
                    }}
                    folder="past-events"
                    accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>已上传的活动图片</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageGallery
                bucket="event-images"
                adminToken={adminToken}
                folder="events"
                refreshTrigger={refreshKey}
                onSelect={(url) => setSelectedUrl(url)}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>往期活动图片</CardTitle>
              <CardDescription>显示在首页轮播区域</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageGallery
                bucket="event-images"
                adminToken={adminToken}
                folder="past-events"
                refreshTrigger={refreshKey}
                onSelect={(url) => setSelectedUrl(url)}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>文档上传</CardTitle>
              <CardDescription>
                支持 PDF, PPT, DOC, XLS 格式，最大 50MB
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ImageUpload
                bucket="documents"
                adminToken={adminToken}
                imageOnly={false}
                folder="resources"
                accept="application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onUpload={(url) => setSelectedUrl(url)}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="font-semibold mb-2">使用说明</h2>
        <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
          <li>选择对应的标签页（赞助商Logo/活动图片）</li>
          <li>点击虚线框上传图片，或拖拽图片到框内</li>
          <li>上传完成后，图片会显示在下方的图库中</li>
          <li>鼠标悬停在图片上可以：选择/下载/删除</li>
          <li>选择后的图片URL会显示在页面顶部，可复制使用</li>
        </ol>
      </div>
    </div>
  );
}
