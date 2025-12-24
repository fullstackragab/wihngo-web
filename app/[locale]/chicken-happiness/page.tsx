import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import DonationButton from "@/components/DonationButton";
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
  const t = await getTranslations({ locale, namespace: "chickenHappiness" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
      siteName: "Wihngo",
      url: "https://wihngo.com/chicken-happiness",
    },
  };
}

export default async function ChickenHappinessPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ChickenHappinessContent />;
}

function ChickenHappinessContent() {
  const t = useTranslations("chickenHappiness");

  const whatWeMean = [
    t("meaningItem1"),
    t("meaningItem2"),
    t("meaningItem3"),
    t("meaningItem4"),
    t("meaningItem5"),
  ];

  const whatWeDontClaim = [
    t("dontClaimItem1"),
    t("dontClaimItem2"),
    t("dontClaimItem3"),
  ];

  const ourMessage = [
    t("messageItem1"),
    t("messageItem2"),
    t("messageItem3"),
    t("messageItem4"),
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-amber-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t("heroSubtitle1")}
          </p>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            {t("heroSubtitle2")}
          </p>
        </div>
      </section>

      {/* What We Mean Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
            {t("whatWeMeanTitle")}
          </h2>
          <p className="text-lg text-slate-600 mb-8 text-center">
            {t("whatWeMeanSubtitle")}
          </p>
          <ul className="space-y-4">
            {whatWeMean.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-lg text-slate-700"
              >
                <span className="text-teal-500 mt-1">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="text-lg text-slate-700 mt-8 leading-relaxed rtl:text-right ltr:text-left relative rtl:pr-6 ltr:pl-6 rtl:border-r-4 ltr:border-l-4 border-gray-300">
            {t("chickenIsVulnerable")}
          </blockquote>
        </div>
      </section>

      {/* What We Don't Claim Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-teal-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            {t("whatWeDontClaimTitle")}
          </h2>
          <ul className="space-y-4">
            {whatWeDontClaim.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-lg text-slate-700"
              >
                <span className="text-amber-500 mt-1">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* We Acknowledge Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            {t("weAcknowledgeTitle")}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {t("weAcknowledgeContent")}
          </p>
        </div>
      </section>

      {/* Our Message Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            {t("ourMessageTitle")}
          </h2>
          <ul className="space-y-4">
            {ourMessage.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-lg text-slate-700"
              >
                <span className="text-teal-500 mt-1">&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ethical Position Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            {t("ethicalPositionTitle")}
          </h2>
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            {t("ethicalPositionContent1")}
          </p>
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            {t("ethicalPositionContent2")}
          </p>
          <p className="text-xl font-semibold mt-8">
            {t("ethicalPositionConclusion")}
          </p>
        </div>
      </section>

      {/* Why This Page Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-teal-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            {t("whyThisPageTitle")}
          </h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            {t("whyThisPageContent")}
          </p>
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            {t("whyThisPageConclusion1")}
          </p>
          <p className="text-xl font-semibold text-slate-800">
            {t("whyThisPageConclusion2")}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            {t("callToAction")}
          </h2>
          <DonationButton variant="primary" size="lg" />
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
