'use client';

import { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import WaitingListModal from '@/components/waiting-list-modal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <WaitingListModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background image with darker overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-blue-400/40 rounded-full mb-8 bg-blue-500/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-xs font-medium tracking-widest uppercase">
                Summit Planning Underway for 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              OpenMind AI Agent Workforce{' '}
              <span className="text-blue-400">Transformation</span> Summit 2026
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 font-light mb-4 leading-relaxed">
              How AI Agents Are Reshaping Organizations, Talent and Leadership
            </p>

            <p className="text-gray-300 text-base mb-10 max-w-2xl leading-relaxed">
              The premier global gathering for CHROs, HR Directors, Talent
              Leaders, and C-Suite Executives navigating the AI-driven
              transformation of work.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 mb-10 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-blue-400" />
                <span>2026 — Date To Be Announced</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-blue-400" />
                <span>Shanghai, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={15} className="text-blue-400" />
                <span>300+ CHROs & HR Leaders</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563eb] text-white font-semibold rounded hover:bg-blue-500 transition-all hover:gap-3 group"
              >
                Join Waiting List
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-400 text-white font-medium rounded hover:border-blue-400 hover:text-blue-300 transition-all"
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
