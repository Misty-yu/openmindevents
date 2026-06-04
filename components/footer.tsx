import Link from 'next/link';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  summit: [
    { label: 'Summit Overview', href: '/summit' },
    { label: 'Agenda', href: '/agenda' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Sponsors & Partners', href: '/sponsors' },
  ],
  resources: [
    { label: 'Industry Insights', href: '/insights' },
    { label: 'About OpenMind', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Become a Speaker', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#2563eb] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">OM</span>
              </div>
              <div>
                <span className="text-gray-900 font-bold text-base tracking-tight leading-none block">
                  OpenMind
                </span>
                <span className="text-[#2563eb] text-[10px] uppercase tracking-widest leading-none">
                  Events
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-sm text-gray-600">
              OpenMind Events produces world-class summits and conferences for
              senior business leaders navigating the intersection of AI,
              talent, and organizational transformation.
            </p>
            <div className="space-y-2 text-sm mb-5">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#2563eb]" />
                <span>contact@openmindevents.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#2563eb]" />
                <span>+1 (000) 000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#2563eb]" />
                <span>Shanghai, China</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Summit Links */}
          <div>
            <h4 className="text-gray-900 text-sm font-semibold uppercase tracking-wider mb-4">
              The Summit
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.summit.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-900 text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>&copy; 2026 OpenMind Events. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
