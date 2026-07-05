'use client';

import { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Users, Clock } from 'lucide-react';
import WaitingListModal from '@/components/waiting-list-modal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <WaitingListModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Split layout: solid dark left + image right */}
        <div className="absolute inset-0 flex">
          {/* Dark left panel — ensures text is always on solid background */}
          <div className="w-full lg:w-[55%] bg-gray-950 flex-shrink-0" />
          {/* Image right panel */}
          <div className="hidden lg:block flex-1 relative">
            <img
              src="https://images.pexels.com/photos/8438958/pexels-photo-8438958.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Human and AI robot collaborating in a professional setting"
              className="absolute inset-0 w-full h-full object-cover object-left"
            />
            {/* Fade edge so image blends into the dark left panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/30 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-blue-400/40 rounded-full mb-8 bg-blue-500/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-xs font-medium tracking-widest uppercase">
                July 31, 2026 · Shanghai
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4">
              OpenMind AI Agent{' '}
              <span className="text-blue-400">Workforce Transformation</span>{' '}
              Summit 2026
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 font-light mb-3 leading-relaxed">
              New Paradigm for Enterprise Organizational Structure in the Age of AI Agents
            </p>

            <p className="text-blue-300 text-base font-medium mb-6 italic">
              "What AI truly changes is not jobs — it's the enterprise itself."
            </p>

            <p className="text-gray-400 text-sm mb-10 max-w-xl leading-relaxed">
              A closed-door, high-caliber gathering for senior leaders actively reshaping
              how organizations are built, led, and grown in the era of intelligent automation.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-blue-400 flex-shrink-0" />
                <span>Friday, July 31, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-blue-400 flex-shrink-0" />
                <span>13:30 – 17:30</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-blue-400 flex-shrink-0" />
                <span>Huangpu District, Shanghai, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={15} className="text-blue-400 flex-shrink-0" />
                <span>60–100 Senior Leaders · By Invitation</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563eb] text-white font-semibold rounded hover:bg-blue-500 transition-all group"
              >
                Request Invitation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-500 text-white font-medium rounded hover:border-blue-400 hover:text-blue-300 transition-all"
              >
                Become a Founding Partner
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
