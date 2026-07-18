import { Globe, Award, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Insight First',
    description:
      'Every session, speaker, and workshop is curated for practical value. We do not tolerate vendor pitches dressed as thought leadership.',
  },
  {
    icon: Users,
    title: 'Peer-Led Community',
    description:
      'Our events are designed as conversations, not lectures. The most valuable exchange happens between senior practitioners.',
  },
  {
    icon: Globe,
    title: 'Genuinely International',
    description:
      'Our forums bring together relevant practitioners and decision-makers for focused, practical dialogue.',
  },
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description:
      'From venue selection to audio-visual production to content curation — quality is non-negotiable at every OpenMind event.',
  },
];

const team = [
  {
    name: 'Executive Director',
    company: 'OpenMind Events',
    photo: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
  },
  {
    name: 'Head of Content',
    company: 'OpenMind Events',
    photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
  },
  {
    name: 'Partnerships Director',
    company: 'OpenMind Events',
    photo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
  },
  {
    name: 'Head of Delegate Experience',
    company: 'OpenMind Events',
    photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              About OpenMind Events
            </h1>
            <p className="text-gray-700 text-lg font-light leading-relaxed mb-4">
              OpenMind Events produces focused forums, conferences, and
              forums for senior business leaders navigating the most significant
              shifts in organizational history.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We exist to create the spaces where the most important
              conversations happen — where CHROs, CEOs, and transformation
              leaders gather to think harder, connect deeper, and act faster on
              the challenges that matter.
            </p>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop"
              alt="Conference setting"
              className="rounded-2xl object-cover w-full h-80"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
            Our Purpose
          </span>
          <blockquote className="text-2xl sm:text-3xl font-light text-gray-900 leading-relaxed italic">
            &ldquo;To convene the world&apos;s most consequential conversations
            about the future of work, talent, and leadership in an era of
            intelligent transformation.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
              What We Stand For
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#2563eb]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
              The Team
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              The OpenMind Team
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-gray-300 group-hover:border-[#2563eb] transition-colors">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                <p className="text-gray-600 text-xs mt-0.5">{member.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
