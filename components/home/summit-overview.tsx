import { MapPin, Users } from 'lucide-react';

export default function SummitOverview() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          The Definitive Forum for AI-Driven Workforce Strategy
        </h2>
        <p className="text-gray-600 text-base max-w-3xl mb-6">
          OpenMind Workforce Transformation Summit 2026 brings together the world&apos;s most influential HR and business leaders to address the integration of AI Agents into the workplace. A strategic leadership summit for those shaping culture, talent, and people strategy in the age of intelligent automation.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-[#2563eb]" />
            Shanghai, China — 2026
          </div>
          <div className="flex items-center gap-2">
            <Users size={15} className="text-[#2563eb]" />
            300+ CHROs & HR Leaders
          </div>
        </div>
      </div>
    </section>
  );
}
