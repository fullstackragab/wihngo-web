import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-teal-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-4xl transition-transform group-hover:scale-110">
              🐦
            </div>
            <span className="text-2xl font-bold text-slate-800">Wihngo</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/stories"
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              Stories
            </Link>
            <Link
              href="#download"
              className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors"
            >
              Download App
            </Link>
          </div>

          <button className="md:hidden text-slate-600" aria-label="Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
