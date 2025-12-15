export interface Bird {
  id: string;
  name: string;
  species: string;
  age?: string;
  imageUrl: string;
  description: string;
  personality?: string[];
  joinedDate: string;
}

export interface Story {
  id: string;
  birdId: string;
  birdName: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  mood: "happy" | "playful" | "calm" | "curious" | "adventurous" | "loving";
  date: string;
  createdAt: Date;
}

export interface APIStory {
  storyId: string;
  birds: string[];
  mode: number;
  date: string;
  preview: string;
  imageS3Key: string | null;
  imageUrl: string;
  videoS3Key: string | null;
  videoUrl: string | null;
}

export interface APIStoriesResponse {
  page: number;
  pageSize: number;
  totalCount: number;
  items: APIStory[];
}

export interface APISingleStoryBird {
  birdId: string;
  name: string;
  species: string;
  imageS3Key: string | null;
  imageUrl: string;
  tagline: string | null;
  lovedBy: number;
  supportedBy: number;
  ownerId: string;
  isLoved: boolean;
}

export interface APISingleStoryAuthor {
  userId: string;
  name: string;
}

export interface APISingleStory {
  storyId: string;
  content: string;
  mode: number;
  imageS3Key: string | null;
  imageUrl: string;
  videoS3Key: string | null;
  videoUrl: string | null;
  createdAt: string;
  birds: APISingleStoryBird[];
  author: APISingleStoryAuthor;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "support" | "transparency" | "community";
}
