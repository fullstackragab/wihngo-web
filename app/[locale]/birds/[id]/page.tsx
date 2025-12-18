import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Button from "@/components/Button";
import StoryCard from "@/components/StoryCard";
import DownloadSection from "@/components/DownloadSection";
import { getBirdById, getStoriesByBirdId, birds } from "@/lib/data";
import { routing } from "@/i18n/routing";

interface BirdPageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    birds.map((bird) => ({
      locale,
      id: bird.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: BirdPageProps): Promise<Metadata> {
  const { id, locale } = await params;
  const bird = getBirdById(id);
  const t = await getTranslations({ locale, namespace: "bird" });

  if (!bird) {
    return {
      title: t("notFoundTitle"),
    };
  }

  return {
    title: `${bird.name} - ${bird.species} | Wihngo`,
    description: bird.description,
    openGraph: {
      title: t("meetTitle", { name: bird.name }),
      description: bird.description,
      images: [bird.imageUrl],
      type: "profile",
      siteName: "Wihngo",
      url: `https://wihngo.com/birds/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t("meetTitle", { name: bird.name }),
      description: bird.description,
      images: [bird.imageUrl],
    },
  };
}

export default async function BirdPage({ params }: BirdPageProps) {
  const { id, locale } = await params;
  setRequestLocale(locale);

  const bird = getBirdById(id);

  if (!bird) {
    notFound();
  }

  const stories = getStoriesByBirdId(id);

  return <BirdPageContent bird={bird} stories={stories} locale={locale} />;
}

type Bird = NonNullable<ReturnType<typeof getBirdById>>;
type Stories = ReturnType<typeof getStoriesByBirdId>;

function BirdPageContent({
  bird,
  stories,
  locale,
}: {
  bird: Bird;
  stories: Stories;
  locale: string;
}) {
  const t = useTranslations("bird");

  // Get locale-specific date formatting
  const formattedDate = new Date(bird.joinedDate).toLocaleDateString(locale, {
    month: "long",
    year: "numeric",
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-amber-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bird Image */}
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={bird.imageUrl}
                alt={bird.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Bird Info */}
            <div>
              <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {bird.species}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
                {bird.name}
              </h1>
              {bird.age && (
                <p className="text-xl text-slate-600 mb-6">
                  {t("yearsOld", { age: bird.age })}
                </p>
              )}
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {bird.description}
              </p>

              {bird.personality && bird.personality.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-slate-800 mb-3">
                    {t("personality")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {bird.personality.map((trait) => (
                      <span
                        key={trait}
                        className="bg-white px-4 py-2 rounded-full text-sm text-slate-700 shadow-sm"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-sm text-slate-500">
                {t("communitySince", { date: formattedDate })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      {stories.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t("storiesTitle", { name: bird.name })}
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              {t("storiesSubtitle", { name: bird.name })}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <StoryCard key={story.id} {...story} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            {t("connectTitle", { name: bird.name })}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {t("connectDescription", { name: bird.name })}
          </p>
          <Button href="#download" variant="primary" size="lg">
            {t("connectTitle", { name: bird.name }).includes("Connect")
              ? "Get the Wihngo App"
              : t("connectTitle", { name: bird.name })}
          </Button>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#birds"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
          >
            ← {t("backToBirds")}
          </Link>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
