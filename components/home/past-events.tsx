import { Globe, Building2, Handshake, ExternalLink } from 'lucide-react';

const events = [
  {
    year: '2025',
    title: 'OpenMind Middle East Global Expansion & COMEX Oman Forum',
    subtitle: '聚焦中东出海 — 暨2025中东阿曼信息通讯与技术博览会中国区发布会',
    description:
      'A landmark event connecting China and the Middle East, featuring strategic partnerships with COMEX Oman and the Arab Research Bureau (ARB). OpenMind officially opened the door for Chinese enterprises entering the Middle East market.',
    highlights: [
      'Strategic partnership with COMEX Oman',
      'Speakers from ARB, Dubai IFZA, Alibaba, and more',
      'B2B matchmaking for China-Middle East business',
      'Focus on Oman Vision 2040 & Saudi Vision 2030',
    ],
    location: 'Shanghai, China',
    icon: Globe,
    link: 'https://mp.weixin.qq.com/s/bEbS4LMsRpF0d7lsJlnVkg',
  },
  {
    year: '2025',
    title: 'OpenMind China-Middle East Innovation & Investment Forum',
    subtitle: '中东出海与创新系列 — 深度洞察数字经济与智慧城市机遇',
    description:
      'An in-depth forum exploring digital economy, smart city development, and market entry strategies across the Middle East region. Expert insights on regulatory environments and investment trends for Chinese enterprises.',
    highlights: [
      'Deep dive into Middle East digital economy',
      'Policy and regulatory guidance for market entry',
      'Smart city and ICT development strategies',
      'Cross-border partnership facilitation',
    ],
    location: 'Shanghai, China',
    icon: Building2,
    link: 'https://mp.weixin.qq.com/s/EwfQ7HxZt8acMPqHr_MecA',
  },
];

export default function PastEvents() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
            Our Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Past Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            OpenMind Events has a proven track record of delivering high-impact forums that connect global leaders and drive real business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-xl p-7 hover:shadow-lg hover:border-[#2563eb]/20 transition-all group"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <event.icon size={22} className="text-[#2563eb]" />
                </div>
                <div>
                  <span className="text-[#2563eb] text-xs font-semibold tracking-wider uppercase">
                    {event.year}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base leading-snug mt-0.5 group-hover:text-[#2563eb] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5">{event.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                {event.description}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {event.highlights.map((h, j) => (
                  <div key={j} className="flex items-start gap-1.5">
                    <Handshake size={12} className="text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-xs leading-snug">{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-gray-500 text-xs flex items-center gap-1">
                  <Building2 size={12} />
                  {event.location}
                </span>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#2563eb] text-xs font-medium hover:gap-2 transition-all"
                >
                  View Details
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            OpenMind is committed to creating platforms where ideas meet opportunity.{' '}
            <span className="text-[#2563eb] font-medium">More events coming soon.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
