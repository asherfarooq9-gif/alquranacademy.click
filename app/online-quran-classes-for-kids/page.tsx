import type { Metadata } from "next";

import { GuidePage } from "@/components/guides/guide-page";
import { onlineQuranClassesForKids as guide } from "@/content/guides/online-quran-classes-for-kids";
import { buildCanonicalUrl, buildPageMetadata } from "@/lib/seo";
import { buildArticleSchema, buildFAQSchema } from "@/lib/schema";

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
      <GuidePage data={guide} />
    </>
  );
}
