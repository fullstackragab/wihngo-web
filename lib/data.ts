import { Bird, Story, FAQ } from "@/types";

// Mock Birds Data
export const birds: Bird[] = [
  {
    id: "1",
    name: "Luna",
    species: "African Grey Parrot",
    age: "3 years",
    imageUrl:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&q=80",
    description:
      "Luna is a curious and talkative African Grey who loves to learn new words and mimic sounds. She has a gentle soul and enjoys classical music.",
    personality: ["Intelligent", "Gentle", "Talkative"],
    joinedDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Sunny",
    species: "Sun Conure",
    age: "2 years",
    imageUrl:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80",
    description:
      "Sunny brings light and joy wherever he goes. This vibrant Sun Conure is always ready for play and loves to make everyone smile with his playful antics.",
    personality: ["Playful", "Energetic", "Affectionate"],
    joinedDate: "2024-03-20",
  },
  {
    id: "3",
    name: "Kiwi",
    species: "Budgerigar",
    age: "1 year",
    imageUrl:
      "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?w=800&q=80",
    description:
      "Kiwi is a small bird with a big personality. She loves to chirp along to music and is incredibly social, always seeking companionship.",
    personality: ["Social", "Musical", "Cheerful"],
    joinedDate: "2024-06-10",
  },
  {
    id: "4",
    name: "Oliver",
    species: "Cockatiel",
    age: "4 years",
    imageUrl: "https://i.ibb.co/cK3mKVqg/Lone-Rooster.jpg",
    description:
      "Oliver is a calm and collected cockatiel who enjoys quiet moments and gentle head scratches. He has a sweet whistle that melts hearts.",
    personality: ["Calm", "Sweet", "Loyal"],
    joinedDate: "2023-11-05",
  },
];

