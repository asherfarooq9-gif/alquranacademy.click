import type { Metadata } from "next";

import { WhatsAppCTA } from "@/components/cta/whatsapp-cta";
import { FaqCategoryNav } from "@/components/faq/faq-category-nav";
import { FaqGroupList } from "@/components/faq/faq-group-list";
import { PageHero } from "@/components/shared/page-hero";
import { FAQ_GROUPS } from "@/content/faq-groups";
import { buildPageMetadata } from "@/lib/seo";
import { buildFAQSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Frequently Asked Questions | Al Quran Academy",
  description:
    "Got questions about our online Quran classes? Find answers about pricing, free trial, courses, teachers, scheduling and more. Al Quran Academy FAQ.",
  path: "/faq",
});

export default function FaqPage() {
  const allEntries = FAQ_GROUPS.flatMap((group) => group.items);
  const faqSchema = buildFAQSchema(allEntries);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        title={
          <>
            Frequently Asked <em className="text-accent not-italic">Questions</em>
          </>
        }
        description="Everything you need to know before enrolling. Can't find your answer? Message us on WhatsApp."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[200px_1fr]">
          <FaqCategoryNav />
          <div>
            <FaqGroupList />

            <div className="mt-14 rounded-2xl bg-primary p-10 text-center">
              <h3 className="font-heading text-2xl text-white">Still Have Questions?</h3>
              <p className="mt-3 text-sm text-white/75">
                Message us on WhatsApp — we reply within minutes, 24/7.
              </p>
              <div className="mt-6 flex justify-center">
                <WhatsAppCTA
                  label="Chat on WhatsApp"
                  message="Hi! I have a question that wasn't covered in your FAQ."
                />
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-white/60">
                <span>✓ Reply within minutes</span>
                <span>✓ Available 24/7</span>
                <span>✓ English &amp; Urdu</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
