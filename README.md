# 🐦 Whingo - Where Hearts & Wings Gather

A love-centric community platform for bird lovers. This is the **public website** for Whingo, built with Next.js to showcase bird stories, profiles, and encourage mobile app downloads.

## 🌟 Overview

Whingo is a lightweight, SEO-friendly public website that:

- Explains Whingo's mission and values
- Showcases public bird stories and profiles (read-only)
- Builds trust and emotional connection
- Encourages users to download the mobile app

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Rendering**: Server Components (SSG where possible)
- **Accessibility**: ARIA-compliant, keyboard navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
wihngo-web/
├── app/
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Landing page
│   ├── loading.tsx          # Global loading state
│   ├── not-found.tsx        # 404 page
│   ├── globals.css          # Global styles
│   ├── stories/
│   │   ├── page.tsx         # Stories listing
│   │   └── [id]/
│   │       └── page.tsx     # Individual story
│   ├── birds/
│   │   └── [id]/
│   │       └── page.tsx     # Bird profile
│   └── faq/
│       └── page.tsx         # FAQ page
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Header.tsx           # Site navigation
│   ├── Footer.tsx           # Site footer
│   ├── DownloadSection.tsx  # App download CTA
│   ├── StoryCard.tsx        # Story preview card
│   └── BirdCard.tsx         # Bird profile card
├── lib/
│   └── data.ts              # Mock data & utility functions
└── types/
    └── index.ts             # TypeScript interfaces
```

## 📄 Pages

### `/` - Landing Page

- Hero section with mission statement
- Core values (love-centric, community-first, transparent)
- How Whingo works
- Featured stories and birds
- Why Whingo is different
- App download CTA

### `/stories` - Stories Listing

- Grid of all public bird stories
- Each story shows: bird name, mood, excerpt, date
- Links to individual story pages

### `/stories/[id]` - Individual Story

- Full story content with images
- Bird information
- Support CTA

### `/birds/[id]` - Bird Profile

- Bird photo and details
- Personality traits
- All stories from this bird

### `/faq` - FAQ Page

- Organized by category
- Clear, honest answers

## 🎯 Core Principles

1. **Love-Centric**: Every decision prioritizes bird wellbeing
2. **No Exploitation**: Emotional content is never manipulative
3. **Transparency**: Complete honesty about operations
4. **Community First**: Connection over metrics
5. **Read-Only**: Website is for discovery; interactions happen in the mobile app

## 🎨 Design Philosophy

- **Mobile-first**: Optimized for small screens
- **Emotionally warm**: Calm, respectful tone
- **Nature-inspired**: Soft colors (teal, amber, slate)
- **Accessible**: High contrast, semantic HTML
- **Performance**: Static generation, optimized images

## 💙 Built With Love

For birds and the humans who love them.
