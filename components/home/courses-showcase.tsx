import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { COURSES } from "@/content/courses";

const SLIDES: CoverflowSlide[] = COURSES.map((course) => ({
  src: course.image.src,
  alt: course.image.alt,
  title: course.title,
  subtitle: course.description,
  meta: [{ label: "Level", value: course.tag }],
}));

/**
 * Replaces the old site's 3-card course grid with the coverflow carousel — the one
 * interactive showcase moment that also stands in for the removed hero 3D scene.
 */
export function CoursesShowcase() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Our Courses"
            title={
              <>
                Learn Quran Online with <em className="text-primary not-italic">Purpose &amp; Clarity</em>
              </>
            }
            description="Structured online Quran programs from beginner to advanced, taught by certified Qaris."
          />
        </Reveal>

        <div className="mt-14">
          <CoverflowCarousel
            slides={SLIDES}
            showCaption
            showPagination
            showNavigation
            label="Al Quran Academy courses"
          />
        </div>
      </div>
    </section>
  );
}
