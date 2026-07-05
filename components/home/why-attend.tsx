export default function WhyAttend() {
  const reasons = [
    'Understand how AI Agents are redefining enterprise structure — not just workflows',
    'Connect with Founders, CEOs, and C-suite peers reshaping their organizations',
    'Gain strategic frameworks for AI-human collaboration at the organizational level',
    'Learn from real enterprise case studies and open peer debates on future models',
    'Explore what organizational reinvention looks like across different industries',
    'Discover how to lead transformation before disruption forces it upon you',
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
