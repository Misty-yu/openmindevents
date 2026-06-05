'use client';

import { useState } from 'react';
import WaitingListModal from '@/components/waiting-list-modal';

export default function FoundingPartner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <WaitingListModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Become a Founding Partner
              </h2>
              <p className="text-blue-100 text-sm">
                Help shape the future of workforce transformation. Connect with 300+ senior HR and business leaders.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3 bg-white text-[#2563eb] font-semibold rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
