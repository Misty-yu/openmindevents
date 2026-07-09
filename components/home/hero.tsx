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
            backgroundImage: `url('/images/openmind-home-hero-ai-collaboration-1600x900.png')`,
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
                Forum Planning Underway for 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              OpenMind AI Workforce{' '}
              <span className="text-blue-400">Transformation</span> Forum 2026
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 font-light mb-4 leading-relaxed">
              How AI Agents Are Reshaping Organizations, Talent and Leadership
            </p>

            <p className="text-gray-300 text-base mb-10 max-w-2xl leading-relaxed">
              A focused half-day forum for business and HR leaders navigating
              the AI-driven transformation of work.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 mb-10 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-blue-400" />
                <span>Friday, July 31, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-blue-400" />
                <span>Shanghai, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={15} className="text-blue-400" />
                <span>
                  50 Founders, CEOs, CXOs, HR leaders, AI leaders, digital transformation
                  leaders, innovation and business leaders
                </span>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
