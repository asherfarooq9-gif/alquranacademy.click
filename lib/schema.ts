import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  FOUNDING_DATE,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_URL,
} from "@/lib/constants";

type JsonLd = Record<string, unknown>;

/** Sitewide EducationalOrganization schema — rendered once in app/layout.tsx. */
export function buildOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    alternateName: "Online Quran Academy",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      "Learn Quran online with certified qualified teachers. 1-on-1 classes in Tajweed, Hifz, and Tafsir for kids and adults. Free 3-day trial. 928+ students in 15+ countries since 2012.",
    foundingDate: FOUNDING_DATE,
    address: {
      "@type": "PostalAddress",
      addressLocality: ADDRESS_LOCALITY,
      addressCountry: ADDRESS_COUNTRY,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-343-0565179",
      contactType: "customer service",
      availableLanguage: ["English", "Urdu", "Arabic"],
    },
    sameAs: [WHATSAPP_URL],
    /**
     * No aggregateRating here on purpose: Google requires review-schema
     * markup to reflect genuine, publicly verifiable reviews. Add this back
     * once real Trustpilot/Google/Facebook reviews exist to source it from.
     */
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Online Quran Courses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Quran Reading with Tajweed",
            description:
              "Learn to read Quran with proper Tajweed rules. Beginner-friendly online classes for all ages.",
            provider: { "@type": "Organization", name: SITE_NAME },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Online Hifz Program",
            description:
              "Complete Quran memorization online with proven techniques and daily revision system.",
            provider: { "@type": "Organization", name: SITE_NAME },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Tafsir Studies Online",
            description:
              "Advanced online Tafsir classes with scholarly explanations of Quranic verses.",
            provider: { "@type": "Organization", name: SITE_NAME },
          },
        },
      ],
    },
  };
}

export interface FaqEntry {
  question: string;
  answer: string;
}

/** FAQPage schema — used on /faq and every guide page with an FAQ section. */
export function buildFAQSchema(entries: FaqEntry[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
}

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
  imageUrl?: string;
}

/** Article + ImageObject schema for the 5 long-form guide pages. */
export function buildArticleSchema(input: ArticleSchemaInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    ...(input.imageUrl
      ? { image: { "@type": "ImageObject", url: input.imageUrl } }
      : {}),
  };
}

export interface HowToStepInput {
  name: string;
  text: string;
}

/** HowTo schema — used on the teacher-finding guide. */
export function buildHowToSchema(name: string, description: string, steps: HowToStepInput[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
    })),
  };
}
