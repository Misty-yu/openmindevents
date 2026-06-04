'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Summit 2026', href: '/summit' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'News', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-gray-200'
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
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
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === link.href
                    ? 'text-[#2563eb] bg-blue-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-[#2563eb] text-white text-sm font-semibold rounded hover:bg-[#1d4ed8] transition-colors"
            >
              Register Interest
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-900 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                  pathname === link.href
                    ? 'text-[#2563eb] bg-blue-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="/contact"
                className="block text-center px-5 py-2.5 bg-[#2563eb] text-white text-sm font-semibold rounded hover:bg-[#1d4ed8] transition-colors"
              >
                Register Interest
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
