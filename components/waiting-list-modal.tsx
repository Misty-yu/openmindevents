'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';

interface WaitingListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitingListModal({ isOpen, onClose }: WaitingListModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', company: '', jobTitle: '', email: '', phone: '' });
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 flex items-center justify-between px-6 py-5">
          <h2 className="text-xl font-bold text-gray-900">Join Waiting List</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Send size={24} className="text-[#2563eb]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Thank you for your interest.
              </h3>
              <p className="text-gray-600 text-sm">
                Our team will contact you with summit updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-gray-600 text-sm mb-5">
                Be among the first to know when registration opens. Secure your place on our waiting list.
              </p>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Company *
                </label>
                <input
                  name="company"
                  required
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                  placeholder="Acme Corporation"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Job Title *
                </label>
                <input
                  name="jobTitle"
                  required
                  value={form.jobTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                  placeholder="Chief People Officer"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                  placeholder="+1 (000) 000-0000"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2 mt-6"
              >
                Join Waiting List
                <Send size={15} />
              </button>

              <p className="text-xs text-gray-600 text-center">
                We respect your privacy. Your details will not be shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