// Mock Stories Data
export const stories: Story[] = [
  {
    id: "1",
    birdId: "1",
    birdName: "Luna",
    title: 'Luna Learned to Say "I Love You"',
    excerpt:
      "Today was magical. After months of practice, Luna finally said the words that mean so much to us.",
    content: `Today was absolutely magical. After months of practice and patience, Luna finally said "I love you" for the first time. 

The moment happened during our morning routine. I was preparing her breakfast when she looked at me with those intelligent eyes and clearly said, "I love you." I couldn't believe my ears!

African Greys are known for their intelligence and ability to mimic, but hearing these words from Luna felt different. It felt like a genuine connection, a bridge between our worlds. 

We celebrated with her favorite treat - fresh mango slices. Luna seemed to understand the joy she brought us, repeating the phrase several more times throughout the day.

This is what Wihngo is all about - these precious moments that remind us why we dedicate our lives to these beautiful creatures.`,
    imageUrl:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&q=80",
    mood: "loving",
    date: "Dec 10, 2024",
    createdAt: new Date("2024-12-10"),
  },
  {
    id: "2",
    birdId: "2",
    birdName: "Sunny",
    title: "Sunny's First Flight Outside",
    excerpt:
      "We took Sunny outside for supervised flight time, and his joy was absolutely contagious.",
    content: `Today we took Sunny outside for his first supervised flight in our enclosed garden, and watching him spread his wings in the sunshine was pure magic.

Sun Conures are naturally vibrant and energetic, but seeing Sunny soar through the open air (safely harnessed) was a reminder of how important it is to honor their natural behaviors.

He flew from perch to perch, his feathers catching the sunlight and creating a rainbow of colors. His excited chirps echoed through the garden, and I swear he was smiling.

After about 30 minutes of flying and exploring, Sunny landed on my shoulder and gently preened my hair - his way of saying thank you.

These moments of freedom and trust are what every bird deserves. I'm grateful we can provide this for Sunny.`,
    imageUrl:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80",
    mood: "adventurous",
    date: "Dec 12, 2024",
    createdAt: new Date("2024-12-12"),
  },
  {
    id: "3",
    birdId: "3",
    birdName: "Kiwi",
    title: "Kiwi Made a New Friend",
    excerpt:
      "Kiwi met another budgie today, and their instant friendship warmed my heart.",
    content: `Today, Kiwi had a playdate with another budgie named Mango, and watching them interact was absolutely heartwarming.

At first, Kiwi was cautious, staying on her side of the play gym. But Mango, being the social butterfly she is, chirped a friendly greeting. That's all it took.

Within minutes, they were chattering away, sharing perches, and even playing with the same toy bell. Kiwi, who can be shy around new birds, was completely at ease.

Budgerigars are incredibly social creatures, and seeing Kiwi so happy reminded me of how important companionship is for these little ones.

We're planning more playdates, and who knows - maybe Kiwi and Mango will become best friends. The Wihngo community has made connections like these possible.`,
    imageUrl:
      "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?w=800&q=80",
    mood: "happy",
    date: "Dec 8, 2024",
    createdAt: new Date("2024-12-08"),
  },
  {
    id: "4",
    birdId: "4",
    birdName: "Oliver",
    title: "Oliver's Calm Morning Routine",
    excerpt:
      "Some mornings are just perfect. Oliver and I shared a peaceful moment that reminded me to slow down.",
    content: `This morning was one of those rare, perfect moments where time seemed to slow down.

Oliver was perched on my shoulder as I sipped my coffee and watched the sunrise through the window. He gently preened my hair, occasionally letting out his signature soft whistle.

Cockatiels like Oliver are known for their calm demeanor, and he's a perfect example. While other birds might demand attention or playtime, Oliver is content with quiet companionship.

In our fast-paced world, Oliver teaches me the value of simply being present. No agenda, no rush - just two souls sharing space and affection.

These are the moments I treasure most. Not the loud celebrations or exciting adventures, but these gentle reminders that love doesn't always need to be loud.

Thank you, Oliver, for teaching me to appreciate the quiet.`,
    imageUrl: "https://i.ibb.co/cK3mKVqg/Lone-Rooster.jpg",
    mood: "calm",
    date: "Dec 5, 2024",
    createdAt: new Date("2024-12-05"),
  },
  {
    id: "5",
    birdId: "1",
    birdName: "Luna",
    title: "Luna's Puzzle-Solving Adventure",
    excerpt:
      "Luna figured out a new foraging puzzle today, proving once again how brilliant African Greys are.",
    content: `African Greys are renowned for their intelligence, and Luna never fails to amaze me with her problem-solving abilities.

I introduced a new foraging puzzle today - a multi-step challenge that requires opening different compartments to reach the treats inside. I demonstrated it once, thinking she'd need several attempts to figure it out.

I was wrong.

Luna watched me intently, her head tilting as she analyzed each step. Then, without hesitation, she approached the puzzle and methodically worked through it. She opened each compartment in the correct sequence, retrieved her rewards, and looked at me as if to say, "That was easy."

Her intelligence goes beyond mimicry and tricks. She genuinely understands cause and effect, problem-solving, and even seems to plan ahead.

Moments like these remind me why mental stimulation is so crucial for parrots. Luna's mind needs as much care as her body, and watching her thrive intellectually brings me so much joy.`,
    imageUrl:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&q=80",
    mood: "curious",
    date: "Dec 14, 2024",
    createdAt: new Date("2024-12-14"),
  },
  {
    id: "6",
    birdId: "2",
    birdName: "Sunny",
    title: "Dance Party with Sunny",
    excerpt:
      "Sunny and I had an impromptu dance party, and his moves were absolutely legendary.",
    content: `If you ever need proof that birds have personalities as vibrant as their feathers, spend five minutes with Sunny during music time.

Today, I turned on some upbeat music while cleaning, and Sunny immediately started bobbing his head. Before I knew it, we were having a full-on dance party.

He hopped from perch to perch, spread his wings, and did his signature head-bob dance that never fails to make me laugh. Sun Conures are naturally expressive, but Sunny takes it to another level.

What made today special was the pure joy radiating from him. His eyes were bright, his chirps were enthusiastic, and his energy was infectious. I found myself dancing along, forgetting all about my cleaning tasks.

These spontaneous moments of shared happiness are what make life with birds so special. Sunny doesn't just live with me - he lives WITH me, fully participating in daily life and bringing light to every moment.

Thank you, Sunny, for reminding me to dance more often.`,
    imageUrl:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80",
    mood: "playful",
    date: "Dec 13, 2024",
    createdAt: new Date("2024-12-13"),
  },
];

