import { WhatsAppCTA } from "@/components/cta/whatsapp-cta";
import { Reveal } from "@/components/shared/reveal";

const TRUST_ITEMS = ["No credit card", "Cancel anytime", "Certified teachers"];

/** Final home page CTA, ported from the old site's #cta section. */
export function CtaSection() {
  return (
    <section className="bg-primary py-20 text-center sm:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-accent">
            Limited Spots Available
          </span>
          <h2 className="mt-5 font-heading text-3xl leading-tight text-white sm:text-4xl">
            Begin Your <em className="text-accent not-italic">Quran Journey</em> Today
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            Join 928+ students learning Quran online with certified scholars. Your first 3 days
            are completely free — no commitment required.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTA label="Claim Free Trial" />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
            {TRUST_ITEMS.map((item) => (
              <span key={item}>✓ {item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
