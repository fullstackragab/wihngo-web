import { Metadata } from "next";
import DownloadSection from "@/components/DownloadSection";
import { getFAQsByCategory } from "@/lib/data";
import type { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Whingo",
  description:
    "Learn more about Whingo, how it works, and our commitment to birds and their humans.",
  openGraph: {
    title: "FAQ | Whingo",
    description:
      "Learn more about Whingo, how it works, and our commitment to birds and their humans.",
    type: "website",
  },
};

function FAQItem({ faq }: { faq: FAQ }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-slate-800 mb-4">{faq.question}</h3>
      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
    </div>
  );
}

export default function FAQPage() {
  const generalFAQs = getFAQsByCategory("general");
  const supportFAQs = getFAQsByCategory("support");
  const transparencyFAQs = getFAQsByCategory("transparency");
  const communityFAQs = getFAQsByCategory("community");

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-50 to-amber-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600">
            Everything you need to know about Whingo, our values, and how we
            operate.
          </p>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">General</h2>
            <p className="text-slate-600">
              Learn the basics about Whingo and what makes us different
            </p>
          </div>
          <div className="space-y-6">
            {generalFAQs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Support FAQs */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              Support & Contributions
            </h2>
            <p className="text-slate-600">
              How financial support works on Whingo
            </p>
          </div>
          <div className="space-y-6">
            {supportFAQs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Transparency FAQs */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              Transparency & Trust
            </h2>
            <p className="text-slate-600">
              Our commitment to openness and honesty
            </p>
          </div>
          <div className="space-y-6">
            {transparencyFAQs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Community FAQs */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              Community
            </h2>
            <p className="text-slate-600">Connecting with other bird lovers</p>
          </div>
          <div className="space-y-6">
            {communityFAQs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">💬</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We believe in complete transparency. If you have questions that
            aren&apos;t answered here, we&apos;d love to hear from you. Download
            the app to connect with our community and team.
          </p>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
