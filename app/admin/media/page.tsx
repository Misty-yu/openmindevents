'use client';

import { useState } from 'react';
import { ImageUpload } from '@/components/image-upload';
import { ImageGallery } from '@/components/image-gallery';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MediaManagementPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedUrl, setSelectedUrl] = useState<string>('');

  const handleUploadComplete = () => {
    setRefreshKey((k) => k + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mt-20 mb-2">媒体库管理</h1>
        <p className="text-gray-600">上传和管理活动图片、演讲者照片、赞助商Logo</p>
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

      <Tabs defaultValue="speakers" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
          <TabsTrigger value="speakers">演讲者照片</TabsTrigger>
          <TabsTrigger value="sponsors">赞助商Logo</TabsTrigger>
          <TabsTrigger value="events">活动图片</TabsTrigger>
          <TabsTrigger value="documents">文档</TabsTrigger>
        </TabsList>

        <TabsContent value="speakers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>上传演讲者照片</CardTitle>
              <CardDescription>
                支持 JPG, PNG, WebP 格式，最大 5MB
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ImageUpload
                bucket="speakers-photos"
                onUpload={(url) => {
                  setSelectedUrl(url);
                  handleUploadComplete();
                }}
                folder="speakers"
                accept="image/jpeg,image/jpg,image/png,image/webp"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>已上传的照片</CardTitle>
              <CardDescription>点击图片进行操作</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageGallery
                bucket="speakers-photos"
                folder="speakers"
                refreshTrigger={refreshKey}
                onSelect={(url) => setSelectedUrl(url)}
              />
            </CardContent>
          </Card>
        </TabsContent>

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
                    这些图片会显示在首页"Our Previous Events"轮播区域
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageUpload
                    bucket="event-images"
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
              <div className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500 mb-2">文档上传功能</p>
                <p className="text-sm text-gray-400">
                  可以在这里上传议程、演讲PPT、白皮书等文档
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="font-semibold mb-2">使用说明</h2>
        <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
          <li>选择对应的标签页（演讲者照片/赞助商Logo/活动图片）</li>
          <li>点击虚线框上传图片，或拖拽图片到框内</li>
          <li>上传完成后，图片会显示在下方的图库中</li>
          <li>鼠标悬停在图片上可以：选择/下载/删除</li>
          <li>选择后的图片URL会显示在页面顶部，可复制使用</li>
        </ol>
      </div>
    </div>
  );
}
