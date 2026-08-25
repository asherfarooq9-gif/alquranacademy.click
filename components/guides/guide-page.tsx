import { WhatsAppCTA } from "@/components/cta/whatsapp-cta";
import { GuideBlockView } from "@/components/guides/guide-blocks";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { PageHero } from "@/components/shared/page-hero";
import type { GuideData } from "@/content/guides/types";

/** Shared Hero + Content + FaqAccordion + CTA shape reused by all 5 long-form guide pages. */
export function GuidePage({ data }: { data: GuideData }) {
  return (
    <>
      <PageHero title={data.h1} />

      <article className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs text-muted-foreground">{data.meta}</p>

          <p className="mt-6 rounded-lg border-l-4 border-accent bg-secondary px-6 py-5 text-lg text-foreground">
            {data.intro}
          </p>

          {data.toc.length > 0 && (
            <nav className="mt-8 rounded-xl border border-border bg-card p-6">
              <h2 className="font-heading text-base text-foreground">In This Guide</h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm">
                {data.toc.map((entry) => (
                  <li key={entry.href}>
                    <a href={entry.href} className="text-primary hover:underline">
                      {entry.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="mt-10 space-y-6">
            {data.blocks.map((block, index) => (
              <GuideBlockView key={index} block={block} />
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-primary p-10 text-center">
            <h3 className="font-heading text-2xl text-white">{data.ctaTitle}</h3>
            <p className="mt-3 text-sm text-white/75">{data.ctaText}</p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCTA
              label="Start Free Trial"
              message={`Hi! I read your guide "${data.h1}" and would like to claim my free 3-day trial.`}
            />
            </div>
          </div>

          <div id="faq" className="mt-14 scroll-mt-24">
            <h2 className="font-heading text-2xl text-foreground">Frequently Asked Questions</h2>
            <div className="mt-6">
              <FaqAccordion items={data.faqs} idPrefix={data.slug} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
