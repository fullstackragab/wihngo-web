import { Metadata } from "next";
import StoryCard from "@/components/StoryCard";
import DownloadSection from "@/components/DownloadSection";
import { fetchStories } from "@/lib/api";

export const metadata: Metadata = {
  title: "Bird Stories | Whingo",
  description:
    "Read heartwarming stories from bird lovers around the world. Every chirp, every moment, shared with love.",
  openGraph: {
    title: "Bird Stories | Whingo",
    description: "Read heartwarming stories from bird lovers around the world.",
    type: "website",
  },
};

export default async function StoriesPage() {
  const { stories } = await fetchStories(1, 50);

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-50 to-amber-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Bird Stories
          </h1>
          <p className="text-xl text-slate-600">
            Every bird has a story. Every moment matters. Here are some of the
            beautiful journeys shared by our community.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <StoryCard key={story.id} {...story} />
            ))}
          </div>

          {stories.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🐦</div>
              <p className="text-xl text-slate-600">
                No stories yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Have a Story to Share?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Download the Whingo app to share your bird&apos;s special moments
            with a community that truly understands and celebrates them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
            >
              Get the App
            </a>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </main>
  );
}
