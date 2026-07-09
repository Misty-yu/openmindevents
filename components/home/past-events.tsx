'use client';

import { useEffect, useRef, useState } from 'react';

interface EventImage {
  src: string;
  alt: string;
}

const eventImages: EventImage[] = [
  { src: '/images/past-events/openmind-past-event-01.png', alt: 'OpenMind previous event' },
  { src: '/images/past-events/openmind-past-event-02.png', alt: 'OpenMind panel discussion' },
  { src: '/images/past-events/openmind-past-event-03.png', alt: 'OpenMind conference session' },
  { src: '/images/past-events/openmind-past-event-04.png', alt: 'OpenMind industry forum' },
  { src: '/images/past-events/openmind-past-event-05.png', alt: 'OpenMind guest presentation' },
  { src: '/images/past-events/openmind-past-event-06.png', alt: 'OpenMind audience discussion' },
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
  const [images, setImages] = useState<EventImage[]>(eventImages);

  useEffect(() => {
    let active = true;
    fetch('/api/media?bucket=event-images&folder=past-events')
      .then(async (response) => {
        if (!response.ok) throw new Error('Unable to load event images');
        return response.json();
      })
      .then((result) => {
        if (active && Array.isArray(result.files) && result.files.length > 0) {
          setImages(result.files.map((file: { publicUrl: string; name: string }) => ({
            src: file.publicUrl,
            alt: file.name.replace(/[-_]/g, ' '),
          })));
        }
      })
      .catch(() => undefined);
    return () => {
      active = false;
    };
  }, []);

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
    </section>
  );
}
