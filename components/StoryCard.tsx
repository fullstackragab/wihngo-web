import Link from "next/link";
import Image from "next/image";

interface StoryCardProps {
  id: string;
  birdName: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  mood: string;
  date: string;
}

export default function StoryCard({
  id,
  birdName,
  title,
  excerpt,
  imageUrl,
  mood,
  date,
}: StoryCardProps) {
  const moodEmojis: { [key: string]: string } = {
    happy: "😊",
    playful: "🎉",
    calm: "😌",
    curious: "🤔",
    adventurous: "🌟",
    loving: "💕",
  };

  return (
    <Link href={`/stories/${id}`}>
      <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${birdName}'s story`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
            {moodEmojis[mood] || "🐦"} {mood}
          </div>
        </div>

        <div className="p-6">
          <div className="text-sm text-teal-600 font-medium mb-2">
            {birdName}
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>{date}</span>
            <span className="text-teal-600 group-hover:translate-x-1 transition-transform inline-block">
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
