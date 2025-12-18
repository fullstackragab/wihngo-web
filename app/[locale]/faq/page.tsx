import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import DownloadSection from "@/components/DownloadSection";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
      siteName: "Wihngo",
      url: "https://wihngo.com/faq",
    },
  };
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <FAQPageContent />;
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-slate-800 mb-4">{question}</h3>
      <p className="text-slate-700 leading-relaxed">{answer}</p>
    </div>
  );
}

function FAQPageContent() {
  const t = useTranslations("faq");
  const tItems = useTranslations("faqItems");

  // FAQ items grouped by category
  const generalFAQs = [
    { id: "1", question: tItems("q1"), answer: tItems("a1") },
    { id: "2", question: tItems("q2"), answer: tItems("a2") },
  ];

  const supportFAQs = [
    { id: "3", question: tItems("q3"), answer: tItems("a3") },
    { id: "4", question: tItems("q4"), answer: tItems("a4") },
  ];

  const transparencyFAQs = [
    { id: "5", question: tItems("q5"), answer: tItems("a5") },
  ];

  const communityFAQs = [
    { id: "6", question: tItems("q6"), answer: tItems("a6") },
    { id: "7", question: tItems("q7"), answer: tItems("a7") },
    { id: "8", question: tItems("q8"), answer: tItems("a8") },
    { id: "9", question: tItems("q9"), answer: tItems("a9") },
    { id: "10", question: tItems("q10"), answer: tItems("a10") },
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-50 to-amber-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {t("pageTitle")}
          </h1>
          <p className="text-xl text-slate-600">{t("pageDescription")}</p>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              {t("general")}
            </h2>
            <p className="text-slate-600">{t("generalDescription")}</p>
          </div>
          <div className="space-y-6">
            {generalFAQs.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Support FAQs */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              {t("support")}
            </h2>
            <p className="text-slate-600">{t("supportDescription")}</p>
          </div>
          <div className="space-y-6">
            {supportFAQs.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Transparency FAQs */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              {t("transparency")}
            </h2>
            <p className="text-slate-600">{t("transparencyDescription")}</p>
          </div>
          <div className="space-y-6">
            {transparencyFAQs.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Community FAQs */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              {t("community")}
            </h2>
            <p className="text-slate-600">{t("communityDescription")}</p>
          </div>
          <div className="space-y-6">
            {communityFAQs.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">💬</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            {t("stillHaveQuestions")}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {t("stillHaveQuestionsDescription")}
          </p>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
