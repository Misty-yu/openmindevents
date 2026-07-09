import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sponsors & Partners | OpenMind AI Workforce Transformation Forum 2026',
  description:
    'Partner with OpenMind AI Workforce Transformation Forum 2026 and engage with 50 senior business and HR leaders.',
};

const packages = [
  {
    tier: 'Title Sponsor',
    price: 'Contact Us',
    availability: '1 Slot Available',
    highlight: true,
    color: 'border-amber-300 bg-gradient-to-b from-amber-50 to-white',
    headerBg: 'bg-amber-400',
    headerText: 'text-amber-900',
    benefits: [
      'Exclusive title naming rights across all forum materials',
      'Opening keynote speaking slot (30 min)',
      'Premium logo placement in all marketing',
      '10 delegate passes',
      'Double exhibition stand (prime location)',
      'Hosted roundtable (12 attendees)',
      'Full delegate list with contact details',
      'Post-event insights report co-branding',
      '12-month digital partner profile',
      'Press release co-authoring',
    ],
  },
  {
    tier: 'Gold Sponsor',
    price: 'Contact Us',
    availability: '3 Slots Available',
    highlight: false,
    color: 'border-yellow-300 bg-gradient-to-b from-yellow-50 to-white',
    headerBg: 'bg-yellow-400',
    headerText: 'text-yellow-900',
    benefits: [
      'Panel participation opportunity',
      'Premium logo placement across marketing',
      '6 delegate passes',
      'Exhibition stand (premium location)',
      'Hosted roundtable (8 attendees)',
      'Delegate list (opt-in contacts)',
      '6-month digital partner profile',
      'Conference bag insert',
      'Social media amplification campaign',
    ],
  },
  {
    tier: 'Silver Sponsor',
    price: 'Contact Us',
    availability: '6 Slots Available',
    highlight: false,
    color: 'border-gray-300 bg-gradient-to-b from-gray-50 to-white',
    headerBg: 'bg-gray-400',
    headerText: 'text-gray-900',
    benefits: [
      'Logo placement on forum website',
      '4 delegate passes',
      'Standard exhibition stand',
      'Digital programme listing',
      '3-month digital partner profile',
      'Conference bag insert',
      'Social media mention',
    ],
  },
  {
    tier: 'Exhibition Partner',
    price: 'Contact Us',
    availability: 'Multiple Available',
    highlight: false,
    color: 'border-blue-200 bg-gradient-to-b from-blue-50 to-white',
    headerBg: 'bg-[#2563eb]',
    headerText: 'text-white',
    benefits: [
      'Dedicated exhibition booth',
      '2 delegate passes',
      'Digital exhibition listing',
      'Lead scanner app access',
      'Post-event contact summary',
    ],
  },
];

const audiences = [
  { label: '50', desc: 'Senior Leaders' },
  { label: '30+', desc: 'Countries' },
  { label: '60%+', desc: 'C-Suite & VP Level' },
  { label: '85%', desc: 'Decision-Maker Budget Authority' },
];

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
            Partnership
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Sponsors & Partners
          </h1>
          <p className="text-gray-700 max-w-2xl text-lg font-light">
            Connect your brand to the most influential HR and business
            transformation audience in the market. Tailored packages to meet
            your business objectives.
          </p>
        </div>
      </section>

      {/* Audience stats */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <div key={a.label} className="text-center">
                <p className="text-4xl font-bold text-[#2563eb] mb-1">{a.label}</p>
                <p className="text-gray-300 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
              Packages
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Sponsorship Tiers
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto text-sm">
              All packages are customizable. Contact our partnership team to
              discuss bespoke arrangements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.tier}
                className={`border-2 rounded-xl overflow-hidden ${pkg.color} ${
                  pkg.highlight ? 'shadow-xl scale-[1.02]' : ''
                }`}
              >
                <div className={`px-5 py-4 ${pkg.headerBg}`}>
                  <div className="flex items-center justify-between">
                    <h3 className={`font-bold text-base ${pkg.headerText}`}>
                      {pkg.tier}
                    </h3>
                  </div>
                  <p className={`text-xs mt-0.5 ${pkg.headerText} opacity-80`}>
                    {pkg.availability}
                  </p>
                </div>
                <div className="p-5">
                  <p className="text-lg font-bold text-gray-900 mb-5">{pkg.price}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check size={13} className="text-[#2563eb] mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block text-center w-full py-2.5 bg-gray-900 text-white text-sm font-semibold rounded hover:bg-gray-800 transition-colors"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for a Bespoke Partnership?
          </h2>
          <p className="text-gray-600 mb-7 text-sm leading-relaxed">
            We can design a custom sponsorship programme aligned with your
            specific marketing and business development objectives. Contact us
            to request the full Sponsorship Prospectus.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#2563eb] text-white font-semibold rounded hover:bg-[#1d4ed8] transition-colors"
          >
            Request Prospectus
          </Link>
        </div>
      </section>
    </>
  );
}
