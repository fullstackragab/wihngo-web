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
  const t = await getTranslations({ locale, namespace: "whyBirdsMatter" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
      siteName: "Wihngo",
      url: "https://wihngo.com/why-birds-matter",
    },
  };
}

export default async function WhyBirdsMatterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <WhyBirdsMatterContent />;
}

function WhyBirdsMatterContent() {
  const t = useTranslations("whyBirdsMatter");

  const paragraphs = [
    t("section1Content"),
    t("section2Content"),
    t("section3Content"),
    t("section4Content"),
    t("section5Content"),
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-amber-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-slate-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-teal-50">
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
