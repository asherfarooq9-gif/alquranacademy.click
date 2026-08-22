export interface Testimonial {
  quote: string;
  name: string;
  meta: string;
  flag: string;
  avatar: { src: string; alt: string };
}

/** All 6 testimonials, verbatim from the old site's #testimonials slider. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "My 8-year-old son went from zero to reading fluently in 4 months. The teacher is so patient and uses games to keep him engaged. Absolutely worth every penny.",
    name: "Sarah M.",
    meta: "USA · Mother of Student",
    flag: "🇺🇸",
    avatar: {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&auto=format&fit=crop&q=80",
      alt: "Sarah M. — USA parent, student of Al Quran Academy",
    },
  },
  {
    quote:
      "I tried 3 other academies. This is the only one where I actually finished memorizing Juz Amma. The revision system works perfectly. My teacher never gives up on me.",
    name: "Ahmed K.",
    meta: "UK · Hifz Student",
    flag: "🇬🇧",
    avatar: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&auto=format&fit=crop&q=80",
      alt: "Ahmed K. — UK Hifz student at Al Quran Academy",
    },
  },
  {
    quote:
      "As a revert, I was nervous to start. My teacher explains everything in English first. Now I can read with proper Tajweed — it has completely transformed my Salah.",
    name: "Jessica R.",
    meta: "Canada · Adult Student",
    flag: "🇨🇦",
    avatar: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&auto=format&fit=crop&q=80",
      alt: "Jessica R. — Canadian adult student learning Quran online",
    },
  },
  {
    quote:
      "Both my daughters take classes here. The female teacher option was important for our family. The monthly progress reports keep us motivated and informed every step.",
    name: "Fatima A.",
    meta: "Australia · Parent",
    flag: "🇦🇺",
    avatar: {
      src: "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?w=96&auto=format&fit=crop&q=80",
      alt: "Fatima A. — Australian parent with daughters enrolled at Al Quran Academy",
    },
  },
  {
    quote:
      "The Tafsir classes opened my eyes to a whole new dimension of the Quran. Sheikh explains context, history and wisdom in a way that is clear, deep, and truly inspiring.",
    name: "Omar B.",
    meta: "Germany · Tafsir Student",
    flag: "🇩🇪",
    avatar: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&auto=format&fit=crop&q=80",
      alt: "Omar B. — German Tafsir student at Al Quran Academy",
    },
  },
  {
    quote:
      "I enrolled my 10-year-old during lockdown and never looked back. She memorized 5 Juz in one year. The teacher's dedication and love for students is unmatched anywhere.",
    name: "Nadia A.",
    meta: "South Africa · Parent",
    flag: "🇿🇦",
    avatar: {
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=96&auto=format&fit=crop&q=80",
      alt: "Nadia A. — South African parent, daughter memorized 5 Juz online",
    },
  },
];
