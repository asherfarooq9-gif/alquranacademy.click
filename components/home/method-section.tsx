import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

/**
 * "Our Method" section. The old site's pulsing "Live" orb badge is kept as pure CSS
 * ambient motion (static-position, not a canvas) — it doesn't reintroduce the removed
 * three.js showcase scene.
 */
export function MethodSection() {
  return (
    <section id="method" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Our Method"
            title={
              <>
                A <em className="text-primary not-italic">Modern Approach</em> to Sacred Learning
              </>
            }
          />
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mt-14 flex flex-col items-center gap-10 rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border sm:flex-row sm:p-12">
            <div className="relative flex size-28 shrink-0 items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
              <span className="absolute inset-3 rounded-full bg-accent/20" />
              <span className="relative flex size-16 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                Live
              </span>
            </div>
            <div>
              <h3 className="font-heading text-xl text-foreground">
                1-on-1 Live Online Quran Classes
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                Personal attention from certified Quran teachers via video call. Screen sharing,
                digital Quran board, instant pronunciation feedback. Your pace, your schedule.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
