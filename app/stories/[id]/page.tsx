import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import DownloadSection from "@/components/DownloadSection";
import { getBirdById } from "@/lib/data";
import { fetchStories, fetchStoryById } from "@/lib/api";

interface StoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const { stories } = await fetchStories(1, 50);
  return stories.map((story) => ({
    id: story.id,
  }));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { id } = await params;
  const story = await fetchStoryById(id);

  if (!story) {
    return {
      title: "Story Not Found | Whingo",
    };
  }

  return {
    title: `${story.title} | Whingo`,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      images: [story.imageUrl],
      type: "article",
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { id } = await params;
  const story = await fetchStoryById(id);

  if (!story) {
    notFound();
  }

  const bird = getBirdById(story.birdId);

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
                {story.mood}
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
                    About {bird.name}
                  </h3>
                  <p className="text-slate-600">{bird.species}</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">{bird.description}</p>
              <Link
                href={`/birds/${bird.id}`}
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
              >
                Meet {bird.name} →
              </Link>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Want to Support {story.birdName}?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Download the Whingo app to connect with {story.birdName} and their
            human, read more stories, and optionally provide support when
            needed.
          </p>
          <Button href="#download" variant="primary" size="lg">
            Get the Whingo App
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
            ← Back to all stories
          </Link>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
