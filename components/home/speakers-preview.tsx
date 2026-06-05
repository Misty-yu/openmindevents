import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const speakers = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  name: `Guest Speaker ${i + 1}`,
  title: [
    'Chief Human Resources Officer',
    'Chief People Officer',
    'VP of Workforce Transformation',
    'Head of Organization Development',
  ][i],
  company: ['Fortune 500 Enterprise', 'Global Technology Firm', 'AI Platform Leader', 'International Consultancy'][i],
  photo: `https://images.pexels.com/photos/${
    [1181686, 3777943, 2379004, 1516680][i]
  }/pexels-photo-${
    [1181686, 3777943, 2379004, 1516680][i]
  }.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop`,
}));

export default function SpeakersPreview() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Speakers</h2>
          <Link
            href="/speakers"
            className="inline-flex items-center gap-1.5 text-[#2563eb] text-sm font-medium hover:gap-2.5 transition-all"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {speakers.map((s) => (
            <div key={s.id} className="group text-center">
              <div className="mb-3 overflow-hidden rounded-xl aspect-square bg-gray-200">
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <p className="font-semibold text-gray-900 text-sm">{s.name}</p>
              <p className="text-gray-500 text-xs leading-snug">{s.title}</p>
              <p className="text-[#2563eb] text-xs">{s.company}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-6 text-center">
          Speaker announcements coming soon.{' '}
          <Link href="/contact" className="text-[#2563eb] font-medium">Apply to speak</Link>
        </p>
      </div>
    </section>
  );
}
