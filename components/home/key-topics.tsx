import { Brain, Users2, TrendingUp, Building2, ShieldCheck, Lightbulb } from 'lucide-react';

const topics = [
  {
    icon: Brain,
    title: 'AI Agents & Workforce Strategy',
    description:
      'How AI Agents are redefining workforce planning, organizational structure, and talent deployment at enterprise scale.',
  },
  {
    icon: Users2,
    title: 'Human + AI Collaboration',
    description:
      'Designing and managing high-performance hybrid teams where human judgment and AI capabilities complement each other.',
  },
  {
    icon: TrendingUp,
    title: 'Talent Development in the AI Era',
    description:
      'Rethinking L&D, skills frameworks, career paths, and upskilling strategies for an AI-augmented workforce.',
  },
  {
    icon: Lightbulb,
    title: 'Future of HR Leadership',
    description:
      'The evolving CHRO mandate — from people operations to architecting intelligent, adaptive organizations.',
  },
  {
    icon: Building2,
    title: 'Organizational Design & Change',
    description:
      'Structural and cultural frameworks for navigating rapid AI-driven transformation across large enterprises.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance, Ethics & Risk',
    description:
      'Policy, ethics, bias mitigation, and responsible AI governance — ensuring human oversight at every layer.',
  },
];

export default function KeyTopics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
            Summit Themes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Key Topics
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Six strategic themes that define the agenda — each examined through
            the lens of real organizational challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 hover:border-[#2563eb]/30 hover:bg-blue-50/30 transition-all group bg-white"
            >
              <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <Icon size={20} className="text-[#2563eb]" />
              </div>
              <h3 className="text-gray-900 font-semibold text-base mb-2 group-hover:text-[#2563eb] transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
