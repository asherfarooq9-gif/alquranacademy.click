import Image from "next/image";

import { WhatsAppCTA } from "@/components/cta/whatsapp-cta";
import { Reveal } from "@/components/shared/reveal";
import { StatCounter } from "@/components/shared/stat-counter";
import { STUDENT_COUNT_RAW } from "@/lib/constants";

/** Home page hero — split text/photo layout, replaces the old site's three.js hero canvas. */
export function Hero() {
  return (
    <section className="overflow-hidden bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-border">
              <span className="size-1.5 rounded-full bg-accent" />
              FREE 3-Day Trial — No Credit Card Required
            </span>
          </Reveal>

          <Reveal delayMs={80}>
            <h1 className="mt-6 font-heading text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Online Quran Academy
              <br />
              Learn with <em className="text-primary not-italic">Certified Scholars</em>
            </h1>
          </Reveal>

          <Reveal delayMs={140}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:mx-0">
              Learn Quran online with 1-on-1 classes in Tajweed, Hifz &amp; Tafsir. Trusted by{" "}
              <strong className="text-foreground">50+ students</strong> across 15+ countries
              since 2012. Free 3-day trial — no commitment required.
            </p>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <WhatsAppCTA label="Chat on WhatsApp" />
              <a
                href="#services"
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                View Courses →
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={260}>
            <div className="mt-12 flex justify-center gap-8 sm:gap-12 lg:justify-start">
              <StatCounter target={STUDENT_COUNT_RAW} suffix="+" label="Students" />
              <StatCounter target={15} suffix="+" label="Countries" />
              <StatCounter target={4.9} decimal label="Rating /5" />
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={120}>
          <div className="relative mx-auto max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1710013930512-bfda38a14450?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Student learning Quran online with certified teacher in 1-on-1 class"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/35 to-transparent" />
            </div>
            <div className="absolute -top-4 right-4 rounded-xl bg-accent px-4 py-2 text-center shadow-lg sm:-right-6">
              <strong className="block font-heading text-xl leading-none text-accent-foreground">
                12+
              </strong>
              <span className="text-[10px] uppercase tracking-wide text-accent-foreground/80">
                Years Teaching
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
