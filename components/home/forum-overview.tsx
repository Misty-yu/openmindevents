import { MapPin, Users, Calendar, Clock } from 'lucide-react';

export default function ForumOverview() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          A Closed-Door Forum for Enterprise Reinvention
        </h2>
        <p className="text-gray-600 text-base max-w-3xl mb-8">
          OpenMind AI Agent Workforce Transformation Forum 2026 convenes Founders, CEOs, CXOs,
          HR leaders, AI leaders, digital transformation leaders, and innovation and business
          leaders to explore how AI Agents are fundamentally reshaping organizational structures,
          leadership models, and business growth strategies. This invitation-only forum delivers
          peer-level dialogue and actionable frameworks — not vendor pitches.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <Calendar size={18} className="text-[#2563eb] mb-3" />
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Date</p>
            <p className="font-semibold text-gray-900 text-sm">Friday, July 31, 2026</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <Clock size={18} className="text-[#2563eb] mb-3" />
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Time</p>
            <p className="font-semibold text-gray-900 text-sm">13:30 – 17:30</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <MapPin size={18} className="text-[#2563eb] mb-3" />
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Location</p>
            <p className="font-semibold text-gray-900 text-sm">Huangpu District, Shanghai</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <Users size={18} className="text-[#2563eb] mb-3" />
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Capacity</p>
            <p className="font-semibold text-gray-900 text-sm">
              50 Founders, CEOs, CXOs, HR leaders, AI leaders, digital transformation leaders,
              innovation and business leaders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
