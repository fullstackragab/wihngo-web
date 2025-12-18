import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Button from "@/components/Button";
import DownloadSection from "@/components/DownloadSection";
import StoryCard from "@/components/StoryCard";
import { fetchStories } from "@/lib/api";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const { stories: recentStories } = await fetchStories(1, 3);

  return <HomeContent recentStories={recentStories} />;
}

function HomeContent({ recentStories }: { recentStories: Awaited<ReturnType<typeof fetchStories>>["stories"] }) {
  const t = useTranslations("home");

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-amber-50 pt-32 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animation-fade-in">
            <Image
              src="/icon.png"
              alt="Wihngo"
              width={120}
              height={120}
              className="mx-auto"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 animation-fade-in">
            {t("heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto animation-fade-in leading-relaxed">
            {t("heroDescription")}
          </p>
          <p className="text-lg text-slate-600 mb-8 animation-fade-in">
            {t("mobileAppCta")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animation-fade-in">
            <Button href="#download" variant="primary" size="lg">
              {t("downloadTheApp")}
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stories Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t("birdStoriesTitle")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("birdStoriesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentStories.map((story) => (
              <StoryCard key={story.id} {...story} />
            ))}
          </div>

          {recentStories.length > 0 && (
            <div className="text-center mt-8">
              <Button href="/stories" variant="outline">
                {t("viewAllStories")}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
