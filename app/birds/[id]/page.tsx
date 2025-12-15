import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import StoryCard from "@/components/StoryCard";
import DownloadSection from "@/components/DownloadSection";
import { getBirdById, getStoriesByBirdId } from "@/lib/data";

interface BirdPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: BirdPageProps): Promise<Metadata> {
  const { id } = await params;
  const bird = getBirdById(id);

  if (!bird) {
    return {
      title: "Bird Not Found | Whingo",
    };
  }

  return {
    title: `${bird.name} - ${bird.species} | Whingo`,
    description: bird.description,
    openGraph: {
      title: `Meet ${bird.name}`,
      description: bird.description,
      images: [bird.imageUrl],
      type: "profile",
    },
  };
}

export default async function BirdPage({ params }: BirdPageProps) {
  const { id } = await params;
  const bird = getBirdById(id);

  if (!bird) {
    notFound();
  }

  const stories = getStoriesByBirdId(id);

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
                <p className="text-xl text-slate-600 mb-6">{bird.age} old</p>
              )}
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {bird.description}
              </p>

              {bird.personality && bird.personality.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-slate-800 mb-3">
                    Personality
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
                Part of the Whingo community since{" "}
                {new Date(bird.joinedDate).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
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
              {bird.name}&apos;s Stories
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              Follow {bird.name}&apos;s journey through these special moments
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
            Connect with {bird.name}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Download the Whingo app to follow {bird.name}&apos;s journey, read
            new stories as they&apos;re shared, and optionally provide support
            when needed.
          </p>
          <Button href="#download" variant="primary" size="lg">
            Get the Whingo App
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
            ← Back to all birds
          </Link>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
