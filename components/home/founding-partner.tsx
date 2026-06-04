'use client';

import { useState } from 'react';
import { Zap, Users, TrendingUp } from 'lucide-react';
import WaitingListModal from '@/components/waiting-list-modal';

const benefits = [
  {
    icon: Zap,
    title: 'Brand Visibility',
    description: 'Premium placement and recognition across all summit materials and communications.',
  },
  {
    icon: Users,
    title: 'Exclusive Access',
    description: 'Direct engagement with 500+ senior HR and business leaders in one room.',
  },
  {
    icon: TrendingUp,
    title: 'Thought Leadership',
    description: 'Showcase your expertise and innovation to an audience of high-level decision-makers.',
  },
];

export default function FoundingPartner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <WaitingListModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl p-12 text-center">
            <span className="inline-block text-white/80 text-xs font-semibold uppercase tracking-widest mb-3">
              Partnership Opportunity
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Become a Founding Partner
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-10">
              Help shape the future of workforce transformation. Join leading organizations in sponsoring the OpenMind Summit 2026.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-left">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <p className="text-blue-100 text-sm">{description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
