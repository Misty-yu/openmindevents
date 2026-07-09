import Link from 'next/link';

export default function FoundingPartner() {
  return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Become an Event Partner
              </h2>
              <p className="text-blue-100 text-sm">
                Support a focused exchange with 50 senior business and HR leaders.
              </p>
            </div>
            <Link
              href="/contact?interest=founding-partner"
              className="px-7 py-3 bg-white text-[#2563eb] font-semibold rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
  );
}
