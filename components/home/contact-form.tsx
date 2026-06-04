'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import WaitingListModal from '@/components/waiting-list-modal';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <WaitingListModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                Start Your Journey
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Interested in attending, speaking, or becoming a founding partner? Our team would love to hear from you.
              </p>

              <div className="space-y-5">
                {[
                  { label: 'For Delegates', desc: 'Join our waiting list and be among the first to register.' },
                  { label: 'For Speakers', desc: 'Share your expertise on workforce transformation and AI.' },
                  { label: 'For Partners', desc: 'Explore sponsorship and partnership opportunities.' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-1 bg-[#2563eb] rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={22} className="text-[#2563eb]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We&apos;ve received your enquiry and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
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
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                        placeholder="Acme Corp"
                      />
                    </div>
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
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                      placeholder="Chief People Officer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                        placeholder="+1 000 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Interest Type
                    </label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="attend">Attend as Delegate</option>
                      <option value="speak">Apply to Speak</option>
                      <option value="partner">Become a Partner</option>
                      <option value="press">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all resize-none placeholder:text-gray-400"
                      placeholder="Tell us more about your interest..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2"
                  >
                    Submit Enquiry
                    <Send size={15} />
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    By submitting, you agree to our Privacy Policy. We will not
                    share your details with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
