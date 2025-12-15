import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🐦</span>
              <span className="text-xl font-bold text-slate-800">Wihngo</span>
            </div>
            <p className="text-slate-600 mb-4">
              A love-centric community for people who care about birds.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/stories"
                  className="text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Download</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#download"
                  className="text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Android
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-slate-600 hover:text-teal-600 transition-colors"
                >
                  iOS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-300 mt-8 pt-8 text-center text-sm text-slate-500">
          <div className="flex justify-center items-center gap-2 flex-wrap mb-4">
            <Link
              href="/privacy"
              className="hover:text-teal-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="hover:text-teal-600 transition-colors"
            >
              Terms
            </Link>
            <span>·</span>
            <Link
              href="/contact"
              className="hover:text-teal-600 transition-colors"
            >
              Contact
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Wihngo. Built with love for birds
            and their humans.
          </p>
        </div>
      </div>
    </footer>
  );
}
