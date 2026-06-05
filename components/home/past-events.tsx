'use client';

import { useEffect, useRef } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=85&auto=format',
    alt: 'OpenMind Summit Stage & Podium',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-40d0a88a3e38?w=800&h=500&fit=crop&q=85&auto=format',
    alt: 'OpenMind Team & Leaders Networking',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-40d0a88a3e39?w=800&h=500&fit=crop&q=85&auto=format',
    alt: 'OpenMind Speaker Presentation',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-40d0a88a3e40?w=800&h=500&fit=crop&q=85&auto=format',
    alt: 'OpenMind Keynote Conference',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-40d0a88a3e41?w=800&h=500&fit=crop&q=85&auto=format',
    alt: 'OpenMind Event Attendees',
  },
];

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
          <div
            key={i}
            className="flex-shrink-0 w-72 sm:w-80 lg:w-96 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 sm:h-52 object-cover brightness-110 contrast-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
