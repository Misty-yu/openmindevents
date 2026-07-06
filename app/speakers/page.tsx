import type { Metadata } from 'next';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Speakers | OpenMind Workforce Transformation Forum 2026',
  description:
    'Meet the world-class speakers at OpenMind Workforce Transformation Forum 2026.',
};

const speakerData = [
  {
    name: 'Guest Speaker 1',
    title: 'Chief Human Resources Officer',
    company: 'Fortune 500 Enterprise',
    track: 'Workforce Strategy',
    bio: 'A global HR leader with 20+ years of experience transforming people functions across multinational organizations. Pioneered AI-driven workforce planning at scale.',
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Guest Speaker 2',
    title: 'Chief People Officer',
    company: 'Global Technology Firm',
    track: 'Leadership',
    bio: 'Internationally recognized for building high-performance cultures in fast-scaling technology companies. Keynote speaker at 30+ global HR conferences.',
    photo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Guest Speaker 3',
    title: 'VP of Talent Strategy',
    company: 'International Consultancy',
    track: 'Talent Development',
    bio: 'Expert in next-generation talent acquisition, skills-based organization design, and the integration of AI into talent management systems.',
    photo: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Guest Speaker 4',
    title: 'Global HR Director',
    company: 'Leading FinTech Company',
    track: 'HR Transformation',
    bio: 'Led a $200M HR digital transformation across 40 countries. Specializes in deploying AI tools that enhance employee experience without replacing human connection.',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Guest Speaker 5',
    title: 'Head of Organization Development',
    company: 'Global Manufacturing Corp',
    track: 'Org Design',
    bio: 'Leads OD strategy for a 200,000-person global workforce. Known for innovative change management methodologies in complex industrial environments.',
    photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Guest Speaker 6',
    title: 'Chief Executive Officer',
    company: 'AI Platform Leader',
    track: 'AI & Technology',
    bio: 'Building the next generation of enterprise AI Agent platforms. Provides strategic guidance to Fortune 100 organizations on AI workforce integration.',
    photo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Guest Speaker 7',
    title: 'VP of Workforce Transformation',
    company: 'Management Consulting Firm',
    track: 'Workforce Strategy',
    bio: 'Partner and practice leader advising global enterprises on the human dimensions of digital transformation. Author of acclaimed frameworks on AI-ready organizations.',
    photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Guest Speaker 8',
    title: 'Director of People Analytics',
    company: 'Multinational Retail Group',
    track: 'HR Analytics',
    bio: 'Pioneering the use of predictive analytics and AI to drive evidence-based people decisions at enterprise scale across 80 markets.',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
];

const tracks = ['All', 'Workforce Strategy', 'Leadership', 'Talent Development', 'HR Transformation', 'Org Design', 'AI & Technology', 'HR Analytics'];

export default function SpeakersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
            2026 Faculty
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Featured Speakers
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg font-light">
            World-class practitioners, C-Suite leaders, and pioneering thinkers
            shaping the future of work. Full speaker lineup to be announced.
          </p>
        </div>
      </section>

      {/* Tracks filter label */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {tracks.map((track) => (
              <span
                key={track}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border cursor-default transition-colors ${
                  track === 'All'
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#2563eb] hover:text-[#2563eb]'
                }`}
              >
                {track}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakerData.map((speaker, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#2563eb]/30 transition-all group"
              >
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-semibold rounded uppercase tracking-wide mb-2">
                    {speaker.track}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-gray-600 text-xs mt-0.5">{speaker.title}</p>
                  <p className="text-[#2563eb] text-xs font-medium mt-0.5 mb-3">
                    {speaker.company}
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                    {speaker.bio}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                      <Linkedin size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Apply CTA */}
          <div className="mt-14 bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Apply to Speak at Forum 2026
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              We are actively reviewing speaker applications from senior
              practitioners with compelling stories and original perspectives on
              AI, talent, and workforce transformation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#2563eb] text-white font-semibold rounded hover:bg-[#1d4ed8] transition-colors"
            >
              Submit Speaker Application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
