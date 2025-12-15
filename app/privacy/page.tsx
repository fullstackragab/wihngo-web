import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Wihngo",
  description:
    "Wihngo respects your privacy and is committed to protecting your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-slate-500 mb-8">
          <strong>Last updated:</strong> December 15, 2025
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Wihngo respects your privacy and is committed to protecting your
          personal data.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Who we are
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Wihngo is a platform operated in the European Union. The company is in
          the process of registration in Estonia.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          What data we collect
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          When you visit wihngo.com, we may collect:
        </p>
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>
            Basic technical data (such as IP address, browser type, device
            information)
          </li>
          <li>Anonymous usage data for website performance and analytics</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mt-4">
          The website is read-only. No accounts, payments, or interactions are
          performed on the website.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Why we collect this data
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          We collect this data to:
        </p>
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>Ensure the website works correctly</li>
          <li>Improve performance and user experience</li>
          <li>Maintain security</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Legal basis
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Data is processed under the General Data Protection Regulation (GDPR)
          based on legitimate interest.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Data sharing
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We do not sell your data. Some data may be processed by trusted
          service providers (such as analytics or hosting services).
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Data retention
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Data is kept only as long as necessary for the purposes described
          above.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Your rights
        </h2>
        <p className="text-slate-600 leading-relaxed">
          You have the right to access, correct, or request deletion of your
          personal data.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          Contact
        </h2>
        <p className="text-slate-600 leading-relaxed">
          For privacy-related questions, contact:{" "}
          <a
            href="mailto:privacy@wihngo.com"
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            privacy@wihngo.com
          </a>
        </p>
      </div>
    </main>
  );
}
