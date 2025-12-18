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
  const t = await getTranslations({ locale, namespace: "terms" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TermsPageContent />;
}

function TermsPageContent() {
  const t = useTranslations("terms");

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
          {t("platformRoleTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("platformRoleContent")}
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("websiteUsageTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("websiteUsageContent")}
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("userContentTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("userContentContent")}
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("noGuaranteesTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("noGuaranteesContent")}
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("limitationTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("limitationContent")}
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("governingLawTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("governingLawContent")}
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
          {t("contactTitle")}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t("contactContent")}{" "}
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
