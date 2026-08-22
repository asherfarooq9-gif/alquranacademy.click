"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { TESTIMONIALS } from "@/content/testimonials";

const AUTOPLAY_MS = 5000;

/** Small autoplaying testimonial slider matching the old site's 5s script.js autoplay. */
export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((current) => (current + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [count]);

  const testimonial = TESTIMONIALS[index];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border sm:p-10">
        <div className="flex items-center justify-between">
          <span className="text-accent" aria-hidden="true">
            ★★★★★
          </span>
          <span className="text-2xl" aria-hidden="true">
            {testimonial.flag}
          </span>
        </div>
        <blockquote className="mt-5 text-base leading-relaxed text-foreground">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full">
            <Image src={testimonial.avatar.src} alt={testimonial.avatar.alt} fill sizes="48px" className="object-cover" />
          </div>
          <div>
            <strong className="block text-sm text-foreground">{testimonial.name}</strong>
            <span className="text-xs text-muted-foreground">{testimonial.meta}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setIndex((current) => (current - 1 + count) % count)}
          className="flex size-9 items-center justify-center rounded-full bg-card text-foreground ring-1 ring-border transition hover:bg-muted"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((item, dotIndex) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Go to testimonial ${dotIndex + 1}`}
              aria-current={dotIndex === index}
              onClick={() => setIndex(dotIndex)}
              className={`size-2 rounded-full transition-opacity ${
                dotIndex === index ? "bg-primary opacity-100" : "bg-primary opacity-30"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setIndex((current) => (current + 1) % count)}
          className="flex size-9 items-center justify-center rounded-full bg-card text-foreground ring-1 ring-border transition hover:bg-muted"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
