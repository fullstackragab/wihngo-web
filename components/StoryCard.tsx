"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

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
  birdName,
  title,
  excerpt,
  imageUrl,
  mood,
  date,
}: StoryCardProps) {
  const tMoods = useTranslations("moods");

  const moodEmojis: { [key: string]: string } = {
    happy: "😊",
    playful: "🎉",
    calm: "😌",
    curious: "🤔",
    adventurous: "🌟",
    loving: "💕",
  };

  // Get translated mood if available
  type MoodKey = "happy" | "playful" | "calm" | "curious" | "adventurous" | "loving";
  const validMoods: MoodKey[] = ["happy", "playful", "calm", "curious", "adventurous", "loving"];
  const translatedMood = validMoods.includes(mood as MoodKey)
    ? tMoods(mood as MoodKey)
    : mood;

  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${birdName}'s story`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
          {moodEmojis[mood] || "🐦"} {translatedMood}
        </div>
      </div>

      <div className="p-6">
        <div className="text-sm text-teal-600 font-medium mb-2">
          {birdName}
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          {title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="text-sm text-slate-500">
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
}
