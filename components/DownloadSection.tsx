export default function DownloadSection() {
  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-br from-teal-50 to-amber-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          Download the app
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          The full Wihngo experience lives in the mobile app.
        </p>

        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-teal-600">Coming Soon</p>
            <p className="text-slate-600">Available on iOS & Android</p>
          </div>
        </div>
      </div>
    </section>
  );
}
