import { Calendar, MapPin, Users, Globe } from 'lucide-react';

const stats = [
  { icon: Calendar, label: 'Event Date', value: 'TBA — 2026' },
  { icon: MapPin, label: 'Location', value: 'To Be Announced' },
  { icon: Users, label: 'Expected Attendees', value: '500+ Leaders' },
  { icon: Globe, label: 'Countries Represented', value: '30+ Nations' },
];

const audiences = [
  'CHRO & Chief People Officers',
  'HR Directors & VP-Level Leaders',
  'Talent Acquisition Leaders',
  'Organization Development Leaders',
  'CEOs & COOs',
  'Learning & Development Heads',
];

export default function SummitOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
              About the Summit
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              The Definitive Forum for AI-Driven Workforce Strategy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              OpenMind Workforce Transformation Summit 2026 brings together
              the world&apos;s most influential HR and business leaders to
              address the most consequential shift in organizational history:
              the integration of AI Agents into the workplace.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              This is not a technology conference. It&apos;s a strategic
              leadership summit designed for those responsible for shaping
              culture, talent, and people strategy in the age of intelligent
              automation.
            </p>

            {/* Audience tags */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Who Attends
              </p>
              <div className="flex flex-wrap gap-2">
                {audiences.map((a) => (
                  <span
                    key={a}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 bg-[#2563eb]/10 rounded-lg flex items-center justify-center">
                  <Icon size={18} className="text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide font-medium mb-1">
                    {label}
                  </p>
                  <p className="text-gray-900 font-semibold text-base">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
