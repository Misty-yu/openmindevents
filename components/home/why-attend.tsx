import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: 'Learn how AI Agents are transforming HR and workforce management',
    description:
      'Understand the emerging landscape of AI-driven workforce transformation and its strategic implications.',
  },
  {
    title: 'Connect with CHROs and HR leaders',
    description:
      'Build relationships with peer executives and industry pioneers navigating similar challenges.',
  },
  {
    title: 'Discover future workforce strategies',
    description:
      'Explore innovative approaches to talent development, organizational design, and human-AI collaboration.',
  },
  {
    title: 'Explore practical AI adoption case studies',
    description:
      'Learn from real-world implementations and proven methodologies from leading enterprises.',
  },
];

export default function WhyAttend() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
            Why Attend
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What You'll Gain
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#2563eb]/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle
                  size={18}
                  className="text-[#2563eb] flex-shrink-0 mt-0.5"
                />
                <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-[#2563eb] transition-colors">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-7">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
