'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
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
  };

  return (
    <section id="contact" className="py-14 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Start Your Journey</h2>
        <p className="text-gray-600 text-sm mb-8">
          Interested in attending, speaking, or partnering? Reach out to our team.
        </p>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send size={22} className="text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 text-sm">Our team will contact you with summit updates.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name *"
              className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
            />
            <input
              name="company"
              required
              value={form.company}
              onChange={handleChange}
              placeholder="Company *"
              className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
            />
            <input
              name="jobTitle"
              required
              value={form.jobTitle}
              onChange={handleChange}
              placeholder="Job Title *"
              className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
            />
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Email *"
              className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
            />
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              className="sm:col-span-2 px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10 transition-all placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="sm:col-span-2 py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2"
            >
              Submit <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
