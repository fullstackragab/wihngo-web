import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Button from "@/components/Button";
import DownloadSection from "@/components/DownloadSection";
import { getBirdById } from "@/lib/data";
import { fetchStories, fetchStoryById } from "@/lib/api";
import { routing } from "@/i18n/routing";

interface StoryPageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export async function generateStaticParams() {
  const { stories } = await fetchStories(1, 50);
  return routing.locales.flatMap((locale) =>
    stories.map((story) => ({
      locale,
      id: story.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { id, locale } = await params;
  const story = await fetchStoryById(id);
  const t = await getTranslations({ locale, namespace: "storyDetail" });

  if (!story) {
    return {
      title: t("notFoundTitle"),
    };
  }

  return {
    title: `${story.title} | Wihngo`,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      images: [story.imageUrl],
      type: "article",
      siteName: "Wihngo",
      url: `https://wihngo.com/stories/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.excerpt,
      images: [story.imageUrl],
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { id, locale } = await params;
  setRequestLocale(locale);

  const story = await fetchStoryById(id);

  if (!story) {
    notFound();
  }

  const bird = getBirdById(story.birdId);

  return <StoryPageContent story={story} bird={bird} />;
}

type Story = NonNullable<Awaited<ReturnType<typeof fetchStoryById>>>;
type Bird = ReturnType<typeof getBirdById>;

function StoryPageContent({ story, bird }: { story: Story; bird: Bird }) {
  const t = useTranslations("storyDetail");
  const tMoods = useTranslations("moods");

  const moodEmojis: { [key: string]: string } = {
    happy: "😊",
    playful: "🎉",
    calm: "😌",
    curious: "🤔",
    adventurous: "🌟",
    loving: "💕",
  };

  return (
    <main>
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] w-full">
        <Image
          src={story.imageUrl}
          alt={story.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-0 right-0 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-2xl">{moodEmojis[story.mood]}</span>
              <span className="text-sm font-medium text-slate-800 capitalize">
                {tMoods(story.mood as "happy" | "playful" | "calm" | "curious" | "adventurous" | "loving")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Bird Info */}
          <Link
            href={`/birds/${story.birdId}`}
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6 group"
          >
            <span className="text-xl">🐦</span>
            <span className="font-medium group-hover:underline">
              {story.birdName}
            </span>
          </Link>

          {/* Title and Meta */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {story.title}
          </h1>
          <div className="text-slate-500 mb-8">{story.date}</div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {story.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-slate-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bird Profile Link */}
          {bird && (
            <div className="mt-12 p-6 bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🐦</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">
                    {t("about", { name: bird.name })}
                  </h3>
                  <p className="text-slate-600">{bird.species}</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">{bird.description}</p>
              <Link
                href={`/birds/${bird.id}`}
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
              >
                {t("meetBird", { name: bird.name })} →
              </Link>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            {t("wantToSupport", { name: story.birdName })}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {t("supportDescription", { name: story.birdName })}
          </p>
          <Button href="#download" variant="primary" size="lg">
            {t("getWihngoApp")}
          </Button>
        </div>
      </section>

      {/* Back to Stories */}
      <section className="py-8 px-4 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/stories"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
          >
            ← {t("backToStories")}
          </Link>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
