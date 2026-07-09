import { MapPin, Users } from 'lucide-react';

export default function SummitOverview() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          A Focused Forum for AI-Driven Workforce Strategy
        </h2>
        <p className="text-gray-600 text-base max-w-3xl mb-6">
          OpenMind AI Workforce Transformation Forum 2026 brings together 50 business and HR leaders for practical discussion on integrating AI Agents into the workplace. It is a focused setting for peer exchange on culture, talent, and organizational design.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-[#2563eb]" />
            Shanghai, China — 2026
          </div>
          <div className="flex items-center gap-2">
            <Users size={15} className="text-[#2563eb]" />
            50 Senior Business &amp; HR Leaders
          </div>
        </div>
      </div>
    </section>
  );
}
