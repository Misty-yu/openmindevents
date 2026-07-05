export default function KeyTopics() {
  const topics = [
    'CEO Briefing: The New Organizational Revolution',
    'Enterprise AI Landscape & Intelligent Decision-Making',
    'AI Agents × New Structure × New Growth',
    'Organizational Restructuring, Not Just AI Tools',
    'Enterprise Case Studies & Real-World Practices',
    'Open Debate Forum: The Future of Organizations',
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