// Mock FAQ Data
export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What is Wihngo?",
    answer:
      "Wihngo is a love-centric community platform for bird lovers. It's a place where people who care deeply about their feathered companions can share stories, connect with others, and celebrate the joy that birds bring to our lives. Wihngo is built on the belief that our relationships with birds are about love, care, and companionship - not commodification.",
    category: "general",
  },
  {
    id: "2",
    question: "Is Wihngo about money?",
    answer:
      "No. Wihngo is fundamentally about love for birds and the people who care for them. While the platform includes optional ways to support birds in need, this is never required or pushed. We believe that genuine care and community come first, always. Wihngo exists to celebrate and strengthen the bond between humans and birds, not to profit from it.",
    category: "general",
  },
  {
    id: "3",
    question: "How does financial support work on Wihngo?",
    answer:
      "The Wihngo mobile app allows community members to voluntarily support birds who need help with veterinary care, food, or other necessities. All support is optional and transparent. We provide clear information about where contributions go, and we never pressure anyone to give. The focus is always on the bird's wellbeing and the human's genuine desire to help.",
    category: "support",
  },
  {
    id: "4",
    question: "What happens if a bird passes away?",
    answer:
      "The loss of a bird is deeply painful, and Wihngo treats this with the utmost respect and sensitivity. If financial support was provided for a bird who has passed, we handle each situation individually and with care. Transparency is paramount - we communicate openly with supporters and, when appropriate, redirect contributions to other birds in need, always with consent. Our priority is honoring the bird's memory and supporting their human through grief.",
    category: "support",
  },
  {
    id: "5",
    question: "How transparent is Wihngo?",
    answer:
      "Complete transparency is a core value of Wihngo. We openly share how the platform operates, how financial support is handled, and the principles that guide our decisions. We believe trust is earned through honesty, and we're committed to being clear about every aspect of how Wihngo functions. If you have questions, we have answers.",
    category: "transparency",
  },
  {
    id: "6",
    question: "Can I share my bird's story on Wihngo?",
    answer:
      "Yes! The Wihngo mobile app (available on Android and iOS) allows you to share your bird's stories, photos, and special moments with the community. Whether your bird learned a new trick, had a funny moment, or you simply want to celebrate their presence in your life, Wihngo is the place to share it. Note: This public website is read-only; posting requires the mobile app.",
    category: "community",
  },
  {
    id: "7",
    question: "Is Wihngo free to use?",
    answer:
      "Yes, Wihngo is free to download and use. You can share stories, connect with other bird lovers, and participate in the community without any cost. Optional financial support features exist for those who wish to help birds in need, but using Wihngo itself is completely free.",
    category: "general",
  },
  {
    id: "8",
    question: "What makes Wihngo different from other platforms?",
    answer:
      "Wihngo is built on love, not algorithms designed to maximize engagement or profit. We don't exploit emotional content for clicks or ad revenue. We don't treat birds as products. Instead, we focus on genuine connection, meaningful stories, and building a supportive community. Wihngo exists because birds deserve better, and so do the people who love them.",
    category: "general",
  },
  {
    id: "9",
    question: "How can I connect with other bird lovers?",
    answer:
      "The Wihngo mobile app provides features for connecting with other members of the community. You can read and react to stories, follow birds and their humans, and participate in a community that truly understands the unique joy and responsibility of caring for birds. This public website shows you a preview of the community, but full interaction happens in the app.",
    category: "community",
  },
  {
    id: "10",
    question: "How is Wihngo built?",
    answer:
      "Wihngo is built with care, intention, and respect for both birds and humans. We use modern technology to create a smooth, accessible experience, but technology always serves the mission - never the other way around. The mobile app is available on Android and iOS, and this website provides public access to stories and information about the Wihngo community.",
    category: "transparency",
  },
];

// Utility functions for data fetching
export function getBirdById(id: string): Bird | undefined {
  return birds.find((bird) => bird.id === id);
}

export function getStoryById(id: string): Story | undefined {
  return stories.find((story) => story.id === id);
}

export function getStoriesByBirdId(birdId: string): Story[] {
  return stories.filter((story) => story.birdId === birdId);
}

export function getAllStories(): Story[] {
  return [...stories].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
}

export function getAllBirds(): Bird[] {
  return birds;
}

export function getFAQsByCategory(category?: FAQ["category"]): FAQ[] {
  if (!category) return faqs;
  return faqs.filter((faq) => faq.category === category);
}
