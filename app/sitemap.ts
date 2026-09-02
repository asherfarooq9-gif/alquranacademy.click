import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";
import { bestQuranAcademyForBeginners } from "@/content/guides/best-quran-academy-for-beginners";
import { femaleQuranTeacherOnline } from "@/content/guides/female-quran-teacher-online";
import { findCertifiedQuranTeacherOnline } from "@/content/guides/find-certified-quran-teacher-online";
import { onlineQuranAcademyCost } from "@/content/guides/online-quran-academy-cost";
import { onlineQuranClassesForKids } from "@/content/guides/online-quran-classes-for-kids";
import { quranTeacherQualifications } from "@/content/guides/quran-teacher-qualifications";
import { quranTrialClasses } from "@/content/guides/quran-trial-classes";

const GUIDES = [
  bestQuranAcademyForBeginners,
  femaleQuranTeacherOnline,
  findCertifiedQuranTeacherOnline,
  onlineQuranAcademyCost,
  onlineQuranClassesForKids,
  quranTeacherQualifications,
  quranTrialClasses,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const guidePages: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${SITE_URL}${guide.path}`,
    lastModified: new Date(guide.dateModified),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticPages, ...guidePages];
}
