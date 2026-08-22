export interface Course {
  slug: string;
  title: string;
  description: string;
  tag: string;
  image: { src: string; alt: string };
}

/** The 3 home page courses — verbatim copy from the old site's #services section. */
export const COURSES: Course[] = [
  {
    slug: "quran-reading-tajweed",
    title: "Quran Reading with Tajweed",
    description:
      "Master Tajweed rules and fluent recitation from the basics. Perfect for all ages and beginners. Learn to read Quran correctly online.",
    tag: "Beginner Friendly",
    image: {
      src: "https://images.pexels.com/photos/34355095/pexels-photo-34355095.jpeg",
      alt: "Online Quran reading class with Tajweed rules for beginners",
    },
  },
  {
    slug: "online-hifz-program",
    title: "Online Hifz Program",
    description:
      "Complete Quran memorization online with proven techniques, daily revision, and accountability system. Memorize Quran at your own pace.",
    tag: "Most Popular",
    image: {
      src: "https://plus.unsplash.com/premium_photo-1678559460700-8a1d42ce8239?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0",
      alt: "Online Hifz program for Quran memorization with certified teacher",
    },
  },
  {
    slug: "tafsir-studies-online",
    title: "Tafsir Studies Online",
    description:
      "Context, stories, and scholarly explanations of verses. Understand the Quran with depth and wisdom through live online Tafsir classes.",
    tag: "Advanced",
    image: {
      src: "https://images.unsplash.com/photo-1652494154208-f74ee3e0a979?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0",
      alt: "Online Tafsir studies — Quran explanation and understanding course",
    },
  },
];
