/** Shared block model for the 5 long-form SEO guide pages' body content. */
export type GuideBlock =
  | { kind: "intro"; text: string }
  | { kind: "p"; text: string }
  | { kind: "h2"; id?: string; text: string }
  | { kind: "h3"; text: string }
  | { kind: "tip"; text: string }
  | { kind: "warning"; text: string }
  | { kind: "list"; ordered?: boolean; items: string[] }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | {
      kind: "cards";
      items: { label: string; title: string; text: string; note?: string }[];
    }
  | { kind: "steps"; items: { title: string; text: string }[] }
  | { kind: "journey"; items: { title: string; text: string }[] }
  | {
      kind: "compare";
      good: { title: string; items: string[] };
      bad: { title: string; items: string[] };
    }
  | { kind: "testimonial"; quote: string; attribution: string }
  | { kind: "checklist"; title: string; items: string[] }
  | { kind: "highlight"; title: string; items: string[] }
  | { kind: "redFlags"; items: { title: string; text: string }[] };

export interface TocEntry {
  href: string;
  label: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideData {
  slug: string;
  /** Route path, e.g. "/best-quran-academy-for-beginners" — for canonical + schema URL. */
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  meta: string;
  datePublished: string;
  dateModified: string;
  intro: string;
  toc: TocEntry[];
  blocks: GuideBlock[];
  faqs: GuideFaq[];
  ctaTitle: string;
  ctaText: string;
  /** Optional HowTo schema steps (only the teacher-finding guide uses this). */
  howTo?: { name: string; description: string; steps: { name: string; text: string }[] };
}
