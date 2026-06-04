import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News | OpenMind Workforce Transformation Summit 2026',
  description:
    'Industry analysis, research, and perspectives on AI, workforce strategy, and the future of HR leadership.',
};

const articles = [
  {
    category: 'Workforce Strategy',
    title: 'Five Workforce Planning Assumptions That AI Agents Will Invalidate by 2027',
    excerpt:
      'Traditional headcount planning, role-based org structures, and skills inventories are all built on assumptions that autonomous AI Agents will fundamentally disrupt. Here is what HR leaders need to reconsider now.',
    readTime: '8 min read',
    date: 'June 2026',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    featured: true,
  },
  {
    category: 'HR Leadership',
    title: 'The New CHRO Mandate: From People Operations to Organizational Architecture',
    excerpt:
      'As AI Agents take over routine tasks, the CHRO role is evolving toward strategic organizational design. The question is whether HR leaders are ready to make that transition.',
    readTime: '6 min read',
    date: 'May 2026',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    featured: false,
  },
  {
    category: 'Talent Development',
    title: 'Reskilling at Scale: How Global Enterprises Are Preparing Workforces for AI Collaboration',
    excerpt:
      'Building AI literacy is not enough. Leading companies are investing in metacognitive skills, systems thinking, and human-AI teaming capabilities that will define the future workforce.',
    readTime: '7 min read',
    date: 'May 2026',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    featured: false,
  },
  {
    category: 'Ethics & Governance',
    title: 'Who Governs the AI Agent? The Emerging Role of HR in Technology Ethics',
    excerpt:
      'As AI Agents make increasingly consequential decisions about hiring, performance, and promotion, HR must step into the governance vacuum and establish clear accountability frameworks.',
    readTime: '5 min read',
    date: 'April 2026',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    featured: false,
  },
  {
    category: 'Org Design',
    title: 'The Adaptive Organization: Structural Models for an AI-Augmented Enterprise',
    excerpt:
      'Traditional hierarchies were built for information scarcity. AI changes the information landscape entirely. Here are the organizational structures best suited to thrive.',
    readTime: '9 min read',
    date: 'April 2026',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    featured: false,
  },
  {
    category: 'People Analytics',
    title: 'From Descriptive to Predictive: The Analytics Maturity Journey in AI-Ready HR Functions',
    excerpt:
      'Most HR functions are still operating with dashboards and lagging indicators. The organizations leading AI transformation have moved to real-time predictive analytics embedded in workflow.',
    readTime: '6 min read',
    date: 'March 2026',
    image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  'Workforce Strategy': 'bg-blue-100 text-blue-700',
  'HR Leadership': 'bg-purple-100 text-purple-700',
  'Talent Development': 'bg-green-100 text-green-700',
  'Ethics & Governance': 'bg-amber-100 text-amber-700',
  'Org Design': 'bg-cyan-100 text-cyan-700',
  'People Analytics': 'bg-gray-100 text-gray-700',
};

export default function InsightsPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
            Research & Analysis
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Industry News & Insights
          </h1>
          <p className="text-gray-700 max-w-2xl text-lg font-light">
            Perspectives, research, and analysis from the OpenMind editorial
            team and our global faculty — curated for senior HR and business
            leaders.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <div className="mb-12 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="grid lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-2.5 py-1 rounded text-xs font-semibold ${categoryColors[featured.category] || 'bg-gray-100 text-gray-700'}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-[#2563eb] font-medium bg-blue-100 px-2 py-0.5 rounded">
                    Featured
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#2563eb] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                    <span>{featured.date}</span>
                  </div>
                  <button className="inline-flex items-center gap-1.5 text-[#2563eb] text-sm font-medium hover:gap-2.5 transition-all">
                    Read Article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-[#2563eb]/30 transition-all group"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#2563eb] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {article.readTime}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <button className="text-[#2563eb] text-xs font-medium flex items-center gap-1 hover:gap-1.5 transition-all">
                      Read <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-14 bg-gray-900 rounded-2xl p-10 text-center">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
              Stay Informed
            </span>
            <h2 className="text-2xl font-bold text-white mb-3">
              Subscribe to OpenMind Insights
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              Monthly analysis on AI, workforce transformation, and HR
              leadership — delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#2563eb]"
              />
              <button className="px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
