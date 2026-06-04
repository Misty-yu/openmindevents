'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import WaitingListModal from '@/components/waiting-list-modal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <WaitingListModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white/60 to-gray-50/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-blue-200 rounded-full mb-8 bg-blue-50">
              <span className="w-1.5 h-1.5 bg-[#2563eb] rounded-full animate-pulse" />
              <span className="text-[#2563eb] text-xs font-medium tracking-widest uppercase">
                Summit Planning Underway for 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              OpenMind AI Agent Workforce{' '}
              <span className="text-[#2563eb]">Transformation</span> Summit 2026
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 font-light mb-4 leading-relaxed">
              How AI Agents Are Reshaping Organizations, Talent and Leadership
            </p>

            <p className="text-gray-600 text-base mb-10 max-w-2xl leading-relaxed">
              The premier global gathering for CHROs, HR Directors, Talent
              Leaders, and C-Suite Executives navigating the AI-driven
              transformation of work.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 mb-10 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-[#2563eb]" />
                <span>2026 — Date To Be Announced</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#2563eb]" />
                <span>Shanghai, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={15} className="text-[#2563eb]" />
                <span>300+ CHROs & HR Leaders</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563eb] text-white font-semibold rounded hover:bg-[#1d4ed8] transition-all hover:gap-3 group"
              >
                Join Waiting List
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-300 text-gray-900 font-medium rounded hover:border-[#2563eb] hover:text-[#2563eb] transition-all"
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
