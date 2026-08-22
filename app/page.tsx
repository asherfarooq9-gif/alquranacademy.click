import type { Metadata } from "next";

import { AboutSection } from "@/components/home/about-section";
import { CoursesShowcase } from "@/components/home/courses-showcase";
import { CtaSection } from "@/components/home/cta-section";
import { Hero } from "@/components/home/hero";
import { MethodSection } from "@/components/home/method-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Al Quran Academy | Online Quran Classes | Tajweed, Hifz & Tafsir | Free Trial",
  description:
    "Learn Quran online with certified qualified teachers. 1-on-1 classes in Tajweed, Hifz & Tafsir for kids and adults. 928+ students in 15+ countries since 2012. Free 3-day trial — no credit card.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoursesShowcase />
      <AboutSection />
      <MethodSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
