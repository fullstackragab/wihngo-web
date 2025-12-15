import Link from "next/link";
import Button from "@/components/Button";
import DownloadSection from "@/components/DownloadSection";
import StoryCard from "@/components/StoryCard";
import BirdCard from "@/components/BirdCard";
import { getAllBirds } from "@/lib/data";
import { fetchStories } from "@/lib/api";

export default async function Home() {
  const { stories: recentStories } = await fetchStories(1, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-amber-50 pt-32 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl md:text-8xl mb-6 animation-fade-in">🐦</div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 animation-fade-in">
            Wihngo
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto animation-fade-in leading-relaxed">
            Wihngo is a love-centric community for people who care about birds.
            It&apos;s a place where bird stories are shared, connections are
            formed, and support is given with care.
          </p>
          <p className="text-lg text-slate-600 mb-8 animation-fade-in">
            The full Wihngo experience lives in the mobile app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animation-fade-in">
            <Button href="#download" variant="primary" size="lg">
              Download the app
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
              Bird Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every bird has a story. Every moment matters.
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
                View all stories
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
