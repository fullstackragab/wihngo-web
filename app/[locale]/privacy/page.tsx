import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PrivacyPageContent />;
}

function PrivacyPageContent() {
  const t = useTranslations("privacy");

  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          {t("pageTitle")}
        </h1>

        <p className="text-sm text-slate-500 mb-8">
          <strong>{t("lastUpdated")}</strong> {t("lastUpdatedDate")}
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">{t("intro")}</p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("whoWeAreTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">{t("whoWeAreContent")}</p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("whatDataTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          {t("whatDataIntro")}
        </p>
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>{t("whatDataItem1")}</li>
          <li>{t("whatDataItem2")}</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mt-4">
          {t("whatDataNote")}
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("whyCollectTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          {t("whyCollectIntro")}
        </p>
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>{t("whyCollectItem1")}</li>
          <li>{t("whyCollectItem2")}</li>
          <li>{t("whyCollectItem3")}</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("legalBasisTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("legalBasisContent")}
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("dataSharingTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("dataSharingContent")}
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("dataRetentionTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("dataRetentionContent")}
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("yourRightsTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("yourRightsContent")}
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("contactTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("contactContent")}{" "}
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
