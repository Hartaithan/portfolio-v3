import type { ProjectItem } from "@/models/project";

export const projects: ProjectItem[] = [
  {
    id: "breeween",
    label: "Breeween",
    category: "Web App | Angular",
    description:
      "A practice project in Angular for building a web audio player. Users can add recordings to a Firebase Database. The audio player supports rewinding, volume control, and pause/resume functions. Audio control logic is encapsulated in a dedicated service",
    image: "/projects/breeween.webp",
    tags: ["Angular", "Firebase", "Audio Player", "Material Table"],
    links: [
      {
        icon: "github",
        href: "https://github.com/Hartaithan/breeween",
      },
      {
        icon: "external",
        href: "https://breeween.vercel.app",
      },
    ],
  },
  {
    id: "ramutable",
    label: "Ramutable",
    category: "Web App | Nuxt",
    description:
      "A project to practice with Nuxt, using SSR (Server-Side Rendering) for efficient page rendering. Pagination is handled through query parameters, and the UI is styled with Tailwind CSS",
    image: "/projects/ramutable.webp",
    tags: ["Vue", "Nuxt.JS", "Tailwind", "SSR"],
    links: [
      {
        icon: "github",
        href: "https://github.com/Hartaithan/ramutable",
      },
      {
        icon: "external",
        href: "https://ramutable.vercel.app",
      },
    ],
  },
  {
    id: "dimension-c-137",
    label: "Dimension C-137",
    category: "Web App | Angular",
    description:
      "An Angular project utilizing Apollo Client for data fetching. The app provides two views: Table and Cards, both equipped with Infinite Scroll",
    image: "/projects/dimension-c137.webp",
    tags: [
      "Angular",
      "Apollo Client",
      "Infinite Scroll",
      "NGRX",
      "Material Table",
    ],
    links: [
      {
        icon: "github",
        href: "https://github.com/Hartaithan/dimension-c137",
      },
      {
        icon: "external",
        href: "https://dimension-c137.vercel.app",
      },
    ],
  },
  {
    id: "trophy-list-fetcher",
    label: "Trophy List Fetcher",
    category: "Web App | Next.JS",
    description:
      "A tool designed to fetch trophy lists from PSNProfiles by parsing, or directly from the PSN API with authorization. This app automates trophy list imports",
    image: "/projects/trophy-list-fetcher.webp",
    tags: ["Next.JS", "PSN", "Automation", "Cheerio"],
    links: [
      {
        icon: "github",
        href: "https://github.com/Hartaithan/trophy-list-fetcher",
      },
      {
        icon: "external",
        href: "https://trophy-list-fetcher.vercel.app",
      },
    ],
  },
  {
    id: "image-aware-background",
    label: "Image Aware Background",
    category: "Web App | Vue",
    description:
      "An app that extracts the primary and five most frequently used colors from an uploaded image, implemented using the Canvas API",
    image: "/projects/image-aware-background.webp",
    tags: ["Vue", "TypeScript", "Canvas API"],
    links: [
      {
        icon: "github",
        href: "https://github.com/Hartaithan/image-aware-background",
      },
      {
        icon: "external",
        href: "https://image-aware-background.vercel.app",
      },
    ],
  },
  {
    id: "next-posts",
    label: "Next Posts",
    category: "Web App | Next.JS",
    description:
      "A simple news website where authorized users can create posts, rate them, and leave comments. User authentication is done via Magic Link, posts are stored in Supabase, and the UI is built with Mantine",
    image: "/projects/next-posts.webp",
    tags: ["Next.JS", "SSR", "Mantine", "Supabase", "Cloudinary", "Magic Link"],
    links: [
      {
        icon: "github",
        href: "https://github.com/Hartaithan/next-posts",
      },
      {
        icon: "external",
        href: "https://next-posts-hartaithan.vercel.app",
      },
    ],
  },
  {
    id: "image-editor",
    label: "Image Editor",
    category: "Web App | Vue",
    description:
      "A web-based version of the Snipping Tool. Users can upload image, annotate them, and save edited image. Import and export work from both files and the clipboard",
    image: "/projects/image-editor.webp",
    tags: ["Vue", "Vuex", "Canvas API"],
    links: [
      {
        icon: "github",
        href: "https://github.com/Hartaithan/image-editor",
      },
      {
        icon: "external",
        href: "https://image-editor-hartaithan.vercel.app",
      },
    ],
  },
  {
    id: "camo-tracker",
    label: "Camo Tracker",
    description:
      "A Camo Tracker app for Black Ops Cold War, built with the MERN stack. JWT tokens handle authentication, user progress is managed by Redux, and data is stored in MongoDB. The design is optimized for both desktop and mobile",
    category: "Web App | React | Express",
    image: "/projects/camo-tracker.webp",
    tags: [
      "Node.JS",
      "Express.JS",
      "MongoDB",
      "React",
      "React Router Dom",
      "Redux",
    ],
    links: [
      {
        icon: "github",
        href: "https://github.com/Hartaithan/camo-tracker-v2",
      },
      {
        icon: "external",
        href: "https://camo-tracker-hartaithan.vercel.app",
      },
    ],
  },
  {
    id: "a-z",
    label: "A-Z",
    description:
      "A small alphabet-based text puzzle game, written in Kotlin. The Volley library handles HTTP requests for the online leaderboard",
    category: "Mobile Game | Android",
    image: "/projects/a-z.webp",
    tags: ["Android", "Kotlin", "Volley"],
    links: [
      {
        icon: "google-play",
        href: "https://play.google.com/store/apps/details?id=com.hartaithan.a_z",
      },
      {
        icon: "external",
        href: "https://hartaithan.github.io/a-z",
      },
    ],
  },
];