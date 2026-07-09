'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import WaitingListModal from '@/components/waiting-list-modal';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Forum 2026', href: '/summit' },
  { label: 'Agenda', href: '/agenda' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <WaitingListModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

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
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="flex items-center">
                <div className="bg-[#2563eb] rounded flex items-center justify-center px-2 py-1.5">
                  <span className="text-white font-bold text-sm tracking-wider">OME</span>
                </div>
                <div className="bg-gray-900 rounded flex items-center justify-center px-2 py-1.5 ml-0.5">
                  <span className="text-white font-bold text-sm tracking-wider">JR</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-gray-900 font-bold text-sm tracking-tight leading-none block">
                  OpenMind Events
                </span>
                <span className="text-[#2563eb] text-[9px] uppercase tracking-widest leading-none">
                  By JR Group
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
              <button
                onClick={() => setModalOpen(true)}
                className="ml-4 px-5 py-2 bg-[#2563eb] text-white text-sm font-semibold rounded hover:bg-[#1d4ed8] transition-colors"
              >
                Join Waiting List
              </button>
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
                <button
                  onClick={() => setModalOpen(true)}
                  className="block w-full text-center px-5 py-2.5 bg-[#2563eb] text-white text-sm font-semibold rounded hover:bg-[#1d4ed8] transition-colors"
                >
                  Join Waiting List
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
