export default function WhyAttend() {
  const reasons = [
    'Learn how AI Agents are transforming HR and workforce management',
    'Connect with CHROs and HR leaders',
    'Discover future workforce strategies',
    'Explore practical AI adoption case studies',
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Why Attend</h2>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
          {reasons.map((r) => (
            <li key={r} className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="w-1.5 h-1.5 bg-[#2563eb] rounded-full mt-1.5 flex-shrink-0" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
