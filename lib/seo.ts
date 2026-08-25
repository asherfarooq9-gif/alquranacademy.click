import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/constants";

export interface PageMetadataInput {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/pricing" or "/best-quran-academy-for-beginners". */
  path: string;
  /** Set for Article pages (the 5 guides). */
  type?: "website" | "article";
  imagePath?: string;
}

const DEFAULT_OG_IMAGE = "/images/og-image.jpg";

/**
 * Builds the real reachable URL for a route path on the live Vercel deployment:
 * the home page serves at "/", every other route serves at "<path>" (no
 * extension — Vercel runs the app natively, it does not serve flat .html files).
 * Used for canonical tags and JSON-LD `url`/`mainEntityOfPage`.
 */
export function buildCanonicalUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/**
 * Builds a page's export const metadata object — title/description/canonical/OG/Twitter —
 * from one input so visible copy and metadata never drift apart.
 */
export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const canonical = buildCanonicalUrl(input.path);
  const image = `${SITE_URL}${input.imagePath ?? DEFAULT_OG_IMAGE}`;

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical },
    openGraph: {
      type: input.type ?? "website",
      url: canonical,
      title: input.title,
      description: input.description,
      siteName: SITE_NAME,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}
