<<<<<<< HEAD
export type Bookmark = {
  id: string;
  title: string;
  url: string;
  description: string;
  favicon: string;
  collectionId: string;
  tags: string[];
  createdAt: string;
  isFavorite: boolean;
  hasDarkIcon?: boolean;
};

export type Collection = {
  id: string;
=======
import { Bookmark, Tag } from "@/types";

export type Collection = {
  _id: string;
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
  name: string;
  icon: string;
  color: string;
  count: number;
};

<<<<<<< HEAD
export type Tag = {
  id: string;
  name: string;
  color: string;
  count: number;
};

export const collections: Collection[] = [
  {
    id: "all",
=======


export const collections: Collection[] = [
  {
    _id: "all",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "All Bookmarks",
    icon: "bookmark",
    color: "neutral",
    count: 24,
  },
  {
<<<<<<< HEAD
    id: "design",
=======
    _id: "design",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "Design Resources",
    icon: "palette",
    color: "violet",
    count: 8,
  },
<<<<<<< HEAD
  { id: "dev", name: "Development", icon: "code", color: "blue", count: 12 },
  { id: "tools", name: "Tools", icon: "wrench", color: "amber", count: 6 },
  {
    id: "reading",
=======
  { _id: "dev", name: "Development", icon: "code", color: "blue", count: 12 },
  { _id: "tools", name: "Tools", icon: "wrench", color: "amber", count: 6 },
  {
    _id: "reading",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "Reading List",
    icon: "book-open",
    color: "emerald",
    count: 4,
  },
  {
<<<<<<< HEAD
    id: "inspiration",
=======
    _id: "inspiration",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "Inspiration",
    icon: "sparkles",
    color: "pink",
    count: 5,
  },
];

export const tags: Tag[] = [
  {
<<<<<<< HEAD
    id: "react",
=======
    _id: "react",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "React",
    color: "bg-blue-500/10 text-blue-500",
    count: 8,
  },
  {
<<<<<<< HEAD
    id: "typescript",
=======
    _id: "typescript",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "TypeScript",
    color: "bg-blue-600/10 text-blue-600",
    count: 6,
  },
  {
<<<<<<< HEAD
    id: "ui",
=======
    _id: "ui",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "UI/UX",
    color: "bg-violet-500/10 text-violet-500",
    count: 5,
  },
  {
<<<<<<< HEAD
    id: "nextjs",
=======
    _id: "nextjs",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "Next.js",
    color: "bg-foreground/10 text-foreground",
    count: 4,
  },
  {
<<<<<<< HEAD
    id: "tailwind",
=======
    _id: "tailwind",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "Tailwind",
    color: "bg-cyan-500/10 text-cyan-500",
    count: 7,
  },
  {
<<<<<<< HEAD
    id: "tutorial",
=======
    _id: "tutorial",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "Tutorial",
    color: "bg-emerald-500/10 text-emerald-500",
    count: 3,
  },
  {
<<<<<<< HEAD
    id: "docs",
=======
    _id: "docs",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "Documentation",
    color: "bg-amber-500/10 text-amber-500",
    count: 5,
  },
  {
<<<<<<< HEAD
    id: "free",
=======
    _id: "free",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    name: "Free",
    color: "bg-green-500/10 text-green-500",
    count: 4,
  },
];

export const bookmarks: Bookmark[] = [
  {
<<<<<<< HEAD
    id: "1",
    title: "Shadcn UI",
    url: "https://ui.shadcn.com",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS.",
    favicon: "https://www.google.com/s2/favicons?domain=ui.shadcn.com&sz=64",
    collectionId: "dev",
=======
    _id: "1",
    title: "Shadcn UI",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS.",
    favicon: "https://www.google.com/s2/favicons?domain=ui.shadcn.com&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["react", "ui", "tailwind"],
    createdAt: "2024-01-15",
    isFavorite: true,
    hasDarkIcon: true,
  },
  {
<<<<<<< HEAD
    id: "2",
    title: "Vercel",
    url: "https://vercel.com",
    description:
      "Develop. Preview. Ship. The best frontend developer experience.",
    favicon: "https://www.google.com/s2/favicons?domain=vercel.com&sz=64",
    collectionId: "dev",
=======
    _id: "2",
    title: "Vercel",
    description:
      "Develop. Preview. Ship. The best frontend developer experience.",
    favicon: "https://www.google.com/s2/favicons?domain=vercel.com&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["nextjs"],
    createdAt: "2024-01-14",
    isFavorite: true,
    hasDarkIcon: true,
  },
  {
<<<<<<< HEAD
    id: "3",
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description: "A utility-first CSS framework for rapid UI development.",
    favicon: "https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=64",
    collectionId: "dev",
=======
    _id: "3",
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rap_id UI development.",
    favicon: "https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["tailwind", "docs"],
    createdAt: "2024-01-13",
    isFavorite: false,
  },
  {
<<<<<<< HEAD
    id: "4",
    title: "Figma",
    url: "https://figma.com",
    description: "The collaborative interface design tool.",
    favicon: "https://www.google.com/s2/favicons?domain=figma.com&sz=64",
    collectionId: "design",
=======
    _id: "4",
    title: "Figma",
    description: "The collaborative interface design tool.",
    favicon: "https://www.google.com/s2/favicons?domain=figma.com&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["ui", "free"],
    createdAt: "2024-01-12",
    isFavorite: true,
  },
  {
<<<<<<< HEAD
    id: "5",
    title: "Dribbble",
    url: "https://dribbble.com",
    description: "Discover the world's top designers & creatives.",
    favicon: "https://www.google.com/s2/favicons?domain=dribbble.com&sz=64",
    collectionId: "inspiration",
=======
    _id: "5",
    title: "Dribbble",
    description: "Discover the world's top designers & creatives.",
    favicon: "https://www.google.com/s2/favicons?domain=dribbble.com&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["ui"],
    createdAt: "2024-01-11",
    isFavorite: false,
  },
  {
<<<<<<< HEAD
    id: "6",
    title: "React Documentation",
    url: "https://react.dev",
    description: "The library for web and native user interfaces.",
    favicon: "https://www.google.com/s2/favicons?domain=react.dev&sz=64",
    collectionId: "dev",
=======
    _id: "6",
    title: "React Documentation",
    description: "The library for web and native user interfaces.",
    favicon: "https://www.google.com/s2/favicons?domain=react.dev&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["react", "docs", "tutorial"],
    createdAt: "2024-01-10",
    isFavorite: true,
  },
  {
<<<<<<< HEAD
    id: "7",
    title: "TypeScript Handbook",
    url: "https://typescriptlang.org",
    description: "TypeScript is JavaScript with syntax for types.",
    favicon:
      "https://www.google.com/s2/favicons?domain=typescriptlang.org&sz=64",
    collectionId: "dev",
=======
    _id: "7",
    title: "TypeScript Handbook",
    description: "TypeScript is JavaScript with syntax for types.",
    favicon:
      "https://www.google.com/s2/favicons?domain=typescriptlang.org&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["typescript", "docs"],
    createdAt: "2024-01-09",
    isFavorite: false,
  },
  {
<<<<<<< HEAD
    id: "8",
    title: "Next.js Documentation",
    url: "https://nextjs.org",
    description: "The React Framework for the Web.",
    favicon: "https://www.google.com/s2/favicons?domain=nextjs.org&sz=64",
    collectionId: "dev",
=======
    _id: "8",
    title: "Next.js Documentation",
    description: "The React Framework for the Web.",
    favicon: "https://www.google.com/s2/favicons?domain=nextjs.org&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["nextjs", "react", "docs"],
    createdAt: "2024-01-08",
    isFavorite: true,
    hasDarkIcon: true,
  },
  {
<<<<<<< HEAD
    id: "9",
    title: "Lucide Icons",
    url: "https://lucide.dev",
    description: "Beautiful & consistent icon toolkit made by the community.",
    favicon: "https://www.google.com/s2/favicons?domain=lucide.dev&sz=64",
    collectionId: "tools",
=======
    _id: "9",
    title: "Luc_ide Icons",
    description: "Beautiful & consistent icon toolkit made by the community.",
    favicon: "https://www.google.com/s2/favicons?domain=luc_ide.dev&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["ui", "free"],
    createdAt: "2024-01-07",
    isFavorite: false,
  },
  {
<<<<<<< HEAD
    id: "10",
    title: "Radix UI",
    url: "https://radix-ui.com",
    description: "Unstyled, accessible components for building design systems.",
    favicon: "https://www.google.com/s2/favicons?domain=radix-ui.com&sz=64",
    collectionId: "dev",
=======
    _id: "10",
    title: "Radix UI",
    description: "Unstyled, accessible components for building design systems.",
    favicon: "https://www.google.com/s2/favicons?domain=radix-ui.com&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["react", "ui"],
    createdAt: "2024-01-06",
    isFavorite: false,
    hasDarkIcon: true,
  },
  {
<<<<<<< HEAD
    id: "11",
    title: "Linear",
    url: "https://linear.app",
    description: "The issue tracking tool you'll enjoy using.",
    favicon: "https://www.google.com/s2/favicons?domain=linear.app&sz=64",
    collectionId: "tools",
=======
    _id: "11",
    title: "Linear",
    description: "The issue tracking tool you'll enjoy using.",
    favicon: "https://www.google.com/s2/favicons?domain=linear.app&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: [],
    createdAt: "2024-01-05",
    isFavorite: true,
  },
  {
<<<<<<< HEAD
    id: "12",
    title: "Notion",
    url: "https://notion.so",
    description:
      "The all-in-one workspace for your notes, tasks, wikis, and databases.",
    favicon: "https://www.google.com/s2/favicons?domain=notion.so&sz=64",
    collectionId: "tools",
=======
    _id: "12",
    title: "Notion",
    description:
      "The all-in-one workspace for your notes, tasks, wikis, and databases.",
    favicon: "https://www.google.com/s2/favicons?domain=notion.so&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["free"],
    createdAt: "2024-01-04",
    isFavorite: false,
    hasDarkIcon: true,
  },
  {
<<<<<<< HEAD
    id: "13",
    title: "Awwwards",
    url: "https://awwwards.com",
    description:
      "The awards of design, creativity and innovation on the internet.",
    favicon: "https://www.google.com/s2/favicons?domain=awwwards.com&sz=64",
    collectionId: "inspiration",
=======
    _id: "13",
    title: "Awwwards",
    description:
      "The awards of design, creativity and innovation on the internet.",
    favicon: "https://www.google.com/s2/favicons?domain=awwwards.com&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["ui"],
    createdAt: "2024-01-03",
    isFavorite: false,
  },
  {
<<<<<<< HEAD
    id: "14",
    title: "Frontend Masters",
    url: "https://frontendmasters.com",
    description: "Advance your skills with in-depth, modern front-end courses.",
    favicon:
      "https://www.google.com/s2/favicons?domain=frontendmasters.com&sz=64",
    collectionId: "reading",
=======
    _id: "14",
    title: "Frontend Masters",
    description: "Advance your skills with in-depth, modern front-end courses.",
    favicon:
      "https://www.google.com/s2/favicons?domain=frontendmasters.com&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["tutorial", "react", "typescript"],
    createdAt: "2024-01-02",
    isFavorite: false,
  },
  {
<<<<<<< HEAD
    id: "15",
    title: "CSS Tricks",
    url: "https://css-tricks.com",
    description:
      "Daily articles about CSS, HTML, JavaScript, and all things web design.",
    favicon: "https://www.google.com/s2/favicons?domain=css-tricks.com&sz=64",
    collectionId: "reading",
=======
    _id: "15",
    title: "CSS Tricks",
    description:
      "Daily articles about CSS, HTML, JavaScript, and all things web design.",
    favicon: "https://www.google.com/s2/favicons?domain=css-tricks.com&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["tutorial", "tailwind"],
    createdAt: "2024-01-01",
    isFavorite: false,
  },
  {
<<<<<<< HEAD
    id: "16",
    title: "Framer",
    url: "https://framer.com",
    description: "Ship sites with unmatched speed and style.",
    favicon: "https://www.google.com/s2/favicons?domain=framer.com&sz=64",
    collectionId: "design",
=======
    _id: "16",
    title: "Framer",
    description: "Ship sites with unmatched speed and style.",
    favicon: "https://www.google.com/s2/favicons?domain=framer.com&sz=64",
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    tags: ["ui"],
    createdAt: "2023-12-31",
    isFavorite: true,
    hasDarkIcon: true,
  },
];
