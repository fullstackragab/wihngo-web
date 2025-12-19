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
  const t = await getTranslations({ locale, namespace: "aboutPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
      siteName: "Wihngo",
      url: "https://wihngo.com/about",
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPageContent />;
}

function AboutPageContent() {
  const t = useTranslations("aboutPage");

  const values = [
    { title: t("value1Title"), content: t("value1Content") },
    { title: t("value2Title"), content: t("value2Content") },
    { title: t("value3Title"), content: t("value3Content") },
    { title: t("value4Title"), content: t("value4Content") },
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

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            {t("missionTitle")}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {t("missionContent")}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            {t("valuesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {value.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            {t("visionTitle")}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {t("visionContent")}
          </p>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
