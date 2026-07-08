'use client';

import { useEffect, useRef, useState } from 'react';

interface EventImage {
  src: string;
  alt: string;
}

const localImages: EventImage[] = [
  {
    src: '/images/event1.jpg',
    alt: 'OpenMind Summit 2025 - Stage & Podium',
  },
  {
    src: '/images/event2.jpg',
    alt: 'OpenMind Team Leaders & Networking',
  },
  {
    src: '/images/event3.jpg',
    alt: 'OpenMind Speaker Presentation',
  },
  {
    src: '/images/event4.jpg',
    alt: 'OpenMind Keynote & Audience',
  },
  {
    src: '/images/event5.jpg',
    alt: 'OpenMind Conference & Attendees',
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
  const [images] = useState<EventImage[]>(localImages);

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
          (use the 活动图片 tab and put them in the past-events folder)
        </p>
      </div>
    </section>
  );
}
