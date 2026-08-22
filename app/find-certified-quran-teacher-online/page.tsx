import type { Metadata } from "next";

import { GuidePage } from "@/components/guides/guide-page";
import { findCertifiedQuranTeacherOnline as guide } from "@/content/guides/find-certified-quran-teacher-online";
import { buildCanonicalUrl, buildPageMetadata } from "@/lib/seo";
import { buildArticleSchema, buildFAQSchema, buildHowToSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: guide.metaTitle,
  description: guide.metaDescription,
  path: guide.path,
  type: "article",
});

export default function Page() {
  const articleSchema = buildArticleSchema({
    headline: guide.h1,
    description: guide.metaDescription,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    url: buildCanonicalUrl(guide.path),
  });
  const faqSchema = buildFAQSchema(guide.faqs);
  const howToSchema = guide.howTo
    ? buildHowToSchema(guide.howTo.name, guide.howTo.description, guide.howTo.steps)
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <GuidePage data={guide} />
    </>
  );
}
