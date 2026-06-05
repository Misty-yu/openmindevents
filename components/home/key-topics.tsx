export default function KeyTopics() {
  const topics = [
    'AI Agents & Workforce Strategy',
    'Human + AI Collaboration',
    'Talent Development in the AI Era',
    'Future of HR Leadership',
    'Organizational Design & Change',
    'Governance, Ethics & Risk',
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Key Topics</h2>
        <div className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <span
              key={topic}
              className="px-4 py-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-sm font-medium rounded-lg"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
