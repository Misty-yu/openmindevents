'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Send } from 'lucide-react';

const interestedAs = [
  'Delegate / Attendee',
  'Speaker',
  'Sponsor / Title Sponsor',
  'Sponsor / Gold Sponsor',
  'Sponsor / Silver Sponsor',
  'Exhibition Partner',
  'Media / Press Partner',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
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
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-700 max-w-xl text-lg font-light">
            Whether you want to attend, speak, sponsor, or partner — our team
            is ready to help. Complete the form or reach us directly.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left sidebar */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-5 mb-8">
                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-medium tracking-wide mb-0.5">
                      General Enquiries
                    </p>
                    <p className="text-gray-900 text-sm font-medium">
                      events@openmind-events.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-medium tracking-wide mb-0.5">
                      Sponsorship
                    </p>
                    <p className="text-gray-900 text-sm font-medium">
                      sponsors@openmind-events.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-medium tracking-wide mb-0.5">
                      Phone
                    </p>
                    <p className="text-gray-900 text-sm font-medium">
                      +1 (000) 000-0000
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-medium tracking-wide mb-0.5">
                      Headquarters
                    </p>
                    <p className="text-gray-900 text-sm font-medium">
                      International — To Be Announced
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Follow OpenMind Events
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
                  >
                    <Twitter size={15} />
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-gray-900 rounded-xl p-5 text-white">
                <p className="font-semibold mb-2 text-sm">
                  Response Commitment
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  All enquiries receive a response within 2 business days. For
                  urgent sponsorship or speaker enquiries, please indicate in
                  your message.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Send size={24} className="text-[#2563eb]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Message Sent
                    </h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Thank you for reaching out. A member of the OpenMind team
                      will respond within 2 business days.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                            placeholder="Jane Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1.5">
                            Company / Organization *
                          </label>
                          <input
                            name="company"
                            required
                            value={form.company}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                            placeholder="Acme Corporation"
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
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                          placeholder="Chief People Officer"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1.5">
                            Business Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
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
                            className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
                            placeholder="+1 000 000 0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">
                          I am enquiring as
                        </label>
                        <select
                          name="interest"
                          value={form.interest}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all"
                        >
                          <option value="">Select an option</option>
                          {interestedAs.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all resize-none placeholder:text-gray-400"
                          placeholder="Tell us what you are looking for — delegate enquiry, speaker application, sponsorship interest, or anything else..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2"
                      >
                        Send Message
                        <Send size={15} />
                      </button>

                      <p className="text-xs text-gray-600 text-center">
                        By submitting, you agree to our Privacy Policy. Your
                        details will not be shared with third parties without
                        consent.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
