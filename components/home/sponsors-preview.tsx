import Link from 'next/link';

const tiers = [
  {
    tier: 'Title Sponsor',
    slots: '1 Available',
    color: 'border-amber-300 bg-amber-50',
    labelColor: 'text-amber-800 bg-amber-100',
    description:
      'Maximum brand visibility across all forum touchpoints. Keynote speaking slot included.',
    placeholders: ['Your Brand Here'],
  },
  {
    tier: 'Gold Sponsor',
    slots: '3 Available',
    color: 'border-yellow-300 bg-yellow-50',
    labelColor: 'text-yellow-800 bg-yellow-100',
    description:
      'Premium positioning with panel participation, exhibition booth, and branded content opportunities.',
    placeholders: ['Gold Partner', 'Gold Partner', 'Gold Partner'],
  },
  {
    tier: 'Silver Sponsor',
    slots: '6 Available',
    color: 'border-gray-300 bg-gray-50',
    labelColor: 'text-gray-700 bg-gray-200',
    description:
      'Strong brand presence with dedicated exhibition space, digital placements, and delegate access.',
    placeholders: ['Silver Partner', 'Silver Partner', 'Silver Partner', 'Silver Partner', 'Silver Partner', 'Silver Partner'],
  },
  {
    tier: 'Exhibition Partner',
    slots: 'Multiple',
    color: 'border-blue-200 bg-blue-50',
    labelColor: 'text-blue-700 bg-blue-100',
    description:
      'Showcase your products and services directly to senior decision-makers throughout the event.',
    placeholders: ['Exhibitor', 'Exhibitor', 'Exhibitor'],
  },
];

export default function SponsorsPreview() {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
              Partnership Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sponsors & Partners
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Engage directly with 50 senior business and HR leaders. Partnership packages
              for every objective — brand awareness, lead generation, thought
              leadership, and more.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {tiers.map((tier) => (
              <div
                key={tier.tier}
                className={`border-2 rounded-xl p-6 ${tier.color}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-base">{tier.tier}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${tier.labelColor}`}>
                    {tier.slots}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {tier.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tier.placeholders.map((p, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 bg-white border-2 border-dashed border-gray-300 rounded text-gray-400 text-xs font-medium"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/sponsors"
              className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition-colors"
            >
              View Sponsorship Packages
            </Link>
          </div>
        </div>
    </section>
  );
}
