'use client';

import { useState, useEffect } from 'react';
import { Image as ImageIcon, Trash2, Download, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { listFiles, deleteFile, getPublicUrl } from '@/lib/storage';
import type { StorageBucket } from '@/lib/types';

interface FileItem {
  name: string;
  id: string;
  created_at: string;
  metadata: Record<string, any>;
}

interface ImageGalleryProps {
  bucket: StorageBucket;
  folder?: string;
  onSelect?: (url: string) => void;
  refreshTrigger?: number;
}

export function ImageGallery({
  bucket,
  folder,
  onSelect,
  refreshTrigger,
}: ImageGalleryProps) {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadFiles = async () => {
    setLoading(true);
    setError(null);
    try {
      const fileList = await listFiles(bucket, folder);
      setFiles(fileList);
    } catch (err) {
      setError(err instanceof Error ? err.message : '加载失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFiles();
  }, [bucket, folder, refreshTrigger]);

  const handleDelete = async (path: string) => {
    if (!confirm('确定要删除这张图片吗？')) return;

    try {
      await deleteFile(bucket, path);
      setFiles(files.filter((f) => f.name !== path));
    } catch (err) {
      alert('删除失败: ' + (err instanceof Error ? err.message : '未知错误'));
    }
  };

  const handleSelect = (path: string) => {
    if (onSelect) {
      const url = getPublicUrl(bucket, path);
      onSelect(url);
    }
  };

  const handleDownload = (path: string) => {
    const url = getPublicUrl(bucket, path);
    window.open(url, '_blank');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-48">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (files.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-48 text-gray-400">
        <ImageIcon className="w-12 h-12 mb-2" />
        <p>暂无图片</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {files.map((file) => {
        const url = getPublicUrl(bucket, folder ? `${folder}/${file.name}` : file.name);
        const path = folder ? `${folder}/${file.name}` : file.name;

        return (
          <div
            key={file.id}
            className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-50"
          >
            <img
              src={url}
              alt={file.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
              {onSelect && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleSelect(path)}
                >
                  选择
                </Button>
              )}
              <Button
                size="sm"
                variant="secondary"
                onClick={() => handleDownload(path)}
              >
                <ExternalLink className="w-3 h-3" />
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(path)}
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 truncate">
              {file.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
