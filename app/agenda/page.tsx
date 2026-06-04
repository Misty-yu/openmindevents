import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agenda | OpenMind Workforce Transformation Summit 2026',
  description:
    'Explore the full agenda for OpenMind Workforce Transformation Summit 2026.',
};

const days = [
  {
    label: 'Day One',
    theme: 'The AI Transformation Imperative',
    sessions: [
      { time: '08:00', type: 'Registration', title: 'Welcome Registration & Networking Breakfast', speaker: '' },
      { time: '09:00', type: 'Opening', title: 'Opening Ceremony & Welcome Address', speaker: 'Summit Chair' },
      { time: '09:20', type: 'Keynote', title: 'The Age of AI Agents: What Every HR Leader Must Understand Now', speaker: 'Guest Keynote Speaker' },
      { time: '10:00', type: 'Keynote', title: 'From Automation to Agency: How AI is Changing the Nature of Work', speaker: 'Invited Global Leader' },
      { time: '10:40', type: 'Break', title: 'Networking Coffee Break', speaker: '' },
      { time: '11:10', type: 'Panel', title: 'Boardroom Perspectives: What CEOs & CHROs Expect from Each Other in the AI Era', speaker: 'Panel of 4 Senior Leaders' },
      { time: '12:10', type: 'Session', title: 'Workforce Strategy in an Agent-First World: A Practical Framework', speaker: 'Strategy Partner' },
      { time: '13:00', type: 'Break', title: 'Networking Lunch & Exhibition', speaker: '' },
      { time: '14:30', type: 'Workshop', title: 'Workshop A: Building Your AI Workforce Readiness Roadmap', speaker: 'Workshop Facilitator' },
      { time: '14:30', type: 'Workshop', title: 'Workshop B: Designing Human + AI Teams: What Works', speaker: 'Workshop Facilitator' },
      { time: '15:30', type: 'Case Study', title: 'How We Deployed AI Agents Across 50,000 Employees: Lessons from the Field', speaker: 'Global CHRO' },
      { time: '16:10', type: 'Break', title: 'Networking Break & Exhibition', speaker: '' },
      { time: '16:40', type: 'Panel', title: 'The CHRO of 2027: Redefining the People Function for an AI-Augmented Enterprise', speaker: 'Panel of CHROs' },
      { time: '17:40', type: 'Close', title: 'Day One Close & Evening Reception', speaker: '' },
    ],
  },
  {
    label: 'Day Two',
    theme: 'Talent, Leadership & Culture',
    sessions: [
      { time: '08:30', type: 'Registration', title: 'Morning Networking Breakfast', speaker: '' },
      { time: '09:00', type: 'Keynote', title: 'Talent in the Age of AI: Rethinking Skills, Roles, and Career Architecture', speaker: 'Guest Keynote Speaker' },
      { time: '09:40', type: 'Session', title: 'The New Employee Value Proposition: Attracting and Retaining Talent Alongside AI', speaker: 'Talent Strategy Leader' },
      { time: '10:20', type: 'Break', title: 'Networking Break', speaker: '' },
      { time: '10:45', type: 'Roundtable', title: 'Roundtables: Deep-Dive Peer Exchange on AI + People Challenges', speaker: 'Facilitated Groups' },
      { time: '12:00', type: 'Panel', title: 'L&D Reimagined: From Training to Capability Ecosystems in an AI World', speaker: 'L&D Executives Panel' },
      { time: '13:00', type: 'Break', title: 'Networking Lunch & Exhibition', speaker: '' },
      { time: '14:15', type: 'Keynote', title: 'Organizational Design for Adaptive Enterprises: Structure Follows Strategy', speaker: 'OD Research Leader' },
      { time: '15:00', type: 'Case Study', title: 'Change Management at Scale: Driving Cultural Transformation with AI Integration', speaker: 'Fortune 100 CHO' },
      { time: '15:45', type: 'Break', title: 'Afternoon Break', speaker: '' },
      { time: '16:15', type: 'Panel', title: 'Ethics, Governance & Accountability: The HR Leader\'s Role in Responsible AI', speaker: 'Ethics & Risk Panel' },
      { time: '17:00', type: 'Close', title: 'Summit Closing Keynote & Key Takeaways', speaker: 'Summit Chair' },
      { time: '17:30', type: 'Close', title: 'Closing Reception & Farewell', speaker: '' },
    ],
  },
];

const typeColors: Record<string, string> = {
  Keynote: 'bg-blue-50 text-blue-700 border-blue-200',
  Panel: 'bg-purple-50 text-purple-700 border-purple-200',
  Workshop: 'bg-green-50 text-green-700 border-green-200',
  Session: 'bg-gray-100 text-gray-700 border-gray-200',
  'Case Study': 'bg-amber-50 text-amber-700 border-amber-200',
  Roundtable: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Registration: 'bg-gray-50 text-gray-600 border-gray-200',
  Break: 'bg-gray-50 text-gray-600 border-gray-200',
  Opening: 'bg-gray-50 text-gray-700 border-gray-200',
  Close: 'bg-gray-50 text-gray-600 border-gray-200',
};

export default function AgendaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
            Programme
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Summit Agenda
          </h1>
          <p className="text-gray-700 max-w-2xl text-lg font-light">
            A full two-day programme of keynotes, panels, workshops, and
            roundtables. Agenda subject to change as speakers are confirmed.
          </p>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-10 text-sm text-yellow-800">
            <strong>Note:</strong> The agenda below is indicative and will be
            updated as speakers and sessions are confirmed. All times are local
            summit time.
          </div>

          {days.map((day) => (
            <div key={day.label} className="mb-14">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{day.label}</h2>
                  <p className="text-[#2563eb] text-sm font-medium">{day.theme}</p>
                </div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <div className="space-y-2">
                {day.sessions.map((session, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-4 rounded-lg border bg-white ${
                      ['Break', 'Registration', 'Close'].includes(session.type)
                        ? 'opacity-60'
                        : 'hover:shadow-sm transition-shadow'
                    }`}
                  >
                    <div className="w-14 flex-shrink-0">
                      <span className="text-[#2563eb] font-mono text-sm font-bold">
                        {session.time}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className={`inline-block px-2 py-0.5 text-[11px] font-semibold rounded border ${
                            typeColors[session.type] || 'bg-gray-100 text-gray-600 border-gray-200'
                          }`}
                        >
                          {session.type}
                        </span>
                      </div>
                      <p className="font-medium text-gray-900 text-sm leading-snug">
                        {session.title}
                      </p>
                      {session.speaker && (
                        <p className="text-gray-600 text-xs mt-1">
                          {session.speaker}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
