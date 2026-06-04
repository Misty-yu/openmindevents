import { Users } from 'lucide-react';

const attendees = [
  'CHRO',
  'HR Director',
  'Head of Talent',
  'Organizational Development Leader',
  'CEO',
  'COO',
];

export default function WhoShouldAttend() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
            Target Audience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Who Should Attend
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This summit is designed for senior business leaders responsible for workforce strategy, talent management, and organizational transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {attendees.map((attendee) => (
            <div
              key={attendee}
              className="flex items-center gap-3 p-5 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg hover:shadow-md hover:border-[#2563eb]/30 transition-all group"
            >
              <div className="w-10 h-10 bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users size={18} className="text-[#2563eb]" />
              </div>
              <span className="font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                {attendee}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
