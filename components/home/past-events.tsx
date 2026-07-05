'use client';

import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface EventImage {
  src: string;
  alt: string;
}

// Default placeholder images when no images are uploaded
const defaultPlaceholders: EventImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&q=85&auto=format',
    alt: 'Conference Stage',
  },
  {
    src: 'https://images.unsplash.com/photo-1505373952554-6cb74c38f3b6?w=800&h=500&fit=crop&q=85&auto=format',
    alt: 'Networking Event',
  },
  {
    src: 'https://images.unsplash.com/photo-1475721027785-f74f4f8d0e1e?w=800&h=500&fit=crop&q=85&auto=format',
    alt: 'Speaker Presentation',
  },
  {
    src: 'https://images.unsplash.com/photo-1591115765373-3c8ddd2e8eb0?w=800&h=500&fit=crop&q=85&auto=format',
    alt: 'Conference Audience',
  },
  {
    src: 'https://images.unsplash.com/photo-1559223602-a2e6073e5af1?w=800&h=500&fit=crop&q=85&auto=format',
    alt: 'Workshop Session',
  },
];

function EventImageCard({ image }: { image: EventImage }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-48 sm:h-52 object-cover brightness-110 contrast-110"
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
    </div>
  );
}

export default function PastEvents() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<EventImage[]>(defaultPlaceholders);
  const [loading, setLoading] = useState(true);

  // Load images from Supabase storage
  useEffect(() => {
    loadEventImages();
  }, []);

  const loadEventImages = async () => {
    try {
      setLoading(true);

      // List files from event-images bucket in 'past-events' folder
      const { data, error } = await supabase.storage
        .from('event-images')
        .list('past-events', {
          limit: 10,
          sortBy: { column: 'created_at', order: 'desc' },
        });

      if (error) throw error;

      if (data && data.length > 0) {
        // Get public URLs for all images
        const imageUrls = data
          .filter((file) => file.name.match(/\.(jpg|jpeg|png|webp|gif)$/i))
          .map((file) => {
            const { data: urlData } = supabase.storage
              .from('event-images')
              .getPublicUrl(`past-events/${file.name}`);
            return {
              src: urlData.publicUrl,
              alt: file.name.replace(/\.[^/.]+$/, '').replace(/-/g, ' '),
            };
          });

        if (imageUrls.length > 0) {
          setImages(imageUrls);
        }
      }
    } catch (err) {
      console.log('Using default placeholder images:', err);
      // Keep using defaultPlaceholders on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let frame: number;
    const speed = 0.5;

    const step = () => {
      el.scrollLeft += speed;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Our Previous Events</h2>
          <a
            href="/admin/media"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Manage Images →
          </a>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        {images.map((img, i) => (
          <EventImageCard key={i} image={img} />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <p className="text-xs text-gray-500">
          Upload your event images via the{' '}
          <a href="/admin/media" className="text-blue-600 hover:underline">
            Media Library
          </a>{' '}
          (use the "past-events" folder)
        </p>
      </div>
    </section>
  );
}
