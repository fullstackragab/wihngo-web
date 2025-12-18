import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import StoriesList from "@/components/StoriesList";
import DownloadSection from "@/components/DownloadSection";
import { fetchStories } from "@/lib/api";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "stories" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
      siteName: "Wihngo",
      url: "https://wihngo.com/stories",
    },
  };
}

const PAGE_SIZE = 12;

export default async function StoriesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const { stories, totalCount } = await fetchStories(1, PAGE_SIZE);

  return (
    <StoriesPageContent
      stories={stories}
      totalCount={totalCount}
      pageSize={PAGE_SIZE}
    />
  );
}

function StoriesPageContent({
  stories,
  totalCount,
  pageSize,
}: {
  stories: Awaited<ReturnType<typeof fetchStories>>["stories"];
  totalCount: number;
  pageSize: number;
}) {
  const t = useTranslations("stories");

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-50 to-amber-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {t("pageTitle")}
          </h1>
          <p className="text-xl text-slate-600">{t("pageDescription")}</p>
          {totalCount > 0 && (
            <p className="text-sm text-slate-500 mt-2">
              {t("storiesCount", { count: totalCount.toLocaleString() })}
            </p>
          )}
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <StoriesList
            initialStories={stories}
            initialTotalCount={totalCount}
            pageSize={pageSize}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            {t("haveStoryTitle")}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {t("haveStoryDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
            >
              {t("getTheApp")}
            </a>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
