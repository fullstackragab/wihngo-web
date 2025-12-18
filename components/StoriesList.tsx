"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import StoryCard from "./StoryCard";
import { Story } from "@/types";

const API_BASE_URL = "https://horsier-maliah-semilyrical.ngrok-free.dev/api";

interface StoriesListProps {
  initialStories: Story[];
  initialTotalCount: number;
  pageSize?: number;
}

export default function StoriesList({
  initialStories,
  initialTotalCount,
  pageSize = 12,
}: StoriesListProps) {
  const t = useTranslations("storiesList");
  const [stories, setStories] = useState<Story[]>(initialStories);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalCount] = useState(initialTotalCount);

  const hasMore = stories.length < totalCount;

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const nextPage = page + 1;
      const response = await fetch(
        `${API_BASE_URL}/stories?page=${nextPage}&pageSize=${pageSize}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch stories");
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("API returned non-JSON response");
      }

      const data = await response.json();

      // Transform API stories to app format
      const newStories: Story[] = data.items.map(
        (item: {
          storyId: string;
          birds: string[];
          preview: string;
          imageUrl: string;
          mode: number;
          date: string;
        }) => ({
          id: item.storyId,
          birdId: item.storyId,
          birdName: item.birds[0] || "Unknown Bird",
          title: `${item.birds[0] || "Unknown Bird"}'s Story`,
          content: item.preview,
          excerpt: item.preview.substring(0, 120) + "...",
          imageUrl: item.imageUrl,
          mood: ["happy", "playful", "calm", "curious", "adventurous", "loving"][
            (item.mode || 1) - 1
          ] as Story["mood"],
          date: item.date,
          createdAt: new Date(item.date),
        })
      );

      setStories((prev) => [...prev, ...newStories]);
      setPage(nextPage);
    } catch (error) {
      console.error("Error loading more stories:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </div>

      {stories.length === 0 && (
        <div className="text-center py-20">
          <Image
            src="/icon.png"
            alt="No stories"
            width={64}
            height={64}
            className="mx-auto mb-4 opacity-50"
          />
          <p className="text-xl text-slate-600">{t("noStories")}</p>
        </div>
      )}

      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            disabled={loading}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Image
                  src="/icon.png"
                  alt="Loading"
                  width={24}
                  height={24}
                  className="animate-spin mr-2"
                />
                {t("loading")}
              </>
            ) : (
              t("loadMore", { current: stories.length, total: totalCount })
            )}
          </button>
        </div>
      )}

      {!hasMore && stories.length > 0 && (
        <div className="text-center mt-12 text-slate-500">
          {t("seenAll", { count: totalCount })}
        </div>
      )}
    </div>
  );
}
