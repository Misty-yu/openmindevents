'use client';

import { useEffect, useRef } from 'react';

const images = [
  {
    src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'OpenMind Middle East Forum 2025',
  },
  {
    src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'OpenMind COMEX Oman Forum 2025',
  },
  {
    src: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'OpenMind Event Panel Discussion',
  },
  {
    src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'OpenMind Networking Session',
  },
  {
    src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'OpenMind Keynote Session',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Previous Events</h2>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 sm:w-80 lg:w-96 rounded-xl overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 sm:h-52 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
