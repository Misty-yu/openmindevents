import { Zap, Users, TrendingUp, BookOpen } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'AI Agents are transforming HR and workforce management',
    description:
      'Autonomous AI is reshaping how organizations plan, deploy, and develop talent at scale.',
  },
  {
    icon: Users,
    title: 'Organizations must prepare for AI-human collaboration',
    description:
      'The future of work requires new models for teams where AI agents and humans work together.',
  },
  {
    icon: TrendingUp,
    title: 'CHROs need new workforce strategies',
    description:
      'Traditional HR approaches are becoming obsolete. Strategic readiness is critical.',
  },
  {
    icon: BookOpen,
    title: 'Practical case studies and implementation insights',
    description:
      'Learn from enterprises that are already navigating AI integration successfully.',
  },
];

export default function WhyThisSummitMatters() {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
            Context & Relevance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why This Summit Matters
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-xl p-6 hover:shadow-md hover:border-[#2563eb]/30 transition-all group"
            >
              <div className="w-11 h-11 bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-lg flex items-center justify-center mb-4">
                <reason.icon size={20} className="text-[#2563eb]" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-[#2563eb] transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
