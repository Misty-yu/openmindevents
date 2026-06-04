import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const speakers = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Guest Speaker ${i + 1}`,
  title: [
    'Chief Human Resources Officer',
    'VP of Talent Strategy',
    'Global HR Director',
    'Chief People Officer',
    'Head of Organization Development',
    'Chief Executive Officer',
    'VP of Workforce Transformation',
    'Director of People Analytics',
  ][i],
  company: [
    'Fortune 500 Enterprise',
    'Global Technology Firm',
    'International Consultancy',
    'Leading FinTech Company',
    'Global Manufacturing Corp',
    'AI Platform Leader',
    'Management Consulting Firm',
    'Multinational Retail Group',
  ][i],
  photo: `https://images.pexels.com/photos/${
    [1181686, 3777943, 1587014, 2379004, 1516680, 3184291, 2182970, 1239291][i]
  }/pexels-photo-${
    [1181686, 3777943, 1587014, 2379004, 1516680, 3184291, 2182970, 1239291][i]
  }.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop`,
}));

export default function SpeakersPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
              Featured Speakers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              World-Class Thought Leaders
            </h2>
          </div>
          <Link
            href="/speakers"
            className="inline-flex items-center gap-2 text-[#2563eb] font-medium text-sm hover:gap-3 transition-all group whitespace-nowrap"
          >
            View All Speakers
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl aspect-square bg-gray-200">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <p className="font-semibold text-gray-900 text-sm">{speaker.name}</p>
              <p className="text-gray-600 text-xs mt-0.5 leading-snug">{speaker.title}</p>
              <p className="text-[#2563eb] text-xs mt-0.5">{speaker.company}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm mb-4">
            Speaker announcements coming soon. Apply to join our roster.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#2563eb] text-[#2563eb] text-sm font-medium rounded hover:bg-[#2563eb] hover:text-white transition-all"
          >
            Apply to Speak
          </Link>
        </div>
      </div>
    </section>
  );
}
