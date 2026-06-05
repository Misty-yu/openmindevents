export default function WhyThisSummitMatters() {
  const points = [
    'AI Agents are transforming HR and workforce management',
    'Organizations must prepare for AI-human collaboration',
    'CHROs need new workforce strategies',
    'Practical case studies and implementation insights',
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex-shrink-0">
            Why This Summit Matters
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-[#2563eb] rounded-full mt-1.5 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
