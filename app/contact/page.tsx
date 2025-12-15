import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Wihngo",
  description: "Get in touch with Wihngo.",
};

export default function ContactPage() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-6xl mb-6">📩</div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
          Contact
        </h1>

        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          For questions or support, contact:
        </p>

        <a
          href="mailto:support@wihngo.com"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg"
        >
          support@wihngo.com
        </a>

        <div className="mt-16 pt-16 border-t border-slate-200">
          <p className="text-slate-600 mb-4">For privacy-related questions:</p>
          <a
            href="mailto:privacy@wihngo.com"
            className="text-teal-600 hover:text-teal-700 font-medium text-lg"
          >
            privacy@wihngo.com
          </a>
        </div>
      </div>
    </main>
  );
}
