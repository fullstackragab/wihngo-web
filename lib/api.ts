import { APIStoriesResponse, APIStory, APISingleStory, Story } from "@/types";
import { stories as staticStories } from "@/lib/data";

const API_BASE_URL = "https://wihngo-api.onrender.com/api";

// Map mode number to mood string
const modeToMood = (mode: number): Story["mood"] => {
  const moods: Story["mood"][] = [
    "happy",
    "playful",
    "calm",
    "curious",
    "adventurous",
    "loving",
  ];
  return moods[mode - 1] || "happy";
};

// Transform API story to app story format
const transformAPIStory = (apiStory: APIStory): Story => {
  const birdName = apiStory.birds[0] || "Unknown Bird";

  return {
    id: apiStory.storyId,
    birdId: apiStory.storyId, // Using storyId as birdId since API doesn't provide separate bird ID
    birdName: birdName,
    title: `${birdName}'s Story`,
    content: apiStory.preview, // Using preview as content for now
    excerpt: apiStory.preview.substring(0, 120) + "...",
    imageUrl: apiStory.imageUrl,
    mood: modeToMood(apiStory.mode),
    date: apiStory.date,
    createdAt: new Date(apiStory.date),
  };
};

export async function fetchStories(
  page: number = 1,
  pageSize: number = 10
): Promise<{ stories: Story[]; totalCount: number; page: number }> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/stories?page=${page}&pageSize=${pageSize}`,
      {
        next: { revalidate: 60 }, // Cache for 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: APIStoriesResponse = await response.json();

    return {
      stories: data.items.map(transformAPIStory),
      totalCount: data.totalCount,
      page: data.page,
    };
  } catch (error) {
    console.error("Error fetching stories from API:", error);
    // Return static stories as fallback
    return {
      stories: staticStories,
      totalCount: staticStories.length,
      page: 1,
    };
  }
}

// Transform single story API response to app story format
const transformSingleAPIStory = (apiStory: APISingleStory): Story => {
  const birdName = apiStory.birds[0]?.name || "Unknown Bird";
  const birdId = apiStory.birds[0]?.birdId || apiStory.storyId;

  return {
    id: apiStory.storyId,
    birdId: birdId,
    birdName: birdName,
    title: `${birdName}'s Story`,
    content: apiStory.content,
    excerpt: apiStory.content.substring(0, 120) + "...",
    imageUrl: apiStory.imageUrl,
    mood: modeToMood(apiStory.mode),
    date: new Date(apiStory.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    createdAt: new Date(apiStory.createdAt),
  };
};

export async function fetchStoryById(id: string): Promise<Story | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/stories/${id}`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      if (response.status === 404) {
        // Try fallback to static stories
        return staticStories.find((story) => story.id === id) || null;
      }
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: APISingleStory = await response.json();
    return transformSingleAPIStory(data);
  } catch (error) {
    console.error("Error fetching story by ID:", error);
    // Fallback to static stories
    return staticStories.find((story) => story.id === id) || null;
  }
}
