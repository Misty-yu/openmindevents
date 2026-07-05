export default function WhoShouldAttend() {
  const roles = [
    'Founders',
    'CEO',
    'CXO',
    'Digital Transformation Leaders',
    'AI Leaders',
    'HR Leaders',
    'Innovation Business Leaders',
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Who Should Attend</h2>
        <p className="text-gray-600 text-sm mb-5 max-w-2xl">
          An invitation-only gathering of 60–100 senior decision-makers driving organizational
          transformation in the age of AI Agents.
        </p>
        <div className="flex flex-wrap gap-3">
          {roles.map((role) => (
            <span
              key={role}
              className="px-4 py-2 bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
