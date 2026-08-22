import Image from "next/image";

import { WhatsAppCTA } from "@/components/cta/whatsapp-cta";
import { Reveal } from "@/components/shared/reveal";

const CHECKS = [
  "Separate male & female instructors available",
  "Free trial — zero commitment, zero risk",
  "Flexible scheduling across all time zones",
];

/** "Why Choose Us" about section with photo, ported from the old site's #about split layout. */
export function AboutSection() {
  return (
    <section id="about" className="bg-primary py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1644564930499-386ed55f97c5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Online Quran classroom — live 1-on-1 session via video call with certified teacher"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden aspect-[4/3] w-40 overflow-hidden rounded-2xl border-4 border-primary shadow-xl sm:block">
              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=200&auto=format&fit=crop"
                alt="Happy student after online Quran class"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-heading text-3xl leading-tight text-white sm:text-4xl">
            Authentic Learning, <em className="text-accent not-italic">Modern Delivery</em>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            Since 2012, Al Quran Academy has connected thousands of students with world-class
            online Quran teachers — all from the comfort of home.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            We understand that every student learns differently. Our certified qualified teachers
            tailor every lesson to your level, age, and goals — whether you&apos;re 5 or 55.
          </p>
          <ul className="mt-6 space-y-2.5">
            {CHECKS.map((check) => (
              <li key={check} className="flex items-center gap-2.5 text-sm text-white/90">
                <span className="text-accent">✓</span>
                {check}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <WhatsAppCTA label="Start Free Trial" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
