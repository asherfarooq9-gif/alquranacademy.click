import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialsSlider } from "@/components/home/testimonials-slider";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Student Reviews"
            title={
              <>
                Trusted by <em className="text-primary not-italic">Families Worldwide</em>
              </>
            }
          />
        </Reveal>
        <div className="mt-14">
          <Reveal delayMs={100}>
            <TestimonialsSlider />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
