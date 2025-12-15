import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Wihngo",
  description: "Terms of Service for Wihngo platform.",
};

export default function TermsPage() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Terms of Service
        </h1>

        <p className="text-sm text-slate-500 mb-8">
          <strong>Last updated:</strong> December 15, 2025
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          By accessing wihngo.com, you agree to the following terms.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Platform role
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Wihngo is a community platform. It is not a charity, financial
          institution, or veterinary service.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Website usage
        </h2>
        <p className="text-slate-600 leading-relaxed">
          The website is provided for informational purposes only. The main
          Wihngo services are delivered through mobile applications.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          User content
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Content shown on the website originates from users of the Wihngo
          platform. Users remain the owners of their content.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          No guarantees
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Wihngo does not guarantee outcomes related to birds, stories, or
          support activities.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Limitation of liability
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Wihngo is not responsible for any loss or damage arising from the use
          of the website.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Governing law
        </h2>
        <p className="text-slate-600 leading-relaxed">
          These terms are governed by the laws of Estonia and the European
          Union.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Contact
        </h2>
        <p className="text-slate-600 leading-relaxed">
          For questions or support, contact:{" "}
          <a
            href="mailto:support@wihngo.com"
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            support@wihngo.com
          </a>
        </p>
      </div>
    </main>
  );
}
