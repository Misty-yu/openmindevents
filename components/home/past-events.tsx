'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface EventImage {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const images: EventImage[] = [
  {
    src: '/images/event1.jpg',
    alt: 'OpenMind Summit 2025 - Stage & Podium',
    fallbackSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=85&auto=format',
  },
  {
    src: '/images/event2.jpg',
    alt: 'OpenMind Team Leaders & Networking',
    fallbackSrc: 'https://images.unsplash.com/photo-1552664730-40d0a88a3e38?w=800&h=500&fit=crop&q=85&auto=format',
  },
  {
    src: '/images/event3.jpg',
    alt: 'OpenMind Speaker Presentation',
    fallbackSrc: 'https://images.unsplash.com/photo-1552664730-40d0a88a3e39?w=800&h=500&fit=crop&q=85&auto=format',
  },
  {
    src: '/images/event4.jpg',
    alt: 'OpenMind Keynote & Audience',
    fallbackSrc: 'https://images.unsplash.com/photo-1552664730-40d0a88a3e40?w=800&h=500&fit=crop&q=85&auto=format',
  },
  {
    src: '/images/event5.jpg',
    alt: 'OpenMind Conference & Attendees',
    fallbackSrc: 'https://images.unsplash.com/photo-1552664730-40d0a88a3e41?w=800&h=500&fit=crop&q=85&auto=format',
  },
];

function EventImageCard({ image }: { image: EventImage }) {
  const [imageSrc, setImageSrc] = useState(image.src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (image.fallbackSrc && imageSrc !== image.fallbackSrc) {
      setImageSrc(image.fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 h-48 sm:h-52 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-gray-500 text-sm font-medium">{image.alt}</div>
          <div className="text-gray-400 text-xs mt-1">Loading image...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
      <img
        src={imageSrc}
        alt={image.alt}
        onError={handleError}
        className="w-full h-48 sm:h-52 object-cover brightness-110 contrast-110"
        loading="lazy"
      />
    </div>
  );
}

export default function PastEvents() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
        <h2 className="text-2xl font-bold text-gray-900">Our Previous Events</h2>
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
        <p className="text-xs text-gray-400">
          💡 Tip: Place your event images in <code className="bg-gray-100 px-2 py-1 rounded text-[11px]">/public/images/event1.jpg</code> through <code className="bg-gray-100 px-2 py-1 rounded text-[11px]">event5.jpg</code>
        </p>
      </div>
    </section>
  );
}
