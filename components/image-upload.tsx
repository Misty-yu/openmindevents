'use client';

import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { StorageBucket } from '@/lib/types';

interface ImageUploadProps {
  bucket: StorageBucket;
  currentUrl?: string;
  onUpload: (url: string) => void;
  folder?: string;
  accept?: string;
  className?: string;
  adminToken?: string;
  imageOnly?: boolean;
}

export function ImageUpload({
  bucket,
  currentUrl,
  onUpload,
  folder,
  accept = 'image/jpeg,image/jpg,image/png,image/webp',
  className = '',
  adminToken = '',
  imageOnly = true,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentUrl || null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);

    // 验证文件类型
    if (imageOnly && !file.type.startsWith('image/')) {
      setError('请选择图片文件');
      return;
    }

    // 显示预览
    if (imageOnly) {
      const reader = new FileReader();
      reader.onload = (event) => setPreview(event.target?.result as string);
      reader.readAsDataURL(file);
    }

    // 上传文件
    setUploading(true);
    try {
      const body = new FormData();
      body.append('file', file);
      body.append('bucket', bucket);
      if (folder) body.append('folder', folder);
      const response = await fetch('/api/media', {
        method: 'POST',
        headers: { 'x-admin-token': adminToken },
        body,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || '上传失败');
      onUpload(result.publicUrl);
      setPreview(imageOnly ? result.publicUrl : file.name);
    } catch (err) {
      setError(err instanceof Error ? err.message : '上传失败');
      setPreview(currentUrl || null);
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onUpload('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
        disabled={uploading}
      />

      {preview ? (
        <div className="relative group">
          {imageOnly ? (
            <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded-lg border border-gray-200" />
          ) : (
            <div className="w-full h-48 rounded-lg border border-gray-200 flex items-center justify-center text-sm text-gray-700">{preview}</div>
          )}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              onClick={handleClick}
              disabled={uploading}
            >
              <Upload className="w-4 h-4 mr-1" />
              更换图片
            </Button>
            <Button
              type="button"
              size="sm"
              variant="destructive"
              onClick={handleRemove}
              disabled={uploading}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          {uploading && (
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
        >
          {uploading ? (
            <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
          ) : (
            <>
              <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">点击上传{imageOnly ? '图片' : '文件'}</p>
              <p className="text-xs text-gray-400 mt-1">请选择允许的文件格式</p>
            </>
          )}
        </div>
      )}

      {error && (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      )}
    </div>
  );
}
