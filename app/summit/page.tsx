'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Brain,
  Users,
  Lightbulb,
  Target,
  Globe,
  Award,
  ArrowRight,
} from 'lucide-react';
import WaitingListModal from '@/components/waiting-list-modal';

const pillars = [
  {
    icon: Brain,
    title: 'Strategic Insight',
    description:
      'Curated sessions from practitioners who have navigated real AI transformation — not theoretical frameworks.',
  },
  {
    icon: Users,
    title: 'Peer Network',
    description:
      'Structured roundtables and networking designed to build long-term relationships across industries and geographies.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Showcase',
    description:
      'Direct access to emerging HR technology platforms, AI tools, and workforce analytics solutions.',
  },
  {
    icon: Target,
    title: 'Actionable Outcomes',
    description:
      'Every session is designed to deliver frameworks and playbooks delegates can implement immediately.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description:
      'Voices and case studies from organizations across North America, Europe, Asia-Pacific, and beyond.',
  },
  {
    icon: Award,
    title: 'Leadership Recognition',
    description:
      'Platform to celebrate organizations driving outstanding people outcomes through responsible AI adoption.',
  },
];

const formats = [
  { label: 'Keynote Addresses', desc: 'High-impact presentations from global thought leaders setting the strategic context.' },
  { label: 'Panel Discussions', desc: 'Expert panels exploring multiple perspectives on AI, talent, and organizational design.' },
  { label: 'Workshops', desc: 'Hands-on, interactive sessions led by practitioners delivering applied frameworks.' },
  { label: 'Roundtables', desc: 'Intimate peer dialogue groups enabling deep exchange among senior leaders.' },
  { label: 'Case Studies', desc: 'First-hand accounts of AI transformation from enterprises across sectors.' },
  { label: 'Exhibition Hall', desc: 'Meet technology providers and consultants reshaping the HR landscape.' },
];

export default function SummitPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <WaitingListModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
              Forum 2026
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              OpenMind AI Workforce Transformation Forum 2026
            </h1>
            <p className="text-gray-700 text-xl font-light leading-relaxed mb-8">
              How AI Agents Are Reshaping Organizations, Talent and Leadership
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563eb] text-white font-semibold rounded hover:bg-[#1d4ed8] transition-colors"
              >
                Register Interest <ArrowRight size={15} />
              </button>
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                View Agenda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Why This Forum Matters Now
            </h2>
            <p className="text-gray-700 leading-relaxed">
              AI Agents are no longer a future concept — they are arriving inside
              organizations today. The speed and scale of this transformation
              demands that HR and business leaders develop a new strategic
              vocabulary, new organizational models, and new leadership
              capabilities. OpenMind AI Workforce Transformation Forum 2026 is
              the venue where that work happens.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-6 border border-gray-200 rounded-xl hover:border-[#2563eb]/30 hover:shadow-md transition-all group bg-white"
              >
                <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#2563eb]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Formats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
              Format
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              How the Forum is Structured
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {formats.map((f, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex gap-4"
              >
                <span className="text-2xl font-bold text-[#2563eb]/20 leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{f.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Secure Your Place at the Table
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Delegate places are strictly limited to maintain the quality of
            dialogue. Early expressions of interest are encouraged.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3 bg-[#2563eb] text-white font-semibold rounded hover:bg-[#1d4ed8] transition-colors"
            >
              Register Interest
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
